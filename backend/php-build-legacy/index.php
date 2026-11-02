<?php
$page_title = 'Renumed Pharmaceutical Labs | Pharmaceutical Contract Manufacturing';
$page_desc  = 'Renumed Pharmaceutical Labs provides quality-focused pharmaceutical contract manufacturing, third-party production, and packaging services through disciplined, documented operations.';
require 'includes/head.php';
require 'includes/header.php';
?>

<!-- ── Hero Section ─────────────────────────────────────── -->
<section class="hero">
  <div class="glow-orb" style="top:-80px;left:-80px;width:384px;height:384px;background:rgba(25,182,207,.2)" aria-hidden="true"></div>
  <div class="glow-orb" style="top:50%;right:-96px;width:450px;height:450px;background:rgba(8,107,120,.15)" aria-hidden="true"></div>
  <div class="grid-pattern" style="position:absolute;inset:0;opacity:.7" aria-hidden="true"></div>

  <div class="container-shell hero-grid animate-rise">
    <!-- Left: Content -->
    <div style="position:relative;z-index:10">
      <!-- Badge -->
      <a href="/about.php" class="hero-badge-wrap" aria-label="Learn about Renumed Pharmaceutical — EST. 1985">
        <span class="hero-badge-inner">
          <span class="hero-badge-tag">
            <span class="badge-dot-wrap"><span class="badge-dot-ping"></span><span class="badge-dot-core"></span></span>
            EST. 1985
          </span>
          <span class="hero-badge-text">Delivering Excellence in Pharmaceutical Manufacturing<strong style="color:var(--petrol);font-weight:700"> · 40+ Years</strong></span>
          <span class="hero-badge-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="icon-xs" aria-hidden="true"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"/></svg>
          </span>
        </span>
      </a>

      <h1 class="hero-title display-face">
        <span style="display:block">RENUMED</span>
        <span class="line-cyan">Pharmaceutical</span>
        <span style="display:block">Labs</span>
      </h1>

      <p class="hero-desc">Established in 1985, <strong style="color:var(--navy)">Renumed Pharmaceutical</strong> is a trusted <strong style="color:var(--navy)">Contract Manufacturing Organisation (CMO)</strong> committed to delivering high-quality pharmaceutical products with <strong style="color:var(--navy)">consistency, efficiency</strong> and <strong style="color:var(--navy)">reliability</strong>. With decades of industry experience, we combine robust manufacturing capabilities, stringent quality standards, and a customer-centric approach to help our partners bring trusted healthcare solutions to market.</p>
      <p class="hero-desc" style="margin-top:0"><strong style="color:var(--navy)">Quality you can trust. Manufacturing you can rely on.</strong></p>

      <div class="hero-cta-row">
        <a href="/contact.php" class="btn-primary">
          Request a Quote
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="icon-sm" aria-hidden="true"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"/></svg>
        </a>
        <a href="/products.php" class="btn-outline">Explore Formulations (TB &amp; CP)</a>
      </div>

      <div class="hero-pills">
        <span class="hero-pill-label">Specialized Formats:</span>
        <span class="hero-pill">Coated &amp; Sustained Tablets</span>
        <span class="hero-pill">Gelatin &amp; HPMC Capsules</span>
        <span class="hero-pill">Alu-Alu &amp; Blister Packaging</span>
      </div>
    </div>

    <!-- Right: Image -->
    <div class="hero-visual animate-rise-delay">
      <div class="hero-img-wrap">
        <img src="/images/hero-manufacturing.png" alt="Indian pharmaceutical chemist conducting quality testing and analytical operation in cleanroom facility" loading="eager" />
        <div class="hero-img-overlay"></div>
      </div>
      <div class="hero-float-card">
        <div class="hero-float-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-md" aria-hidden="true"><path fill-rule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08z" clip-rule="evenodd"/></svg>
        </div>
        <div>
          <p class="hero-float-title">Documented Operations</p>
          <p class="hero-float-desc">Strict batch manufacturing records and in-process testing for every run.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Trust Bar -->
  <div class="trust-bar">
    <div class="container-shell trust-bar-grid">
      <?php foreach ([
        ['Tablets & Capsules Focus',  'Dedicated solid oral dosage infrastructure'],
        ['Quality-First Assurance',   'Documented verification at every stage'],
        ['Responsive Partnership',    'Direct quotes and requirement reviews in 24h'],
      ] as [$title, $sub]): ?>
      <div class="trust-bar-item">
        <p class="trust-bar-title"><?= $title ?></p>
        <p class="trust-bar-sub"><?= $sub ?></p>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- ── Metrics Section ───────────────────────────────────── -->
