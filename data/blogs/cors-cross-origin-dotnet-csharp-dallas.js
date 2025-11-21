import { BASE_URL } from "@/lib/utils/baseUrl";

export const blogConfig = {

  slug: "cors-cross-origin-dotnet-csharp-dallas",

    // Meta configuration
  metaConfig: {
    title:
      "CORS in C# and .NET: Secure Cross-Origin Resource Sharing ",
    description:
      "CORS, or Cross-Origin Resource Sharing, is a crucial security mechanism that enables web applications to request resources from different domains. Learn how to configure CORS in .NET to ensure secure and seamless API integration.",
    canonical: "/blog/cors-cross-origin-dotnet-csharp-dallas",
    author: "Moltech Solutions Inc.",
    publisher: "Moltech Solutions Inc.",
    imageUrl:
      `${BASE_URL}/images/meta/cors-cross-origin-dotnet-csharp-dallas.webp`,
    twitterImage:
      `${BASE_URL}/images/meta/cors-cross-origin-dotnet-csharp-dallas.webp`,
    keywords: [
      "CORS in .NET",
      "CORS in C#",
      "Cross-Origin Resource Sharing",
      "CORS policy configuration .NET",
      "C# CORS setup",
      "API integration security",
      "Cross-origin requests in .NET",
      "ASP.NET CORS",
      "Moltech .NET solutions",
      "CORS preflight configuration",
    ],
    section: "Blog",
    publishedTime: "2025-06-19T00:00:00+00:00",
  },
  heroData: {
    title: "CORS (Cross-Origin Resource Sharing)",
    highlight: "in C# and .NET",
    description:
      "CORS, or Cross-Origin Resource Sharing, is a crucial security mechanism that enables web applications to request resources from different domains. Learn how to configure CORS in .NET to ensure secure and seamless API integration.",
    author: "Moltech Solutions Inc.",
    date: "Jun 19, 2025",
    stats: [
      {
        icon: "mdi:shield-lock-outline",
        title: "85% Improved Security",
        desc: "CORS policies control access to your APIs from external sources.",
      },
      {
        icon: "mdi:cloud-sync-outline",
        title: "70% Seamless API Integration",
        desc: "Cross-origin requests enable modern apps to connect across services.",
      },
      {
        icon: "mdi:cog-sync",
        title: "60% Reduced Misconfig Errors",
        desc: "Proper setup of CORS reduces failed preflight and access issues.",
      },
    ],
  },

  tags: [
    "CORS in .NET",
    "Cross-Origin Resource Sharing",
    "ASP.NET Core Security",
    "Same-Origin Policy",
    "CORS Configuration",
    "Web API Integration",
    "HTTP Headers",
    "CORS Best Practices",
    "C# Web Development",
    ".NET 8.0",
  ],

  tableOfContents: [
   
    { id: "same-origin-policy", title: "Understanding Same-Origin Policy" },
    { id: "cors-overview", title: "What is CORS?" },
    { id: "cors-in-dotnet", title: "Configuring CORS in .NET" },
    { id: "cors-options", title: "CORS Policy Options" },
    { id: "common-errors", title: "Common CORS Errors & Fixes" },
    { id: "best-practices", title: "Best Practices for CORS" },
    { id: "conclusion", title: "Conclusion" },
  ],
};
