import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const TypographyH4 = ({
  children,
  margin = "top",
}: PropsWithChildren<{ margin?: "none" | "top" }>) => {
  return (
    <h4
      className={twMerge(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        margin === "top" && "mt-8",
      )}
    >
      {children}
    </h4>
  );
};