<section class="page-bg-white" style="padding-block:56px;border-bottom:1px solid var(--slate-100)">
  <div class="container-shell">
    <div class="metrics-grid">
      <?php
      $metrics = [
        ['1500+', 'Million Tablets / Annum', 'High-speed rotary compression capacity', 1500],
        ['960+',  'Million Capsules / Annum', 'Automatic precision encapsulation capacity', 960],
        ['29',    'Manufacturing Machines',   'Production & Packing dept — 9 sections', 29],
        ['40+',   'Years of Experience',      'Established 1985, trusted CMO partnership', 40],
      ];
      foreach ($metrics as [$num, $label, $sub, $target]): ?>
      <div class="metric-card">
        <div class="metric-number js-counter" data-target="<?= $target ?>" data-suffix="+" aria-label="<?= $num ?>">0+</div>
        <p class="metric-label"><?= $label ?></p>
        <p class="metric-sub"><?= $sub ?></p>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- ── Global Reach / Africa Map ────────────────────────── -->
<section class="page-bg-white" style="padding-block:80px;overflow:hidden;position:relative">
  <div class="glow-orb" style="top:-80px;left:-80px;width:320px;height:320px;background:rgba(25,182,207,.15)" aria-hidden="true"></div>
  <div class="glow-orb" style="bottom:0;right:0;width:384px;height:384px;background:rgba(8,107,120,.1)" aria-hidden="true"></div>
  <div class="container-shell map-section-grid" style="position:relative">
    <!-- Left -->
    <div>
      <div class="section-heading">
        <span class="section-kicker kicker">Global Reach</span>
        <h2 style="margin-top:18px">Delivering across the African continent.</h2>
        <p>Our pharmaceutical products reach multiple nations, supporting healthcare access from West Africa to Central Africa and beyond. We partner with regional distributors and institutional buyers to supply dependable, batch-verified solid oral formulations.</p>
      </div>
      <div style="display:grid;gap:14px;margin-top:32px" class="quality-cards-grid">
        <div class="reveal-card" style="border-radius:16px;border:1px solid rgba(226,232,240,.9);background:rgba(255,255,255,.92);padding:16px;box-shadow:0 2px 8px rgba(0,0,0,.04)">
          <div style="display:flex;align-items:flex-start;gap:14px">
            <span style="display:grid;place-items:center;width:40px;height:40px;border-radius:14px;background:rgba(25,182,207,.15);color:var(--petrol);flex-shrink:0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-md" aria-hidden="true"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.562-.766 4.5 4.5 0 01-1.318 1.357L14.25 7.5l.165.33a.809.809 0 01-1.086 1.085l-.604-.302a1.125 1.125 0 00-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 01-2.288 4.04l-.723.724a1.125 1.125 0 01-1.298.21l-.153-.076a1.125 1.125 0 01-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 01-.21-1.298L9.75 12l-1.64-1.64a6 6 0 01-1.676-3.257l-.172-1.03z" clip-rule="evenodd"/></svg>
            </span>
            <div>
              <h4 style="font-size:.875rem;font-weight:700;color:var(--navy)">6 Key Markets</h4>
              <p style="margin-top:4px;font-size:.72rem;line-height:1.5;color:var(--slate-500)">Active distribution in Sierra Leone, Nigeria, Chad, Niger, Congo &amp; Angola.</p>
            </div>
          </div>
        </div>
        <div class="reveal-card" style="border-radius:16px;border:1px solid rgba(226,232,240,.9);background:rgba(255,255,255,.92);padding:16px;box-shadow:0 2px 8px rgba(0,0,0,.04)">
          <div style="display:flex;align-items:flex-start;gap:14px">
            <span style="display:grid;place-items:center;width:40px;height:40px;border-radius:14px;background:rgba(25,182,207,.15);color:var(--petrol);flex-shrink:0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-md" aria-hidden="true"><path fill-rule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08z" clip-rule="evenodd"/></svg>
            </span>
            <div>
              <h4 style="font-size:.875rem;font-weight:700;color:var(--navy)">Export Dossiers</h4>
              <p style="margin-top:4px;font-size:.72rem;line-height:1.5;color:var(--slate-500)">Batch manufacturing records, COA &amp; stability documentation ready for customs.</p>
            </div>
          </div>
        </div>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:14px;margin-top:32px">
        <a href="/contact.php" class="btn-primary" style="padding:14px 24px;font-size:.875rem">Inquire for Export Supply
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="icon-sm" aria-hidden="true"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"/></svg>
        </a>
        <a href="/quality.php" class="btn-outline" style="font-size:.875rem">Quality Assurance</a>
      </div>
    </div>
    <!-- Right: Africa SVG Map -->
    <div id="africa-map">
      <?php include 'includes/africa-map.php'; ?>
    </div>
  </div>
