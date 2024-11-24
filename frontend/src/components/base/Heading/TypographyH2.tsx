import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const TypographyH2 = ({
  children,
  margin = "top",
}: PropsWithChildren<{ margin?: "none" | "top" }>) => {
  return (
    <h2
      className={twMerge(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        margin === "top" && "mt-8",
      )}
    >
      {children}
    </h2>
  );
};
