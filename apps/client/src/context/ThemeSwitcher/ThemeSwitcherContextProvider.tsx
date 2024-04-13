"use client";

import { FC, useEffect, useState } from "react";
import { Theme } from "@/types";
import { ThemeSwitcherContext } from "./";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

const ThemeSwitcherContextProvider: FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("light");
  useEffect(() => {
    setTimeout(() => {
      setTheme(global.window?.__theme);
    });
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else if (matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const handleSystemThemeChange = (event: MediaQueryListEvent) => {
      const newTheme = event.matches ? "dark" : "light";
      setTheme(newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      localStorage.setItem("theme", newTheme);
    };

    const systemThemeQuery = matchMedia("(prefers-color-scheme: dark)");
    systemThemeQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      systemThemeQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  return (
    <ThemeSwitcherContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeSwitcherContext.Provider>
  );
};

export { ThemeSwitcherContextProvider };
