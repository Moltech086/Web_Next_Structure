import { BASE_URL } from "@/lib/utils/baseUrl";

export const blogConfig = {
  slug: "from-monolith-to-microservices-dotnet9-playbook",

  // Meta configuration
  metaConfig: {
    title:
      "From Monolith to Microservices in .NET 9: A Step-by-Step Playbook ",
    description:
      "Struggling with slow deployments and monolithic pain? Discover how .NET 9 enables blazing-fast, cloud-native microservices with Native AOT, PGO, and Aspire. Learn the 7-step migration roadmap to modernize your .NET architecture for better agility and performance.",
    canonical: "/blog/from-monolith-to-microservices-dotnet9-playbook",
    author: "Moltech Solutions Inc.",
    publisher: "Moltech Solutions Inc.",
    imageUrl: `${BASE_URL}/images/meta/from-monolith-to-microservices-dotnet-9-step-by-step-playbook.webp`,
    twitterImage: `${BASE_URL}/images/meta/from-monolith-to-microservices-dotnet-9-step-by-step-playbook.webp`,
    keywords: [
      ".NET 9 microservices",
      "monolith to microservices",
      ".NET modernization",
      "cloud-native .NET",
      "Native AOT",
      "Dynamic PGO",
      "microservice architecture",
      ".NET Aspire",
      "migrate .NET monolith",
      "performance benchmarks",
    ],
    section: "Blog",
    publishedTime: "2025-05-26T00:00:00+00:00",
  },

  heroData: {
    title: "From Monolith to Microservices in .NET 9",
    highlight: "A Step-by-Step Playbook for Modernization",
    description:
      "Is your .NET monolith slowing feature delivery and team productivity? This playbook shows how .NET 9 enables a smooth, low-risk transition to microservices—improving scalability, deployments, and team autonomy.",
    author: "Moltech Solutions Inc.",
    date: "Aug 07, 2025",
    stats: [
      {
        icon: "mdi:timer-cog-outline",
        title: "60% Faster Build Times",
        desc: "Split services build independently, eliminating long CI/CD bottlenecks.",
      },
      {
        icon: "mdi:bug-outline",
        title: "65% Fewer Team Blockers",
        desc: "Scoped deployments mean one team’s issue doesn’t halt the whole system.",
      },
      {
        icon: "mdi:lan-connect",
        title: "70% Better Scalability",
        desc: ".NET 9 improves inter-service communication for future-proof growth.",
      },
    ],
  },

  tableOfContents: [
   
    {
      id: "whats-new-dotnet9",
      title: "What’s New in .NET 9 That Unlocks Microservices",
      level: 1,
    },
    {
      id: "monolith-constraints",
      title: "Deep Dive: The Technical Constraints of Monoliths",
      level: 1,
    },
    {
      id: "migration-blueprint",
      title: "7 Steps Migration Blueprint: .NET 9 Edition",
      level: 1,
    },
    {
      id: "performance-vs-cost",
      title:
        "Performance & Cost Benchmarks: Monolith vs. Microservices with .NET 9",
      level: 1,
    },
    {
      id: "mini-case-study",
      title: "Mini Case Study: Logistics Firm Results",
      level: 1,
    },
    {
      id: "moltech-support",
      title: "How Moltech Solutions Inc. Accelerates Your Journey",
      level: 1,
    },
    { id: "conclusion", title: "Conclusion", level: 1 },
  ],

  tags: [
    "Modernizing .NET",
    ".NET 9",
    "Microservices Architecture",
    "Monolith to Microservices",
    "Cloud-Native Development",
    "Native AOT",
    "Domain-Driven Design (DDD)",
    "Scalable .NET Systems",
    "Distributed Systems",
    "DevOps Automation",
    "CI/CD with GitHub Actions",
    "Kubernetes Deployments",
    "Minimal APIs",
    "API Gateway (YARP)",
    "OpenTelemetry",
    "Canary Deployments",
    "Service Observability",
    "Performance Optimization",
    "Enterprise Software",
    "Azure Container Apps",
  ],

  codeSnippets: [
    {
      title: "Minimal API Example",
      language: "csharp",
      code: `var builder = WebApplication.CreateSlimBuilder(args);
builder.Services.AddOpenApi(); // Native support

var app = builder.Build();

app.MapGet("/health", () => Results.Ok("Healthy"))
    .WithName("HealthCheck")
    .WithOpenApi(); // Annotates endpoint

app.Run();`,
    },
    {
      title: "NDepend and Build Tools",
      language: "bash",
      code: `dotnet tool install --global NDepend.Tool
dotnet build-server shutdown && dotnet sln list`,
    },
    {
      title: "Native AOT Publish Options",
      language: "xml",
      code: `<PublishAot>true</PublishAot>
<PublishTrimmed>true</PublishTrimmed>
<InvariantGlobalization>true</InvariantGlobalization>`,
    },
    {
      title: "GitHub Actions Build Matrix",
      language: "yaml",
      code: `jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest]`,
    },
  ],
};
