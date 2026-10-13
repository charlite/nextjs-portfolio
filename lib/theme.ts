export type Theme = "light" | "dark";
export type ThemePreference = "system" | Theme;

const STORAGE_KEY = "color-scheme";

export function getStoredPreference(): ThemePreference {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "system" || stored === "light" || stored === "dark") {
      return stored;
    }
  } catch {
    /* private mode / blocked storage */
  }
  return "system";
}

export function resolveTheme(preference: ThemePreference = getStoredPreference()): Theme {
  if (preference === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return preference;
}

export function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export function readThemeFromDocument(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

const listeners = new Set<() => void>();

function notifyListeners() {
  listeners.forEach((listener) => listener());
}

export function subscribeTheme(listener: () => void) {
  listeners.add(listener);

  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const onSystemThemeChange = () => {
    if (getStoredPreference() !== "system") return;
    applyTheme(resolveTheme("system"));
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

export function setStoredPreference(preference: ThemePreference) {
  try {
    if (preference === "system") {
      window.localStorage.removeItem(STORAGE_KEY);
    } else {
      window.localStorage.setItem(STORAGE_KEY, preference);
    }
  } catch {
    /* ignore */
  }
}

/** Runs before React hydrates so the first paint matches system or saved preference. */
export const themeInitScript = `(function(){try{var k='${STORAGE_KEY}';var p=localStorage.getItem(k);var explicit=p==='light'||p==='dark';var d=p==='dark'||(!explicit&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;
