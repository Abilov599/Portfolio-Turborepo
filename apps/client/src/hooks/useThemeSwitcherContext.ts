import { ThemeSwitcherContext } from "@/context";
import { useContext } from "react";

function useThemeSwitcherContext() {
  const context = useContext(ThemeSwitcherContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }

  return context;
}

export { useThemeSwitcherContext };
