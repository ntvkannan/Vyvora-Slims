// ========================================
// Scroll to Top
// Shows a fixed button once the page has scrolled
// past a threshold; scrolls back to the top on click
// ========================================
// Progressive enhancement: the button is hidden by default in the CSS
// (see scss/_scroll-top.scss) and has no default behavior of its own
// as a <button>, so without JavaScript it simply never appears — the
// rest of the page (native scrolling, the sticky header, etc.) is
// completely unaffected either way.

(function () {
  var button = document.querySelector(".scroll-top");
  if (!button) return;

  var SHOW_AFTER_PX = 400;
  var visible = false;

  function updateVisibility() {
    var shouldShow = window.scrollY > SHOW_AFTER_PX;
    if (shouldShow === visible) return;
    visible = shouldShow;
    button.classList.toggle("is-visible", visible);
  }

  window.addEventListener("scroll", updateVisibility, { passive: true });
  updateVisibility();

  button.addEventListener("click", function () {
    var prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // "instant" explicitly overrides the site's global
    // `scroll-behavior: smooth` (see scss/_base.scss) — passing no
    // behavior, or "auto", would defer to that CSS and animate
    // anyway, which is exactly what a reduced-motion visitor asked
    // not to happen.
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "instant" : "smooth"
    });
  });
})();
