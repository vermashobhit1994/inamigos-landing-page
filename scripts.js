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
  const proof = document.getElementById("awards-proof");
  if (!grid) return;

  const awards = Array.isArray(window.AWARDS) ? window.AWARDS : [];

  const escapeHtml = function (value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  };

  if (proof && awards.length) {
    const count = awards.length;
    proof.innerHTML =
      '<span class="awards__proof-badge" aria-hidden="true">★</span>' +
      "<span><strong>" +
      escapeHtml(String(count)) +
      " honours earned</strong> — proof that communities trust our work</span>";
  }

  grid.innerHTML = awards
    .map(function (award) {
      const accent = award.accent === "blue" ? "blue" : "green";
      const featured = award.featured ? " award-card--featured" : "";
      const imageSrc = award.image || "./assets/awards/placeholder.jpg";
      const imageAlt = award.alt || award.title || "Award photo";
      const viewUrl = award.viewUrl || award.image || imageSrc;
      const fileSrc = award.file || award.image || imageSrc;
      const downloadName = String(award.title || "award")
        .trim()
        .replace(/[^a-z0-9]+/gi, "-")
        .replace(/^-+|-+$/g, "");

      return (
        '<li class="award-card award-card--' +
        accent +
        featured +
        '">' +
        '<div class="award-card__media">' +
        '<img src="' +
        escapeHtml(imageSrc) +
        '" alt="' +
        escapeHtml(imageAlt) +
        '" loading="lazy" />' +
        '<div class="award-card__media-overlay" aria-hidden="true"></div>' +
        (award.year
          ? '<span class="award-card__year">' +
            escapeHtml(award.year) +
            "</span>"
          : "") +
        '<span class="award-card__ribbon">Honoured</span>' +
        "</div>" +
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
        '<div class="award-card__actions">' +
        '<a href="' +
        escapeHtml(viewUrl) +
        '" class="award-card__btn award-card__btn--view" target="_blank" rel="noopener noreferrer">View</a>' +
        '<a href="' +
        escapeHtml(fileSrc) +
        '" class="award-card__btn award-card__btn--download" download="' +
        escapeHtml(downloadName || "award") +
        '">Download</a>' +
        "</div>" +
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
      const hasVideo = Boolean(item.video);
      const avatar = item.avatar
        ? '<img class="testimonial-card__avatar" src="' +
          escapeHtml(item.avatar) +
          '" alt="' +
          escapeHtml(item.name || "") +
          '" loading="lazy" />'
        : '<span class="testimonial-card__avatar testimonial-card__avatar--initials" aria-hidden="true">' +
          escapeHtml(getInitials(item.name || "")) +
          "</span>";

      const videoHtml = item.video
        ? '<a href="' +
          escapeHtml(item.video) +
          '" class="testimonial-card__video" target="_blank" rel="noopener noreferrer">' +
          '<span class="testimonial-card__video-icon" aria-hidden="true">▶</span>' +
          escapeHtml(item.videoLabel || "Watch video") +
          "</a>"
        : "";

      return (
        '<figure class="testimonial-card testimonial-card--' +
        accent +
        (hasVideo ? " testimonial-card--has-video" : "") +
        '">' +
        '<span class="testimonial-card__mark" aria-hidden="true">&ldquo;</span>' +
        '<blockquote class="testimonial-card__quote">' +
        escapeHtml(item.quote || "") +
        "</blockquote>" +
        videoHtml +
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

function renderStoriesSpotlight() {
  const mount = document.getElementById("stories-spotlight");
  if (!mount) return;

  const stories = Array.isArray(window.STORIES) ? window.STORIES : [];
  if (!stories.length) return;

  const escapeHtml = function (value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  };

  const slugify =
    typeof window.storySlug === "function"
      ? window.storySlug
      : function (story) {
          return String((story && story.title) || "")
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");
        };

  const story =
    stories.find(function (item) {
      return item.featured;
    }) || stories[0];

  const href = "story.html?p=" + encodeURIComponent(slugify(story));

  const arrowSvg =
    '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">' +
    '<path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" stroke-width="1.5" ' +
    'stroke-linecap="round" stroke-linejoin="round"/></svg>';

  mount.innerHTML =
    '<article class="story-card">' +
    '<img src="' +
    escapeHtml(story.image) +
    '" alt="' +
    escapeHtml(story.alt || story.title || "") +
    '" loading="lazy" />' +
    '<div class="story-card__content">' +
    '<h3 class="story-card__title">' +
    escapeHtml(story.title || "") +
    "</h3>" +
    '<p class="story-card__quote">' +
    escapeHtml(story.description || "") +
    "</p>" +
    '<a href="' +
    href +
    '" class="story-card__nav" aria-label="Read ' +
    escapeHtml(story.title || "story") +
    '">' +
    arrowSvg +
    "</a>" +
    "</div>" +
    "</article>";
}

function renderAbout() {
  const mount = document.getElementById("about-content");
  if (!mount) return;

  const about = window.ABOUT || {};
  const pillars = Array.isArray(about.pillars) ? about.pillars : [];

  const escapeHtml = function (value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  };

  const pillarIcons = {
    mission: "◎",
    vision: "◇",
    values: "✦",
  };

  const toBody = function (body) {
    if (!body) return "";
    const parts = Array.isArray(body) ? body : [body];
    return parts
      .map(function (p) {
        return "<p>" + escapeHtml(p) + "</p>";
      })
      .join("");
  };

  const pillarsHtml = pillars
    .map(function (pillar, index) {
      const accent =
        pillar.accent === "blue"
          ? "blue"
          : pillar.accent === "yellow"
            ? "yellow"
            : "green";
      const featured = pillar.featured ? " about-pillar--featured" : "";
      const anchorId = pillar.id ? escapeHtml(pillar.id) : "";
      const iconKey = (pillar.id || pillar.label || "").toLowerCase();
      const icon = pillarIcons[iconKey] || String(index + 1).padStart(2, "0");

      const pointsHtml =
        Array.isArray(pillar.points) && pillar.points.length
          ? '<ul class="about-pillar__points">' +
            pillar.points
              .map(function (point) {
                return "<li>" + escapeHtml(point) + "</li>";
              })
              .join("") +
            "</ul>"
          : "";

      return (
        '<article class="about-pillar about-pillar--' +
        accent +
        featured +
        '"' +
        (anchorId ? ' id="' + anchorId + '"' : "") +
        ' aria-labelledby="about-' +
        (anchorId || "pillar-" + index) +
        '">' +
        '<div class="about-pillar__icon" aria-hidden="true">' +
        escapeHtml(icon) +
        "</div>" +
        '<div class="about-pillar__content">' +
        (pillar.tagline
          ? '<span class="about-pillar__tagline">' +
            escapeHtml(pillar.tagline) +
            "</span>"
          : "") +
        '<h3 id="about-' +
        (anchorId || "pillar-" + index) +
        '">' +
        escapeHtml(pillar.label || "") +
        "</h3>" +
        toBody(pillar.body) +
        pointsHtml +
        "</div>" +
        '<span class="about-pillar__index" aria-hidden="true">' +
        String(index + 1).padStart(2, "0") +
        "</span>" +
        "</article>"
      );
    })
    .join("");

  mount.innerHTML =
    '<header class="about__header section__header section__header--center">' +
    (about.eyebrow
      ? '<p class="eyebrow">' + escapeHtml(about.eyebrow) + "</p>"
      : "") +
    '<h2 id="about-heading">' +
    escapeHtml(about.heading || "Who we are") +
    "</h2>" +
    (about.intro
      ? '<p class="section__intro about__intro">' +
        escapeHtml(about.intro) +
        "</p>"
      : "") +
    (about.hook
      ? '<p class="about__hook"><span class="about__hook-dot" aria-hidden="true"></span>' +
        escapeHtml(about.hook) +
        "</p>"
      : "") +
    "</header>" +
    '<div class="about__pillars">' +
    pillarsHtml +
    "</div>";
}

function renderJourney() {
  const mount = document.getElementById("journey-content");
  if (!mount) return;

  const journey = window.JOURNEY || {};
  const steps = Array.isArray(journey.steps) ? journey.steps : [];

  const escapeHtml = function (value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  };

  const iconSvg = {
    donate:
      '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-7 10-7 10z" stroke="currentColor" stroke-width="1.5"/></svg>',
    act:
      '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
    change:
      '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
    future:
      '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.5"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  };

  const arrowSvg =
    '<svg class="journey__arrow-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  const accentClass = function (accent) {
    if (accent === "red") return "red";
    if (accent === "blue") return "blue";
    if (accent === "yellow") return "yellow";
    return "green";
  };

  let pathHtml = "";
  steps.forEach(function (step, index) {
    const accent = accentClass(step.accent);
    const icon = iconSvg[step.icon] || iconSvg.donate;

    pathHtml +=
      '<li class="journey__path-node journey__path-node--' +
      accent +
      '">' +
      '<div class="journey__path-icon">' +
      icon +
      "</div>" +
      '<span class="journey__path-num">' +
      escapeHtml(step.num || String(index + 1).padStart(2, "0")) +
      "</span>" +
      '<span class="journey__path-label">' +
      escapeHtml(step.title || "") +
      "</span>" +
      "</li>";

    if (index < steps.length - 1) {
      pathHtml +=
        '<li class="journey__path-arrow" aria-hidden="true">' +
        arrowSvg +
        "</li>";
    }
  });

  let cardsHtml = "";
  steps.forEach(function (step, index) {
    const accent = accentClass(step.accent);
    const featured = step.featured ? " journey__card--featured" : "";

    cardsHtml +=
      '<article class="journey__card journey__card--' +
      accent +
      featured +
      '">' +
      (step.tagline
        ? '<span class="journey__card-tagline">' +
          escapeHtml(step.tagline) +
          "</span>"
        : "") +
      "<h3>" +
      escapeHtml(step.title || "") +
      "</h3>" +
      "<p>" +
      escapeHtml(step.body || "") +
      "</p>" +
      "</article>";
  });

  mount.innerHTML =
    '<header class="journey__header section__header section__header--center">' +
    (journey.eyebrow
      ? '<p class="eyebrow">' + escapeHtml(journey.eyebrow) + "</p>"
      : "") +
    '<h2 id="journey-heading">' +
    escapeHtml(journey.heading || "How it works") +
    "</h2>" +
    (journey.intro
      ? '<p class="section__intro journey__intro">' +
        escapeHtml(journey.intro) +
        "</p>"
      : "") +
    (journey.hook
      ? '<p class="journey__hook"><span class="journey__hook-dot" aria-hidden="true"></span>' +
        escapeHtml(journey.hook) +
        "</p>"
      : "") +
    "</header>" +
    '<ol class="journey__path" aria-label="Impact journey steps">' +
    pathHtml +
    "</ol>" +
    '<div class="journey__cards">' +
    cardsHtml +
    "</div>" +
    (journey.cta && journey.cta.label
      ? '<p class="journey__cta-wrap">' +
        '<a href="' +
        escapeHtml(journey.cta.href || "#donate-form") +
        '" class="btn btn--pill btn--red journey__cta">' +
        escapeHtml(journey.cta.label) +
        "</a></p>"
      : "");
}

function renderContact() {
  const mount = document.getElementById("contact-content");
  if (!mount) return;

  const contact = window.CONTACT || {};
  const licenses = Array.isArray(window.LICENSES) ? window.LICENSES : [];

  const escapeHtml = function (value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  };

  const phoneHref = contact.phone
    ? "tel:" + String(contact.phone).replace(/[\s()-]/g, "")
    : "";

  const addressLines = Array.isArray(contact.address)
    ? contact.address
    : contact.address
      ? [contact.address]
      : [];

  const licensesHtml = licenses
    .map(function (license, index) {
      const accent = license.accent === "blue" ? "blue" : "green";
      const featured =
        license.featured || index === 0 ? " license-card--featured" : "";

      return (
        '<li class="license-card license-card--' +
        accent +
        featured +
        '">' +
        '<div class="license-card__body">' +
        '<div class="license-card__meta">' +
        (license.year
          ? '<span class="license-card__year">' +
            escapeHtml(license.year) +
            "</span>"
          : "") +
        '<span class="license-card__badge">Verified</span>' +
        "</div>" +
        "<h3>" +
        escapeHtml(license.title || "") +
        "</h3>" +
        (license.issuer
          ? '<p class="license-card__issuer">' +
            escapeHtml(license.issuer) +
            "</p>"
          : "") +
        (license.number
          ? '<p class="license-card__number">' +
            escapeHtml(license.number) +
            "</p>"
          : "") +
        "</div>" +
        "</li>"
      );
    })
    .join("");

  mount.innerHTML =
    '<header class="contact__header section__header section__header--center">' +
    (contact.eyebrow
      ? '<p class="eyebrow">' + escapeHtml(contact.eyebrow) + "</p>"
      : "") +
    '<h2 id="contact-heading">' +
    escapeHtml(contact.heading || "Contact Us") +
    "</h2>" +
    (contact.intro
      ? '<p class="section__intro contact__intro">' +
        escapeHtml(contact.intro) +
        "</p>"
      : "") +
    (contact.hook
      ? '<p class="contact__hook"><span class="contact__hook-dot" aria-hidden="true"></span>' +
        escapeHtml(contact.hook) +
        "</p>"
      : "") +
    "</header>" +
    '<div class="contact__layout">' +
    '<div class="contact__info">' +
    '<div class="contact__card contact__card--address">' +
    '<span class="contact__card-icon" aria-hidden="true">&#128205;</span>' +
    "<h3>Visit us</h3>" +
    "<address>" +
    addressLines
      .map(function (line) {
        return "<p>" + escapeHtml(line) + "</p>";
      })
      .join("") +
    "</address>" +
    "</div>" +
    (contact.email
      ? '<div class="contact__card contact__card--email">' +
        '<span class="contact__card-icon" aria-hidden="true">&#9993;</span>' +
        "<h3>Email</h3>" +
        '<p><a href="mailto:' +
        escapeHtml(contact.email) +
        '">' +
        escapeHtml(contact.email) +
        "</a></p>" +
        "</div>"
      : "") +
    (contact.phone
      ? '<div class="contact__card contact__card--phone">' +
        '<span class="contact__card-icon" aria-hidden="true">&#128222;</span>' +
        "<h3>Phone</h3>" +
        '<p><a href="' +
        escapeHtml(phoneHref) +
        '">' +
        escapeHtml(contact.phone) +
        "</a></p>" +
        "</div>"
      : "") +
    "</div>" +
    '<div class="contact__licenses" id="licenses">' +
    '<header class="contact__licenses-header">' +
    "<h3>" +
    escapeHtml(contact.licensesHeading || "Licenses & Certifications") +
    "</h3>" +
    (contact.licensesIntro
      ? "<p>" + escapeHtml(contact.licensesIntro) + "</p>"
      : "") +
    (licenses.length
      ? '<p class="contact__proof"><span class="contact__proof-badge" aria-hidden="true">&#10003;</span>' +
        "<span><strong>" +
        escapeHtml(String(licenses.length)) +
        " official documents</strong> on file</span></p>"
      : "") +
    "</header>" +
    '<ul class="licenses__grid" id="licenses-grid">' +
    licensesHtml +
    "</ul>" +
    "</div>" +
    "</div>";
}

function initSectionBreadcrumbs() {
  const list = document.getElementById("section-breadcrumbs-list");
  const scrollWrap = document.querySelector(".section-breadcrumbs__scroll");
  if (!list || !scrollWrap) return;

  const items = Array.isArray(window.SECTION_NAV) ? window.SECTION_NAV : [];
  if (!items.length) return;

  const escapeHtml = function (value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  };

  let html = "";
  items.forEach(function (item, index) {
    if (index === 1) {
      html +=
        '<li class="section-breadcrumbs__sep" aria-hidden="true">›</li>';
    }
    const href = item.id === "top" ? "#" : "#" + escapeHtml(item.id);
    html +=
      '<li class="section-breadcrumbs__item">' +
      '<a href="' +
      href +
      '" class="section-breadcrumbs__link" data-section-id="' +
      escapeHtml(item.id) +
      '">' +
      escapeHtml(item.label || "") +
      "</a></li>";
  });
  list.innerHTML = html;

  const links = list.querySelectorAll(".section-breadcrumbs__link");
  const linkById = {};
  links.forEach(function (link) {
    linkById[link.getAttribute("data-section-id")] = link;
  });

  const targets = items
    .map(function (item) {
      if (item.id === "top") {
        return {
          id: "top",
          el: document.querySelector(".hero") || document.body,
        };
      }
      return { id: item.id, el: document.getElementById(item.id) };
    })
    .filter(function (target) {
      return target.el;
    });

  if (!targets.length) return;

  const setActive = function (sectionId) {
    links.forEach(function (link) {
      const isActive = link.getAttribute("data-section-id") === sectionId;
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    const activeLink = linkById[sectionId];
    if (activeLink && scrollWrap) {
      const linkLeft = activeLink.offsetLeft;
      const linkWidth = activeLink.offsetWidth;
      const wrapWidth = scrollWrap.clientWidth;
      const scrollLeft = linkLeft - wrapWidth / 2 + linkWidth / 2;
      scrollWrap.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  };

  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      const id = link.getAttribute("data-section-id");
      if (id === "top") {
        e.preventDefault();
        e.stopPropagation();
        closeMobileMenu();
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActive("top");
        return;
      }

      if (id) {
        e.preventDefault();
        e.stopPropagation();
        scrollToPageTarget(id);
      }
    });
  });

  const headerOffset =
    parseInt(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--header-offset"
      ),
      10
    ) || 116;

  const visibleSections = new Map();

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        const id = entry.target.getAttribute("data-breadcrumb-id");
        if (!id) return;
        if (entry.isIntersecting) {
          visibleSections.set(id, entry.intersectionRatio);
        } else {
          visibleSections.delete(id);
        }
      });

      if (window.scrollY < 48) {
        setActive("top");
        return;
      }

      if (!visibleSections.size) return;

      let bestId = null;
      let bestRatio = -1;
      visibleSections.forEach(function (ratio, id) {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestId = id;
        }
      });

      if (bestId) setActive(bestId);
    },
    {
      root: null,
      rootMargin: "-" + headerOffset + "px 0px -50% 0px",
      threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
    }
  );

  targets.forEach(function (target) {
    target.el.setAttribute("data-breadcrumb-id", target.id);
    observer.observe(target.el);
  });

  setActive(window.scrollY < 48 ? "top" : targets[0].id);
}

