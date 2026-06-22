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
  const jumpNav = document.getElementById("projects-jump");
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

  const projectPageHref = function (project) {
    return "project.html?p=" + encodeURIComponent(slugify(project));
  };

  const cardValue = function (project, key) {
    const card = project.card;
    if (card && card[key] != null && card[key] !== "") {
      return card[key];
    }
    return project[key];
  };

  grid.innerHTML = projects
    .map(function (project) {
      const accent = project.accent || "green";
      const size =
        allowedSizes.indexOf(project.size) !== -1 ? project.size : "small";
      const featuredClass = project.featured ? " is-featured" : "";
      const href = projectPageHref(project);
      const cardTitle = cardValue(project, "title") || project.title;
      const cardCategory = cardValue(project, "category");
      const cardDescription = cardValue(project, "description");
      const cardStat = cardValue(project, "stat");
      const cardHighlights = cardValue(project, "highlights");
      const cardImage = cardValue(project, "image");
      const cardImageSrcset = cardValue(project, "imageSrcset");
      const cardImageSizes = cardValue(project, "imageSizes");
      const cardAlt = cardValue(project, "alt") || cardTitle;
      const cardCta = cardValue(project, "cta") || "Learn more";
      const cardImageFit = cardValue(project, "imageFit");
      const imageFit = cardImageFit || project.imageFit;
      const layoutClass = " bento-tile--split";
      const placeClass = project.gridPlace
        ? " bento-tile--place-" + escapeHtml(project.gridPlace)
        : "";
      const fitClass = " bento-tile--fit-contain";

      const topRow =
        '<div class="bento-tile__top">' +
        (cardCategory
          ? '<span class="bento-tile__badge">' +
            escapeHtml(cardCategory) +
            "</span>"
          : "") +
        (project.featured
          ? '<span class="bento-tile__featured">★ Featured</span>'
          : "") +
        "</div>";

      const statChip = cardStat
        ? '<span class="bento-tile__stat">' + escapeHtml(cardStat) + "</span>"
        : "";

      const highlights =
        Array.isArray(cardHighlights) && cardHighlights.length
          ? '<ul class="bento-tile__points">' +
            cardHighlights
              .map(function (point) {
                return "<li>" + escapeHtml(point) + "</li>";
              })
              .join("") +
            "</ul>"
          : "";

      const ctaAccent = accent === "blue" ? "blue" : "green";

      const imgAttrs =
        'class="bento-tile__img" src="' +
        escapeHtml(cardImage) +
        '" alt="' +
        escapeHtml(cardAlt) +
        '" loading="lazy"' +
        (cardImageSrcset
          ? ' srcset="' + escapeHtml(cardImageSrcset) + '"'
          : "") +
        (cardImageSizes
          ? ' sizes="' + escapeHtml(cardImageSizes) + '"'
          : "") +
        " />";

      return (
        '<article class="bento-tile bento-tile--' +
        size +
        " bento-tile--" +
        escapeHtml(accent) +
        featuredClass +
        layoutClass +
        placeClass +
        fitClass +
        '" role="listitem">' +
        '<a class="bento-tile__cover" href="' +
        escapeHtml(href) +
        '">' +
        "<img " +
        imgAttrs +
        topRow +
        '<div class="bento-tile__overlay">' +
        '<div class="bento-tile__content">' +
        "<h3>" +
        '<span class="bento-tile__title">' +
        escapeHtml(cardTitle) +
        "</span>" +
        "</h3>" +
        '<p class="bento-tile__desc">' +
        escapeHtml(cardDescription) +
        "</p>" +
        highlights +
        statChip +
        '<span class="bento-tile__cta bento-tile__cta--' +
        escapeHtml(ctaAccent) +
        '">' +
        escapeHtml(cardCta) +
        '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
        '<path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" ' +
        'stroke-linecap="round" stroke-linejoin="round"/>' +
        "</svg>" +
        '<span class="visually-hidden"> about ' +
        escapeHtml(cardTitle) +
        "</span>" +
        "</span>" +
        "</div>" +
        "</div>" +
        "</a>" +
        "</article>"
      );
    })
    .join("");

  if (jumpNav && projects.length) {
    jumpNav.innerHTML =
      '<div class="projects__jump-head">' +
      '<p class="projects__jump-label">Jump to a project</p>' +
      '<p class="projects__jump-hint">Open a programme page directly</p>' +
      "</div>" +
      '<div class="projects__jump-wrap">' +
      '<ul class="projects__jump-list" role="list">' +
      projects
        .map(function (project) {
          const accent = project.accent || "green";
          const pageHref = projectPageHref(project);
          const cardTitle = cardValue(project, "title") || project.title;
          const cardCategory = cardValue(project, "category");
          const featuredMark = project.featured
            ? " projects__jump-link--featured"
            : "";

          return (
            '<li class="projects__jump-item" role="listitem">' +
            '<a class="projects__jump-link projects__jump-link--' +
            escapeHtml(accent) +
            featuredMark +
            '" href="' +
            escapeHtml(pageHref) +
            '">' +
            '<span class="projects__jump-name">' +
            escapeHtml(cardTitle) +
            "</span>" +
            (cardCategory
              ? '<span class="projects__jump-cat">' +
                escapeHtml(cardCategory) +
                "</span>"
              : "") +
            "</a>" +
            "</li>"
          );
        })
        .join("") +
      "</ul>" +
      "</div>";
  } else if (jumpNav) {
    jumpNav.hidden = true;
  }
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

