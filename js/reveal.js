// ========================================
// Scroll Reveal
// Fades and lifts key sections into view once,
// as they enter the viewport
// ========================================
// Progressive enhancement only. Elements marked [data-reveal] are
// fully visible by default in the CSS; this script is what opts them
// into a hidden starting state before animating them in — so a
// visitor without JavaScript, on a browser without
// IntersectionObserver, or with prefers-reduced-motion set, always
// just sees the finished page with no hidden content and no motion.
//
// Each element reveals once and is then left alone — no repeat
// reveals on re-scroll, no continuous or parallax effects.

(function () {
  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    return;
  }

  var targets = document.querySelectorAll("[data-reveal]");
  if (!targets.length) {
    return;
  }

  // Only now do [data-reveal] elements get a hidden starting state
  // (see scss/_animations.scss) — safe because the observer below is
  // about to reveal every one of them.
  document.documentElement.classList.add("js-reveal-enabled");

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
  );

  targets.forEach(function (target) {
    observer.observe(target);
  });
})();
