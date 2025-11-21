import { BASE_URL } from "@/lib/utils/baseUrl";

export const blogConfig = {
  heroData: {
    title: "Understanding",
    highlight: "IEnumerable vs. ICollection in .NET",
    description:
      "If you’re working with collections in C#, you’ve probably come across IEnumerable and ICollection. This guide explains the key differences, performance implications, and best use cases to write more efficient and maintainable code.",
    author: "Moltech Solutions Inc.",
    date: "Jun 14, 2025",
    stats: [
      {
        icon: "mdi:compare",
        title: "70% Smarter Type Usage",
        desc: "Knowing when to use IEnumerable vs. ICollection avoids unnecessary overhead.",
      },
      {
        icon: "mdi:chart-bar",
        title: "60% Better Performance",
        desc: "Optimized collection choices improve data handling efficiency.",
      },
      {
        icon: "mdi:book-open-variant",
        title: "80% Code Readability",
        desc: "Clear interface usage leads to more maintainable and understandable code.",
      },
    ],
  },

  metaConfig: {
  title:
    "IEnumerable vs ICollection in .NET | C# Collections Explained",
  description:
    "Learn the key differences between IEnumerable and ICollection in C# and .NET. Moltech’s Dallas-based team helps North American developers build efficient, scalable software with proper collection usage.",
  canonical: "/blog/ienumerable-vs-icollection-dotnet-csharp",
  author: "Moltech Solutions Inc.",
  publisher: "Moltech Solutions Inc.",
  imageUrl:
    `${BASE_URL}/images/meta/ienumerable-vs-icollection-dotnet-csharp.webp`,
  twitterImage:
    `${BASE_URL}/images/meta/ienumerable-vs-icollection-dotnet-csharp.webp`,
  keywords: [
    "IEnumerable vs ICollection",
    "IEnumerable C#",
    "ICollection C#",
    ".NET collections",
    "C# interface comparison",
    "C# best practices",
    "collection types in .NET",
    "Moltech Dallas",
    ".NET development USA",
    "C# collection tutorial",
    "IEnumerable performance",
    "ICollection usage"
  ],
  section: "Technology",
  publishedTime: "2025-05-26T00:00:00+00:00",
},

  tableOfContents: [
    {
      id: "what-are-ienumerable-and-icollection",
      title: "What Are IEnumerable and ICollection?",
      level: 1,
    },
    {
      id: "when-to-use-ienumerable",
      title: "When can we use IEnumerable?",
      level: 1,
    },
    {
      id: "when-to-use-icollection",
      title: "When can we use ICollection?",
      level: 1,
    },
    {
      id: "best-practices-ienumerable-icollection",
      title: "Best Practices for IEnumerable and ICollection",
      level: 1,
    },
    { id: "conclusion", title: "Conclusion", level: 1 },
  ],

  tags: [
    "IEnumerable vs ICollection",
    "C# Collections",
    ".NET Interfaces",
    "Performance Optimization",
    "Code Maintainability",
    "C# Best Practices",
    "Data Structures in .NET",
    "Enumerable Types",
    "ICollection Usage",
    "C# Programming",
  ],
};
