"use client";

import { FC } from "react";
import { useSectionInView } from "@/hooks";
import { motion, HTMLMotionProps } from "framer-motion";
import { SectionHeading, SubmitButton } from "@/components";

interface ContactSectionProps extends HTMLMotionProps<"section"> {}

const ContactSection: FC<ContactSectionProps> = ({ ...props }) => {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 mt-8 w-[min(100%,38rem)] text-center sm:mb-40"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      {...props}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="-mt-6 text-gray-700 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:abilovv599@gmail.com">
          abilovv599@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form className="mt-10 flex flex-col dark:text-black">
        <input
          className="borderBlack h-14 rounded-lg px-4 outline-slate-950 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="borderBlack my-3 h-52 rounded-lg p-4 outline-slate-950 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitButton disabled />
      </form>
    </motion.section>
  );
};

export { ContactSection };
