import { createContext, useContext, useEffect, useState, useLayoutEffect } from "react";

type Theme = "light" | "dark";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(
  undefined
);

declare global {
  interface Window {
    __THEME__?: Theme;
  }
}

export function ThemeProvider({
  children,
  defaultTheme = "light",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined" && window.__THEME__) {
      return window.__THEME__;
    }
    return defaultTheme;
  });
  const initialTheme = typeof window !== "undefined" && window.__THEME__ ? window.__THEME__ : defaultTheme;

  useLayoutEffect(() => {
    if (theme === initialTheme) {
      return;
    }
    
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
      window.__THEME__ = theme;
    }
  }, [theme, initialTheme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
