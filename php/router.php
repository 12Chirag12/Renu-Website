<?php
// router.php — Local development router for PHP's built-in web server
// Usage: cd php && php -S localhost:8000 router.php

$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$file = __DIR__ . $path;

// 1. Serve static files directly if they exist
if ($path !== '/' && file_exists($file) && !is_dir($file)) {
    return false;
}

// 2. Route clean URLs to .php files (e.g. /about or /about/ -> about.php)
$clean = trim($path, '/');
if (file_exists(__DIR__ . '/' . $clean . '.php')) {
    include __DIR__ . '/' . $clean . '.php';
    return true;
}

// 3. Route clean URLs to .html files if any
if (file_exists(__DIR__ . '/' . $clean . '.html')) {
    include __DIR__ . '/' . $clean . '.html';
    return true;
}

// 4. Default home
if ($path === '/' || $path === '') {
    include __DIR__ . '/index.php';
    return true;
}

// 5. 404 Fallback
http_response_code(404);
if (file_exists(__DIR__ . '/404.php')) {
    include __DIR__ . '/404.php';
    return true;
}

echo '<h1>404 Not Found</h1>';

