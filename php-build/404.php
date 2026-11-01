<?php
http_response_code(404);
$page_title = 'Page Not Found — Renumed Pharma';
$page_desc  = 'The page you are looking for does not exist or has been moved.';
require 'includes/head.php';
require 'includes/header.php';
?>


<section style="display:flex;min-height:70vh;align-items:center;justify-content:center;background:var(--mist);padding:96px 16px;text-align:center">
  <div class="container-narrow">
    <span style="display:inline-block;border-radius:999px;background:rgba(25,182,207,.15);padding:4px 12px;font-size:.75rem;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:var(--petrol)">
      404 Error
    </span>
    <h1 style="margin-top:16px;font-size:2.5rem;font-weight:800;color:var(--navy)">
      Page Not Found
    </h1>
    <p style="margin-top:16px;font-size:1rem;line-height:1.7;color:var(--slate-600)">
      The page you are looking for does not exist or has been moved.
    </p>
    <div style="margin-top:32px;display:flex;justify-content:center;gap:16px;flex-wrap:wrap">
      <a href="/index.php" class="btn-primary" style="padding:12px 24px;font-size:.875rem">
        Return Home
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="icon-sm" aria-hidden="true"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"/></svg>
      </a>
      <a href="/contact.php" class="btn-outline" style="padding:12px 24px;font-size:.875rem">
        Contact Us
      </a>
    </div>
  </div>
</section>

</main>

<?php require 'includes/footer.php'; ?>

