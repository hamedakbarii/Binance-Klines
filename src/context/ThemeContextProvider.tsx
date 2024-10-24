import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext<{
  theme: string;
  setTheme: (theme: string) => void;
  applyTheme: (theme: string) => void;
} | null>(null);

const ThemeContextProvider = ({ children }: { children: JSX.Element }) => {
  const [theme, setTheme] = useState("dark");

  const applyTheme = (theme: string) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const initialTheme = systemPrefersDark ? "dark" : "light";
      setTheme(initialTheme);
      applyTheme(initialTheme);
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = (e: any) => {
      const savedTheme = localStorage.getItem("theme");
      if (!(savedTheme === "light" || savedTheme === "dark")) {
        const newTheme = e.matches ? "dark" : "light";
        setTheme(newTheme);
        applyTheme(newTheme);
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () =>
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, []);

  return (
    <ThemeContext.Provider value={{ applyTheme, setTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
