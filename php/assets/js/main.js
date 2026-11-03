/**
 * main.js — Renumed Pharmaceutical Labs
 * Interactive client-side features for standard HTML/PHP hosting
 */

document.addEventListener("DOMContentLoaded", () => {
  // ── 1. Mobile Navigation Toggle ──────────────────────────────
  const menuButtons = document.querySelectorAll('button[aria-label="Open navigation menu"], button[aria-label="Close navigation menu"]');
  menuButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const isExpanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", !isExpanded);
      btn.setAttribute("aria-label", !isExpanded ? "Close navigation menu" : "Open navigation menu");

      const mobileNav = document.querySelector('header .lg\\:hidden.transition-all') || document.querySelector('.lg\\:hidden.shadow-xl');
      if (mobileNav) {
        if (!isExpanded) {
          mobileNav.classList.remove("opacity-0", "pointer-events-none", "-translate-y-1", "invisible");
          mobileNav.classList.add("opacity-100", "pointer-events-auto", "translate-y-0", "visible");
        } else {
          mobileNav.classList.remove("opacity-100", "pointer-events-auto", "translate-y-0", "visible");
          mobileNav.classList.add("opacity-0", "pointer-events-none", "-translate-y-1", "invisible");
        }
      }
    });
  });

  // ── 2. Africa Interactive Map (Auto-cycling & World/Focus zoom) ──
  const africaScope = document.querySelector(".africa-map-scope");
  if (africaScope) {
    const card = africaScope.querySelector(".card") || africaScope;
    const svg = africaScope.querySelector("#svg") || africaScope.querySelector("svg");
    const pins = africaScope.querySelectorAll(".pin");
    const paths = africaScope.querySelectorAll(".c");
    const tabBtns = africaScope.querySelectorAll(".tabs button");
    const worldBtn = africaScope.querySelector('button[data-v="world"]');
    const focusBtn = africaScope.querySelector('button[data-v="focus"]');

    const WORLD_VIEW = [0, 0, 1000, 520];
    const INITIAL_FOCUS_VIEW = [345.3, 199.8, 338.8, 176.2];
    const DEFAULT_HI_BOX = [441.6, 199.8, 146.3, 176.2];

    let currentView = [...INITIAL_FOCUS_VIEW];
    let currentTab = "focus";
    let rafId = 0;

    // Aspect ratio fitting logic
    function fit(v) {
      if (!card) return v;
      const clientWidth = card.clientWidth || 1000;
      const clientHeight = card.clientHeight || 580;
      const r = clientWidth / clientHeight;
      let [x, y, w, h] = v;
      if (w / h < r) {
        const nw = h * r;
        x -= (nw - w) / 2;
        w = nw;
      } else {
        const nh = w / r;
        y -= (nh - h) / 2;
        h = nh;
      }
      return [x, y, w, h];
    }

    function updatePins(view, cardWidth) {
      const k = (view[2] / 1000) * (1000 / cardWidth);
      pins.forEach(pin => {
        const circle = pin.querySelector("circle");
        const text = pin.querySelector("text");
        if (circle) circle.setAttribute("r", (5 * k).toFixed(3));
        if (text) {
          const isStart = text.getAttribute("text-anchor") === "start";
          const side = isStart ? 1 : -1;
          text.setAttribute("dx", (side * 10 * k).toFixed(3));
          text.setAttribute("dy", (side ? 5 * k : -11 * k).toFixed(3));
          text.style.fontSize = (14 * k).toFixed(2) + "px";
          text.style.strokeWidth = (5 * k).toFixed(2) + "px";
        }
      });
    }

    function animateView(toView) {
      cancelAnimationFrame(rafId);
      const fromView = [...currentView];
      const startTime = performance.now();
      const duration = 900;
      const cardWidth = card.clientWidth || 1000;

      function step(now) {
        const elapsed = Math.min((now - startTime) / duration, 1);
        const ease = 1 - Math.pow(1 - elapsed, 3); // cubic ease-out
        currentView = fromView.map((fromVal, i) => fromVal + (toView[i] - fromVal) * ease);
        if (svg) {
          svg.setAttribute("viewBox", currentView.map(n => n.toFixed(1)).join(" "));
        }
        updatePins(currentView, cardWidth);

        if (elapsed < 1) {
          rafId = requestAnimationFrame(step);
        }
      }
      rafId = requestAnimationFrame(step);
    }

    function getFocusBox() {
      const hiGroup = africaScope.querySelector("#hi");
      if (hiGroup) {
        try {
          const b = hiGroup.getBBox();
          const pad = 22;
          return [b.x - pad, b.y - pad, b.width + 2 * pad, b.height + 2 * pad];
        } catch (e) {}
      }
      return DEFAULT_HI_BOX;
    }

    // World & Focus button clicks
    if (worldBtn) {
      worldBtn.addEventListener("click", () => {
        currentTab = "world";
        worldBtn.setAttribute("aria-pressed", "true");
        if (focusBtn) focusBtn.setAttribute("aria-pressed", "false");
        animateView(fit(WORLD_VIEW));
      });
    }

    if (focusBtn) {
      focusBtn.addEventListener("click", () => {
        currentTab = "focus";
        focusBtn.setAttribute("aria-pressed", "true");
        if (worldBtn) worldBtn.setAttribute("aria-pressed", "false");
        animateView(fit(getFocusBox()));
      });
    }

    // Window resize handler
    window.addEventListener("resize", () => {
      const target = currentTab === "world" ? fit(WORLD_VIEW) : fit(getFocusBox());
      currentView = [...target];
      if (svg) svg.setAttribute("viewBox", currentView.map(n => n.toFixed(1)).join(" "));
      updatePins(currentView, card.clientWidth || 1000);
    });

    // Initial pin scale
    updatePins(currentView, card.clientWidth || 1000);

    // ── Auto-cycling highlight logic ──
    const countries = ["Nigeria", "Chad", "Niger", "Sierra Leone", "Congo", "Angola"];
    let cycleIndex = 0;
    let manualHover = false;

    function setHighlightedCountry(name) {
      paths.forEach(p => {
        const cName = p.getAttribute("data-name") || "";
        if (cName.toLowerCase() === name.toLowerCase()) {
          p.classList.add("on");
        } else {
          p.classList.remove("on");
        }
      });
      pins.forEach(pin => {
        const cName = pin.getAttribute("data-c") || "";
        if (cName.toLowerCase() === name.toLowerCase()) {
          pin.classList.add("on");
        } else {
          pin.classList.remove("on");
        }
      });
    }

    // Auto-cycle every 1750ms
    setInterval(() => {
      if (manualHover) return;
      cycleIndex = (cycleIndex + 1) % countries.length;
      setHighlightedCountry(countries[cycleIndex]);
    }, 1750);

    // Mouse hover pause & manual activation
    paths.forEach(p => {
      p.addEventListener("mouseenter", () => {
        manualHover = true;
        const name = p.getAttribute("data-name");
        if (name) setHighlightedCountry(name);
      });
      p.addEventListener("mouseleave", () => {
        manualHover = false;
      });
    });

    pins.forEach(pin => {
      pin.addEventListener("mouseenter", () => {
        manualHover = true;
        const name = pin.getAttribute("data-c");
        if (name) setHighlightedCountry(name);
      });
      pin.addEventListener("mouseleave", () => {
        manualHover = false;
      });
    });
  }

  // ── 3. Incremental Counter Animation (Tablets & Capsules) ─────
  function animateCounter(el) {
    if (el.dataset.animated === "true") return;
    el.dataset.animated = "true";

    const target = parseInt(el.getAttribute("data-counter"), 10);
    if (isNaN(target)) return;

    const suffix = el.getAttribute("data-suffix") || "+";
    const duration = 1800;
    const startTime = performance.now();

    function update(now) {
      const elapsed = Math.min((now - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - elapsed, 3); // cubic ease-out
      const current = Math.round(ease * target);
      el.textContent = current.toLocaleString("en-US") + suffix;

      if (elapsed < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target.toLocaleString("en-US") + suffix;
      }
    }
    requestAnimationFrame(update);
  }

  const counterElements = document.querySelectorAll("[data-counter]");
  if (counterElements.length > 0) {
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      counterElements.forEach(el => observer.observe(el));
    } else {
      // Fallback
      counterElements.forEach(el => animateCounter(el));
    }
  }

  // ── 4. Products Dosage Explorer Tabs (Tablets vs Capsules) ───
  const dosageButtons = document.querySelectorAll("[data-dosage]");
  const panelTablets = document.getElementById("dosage-panel-tablets");
  const panelCapsules = document.getElementById("dosage-panel-capsules");

  if (dosageButtons.length > 0 && (panelTablets || panelCapsules)) {
    dosageButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const type = btn.getAttribute("data-dosage");

        dosageButtons.forEach(b => {
          const bType = b.getAttribute("data-dosage");
          const chip = b.querySelector("span");
          if (bType === type) {
            b.className = "dosage-tab-btn inline-flex items-center gap-3 rounded-xl px-6 py-3 text-sm font-bold transition-all duration-300 bg-navy text-white shadow-lg shadow-navy/20 scale-[1.02]";
            if (chip) chip.className = "grid h-7 w-7 place-items-center rounded-lg text-xs font-bold " + (type === "tablets" ? "bg-cyan text-navy" : "bg-petrol text-white");
          } else {
            b.className = "dosage-tab-btn inline-flex items-center gap-3 rounded-xl px-6 py-3 text-sm font-bold transition-all duration-300 text-slate-600 hover:text-navy hover:bg-slate-50";
            if (chip) chip.className = "grid h-7 w-7 place-items-center rounded-lg text-xs font-bold bg-slate-100 text-slate-500";
          }
        });

        if (type === "tablets") {
          if (panelTablets) panelTablets.classList.remove("hidden");
          if (panelCapsules) panelCapsules.classList.add("hidden");
        } else {
          if (panelTablets) panelTablets.classList.add("hidden");
          if (panelCapsules) panelCapsules.classList.remove("hidden");
        }

        // Trigger counter animation on the newly visible panel
        const activePanel = type === "tablets" ? panelTablets : panelCapsules;
        if (activePanel) {
          activePanel.querySelectorAll("[data-counter]").forEach(counter => {
            counter.dataset.animated = "false";
            animateCounter(counter);
          });
        }
      });
    });
  }

  // ── 5. Standard Tab Buttons ──────────────────────────────────
  const tabButtons = document.querySelectorAll('[role="tab"]:not([data-dosage])');
  if (tabButtons.length > 0) {
    tabButtons.forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = btn.getAttribute("data-target") || btn.getAttribute("aria-controls");
        const parent = btn.closest(".tabs-container") || document;
        
        parent.querySelectorAll('[role="tab"]:not([data-dosage])').forEach(t => {
          t.setAttribute("aria-selected", "false");
          t.classList.remove("bg-petrol", "text-white", "font-bold");
          t.classList.add("text-slate-600");
        });
        btn.setAttribute("aria-selected", "true");
        btn.classList.add("bg-petrol", "text-white", "font-bold");
        btn.classList.remove("text-slate-600");

        if (targetId) {
          parent.querySelectorAll('[role="tabpanel"]').forEach(p => p.classList.add("hidden"));
          const panel = document.getElementById(targetId);
          if (panel) panel.classList.remove("hidden");
        }
      });
    });
  }

  // ── 6. Gallery Lightbox Modal ─────────────────────────────────
  const galleryImages = document.querySelectorAll(".gallery-item img, [data-gallery-img]");
  if (galleryImages.length > 0) {
    let modal = document.getElementById("gallery-lightbox");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "gallery-lightbox";
      modal.className = "fixed inset-0 z-50 hidden bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 transition-all duration-300";
      modal.innerHTML = `
        <div class="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl bg-white shadow-2xl">
          <button id="lightbox-close" class="absolute top-4 right-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white hover:bg-black transition" aria-label="Close image">✕</button>
          <img id="lightbox-img" src="" alt="Gallery Preview" class="w-full h-auto max-h-[85vh] object-contain" />
        </div>
      `;
      document.body.appendChild(modal);

      modal.addEventListener("click", (e) => {
        if (e.target === modal || e.target.id === "lightbox-close") {
          modal.classList.add("hidden");
        }
      });
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !modal.classList.contains("hidden")) {
          modal.classList.add("hidden");
        }
      });
    }

    galleryImages.forEach(img => {
      img.style.cursor = "zoom-in";
      img.addEventListener("click", () => {
        const lbImg = document.getElementById("lightbox-img");
        if (lbImg) {
          lbImg.src = img.src;
          lbImg.alt = img.alt || "Facility Photograph";
          modal.classList.remove("hidden");
        }
      });
    });
  }

  // ── 7. Contact / Enquiry Form AJAX Submission ─────────────────
  const forms = document.querySelectorAll('form[aria-label="Business enquiry form"], form.enquiry-form');
  forms.forEach(form => {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"], button:not([type="button"])');
      const origBtnText = submitBtn ? submitBtn.innerHTML : "Submit Enquiry";

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Sending requirement…</span>`;
      }

      let statusDiv = form.querySelector('[role="status"]');
      if (!statusDiv) {
        statusDiv = document.createElement("div");
        statusDiv.setAttribute("role", "status");
        statusDiv.setAttribute("aria-live", "polite");
        statusDiv.className = "mt-4 rounded-xl px-4 py-3 text-sm";
        form.appendChild(statusDiv);
      }

      const formData = new FormData(form);
      const payload = Object.fromEntries(formData.entries());
      payload.consent = formData.get("consent") === "on" || formData.get("consent") === "true";

      try {
        const response = await fetch("/enquiry-handler.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
        const result = await response.json();

        if (response.ok && result.ok) {
          statusDiv.className = "mt-4 rounded-xl px-4 py-3 text-sm bg-emerald-50 text-emerald-800 border border-emerald-200";
          statusDiv.textContent = result.message || "Thank you. Your enquiry has been received. Our team will contact you promptly.";
          form.reset();
        } else {
          throw new Error(result.message || "Unable to send enquiry. Please check your information and try again.");
        }
      } catch (err) {
        statusDiv.className = "mt-4 rounded-xl px-4 py-3 text-sm bg-rose-50 text-rose-800 border border-rose-200";
        statusDiv.textContent = err.message || "Unable to submit enquiry right now. Please try again or email us directly.";
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = origBtnText;
        }
      }
    });
  });
});
