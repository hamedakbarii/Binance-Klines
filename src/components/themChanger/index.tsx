import { useContext } from "react";
import DarkThemeButton from "./darkThemButton/index";
import LightThemeButton from "./lightThemeButton/index";
import { ThemeContext } from "../../context/ThemeContextProvider";

const ThemeChanger = () => {
  const { setTheme, applyTheme, theme } = useContext(ThemeContext) || {};

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme?.(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme?.(newTheme);
  };

  return (
    <div
      className="w-16 h-8 rounded-full overflow-hidden cursor-pointer"
      role="presentation"
      onClick={toggleTheme}
    >
      {theme === "light" ? <LightThemeButton /> : <DarkThemeButton />}
    </div>
  );
};

export default ThemeChanger;
