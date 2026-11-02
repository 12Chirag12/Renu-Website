<?php
$page_title = 'Manufacturing Facilities & Machinery — Renumed Pharma';
$page_desc  = "Explore Renumed Pharma's advanced pharmaceutical manufacturing facilities, rotary compression machinery, automated coating pans, and blister packaging infrastructure.";
require 'includes/head.php';
require 'includes/header.php';

$infrastructure_areas = [
  ['Compression Suites', 'Dedicated cubicles housing 9 rotary tablet punching presses with controlled differential pressures.'],
  ['Coating Section', 'Automated perforated autocoater and pan coating installations for aqueous and film applications.'],
  ['Granulation & Mixing', 'Rapid mixer granulator (RMG) and powder blender suites for uniform granulation preparation.'],
  ['Packaging Department', 'Alu-Alu cold form, PVC/PVDC blister lines, vertical pouching, and high-speed striping machinery.'],
  ['Quality Testing Lab', 'Analytical testing suites equipped for disintegration, friability, dissolution, and hardness tests.'],
  ['Material Warehousing', 'Controlled quarantine, active raw material, excipient, and finished goods storage zones.'],
];

$machinery_sections = [
  // Production
  [
    'name' => 'Coating',
    'dept' => 'production',
    'key' => 'coating',
    'desc' => 'Controlled tablet-coating operations supporting consistent product appearance and finishing.',
    'machines' => [
      ['Autocoater', 'Automated perforated pan coating system for precision aqueous and organic film coating.'],
      ['Coating Pan 36"', 'Conventional 36-inch coating pan for controlled batch sugar and film coating applications.'],
      ['Coating Pan 48I"', '48-inch coating pan unit I for medium-to-large scale tablet finishing and polishing.'],
      ['Coating Pan 48II"', '48-inch coating pan unit II engineered for uniform solution spray and batch replication.'],
      ['Coating Pan 48III"', '48-inch coating pan unit III dedicated to specialized protective and aesthetic tablet coats.'],
    ]
  ],
  [
    'name' => 'Compression',
    'dept' => 'production',
    'key' => 'compression',
    'desc' => 'Tablet compression equipment supporting different production requirements and station configurations.',
    'machines' => [
      ['Punching M/c-1[45stn]', 'High-speed 45-station rotary tablet punching press for continuous commercial output.'],
      ['Punching M/c-2[41stn]', '41-station compression press with precision weight adjustment and low friability control.'],
      ['Punching M/c-3[27stn]', '27-station rotary press ideal for specialized tooling, larger cores, and pilot batches.'],
      ['Punching M/c-4[41stn]', '41-station tablet compression machine supporting multi-parameter in-process monitoring.'],
      ['Punching M/c-5[41stn]', '41-station high-efficiency rotary press calibrated for uniform core hardness.'],
      ['Punching M/c-6[35stn]', '35-station rotary punching machine optimized for modified-shape tablets and caplets.'],
      ['Punching M/c-7[75stn]', 'High-output 75-station double-sided rotary press for large volume tablet manufacturing.'],
      ['Punching M/c-8[51stn]', '51-station rotary press designed for rapid changeovers and high tooling flexibility.'],
      ['Punching M/c-9[75stn]', '75-station high-capacity rotary compression press built for long-run consistency.'],
    ]
  ],
  [
    'name' => 'Granulation',
    'dept' => 'production',
    'key' => 'granulation',
    'desc' => 'Granulation-stage equipment supporting preparation of material for tablet manufacturing.',
    'machines' => [
      ['PLM', 'Planetary / Powder Loader Mixer equipment for controlled preparation of granulation mass.'],
      ['RMG', 'Rapid Mixer Granulator for high-shear wet granulation and uniform binder dispersion.'],
    ]
  ],
  [
    'name' => 'Lubrication',
    'dept' => 'production',
    'key' => 'lubrication',
    'desc' => 'Blending equipment for uniform mixing during formulation processing.',
    'machines' => [
      ['Oct Blender', 'Octagonal blender for gentle, low-shear lubrication and uniform blend homogeneity.'],
      ['Double Cone Blender', 'Double cone blender providing balanced tumbling action for sensitive active blends.'],
    ]
  ],
  // Packing
  [
    'name' => 'Blister',
    'dept' => 'packing',
    'key' => 'blister',
    'desc' => 'Blister packaging infrastructure for secure and professional pharmaceutical presentation.',
    'machines' => [
      ['Allu Allu -V', 'Cold-form Alu-Alu blister packaging machine ensuring zero-moisture transmission barrier.'],
      ['Blister-I', 'Automated rotary blister packing machine unit I for thermoformed PVC/PVDC packaging.'],
      ['Blister-II', 'High-speed blister packaging unit II with camera inspection and leak testing integration.'],
      ['Blister-III', 'Flexible tooling blister packing unit III for variable tablet dimensions and push-through foil.'],
      ['Blister-IV', 'Blister packing machine unit IV calibrated for continuous batch seal integrity.'],
    ]
  ],
  [
    'name' => 'Pouching',
    'dept' => 'packing',
    'key' => 'pouching',
    'desc' => 'Pouch filling equipment for efficient and reliable unit packaging.',
    'machines' => [
      ['Pouch Filling M/c-1', 'Automated vertical pouch forming and filling machine unit 1 with hermetic sealing.'],
      ['Pouch Filling M/c-2', 'High-accuracy pouch filling machine unit 2 supporting multi-track foil laminate pouches.'],
      ['Pouch Filling M/c-3', 'Unit-dose pouch packaging machine unit 3 with tear-notch and batch coding integration.'],
    ]
  ],
  [
    'name' => 'Striping',
    'dept' => 'packing',
    'key' => 'striping',
    'desc' => 'Strip packaging equipment supporting practical and protected pharmaceutical packaging.',
    'machines' => [
      ['Striping M/c-1', 'High-speed strip packaging machine unit 1 for poly/foil strip sealing.'],
      ['Striping M/c-2', 'Precision heat-seal strip packaging unit 2 engineered for light and humidity protection.'],
      ['Striping M/c-3', 'Strip packaging machine unit 3 supporting perforated multi-tablet consumer strips.'],
    ]
  ]
];
?>


