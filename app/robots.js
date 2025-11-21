import { BASE_URL } from "@/lib/utils/baseUrl";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
