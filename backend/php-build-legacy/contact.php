<?php
$page_title = 'Contact & Enquiry';
$page_desc  = 'Contact Renumed Pharmaceutical Labs for contract manufacturing, product development, packaging, and business partnership enquiries.';
require 'includes/head.php';
require 'includes/header.php';
?>

<!-- Enquiry Section -->
<section class="page-bg-mist" style="padding-block:64px">
  <div class="container-shell contact-grid">
    <!-- Left side info -->
    <div>
      <div class="section-heading">
        <span class="section-kicker">Business enquiry</span>
        <h2 style="margin-top:18px">Tell us about your requirement.</h2>
        <p>Share your product, manufacturing, packaging, or partnership details. We use this information only to understand and respond to your enquiry.</p>
      </div>
      <div class="enquiry-side-checks">
        <?php foreach (['Structured requirement capture','Server-side input validation','Response within one working day'] as $item): ?>
        <div class="side-check">
          <span class="side-check-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="icon-xs" aria-hidden="true"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"/></svg>
          </span>
          <?= htmlspecialchars($item) ?>
        </div>
        <?php endforeach; ?>
      </div>
      <p style="margin-top:40px;max-width:380px;border-left:2px solid var(--petrol);padding-left:16px;font-size:.75rem;line-height:1.6;color:var(--slate-500)">Form delivery via PHP mail() on cPanel. Ensure your cPanel email is configured before going live.</p>
    </div>

    <!-- Form -->
    <div class="enquiry-form">
      <h3>Send us your requirement</h3>
      <p class="subtitle">We will respond within one working day.</p>
      <form id="enquiryForm" novalidate>
        <!-- Honeypot -->
        <label class="sr-only" aria-hidden="true" style="position:absolute;width:0;height:0;overflow:hidden">
          Website<input name="website" tabindex="-1" autocomplete="off" class="hp-field" />
        </label>
        <div class="form-grid">
          <label class="form-label">Full name *<input name="fullName" required maxlength="100" autocomplete="name" class="field" placeholder="Your full name" /></label>
          <label class="form-label">Company name *<input name="companyName" required maxlength="120" autocomplete="organization" class="field" placeholder="Organization" /></label>
          <label class="form-label">Business email *<input name="email" required type="email" maxlength="160" autocomplete="email" class="field" placeholder="name@company.com" /></label>
          <label class="form-label">Phone number *<input name="phone" required type="tel" pattern="[+()\d\s\-]{7,20}" autocomplete="tel" class="field" placeholder="+00 00000 00000" /></label>
          <label class="form-label">Requirement type *
            <select name="enquiryType" required class="field">
              <option value="" disabled selected>Select type</option>
              <option>Contract manufacturing</option>
              <option>Third-party manufacturing</option>
              <option>Product development</option>
              <option>Packaging services</option>
              <option>Partnership opportunity</option>
              <option>General business enquiry</option>
            </select>
          </label>
          <label class="form-label">Country / state *<input name="location" required maxlength="120" autocomplete="country-name" class="field" placeholder="Location" /></label>
          <label class="form-label form-full">Product or service of interest *<input name="interest" required maxlength="160" class="field" placeholder="Tell us what you are looking for" /></label>
          <label class="form-label form-full">Message *<textarea name="message" required minlength="20" maxlength="1500" rows="5" class="field" placeholder="Share your business requirement, target market, and expected next step."></textarea></label>
        </div>
        <label class="consent-row">
          <input name="consent" type="checkbox" required />
          I consent to Renumed Pharmaceutical Labs using this information to respond to my business enquiry. *
        </label>
        <button type="submit" id="formSubmitBtn" class="btn-primary form-submit">
          Submit Enquiry
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="icon-sm" aria-hidden="true"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"/></svg>
        </button>
        <div id="formStatus" class="form-status" style="display:none" role="status" aria-live="polite"></div>
        <p class="form-privacy">Protected by server-side validation, a spam honeypot, and request throttling.</p>
      </form>
    </div>
  </div>
</section>

<!-- Contact Info Cards -->
<section class="page-bg-white" style="padding-block:96px">
  <div class="container-shell">
    <div class="section-heading">
      <span class="section-kicker">Contact information</span>
      <h2 style="margin-top:18px">Company contact details.</h2>
      <p>All contact details below are marked for confirmation because verified company information was not provided.</p>
    </div>
    <div class="contact-info-grid">
      <?php
      $contacts = [
        ['Registered Office',  'To be confirmed'],
        ['Manufacturing Unit', 'To be confirmed'],
        ['Phone & Email',      'To be confirmed · To be confirmed'],
        ['Business Hours',     'To be confirmed'],
      ];
      foreach ($contacts as [$title, $val]): ?>
      <article class="contact-card">
        <div class="contact-card-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-md" aria-hidden="true"><path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/></svg>
        </div>
        <h3><?= htmlspecialchars($title) ?></h3>
        <p><?= htmlspecialchars($val) ?></p>
      </article>
      <?php endforeach; ?>
    </div>

    <!-- Google Maps embed -->
    <div class="map-embed">
      <div class="map-header">
        <div class="map-header-left">
          <div class="map-header-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-xs" aria-hidden="true"><path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/></svg>
          </div>
          <div>
            <h3>RENUMED Pharmaceutical Labs</h3>
            <p>Manufacturing Facility &amp; Works</p>
          </div>
        </div>
        <a href="https://www.google.com/maps/place/Renumed+pharmaceutical+labs/@19.6857319,72.7593648,17z" target="_blank" rel="noopener noreferrer" class="map-link">
          Open in Google Maps
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="icon-xs" aria-hidden="true"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"/></svg>
        </a>
      </div>
      <iframe
        class="map-frame"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.6312380295267!2d72.75936477498101!3d19.68573188164846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71d4e08832b97%3A0xe4c0392c9d1ce6db!2sRenumed%20pharmaceutical%20labs!5e0!3m2!1sen!2sin!4v1790333823163!5m2!1sen!2sin"
        allowfullscreen loading="lazy" referrerpolicy="strict-origin-when-cross-origin"
        title="Renumed Pharmaceutical Labs Location Map" style="min-height:420px">
      </iframe>
    </div>
  </div>
</section>

<?php require 'includes/footer.php'; ?>

