import { createElement } from "react";
import corpcommentImg from "../../public/corpcomment.png";
import rmtdevImg from "../../public/rmtdev.png";
import wordanalyticsImg from "../../public/wordanalytics.png";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const skillsData = [
  {
    technology: "HTML5",
    documentation: "https://www.w3.org/html/",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    technology: "CSS3",
    documentation: "https://www.w3schools.com/css/",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    technology: "SCSS",
    documentation: "https://sass-lang.com",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
  },
  {
    technology: "Tailwind CSS",
    documentation: "https://tailwindcss.com/",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    technology: "JavaScript",
    documentation: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    technology: "TypeScript",
    documentation: "https://www.typescriptlang.org/",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    technology: "Node.js",
    documentation: "https://nodejs.org",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    technology: "React",
    documentation: "https://react.dev/",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    technology: "Next.js",
    documentation: "https://nextjs.org/",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    technology: "Redux",
    documentation: "https://redux.js.org",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
  },
  // {
  //   technology: "Vite",
  //   documentation: "https://vitejs.dev/",
  //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
  // },
  // {
  //   technology: "Angular",
  //   documentation: "https://angular.dev/",
  //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
  // },
  // {
  //   technology: "Bun",
  //   documentation: "https://bun.sh/",
  //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg",
  // },
  // {
  //   technology: "Express",
  //   documentation: "https://expressjs.com",
  //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  // },
  {
    technology: "NestJS",
    documentation: "https://nestjs.com/",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
  },
  // {
  //   technology: "C#",
  //   documentation: "https://www.w3schools.com/cs/",
  //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
  // },
  // {
  //   technology: "NGINX",
  //   documentation: "https://www.nginx.com/",
  //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg",
  // },
  // {
  //   technology: "MongoDB",
  //   documentation: "https://www.mongodb.com/",
  //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  // },

  // {
  //   technology: "PostgreSQL",
  //   documentation: "https://www.postgresql.org/",
  //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  // },
  // {
  //   technology: "Docker",
  //   documentation: "https://www.docker.com/",
  //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  // },
  {
    technology: "Git",
    documentation: "https://git-scm.com/",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
];

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const experiencesData = [
  {
    title: "Full-stack Developer",
    company: "Freelance",
    location: "Baku, Azerbaijan (Remote)",
    description:
      "Building web apps for clients. I work with Next.js, Tailwind CSS, Figma, Express.js, Prisma and PostgreSQL.",
    icon: createElement(FaReact),
    date: "02/2024 - current",
  },
  {
    title: "Frontend Developer",
    company: "Agamira",
    location: "Kyiv, Ukraine (Remote)",
    description:
      "Building a AI integrated web app for a startup. I work with React, Grapes.js, SCSS, REST API",
    icon: createElement(FaReact),
    date: "07/2023 - 01/2024",
  },
  {
    title: "Advanced Full-stack Development Bootcamp",
    company: "ABB Tech Academy",
    location: "Baku, Azerbaijan",
    description:
      "I studied advanced full-stack development for 6 months. I learned advanced concepts in JavaScript, React, Node.js, Express and PostgreSQL.",
    icon: createElement(LuGraduationCap),
    date: "05/2023 - 11/2023",
  },
  {
    title: "Full-stack Developer",
    company: "Azerbaijan Aerospace Agency",
    location: "Baku, Azerbaijan",
    description:
      "Building REST APIs and web apps for the agency. I worked with Node.js, Express, MongoDB, React and SCSS.",
    icon: createElement(CgWorkAlt),
    date: "02/2023 - 07/2023",
  },
  {
    title: "Full-Stack Development Bootcamp",
    company: "Code Academy",
    location: "Baku, Azerbaijan",
    description:
      "I studied full-stack development for 6 months. I learned HTML, CSS, SCSS, JavaScript, React, Redux, Node.js, Express and MongoDB.",
    icon: createElement(LuGraduationCap),
    date: "09/2022 - 02/2023",
  },
] as const;
