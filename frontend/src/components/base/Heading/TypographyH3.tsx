import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const TypographyH3 = ({
  children,
  margin = "top",
}: PropsWithChildren<{ margin?: "none" | "top" }>) => {
  return (
    <h3
      className={twMerge(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        margin === "top" && "mt-8",
      )}
    >
      {children}
    </h3>
  );
};
