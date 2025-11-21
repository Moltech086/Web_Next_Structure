import { AppIcons } from "@/data/appIcons";
import { BASE_URL } from "@/lib/utils/baseUrl";

export const blogConfig = {
  slug: "cicd-devsecops-2025-new-practices-tools",

  // Meta configuration
  metaConfig: {
    title:
      "CI/CD DevSecOps 2025: New Practices & Tools .",
    description:
      "Next-gen CI/CD DevSecOps 2025: AI, GitOps, SBOM automation, and platform engineering—practical steps to secure faster delivery.",
    canonical: "/blog/cicd-devsecops-2025-new-practices-tools",
    author: "Moltech Solutions Inc.",
    publisher: "Moltech Solutions Inc.",
    imageUrl: `${BASE_URL}/images/meta/cicd-devsecops-og.webp`,
    twitterImage: `${BASE_URL}/images/meta/cicd-devsecops-og.webp`,
    keywords: [
      "CI/CD DevSecOps 2025",
      "AI-driven CI/CD",
      "GitOps",
      "SBOM automation",
      "DevSecOps pipelines",
      "platform engineering",
    ],
    publishedTime: "2025-09-19",
    section: "DevOps",
    tags: [
      "CI/CD",
      "DevSecOps",
      "AI in DevOps",
      "GitOps",
      "SBOM",
      "Platform Engineering",
    ],
  },

  heroData: {
    title: "CI/CD DevSecOps 2025: New Practices & Tools",
    highlight:
      "Secure, Faster Delivery with AI, GitOps, and Compliance-as-Code",
    description:
      "Next-gen CI/CD DevSecOps 2025: AI, GitOps, SBOM automation, and platform engineering—practical steps to secure faster delivery.",
    author: "Moltech Solutions Inc.",
    date: "Sep 19th, 2025",
    stats: [
      {
        icon: "mdi:shield-check",
        title: "50%+ Faster MTTR",
        desc: "Teams cut remediation time by integrating security checks into CI/CD.",
      },
      {
        icon: "mdi:git",
        title: "GitOps Adoption",
        desc: "Declarative deployments with drift auto-reconciliation across environments.",
      },
      {
        icon: "mdi:clipboard-text",
        title: "Compliance Ready",
        desc: "SBOM & VEX automation reduce audit friction and vendor risk.",
      },
    ],
  },

  tableOfContents: [
    {
      id: "introduction",
      title: "CI/CD Evolution in 2025: New Practices for DevSecOps Teams",
      level: 1,
    },
    {
      id: "key-trends",
      title: "Key Trends Shaping CI/CD & DevSecOps in 2025",
      level: 1,
    },
    { id: "ai-testing", title: "1. Testing and deploying using AI", level: 2 },
    {
      id: "gitops-iac",
      title: "2. GitOps + Infrastructure-as-Code (IaC) as the Control Plane",
      level: 2,
    },
    {
      id: "sbom-vex",
      title: "3. SBOM, VEX Automation, and Compliance-as-Code",
      level: 2,
    },
    {
      id: "api-security",
      title: "4. Continuous API Security and Runtime Protection",
      level: 2,
    },
    {
      id: "platform-engineering",
      title: "5. Platform Engineering and the Rise of EveryOps",
      level: 2,
    },
    {
      id: "tools",
      title: "Top CI/CD & GitOps Tools for DevSecOps in 2025",
      level: 1,
    },
    { id: "benefits", title: "Benefits Over Traditional CI/CD", level: 1 },
    {
      id: "comparison",
      title: "Traditional CI/CD vs Modern CI/CD DevSecOps 2025",
      level: 1,
    },
    {
      id: "pitfalls",
      title: "“Common Pitfalls in Modern CI/CD — and How to Avoid Them”",
      level: 1,
    },
    { id: "use-case", title: "Use Case: Cloud-Native Microservices", level: 1 },
    { id: "conclusion", title: "Conclusion", level: 1 },
    { id: "faqs", title: "FAQs", level: 1 },
  ],

  tags: [
    "DevSecOps",
    "CI/CD",
    "GitOps",
    "Infrastructure-as-Code",
    "SBOM",
    "VEX",
    "API Security",
    "Platform Engineering",
    "ArgoCD",
    "Jenkins",
    "GitHub Actions",
    "GitLab CI/CD",
    "Azure DevOps",
    "Kubernetes",
    "Compliance-as-Code",
  ],

  faqData: {
    faqTitle: "CI/CD DevSecOps 2025: Common Questions",
    faqItems: [
      {
        title: "How do I decide between GitHub Actions and GitLab CI/CD?",
        content:
          "If your code is already on GitHub and you want quick adoption, GitHub Actions is a natural fit. If you need deeper, integrated security and compliance features, GitLab CI/CD is stronger.",
      },
      {
        title: "Where should I begin with AI in CI/CD?",
        content:
          "Start small. A good entry point is anomaly detection in test logs or prioritizing vulnerability findings. Expand once you trust the results.",
      },
      {
        title: "Are SBOMs required for all software?",
        content:
          "Not everywhere yet, but they’re quickly becoming a standard in regulated industries and enterprise contracts. Better to start generating them now than be caught unprepared later.",
      },
      {
        title: "How can GitOps help with audits?",
        content:
          "GitOps provides a clear, versioned history of every change. Auditors can see exactly what changed, when, and who approved it — with no extra paperwork.",
      },
      {
        title: "What’s the fastest way to prove ROI from DevSecOps changes?",
        content:
          "Run a pilot on one service. Track fewer emergency fixes, shorter remediation times, and faster releases. Those quick wins make the business case for scaling further.",
      },
    ],
  },
};
