<?php
// header.php — sticky navigation
$nav = [
  ['label'=>'Home',                   'href'=>'/'],
  ['label'=>'About Us',               'href'=>'/about.php'],
  ['label'=>'Contract Manufacturing', 'href'=>'/contract-manufacturing.php'],
  ['label'=>'Products',               'href'=>'/products.php'],
  ['label'=>'Quality',                'href'=>'/quality.php'],
  ['label'=>'Facilities',             'href'=>'/facilities.php'],
  ['label'=>'Gallery',                'href'=>'/gallery.php'],
  ['label'=>'Contact Us',             'href'=>'/contact.php'],
];

// Determine active page
$current = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?? '/';
function is_active(string $href, string $current): bool {
  if ($href === '/') return $current === '/' || $current === '/index.php';
  return strpos($current, rtrim($href, '.php')) === 0;
}
?>
<a href="#main-content" class="sr-only focus-visible">Skip to content</a>
<header class="site-header" id="site-header">
  <div class="container-shell header-inner">
    <!-- Logo -->
    <a href="/" class="logo-link" aria-label="Renumed Pharmaceutical Labs — Home">
      <img src="/images/rpl-logo.jpg" alt="Renumed Pharmaceutical Labs logo" class="logo-img" width="44" height="44" />
      <span class="logo-text">
        <span class="logo-name">Renumed</span>
        <span class="logo-sub">Pharmaceutical Labs</span>
      </span>
    </a>

    <!-- Desktop Nav -->
    <nav class="desktop-nav" aria-label="Primary navigation">
      <?php foreach ($nav as $item): ?>
        <a href="<?= $item['href'] ?>"
           class="nav-link<?= is_active($item['href'], $current) ? ' nav-link--active' : '' ?>">
          <?= htmlspecialchars($item['label']) ?>
        </a>
      <?php endforeach; ?>
    </nav>

    <!-- Desktop CTA -->
    <a href="/contact.php" class="btn-primary btn-sm desktop-cta">
      Enquire Now
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="icon-sm" aria-hidden="true"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"/></svg>
    </a>

    <!-- Mobile hamburger -->
    <button type="button" class="menu-btn" id="menuBtn" aria-label="Open navigation menu" aria-expanded="false" aria-controls="mobileMenu">
      <span class="bar"></span><span class="bar"></span><span class="bar"></span>
    </button>
  </div>

  <!-- Mobile Menu -->
  <div class="mobile-menu" id="mobileMenu" aria-hidden="true">
    <div class="container-shell">
      <nav class="mobile-nav" aria-label="Mobile navigation">
        <?php foreach ($nav as $item): ?>
          <a href="<?= $item['href'] ?>"
             class="mobile-nav-link<?= is_active($item['href'], $current) ? ' mobile-nav-link--active' : '' ?>">
            <?= htmlspecialchars($item['label']) ?>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="icon-xs" aria-hidden="true"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"/></svg>
          </a>
        <?php endforeach; ?>
      </nav>
      <div class="mobile-cta-wrap">
        <a href="/contact.php" class="btn-primary btn-block">Enquire Now</a>
      </div>
    </div>
  </div>
</header>
<!-- Backdrop -->
<div class="mobile-backdrop" id="mobileBackdrop" aria-hidden="true"></div>
<main id="main-content">

