// main.js — vanilla JS for PHP build (mobile nav, gallery, form, counters, reveal cards, map, dosage & machinery filters)
(function () {
  'use strict';

  /* ── Mobile Navigation ────────────────────────────────── */
  const menuBtn      = document.getElementById('menuBtn');
  const mobileMenu   = document.getElementById('mobileMenu');
  const mobileBackdrop = document.getElementById('mobileBackdrop');

  function openMenu() {
    if (!menuBtn || !mobileMenu) return;
    menuBtn.classList.add('open');
    menuBtn.setAttribute('aria-expanded', 'true');
    mobileMenu.classList.add('open');
    mobileMenu.removeAttribute('aria-hidden');
    mobileBackdrop?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    if (!menuBtn || !mobileMenu) return;
    menuBtn.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    mobileBackdrop?.classList.remove('open');
    document.body.style.overflow = '';
  }
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      const isOpen = menuBtn.classList.contains('open');
      isOpen ? closeMenu() : openMenu();
    });
    mobileBackdrop?.addEventListener('click', closeMenu);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  }

  /* ── Reveal Cards (mouse track gradient) ─────────────── */
  document.querySelectorAll('.reveal-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', (e.clientX - r.left) + 'px');
      card.style.setProperty('--mouse-y', (e.clientY - r.top) + 'px');
    });
  });

  /* ── Animated Counters ───────────────────────────────── */
  function animateCounter(el) {
    const target   = parseInt(el.dataset.target, 10);
    const duration = parseInt(el.dataset.duration || '2000', 10);
    const suffix   = el.dataset.suffix || '';
    const start    = performance.now();
    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(ease * target);
      el.textContent = value.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting && !e.target.dataset.done) {
        e.target.dataset.done = '1';
        animateCounter(e.target);
      }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('.js-counter').forEach(el => counterObserver.observe(el));

  /* ── Gallery: filter + lightbox ─────────────────────── */
  const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
  const filterTabs   = Array.from(document.querySelectorAll('.gallery-filter, .gallery-tab'));
  const lightbox     = document.getElementById('lightbox');
  const lbImg        = document.getElementById('lbImg');
  const lbTitle      = document.getElementById('lbTitle');
  const lbCat        = document.getElementById('lbCat');
  const lbCounter    = document.getElementById('lbCounter');
  const lbClose      = document.getElementById('lbClose');
  const lbPrev       = document.getElementById('lbPrev');
  const lbNext       = document.getElementById('lbNext');

  let activeItems = galleryItems.slice();
  let lbIndex     = 0;

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const filter = tab.dataset.filter;
      filterTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      galleryItems.forEach(item => {
        const match = filter === 'all' || item.dataset.cat === filter;
        item.style.display = match ? '' : 'none';
      });
      activeItems = galleryItems.filter(i => i.style.display !== 'none');
    });
  });

  function openLightbox(idx) {
    lbIndex = idx;
    const item = activeItems[idx];
    if (!item) return;
    lbImg.src   = item.dataset.src;
    lbImg.alt   = item.dataset.title;
    lbTitle.textContent = item.dataset.title;
    lbCat.textContent   = item.dataset.cat_label;
    lbCounter.textContent = (idx + 1) + ' of ' + activeItems.length;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }
  function lbGo(dir) {
    if (!activeItems.length) return;
    lbIndex = (lbIndex + dir + activeItems.length) % activeItems.length;
    openLightbox(lbIndex);
  }

  galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      const visibleIndex = activeItems.indexOf(item);
      openLightbox(visibleIndex >= 0 ? visibleIndex : 0);
    });
  });
  lbClose?.addEventListener('click', closeLightbox);
  lbPrev?.addEventListener('click', () => lbGo(-1));
  lbNext?.addEventListener('click', () => lbGo(1));
  lightbox?.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => {
    if (!lightbox?.classList.contains('open')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  lbGo(-1);
    if (e.key === 'ArrowRight') lbGo(1);
  });

  /* ── Products Dosage Tabs ─────────────────────────────── */
  document.querySelectorAll('.dosage-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;
      document.querySelectorAll('.dosage-tab').forEach(b => {
        b.classList.remove('active');
        const badge = b.querySelector('span');
        if (badge) {
          badge.style.background = '#f1f5f9';
          badge.style.color = '#64748b';
        }
      });
      document.querySelectorAll('.dosage-panel').forEach(p => {
        p.classList.remove('active');
        p.style.display = 'none';
      });

      btn.classList.add('active');
      const activeBadge = btn.querySelector('span');
      if (activeBadge) {
        activeBadge.style.background = 'var(--cyan)';
        activeBadge.style.color = 'var(--navy)';
      }

      const panel = document.getElementById(target);
      if (panel) {
        panel.classList.add('active');
        panel.style.display = 'block';
      }
    });
  });

  /* ── Facilities Machinery Filter ─────────────────────── */
  document.querySelectorAll('.filter-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.dept;
      document.querySelectorAll('.filter-tab').forEach(b => {
        b.classList.remove('active');
        b.style.background = '#fff';
        b.style.color = 'var(--slate-600)';
      });
      btn.classList.add('active');
      btn.style.background = 'var(--navy)';
      btn.style.color = '#fff';

      document.querySelectorAll('.machinery-section').forEach(sec => {
        const match = filter === 'all' || sec.dataset.dept === filter;
        sec.style.display = match ? '' : 'none';
      });
    });
  });

  /* ── Enquiry Form (AJAX) ─────────────────────────────── */
  const enquiryForm = document.getElementById('enquiryForm');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', async e => {
      e.preventDefault();
      const form   = e.currentTarget;
      const status = document.getElementById('formStatus');
      const btn    = document.getElementById('formSubmitBtn');

      // Honeypot check
      const hp = form.querySelector('[name="website"]');
      if (hp && hp.value) return;

      btn.disabled = true;
      const origText = btn.textContent;
      btn.textContent = 'Sending…';
      setStatus('loading', 'Sending your enquiry…');

      const data = {};
      new FormData(form).forEach((v, k) => { data[k] = v; });
      data.consent = (data.consent === 'on');

      try {
        const res  = await fetch('/enquiry-handler.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        const json = await res.json();
        if (!res.ok) throw new Error(json.message || 'Unable to send enquiry.');
        setStatus('success', json.message || 'Thank you! We will respond within one working day.');
        form.reset();
      } catch (err) {
        setStatus('error', err.message || 'Unable to send enquiry. Please try again.');
      } finally {
        btn.disabled = false;
        btn.textContent = origText;
      }

      function setStatus(kind, msg) {
        if (!status) return;
        status.textContent = msg;
        status.className = 'form-status ' + kind;
        status.style.display = 'block';
      }
    });
  }

  /* ── Africa Map (auto-cycle highlights + World/Focus tabs) ─ */
  const mapEl = document.getElementById('africa-map');
  if (mapEl) {
    const countries = Array.from(mapEl.querySelectorAll('.c'));
    const pins      = Array.from(mapEl.querySelectorAll('.pin'));
    const svgEl     = document.getElementById('africa-svg');
    let idx = 0;
    let paused = false;

    function highlight(name) {
      countries.forEach(c => c.classList.toggle('on', c.dataset.name === name));
      pins.forEach(p => p.classList.toggle('on', p.dataset.c === name));
    }

    const names = countries.map(c => c.dataset.name);
    if (names.length) highlight(names[0]);

    setInterval(() => {
      if (paused || !names.length) return;
      idx = (idx + 1) % names.length;
      highlight(names[idx]);
    }, 1750);

    countries.forEach(c => {
      c.addEventListener('mouseenter', () => { paused = true; highlight(c.dataset.name); });
      c.addEventListener('mouseleave', () => { paused = false; });
    });

    // Map tab (World / Focus)
    document.querySelectorAll('[data-map-tab]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-map-tab]').forEach(b => b.setAttribute('aria-pressed', 'false'));
        btn.setAttribute('aria-pressed', 'true');
        const view = btn.dataset.v || btn.dataset.mapTab;
        if (svgEl) {
          if (view === 'world') {
            svgEl.setAttribute('viewBox', '0 0 1000 520');
          } else {
            svgEl.setAttribute('viewBox', '345.3 199.8 338.8 176.2');
          }
        }
      });
    });
  }
})();