function closeMobileMenu() {
  const menuBtn = document.querySelector(".nav__menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (!menuBtn || !mobileMenu) return;
  menuBtn.setAttribute("aria-expanded", "false");
  menuBtn.classList.remove("is-open");
  mobileMenu.hidden = true;
}

function scrollToPageTarget(id) {
  const target = document.getElementById(id);
  if (!target) return false;

  closeMobileMenu();

  const performScroll = function () {
    const offset =
      parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--header-offset"
        ),
        10
      ) || 116;
    const top =
      target.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: "smooth",
    });

    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, "", "#" + id);
    }
  };

  requestAnimationFrame(function () {
    requestAnimationFrame(performScroll);
  });

  return true;
}

function initInPageAnchorLinks() {
  document.addEventListener("click", function (e) {
    const link = e.target.closest("a[href^='#'], a[data-scroll-target]");
    if (!link) return;

    const scrollTarget = link.getAttribute("data-scroll-target");
    const href = link.getAttribute("href");
    const id = scrollTarget
      ? scrollTarget
      : href && href.startsWith("#") && href.length > 1
        ? decodeURIComponent(href.slice(1))
        : "";

    if (!id || !document.getElementById(id)) return;

    e.preventDefault();
    e.stopPropagation();
    scrollToPageTarget(id);
  });
}

