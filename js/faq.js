// ========================================
// FAQ Accordion
// Controls expanded/collapsed FAQ answers
// ========================================
// State lives entirely on the DOM: aria-expanded on the trigger button
// and the `hidden` attribute on its answer are the single source of
// truth, so the content works (fully visible in HTML) even if this
// script fails to load. Each question toggles independently — the
// approved design doesn't call for an "only one open" behavior.

(function () {
  var triggers = document.querySelectorAll(".faq__trigger");

  triggers.forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      var answer = document.getElementById(trigger.getAttribute("aria-controls"));
      var isExpanded = trigger.getAttribute("aria-expanded") === "true";

      trigger.setAttribute("aria-expanded", String(!isExpanded));
      answer.hidden = isExpanded;
    });
  });
})();
