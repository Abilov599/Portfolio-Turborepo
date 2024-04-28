"use client";

import clsx from "clsx";
import { FC, ComponentPropsWithoutRef } from "react";
import { FaPaperPlane } from "react-icons/fa";

interface SubmitButtonProps extends ComponentPropsWithoutRef<"button"> {}

const SubmitButton: FC<SubmitButtonProps> = ({ disabled, ...props }) => {
  return (
    <button
      type="submit"
      className="group flex h-[3rem] w-[8rem] items-center justify-center gap-2 rounded-full bg-gray-900 text-white outline-none transition-all hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 dark:bg-white dark:bg-opacity-10"
      disabled={disabled}
      {...props}
    >
      Submit
      <FaPaperPlane
        className={clsx("text-xs opacity-70 transition-all ", {
          "group-hover:-translate-y-1 group-hover:translate-x-1": !disabled,
        })}
      />
    </button>
  );
};

export { SubmitButton };
