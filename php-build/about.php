<?php
$page_title = 'About Us';
$page_desc  = 'Learn about Renumed Pharmaceutical Labs — our mission, vision, values, and quality-focused approach to pharmaceutical manufacturing.';
require 'includes/head.php';
require 'includes/header.php';
?>

<!-- Company Overview -->
<section class="page-bg-white" style="padding-block:64px">
  <div class="container-shell about-hero-grid">
    <div>
      <div class="section-heading">
        <span class="section-kicker">Company overview</span>
        <h2 style="margin-top:18px">Built around process. Focused on trust.</h2>
      </div>
      <div style="margin-top:32px;display:flex;flex-direction:column;gap:20px;font-size:1rem;line-height:1.75;color:var(--slate-600)">
        <p>Renumed Pharmaceutical Labs is a pharmaceutical manufacturing organisation serving business and institutional requirements. We operate through a structured, quality-oriented approach that prioritises documentation, process control, and responsive client support.</p>
        <p>Our approach is built on the principle that reliable manufacturing comes from disciplined processes — clear procedures, documented decisions, and consistent follow-through at every stage from raw material receipt to final dispatch.</p>
      </div>
    </div>
    <div style="position:relative;overflow:hidden;border-radius:28px;background:var(--slate-200);aspect-ratio:4/3">
      <img src="/images/hero-manufacturing.png" alt="Illustrative view of a pharmaceutical production facility" style="width:100%;height:100%;object-fit:cover" loading="lazy" />
      <div style="position:absolute;inset:16px;bottom:16px;left:16px;right:16px;top:auto;border-radius:16px;background:rgba(8,45,79,.9);padding:16px;color:#fff;backdrop-filter:blur(8px)">
        <span style="font-size:.65rem;font-weight:700;text-transform:uppercase;letter-spacing:.15em;color:var(--cyan)">Illustrative image</span>
        <p style="margin-top:4px;font-size:.875rem;font-weight:700">Manufacturing Facility</p>
      </div>
    </div>
  </div>
</section>

<!-- Strengths -->
<section class="page-bg-mist" style="padding-block:96px">
  <div class="container-shell">
    <div class="section-heading centered">
      <span class="section-kicker">Our strengths</span>
      <h2 style="margin-top:18px">Core principles that guide our operations.</h2>
    </div>
    <div class="principles-grid" style="margin-top:56px">
      <?php
      $principles = [
        ['Quality-Focused Processes',  'A clear framework for inspection, controlled activity, review, and documented release decisions.'],
        ['Reliable Manufacturing',     'A process-led approach designed around consistency, coordination, and practical production controls.'],
        ['Customer-Oriented Service',  'Clear communication and business support shaped around confirmed partner requirements.'],
        ['Documented Operations',      'Structured records help support visibility, review, traceability, and responsible follow-through.'],
      ];
      foreach ($principles as $i => [$title, $text]): ?>
      <article class="reveal-card" style="border-radius:16px;border:1px solid var(--slate-200);background:var(--white);padding:24px">
        <div style="display:flex;align-items:flex-start;justify-content:space-between">
          <span style="display:grid;place-items:center;width:44px;height:44px;border-radius:14px;background:rgba(25,182,207,.1);color:var(--petrol)">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-md" aria-hidden="true"><path fill-rule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08z" clip-rule="evenodd"/></svg>
          </span>
          <span style="font-size:.72rem;font-weight:600;color:var(--slate-300)"><?= str_pad($i+1,2,'0',STR_PAD_LEFT) ?></span>
        </div>
        <h3 style="margin-top:24px;font-size:1.05rem;font-weight:700;color:var(--navy)"><?= htmlspecialchars($title) ?></h3>
        <p style="margin-top:12px;font-size:.875rem;line-height:1.6;color:var(--slate-600)"><?= htmlspecialchars($text) ?></p>
      </article>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- Mission, Vision, Values -->
<section class="page-bg-white" style="padding-block:96px">
  <div class="container-shell mvv-grid">
    <?php
    $mvv = [
      ['Our Mission', 'To support pharmaceutical business needs through disciplined, transparent, and quality-oriented manufacturing practices.'],
      ['Our Vision',  'To build trusted, long-term relationships through responsible operations and dependable business support.'],
      ['Our Values',  'Quality awareness, accountability, documentation, responsiveness, and continuous improvement.'],
    ];
    foreach ($mvv as $i => [$title, $text]): ?>
    <article class="mvv-card <?= $i === 0 ? 'mvv-card--navy' : 'mvv-card--border' ?>">
      <span class="mvv-num"><?= str_pad($i+1,2,'0',STR_PAD_LEFT) ?></span>
      <h3><?= htmlspecialchars($title) ?></h3>
      <p><?= htmlspecialchars($text) ?></p>
    </article>
    <?php endforeach; ?>
  </div>
</section>

<!-- Company Info Placeholder -->
<section class="page-bg-mist" style="padding-block:64px">
  <div class="container-shell">
    <div class="info-alert">
      <div>
        <h4>Company profile details require confirmation</h4>
        <p>Establishment year, location, leadership, management message, and verified milestones have not been supplied.</p>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-banner">
  <div class="container-shell" style="position:relative;z-index:1">
    <span class="section-kicker on-dark" style="justify-content:center;display:flex">Partner with us</span>
    <h2 style="margin-top:16px">Ready to discuss your manufacturing needs?</h2>
    <p>We welcome enquiries from pharmaceutical businesses looking for a reliable contract manufacturing partner.</p>
    <div class="cta-banner-btns">
      <a href="/contact.php" class="btn-primary btn-white">Get in Touch
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="icon-sm" aria-hidden="true"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"/></svg>
      </a>
    </div>
  </div>
</section>

<?php require 'includes/footer.php'; ?>

