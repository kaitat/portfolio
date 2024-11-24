import type { FC, ReactNode } from "react";
import { NavHumbergerMenu, NavMenu } from "../Nav";
import { Logo } from "./Logo";

type HeaderProps = {
  children: ReactNode;
};

export const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <header className="w-full mb-8 p-4 flex justify-between shadow">
      <div className="max-w-5xl w-full mx-auto flex justify-between">
        <Logo>{children}</Logo>
        <nav className="flex">
          <NavMenu />
          <NavHumbergerMenu />
        </nav>
      </div>
    </header>
  );
};
