import Image from "next/image";
import type { PropsWithChildren } from "react";

export const Logo = ({ children }: PropsWithChildren) => {
  return (
    <h1 className="text-brand-500/text-high text-xl font-bold align-middle flex items-center">
      <Image
        src="/images/me.png"
        alt="みやざき かいとのアイコン"
        width={200}
        height={200}
        className="w-8 h-auto m-auto items-baseline"
      />
      {children}
    </h1>
  );
};
