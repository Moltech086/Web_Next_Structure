import { BASE_URL } from "@/lib/utils/baseUrl";

export const blogConfig = {
  slug: "migrate-angular-15-to-angular-18",

  // Meta configuration
  metaConfig: {
    title:
      "Migrate Angular 15 → 18: Challenges & Best Practices ",
    description:
      "Migrate Angular 15 to Angular 18: step-by-step plan, commands, pitfalls, and best practices to upgrade safely and improve performance.",
    canonical: "/blog/migrate-angular-15-to-angular-18",
    author: "Moltech Solutions Inc.",
    publisher: "Moltech Solutions Inc.",
    imageUrl: `${BASE_URL}/images/meta/angular-upgrade-og.webp`,
    twitterImage: `${BASE_URL}/images/meta/angular-upgrade-og.webp`,
    keywords: [
      "migrate angular 15 to angular 18",
      "Angular 18 migration guide",
      "Angular typed reactive forms migration",
      "Angular standalone components upgrade",
    ],
    section: "Web Development",
    tags: [
      "Angular 15",
      "Angular 18",
      "Migration",
      "Best Practices",
      "Frontend Upgrade",
    ],
    publishedTime: "2025-09-02",
    modifiedTime: "2025-09-02",
  },

  heroData: {
    title: "Migrating from Angular 15 to Angular 18: A Comprehensive Guide",
    highlight:
      "Master the Latest Angular Features with a Step-by-Step Migration Path",
    description:
      "Learn how to seamlessly upgrade your Angular 15 applications to Angular 18, leveraging new features while ensuring backward compatibility and optimal performance.",
    author: "Moltech Solutions Inc.",
    date: "Sep 7, 2025",
    stats: [
      {
        icon: "mdi:chart-timeline-variant-shimmer",
        title: "40% Performance Boost",
        desc: "Angular 18's rendering engine improvements deliver significant speed gains.",
      },
      {
        icon: "mdi:lightning-bolt",
        title: "60% Faster Build Times",
        desc: "Enhanced build system and improved dependency resolution.",
      },
      {
        icon: "mdi:shield-lock",
        title: "100% Security Updates",
        desc: "Latest security features and patches for enhanced application protection.",
      },
    ],
  },

  tableOfContents: [
    {
      id: "key-changes",
      title: "Key Changes (Angular 16 → 18)",
      children: [
        {
          id: "standalone-components",
          title: "Standalone Components & Bootstrap",
        },
        { id: "typed-reactive-forms", title: "Strongly Typed Reactive Forms" },
        {
          id: "zonejs-optionality",
          title: "Zone.js Optionality & Change Detection",
        },
        { id: "router-api", title: "Router and API Enhancements" },
        { id: "ssr-signals", title: "SSR, Hydration, and Signals" },
        {
          id: "compiler-performance",
          title: "Compiler & Performance Optimizations",
        },
      ],
    },
    {
      id: "common-pitfalls",
      title: "Common Migration Challenges",
      children: [
        { id: "dependency-compatibility", title: "Dependency Compatibility" },
        { id: "breaking-router-api", title: "Breaking Router & API Changes" },
        {
          id: "change-detection-zonejs",
          title: "Change Detection with Zone.js",
        },
        { id: "forms-migration", title: "Forms Migration to Typed APIs" },
        {
          id: "ssr-hydration-differences",
          title: "SSR and Hydration Differences",
        },
      ],
    },
    {
      id: "migration-workflow",
      title: "Step-by-step Migration Plan",
      children: [
        { id: "pre-migration", title: "Pre-Migration" },
        { id: "migration-steps", title: "Migration Steps" },
        { id: "post-migration", title: "Post-Migration Checklist" },
        { id: "rollback-plan", title: "Rollback Plan" },
      ],
    },
    { id: "case-study", title: "Case Study: Enterprise Migration Success" },
    { id: "version-comparison", title: "Angular 15 vs 18: Feature Comparison" },
    { id: "code-examples", title: "Code Examples" },
    { id: "conclusion", title: "Conclusion" },
  ],

  tags: [
    "Angular 18",
    "Angular Migration",
    "Web Development",
    "TypeScript",
    "Frontend Framework",
    "Standalone Components",
    "Performance Optimization",
    "Migration Strategy",
    "Angular CLI",
    "Breaking Changes",
    "Best Practices",
    "Case Study",
    "CI/CD",
    "Technical Debt",
    "Server-Side Rendering",
  ],

  faqData: {
    faqTitle: "Angular 15 to 18 Migration",
    faqItems: [
      {
        title: "What are the major breaking changes in Angular 18?",
        content:
          "Angular 18 introduces changes in the control flow syntax, standalone components by default, and new dependency injection system. However, the migration path includes compatibility modes for smooth transitions.",
      },
      {
        title: "How long does the migration process typically take?",
        content:
          "The migration time varies based on application size and complexity. Small to medium applications typically take 1-2 weeks, while larger enterprise applications might require 4-6 weeks for a complete migration.",
      },
      {
        title: "Can I migrate incrementally?",
        content:
          "Yes, Angular supports incremental migration. You can update your application piece by piece, testing each component before moving forward. This approach minimizes risks and allows for better management of the migration process.",
      },
    ],
  },
};
