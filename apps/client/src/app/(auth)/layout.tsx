import { ThemeSwitcher } from "@/components";
import { FC, ReactNode } from "react";

interface AuthLayoutProps {
  children: Readonly<ReactNode>;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <>
      {children}
      <ThemeSwitcher />
    </>
  );
};

export default AuthLayout;
