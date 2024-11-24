import { BASE_URL } from "@/constants/env";
import type { MetadataRoute } from "next/types";

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
};

export default sitemap;