</section>

<!-- ── Dosage Spotlight ──────────────────────────────────── -->
<section class="page-bg-mist" style="padding-block:96px;overflow:hidden;position:relative">
  <div class="glow-orb" style="top:-96px;right:0;width:320px;height:320px;background:rgba(25,182,207,.15)" aria-hidden="true"></div>
  <div class="container-shell" style="position:relative">
    <div style="display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:24px;margin-bottom:56px">
      <div class="section-heading">
        <span class="section-kicker">Primary Formulations</span>
        <h2 style="margin-top:18px">Specialized in Tablets &amp; Capsules.</h2>
        <p>Our manufacturing capabilities are focused exclusively on solid oral dosage forms to deliver high precision, uniform potency, and batch-to-batch consistency.</p>
      </div>
      <a href="/products.php" class="btn-primary" style="font-size:.875rem">Detailed Specifications
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="icon-sm" aria-hidden="true"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"/></svg>
      </a>
    </div>
    <div class="dosage-grid">
      <!-- Tablets -->
      <div class="dosage-card reveal-card">
        <div class="dosage-top-bar" style="background:linear-gradient(to right,var(--navy),var(--cyan),var(--navy))"></div>
        <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-top:16px">
          <span class="dosage-code" style="background:var(--navy);color:var(--cyan)">TB</span>
          <span class="dosage-badge" style="background:rgba(25,182,207,.15);color:var(--petrol)">
            <span style="width:6px;height:6px;border-radius:50%;background:var(--cyan)"></span>
            Solid Oral Dosage
          </span>
        </div>
        <h3>Tablet Formulations</h3>
        <p style="font-size:.875rem;line-height:1.7;color:var(--slate-600)">High-speed rotary compression with advanced aqueous and organic film coating, enteric protection, and controlled extended-release matrices.</p>
        <div class="dosage-capacity-box" style="border-color:rgba(25,182,207,.25);background:linear-gradient(to bottom right,rgba(242,247,249,.95),white,rgba(25,182,207,.1))">
          <div class="dosage-cap-top">
            <div style="display:flex;align-items:center;gap:8px">
              <span class="dot-live-wrap"><span class="dot-live-ping" style="background:var(--cyan)"></span><span class="dot-live-core" style="background:var(--cyan);box-shadow:0 0 8px #19b6cf"></span></span>
              <span class="cap-label">Annual Production Capacity</span>
            </div>
            <span class="cap-verified" style="color:var(--petrol);border-color:rgba(25,182,207,.2);background:rgba(25,182,207,.15)">Verified Scale</span>
          </div>
          <div style="margin-top:12px;display:flex;align-items:baseline;gap:10px">
            <span class="dosage-number js-counter" data-target="1500" data-suffix="+" aria-label="1500+">0+</span>
            <span class="dosage-unit">Million Tablets <span>/ annum</span></span>
          </div>
          <p style="margin-top:4px;font-size:.72rem;color:var(--slate-500)">Multi-station high-speed rotary compression supporting multi-million commercial runs.</p>
          <div class="micro-chips">
            <?php foreach (['Rotary Punching','Film & Enteric Coating','Alu-Alu Blistering'] as $c): ?>
            <span class="micro-chip"><span class="micro-chip-dot" style="background:var(--cyan)"></span><?= $c ?></span>
            <?php endforeach; ?>
          </div>
        </div>
        <ul class="feature-list">
          <?php foreach (['Film-Coated & Enteric-Coated Tablets','Sustained, Modified & Extended Release','Fast-Dispersible & Chewable Formulations','Bilayer & Multilayer Incompatibility Separation','Alu-Alu Cold Form & PVC/PVDC Blister Packing'] as $f): ?>
          <li class="feature-item">
            <span class="check-circle" style="background:rgba(25,182,207,.2);color:var(--petrol)">✓</span>
            <?= $f ?>
          </li>
          <?php endforeach; ?>
        </ul>
        <div class="dosage-footer">
          <span class="dosage-range">Tooling Range: 5mm to 22mm</span>
          <a href="/products.php" class="dosage-link">View Tablet Specs
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="icon-xs" aria-hidden="true"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"/></svg>
          </a>
        </div>
      </div>
      <!-- Capsules -->
      <div class="dosage-card reveal-card">
        <div class="dosage-top-bar" style="background:linear-gradient(to right,var(--petrol),var(--cyan),var(--petrol))"></div>
        <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-top:16px">
          <span class="dosage-code" style="background:var(--petrol);color:#fff">CP</span>
          <span class="dosage-badge" style="background:rgba(8,107,120,.1);color:var(--navy)">
            <span style="width:6px;height:6px;border-radius:50%;background:var(--petrol)"></span>
            Encapsulation
          </span>
        </div>
        <h3>Capsule Formulations</h3>
        <p style="font-size:.875rem;line-height:1.7;color:var(--slate-600)">High-precision automatic encapsulation for powders, granules, controlled-release pellets, and combination fills with weight control.</p>
        <div class="dosage-capacity-box" style="border-color:rgba(8,107,120,.25);background:linear-gradient(to bottom right,rgba(242,247,249,.9),white,rgba(8,107,120,.1))">
          <div class="dosage-cap-top">
            <div style="display:flex;align-items:center;gap:8px">
              <span class="dot-live-wrap"><span class="dot-live-ping" style="background:var(--petrol)"></span><span class="dot-live-core" style="background:var(--petrol);box-shadow:0 0 8px #086b78"></span></span>
              <span class="cap-label">Annual Production Capacity</span>
            </div>
            <span class="cap-verified" style="color:var(--navy);border-color:rgba(8,107,120,.2);background:rgba(8,107,120,.15)">Verified Scale</span>
          </div>
          <div style="margin-top:12px;display:flex;align-items:baseline;gap:10px">
            <span class="dosage-number js-counter" data-target="960" data-suffix="+" aria-label="960+">0+</span>
            <span class="dosage-unit">Million Capsules <span>/ annum</span></span>
          </div>
          <p style="margin-top:4px;font-size:.72rem;color:var(--slate-500)">Automatic high-precision encapsulation suites for powder blends and micro-pellets.</p>
          <div class="micro-chips">
            <?php foreach (['Sizes 00 to 4','HPMC Vegetarian & Gelatin','MUPS Pellets'] as $c): ?>
            <span class="micro-chip"><span class="micro-chip-dot" style="background:var(--petrol)"></span><?= $c ?></span>
            <?php endforeach; ?>
          </div>
        </div>
        <ul class="feature-list">
          <?php foreach (['Hard Gelatin Capsules (HGC) Size 00 to 4','Vegetarian (HPMC) Capsules for Hygroscopic APIs','Pellets-in-Capsule (MUPS & Enteric Coated)','Banded & Tamper-Evident Capsule Enclosures','Moisture-Barrier Alu-Alu & Desiccant Bottle Packs'] as $f): ?>
          <li class="feature-item">
            <span class="check-circle" style="background:rgba(8,107,120,.15);color:var(--petrol)">✓</span>
            <?= $f ?>
          </li>
          <?php endforeach; ?>
        </ul>
        <div class="dosage-footer">
          <span class="dosage-range">Available Sizes: 00, 0, 1, 2, 3, 4</span>
          <a href="/products.php" class="dosage-link">View Capsule Specs
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="icon-xs" aria-hidden="true"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"/></svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ── Services Overview ─────────────────────────────────── -->
<section class="page-bg-white" style="padding-block:96px">
  <div class="container-shell">
    <div style="display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:24px">
      <div class="section-heading">
        <span class="section-kicker">Our services</span>
        <h2 style="margin-top:18px">Comprehensive solid oral manufacturing support.</h2>
        <p>From formula granulation and compression to encapsulation, packaging, and regulatory documentation, we handle the entire production lifecycle.</p>
      </div>
      <a href="/contract-manufacturing.php" style="display:inline-flex;align-items:center;gap:8px;font-size:.875rem;font-weight:700;color:var(--petrol);transition:color .2s">
        Explore contract manufacturing
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="icon-sm" aria-hidden="true"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"/></svg>
      </a>
    </div>
    <div class="services-grid">
      <?php
      $services = [
        ['Contract Manufacturing',     'Complete tablet and capsule manufacturing from raw API blending to finished packaged products.'],
        ['Third-Party Manufacturing',  'Scalable production partnerships for pharmaceutical companies seeking reliable capacity.'],
        ['Formulation Optimization',   'Technical support for tablet coating, modified release profiles, and capsule filling consistency.'],
        ['Blister & Bottle Packaging', 'Alu-Alu, PVC/PVDC blister packing, and automated induction-sealed bottle packaging.'],
        ['Batch Documentation',        'Comprehensive batch manufacturing records (BMR), certificates of analysis, and stability data.'],
        ['Quality Control Testing',    'Analytical testing for dissolution, assay, friability, hardness, and disintegration.'],
      ];
      foreach ($services as [$title, $desc]): ?>
      <div class="service-card reveal-card">
        <div class="service-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-md" aria-hidden="true"><path fill-rule="evenodd" d="M4.5 9.75a6 6 0 0111.573-2.226 3.75 3.75 0 014.133 4.303A4.5 4.5 0 0118 20.25H6.75a5.25 5.25 0 01-2.23-10.004 6.072 6.072 0 01-.02-.496z" clip-rule="evenodd"/></svg>
        </div>
        <h3 class="service-title"><?= htmlspecialchars($title) ?></h3>
        <p class="service-desc"><?= htmlspecialchars($desc) ?></p>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- ── Quality Preview ───────────────────────────────────── -->
