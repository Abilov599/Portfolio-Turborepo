"use client";

import { FC } from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import { SectionHeading } from "@/components/shared";
import { useSectionInView } from "@/hooks";

interface AboutSectionProps extends HTMLMotionProps<"section"> {}

const AboutSection: FC<AboutSectionProps> = ({ ...props }) => {
  const { ref } = useSectionInView("About", 0.5);
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-0 sm:scroll-mt-64"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      {...props}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Engineering</span>, I decided to
        pursue my passion for Web Development. I enrolled in a coding bootcamp
        and learned <span className="font-medium">Full-stack Development</span>
        <br />
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. <br /> I <span className="underline">love</span>{" "}
        the feeling of finally figuring out a solution to a problem. <br /> I am
        always looking to learn new technologies.
      </p>
      <p>
        <span className="italic">When I&apos;m not coding</span>, I&apos;m often
        found exploring new video games.
        <br />
        Socializing is a big part of my downtime too.
        <br />I love catching up with friends over meals or going on adventures
        together.
      </p>
    </motion.section>
  );
};

export { AboutSection };
