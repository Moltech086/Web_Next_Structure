import { BASE_URL } from "@/lib/utils/baseUrl";

export const blogConfig = {
  slug: "dotnet-maui-cross-platform-mobile-apps",

  // Meta configuration
metaConfig: {
  title: ".NET MAUI — Build Cross-Platform Mobile Apps ",
  description: "Build native-feeling Android, iOS, macOS, and Windows apps with a single .NET MAUI codebase — faster delivery, lower cost.",
  canonical: "/blog/dotnet-maui-cross-platform-mobile-apps",
  author: "Moltech Solutions Inc.",
  publisher: "Moltech Solutions Inc.",
  imageUrl: `${BASE_URL}/images/meta/dotnet-maui-cross-platform-mobile-apps-og.webp`,
  twitterImage: `${BASE_URL}/images/meta/dotnet-maui-cross-platform-mobile-apps-og.webp`,
  keywords: [
    ".NET MAUI cross-platform apps",
    "build mobile apps with .NET MAUI",
    ".NET MAUI Android iOS Windows macOS",
    "native apps with single codebase"
  ],
  publishedTime: "2025-09-07",
  section: "Development",
  tags: [
    ".NET MAUI",
    "Cross-Platform Mobile Apps",
    "Android",
    "iOS",
    "Windows",
    "macOS"
  ]
},


  heroData: {
    title: ".NET MAUI — Build Cross-Platform Mobile Apps",
    highlight: "Building Cross-Platform Mobile Apps the Smarter Way",
    description:
      "With .NET MAUI, teams can ship Android, iOS, macOS, and Windows apps from a single C# codebase. This playbook explains MAUI’s architecture, standout features, comparisons with Flutter & React Native, practical steps, and real-world use cases.",
    author: "Moltech Solutions Inc.",
    date: "Sep 17, 2025",
    stats: [
      {
        icon: "mdi:cellphone",
        title: "$120B+ Mobile Spend",
        desc: "Global consumer spending on mobile apps exceeded $120B in 2021.",
      },
      {
        icon: "mdi:rocket-launch",
        title: "50% Faster Releases",
        desc: "Teams report shipping cross-platform apps in half the time with MAUI.",
      },
      {
        icon: "mdi:microsoft-visual-studio",
        title: "One C# Codebase",
        desc: "Target Android, iOS, macOS, and Windows without duplicating effort.",
      },
    ],
  },

  tableOfContents: [
   
    { id: "key-features", title: "Key Features of .NET MAUI", level: 1 },

    {
      id: "comparison",
      title: ".NET MAUI vs Flutter vs React Native",
      level: 1,
    },
    {
      id: "use-cases",
      title: "Real-World Examples & Use Cases",
      level: 1,
    },
    {
      id: "pitfalls-testing",
      title: "Pitfalls, Testing & Maintenance",
      level: 1,
    },
    { id: "conclusion", title: "Conclusion", level: 1 },
  ],
  tags: [
    ".NET MAUI",
    "Cross-Platform Development",
    "Mobile Apps",
    "iOS",
    "Android",
    "macOS",
    "Windows",
    "Xamarin.Forms",
    "C#",
    "XAML",
    "Hot Reload",
    "Flutter",
    "React Native",
    "Enterprise Apps",
    "App Development",
    "Hybrid Apps",
    "App Modernization",
  ],

  faqData: {
    faqTitle: "FAQs about .NET MAUI",
    faqItems: [
      {
        title: "What platforms does .NET MAUI support?",
        content:
          ".NET MAUI lets you build apps for Android, iOS, macOS, and Windows using a single shared codebase.",
      },
      {
        title: "Do I need a Mac to build iOS apps with MAUI?",
        content:
          "Yes. iOS apps still require Xcode and macOS. Windows developers can connect to a Mac build host for compilation and signing.",
      },
      {
        title: "Is MAUI a replacement for Xamarin.Forms?",
        content:
          "Exactly. .NET MAUI is the official successor, with modern architecture, a single project structure, and better performance.",
      },
      {
        title: "Can I reuse server-side .NET code?",
        content:
          "Absolutely. You can reuse business logic, DTOs, and services from your .NET backend to ensure consistency across apps.",
      },
      {
        title: "How does MAUI affect time-to-market?",
        content:
          "By consolidating platforms into one project and enabling Hot Reload, teams ship faster, with fewer engineers and shorter release cycles.",
      },
    ],
  },
};
