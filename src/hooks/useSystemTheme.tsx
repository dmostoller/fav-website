"use client";

import { useState, useEffect } from "react";

export const useSystemTheme = () => {
  const [isDark, setIsDark] = useState(false); // Default value for SSR

  useEffect(() => {
    // Check if window exists (client-side only)
    if (typeof window !== "undefined") {
      setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);

      // Add listener for theme changes
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);

      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    }
  }, []);

  return isDark;
};
