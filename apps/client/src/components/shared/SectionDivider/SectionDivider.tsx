"use client";

import { FC } from "react";
import { HTMLMotionProps, motion } from "framer-motion";

interface SectionDividerProps extends HTMLMotionProps<"div"> {}

const SectionDivider: FC<SectionDividerProps> = ({ ...props }) => {
  return (
    <motion.div
      className="my-24 hidden h-16 w-1 rounded-full bg-gray-200 sm:block dark:bg-opacity-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
      {...props}
    ></motion.div>
  );
};

export { SectionDivider };
