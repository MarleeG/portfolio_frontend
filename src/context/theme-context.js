import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

export const ThemeContext = createContext({
  theme: "system",
  isDark: false,
  setTheme: () => {},
});

const THEME_STORAGE_KEY = "theme-preference";

export function ThemeProvider({ children }) {
  const getStored = () => {
    try {
      const raw = localStorage.getItem(THEME_STORAGE_KEY);
      if (raw === "light" || raw === "dark") return raw;
    } catch (_) {}
    return "system";
  };

  const [theme, setThemeState] = useState(getStored);
  // Track current system dark preference so UI updates live when OS theme changes
  const [systemDark, setSystemDark] = useState(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const effectiveDark = useMemo(() => {
    if (theme === "dark") return true;
    if (theme === "light") return false;
    return systemDark;
  }, [theme, systemDark]);

  // Keep document attribute in sync
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", effectiveDark ? "dark" : "light");

    // Persist explicit overrides only
    try {
      if (theme === "system") {
        localStorage.removeItem(THEME_STORAGE_KEY);
      } else {
        localStorage.setItem(THEME_STORAGE_KEY, theme);
      }
    } catch (_) {}
  }, [effectiveDark, theme]);

  // React to system changes: keep systemDark in sync and, if in `system` mode,
  // flip the DOM attribute immediately to avoid visible lag.
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handler = (e) => {
      const next = e.matches ? "dark" : "light";
      // Only force DOM attribute when following system
      if (theme === "system") {
        document.documentElement.setAttribute("data-theme", next);
      }
      // Always update tracked system state
      setSystemDark(e.matches);
    };

    // Set initial tracked value
    const initial = media.matches ? "dark" : "light";
    if (theme === "system") {
      // Only touch DOM when following system
      document.documentElement.setAttribute("data-theme", initial);
    }
    setSystemDark(media.matches);

    media.addEventListener
      ? media.addEventListener("change", handler)
      : media.addListener(handler);
    return () => {
      media.removeEventListener
        ? media.removeEventListener("change", handler)
        : media.removeListener(handler);
    };
  }, [theme]);

  const setTheme = useCallback((next) => {
    setThemeState(next);
  }, []);

  const value = useMemo(
    () => ({ theme, isDark: effectiveDark, setTheme }),
    [theme, effectiveDark, setTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
