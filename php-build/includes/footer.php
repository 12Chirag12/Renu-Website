<?php
// footer.php — site footer & closing tags
$year = date('Y');
?>
</main><!-- /main-content -->
<footer class="site-footer">
  <div class="container-shell footer-grid">
    <!-- Brand -->
    <div>
      <a href="/" class="logo-link logo-link--inv" aria-label="Renumed Pharmaceutical Labs — Home">
        <img src="/images/rpl-logo.jpg" alt="" class="logo-img" width="44" height="44" aria-hidden="true" />
        <span class="logo-text">
          <span class="logo-name">Renumed</span>
          <span class="logo-sub">Pharmaceutical Labs</span>
        </span>
      </a>
      <p class="footer-desc">A pharmaceutical manufacturing organization focused on disciplined processes, documented operations, and responsive business support.</p>
    </div>

    <!-- Navigate -->
    <div>
      <p class="footer-heading">Navigate</p>
      <nav aria-label="Footer navigation">
        <a href="/" class="footer-link">Home</a>
        <a href="/about.php" class="footer-link">About Us</a>
        <a href="/contract-manufacturing.php" class="footer-link">Contract Manufacturing</a>
        <a href="/products.php" class="footer-link">Products</a>
        <a href="/gallery.php" class="footer-link">Facility Gallery</a>
      </nav>
    </div>

    <!-- Business -->
    <div>
      <p class="footer-heading">Business</p>
      <nav aria-label="Business navigation">
        <a href="/quality.php" class="footer-link">Quality &amp; Compliance</a>
        <a href="/facilities.php" class="footer-link">Facilities</a>
        <a href="/contact.php" class="footer-link">Contact &amp; Enquiry</a>
      </nav>
    </div>

    <!-- Contact -->
    <div>
      <p class="footer-heading">Contact</p>
      <p class="footer-desc">Address, phone, email, and business hours are awaiting company confirmation.</p>
    </div>
  </div>

  <div class="footer-bottom">
    <div class="container-shell footer-bottom-inner">
      <p>&copy; <?= $year ?> Renumed Pharmaceutical Labs. All rights reserved.</p>
      <div class="footer-legal">
        <a href="/privacy.php">Privacy Policy</a>
        <a href="/terms.php">Terms of Use</a>
        <a href="/disclaimer.php">Product Disclaimer</a>
      </div>
    </div>
  </div>
</footer>

<script src="/assets/main.js"></script>
</body>
</html>