<!-- ── 1. Facilities Hero ────────────────────────────────── -->
<section class="page-bg-mist" style="padding-block:72px;position:relative;overflow:hidden">
  <div class="glow-orb" style="top:-80px;left:-80px;width:384px;height:384px;background:rgba(25,182,207,.2)" aria-hidden="true"></div>
  <div class="glow-orb" style="top:50%;right:-96px;width:384px;height:384px;background:rgba(8,107,120,.15)" aria-hidden="true"></div>

  <div class="container-shell" style="position:relative">
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:48px;align-items:center">
      <div>
        <div style="display:inline-flex;align-items:center;gap:8px;border-radius:999px;border:1px solid rgba(8,107,120,.2);background:rgba(255,255,255,.95);padding:6px 14px;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.15em;color:var(--petrol);box-shadow:0 2px 8px rgba(0,0,0,.04)">
          <span style="width:6px;height:6px;border-radius:50%;background:var(--cyan)"></span>
          Infrastructure &amp; Technology
        </div>

        <h1 style="margin-top:24px;font-size:2.5rem;font-weight:800;line-height:1.1;color:var(--navy)">
          Advanced Pharmaceutical Manufacturing Facilities
        </h1>

        <p style="margin-top:20px;max-width:540px;font-size:1.05rem;line-height:1.75;color:var(--slate-600)">
          Modern production and packaging infrastructure designed to support reliable pharmaceutical manufacturing.
        </p>

        <!-- Total Machinery Banner -->
        <div style="margin-top:28px;display:inline-flex;align-items:center;gap:14px;border-radius:18px;border:1px solid rgba(25,182,207,.3);background:rgba(255,255,255,.9);padding:14px 20px;box-shadow:0 4px 16px rgba(25,182,207,.08)">
          <span style="display:grid;place-items:center;width:40px;height:40px;border-radius:12px;background:var(--navy);color:var(--cyan);font-size:.875rem;font-weight:800;flex-shrink:0">
            29
          </span>
          <div>
            <p style="font-size:.78rem;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:var(--navy)">
              29 Manufacturing &amp; Packaging Machines
            </p>
            <p style="font-size:.72rem;color:var(--slate-500)">
              Production &amp; Packing Departments · 7 Operational Sections
            </p>
          </div>
        </div>

        <!-- Buttons -->
        <div style="margin-top:32px;display:flex;flex-wrap:wrap;gap:14px">
          <a href="#machinery" class="btn-primary" style="padding:14px 28px;font-size:.875rem">
            Explore Our Machinery
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="icon-sm" aria-hidden="true"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"/></svg>
          </a>
          <a href="/contact.php" class="btn-outline" style="padding:14px 28px;font-size:.875rem">
            Contact Us
          </a>
        </div>
      </div>

      <!-- Laboratory Image Visual -->
      <div>
        <div style="position:relative;border-radius:28px;overflow:hidden;border:1px solid rgba(255,255,255,.8);box-shadow:0 20px 48px rgba(15,27,61,.18)">
          <img src="/images/quality-laboratory.png" alt="Indian pharmaceutical analytical chemists conducting testing in modern laboratory" style="width:100%;height:auto;display:block;aspect-ratio:4/3;object-fit:cover" />
          <div style="position:absolute;inset-inline:20px;bottom:20px;border-radius:18px;background:rgba(15,27,61,.92);padding:18px;color:#fff;backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.1)">
            <div style="display:flex;justify-content:space-between;align-items:center">
              <span style="font-size:.68rem;font-weight:800;text-transform:uppercase;letter-spacing:.15em;color:var(--cyan)">Quality Control &amp; Analytical Suites</span>
              <span style="font-size:.68rem;color:rgba(255,255,255,.6)">In-Process Testing</span>
            </div>
            <p style="margin-top:6px;font-weight:700;font-size:.95rem">Analytical Testing &amp; Quality Assurance Suites</p>
            <p style="margin-top:4px;font-size:.75rem;color:rgba(255,255,255,.75)">Comprehensive testing infrastructure supporting tablet compression and capsule encapsulation.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ── Plant Production Capacity ─────────────────────────── -->
