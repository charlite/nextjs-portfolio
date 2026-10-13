export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

export function resolveTheme(): Theme {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") {
      return stored;
    }
  } catch {
    /* private mode / blocked storage */
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export function readThemeFromDocument(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

const listeners = new Set<() => void>();

export function subscribeTheme(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function notifyThemeChange() {
  listeners.forEach((listener) => listener());
}

/** Runs before React hydrates so the first paint matches stored / system preference. */
export const themeInitScript = `(function(){try{var t=localStorage.getItem('${STORAGE_KEY}');var d=t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;
