import {
  SiAmazonwebservices,
  SiCloudflare,
  SiCss3,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGraphql,
  SiJavascript,
  SiNextdotjs,
  SiPhp,
  SiReact,
  SiRuby,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
  SiVercel,
  SiVim,
} from "@icons-pack/react-simple-icons";
import type { FC } from "react";
import { match } from "ts-pattern";

export type IconType =
  | "close"
  | "menu"
  | "star"
  | "typescript"
  | "javascript"
  | "nextjs"
  | "react"
  | "graphql"
  | "css"
  | "tailwindcss"
  | "ruby"
  | "php"
  | "aws"
  | "cloudflare"
  | "terraform"
  | "vercel"
  | "vim"
  | "git"
  | "github"
  | "githubactions";

type Props = {
  type: IconType;
  className?: string;
};

export const Icon = ({ type, className = "" }: Props) => {
  return match(type)
    .with("close", () => <CloseIcon />)
    .with("menu", () => <MenuIcon />)
    .with("star", () => <Star className={className} />)
    .with("typescript", () => (
      <SiTypescript color="#3178C6" className="w-16 h-16" />
    ))
    .with("javascript", () => (
      <SiJavascript color="#F7DF1E" className="w-16 h-16" />
    ))
    .with("nextjs", () => <SiNextdotjs color="#000000" className="w-16 h-16" />)
    .with("react", () => <SiReact color="#61DAFB" className="w-16 h-16" />)
    .with("graphql", () => <SiGraphql color="#E10098" className="w-16 h-16" />)
    .with("css", () => <SiCss3 color="#1572B6" className="w-16 h-16" />)
    .with("tailwindcss", () => (
      <SiTailwindcss color="#06B6D4" className="w-16 h-16" />
    ))
    .with("ruby", () => <SiRuby color="#CC342D" className="w-16 h-16" />)
    .with("php", () => <SiPhp color="#777BB4" className="w-16 h-16" />)
    .with("aws", () => (
      <SiAmazonwebservices color="#232F3E" className="w-16 h-16" />
    ))
    .with("cloudflare", () => (
      <SiCloudflare color="#F38020" className="w-16 h-16" />
    ))
    .with("terraform", () => (
      <SiTerraform color="#844FBA" className="w-16 h-16" />
    ))
    .with("vercel", () => <SiVercel color="#000000" className="w-16 h-16" />)
    .with("vim", () => <SiVim color="#019733" className="w-16 h-16" />)
    .with("git", () => <SiGit color="#F05032" className="w-16 h-16" />)
    .with("github", () => <SiGithub color="#181717" className="w-16 h-16" />)
    .with("githubactions", () => (
      <SiGithubactions color="#2088FF" className="w-16 h-16" />
    ))
    .otherwise(() => null);
};

const MenuIcon: FC = () => (
  <div>
    <svg
      role="img"
      area-label="menu"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="20"
      height="20"
      viewBox="0 0 50 50"
    >
      <title>menu</title>
      <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z" />
    </svg>
  </div>
);

const CloseIcon: FC = () => (
  <div>
    <svg
      role="img"
      area-label="close menu"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="20"
      height="20"
      viewBox="0 0 50 50"
    >
      <title>close menu</title>
      <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
    </svg>
  </div>
);

const Star = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      x="0px"
      y="0px"
      area-label="star"
      viewBox="0 0 24 24"
    >
      <title>star</title>
      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
    </svg>
  );
};