<section style="background:#fff;padding-block:48px;border-bottom:1px solid #f1f5f9">
  <div class="container-shell" style="max-width:960px">
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px">
      <!-- Tablets -->
      <div style="border-radius:20px;border:1px solid rgba(25,182,207,.3);background:linear-gradient(135deg,#f8fafc 0%,#fff 100%);padding:24px">
        <div style="display:flex;align-items:center;justify-content:space-between">
          <span style="font-size:.7rem;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:var(--petrol)">Tablets Output</span>
          <span style="border-radius:999px;background:rgba(25,182,207,.15);padding:3px 10px;font-size:.68rem;font-weight:800;color:var(--petrol)">Per Annum</span>
        </div>
        <div class="js-counter display-face" data-target="1500" data-suffix="+" style="font-size:2.75rem;font-weight:800;color:var(--navy);margin-top:12px;font-family:monospace">1500+</div>
        <p style="font-size:.875rem;font-weight:700;color:var(--petrol);margin-top:4px">Million Tablets</p>
        <p style="font-size:.75rem;color:var(--slate-500);margin-top:4px">Solid oral formulation compression &amp; film coating capacity.</p>
      </div>

      <!-- Capsules -->
      <div style="border-radius:20px;border:1px solid rgba(8,107,120,.3);background:linear-gradient(135deg,#f8fafc 0%,#fff 100%);padding:24px">
        <div style="display:flex;align-items:center;justify-content:space-between">
          <span style="font-size:.7rem;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:var(--navy)">Capsules Output</span>
          <span style="border-radius:999px;background:rgba(8,107,120,.15);padding:3px 10px;font-size:.68rem;font-weight:800;color:var(--navy)">Per Annum</span>
        </div>
        <div class="js-counter display-face" data-target="960" data-suffix="+" style="font-size:2.75rem;font-weight:800;color:var(--navy);margin-top:12px;font-family:monospace">960+</div>
        <p style="font-size:.875rem;font-weight:700;color:var(--petrol);margin-top:4px">Million Capsules</p>
        <p style="font-size:.75rem;color:var(--slate-500);margin-top:4px">Automated encapsulation suites for powders, pellets &amp; granules.</p>
      </div>
    </div>
  </div>
</section>

