export type Theme = "light" | "dark";

let sessionOverride: Theme | null = null;

export function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function getTheme(): Theme {
  return sessionOverride ?? getSystemTheme();
}

export function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

/** Keep Tailwind `dark:` in sync with `getTheme()` (React hydration clears script-set classes on `<html>`). */
export function syncThemeToDocument() {
  applyTheme(getTheme());
}

/** In-session only; never persisted. Cleared on full page load. */
export function setSessionTheme(theme: Theme) {
  sessionOverride = theme;
  syncThemeToDocument();
  notifyThemeChange();
}

const listeners = new Set<() => void>();

function notifyListeners() {
  listeners.forEach((listener) => listener());
}

export function subscribeTheme(listener: () => void) {
  syncThemeToDocument();
  listeners.add(listener);

  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const onSystemThemeChange = () => {
    if (sessionOverride !== null) return;
    syncThemeToDocument();
    notifyListeners();
  };

  media.addEventListener("change", onSystemThemeChange);

  return () => {
    listeners.delete(listener);
    media.removeEventListener("change", onSystemThemeChange);
  };
}

export function notifyThemeChange() {
  notifyListeners();
}

/** Runs before React hydrates so the first paint matches the system color scheme. */
export const themeInitScript = `(function(){try{var d=window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;
