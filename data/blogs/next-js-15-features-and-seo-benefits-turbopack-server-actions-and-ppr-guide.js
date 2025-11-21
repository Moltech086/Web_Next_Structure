import { AppIcons } from "@/data/appIcons";
import { BASE_URL } from "@/lib/utils/baseUrl";

export const blogConfig = {
  slug: 'next-js-15-features-and-seo-benefits-turbopack-server-actions-and-ppr-guide',

  // Meta configuration for SEO
metaConfig: {
  title:
    "Next.js 15 Features & SEO Benefits | Turbopack, Server Actions & PPR Guide",
  description:
    "Explore the latest performance upgrades in Next.js 15 including Turbopack, Server Actions, and Partial Prerendering. Learn how these features streamline web development and boost Core Web Vitals for faster, scalable, SEO-optimized React apps.",
  canonical: "/blog/next-js-15-features-and-seo-benefits-turbopack-server-actions-and-ppr-guide",
  author: "Moltech Solutions Inc.",
  publisher: "Moltech Solutions Inc.",
  imageUrl: `${BASE_URL}/images/meta/next-js-15-features-and-seo-benefits-turbopack-server-actions-and-ppr-guide.webp`,
  twitterImage: `${BASE_URL}/images/meta/next-js-15-features-and-seo-benefits-turbopack-server-actions-and-ppr-guide.webp`,
  keywords: [
    "next.js",
    "Turbopack",
    "Server Actions",
    "Partial Prerendering",
    "hybrid rendering",
    "React framework",
    "SEO optimization",
    "frontend performance",
    "web development",
    "Vercel",
    "Next.js 15 features"
  ],
  section: "Technology",
  publishedTime: "2025-05-26T00:00:00+00:00",
},


  heroData: {
    title: "Next.js: Key Upgrades & Real-World Benefits",
    highlight: "to Transform Modern Web Development",
    description: "Next.js has firmly established itself as the go-to framework for production-grade React applications by combining hybrid rendering, intuitive routing, and full-stack capabilities.",
    author: "Moltech Solutions Inc.",
    date: "Jul 24, 2025",
    stats: [
      {
        icon: "mdi:rocket-launch",
        title: "85% Faster Performance",
        desc: "Hybrid rendering boosts speed with optimal static and dynamic delivery.",
      },
      {
        icon: "mdi:file-tree-outline",
        title: "75% Better Routing Experience",
        desc: "File-based routing makes page structure and navigation seamless.",
      },
      {
        icon: "mdi:cloud-sync",
        title: "70% Enhanced Full-Stack Power",
        desc: "API routes and server functions empower scalable, real-time apps.",
      },
    ],
  },

  tableOfContents: [
      {
        id: "turbopack-stable-default",
        title: "Turbopack: Now Stable and Default",
        level: 1,
      },
      {
        id: "advanced-observability-tracing",
        title: "Advanced Observability & Tracing",
        level: 1,
      },
      { id: "who-benefits-most", title: "Who Benefits Most", level: 1 },
      {
        id: "current-limitations-roadmap",
        title: "Current Limitations & Roadmap",
        level: 1,
      },
      { id: "server-actions", title: "Server Actions", level: 1 },
      {
        id: "benefits-of-server-actions",
        title: "Key Benefits of Server Actions",
        level: 1,
      },
      {
        id: "server-actions-vs-traditional",
        title: "How It Differs from Traditional Development?",
        level: 1,
      },
      {
        id: "limitations-of-server-actions",
        title: "Limitations of Server Actions",
        level: 1,
      },
      {
        id: "partial-prerendering",
        title: "Partial Prerendering (PPR): Revolutionary Hybrid Rendering",
        level: 1,
      },
      {
        id: "benefits-of-ppr",
        title: "Benefits of Partial Prerendering",
        level: 1,
      },
      { id: "why-ppr-boosts-seo", title: "Why This Boosts SEO", level: 1 },
       { id: "conclusion", title: "Conclusion", level: 1 },
  ],

  tags: [
    "Next.js 15",
    "Turbopack",
    "Server Actions",
    "Partial Prerendering",
    "Hybrid Rendering",
    "React Framework",
    "SEO Optimization",
    "Frontend Performance",
    "Parallel Routes",
    "Web Development Best Practices",
  ],

};
