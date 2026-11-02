#!/usr/bin/env node
/**
 * preview.js — Instant Local Server for Renumed Pharma Website
 * Serves the exact production export from the `out` directory.
 * Zero external dependencies.
 * Run in your terminal: node preview.js (or: npm run preview)
 */

const http = require("http");
const fs   = require("fs");
const path = require("path");

const PORT = process.env.PORT || 8000;
const ROOT = path.join(__dirname, "out");

const MIME = {
  ".html":  "text/html; charset=utf-8",
  ".css":   "text/css; charset=utf-8",
  ".js":    "application/javascript; charset=utf-8",
  ".mjs":   "application/javascript; charset=utf-8",
  ".json":  "application/json; charset=utf-8",
  ".png":   "image/png",
  ".jpg":   "image/jpeg",
  ".jpeg":  "image/jpeg",
  ".svg":   "image/svg+xml",
  ".webp":  "image/webp",
  ".ico":   "image/x-icon",
  ".txt":   "text/plain; charset=utf-8",
  ".xml":   "application/xml; charset=utf-8",
  ".woff2": "font/woff2",
  ".woff":  "font/woff",
  ".ttf":   "font/ttf",
};

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://localhost:${PORT}`);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  // 1. Handle Enquiry Form submission (POST /enquiry-handler.php)
  if (req.method === "POST" && (pathname === "/enquiry-handler.php" || pathname === "/api/enquiry")) {
    let body = "";
    req.on("data", chunk => { body += chunk; });
    req.on("end", () => {
      console.log(`\x1b[32m[POST 200]\x1b[0m ${pathname} — Requirement received!`);
      res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
      res.end(JSON.stringify({
        ok: true,
        message: "Thank you. Your requirement has been received. Our team will contact you promptly."
      }));
    });
    return;
  }

  // 2. Direct file lookup
  let targetFile = path.join(ROOT, pathname);

  // If path is a directory or root, look for index.html
  if (fs.existsSync(targetFile) && fs.statSync(targetFile).isDirectory()) {
    targetFile = path.join(targetFile, "index.html");
  }

  // If path has no extension and doesn't exist directly, check pathname/index.html or pathname.html
  if (!fs.existsSync(targetFile)) {
    const asDirIndex = path.join(ROOT, pathname, "index.html");
    const asHtml = path.join(ROOT, pathname + ".html");
    if (fs.existsSync(asDirIndex)) {
      targetFile = asDirIndex;
    } else if (fs.existsSync(asHtml)) {
      targetFile = asHtml;
    }
  }

  // 3. Serve the file if found
  if (fs.existsSync(targetFile) && fs.statSync(targetFile).isFile()) {
    const ext = path.extname(targetFile).toLowerCase();
    const contentType = MIME[ext] || "application/octet-stream";
    console.log(`\x1b[36m[GET 200]\x1b[0m  ${pathname} -> ${path.relative(ROOT, targetFile)}`);
    res.writeHead(200, { "Content-Type": contentType });
    fs.createReadStream(targetFile).pipe(res);
    return;
  }

  // 4. 404 Fallback
  console.log(`\x1b[31m[404]\x1b[0m      ${pathname}`);
  const notFoundPath = path.join(ROOT, "404.html");
  res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
  if (fs.existsSync(notFoundPath)) {
    fs.createReadStream(notFoundPath).pipe(res);
  } else {
    res.end("<h1>404 Not Found</h1>");
  }
});

server.listen(PORT, () => {
  console.log("\n\x1b[1m\x1b[32m===================================================================\x1b[0m");
  console.log("\x1b[1m  Renumed Pharmaceutical Labs — Exact Production Build Server\x1b[0m");
  console.log(`\x1b[36m  Local URL:\x1b[0m   \x1b[4mhttp://localhost:${PORT}\x1b[0m`);
  console.log("\x1b[90m  Press Ctrl + C in this terminal to stop the server.\x1b[0m");
  console.log("\x1b[1m\x1b[32m===================================================================\x1b[0m\n");
});
