<?php
$page_title = 'Quality & Compliance — Renumed Pharma';
$page_desc  = 'Discover Renumed Pharmaceutical Labs quality approach — raw-material inspection, in-process checks, batch documentation, traceability, and structured quality systems.';
require 'includes/head.php';
require 'includes/header.php';

$quality_items = [
  ['Raw-Material Inspection', 'Review of incoming material against defined requirements before use.'],
  ['In-Process Checks', 'Planned observations and checks during relevant production stages.'],
  ['Finished-Product Evaluation', 'Review against applicable, approved product specifications.'],
  ['Batch Documentation', 'Structured records supporting review and accountable decisions.'],
  ['Storage & Inventory Controls', 'Organised handling practices appropriate to material status.'],
  ['Traceability', 'Clear movement and record links across relevant process stages.'],
  ['Packaging Inspection', 'Checks focused on identity, presentation, and pack integrity.'],
  ['Staff Training', 'Role-relevant instruction with appropriate documentation.'],
];

$doc_practices = [
  'Batch manufacturing records maintained for every production run',
  'Raw material certificates reviewed and filed systematically',
  'In-process testing documented with date, time, and operator details',
  'Deviation reporting with root cause analysis and corrective actions',
  'Standard operating procedures for all critical manufacturing steps',
  'Change control documentation for process and equipment modifications',
];
?>


<!-- ── Quality Approach ──────────────────────────────────── -->
<section class="page-bg-white" style="padding-block:72px">
  <div class="container-shell" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:48px;align-items:start">
    
    <!-- Left Column -->
    <div>
      <div class="section-heading">
        <span class="section-kicker">Quality approach</span>
        <h1 style="margin-top:18px">Every step documented. Every decision accountable.</h1>
        <p>Our quality content describes an operating approach without asserting certifications, approvals, or specifications that have not been provided.</p>
      </div>
      <div style="margin-top:32px;border-radius:18px;border:1px solid #fde68a;background:#fffbeb;padding:20px">
        <p style="font-size:.875rem;font-weight:700;color:var(--navy)">Certification status</p>
        <p style="margin-top:8px;font-size:.78rem;line-height:1.55;color:var(--slate-600)">
          GMP, WHO-GMP, ISO, and regulatory approval names are intentionally omitted pending verified documentation.
        </p>
      </div>
    </div>

    <!-- Right Grid (8 Items) -->
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:24px">
      <?php foreach ($quality_items as $idx => $item): ?>
      <article style="border-bottom:1px solid #e2e8f0;padding-bottom:24px">
        <div style="display:flex;gap:18px">
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px">
            <span style="display:grid;place-items:center;width:40px;height:40px;border-radius:12px;background:#f1f5f9;color:var(--petrol);flex-shrink:0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-sm" aria-hidden="true"><path fill-rule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08z" clip-rule="evenodd"/></svg>
            </span>
            <span style="font-size:.72rem;font-weight:800;color:var(--cyan)"><?= sprintf('%02d', $idx + 1) ?></span>
          </div>
          <div>
            <h3 style="font-size:1rem;font-weight:700;color:var(--navy)"><?= htmlspecialchars($item[0]) ?></h3>
            <p style="margin-top:6px;font-size:.825rem;line-height:1.6;color:var(--slate-600)"><?= htmlspecialchars($item[1]) ?></p>
          </div>
        </div>
      </article>
      <?php endforeach; ?>
    </div>

  </div>
</section>

<!-- ── Documentation Practices ───────────────────────────── -->
<section class="page-bg-mist" style="padding-block:80px">
  <div class="container-shell">
    <div class="section-heading centered">
      <span class="section-kicker">Documentation</span>
      <h2 style="margin-top:18px">Structured records at every stage.</h2>
      <p class="section-body" style="max-width:620px;margin-inline:auto">Documentation is the backbone of pharmaceutical quality. Our practices ensure complete traceability and accountability.</p>
    </div>

    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:16px;max-width:900px;margin:40px auto 0">
      <?php foreach ($doc_practices as $doc): ?>
      <div style="display:flex;align-items:flex-start;gap:14px;border-radius:14px;border:1px solid #e2e8f0;background:#fff;padding:16px">
        <span style="display:grid;place-items:center;width:24px;height:24px;border-radius:50%;background:var(--petrol);color:#fff;font-size:12px;flex-shrink:0;margin-top:2px">✓</span>
        <p style="font-size:.875rem;font-weight:600;line-height:1.55;color:var(--navy)"><?= htmlspecialchars($doc) ?></p>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- ── Quality Assurance Process (Dark Navy) ─────────────── -->
<section style="background:var(--navy);color:#fff;padding-block:80px;position:relative;overflow:hidden">
  <div class="glow-orb" style="top:0;right:0;width:384px;height:384px;background:rgba(25,182,207,.1)" aria-hidden="true"></div>
  <div class="container-shell" style="position:relative">
    <div class="section-heading centered">
      <span class="section-kicker" style="color:var(--cyan)">Quality workflow</span>
      <h2 style="margin-top:18px;color:#fff">Quality checks integrated at every production stage.</h2>
    </div>

    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:20px;margin-top:48px">
      <?php
      $stages = [
        ['Incoming Material', 'Raw materials tested and approved before entering production'],
        ['In-Process Control', 'Critical parameters monitored during manufacturing'],
        ['Finished Product', 'Final products tested against approved specifications'],
        ['Release & Dispatch', 'Documented release decision before any product leaves the facility'],
      ];
      foreach ($stages as $i => $st): ?>
      <div style="border-radius:20px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05);padding:24px;transition:all .3s">
        <span style="font-size:.7rem;font-weight:800;color:var(--cyan)"><?= sprintf('%02d', $i + 1) ?></span>
        <h3 style="margin-top:20px;font-size:1.1rem;font-weight:700;color:#fff"><?= htmlspecialchars($st[0]) ?></h3>
        <p style="margin-top:8px;font-size:.825rem;line-height:1.6;color:rgba(255,255,255,.65)"><?= htmlspecialchars($st[1]) ?></p>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- ── CTA ──────────────────────────────────────────────── -->
<section class="cta-navy" style="padding-block:80px;text-align:center">
  <div class="container-narrow">
    <span class="section-kicker" style="color:var(--cyan)">Quality assurance matters</span>
    <h2 style="margin-top:18px;color:#fff;font-size:2rem">Discuss your quality requirements with our team.</h2>
    <p style="margin-top:14px;color:rgba(255,255,255,.8);font-size:.95rem;line-height:1.7;max-width:580px;margin-inline:auto">We welcome conversations about quality standards, documentation needs, and compliance expectations.</p>
    <div style="margin-top:32px">
      <a href="/contact.php" class="btn-primary" style="background:#fff;color:var(--navy);padding:14px 28px;font-size:.95rem">
        Contact Us
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="icon-sm" aria-hidden="true"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"/></svg>
      </a>
    </div>
  </div>
</section>

</main>

<?php require 'includes/footer.php'; ?>

