// ==========================================================================
// InAmigos — social impact stories listing (stories.html)
// ==========================================================================
//
// Content comes from window.STORIES in projects-data.js.
// To add a story, edit that file — you don't need to touch this one.
// ==========================================================================

(function () {
  const grid = document.getElementById("stories-grid");
  if (!grid) return;

  const stories = Array.isArray(window.STORIES) ? window.STORIES : [];

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

  const arrowSvg =
    '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">' +
    '<path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" stroke-width="1.5" ' +
    'stroke-linecap="round" stroke-linejoin="round"/></svg>';

  if (!stories.length) {
    grid.innerHTML =
      '<p class="stories-page__empty">No stories yet. Add entries to STORIES in projects-data.js.</p>';
    return;
  }

  grid.innerHTML = stories
    .map(function (story) {
      const href = "story.html?p=" + encodeURIComponent(slugify(story));

      return (
        '<article class="story-card">' +
        '<img src="' +
        escapeHtml(story.image) +
        '" alt="' +
        escapeHtml(story.alt || story.title || "") +
        '" loading="lazy" />' +
        '<div class="story-card__content">' +
        '<h2 class="story-card__title">' +
        escapeHtml(story.title || "") +
        "</h2>" +
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
        "</article>"
      );
    })
    .join("");
})();
