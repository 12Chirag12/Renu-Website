<?php
// head.php — shared <head> partial
// Usage: include it after setting $page_title, $page_desc
$site_name  = 'Renumed Pharmaceutical Labs';
$base_url   = 'https://www.renumedpharma.com';
$page_title = isset($page_title) ? htmlspecialchars($page_title) : $site_name;
$page_desc  = isset($page_desc)  ? htmlspecialchars($page_desc)  : 'Renumed Pharmaceutical Labs — pharmaceutical contract manufacturing.';
$full_title = ($page_title === $site_name) ? $page_title : $page_title . ' | ' . $site_name;
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title><?= $full_title ?></title>
  <meta name="description" content="<?= $page_desc ?>" />
  <meta property="og:title"       content="<?= htmlspecialchars($site_name) ?>" />
  <meta property="og:description" content="<?= $page_desc ?>" />
  <meta property="og:type"        content="website" />
  <meta property="og:locale"      content="en_IN" />
  <meta property="og:site_name"   content="<?= htmlspecialchars($site_name) ?>" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="<?= $base_url ?>" />
  <link rel="icon" type="image/jpeg" href="/images/rpl-logo.jpg" />
  <link rel="stylesheet" href="/assets/style.css" />
  <script type="application/ld+json">
  {
    "@context":"https://schema.org",
    "@type":"Organization",
    "name":"Renumed Pharmaceutical Labs",
    "url":"https://www.renumedpharma.com",
    "description":"A pharmaceutical manufacturing organization focused on disciplined processes, documented operations, and responsive business support.",
    "contactPoint":{"@type":"ContactPoint","contactType":"Business Enquiry","availableLanguage":"English"}
  }
  </script>
</head>
<body>