function getTestimonialsInitialCount() {
  return typeof window.TESTIMONIALS_INITIAL_COUNT === "number"
    ? window.TESTIMONIALS_INITIAL_COUNT
    : 5;
}

function renderTestimonialCard(item, index, escapeHtml, getInitials) {
  const accent = item.accent === "blue" ? "blue" : "green";
  const hasVideo = Boolean(item.video);
  const initialCount = getTestimonialsInitialCount();
  const isDeferred = index >= initialCount;

  const avatar = item.avatar
    ? '<img class="testimonial-card__avatar" src="' +
      escapeHtml(item.avatar) +
      '" alt="' +
      escapeHtml(item.name || "") +
      '" loading="lazy" width="48" height="48" />'
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
    (isDeferred ? " testimonial-card--deferred" : "") +
    '" role="listitem"' +
    (isDeferred ? ' hidden aria-hidden="true"' : "") +
    ' itemscope itemtype="https://schema.org/Review">' +
    '<meta itemprop="itemReviewed" content="InAmigos Foundation" />' +
    '<span class="testimonial-card__mark" aria-hidden="true">&ldquo;</span>' +
    '<blockquote class="testimonial-card__quote" itemprop="reviewBody" cite="https://inamigosfoundation.org.in">' +
    escapeHtml(item.quote || "") +
    "</blockquote>" +
    videoHtml +
    '<figcaption class="testimonial-card__person" itemprop="author" itemscope itemtype="https://schema.org/Person">' +
    avatar +
    '<span class="testimonial-card__meta">' +
    '<span class="testimonial-card__name" itemprop="name">' +
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
}

