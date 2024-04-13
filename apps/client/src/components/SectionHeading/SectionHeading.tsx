import { FC, ComponentPropsWithoutRef } from "react";

interface SectionHeadingProps extends ComponentPropsWithoutRef<"h2"> {}

const SectionHeading: FC<SectionHeadingProps> = ({ children, ...props }) => {
  return (
    <h2 className="mb-8 text-center text-3xl font-medium capitalize" {...props}>
      {children}
    </h2>
  );
};

export { SectionHeading };
