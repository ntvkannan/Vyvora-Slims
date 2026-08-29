// ========================================
// Mobile Navigation
// Controls the header's mobile menu toggle
// ========================================
// The header reuses one <nav id="primary-navigation"> for both
// desktop and mobile: at desktop it's always visible via CSS, so
// this script only matters below that breakpoint. It toggles the
// nav's .is-open class, keeps the toggle button's aria-expanded /
// aria-label in sync, closes on Escape or link selection, and locks
// background scroll while the menu is open.

(function () {
  var toggle = document.querySelector(".site-header__toggle");
  var nav = document.getElementById("primary-navigation");

  if (!toggle || !nav) return;

  function isOpen() {
    return toggle.getAttribute("aria-expanded") === "true";
  }

  function openMenu() {
    nav.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
    document.body.classList.add("has-locked-scroll");
  }

  function closeMenu() {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    document.body.classList.remove("has-locked-scroll");
  }

  toggle.addEventListener("click", function () {
    if (isOpen()) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Escape closes the menu and returns focus to the toggle button,
  // so keyboard users aren't left focused on a hidden link.
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && isOpen()) {
      closeMenu();
      toggle.focus();
    }
  });

  // Selecting a link closes the mobile menu rather than leaving it
  // open underneath the page the user just navigated to.
  var navLinks = nav.querySelectorAll(".site-nav__link");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (isOpen()) {
        closeMenu();
      }
    });
  });

  // Guards against the menu being stuck open (and scroll staying
  // locked) if the viewport is resized past the desktop breakpoint
  // while it's open. Must match $breakpoint-desktop in
  // scss/_variables.scss.
  var desktopQuery = window.matchMedia("(min-width: 1024px)");
  desktopQuery.addEventListener("change", function (event) {
    if (event.matches && isOpen()) {
      closeMenu();
    }
  });
})();
