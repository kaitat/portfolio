export const isBuildMode = process.env.NODE_ENV === "production";

export const BASE_URL = "xxx";
export const APPLICATION_URL =
  process.env.NEXT_PUBLIC_APPLICATION_URL ?? "http://localhost:3000";
export const MICROCMS_URL = "https://xxxx.microcms.io";
export const CMS_API_BASE_PATH = "/api/v1/";
export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL ?? "";
export const SITE_TITLE = "サイトタイトルを入れてね";
