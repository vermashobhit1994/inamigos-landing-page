// ==========================================================================
// InAmigos — project detail page renderer
// ==========================================================================
//
// This reads the project named in the URL (e.g. project.html?p=seva) and
// renders its full page. ALL content comes from "projects-data.js" — to add
// or change a project, edit that file only. You don't need to touch this one.
// ==========================================================================

(function () {
  const mount = document.getElementById("project-detail");
  if (!mount) return;

  const projects = Array.isArray(window.PROJECTS) ? window.PROJECTS : [];

  const escapeHtml = function (value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  };

  const slugify =
    typeof window.projectSlug === "function"
      ? window.projectSlug
      : function (p) {
          return String((p && (p.id || p.title)) || "")
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");
        };

  // Paragraph helper: accepts a string or an array of strings.
  const toParagraphs = function (value) {
    if (!value) return "";
    const list = Array.isArray(value) ? value : [value];
    return list
      .filter(function (p) {
        return String(p).trim() !== "";
      })
      .map(function (p) {
        return "<p>" + escapeHtml(p) + "</p>";
      })
      .join("");
  };

  // ---- Find the requested project ----
  const params = new URLSearchParams(window.location.search);
  const wanted = params.get("p");
  let project = null;

  if (wanted) {
    project = projects.find(function (p) {
      return slugify(p) === wanted;
    });
  }

  // ---- Not found ----
  if (!project) {
    document.title = "Project not found — InAmigos";
    mount.innerHTML =
      '<section class="section project-missing">' +
      '<div class="container">' +
      "<h1>Project not found</h1>" +
      "<p>Sorry, we couldn't find that project. It may have moved or the link is incomplete.</p>" +
      '<a class="btn btn--pill btn--green" href="index.html#projects">Back to all projects</a>' +
      "</div>" +
      "</section>";
    return;
  }

  const accent = project.accent === "blue" ? "blue" : "green";
  document.title = project.title + " — InAmigos Foundation";

  // ---- Stats band ----
  const statsBand =
    Array.isArray(project.stats) && project.stats.length
      ? '<section class="project-stats project-stats--' +
        accent +
        '"><div class="container project-stats__grid">' +
        project.stats
          .map(function (s) {
            return (
              '<div class="project-stat">' +
              '<span class="project-stat__value">' +
              escapeHtml(s.value) +
              "</span>" +
              '<span class="project-stat__label">' +
              escapeHtml(s.label) +
              "</span>" +
              "</div>"
            );
          })
          .join("") +
        "</div></section>"
      : "";

  // ---- Main content: intro + sections ----
  const introParas = toParagraphs(project.detail || project.description);

  const sectionsHtml =
    Array.isArray(project.sections) && project.sections.length
      ? project.sections
          .map(function (sec) {
            return (
              '<div class="project-section">' +
              (sec.heading
                ? "<h2>" + escapeHtml(sec.heading) + "</h2>"
                : "") +
              toParagraphs(sec.body) +
              "</div>"
            );
          })
          .join("")
      : "";

  // ---- Gallery ----
  const galleryHtml =
    Array.isArray(project.gallery) && project.gallery.length
      ? '<div class="project-gallery">' +
        project.gallery
          .map(function (g) {
            const src = typeof g === "string" ? g : g.image;
            const alt = typeof g === "string" ? "" : g.alt || "";
            return (
              '<figure class="project-gallery__item">' +
              '<img src="' +
              escapeHtml(src) +
              '" alt="' +
              escapeHtml(alt) +
              '" loading="lazy" />' +
              "</figure>"
            );
          })
          .join("") +
        "</div>"
      : "";

  // ---- Aside: highlights / at a glance ----
  const highlightsHtml =
    Array.isArray(project.highlights) && project.highlights.length
      ? '<div class="project-aside__card">' +
        "<h3>At a glance</h3>" +
        '<ul class="project-aside__points">' +
        project.highlights
          .map(function (point) {
            return "<li>" + escapeHtml(point) + "</li>";
          })
          .join("") +
        "</ul>" +
        "</div>"
      : "";

  const asideCta =
    '<div class="project-aside__cta project-aside__cta--' +
    accent +
    '">' +
    "<h3>Be part of " +
    escapeHtml(project.title) +
    "</h3>" +
    "<p>Your support helps us reach more people and do more good.</p>" +
    '<a class="btn btn--pill btn--red btn--block" href="index.html#get-involved">Donate now</a>' +
    "</div>";

  const aside =
    '<aside class="project-body__aside">' + highlightsHtml + asideCta + "</aside>";

  // ---- Related projects ----
  const related = projects.filter(function (p) {
    return slugify(p) !== slugify(project);
  });

  const relatedHtml = related.length
    ? '<section class="section project-related">' +
      '<div class="container">' +
      '<header class="section__header section__header--center">' +
      '<p class="eyebrow">Explore More</p>' +
      "<h2>Other projects</h2>" +
      "</header>" +
      '<div class="project-related__grid">' +
      related
        .map(function (p) {
          const pAccent = p.accent === "blue" ? "blue" : "green";
          return (
            '<a class="related-card related-card--' +
            pAccent +
            '" href="project.html?p=' +
            encodeURIComponent(slugify(p)) +
            '">' +
            '<span class="related-card__media">' +
            '<img src="' +
            escapeHtml(p.image) +
            '" alt="' +
            escapeHtml(p.alt || p.title) +
            '" loading="lazy" /></span>' +
            '<span class="related-card__body">' +
            (p.category
              ? '<span class="related-card__badge">' +
                escapeHtml(p.category) +
                "</span>"
              : "") +
            '<span class="related-card__title">' +
            escapeHtml(p.title) +
            "</span>" +
            '<span class="related-card__desc">' +
            escapeHtml(p.description) +
            "</span>" +
            '<span class="related-card__btn">View project</span>' +
            "</span>" +
            "</a>"
          );
        })
        .join("") +
      "</div>" +
      "</div>" +
      "</section>"
    : "";

  // ---- Assemble the page ----
  mount.innerHTML =
    '<section class="project-hero project-hero--' +
    accent +
    '">' +
    '<div class="container project-hero__inner">' +
    '<div class="project-hero__text">' +
    '<a class="project-back project-back--chip" href="index.html#projects">' +
    '<span class="project-back__icon" aria-hidden="true">←</span>' +
    "<span>All projects</span>" +
    "</a>" +
    (project.category
      ? '<span class="project-hero__badge">' +
        escapeHtml(project.category) +
        "</span>"
      : "") +
    "<h1>" +
    escapeHtml(project.title) +
    "</h1>" +
    '<p class="project-hero__lead">' +
    escapeHtml(project.description) +
    "</p>" +
    '<div class="project-hero__actions">' +
    '<a class="btn btn--pill btn--red" href="index.html#get-involved">Donate to ' +
    escapeHtml(project.title) +
    "</a>" +
    '<a class="btn btn--pill btn--outline project-hero__btn-secondary project-hero__btn-secondary--' +
    accent +
    '" href="index.html#projects">← All projects</a>' +
    "</div>" +
    "</div>" +
    '<div class="project-hero__media">' +
    '<img src="' +
    escapeHtml(project.image) +
    '" alt="' +
    escapeHtml(project.alt || project.title) +
    '" />' +
    "</div>" +
    "</div>" +
    "</section>" +
    statsBand +
    '<section class="section project-body">' +
    '<div class="container project-body__inner">' +
    '<div class="project-body__main">' +
    introParas +
    sectionsHtml +
    galleryHtml +
    "</div>" +
    aside +
    "</div>" +
    "</section>" +
    relatedHtml +
    '<div class="project-actions-bar" role="navigation" aria-label="Project actions">' +
    '<a class="btn btn--pill btn--outline project-actions-bar__back project-actions-bar__back--' +
    accent +
    '" href="index.html#projects">All projects</a>' +
    '<a class="btn btn--pill btn--red project-actions-bar__donate" href="index.html#get-involved">Donate</a>' +
    "</div>";
})();
