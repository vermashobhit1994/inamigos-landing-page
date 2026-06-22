// ==========================================================================
// InAmigos — project gallery page (gallery.html)
// ==========================================================================
//
// Tabs and photo grids come from window.PROJECTS in projects-data.js.
// Add photos to each project's "gallery" field (main image is included automatically).
// ==========================================================================

(function () {
  const tabsMount = document.getElementById("gallery-tabs");
  const panelsMount = document.getElementById("gallery-panels");
  const headerMount = document.getElementById("gallery-page-header");

  if (!tabsMount || !panelsMount) return;

  const projects = Array.isArray(window.PROJECTS) ? window.PROJECTS : [];
  const pageCopy = window.GALLERY_PAGE || {};

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
      : function (project) {
          return String((project && (project.id || project.title)) || "")
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");
        };

  function getProjectPhotos(project) {
    const photos = [];
    const seen = {};

    function add(item) {
      const src = typeof item === "string" ? item : item && item.image;
      if (!src || seen[src]) return;
      seen[src] = true;
      photos.push({
        image: src,
        alt:
          typeof item === "string"
            ? project.alt || project.title || ""
            : item.alt || project.alt || project.title || "",
        caption:
          typeof item === "string" ? "" : item.caption || item.alt || "",
      });
    }

    if (project.image) {
      add({ image: project.image, alt: project.alt || project.title });
    }

    if (Array.isArray(project.gallery)) {
      project.gallery.forEach(add);
    }

    return photos;
  }

  if (headerMount) {
    headerMount.innerHTML =
      (pageCopy.eyebrow
        ? '<p class="eyebrow">' + escapeHtml(pageCopy.eyebrow) + "</p>"
        : "") +
      '<h1 id="gallery-page-heading">' +
      escapeHtml(pageCopy.heading || "Project gallery") +
      "</h1>" +
      (pageCopy.intro
        ? '<p class="section__intro">' + escapeHtml(pageCopy.intro) + "</p>"
        : "");
  }

  if (!projects.length) {
    panelsMount.innerHTML =
      '<p class="gallery-page__empty">No projects yet. Add entries to PROJECTS in projects-data.js.</p>';
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const wanted = params.get("p");
  let activeIndex = 0;

  if (wanted) {
    const found = projects.findIndex(function (project) {
      return slugify(project) === wanted;
    });
    if (found !== -1) activeIndex = found;
  }

  tabsMount.innerHTML = projects
    .map(function (project, index) {
      const slug = slugify(project);
      const accent = project.accent === "blue" ? "blue" : "green";
      const selected = index === activeIndex;

      return (
        '<button type="button" class="gallery-tabs__tab gallery-tabs__tab--' +
        accent +
        '" role="tab" id="gallery-tab-' +
        escapeHtml(slug) +
        '" aria-selected="' +
        (selected ? "true" : "false") +
        '" aria-controls="gallery-panel-' +
        escapeHtml(slug) +
        '" tabindex="' +
        (selected ? "0" : "-1") +
        '" data-gallery-tab="' +
        escapeHtml(slug) +
        '">' +
        escapeHtml(project.title || "Project") +
        "</button>"
      );
    })
    .join("");

  panelsMount.innerHTML = projects
    .map(function (project, index) {
      const slug = slugify(project);
      const accent = project.accent === "blue" ? "blue" : "green";
      const photos = getProjectPhotos(project);
      const selected = index === activeIndex;
      const detailHref =
        "project.html?p=" + encodeURIComponent(slug);
      const galleryHref =
        "gallery.html?p=" + encodeURIComponent(slug);

      const gridHtml = photos.length
        ? photos
            .map(function (photo) {
              return (
                '<figure class="gallery-grid__item">' +
                '<img src="' +
                escapeHtml(photo.image) +
                '" alt="' +
                escapeHtml(photo.alt) +
                '" loading="lazy" />' +
                (photo.caption
                  ? '<figcaption class="gallery-grid__caption">' +
                    escapeHtml(photo.caption) +
                    "</figcaption>"
                  : "") +
                "</figure>"
              );
            })
            .join("")
        : '<p class="gallery-panel__empty">Photos coming soon for this project.</p>';

      return (
        '<div class="gallery-panel' +
        (selected ? " is-active" : "") +
        '" role="tabpanel" id="gallery-panel-' +
        escapeHtml(slug) +
        '" aria-labelledby="gallery-tab-' +
        escapeHtml(slug) +
        '" data-gallery-panel="' +
        escapeHtml(slug) +
        '"' +
        (selected ? "" : ' hidden') +
        ">" +
        '<header class="gallery-panel__intro">' +
        (project.category
          ? '<span class="gallery-panel__badge gallery-panel__badge--' +
            accent +
            '">' +
            escapeHtml(project.category) +
            "</span>"
          : "") +
        "<h2>" +
        escapeHtml(project.title || "") +
        "</h2>" +
        (project.description
          ? "<p>" + escapeHtml(project.description) + "</p>"
          : "") +
        (project.stat
          ? '<p class="gallery-panel__stat">' + escapeHtml(project.stat) + "</p>"
          : "") +
        "</header>" +
        '<div class="gallery-grid">' +
        gridHtml +
        "</div>" +
        '<div class="gallery-panel__actions">' +
        '<a href="' +
        escapeHtml(detailHref) +
        '" class="btn btn--pill btn--' +
        accent +
        '">Read about ' +
        escapeHtml(project.title || "this project") +
        "</a>" +
        '<a href="' +
        escapeHtml(galleryHref) +
        '" class="link-arrow gallery-panel__share">Share this tab</a>' +
        "</div>" +
        "</div>"
      );
    })
    .join("");

  const tabs = Array.from(
    tabsMount.querySelectorAll('[role="tab"]')
  );
  const panels = Array.from(
    panelsMount.querySelectorAll('[role="tabpanel"]')
  );

  function activateTab(slug, focusTab) {
    tabs.forEach(function (tab) {
      const isActive = tab.getAttribute("data-gallery-tab") === slug;
      tab.setAttribute("aria-selected", isActive ? "true" : "false");
      tab.tabIndex = isActive ? 0 : -1;
    });

    panels.forEach(function (panel) {
      const isActive = panel.getAttribute("data-gallery-panel") === slug;
      panel.classList.toggle("is-active", isActive);
      panel.hidden = !isActive;
    });

    if (focusTab) {
      const activeTab = tabs.find(function (tab) {
        return tab.getAttribute("data-gallery-tab") === slug;
      });
      if (activeTab) activeTab.focus();
    }

    const nextUrl =
      "gallery.html?p=" + encodeURIComponent(slug);
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, "", nextUrl);
    }
  }

  tabsMount.addEventListener("click", function (event) {
    const tab = event.target.closest('[role="tab"]');
    if (!tab || !tabsMount.contains(tab)) return;
    activateTab(tab.getAttribute("data-gallery-tab"), true);
  });

  tabsMount.addEventListener("keydown", function (event) {
    const current = document.activeElement;
    if (!current || current.getAttribute("role") !== "tab") return;

    const index = tabs.indexOf(current);
    if (index === -1) return;

    let nextIndex = index;

    if (event.key === "ArrowRight") {
      nextIndex = (index + 1) % tabs.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + tabs.length) % tabs.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = tabs.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    activateTab(tabs[nextIndex].getAttribute("data-gallery-tab"), true);
  });
})();
