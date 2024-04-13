"use client";

import { createContext } from "react";
import { Theme } from "@/types";

type ThemeSwitcherContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeSwitcherContext = createContext<ThemeSwitcherContextType | null>(
  null,
);

export { ThemeSwitcherContext };
