"use client";

import { GoogleTagManager } from "@next/third-parties/google";

import { CustomPageViewEventRegister } from "./CustomPageViewEventRegister";

export const GTMRegister = () => {
  return (
    <>
      <GoogleTagManager gtmId="GTM-" />
      <CustomPageViewEventRegister />
      <p className="font-extralight text-3xs text-text-disabled/text-disabled">
        このサイトではcookie等を取得しています。
      </p>
    </>
  );
};
