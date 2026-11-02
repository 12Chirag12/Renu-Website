<?php
// enquiry-handler.php — replaces Next.js app/api/enquiry/route.ts
// Must be placed in the root of public_html (same level as index.php).
// Requires PHP mail() to be enabled on cPanel (it is by default).

header('Content-Type: application/json');

// Rate limiting using flat file + session
session_start();
$rate_limit = 5;
$rate_window = 60;
if (!isset($_SESSION['eq_times'])) $_SESSION['eq_times'] = [];
$now = time();
$_SESSION['eq_times'] = array_filter($_SESSION['eq_times'], fn($t) => ($now - $t) < $rate_window);
if (count($_SESSION['eq_times']) >= $rate_limit) {
  http_response_code(429);
  echo json_encode(['message' => 'Please wait a moment before trying again.']);
  exit;
}
$_SESSION['eq_times'][] = $now;

// Only accept POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['message' => 'Method not allowed.']);
  exit;
}

// Read JSON body
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
  http_response_code(400);
  echo json_encode(['message' => 'Invalid request.']);
  exit;
}

function clean(mixed $v, int $max = 500): string {
  return is_string($v) ? trim(substr($v, 0, $max)) : '';
}

// Honeypot
if (!empty($data['website'])) {
  echo json_encode(['ok' => true]);
  exit;
}

$fullName    = clean($data['fullName']    ?? '', 100);
$companyName = clean($data['companyName'] ?? '', 120);
$email       = clean($data['email']       ?? '', 160);
$phone       = clean($data['phone']       ?? '', 30);
$location    = clean($data['location']    ?? '', 120);
$enquiryType = clean($data['enquiryType'] ?? '', 80);
$interest    = clean($data['interest']    ?? '', 160);
$message     = clean($data['message']     ?? '', 1500);
$consent     = $data['consent'] === true;

$emailOk   = (bool) filter_var($email, FILTER_VALIDATE_EMAIL);
$phoneOk   = (bool) preg_match('/^[+()\d\s\-]{7,20}$/', $phone);

if (!$fullName || !$companyName || !$emailOk || !$phoneOk || !$location || !$enquiryType || !$interest || strlen($message) < 20 || !$consent) {
  http_response_code(400);
  echo json_encode(['message' => 'Please review the required fields and try again.']);
  exit;
}

// ── Read config from .env file or define directly here ──
// Set your recipient email below:
$to      = getenv('CONTACT_TO_EMAIL') ?: 'info@renumedpharma.com';
$from    = 'Renumed Website <noreply@renumedpharma.com>';
$subject = 'New Business Enquiry: ' . $enquiryType;

$body = "
New enquiry received from the Renumed website.

Name:         {$fullName}
Company:      {$companyName}
Email:        {$email}
Phone:        {$phone}
Location:     {$location}
Enquiry Type: {$enquiryType}
Interest:     {$interest}

Message:
{$message}

---
Submitted: " . date('Y-m-d H:i:s T') . "
IP: " . ($_SERVER['REMOTE_ADDR'] ?? 'unknown') . "
";

$headers  = "From: {$from}\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = mail($to, $subject, $body, $headers);

if ($sent) {
  echo json_encode(['ok' => true, 'message' => 'Your enquiry has been received. We will respond within one working day.']);
} else {
  http_response_code(500);
  echo json_encode(['message' => 'Unable to send enquiry at this time. Please email us directly.']);
}

