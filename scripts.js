// ==========================================================================
// InAmigos — navigation menu + projects + donate card interactions
// ==========================================================================
//
// NOTE: Project CONTENT lives in "projects-data.js" (window.PROJECTS).
// To add or edit a project, open that file — you don't need to touch this one.
// This file only renders the data and handles page interactions.
// ==========================================================================

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  const projects = Array.isArray(window.PROJECTS) ? window.PROJECTS : [];
  const allowedSizes = ["large", "wide", "tall", "small"];

  const escapeHtml = function (value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  };

  const slugify =
    typeof window.projectSlug === "function"
      ? window.projectSlug
      : function (p) {
          return String((p && p.title) || "")
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");
        };

  grid.innerHTML = projects
    .map(function (project) {
      const accent = project.accent || "green";
      const size =
        allowedSizes.indexOf(project.size) !== -1 ? project.size : "small";
      const featuredClass = project.featured ? " is-featured" : "";
      const href = "project.html?p=" + encodeURIComponent(slugify(project));

      const topRow =
        '<div class="bento-tile__top">' +
        (project.category
          ? '<span class="bento-tile__badge">' +
            escapeHtml(project.category) +
            "</span>"
          : "") +
        (project.featured
          ? '<span class="bento-tile__featured">★ Featured</span>'
          : "") +
        "</div>";

      const statChip = project.stat
        ? '<span class="bento-tile__stat">' + escapeHtml(project.stat) + "</span>"
        : "";

      const highlights =
        Array.isArray(project.highlights) && project.highlights.length
          ? '<ul class="bento-tile__points">' +
            project.highlights
              .map(function (point) {
                return "<li>" + escapeHtml(point) + "</li>";
              })
              .join("") +
            "</ul>"
          : "";

      const ctaAccent = accent === "blue" ? "blue" : "green";

      return (
        '<article class="bento-tile bento-tile--' +
        size +
        " bento-tile--" +
        escapeHtml(accent) +
        featuredClass +
        '" role="listitem">' +
        '<a class="bento-tile__cover" href="' +
        escapeHtml(href) +
        '">' +
        '<img class="bento-tile__img" src="' +
        escapeHtml(project.image) +
        '" alt="' +
        escapeHtml(project.alt || project.title) +
        '" loading="lazy" />' +
        '<span class="bento-tile__photo-cta bento-tile__photo-cta--' +
        escapeHtml(ctaAccent) +
        '" aria-hidden="true">' +
        '<span class="bento-tile__photo-cta-icon">' +
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
        '<path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" ' +
        'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
        "</svg></span>" +
        "<span>View project</span>" +
        "</span>" +
        '<div class="bento-tile__overlay">' +
        topRow +
        '<div class="bento-tile__content">' +
        "<h3>" +
        escapeHtml(project.title) +
        "</h3>" +
        "<p>" +
        escapeHtml(project.description) +
        "</p>" +
        highlights +
        statChip +
        '<span class="bento-tile__cta bento-tile__cta--' +
        escapeHtml(ctaAccent) +
        '">' +
        "Learn more" +
        '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
        '<path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" ' +
        'stroke-linecap="round" stroke-linejoin="round"/>' +
        "</svg>" +
        '<span class="visually-hidden"> about ' +
        escapeHtml(project.title) +
        "</span>" +
        "</span>" +
        "</div>" +
        "</div>" +
        "</a>" +
        "</article>"
      );
    })
    .join("");
}

function renderAwards() {
  const grid = document.getElementById("awards-grid");
  if (!grid) return;

  const awards = Array.isArray(window.AWARDS) ? window.AWARDS : [];

  const escapeHtml = function (value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  };

  grid.innerHTML = awards
    .map(function (award) {
      const accent = award.accent === "blue" ? "blue" : "green";
      return (
        '<li class="award-card award-card--' +
        accent +
        '">' +
        (award.year
          ? '<span class="award-card__year">' +
            escapeHtml(award.year) +
            "</span>"
          : "") +
        '<div class="award-card__body">' +
        '<span class="award-card__icon" aria-hidden="true">🏆</span>' +
        "<h3>" +
        escapeHtml(award.title || "") +
        "</h3>" +
        (award.issuer
          ? '<p class="award-card__issuer">' +
            escapeHtml(award.issuer) +
            "</p>"
          : "") +
        (award.detail
          ? '<p class="award-card__detail">' +
            escapeHtml(award.detail) +
            "</p>"
          : "") +
        "</div>" +
        "</li>"
      );
    })
    .join("");
}

function renderFaqs() {
  const list = document.getElementById("faq-list");
  if (!list) return;

  const faqs = Array.isArray(window.FAQS) ? window.FAQS : [];

  const escapeHtml = function (value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  };

  list.innerHTML = faqs
    .map(function (faq, index) {
      const panelId = "faq-panel-" + index;
      const btnId = "faq-btn-" + index;
      return (
        '<div class="faq-item">' +
        '<button type="button" class="faq-item__question" id="' +
        btnId +
        '" aria-expanded="false" aria-controls="' +
        panelId +
        '">' +
        "<span>" +
        escapeHtml(faq.q || "") +
        "</span>" +
        '<span class="faq-item__icon" aria-hidden="true"></span>' +
        "</button>" +
        '<div class="faq-item__panel" id="' +
        panelId +
        '" role="region" aria-labelledby="' +
        btnId +
        '" hidden>' +
        '<p class="faq-item__answer">' +
        escapeHtml(faq.a || "") +
        "</p>" +
        "</div>" +
        "</div>"
      );
    })
    .join("");

  list.addEventListener("click", function (e) {
    const btn = e.target.closest(".faq-item__question");
    if (!btn) return;
    const panel = document.getElementById(btn.getAttribute("aria-controls"));
    const isOpen = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!isOpen));
    btn.classList.toggle("is-open", !isOpen);
    if (panel) panel.hidden = isOpen;
  });
}