function initTestimonialsLoadMore(items) {
  const section = document.getElementById("testimonials");
  const actions = document.getElementById("testimonials-actions");
  let button = document.getElementById("testimonials-load-more");
  const grid = document.getElementById("testimonials-grid");
  if (!actions || !button || !grid) return;

  const totalCount = items.length;
  const initialCount = getTestimonialsInitialCount();

  actions.hidden = true;
  button.setAttribute("aria-expanded", "false");

  if (totalCount <= initialCount) {
    return;
  }

  const hiddenCount = totalCount - initialCount;
  actions.hidden = false;
  button.textContent =
    "Load more voices (" + String(hiddenCount) + " more)";

  const freshButton = button.cloneNode(true);
  button.replaceWith(freshButton);
  button = freshButton;

  button.addEventListener("click", function () {
    grid.querySelectorAll(".testimonial-card--deferred").forEach(function (card) {
      card.hidden = false;
      card.removeAttribute("aria-hidden");
      card.classList.remove("testimonial-card--deferred");
    });

    if (section) section.classList.add("testimonials--expanded");
    actions.hidden = true;
    button.setAttribute("aria-expanded", "true");
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
    .map(function (item, index) {
      return renderTestimonialCard(item, index, escapeHtml, getInitials);
    })
    .join("");

  initTestimonialsLoadMore(items);
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

  const toBody = function (body, mobileBody) {
    if (!body && !mobileBody) return "";

    const renderParagraph = function (text) {
      if (!text) return "";
      const parts = Array.isArray(text) ? text : [text];
      return parts
        .map(function (p) {
          return "<p>" + escapeHtml(p) + "</p>";
        })
        .join("");
    };

    if (mobileBody) {
      return (
        '<div class="about-pillar__body about-pillar__body--desktop">' +
        renderParagraph(body) +
        "</div>" +
        '<div class="about-pillar__body about-pillar__body--mobile">' +
        renderParagraph(mobileBody) +
        "</div>"
      );
    }

    return renderParagraph(body);
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
          ? (function () {
              const renderList = function (items, modifier) {
                return (
                  '<ul class="about-pillar__points' +
                  (modifier ? " about-pillar__points--" + modifier : "") +
                  '">' +
                  items
                    .map(function (point) {
                      return "<li>" + escapeHtml(point) + "</li>";
                    })
                    .join("") +
                  "</ul>"
                );
              };

              if (Array.isArray(pillar.mobilePoints) && pillar.mobilePoints.length) {
                return (
                  renderList(pillar.points, "desktop") +
                  renderList(pillar.mobilePoints, "mobile")
                );
              }

              return renderList(pillar.points);
            })()
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
        toBody(pillar.body, pillar.mobileBody) +
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

const socialIconSvg = {
  instagram:
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
    '<rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="2"/>' +
    '<circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/>' +
    '<circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
  facebook:
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
    '<path d="M14 8.5V7.2c0-.7.5-1.2 1.2-1.2H17V3h-2.4C12.1 3 11 4.8 11 7v1.5H9v3h2V21h3v-10.5h2.6L17 8.5h-3z"/></svg>',
  linkedin:
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
    '<path d="M6.5 9.5V21h-3V9.5h3zM5 3.5a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5zM9 9.5h2.9v1.6h.04c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.7V21h-3v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H9V9.5z"/></svg>',
  youtube:
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
    '<path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C17.8 5 12 5 12 5s-5.8 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8c2 .4 7.8.4 7.8.4s5.8 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15.5V8.5l5.5 3.5L10 15.5z"/></svg>',
};

function buildSocialLinksHtml(options) {
  const social = Array.isArray(window.SOCIAL) ? window.SOCIAL : [];
  if (!social.length) return "";

  const escapeHtml = function (value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  };

  const opts = options || {};
  const modifier = opts.modifier ? " social-links--" + opts.modifier : "";
  const showHandles = Boolean(opts.showHandles);
  const iconOnly = Boolean(opts.iconOnly);
  const seo = Boolean(opts.seo);
  const rel = seo ? "me noopener noreferrer" : "noopener noreferrer";

  const items = social
    .map(function (item) {
      const platform = String(item.platform || "link").toLowerCase();
      const icon = socialIconSvg[platform] || socialIconSvg.instagram;
      const label = item.label || platform;
      const handle = item.handle ? " (" + item.handle + ")" : "";
      const linkLabel = "Follow InAmigos Foundation on " + label + handle;

      if (iconOnly) {
        return (
          '<li class="social-links__item">' +
          '<a class="social-links__link social-links__link--' +
          escapeHtml(platform) +
          '" href="' +
          escapeHtml(item.url) +
          '" target="_blank" rel="' +
          rel +
          '"' +
          ' title="' +
          escapeHtml(linkLabel) +
          '"' +
          ' aria-label="' +
          escapeHtml(linkLabel) +
          '">' +
          icon +
          '<span class="visually-hidden">' +
          escapeHtml(linkLabel) +
          "</span>" +
          "</a>" +
          "</li>"
        );
      }

      return (
        '<li class="social-links__item">' +
        '<a class="social-links__link social-links__link--' +
        escapeHtml(platform) +
        '" href="' +
        escapeHtml(item.url) +
        '" target="_blank" rel="' +
        rel +
        '"' +
        (seo
          ? ' title="' +
            escapeHtml(linkLabel) +
            '" aria-label="' +
            escapeHtml(linkLabel) +
            '"'
          : "") +
        ">" +
        icon +
        "<span>" +
        escapeHtml(label) +
        (showHandles && item.handle
          ? '<span class="social-links__handle">' +
            escapeHtml(item.handle) +
            "</span>"
          : "") +
        "</span>" +
        "</a>" +
        "</li>"
      );
    })
    .join("");

  if (iconOnly) {
    return (
      '<nav class="social-banner__nav" aria-label="InAmigos social media profiles">' +
      '<ul class="social-links social-links--banner" role="list">' +
      items +
      "</ul></nav>"
    );
  }

  return (
    (opts.heading
      ? '<h3 class="social-links__heading">' + escapeHtml(opts.heading) + "</h3>"
      : "") +
    '<ul class="social-links' +
    modifier +
    '" role="list">' +
    items +
    "</ul>"
  );
}

function renderFooterSocial() {
  const mount = document.getElementById("footer-social");
  if (!mount) return;

  const html = buildSocialLinksHtml({
    modifier: "footer",
    heading: "Follow us",
    seo: true,
  });

  if (html) mount.innerHTML = html;
}

function renderSocialBanner(placementKey, mountId) {
  const mount = document.getElementById(mountId);
  if (!mount) return;

  const placements = window.SOCIAL_PLACEMENTS || {};
  const config = placements[placementKey];
  if (!config) return;

  const navHtml = buildSocialLinksHtml({ iconOnly: true, seo: true });
  if (!navHtml) return;

  const escapeHtml = function (value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  };

  const titleId = mountId + "-title";
  const title = config.title || "Follow us";

  let schemaHtml = "";
  if (config.seoSchema) {
    const social = Array.isArray(window.SOCIAL) ? window.SOCIAL : [];
    schemaHtml =
      social
        .map(function (item) {
          return (
            '<link itemprop="sameAs" href="' + escapeHtml(item.url) + '" />'
          );
        })
        .join("") +
      '<meta itemprop="name" content="InAmigos Foundation" />' +
      '<link itemprop="url" href="https://inamigosfoundation.org.in" />';
  }

  const isFeatured = Boolean(
    config.eyebrow || config.hook || config.ctaLabel
  );

  const copyHtml =
    '<div class="social-banner__copy">' +
    (isFeatured && config.eyebrow
      ? '<p class="social-section__eyebrow">' +
        escapeHtml(config.eyebrow) +
        "</p>"
      : "") +
    '<h2 id="' +
    titleId +
    '" class="social-banner__title' +
    (isFeatured ? " social-banner__title--featured" : "") +
    '">' +
    escapeHtml(title) +
    "</h2>" +
    (config.intro
      ? '<p class="social-banner__intro">' + escapeHtml(config.intro) + "</p>"
      : "") +
    (isFeatured && config.hook
      ? '<p class="social-section__hook">' + escapeHtml(config.hook) + "</p>"
      : "") +
    "</div>";

  const ctaLabelHtml =
    isFeatured && config.ctaLabel
      ? '<p class="social-section__cta-label">' +
        escapeHtml(config.ctaLabel) +
        "</p>"
      : "";

  if (isFeatured) {
    mount.innerHTML =
      '<div class="social-banner social-banner--featured"' +
      (config.seoSchema ? ' itemscope itemtype="https://schema.org/NGO"' : "") +
      ">" +
      '<div class="social-banner__shine" aria-hidden="true"></div>' +
      '<div class="social-banner__inner">' +
      schemaHtml +
      copyHtml +
      ctaLabelHtml +
      navHtml +
      "</div></div>";
  } else {
    mount.innerHTML =
      '<div class="social-banner__inner"' +
      (config.seoSchema ? ' itemscope itemtype="https://schema.org/NGO"' : "") +
      ">" +
      schemaHtml +
      copyHtml +
      navHtml +
      "</div>";
  }

  mount.setAttribute("aria-labelledby", titleId);
}

function renderSocialPlacements() {
  renderSocialBanner("testimonials", "testimonials-social");
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
    (function () {
      const socialHtml = buildSocialLinksHtml({
        modifier: "contact",
        heading: "Follow us",
        showHandles: true,
        seo: true,
      });
      if (!socialHtml) return "";
      return (
        '<div class="contact__card contact__card--social">' +
        '<span class="contact__card-icon" aria-hidden="true">&#128172;</span>' +
        socialHtml +
        "</div>"
      );
    })() +
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

function initSkipLink() {
  const skipLink = document.querySelector(".skip-link");
  if (!skipLink) return;

  skipLink.addEventListener("click", function () {
    const target = document.getElementById("main-content");
    if (target) {
      if (!target.hasAttribute("tabindex")) {
        target.setAttribute("tabindex", "-1");
      }
      target.focus({ preventScroll: true });
    }

    skipLink.blur();
  });
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

  renderFooterSocial();
  renderSocialPlacements();
  initInPageAnchorLinks();
  initSkipLink();

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
