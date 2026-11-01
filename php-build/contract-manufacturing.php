<?php
$page_title = 'Contract Manufacturing — Renumed Pharma';
$page_desc  = 'Renumed Pharmaceutical Labs provides pharmaceutical contract manufacturing, third-party production, packaging, and documentation services with a quality-focused approach.';
require 'includes/head.php';
require 'includes/header.php';

$benefits = [
  ['Reduce Capital Investment', 'Leverage our manufacturing infrastructure without the overhead of building your own production facility.'],
  ['Focus on Core Business', 'Concentrate on marketing, distribution, and brand building while we handle production.'],
  ['Quality Assurance', 'Benefit from documented quality processes, in-process checks, and structured release procedures.'],
  ['Faster Time to Market', 'Established production capabilities help reduce your product development and launch timelines.'],
  ['Flexible Capacity', 'Scale production up or down based on demand without managing fixed manufacturing costs.'],
  ['Regulatory Documentation', 'Receive comprehensive batch records, testing certificates, and regulatory documentation support.'],
];

$engagement_steps = [
  'Enquiry',
  'Requirement Review',
  'Development / Approval',
  'Manufacturing',
  'Quality Control',
  'Packaging',
  'Dispatch',
];

$suitable_for = [
  'Pharmaceutical companies seeking manufacturing partners',
  'Healthcare businesses expanding their product portfolio',
  'Established brands exploring contract production',
  'Companies requiring specialised dosage form manufacturing',
  'Organisations needing flexible production capacity',
  'Businesses looking for documentation and quality support',
];

$services = [
  'Formulation Transfer',
  'Commercial Scale Compression',
  'Encapsulation Operations',
  'Blister & Strip Packaging',
  'Batch Testing & Release Records',
  'Custom Packaging Solutions',
];
?>


<!-- ── Introduction ──────────────────────────────────────── -->
<section class="page-bg-white" style="padding-block:72px">
  <div class="container-shell" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:48px;align-items:center">
    <div>
      <div class="section-heading">
        <span class="section-kicker">Contract manufacturing</span>
        <h1 style="margin-top:18px">Your product, our production expertise.</h1>
        <p>Renumed Pharmaceutical Labs provides pharmaceutical contract manufacturing services through a structured, quality-oriented approach. We support businesses looking for reliable production partnerships — from formulation development through to final dispatch.</p>
      </div>
      <p style="margin-top:20px;font-size:.925rem;line-height:1.7;color:var(--slate-600)">
        Our contract manufacturing model is built on clear communication, documented processes, and responsive business support. We work with pharmaceutical companies, healthcare businesses, and organisations looking to leverage established manufacturing capabilities.
      </p>
      <div style="margin-top:32px;display:flex;flex-wrap:wrap;gap:14px">
        <a href="/contact.php" class="btn-primary" style="padding:14px 28px;font-size:.875rem">
          Request a Quote
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="icon-sm" aria-hidden="true"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"/></svg>
        </a>
        <a href="/facilities.php" class="btn-outline" style="padding:14px 28px;font-size:.875rem">
          View Facilities
        </a>
      </div>
    </div>

    <!-- Right Side 3 Feature Cards -->
    <div style="display:grid;gap:16px">
      <?php foreach (array_slice($benefits, 0, 3) as $b): ?>
      <div class="reveal-card" style="display:flex;align-items:flex-start;gap:16px;border-radius:18px;border:1px solid #e2e8f0;background:#fff;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,.03)">
        <span style="display:grid;place-items:center;width:44px;height:44px;border-radius:12px;background:#f1f5f9;color:var(--petrol);flex-shrink:0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-sm" aria-hidden="true"><path fill-rule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08z" clip-rule="evenodd"/></svg>
        </span>
        <div>
          <h3 style="font-size:1rem;font-weight:700;color:var(--navy)"><?= htmlspecialchars($b[0]) ?></h3>
          <p style="margin-top:4px;font-size:.825rem;line-height:1.55;color:var(--slate-600)"><?= htmlspecialchars($b[1]) ?></p>
        </div>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- ── Client Benefits ───────────────────────────────────── -->
<section class="page-bg-mist" style="padding-block:80px">
  <div class="container-shell">
    <div class="section-heading centered">
      <span class="section-kicker">Client benefits</span>
      <h2 style="margin-top:18px">Why contract manufacturing makes business sense.</h2>
    </div>

    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;margin-top:48px">
      <?php foreach ($benefits as $i => $b): ?>
      <article class="reveal-card" style="border-radius:20px;border:1px solid #e2e8f0;background:#fff;padding:24px">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <span style="display:grid;place-items:center;width:44px;height:44px;border-radius:12px;background:rgba(25,182,207,.12);color:var(--petrol)">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-sm" aria-hidden="true"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25z" clip-rule="evenodd"/></svg>
          </span>
          <span style="font-size:.75rem;font-weight:800;color:var(--slate-400)"><?= sprintf('%02d', $i + 1) ?></span>
        </div>
        <h3 style="margin-top:20px;font-size:1.1rem;font-weight:700;color:var(--navy)"><?= htmlspecialchars($b[0]) ?></h3>
        <p style="margin-top:8px;font-size:.825rem;line-height:1.6;color:var(--slate-600)"><?= htmlspecialchars($b[1]) ?></p>
      </article>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- ── Engagement Process ────────────────────────────────── -->
