import { BASE_URL } from "@/lib/utils/baseUrl";

export const blogConfig = {
  heroData: {
    title: "10 Key Features and Improvements",
    highlight: "in Angular 19",
    description:
      "As one of the most popular frameworks for building modern web applications, Angular continues to evolve. Explore the latest features in Angular 19, from performance enhancements to developer tooling upgrades.",
    author: "Moltech Solutions Inc.",
    date: "May 26, 2025",
    stats: [
      {
        icon: "mdi:rocket-launch-outline",
        title: "50% Faster Build Times",
        desc: "Angular 19 introduces compiler optimizations and improved caching.",
      },
      {
        icon: "mdi:gesture-tap-button",
        title: "40% Improved Developer UX",
        desc: "Upgraded CLI and error messages streamline development.",
      },
      {
        icon: "mdi:shield-check",
        title: "60% Better Security",
        desc: "New strict typing and sanitizer rules enhance app protection.",
      },
    ],
  },
  metaConfig: {
    title:
      "Top 10 Angular 19 Features & Improvements | Moltech Dallas Web Experts",
    description:
      "Explore the 10 major features of Angular 19 with Moltech’s Dallas-based team. From standalone components to SSR improvements, learn how Angular 19 boosts performance, security, and developer productivity for modern U.S. web apps.",
    canonical: "/blog/angular-19-key-features-improvements-dallas",
    author: "Moltech Solutions Inc.",
    publisher: "Moltech Solutions Inc.",
    imageUrl: `${BASE_URL}/images/meta/angular-19-key-features-improvements-dallas.webp`,
    twitterImage: `${BASE_URL}/images/meta/angular-19-key-features-improvements-dallas.webp`,
    keywords: [
      "Angular 19 features",
      "Angular 19 improvements",
      "Angular update 2024",
      "Angular v19 tutorial",
      "standalone components Angular",
      "Angular server-side rendering",
      "Dallas web development",
      "USA Angular developers",
      "Angular SSR enhancements",
      "modern Angular tips",
      "Angular theming API",
      "Angular HMR",
      "Angular SEO best practices",
    ],
    section: "Technology",
    publishedTime: "2025-05-26T00:00:00+00:00",
  },

  tableOfContents: [
    { id: "incremental-hydration", title: "Incremental Hydration", level: 1 },
    {
      id: "route-level-render-modes",
      title: "Route-Level Render Modes",
      level: 1,
    },
    {
      id: "hot-module-replacement",
      title: "Hot Module Replacement (HMR)",
      level: 1,
    },
    { id: "standalone-components", title: "Standalone Components", level: 1 },
    { id: "enhanced-theming-api", title: "Enhanced Theming API", level: 1 },
    {
      id: "two-dimensional-drag-drop",
      title: "Two-Dimensional Drag and Drop",
      level: 1,
    },
    {
      id: "linked-signals-resources",
      title: "Linked Signals and Resources",
      level: 1,
    },
    { id: "security-improvements", title: "Security Improvements", level: 1 },
    {
      id: "migration-tips-angular-19",
      title: "Tips for Migrating to Angular v19",
      level: 1,
    },
    { id: "conclusion", title: "Conclusion", level: 1 },
  ],

  tags: [
    "Angular 19",
    "Angular Features",
    "Frontend Frameworks",
    "Incremental Hydration",
    "Event Replay",
    "SSR in Angular",
    "Angular Performance",
    "Angular CLI",
    "Web App Optimization",
    "JavaScript Frameworks",
  ],
};
