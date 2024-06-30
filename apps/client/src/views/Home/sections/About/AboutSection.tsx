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
        Software Engineer specializing in Web Development. Proficient in
        building robust and scalable web applications, managing the full
        development cycle from conception to deployment, while following the
        latest industry standards. Known for rapid development, producing
        high-quality code, and maintaining a strong enthusiasm for continuous
        learning. Demonstrated ability to deliver projects on time with
        meticulous attention to detail and a commitment to excellence.
        Additionally, I have built and published my own packages on NPM (Node
        Package Manager), showcasing my initiative and expertise in creating
        reusable, high-quality components for the developer community.
      </p>
    </motion.section>
  );
};

export { AboutSection };
