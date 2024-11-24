import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  href: string;
}>;

export const Link = ({ children, href }: Props) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};
