/**
 * main.js — Renumed Pharmaceutical Labs
 * Interactive client-side features for standard HTML/PHP hosting
 */

document.addEventListener("DOMContentLoaded", () => {
  // ── 1. Mobile Navigation Toggle ──────────────────────────────
  const menuButtons = document.querySelectorAll('button[aria-label="Open navigation menu"], button[aria-label="Close navigation menu"]');
  const mobileMenus = document.querySelectorAll('header .border-b.bg-white, header + div, header > div:last-child');

  menuButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const isExpanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", !isExpanded);
      btn.setAttribute("aria-label", !isExpanded ? "Close navigation menu" : "Open navigation menu");

      // Find the mobile menu container
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

  // ── 2. Africa Interactive Map ─────────────────────────────────
  const africaScope = document.querySelector(".africa-map-scope");
  if (africaScope) {
    const pins = africaScope.querySelectorAll(".pin");
    const paths = africaScope.querySelectorAll(".c");
    const tabs = africaScope.querySelectorAll(".tabs button");

    function setActiveCountry(name) {
      pins.forEach(pin => {
        const text = pin.querySelector("text");
        if (text && text.textContent.trim().toLowerCase().includes(name.toLowerCase())) {
          pin.classList.add("on");
        } else {
          pin.classList.remove("on");
        }
      });
      paths.forEach(p => {
        const d = p.getAttribute("data-country") || "";
        if (d.toLowerCase().includes(name.toLowerCase())) {
          p.classList.add("on");
        } else {
          p.classList.remove("on");
        }
      });
      tabs.forEach(t => {
        if (t.textContent.trim().toLowerCase().includes(name.toLowerCase())) {
          t.setAttribute("aria-pressed", "true");
        } else {
          t.setAttribute("aria-pressed", "false");
        }
      });
    }

    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        const name = tab.textContent.trim();
        setActiveCountry(name);
      });
    });

    pins.forEach(pin => {
      pin.addEventListener("mouseenter", () => {
        const text = pin.querySelector("text");
        if (text) setActiveCountry(text.textContent.trim());
      });
    });
  }

  // ── 3. Dosage / Products Explorer Tabs ────────────────────────
  const tabButtons = document.querySelectorAll('[role="tab"], .dosage-tab-btn');
  if (tabButtons.length > 0) {
    tabButtons.forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = btn.getAttribute("data-target") || btn.getAttribute("aria-controls");
        const parent = btn.closest(".tabs-container") || document;
        
        parent.querySelectorAll('[role="tab"]').forEach(t => {
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

  // ── 4. Gallery Lightbox Modal ─────────────────────────────────
  const galleryImages = document.querySelectorAll(".gallery-item img, [data-gallery-img]");
  if (galleryImages.length > 0) {
    // Create modal if not already present
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

  // ── 5. Contact / Enquiry Form AJAX Submission ─────────────────
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

      // Show loading
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Sending requirement…</span>`;
      }

      // Check or create feedback alert container
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

