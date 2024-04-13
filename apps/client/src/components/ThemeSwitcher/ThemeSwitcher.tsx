"use client";

import { useThemeSwitcherContext } from "@/hooks";
import { HTMLMotionProps, motion } from "framer-motion";
import { FC } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

interface ThemeSwitcherProps extends HTMLMotionProps<"button"> {}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ ...props }) => {
  const { theme, toggleTheme } = useThemeSwitcherContext();

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed bottom-5 right-5 flex h-[3rem] w-[3rem] items-center justify-center rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-2xl backdrop-blur-[0.5rem] transition-all hover:scale-[1.15] active:scale-105 dark:bg-gray-950"
      onClick={toggleTheme}
      {...props}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </motion.button>
  );
};

export { ThemeSwitcher };
