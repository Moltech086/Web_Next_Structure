import { BASE_URL } from "@/lib/utils/baseUrl";

export const blogConfig = {
  slug: "ollama-dotnet-react-local-ai-integration",

  metaConfig: {
    title:
      "Connecting Ollama with .NET & React | AI Solutions & Software Services",
    description:
      "Build full-stack local AI apps with Ollama API integration using .NET and React. Secure, scalable solutions for enterprises, startups, and SMBs.",
    canonical: "/blog/ollama-dotnet-react-local-ai-integration",
    author: "Moltech Solutions Inc.",
    publisher: "Moltech Solutions Inc.",
    imageUrl: `${BASE_URL}/images/meta/ollama-dotnet-react-local-ai-integration-og.webp`,
    twitterImage: `${BASE_URL}/images/meta/ollama-dotnet-react-local-ai-integration-og.webp`,
    keywords: [
      "Ollama",
      ".NET",
      "React",
      "Local AI",
      "Full-stack AI apps",
      "AI integration",
      "On-prem AI",
      "AI streaming",
      "Hybrid AI solutions",
      "Moltech AI services",
    ],
    section: "AI Solutions & Full-Stack Integrations",
  },

  heroData: {
    title: "Connecting Ollama with .NET & React",
    highlight:
      "  Build Full-Stack Local AI Apps:Secure, Private, and Scalable Full-Stack AI Architecture",
    description:
      "Learn how to build modern local AI applications using Ollama with a .NET backend and React frontend. Stream real-time model responses, maintain data privacy, and eliminate cloud dependencies.",
    author: "Moltech Solutions Inc.",
    date: "Oct 13th, 2025",
    stats: [
      {
        icon: "mdi:api",
        title: "End-to-End Integration",
        desc: "Seamlessly connect Ollama’s local inference with .NET APIs and React UIs.",
      },
      {
        icon: "mdi:lock-check",
        title: "On-Prem Data Security",
        desc: "Keep all sensitive data on local infrastructure without cloud exposure.",
      },
      {
        icon: "mdi:lightning-bolt",
        title: "Real-Time AI Streaming",
        desc: "Deliver live token-by-token responses with low-latency interaction.",
      },
    ],
  },

  tableOfContents: [
    { id: "what-is-ai-app", title: "What Is an AI App, Really?", level: 1 },
    {
      id: "why-choose-stack",
      title: "Why Choose Ollama + .NET + React ?",
      level: 1,
    },
    { id: "architecture-overview", title: "Architecture Overview", level: 1 },
    {
      id: "example-app",
      title: "Example App — Local Meeting Notes Summarizer",
      level: 1,
    },
    {
      id: "install-ollama",
      title: "Step 1 — Install and Run Ollama",
      level: 1,
    },
    {
      id: "create-backend",
      title: "Step 2 — Create the .NET AI Backend",
      level: 1,
    },
    {
      id: "build-frontend",
      title: "Step 3 — Build the React Frontend",
      level: 1,
    },
    { id: "testing", title: "Testing the Flow", level: 1 },
    {
      id: "frontend-tips",
      title: "React AI Frontend Tips for Better UX",
      level: 1,
    },
    { id: "model-selection", title: "Model Selection Notes", level: 1 },
    {
      id: "common-pitfalls",
      title: "Common Pitfalls & How to Avoid Them",
      level: 1,
    },
    { id: "conclusion", title: "Conclusion", level: 1 },
  ],

  tags: [
    "Ollama",
    ".NET",
    "React",
    "Local AI",
    "Full-stack AI",
    "On-prem AI",
    "AI streaming",
    "Hybrid AI integration",
    "Moltech AI services",
  ],

  faqData: {
    faqTitle: "Connecting Ollama with .NET & React — Common Questions",
    faqItems: [
      {
        title:
          "What are the cost benefits of using Ollama with .NET and React for AI apps?",
        content:
          "Using Ollama for local AI inference eliminates per-token cloud fees, offering predictable fixed costs and reducing expenses for heavy or internal workloads compared to cloud-based solutions.",
      },
      {
        title:
          "How does this stack ensure data privacy and security for sensitive projects?",
        content:
          "Ollama runs models locally, keeping all data on-premises or on-device without external calls. The .NET backend adds an abstraction layer for authentication, authorization, and auditing to maintain enterprise-grade security.",
      },
      {
        title:
          "Can the solution scale to support enterprise workloads and multiple users?",
        content:
          "Yes, .NET’s asynchronous I/O and modular architecture support high throughput and scaling. Ollama can be deployed on GPU servers or containers and scaled horizontally for concurrent sessions.",
      },
      {
        title:
          "How quickly can my team start building AI apps using this local inference stack?",
        content:
          "Developers can rapidly build and test full-stack AI apps locally without cloud setup or API keys. The blog’s step-by-step guide and minimal API examples enable quick prototyping and iteration.",
      },
      {
        title:
          "What level of customization and extensibility does this AI architecture offer?",
        content:
          "The architecture is modular, with clearly defined API contracts and an interface-first approach allowing you to swap inference providers or extend features like retrieval, authentication, and multi-tenant support easily.",
      },
      {
        title:
          "How does streaming token responses improve the user experience?",
        content:
          "Streaming allows tokens to appear in the UI as they are generated, reducing perceived latency and making AI-powered chat interfaces more responsive and natural for users.",
      },
      {
        title:
          "Is this local AI approach suitable for startups or only large enterprises?",
        content:
          "It suits startups, SMBs, and enterprises alike, especially when data privacy, offline capability, cost control, and rapid iteration are priorities. It also avoids vendor lock-in for growing companies.",
      },
      {
        title:
          "What support do you offer for integrating AI apps with existing IT infrastructure?",
        content:
          "Our services include custom software development, AI solutions consulting, and technology modernization to ensure seamless integration, scalable architecture, and ongoing support tailored to your business needs.",
      },
    ],
  },
};
