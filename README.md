# Renumed Pharmaceutical Labs — Official Website

This repository contains the production-ready corporate website for **Renumed Pharmaceutical Labs**, strictly structured using **HTML5, CSS, and PHP** for high-performance deployment on Apache/cPanel shared hosting and static web servers.

---

## 📁 Repository Structure

```
Renu-Website/
│
├── 📁 html/                          # Pure Static HTML5 Frontend Package
│   ├── 📁 assets/
│   │   ├── 📁 css/style.css          # Production Tailwind CSS stylesheet (58KB)
│   │   ├── 📁 js/main.js             # Client-side vanilla JavaScript (mobile menu, tabs, modals)
│   │   └── 📁 images/                # Full branding, hero, facility, and gallery images
│   ├── 📁 images/                    # Root image mirror for `/images/...` paths
│   ├── index.html                    # Homepage
│   ├── about.html                    # About Us & Corporate Heritage
│   ├── contact.html                  # Contact & Requirement Enquiry Form
│   ├── contract-manufacturing.html   # CMO Capabilities, Dosage Forms & Packaging
│   ├── facilities.html               # Facility Specs, Cleanrooms & HVAC Controls
│   ├── products.html                 # Therapeutic Categories & Quality Architecture
│   ├── quality.html                  # QA/QC Controls, WHO-GMP & Testing Standards
│   ├── gallery.html                  # Visual Facility Tour with Lightbox
│   ├── privacy.html                  # Privacy Policy
│   ├── terms.html                    # Terms of Use
│   ├── disclaimer.html               # Regulatory & Product Disclaimer
│   ├── 404.html                      # Custom 404 Error Page
│   ├── favicon.ico                   # Favicon
│   ├── robots.txt                    # Search Engine Crawler Directives
│   ├── sitemap.xml                   # XML Sitemap with SEO Priorities
│   └── .htaccess                     # Apache rewrite rules for clean URLs
│
├── 📁 php/                           # Production cPanel Deployment (Apache + PHP)
│   ├── 📁 assets/
│   │   ├── 📁 css/style.css          # Production Tailwind CSS stylesheet (58KB)
│   │   ├── 📁 js/main.js             # Client-side vanilla JavaScript
│   │   └── 📁 images/                # Images & gallery
│   ├── 📁 images/                    # Root image mirror for `/images/...` paths
│   ├── index.php                     # Homepage
│   ├── about.php                     # About Us
│   ├── contact.php                   # Contact & Requirement Enquiry Form
│   ├── contract-manufacturing.php    # Contract Manufacturing
│   ├── facilities.php                # Facilities & Cleanrooms
│   ├── products.php                  # Products & Formulations
│   ├── quality.php                   # Quality Assurance
│   ├── gallery.php                   # Visual Facility Tour
│   ├── privacy.php                   # Privacy Policy
│   ├── terms.php                     # Terms of Use
│   ├── disclaimer.php                # Disclaimer
│   ├── 404.php                       # Custom 404 Page
│   ├── enquiry-handler.php           # Secure PHP mail() backend for enquiries
│   ├── router.php                    # Local router for PHP built-in CLI server
│   ├── favicon.ico                   # Favicon
│   ├── robots.txt                    # Search Engine Crawler Directives
│   ├── sitemap.xml                   # XML Sitemap
│   └── .htaccess                     # Clean URLs, Gzip compression, & Cache headers
│
├── 📦 renumed-cpanel-upload.zip      # 1-Click deployment package for cPanel File Manager
├── 📄 README.md                      # Project documentation
└── 📄 .gitignore                     # Git ignore rules
```

---

## 🌐 cPanel Deployment (Apache + PHP)

1. Log in to your **cPanel** dashboard.
2. Open **File Manager** and navigate into `public_html/`.
3. Click **Upload** and upload `renumed-cpanel-upload.zip`.
4. Right-click `renumed-cpanel-upload.zip` in File Manager and click **Extract**.
5. Once extracted, verify that `.htaccess`, `index.php`, `assets/`, etc., are located directly inside `public_html/`.
6. You can delete `renumed-cpanel-upload.zip` from `public_html/`.
7. Your site is live!

---

## 💻 Local Testing Options (No Node.js)

### Option A: Using PHP (Built-in Server)
If you have PHP installed or use XAMPP / WAMP:
```bash
cd php
php -S localhost:8000 router.php
```
Then open `http://localhost:8000`.

### Option B: Using VS Code Live Server (HTML)
- Open `html/index.html` in VS Code.
- Right-click and choose **"Open with Live Server"**.

### Option C: Using Python
```bash
python -m http.server 8000 -d html
```
Then open `http://localhost:8000`.

---

## ✉️ Enquiry Form Email Configuration

Contact form submissions are handled by `php/enquiry-handler.php` using standard PHP `mail()`.
- To change the recipient email on cPanel, edit line 77 of `php/enquiry-handler.php`:
  ```php
  $to = 'info@renumedpharma.com';
  ```
- Form submissions include session-based rate limiting, honeypot anti-spam verification, and sanitized HTML email formatting.
