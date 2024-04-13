import "./globals.css";
import type { Metadata } from "next";
import { ThemeScript } from "@/utils";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { ThemeSwitcherContextProvider } from "@/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jeyhun Abilov | Software Developer",
  description: `Jeyhun Abilov is a Full-stack Developer with ${new Date().getFullYear() - 2022} years of experience`,
  keywords:
    "Jeyhun, Abilov, Full-stack, Developer, Software, Engineer, Web, Developer, Frontend, Backend, JavaScript, TypeScript, React, Next.js, Node.js, TailwindCSS, MongoDB, PostgreSQL, MySQL, GraphQL, Apollo, Prisma, Vercel, Netlify, AWS, Azure, Docker, Kubernetes, CI/CD, DevOps, SEO, Performance, Accessibility, PWA, Microservices, Clean, Code, SOLID, Design, Patterns, Architecture, Algorithms, Data, Structures, OOP, FP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <ThemeScript />
      </head>
      <body
        className={`${inter.className} relative bg-gray-50  text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <ThemeSwitcherContextProvider>
          {children}
          <Toaster position="top-right" />
        </ThemeSwitcherContextProvider>
      </body>
    </html>
  );
}
