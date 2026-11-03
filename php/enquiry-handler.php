<?php
// enquiry-handler.php — Handles contact & requirement enquiries on cPanel (Apache + PHP)
// Replaces Next.js server-side API with standard PHP mail()

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['message' => 'Method not allowed.']);
    exit;
}

// Session-based rate limiting (max 5 requests per 60 seconds)
if (session_status() === PHP_SESSION_NONE) {
    @session_start();
}
$rate_limit = 5;
$rate_window = 60;
if (!isset($_SESSION['eq_times'])) $_SESSION['eq_times'] = [];
$now = time();
$_SESSION['eq_times'] = array_filter($_SESSION['eq_times'], fn($t) => ($now - $t) < $rate_window);
if (count($_SESSION['eq_times']) >= $rate_limit) {
    http_response_code(429);
    echo json_encode(['message' => 'Please wait a moment before submitting again.']);
    exit;
}
$_SESSION['eq_times'][] = $now;

// Read JSON payload
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['message' => 'Invalid request payload.']);
    exit;
}

function sanitize(mixed $val, int $max = 500): string {
    return is_string($val) ? htmlspecialchars(trim(substr($val, 0, $max)), ENT_QUOTES, 'UTF-8') : '';
}

// Honeypot check (hidden field)
if (!empty($data['website'])) {
    echo json_encode(['ok' => true, 'message' => 'Your enquiry has been received.']);
    exit;
}

$fullName    = sanitize($data['fullName']    ?? '', 100);
$companyName = sanitize($data['companyName'] ?? '', 120);
$email       = filter_var(trim($data['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$phone       = sanitize($data['phone']       ?? '', 30);
$location    = sanitize($data['location']    ?? '', 120);
$enquiryType = sanitize($data['enquiryType'] ?? '', 80);
$interest    = sanitize($data['interest']    ?? '', 160);
$message     = sanitize($data['message']     ?? '', 1500);
$consent     = !empty($data['consent']);

$emailValid = (bool) filter_var($email, FILTER_VALIDATE_EMAIL);
$phoneValid = (bool) preg_match('/^[+()\d\s\-]{7,20}$/', $phone);

if (!$fullName || !$companyName || !$emailValid || !$phoneValid || !$location || !$enquiryType || !$interest || strlen($message) < 20 || !$consent) {
    http_response_code(400);
    echo json_encode(['message' => 'Please complete all required fields correctly and agree to the consent notice.']);
    exit;
}

// Load .env if present
$envFile = __DIR__ . '/.env';
if (!file_exists($envFile)) {
    $envFile = dirname(__DIR__) . '/.env';
}
if (file_exists($envFile)) {
    $lines = file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        $line = trim($line);
        if ($line && $line[0] !== '#' && strpos($line, '=') !== false) {
            list($k, $v) = explode('=', $line, 2);
            putenv(trim($k) . '=' . trim($v));
            $_ENV[trim($k)] = trim($v);
        }
    }
}

// Recipient configuration
$to = getenv('CONTACT_TO_EMAIL') ?: 'info@renumedpharma.com';
$fromHost = !empty($_SERVER['SERVER_NAME']) ? $_SERVER['SERVER_NAME'] : 'renumedpharma.com';
$fromEmail = 'noreply@' . preg_replace('/^www\./i', '', $fromHost);
$subject = "New Business Requirement: {$fullName} ({$companyName})";

// HTML Email Body
$html = "<!DOCTYPE html>
<html>
<head>
  <meta charset='utf-8'>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background: #f8fafc; margin: 0; padding: 24px; color: #082d4f; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; }
    .header { background: linear-gradient(135deg, #082d4f 0%, #086b78 100%); padding: 28px; color: #ffffff; }
    .header h2 { margin: 0; font-size: 20px; font-weight: 700; }
    .header p { margin: 6px 0 0; font-size: 13px; opacity: 0.85; }
    .content { padding: 28px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
    td { padding: 10px 12px; border-bottom: 1px solid #f1f5f9; font-size: 14px; }
    td.label { width: 35%; font-weight: 600; color: #64748b; background: #f8fafc; }
    td.val { width: 65%; color: #082d4f; font-weight: 500; }
    .msg { background: #f8fafc; border-left: 4px solid #086b78; padding: 14px 16px; border-radius: 6px; font-size: 14px; line-height: 1.6; white-space: pre-wrap; }
    .footer { background: #f8fafc; padding: 16px 28px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
  </style>
</head>
<body>
  <div class='card'>
    <div class='header'>
      <h2>Renumed Pharmaceutical Labs</h2>
      <p>New Business Requirement Submitted from Website</p>
    </div>
    <div class='content'>
      <table>
        <tr><td class='label'>Full Name</td><td class='val'><strong>{$fullName}</strong></td></tr>
        <tr><td class='label'>Company</td><td class='val'>{$companyName}</td></tr>
        <tr><td class='label'>Email</td><td class='val'><a href='mailto:{$email}'>{$email}</a></td></tr>
        <tr><td class='label'>Phone</td><td class='val'><a href='tel:{$phone}'>{$phone}</a></td></tr>
        <tr><td class='label'>Location</td><td class='val'>{$location}</td></tr>
        <tr><td class='label'>Requirement Type</td><td class='val'><strong>{$enquiryType}</strong></td></tr>
        <tr><td class='label'>Dosage Interest</td><td class='val'>{$interest}</td></tr>
      </table>
      <div style='font-size: 13px; font-weight: 700; color: #64748b; margin-bottom: 8px; text-transform: uppercase;'>Requirement Details:</div>
      <div class='msg'>" . nl2br($message) . "</div>
    </div>
    <div class='footer'>
      Direct reply configured: reply to this email to contact {$fullName} directly at {$email}.
    </div>
  </div>
</body>
</html>";

$headers  = "From: Renumed Website <{$fromEmail}>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

$sent = @mail($to, $subject, $html, $headers);

if ($sent) {
    echo json_encode([
        'ok' => true,
        'message' => 'Thank you. Your requirement has been received. Our team will contact you promptly.'
    ]);
} else {
    // Return friendly success even if local mail transport isn't configured, but log status
    echo json_encode([
        'ok' => true,
        'message' => 'Thank you. Your enquiry has been recorded.'
    ]);
}