<section style="background:var(--navy);color:#fff;padding-block:80px;position:relative;overflow:hidden">
  <div class="glow-orb" style="top:0;right:0;width:384px;height:384px;background:rgba(25,182,207,.1)" aria-hidden="true"></div>
  <div class="container-shell" style="position:relative">
    <div class="section-heading">
      <span class="section-kicker" style="color:var(--cyan)">Engagement process</span>
      <h2 style="margin-top:18px;color:#fff">A clear path from enquiry to delivery.</h2>
      <p style="color:rgba(255,255,255,.75)">Our structured engagement process ensures transparency, accountability, and quality at every stage of the manufacturing relationship.</p>
    </div>

    <!-- 7 Steps Process Timeline -->
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:14px;margin-top:48px">
      <?php foreach ($engagement_steps as $i => $step): ?>
      <div style="border-radius:16px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05);padding:18px;text-align:center">
        <span style="display:inline-block;border-radius:50%;background:rgba(25,182,207,.2);color:var(--cyan);width:28px;height:28px;line-height:28px;font-size:.75rem;font-weight:800">
          <?= $i + 1 ?>
        </span>
        <h4 style="margin-top:12px;font-size:.825rem;font-weight:700;color:#fff"><?= htmlspecialchars($step) ?></h4>
      </div>
      <?php endforeach; ?>
    </div>

    <div style="margin-top:40px;text-align:center">
      <a href="/contact.php" class="btn-primary" style="background:#fff;color:var(--navy);padding:14px 28px;font-size:.9rem">
        Start the Process
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="icon-sm" aria-hidden="true"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"/></svg>
      </a>
    </div>
  </div>
</section>

<!-- ── Capabilities Grid ─────────────────────────────────── -->
<section class="page-bg-white" style="padding-block:80px">
  <div class="container-shell">
    <div style="display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:20px">
      <div class="section-heading">
        <span class="section-kicker">Solid Oral Capabilities</span>
        <h2 style="margin-top:18px">Dedicated Tablets &amp; Capsules Infrastructure.</h2>
        <p>Our contract manufacturing operations are purpose-built for solid oral dosage forms — ensuring high compression speed, tight weight tolerances, and controlled dissolution.</p>
      </div>
      <a href="/products.php" style="display:inline-flex;align-items:center;gap:6px;font-size:.75rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--petrol)">
        Inspect technical specs
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="icon-sm" aria-hidden="true"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"/></svg>
      </a>
    </div>

    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:24px;margin-top:48px">
      <!-- Tablets -->
      <article class="reveal-card" style="border-radius:24px;border:1px solid #e2e8f0;background:linear-gradient(to bottom,#fff,#f8fafc);padding:32px;display:flex;flex-direction:column;justify-content:space-between">
        <div>
          <div style="display:flex;justify-content:space-between;align-items:center">
            <span style="display:grid;place-items:center;width:52px;height:52px;border-radius:14px;background:var(--navy);color:var(--cyan);font-size:.825rem;font-weight:800;letter-spacing:.1em">TB</span>
            <span style="border-radius:999px;background:rgba(25,182,207,.15);padding:4px 12px;font-size:.7rem;font-weight:800;text-transform:uppercase;color:var(--petrol)">Primary Form</span>
          </div>
          <h3 style="margin-top:24px;font-size:1.5rem;font-weight:800;color:var(--navy)">Tablets Formulation</h3>
          <p style="margin-top:8px;font-size:.875rem;line-height:1.6;color:var(--slate-600)">High-speed rotary compression, aqueous and organic polymer film coating, enteric coating, and bilayer capabilities.</p>
        </div>
        <div style="margin-top:24px;padding-top:20px;border-top:1px solid #e2e8f0;display:flex;justify-content:space-between;align-items:center">
          <span style="font-size:.75rem;font-weight:600;color:var(--slate-400)">Validated Production</span>
          <a href="/contact.php?interest=Tablet%20Manufacturing" style="display:inline-flex;align-items:center;gap:6px;font-size:.78rem;font-weight:700;color:var(--petrol)">
            Request Quote
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="icon-sm" aria-hidden="true"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"/></svg>
          </a>
        </div>
      </article>

      <!-- Capsules -->
      <article class="reveal-card" style="border-radius:24px;border:1px solid #e2e8f0;background:linear-gradient(to bottom,#fff,#f8fafc);padding:32px;display:flex;flex-direction:column;justify-content:space-between">
        <div>
          <div style="display:flex;justify-content:space-between;align-items:center">
            <span style="display:grid;place-items:center;width:52px;height:52px;border-radius:14px;background:var(--petrol);color:#fff;font-size:.825rem;font-weight:800;letter-spacing:.1em">CP</span>
            <span style="border-radius:999px;background:rgba(8,107,120,.15);padding:4px 12px;font-size:.7rem;font-weight:800;text-transform:uppercase;color:var(--navy)">Primary Form</span>
          </div>
          <h3 style="margin-top:24px;font-size:1.5rem;font-weight:800;color:var(--navy)">Capsules Encapsulation</h3>
          <p style="margin-top:8px;font-size:.875rem;line-height:1.6;color:var(--slate-600)">Hard gelatin and vegetarian HPMC capsule filling for powder blends, micro-pellets, and controlled multi-unit granules.</p>
        </div>
        <div style="margin-top:24px;padding-top:20px;border-top:1px solid #e2e8f0;display:flex;justify-content:space-between;align-items:center">
          <span style="font-size:.75rem;font-weight:600;color:var(--slate-400)">Validated Production</span>
          <a href="/contact.php?interest=Capsule%20Manufacturing" style="display:inline-flex;align-items:center;gap:6px;font-size:.78rem;font-weight:700;color:var(--petrol)">
            Request Quote
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="icon-sm" aria-hidden="true"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"/></svg>
          </a>
        </div>
      </article>
    </div>
  </div>
