import type { PropsWithChildren } from "react";

export const Logo = ({ children }: PropsWithChildren) => {
  return (
    <h1 className="text-brand-500/text-high text-base font-bold align-middle flex">
      {children}
    </h1>
  );
};
