<?php
$page_title = 'Manufacturing & Facility Gallery — Renumed Pharma';
$page_desc  = 'View inside Renumed Pharmaceutical Labs gallery — manufacturing plant, tablet compression suites, coating pans, and sterile packaging lines.';
require 'includes/head.php';
require 'includes/header.php';

$items = [
  ['id'=>'cleanroom-packaging',  'src'=>'/images/gallery/pic7.jpeg', 'title'=>'Cleanroom Packaging & Visual Inspection Line', 'cat'=>'cleanroom',     'cat_label'=>'Cleanroom Operations'],
  ['id'=>'rotary-compression',   'src'=>'/images/gallery/pic4.jpeg', 'title'=>'Rotary Tablet Compression Press',             'cat'=>'manufacturing', 'cat_label'=>'Compression'],
  ['id'=>'auto-coater',          'src'=>'/images/gallery/pic5.jpeg', 'title'=>'Automated Tablet Coating Pan',                'cat'=>'manufacturing', 'cat_label'=>'Coating'],
  ['id'=>'blister-sealing',      'src'=>'/images/gallery/pic1.jpeg', 'title'=>'Blister Sealing & Packaging Line',           'cat'=>'packaging',     'cat_label'=>'Packaging Line'],
  ['id'=>'infeed-conveyor',      'src'=>'/images/gallery/pic2.jpeg', 'title'=>'Tablet Infeed & Conveyor System',            'cat'=>'cleanroom',     'cat_label'=>'Feeding System'],
  ['id'=>'alu-alu-forming',      'src'=>'/images/gallery/pic3.jpeg', 'title'=>'Alu-Alu Cold Form Blister Machine',          'cat'=>'packaging',     'cat_label'=>'Blister Forming'],
  ['id'=>'thermoforming-line',   'src'=>'/images/gallery/pic6.jpeg', 'title'=>'PVC/PVDC Thermoforming Blister Line',        'cat'=>'packaging',     'cat_label'=>'Thermoforming'],
];

$counts = ['all'=>count($items), 'manufacturing'=>0, 'packaging'=>0, 'cleanroom'=>0];
foreach ($items as $item) { $counts[$item['cat']]++; }
?>


<!-- ── Gallery Hero ──────────────────────────────────────── -->
<section class="page-bg-white" style="padding-block:72px">
  <div class="container-shell">
    <div class="section-heading centered">
      <span class="section-kicker">Plant &amp; Facilities</span>
      <h1 style="margin-top:18px">Operational Infrastructure Gallery</h1>
      <p class="section-body" style="max-width:620px;margin-inline:auto">Photographic documentation of our manufacturing plant, tablet compression suites, coating pans, and sterile packaging lines.</p>
    </div>
    <div style="text-align:center;margin-top:28px">
      <a href="/facilities.php" class="btn-outline">
        View Machinery Specifications
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="icon-sm" aria-hidden="true"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"/></svg>
      </a>
    </div>
  </div>
</section>

<!-- ── Filter Tabs + Gallery Grid ───────────────────────── -->
<section class="page-bg-mist" style="padding-block:72px">
  <div class="container-shell">

    <!-- Filter Tabs -->
    <div class="gallery-filters" role="tablist" aria-label="Gallery filter">
      <button class="gallery-filter active" data-filter="all" role="tab" aria-selected="true">
        All Photos <span class="filter-count"><?= $counts['all'] ?></span>
      </button>
      <button class="gallery-filter" data-filter="manufacturing" role="tab" aria-selected="false">
        Compression &amp; Coating <span class="filter-count"><?= $counts['manufacturing'] ?></span>
      </button>
      <button class="gallery-filter" data-filter="packaging" role="tab" aria-selected="false">
        Blister &amp; Packaging <span class="filter-count"><?= $counts['packaging'] ?></span>
      </button>
      <button class="gallery-filter" data-filter="cleanroom" role="tab" aria-selected="false">
        Cleanroom Operations <span class="filter-count"><?= $counts['cleanroom'] ?></span>
      </button>
    </div>

    <!-- Gallery Grid -->
    <div class="gallery-grid" style="margin-top:40px" id="galleryGrid">
      <?php foreach ($items as $idx => $item): ?>
      <div class="gallery-item"
           data-cat="<?= htmlspecialchars($item['cat']) ?>"
           data-src="<?= htmlspecialchars($item['src']) ?>"
           data-title="<?= htmlspecialchars($item['title']) ?>"
           data-cat_label="<?= htmlspecialchars($item['cat_label']) ?>"
           data-index="<?= $idx ?>">
        <div class="gallery-img-wrap">
          <img src="<?= htmlspecialchars($item['src']) ?>"
               alt="<?= htmlspecialchars($item['title']) ?>"
               loading="lazy" />
          <div class="gallery-expand" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-md" aria-hidden="true">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
            </svg>
          </div>
        </div>
        <div class="gallery-caption">
          <span class="gallery-cat"><?= htmlspecialchars($item['cat_label']) ?></span>
          <p class="gallery-title"><?= htmlspecialchars($item['title']) ?></p>
        </div>
      </div>
      <?php endforeach; ?>
    </div>

  </div>
</section>

<!-- ── Lightbox ──────────────────────────────────────────── -->
<div id="lightbox" class="lightbox" role="dialog" aria-modal="true" aria-label="Image lightbox">
  <div class="lightbox-inner">
    <div class="lightbox-topbar">
      <span id="lbCounter" class="lightbox-counter"></span>
      <button id="lbClose" class="lightbox-close" aria-label="Close lightbox">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-md" aria-hidden="true">
          <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd"/>
        </svg>
      </button>
    </div>
    <div class="lightbox-img-wrap">
      <img id="lbImg" src="" alt="" />
      <button id="lbPrev" class="lightbox-nav lightbox-prev" aria-label="Previous image">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="icon-sm" aria-hidden="true">
          <path fill-rule="evenodd" d="M17 10a.75.75 0 01-.75.75H6.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L6.612 9.25H16.25A.75.75 0 0117 10z" clip-rule="evenodd"/>
        </svg>
      </button>
      <button id="lbNext" class="lightbox-nav lightbox-next" aria-label="Next image">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="icon-sm" aria-hidden="true">
          <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"/>
        </svg>
      </button>
    </div>
    <div class="lightbox-caption">
      <span id="lbCat" class="lightbox-cat-label"></span>
      <h4 id="lbTitle" class="lightbox-title"></h4>
    </div>
  </div>
</div>

</main>

<?php require 'includes/footer.php'; ?>
