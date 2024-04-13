"use client";

import { FC, ComponentPropsWithRef } from "react";
import Image from "next/image";
import { HiDownload } from "react-icons/hi";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks";
import { useActiveSectionStore } from "@/store";

interface IntroSectionProps extends ComponentPropsWithRef<"section"> {}

const IntroSection: FC<IntroSectionProps> = ({ ...props }) => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionStore();
  return (
    <section
      ref={ref}
      {...props}
      id="home"
      className="mb-20 mt-4 max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-0 sm:mt-0"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/jeyhun.png"
              alt="Jeyhun selfie"
              width="192"
              height="192"
              quality="100"
              priority={true}
              className="h-40 w-40 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-[6px] text-5xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            🇦🇿
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Jeyhun.</span> I&apos;m a{" "}
        <span className="font-bold">Software Developer</span> with{" "}
        <span className="font-bold">
          {new Date().getFullYear() - 2022} years
        </span>{" "}
        of experience. I enjoy building{" "}
        <span className="italic">
          Full-stack Web Applications with{" "}
          <span className="underline">
            <a href="https://nextjs.org/" target="_blank">
              Next.js
            </a>
          </span>
        </span>
      </motion.h1>
      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="/#contact"
          className="group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition hover:scale-110 hover:bg-gray-950 active:scale-105 dark:border dark:border-white dark:border-opacity-40 sm:dark:border-none"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
        </Link>
        <a
          className="borderBlack group flex cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-3 outline-none transition hover:scale-110 active:scale-105 dark:bg-white/10"
          href="/CV(Jeyhun_Abilov).pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
        </a>
        <span className="flex gap-2">
          <a
            className="borderBlack flex h-[53.59px] w-[53.59px] cursor-pointer items-center justify-center gap-2 rounded-full bg-white p-4 text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 active:scale-105 dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/abilovv599/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a
            className="borderBlack flex h-[53.59px] w-[53.59px] cursor-pointer items-center justify-center gap-2 rounded-full bg-white p-4 text-[1.35rem] text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 active:scale-105 dark:bg-white/10 dark:text-white/60"
            href="https://github.com/Abilov599"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </span>
      </motion.div>
    </section>
  );
};

export { IntroSection };
