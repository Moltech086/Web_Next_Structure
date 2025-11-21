import { BASE_URL } from "@/lib/utils/baseUrl";

export const blogConfig = {
  slug: "csharp-interfaces-best-practices",

  metaConfig: {
    title:
      "C# Interface Best Practices for Scalable Software ",
    description:
      "Learn C# interface best practices to build testable, maintainable, and scalable applications—expert tips from Moltech Solutions.",
    canonical: "/blog/csharp-interface-best-practices",
    author: "Moltech Solutions Inc.",
    publisher: "Moltech Solutions Inc.",
    imageUrl: `${BASE_URL}/images/meta/csharp-interface-best-practices-og.webp`,
    twitterImage: `${BASE_URL}/images/meta/csharp-interface-best-practices-og.webp`,
    keywords: [
      "c# interfaces",
      "interface best practices",
      "scalable software C#",
      "Dallas .NET development",
      "testable code",
      "software maintainability",
    ],
    section: "Technology",
    publishedTime: "2025-05-26T00:00:00+00:00",
  },

  heroData: {
    title: "Simplifying Software Development with",
    highlight: "Interfaces in C#",
    description:
      "Unlock the power of clean architecture and flexible code with interfaces in C#. Learn how abstraction improves testability, scalability, and long-term maintainability in software projects.",
    author: "Moltech Solution Inc.",
    date: "Jul 23, 2025",
    stats: [
      {
        icon: "mdi:code-tags-check",
        title: "75% Better Code Reusability",
        desc: "Interfaces promote modular design, reducing code duplication.",
      },
      {
        icon: "mdi:bug-check",
        title: "60% Easier Unit Testing",
        desc: "Dependency injection with interfaces simplifies mock testing.",
      },
      {
        icon: "mdi:domain",
        title: "80% Scalable Architecture",
        desc: "Abstract layers enhance flexibility in growing applications.",
      },
    ],
  },

  tableOfContents: [
    {
      id: "separation-of-concerns",
      title: "1. Separation of Concerns",
      level: 1,
    },
    {
      id: "benefit-of-using-this-approach",
      title: "What is the benefit using this approach ?",
      level: 2,
    },
    { id: "Dependency", title: "2. Dependency Injection (DI)", level: 1 },
    {
      id: "how-dependency-injection-works",
      title: "How Dependency Injection Works",
      level: 1,
    },
    {
      id: "supporting-multiple-implementations",
      title: "3. Supporting Multiple Implementations of same context.",
      level: 1,
    },
    {
      id: "polymorphism-with-interfaces",
      title: "4. Polymorphism with Interfaces",
      level: 1,
    },
    {
      id: "design-patterns-with-interfaces",
      title: "5. Design Patterns with Interfaces",
      level: 1,
    },
    {
      id: "key-benefits-of-interfaces",
      title: "Key Benefits of Interfaces",
      level: 1,
    },
    {
      id: "common-mistakes-when-using-interfaces",
      title: "Common Mistakes When Using Interfaces",
      level: 1,
    },
    { id: "conclusion", title: "Conclusion", level: 1 },
  ],

  tags: [
    "C# Interfaces",
    "Object-Oriented Programming",
    "Software Architecture",
    "Clean Code",
    "SOLID Principles",
    "Abstraction in C#",
    "Dependency Injection",
    "Code Maintainability",
    "Unit Testing",
    "Scalable Software Design",
  ],

  codeSnippets: {
    allPaymentProcessors: `...`,
    paymentService: `...`,
    orderServiceCode: `...`,
    constructorInjectionCode: `...`,
    programCode: `...`,
    diCode: `...`,
    loggerCode: `...`,
    applicationCode: `...`,
    loggerUsageCode: `...`,
    repositoryCode: `...`,
    polymorphicRepoCode: `...`,
  },
};