<section class="page-bg-mist" style="padding-block:96px">
  <div class="container-shell quality-preview-grid">
    <div>
      <div class="section-heading">
        <span class="section-kicker">Quality approach</span>
        <h2 style="margin-top:18px">Quality is a system of connected decisions.</h2>
        <p>Our quality approach is built on systematic inspection, complete batch documentation, and strict traceability.</p>
      </div>
      <a href="/quality.php" style="margin-top:32px;display:inline-flex;align-items:center;gap:8px;font-size:.875rem;font-weight:700;color:var(--petrol);transition:color .2s">
        Learn about our quality standards
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="icon-sm" aria-hidden="true"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"/></svg>
      </a>
    </div>
    <div class="quality-cards-grid">
      <?php
      $qItems = [
        ['Raw-material inspection',       'Review of incoming API and excipients against defined requirements before use.'],
        ['In-process checks',             'Planned observations, friability, hardness, and disintegration checks during compression & filling.'],
        ['Finished-product evaluation',   'Review against applicable, approved release specifications.'],
        ['Batch documentation',           'Structured batch manufacturing records supporting full review and accountable decisions.'],
      ];
      foreach ($qItems as $i => [$title, $text]): ?>
      <div class="quality-card marquee-line">
        <div style="display:flex;gap:16px">
          <span class="quality-card-num"><?= str_pad($i+1,2,'0',STR_PAD_LEFT) ?></span>
          <div>
            <h3><?= htmlspecialchars($title) ?></h3>
            <p><?= htmlspecialchars($text) ?></p>
          </div>
        </div>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- ── CTA Banner ───────────────────────────────────────── -->
<section class="cta-banner">
  <div class="container-shell" style="position:relative;z-index:1">
    <span class="section-kicker on-dark kicker" style="justify-content:center;display:flex">Ready to partner?</span>
    <h2 style="margin-top:16px">Start a focused conversation with our team.</h2>
    <p>Tell us about your tablet or capsule contract manufacturing requirement. We respond to every enquiry promptly.</p>
    <div class="cta-banner-btns">
      <a href="/contact.php" class="btn-primary btn-white">Request a Quote
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="icon-sm" aria-hidden="true"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"/></svg>
      </a>
    </div>
  </div>
</section>

<?php require 'includes/footer.php'; ?>

