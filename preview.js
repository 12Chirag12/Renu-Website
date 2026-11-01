#!/usr/bin/env node
/**
 * preview.js — Instant Local Server for Renumed Pharma Website
 * Zero configuration, zero external dependencies.
 * Run in your terminal: node preview.js (or: npm run preview)
 */

const http = require("http");
const fs   = require("fs");
const path = require("path");

const PORT = process.env.PORT || 8000;
const ROOT = path.join(__dirname, "php-build");
const PREVIEW_DIR = path.join(ROOT, "preview");

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css":  "text/css; charset=utf-8",
  ".js":   "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png":  "image/png",
  ".jpg":  "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg":  "image/svg+xml",
  ".webp": "image/webp",
  ".ico":  "image/x-icon",
  ".txt":  "text/plain; charset=utf-8",
};

const ROUTES = {
  "/": "index.html",
  "/index.php": "index.html",
  "/index.html": "index.html",
  "/about": "about.html",
  "/about.php": "about.html",
  "/about.html": "about.html",
  "/contact": "contact.html",
  "/contact.php": "contact.html",
  "/contact.html": "contact.html",
  "/contract-manufacturing": "contract-manufacturing.html",
  "/contract-manufacturing.php": "contract-manufacturing.html",
  "/contract-manufacturing.html": "contract-manufacturing.html",
  "/products": "products.html",
  "/products.php": "products.html",
  "/products.html": "products.html",
  "/quality": "quality.html",
  "/quality.php": "quality.html",
  "/quality.html": "quality.html",
  "/facilities": "facilities.html",
  "/facilities.php": "facilities.html",
  "/facilities.html": "facilities.html",
  "/gallery": "gallery.html",
  "/gallery.php": "gallery.html",
  "/gallery.html": "gallery.html",
  "/privacy": "privacy.html",
  "/privacy.php": "privacy.html",
  "/privacy.html": "privacy.html",
  "/terms": "terms.html",
  "/terms.php": "terms.html",
  "/terms.html": "terms.html",
  "/disclaimer": "disclaimer.html",
  "/disclaimer.php": "disclaimer.html",
  "/disclaimer.html": "disclaimer.html",
  "/404": "404.html",
  "/404.php": "404.html",
  "/404.html": "404.html",
};

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://localhost:${PORT}`);
  const pathname = decodeURIComponent(parsedUrl.pathname);

  // Handle Enquiry Form submission (POST)
  if (req.method === "POST" && pathname === "/enquiry-handler.php") {
    let body = "";
    req.on("data", chunk => { body += chunk; });
    req.on("end", () => {
      console.log(`\x1b[32m[POST 200]\x1b[0m ${pathname} — Enquiry received!`);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({
        ok: true,
        message: "Your enquiry has been received (Local Preview Mode). We will respond within one working day."
      }));
    });
    return;
  }

  // Handle page routes
  if (ROUTES[pathname]) {
    const filePath = path.join(PREVIEW_DIR, ROUTES[pathname]);
    if (fs.existsSync(filePath)) {
      console.log(`\x1b[36m[GET 200]\x1b[0m  ${pathname} -> ${ROUTES[pathname]}`);
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      fs.createReadStream(filePath).pipe(res);
      return;
    }
  }

  // Handle static assets (/assets, /images, etc.)
  const directPath = path.join(ROOT, pathname);
  if (fs.existsSync(directPath) && fs.statSync(directPath).isFile()) {
    const ext = path.extname(directPath).toLowerCase();
    const contentType = MIME[ext] || "application/octet-stream";
    console.log(`\x1b[90m[GET 200]\x1b[0m  ${pathname}`);
    res.writeHead(200, { "Content-Type": contentType });
    fs.createReadStream(directPath).pipe(res);
    return;
  }

  // 404 Fallback
  console.log(`\x1b[31m[404]\x1b[0m      ${pathname}`);
  const notFoundPath = path.join(PREVIEW_DIR, "404.html");
  res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
  if (fs.existsSync(notFoundPath)) {
    fs.createReadStream(notFoundPath).pipe(res);
  } else {
    res.end("<h1>404 Not Found</h1>");
  }
});

server.listen(PORT, () => {
  console.log("\n\x1b[1m\x1b[32m===================================================================\x1b[0m");
  console.log("\x1b[1m  Renumed Pharmaceutical Labs — Local Web Server Running!\x1b[0m");
  console.log(`\x1b[36m  Local URL:\x1b[0m   \x1b[4mhttp://localhost:${PORT}\x1b[0m`);
  console.log("\x1b[90m  Press Ctrl + C in this terminal to stop the server.\x1b[0m");
  console.log("\x1b[1m\x1b[32m===================================================================\x1b[0m\n");
});