function safeRender(name, fn) {
  try {
    fn();
  } catch (err) {
    console.error("InAmigos: failed to render " + name, err);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  safeRender("projects", renderProjects);
  safeRender("about", renderAbout);
  safeRender("contact", renderContact);
  safeRender("journey", renderJourney);
  safeRender("stories", renderStoriesSpotlight);
  safeRender("breadcrumbs", initSectionBreadcrumbs);
  safeRender("awards", renderAwards);
  safeRender("testimonials", renderTestimonials);
  safeRender("faqs", renderFaqs);

  initInPageAnchorLinks();

  if (window.location.hash.length > 1) {
    const hashId = decodeURIComponent(window.location.hash.slice(1));
    setTimeout(function () {
      scrollToPageTarget(hashId);
    }, 0);
  }

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
  const customHint = donateCard.querySelector("#custom-amount-hint");
  const submitBtn = donateCard.querySelector(".donate-card__submit");

  const totalEl = donateCard.querySelector("#donate-total");
  const freqEl = donateCard.querySelector("#donate-frequency");
  const btnAmountEl = donateCard.querySelector("#donate-btn-amount");
  const impactCountEl = donateCard.querySelector("#impact-count");
  const impactNounEl = donateCard.querySelector("#impact-noun");

  // State
  let frequency = "monthly";
  let amount = 100;
  const MIN_CUSTOM_AMOUNT = 100;

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

    updateDonateFormState();
  };

  const isDonateAmountValid = function () {
    const raw = customInput ? customInput.value.trim() : "";
    const value = Number(raw);
    const isBelowMin =
      raw !== "" && (Number.isNaN(value) || value < MIN_CUSTOM_AMOUNT);

    return amount > 0 && !isBelowMin;
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

  const updateDonateFormState = function () {
    const raw = customInput ? customInput.value.trim() : "";
    const value = Number(raw);
    const isBelowMin =
      raw !== "" && (Number.isNaN(value) || value < MIN_CUSTOM_AMOUNT);
    const canDonate = amount > 0 && !isBelowMin;

    if (customHint) {
      customHint.hidden = !isBelowMin;
    }

    if (customInput) {
      customInput.setAttribute("aria-invalid", isBelowMin ? "true" : "false");
    }

    if (submitBtn) {
      submitBtn.disabled = !canDonate;
      submitBtn.setAttribute("aria-disabled", canDonate ? "false" : "true");
    }
  };

  donateCard.addEventListener("submit", function (event) {
    if (!isDonateAmountValid()) {
      event.preventDefault();
    }
  });

  if (submitBtn) {
    submitBtn.addEventListener("click", function (event) {
      if (!isDonateAmountValid()) {
        event.preventDefault();
      }
    });
  }

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

    customInput.addEventListener("blur", updateDonateFormState);
  }

  updateUI();
});
