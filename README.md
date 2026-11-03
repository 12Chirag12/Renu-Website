# Renumed Pharmaceutical Labs — Official Website

This repository contains the production-ready corporate website for **Renumed Pharmaceutical Labs**, strictly structured for high-performance deployment on Apache/cPanel shared hosting.

---

## 📁 Repository Structure

```
Renu-Website/
│
├── 📁 php/                           # Production cPanel Deployment (Apache + PHP)
│   ├── 📁 assets/
│   │   ├── 📁 css/style.css          # Production Tailwind CSS stylesheet (58KB)
│   │   ├── 📁 js/main.js             # Client-side vanilla JavaScript (interactive map, counter, tabs, modal)
│   │   └── 📁 images/                # Images & gallery photos
│   ├── 📁 images/                    # Image mirror folder for direct `/images/...` paths
│   ├── 📄 index.php                  # Homepage (with animated counter & interactive Africa map)
│   ├── 📄 about.php                  # About Us & Corporate Heritage
│   ├── 📄 contact.php                # Contact & Requirement Enquiry Form
│   ├── 📄 contract-manufacturing.php # Contract Manufacturing & Dosage Forms
│   ├── 📄 facilities.php             # Facilities & Cleanrooms
│   ├── 📄 products.php               # Products & Formulations (Tablets & Capsules tabs)
│   ├── 📄 quality.php                # Quality Assurance & Testing Standards
│   ├── 📄 gallery.php                # Visual Facility Tour with Lightbox
│   ├── 📄 privacy.php                # Privacy Policy
│   ├── 📄 terms.php                  # Terms of Use
│   ├── 📄 disclaimer.php             # Product & Regulatory Disclaimer
│   ├── 📄 404.php                    # Custom 404 Error Page
│   ├── 📄 enquiry-handler.php        # Secure PHP mail() backend for forms (with rate-limiting)
│   ├── 📄 router.php                 # Local router for PHP built-in CLI server
│   ├── 📄 favicon.ico                # Favicon
│   ├── 📄 robots.txt                 # Search Engine Crawler Directives
│   ├── 📄 sitemap.xml                # XML Sitemap
│   ├── 📄 .htaccess                  # Apache mod_rewrite clean URLs, Gzip & caching
│   ├── 📄 .env                       # Local email configuration
│   └── 📄 .env.example               # Configuration template
│
├── 📄 .env                           # Root configuration
├── 📄 .env.example                   # Root configuration template
├── 📄 README.md                      # Project documentation
└── 📄 .gitignore                     # Git ignore rules
```

---

## 🌐 cPanel Deployment Guide

1. Open your **`php/`** folder locally.
2. Select **all files inside `php/`** (`.htaccess`, `index.php`, `about.php`, `assets/`, `images/`, etc.).
3. Right-click and compress them into a `.zip` archive (e.g., `website.zip`).
4. Log into your **cPanel** dashboard and open **File Manager**.
5. Navigate into the **`public_html/`** folder.
6. Click **Upload** and upload your zip file.
7. Right-click the uploaded zip file and select **Extract**.
8. Verify that `.htaccess`, `index.php`, `assets/`, etc., sit directly inside `public_html/`.
9. In cPanel File Manager settings, enable **"Show Hidden Files (dotfiles)"** to confirm `.htaccess` is present.
10. Your site is live!

---

## 💻 Local Testing with XAMPP

Run PHP's built-in web server directly inside the `php` folder:

```powershell
cd c:\Projects-\Renu-Website\php
C:\xampp\php\php.exe -S localhost:8000 router.php
```

Then visit:
👉 **`http://localhost:8000`**

---

## ✉️ Enquiry Form Email Configuration

Contact form submissions are handled by `php/enquiry-handler.php`.
- The recipient email is configured in `php/.env`:
  ```env
  CONTACT_TO_EMAIL=info@renumedpharma.com
  ```
- Submissions include session-based rate limiting (max 5 submissions per minute), honeypot anti-spam verification, and sanitized HTML email formatting.
