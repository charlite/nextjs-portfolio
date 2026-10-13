"use client";

import { useTheme } from "@/context/theme-context";
import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={toggleTheme}
      suppressHydrationWarning
    >
      {!mounted ? (
        <span className="h-5 w-5" aria-hidden />
      ) : theme === "light" ? (
        <BsSun />
      ) : (
        <BsMoon />
      )}
    </button>
  );
}
