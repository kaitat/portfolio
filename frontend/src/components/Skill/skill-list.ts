export const FRONTEND = [
  {
    name: "TypeScript",
    iconType: "typescript",
    rate: 5,
  },
  {
    name: "JavaScript",
    iconType: "javascript",
    rate: 5,
  },
  {
    name: "Next.js",
    iconType: "nextjs",
    rate: 5,
  },
  {
    name: "React",
    iconType: "react",
    rate: 5,
  },
  {
    name: "GraphQL",
    iconType: "graphql",
    rate: 4,
  },
  {
    name: "CSS",
    iconType: "css",
    rate: 4,
  },
  {
    name: "Tailwind CSS",
    iconType: "tailwindcss",
    rate: 4,
  },
] as const;
export const BACKEND = [
  {
    name: "Ruby",
    iconType: "ruby",
    rate: 3,
  },
  {
    name: "PHP",
    iconType: "php",
    rate: 4,
  },
] as const;
export const INFRA = [
  {
    name: "AWS",
    iconType: "aws",
    rate: 2,
  },
  {
    name: "Cloudflare",
    iconType: "cloudflare",
    rate: 3,
  },
  {
    name: "Terraform",
    iconType: "terraform",
    rate: 2,
  },
  {
    name: "Vercel",
    iconType: "vercel",
    rate: 4,
  },
] as const;
export const OTHER = [
  {
    name: "Vim",
    iconType: "vim",
    rate: 5,
  },
  {
    name: "Git",
    iconType: "git",
    rate: 5,
  },
  {
    name: "GitHub",
    iconType: "github",
    rate: 5,
  },
  {
    name: "GitHub Actions",
    iconType: "githubactions",
    rate: 4,
  },
] as const;

export const SKILL_LIST = [
  {
    title: "フロントエンド",
    skill: FRONTEND,
    short: true,
  },
  {
    title: "バックエンド",
    skill: BACKEND,
    short: false,
  },
  {
    title: "インフラ",
    skill: INFRA,
    short: false,
  },
  {
    title: "その他",
    skill: OTHER,
    short: false,
  },
] as const;
