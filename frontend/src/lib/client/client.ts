// import { BACKEND_URL } from "@/constants/env";
// import type { AppType } from "backend";
// import { hc } from "hono/client";

// const cache = (cache: RequestInit["cache"]) => {
//   // if (!isBuildMode) return "no-store";
//   return cache ? cache : "default";
// };

// export const client = (init?: RequestInit) =>
//   hc<AppType>(BACKEND_URL, {
//     init: {
//       ...init,
//       cache: cache(init?.cache),
//     },
//   });

// export const initRevalidateTag = (
//   tags: NextFetchRequestConfig["tags"],
// ): RequestInit => {
//   return {
//     next: {
//       tags,
//     },
//   };
// };
