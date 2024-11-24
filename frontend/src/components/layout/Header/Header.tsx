import type { FC, ReactNode } from "react";
import { Logo } from "./Logo";

type HeaderProps = {
  children: ReactNode;
};

export const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <header className="mx-auto mb-8 p-4 flex justify-between shadow">
      <Logo>{children}</Logo>
    </header>
  );
};
