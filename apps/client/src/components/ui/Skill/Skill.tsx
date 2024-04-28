import { FC, ComponentPropsWithoutRef } from "react";
import Image from "next/image";

interface SkillProps extends ComponentPropsWithoutRef<"div"> {
  technology: string;
  documentation: string;
  logo: string;
}

const Skill: FC<SkillProps> = ({
  technology,
  documentation,
  logo,
  ...props
}) => {
  return (
    <div
      className="borderBlack rounded-xl bg-white px-5 py-3 dark:bg-white/10 dark:text-white/80"
      {...props}
    >
      <a href={documentation} target="_blank">
        <div className="flex flex-col items-center">
          <Image
            src={logo}
            alt={technology}
            width={50}
            height={50}
            className="skill-image mb-2 h-28 w-28"
            priority
          />
          <p>{technology}</p>
        </div>
      </a>
    </div>
  );
};

export { Skill };
