import { MetadataRoute } from "next";

const siteUrl = "https://rafianaz.com"; // Replace with your actual site URL

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