<!-- ── Machinery Explorer ────────────────────────────────── -->
<section id="machinery" class="page-bg-mist" style="padding-block:80px;border-bottom:1px solid #f1f5f9">
  <div class="container-shell">
    <div style="display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:20px">
      <div class="section-heading">
        <span class="section-kicker">Installed Infrastructure</span>
        <h2 style="margin-top:18px">Approved Machinery Inventory by Department &amp; Section.</h2>
        <p>Explore our verified manufacturing and packaging machinery inventory. Grouped by department and operational section to provide clear visibility into our processing equipment.</p>
      </div>
      <div>
        <span style="display:inline-flex;align-items:center;gap:8px;border-radius:12px;background:#fff;padding:8px 16px;font-size:.75rem;font-weight:700;color:var(--navy);border:1px solid #e2e8f0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-sm" style="color:var(--petrol)" aria-hidden="true"><path fill-rule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5h-6zm.75 3a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zm0 3a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zm0 3a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z" clip-rule="evenodd"/></svg>
          Verified Operational Equipment
        </span>
      </div>
    </div>

    <!-- Filter Tabs -->
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:36px">
      <button type="button" class="filter-tab active" data-dept="all" style="border-radius:999px;padding:8px 18px;font-size:.78rem;font-weight:700;border:1px solid #e2e8f0;background:var(--navy);color:#fff;cursor:pointer">All Machinery (29)</button>
      <button type="button" class="filter-tab" data-dept="production" style="border-radius:999px;padding:8px 18px;font-size:.78rem;font-weight:700;border:1px solid #e2e8f0;background:#fff;color:var(--slate-600);cursor:pointer">Production (18)</button>
      <button type="button" class="filter-tab" data-dept="packing" style="border-radius:999px;padding:8px 18px;font-size:.78rem;font-weight:700;border:1px solid #e2e8f0;background:#fff;color:var(--slate-600);cursor:pointer">Packing (11)</button>
    </div>

    <!-- Machinery Sections Grid -->
    <div style="display:grid;gap:32px;margin-top:36px">
      <?php foreach ($machinery_sections as $sec): ?>
      <div class="machinery-section" data-dept="<?= $sec['dept'] ?>" style="border-radius:24px;border:1px solid #e2e8f0;background:#fff;padding:28px;box-shadow:0 4px 16px rgba(15,27,61,.04)">
        <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;border-bottom:1px solid #f1f5f9;padding-bottom:16px">
          <div>
            <span style="font-size:.7rem;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:var(--petrol)">Section: <?= htmlspecialchars($sec['name']) ?></span>
            <h3 style="margin-top:4px;font-size:1.25rem;font-weight:800;color:var(--navy)"><?= htmlspecialchars($sec['name']) ?> Machinery (<?= count($sec['machines']) ?> Units)</h3>
            <p style="margin-top:4px;font-size:.825rem;color:var(--slate-600)"><?= htmlspecialchars($sec['desc']) ?></p>
          </div>
          <span style="border-radius:999px;background:<?= $sec['dept'] === 'production' ? 'rgba(25,182,207,.15)' : 'rgba(8,107,120,.15)' ?>;padding:4px 12px;font-size:.7rem;font-weight:800;text-transform:uppercase;color:<?= $sec['dept'] === 'production' ? 'var(--petrol)' : 'var(--navy)' ?>">
            <?= ucfirst($sec['dept']) ?>
          </span>
        </div>

        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px;margin-top:20px">
          <?php foreach ($sec['machines'] as $m): ?>
          <div class="reveal-card" style="border-radius:14px;border:1px solid #e2e8f0;background:#f8fafc;padding:16px">
            <div style="display:flex;align-items:center;gap:10px">
              <span style="display:grid;place-items:center;width:32px;height:32px;border-radius:8px;background:#fff;color:var(--petrol);border:1px solid #e2e8f0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-xs" aria-hidden="true"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25z" clip-rule="evenodd"/></svg>
              </span>
              <h4 style="font-size:.9rem;font-weight:700;color:var(--navy)"><?= htmlspecialchars($m[0]) ?></h4>
            </div>
            <p style="margin-top:8px;font-size:.78rem;line-height:1.5;color:var(--slate-600)"><?= htmlspecialchars($m[1]) ?></p>
          </div>
          <?php endforeach; ?>
        </div>
      </div>
      <?php endforeach; ?>
    </div>

  </div>