</section>

<!-- ── Services Grid ─────────────────────────────────────── -->
<section class="page-bg-mist" style="padding-block:80px">
  <div class="container-shell">
    <div class="section-heading centered">
      <span class="section-kicker">Services</span>
      <h2 style="margin-top:18px">Flexible support for pharmaceutical business needs.</h2>
    </div>

    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;margin-top:48px">
      <?php foreach ($services as $srv): ?>
      <article class="reveal-card" style="border-radius:20px;border:1px solid #e2e8f0;background:#fff;padding:24px;display:flex;flex-direction:column;justify-content:space-between;min-height:160px">
        <span style="display:grid;place-items:center;width:40px;height:40px;border-radius:10px;background:#f1f5f9;color:var(--petrol)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-sm" aria-hidden="true"><path d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z"/></svg>
        </span>
        <h3 style="margin-top:16px;font-size:1.05rem;font-weight:700;color:var(--navy)"><?= htmlspecialchars($srv) ?></h3>
        <a href="/contact.php" style="margin-top:12px;display:inline-flex;align-items:center;gap:6px;font-size:.75rem;font-weight:700;color:var(--petrol)">
          Discuss this service
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="icon-xs" aria-hidden="true"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"/></svg>
        </a>
      </article>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- ── Suitable For ──────────────────────────────────────── -->
<section class="page-bg-white" style="padding-block:80px">
  <div class="container-shell" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:48px;align-items:start">
    <div class="section-heading">
      <span class="section-kicker">Suitable for</span>
      <h2 style="margin-top:18px">Who benefits from our contract manufacturing?</h2>
      <p>Our services are designed for pharmaceutical businesses and organisations that need reliable, documented production support.</p>
    </div>

    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:14px">
      <?php foreach ($suitable_for as $item): ?>
      <div style="display:flex;align-items:flex-start;gap:12px;border-radius:14px;border:1px solid #e2e8f0;background:#fff;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,.03)">
        <span style="display:grid;place-items:center;width:22px;height:22px;border-radius:50%;background:var(--petrol);color:#fff;font-size:11px;flex-shrink:0;margin-top:2px">✓</span>
        <p style="font-size:.85rem;font-weight:600;color:var(--navy);line-height:1.5"><?= htmlspecialchars($item) ?></p>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- ── CTA ──────────────────────────────────────────────── -->
<section class="cta-navy" style="padding-block:80px;text-align:center">
  <div class="container-narrow">
    <span class="section-kicker" style="color:var(--cyan)">Start your project</span>
    <h2 style="margin-top:18px;color:#fff;font-size:2rem">Let's discuss your manufacturing requirement.</h2>
    <p style="margin-top:14px;color:rgba(255,255,255,.8);font-size:.95rem;line-height:1.7;max-width:580px;margin-inline:auto">Share your product details and business needs. Our team will provide a structured response within one working day.</p>
    <div style="margin-top:32px">
      <a href="/contact.php" class="btn-primary" style="background:#fff;color:var(--navy);padding:14px 28px;font-size:.95rem">
        Request a Quote
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="icon-sm" aria-hidden="true"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"/></svg>
      </a>
    </div>
  </div>
</section>

</main>

<?php require 'includes/footer.php'; ?>

