(() => {
  "use strict";

  const storageKey = "kmiller-color-theme";
  const root = document.documentElement;
  let theme = "light";

  try {
    if (window.localStorage.getItem(storageKey) === "dark") {
      theme = "dark";
    }
  } catch {
    // The toggle still works when browser storage is unavailable.
  }

  function applyTheme(nextTheme) {
    theme = nextTheme;
    root.dataset.theme = theme;

    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) {
      themeColor.content = theme === "dark" ? "#08090c" : "#ffffff";
    }

    const toggle = document.querySelector("[data-theme-toggle]");
    if (toggle) {
      toggle.setAttribute("aria-pressed", String(theme === "dark"));
    }
  }

  // Restore the choice before styles render to avoid flashing the other theme.
  applyTheme(theme);

  function setupToggle() {
    const toggle = document.querySelector("[data-theme-toggle]");
    if (!toggle) return;

    applyTheme(theme);
    toggle.hidden = false;
    toggle.addEventListener("click", () => {
      applyTheme(theme === "light" ? "dark" : "light");
      try {
        window.localStorage.setItem(storageKey, theme);
      } catch {
        // Persistence is optional; in-page switching remains available.
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupToggle, { once: true });
  } else {
    setupToggle();
  }

  // Keep an already-open case study consistent with a change in another tab.
  window.addEventListener("storage", (event) => {
    if (event.key === storageKey || event.key === null) {
      applyTheme(event.newValue === "dark" ? "dark" : "light");
    }
  });
})();