function renderTestimonials() {
  const grid = document.getElementById("testimonials-grid");
  if (!grid) return;

  const items = Array.isArray(window.TESTIMONIALS) ? window.TESTIMONIALS : [];

  const escapeHtml = function (value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  };

  const getInitials = function (name) {
    return String(name)
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map(function (part) {
        return part.charAt(0).toUpperCase();
      })
      .join("");
  };

  grid.innerHTML = items
    .map(function (item) {
      const accent = item.accent === "blue" ? "blue" : "green";
      const avatar = item.avatar
        ? '<img class="testimonial-card__avatar" src="' +
          escapeHtml(item.avatar) +
          '" alt="' +
          escapeHtml(item.name || "") +
          '" loading="lazy" />'
        : '<span class="testimonial-card__avatar testimonial-card__avatar--initials" aria-hidden="true">' +
          escapeHtml(getInitials(item.name || "")) +
          "</span>";

      return (
        '<figure class="testimonial-card testimonial-card--' +
        accent +
        '">' +
        '<span class="testimonial-card__mark" aria-hidden="true">&ldquo;</span>' +
        '<blockquote class="testimonial-card__quote">' +
        escapeHtml(item.quote || "") +
        "</blockquote>" +
        '<figcaption class="testimonial-card__person">' +
        avatar +
        '<span class="testimonial-card__meta">' +
        '<span class="testimonial-card__name">' +
        escapeHtml(item.name || "") +
        "</span>" +
        (item.role
          ? '<span class="testimonial-card__role">' +
            escapeHtml(item.role) +
            "</span>"
          : "") +
        "</span>" +
        "</figcaption>" +
        "</figure>"
      );
    })
    .join("");
}

document.addEventListener("DOMContentLoaded", function () {
  renderProjects();
  renderAwards();
  renderTestimonials();
  renderFaqs();

  /* ---------- Mobile navigation menu ---------- */
  const menuBtn = document.querySelector(".nav__menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuBtn && mobileMenu) {
    const toggleMenu = function (open) {
      const isOpen =
        open !== undefined ? open : menuBtn.getAttribute("aria-expanded") === "false";
      menuBtn.setAttribute("aria-expanded", String(isOpen));
      menuBtn.classList.toggle("is-open", isOpen);
      mobileMenu.hidden = !isOpen;
    };

    menuBtn.addEventListener("click", function () {
      toggleMenu();
    });

    // Close the menu after tapping a link
    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        toggleMenu(false);
      });
    });

    // Close on Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") toggleMenu(false);
    });
  }

  /* ---------- Donate card ---------- */
  const donateCard = document.querySelector(".donate-card");
  if (!donateCard) return;

  const tabs = donateCard.querySelectorAll(".donate-tab");
  const amountButtons = donateCard.querySelectorAll(".donate-amount");
  const customInput = donateCard.querySelector("#custom-amount");

  const totalEl = donateCard.querySelector("#donate-total");
  const freqEl = donateCard.querySelector("#donate-frequency");
  const btnAmountEl = donateCard.querySelector("#donate-btn-amount");
  const impactCountEl = donateCard.querySelector("#impact-count");
  const impactNounEl = donateCard.querySelector("#impact-noun");

  // State
  let frequency = "monthly";
  let amount = 1000;

  // ₹350 ≈ one month of school supplies for one child
  const COST_PER_MONTH = 350;

  const formatNumber = function (value) {
    return value.toLocaleString("en-IN");
  };

  const updateUI = function () {
    const safeAmount = amount > 0 ? amount : 0;

    totalEl.textContent = formatNumber(safeAmount);
    btnAmountEl.textContent = "\u20B9" + formatNumber(safeAmount);
    freqEl.textContent = frequency === "monthly" ? "/ month" : "one-time";

    const months = Math.max(1, Math.round(safeAmount / COST_PER_MONTH));
    impactCountEl.textContent = formatNumber(months);
    impactNounEl.textContent = months === 1 ? "month" : "months";
  };

  // Frequency tabs
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (t) {
        t.classList.remove("is-active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("is-active");
      tab.setAttribute("aria-selected", "true");
      frequency = tab.dataset.frequency;
      updateUI();
    });
  });

  // Preset amount buttons
  amountButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      amountButtons.forEach(function (b) {
        b.classList.remove("is-active");
      });
      button.classList.add("is-active");
      amount = Number(button.dataset.amount);
      if (customInput) customInput.value = "";
      updateUI();
    });
  });

  // Custom amount input
  if (customInput) {
    customInput.addEventListener("input", function () {
      amountButtons.forEach(function (b) {
        b.classList.remove("is-active");
      });
      amount = Number(customInput.value) || 0;
      updateUI();
    });
  }

  updateUI();
});
