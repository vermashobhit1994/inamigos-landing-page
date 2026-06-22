// ==========================================================================
// InAmigos — single social impact story (story.html?p=slug)
// ==========================================================================
//
// Content comes from window.STORIES in projects-data.js.
// ==========================================================================

(function () {
  const mount = document.getElementById("story-detail");
  if (!mount) return;

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

  const params = new URLSearchParams(window.location.search);
  const wanted = params.get("p");
  let story = null;

  if (wanted) {
    story = stories.find(function (item) {
      return slugify(item) === wanted;
    });
  }

  if (!story) {
    document.title = "Story not found — InAmigos";
    mount.innerHTML =
      '<section class="section story-missing">' +
      '<div class="container">' +
      "<h1>Story not found</h1>" +
      "<p>Sorry, we couldn't find that story.</p>" +
      '<a class="btn btn--pill btn--green" href="stories.html">All stories</a>' +
      "</div>" +
      "</section>";
    return;
  }

  document.title = (story.title || "Story") + " — InAmigos Foundation";

  const bodyHtml = toParagraphs(story.body || story.description);

  mount.innerHTML =
    '<article class="story-detail">' +
    '<div class="story-detail__hero story-card">' +
    '<img src="' +
    escapeHtml(story.image) +
    '" alt="' +
    escapeHtml(story.alt || story.title || "") +
    '" />' +
    '<div class="story-detail__hero-overlay story-card__content">' +
    '<h1 class="story-card__title">' +
    escapeHtml(story.title || "") +
    "</h1>" +
    '<p class="story-card__quote">' +
    escapeHtml(story.description || "") +
    "</p>" +
    "</div>" +
    "</div>" +
    '<div class="container story-detail__body">' +
    '<a class="story-detail__back link-arrow" href="stories.html">← All stories</a>' +
    '<div class="story-detail__text">' +
    bodyHtml +
    "</div>" +
    '<a class="btn btn--pill btn--red" href="index.html#donate-form">Support our work</a>' +
    "</div>" +
    "</article>";
})();