</section>

<!-- ── Controlled Facility Areas ───────────────────────── -->
<section class="page-bg-white" style="padding-block:80px">
  <div class="container-shell">
    <div class="section-heading centered">
      <span class="section-kicker">Zoned Production Suites</span>
      <h2 style="margin-top:18px">Controlled Areas for Every Manufacturing Stage.</h2>
      <p class="section-body" style="max-width:640px;margin-inline:auto">From raw-material sampling to final tertiary dispatch, all equipment is arranged in isolated, dedicated suites with controlled air handling.</p>
    </div>

    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;margin-top:48px">
      <?php foreach ($infrastructure_areas as $idx => $area): ?>
      <div class="reveal-card" style="border-radius:18px;border:1px solid #e2e8f0;background:#fff;padding:24px;box-shadow:0 2px 8px rgba(0,0,0,.03)">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <span style="display:grid;place-items:center;width:40px;height:40px;border-radius:12px;background:rgba(25,182,207,.15);color:var(--petrol)">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-sm" aria-hidden="true"><path fill-rule="evenodd" d="M3 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5H15v-18a.75.75 0 00-.75-.75H3zM6.75 6a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5A.75.75 0 016.75 6zm0 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zm0 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z" clip-rule="evenodd"/></svg>
          </span>
          <span style="font-size:.75rem;font-weight:700;color:var(--slate-400)"><?= sprintf('%02d', $idx + 1) ?></span>
        </div>
        <h4 style="margin-top:16px;font-size:1rem;font-weight:700;color:var(--navy)"><?= htmlspecialchars($area[0]) ?></h4>
        <p style="margin-top:8px;font-size:.8rem;line-height:1.55;color:var(--slate-600)"><?= htmlspecialchars($area[1]) ?></p>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- ── Equipment Verification Notice ───────────────────── -->
<section style="background:#fff;padding-bottom:60px">
  <div class="container-shell">
    <div style="border-radius:20px;border:1px solid rgba(25,182,207,.3);background:#f8fafc;padding:24px;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:20px">
      <div style="max-width:720px">
        <p style="font-weight:800;color:var(--navy)">Equipment specifications and capacity details</p>
        <p style="margin-top:4px;font-size:.825rem;line-height:1.6;color:var(--slate-600)">
          Plant capacity is verified at 1,500+ million tablets and 960+ million capsules per annum across operational suites. Equipment names match the approved plant installation register.
        </p>
      </div>
      <div style="flex-shrink:0">
        <span style="display:inline-flex;align-items:center;gap:6px;border-radius:999px;background:rgba(25,182,207,.15);padding:6px 14px;font-size:.75rem;font-weight:800;color:var(--petrol)">
          ✓ Verified Capacity
        </span>
      </div>
    </div>
  </div>
</section>

<!-- ── CTA ──────────────────────────────────────────────── -->
<section class="cta-navy" style="padding-block:80px;text-align:center">
  <div class="container-narrow">
    <span class="section-kicker" style="color:var(--cyan)">Facility Partnerships</span>
    <h2 style="margin-top:18px;color:#fff;font-size:2rem">Discuss Your Contract Manufacturing Requirement</h2>
    <p style="margin-top:14px;color:rgba(255,255,255,.8);font-size:.95rem;line-height:1.7;max-width:580px;margin-inline:auto">Connect directly with our technical team to evaluate equipment compatibility, production scheduling, packaging formats, and formulation batch feasibility.</p>
    <div style="margin-top:32px;display:flex;justify-content:center;flex-wrap:wrap;gap:14px">
      <a href="/contact.php" class="btn-primary" style="background:#fff;color:var(--navy);padding:14px 28px;font-size:.95rem">
        Contact Renumed Pharma
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="icon-sm" aria-hidden="true"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"/></svg>
      </a>
      <a href="/contract-manufacturing.php" class="btn-outline" style="border-color:rgba(255,255,255,.3);color:#fff;padding:14px 28px;font-size:.95rem">
        Explore Our Capabilities
      </a>
    </div>
  </div>
</section>

</main>

<?php require 'includes/footer.php'; ?>

