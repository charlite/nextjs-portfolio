"use client";

import React, { createContext, useContext, useSyncExternalStore } from "react";
import {
  applyTheme,
  notifyThemeChange,
  readThemeFromDocument,
  subscribeTheme,
  type Theme,
} from "@/lib/theme";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const theme = useSyncExternalStore<Theme>(
    subscribeTheme,
    readThemeFromDocument,
    (): Theme => "light"
  );

  const toggleTheme = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    try {
      window.localStorage.setItem("theme", next);
    } catch {
      /* ignore */
    }
    applyTheme(next);
    notifyThemeChange();
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }

  return context;
}
