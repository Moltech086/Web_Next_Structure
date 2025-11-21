import { AppIcons } from "@/data/appIcons";
import { BASE_URL } from "@/lib/utils/baseUrl";

export const blogConfig = {
  slug: "azure-vs-aws-vs-gcp-2025",

  // Meta configuration
metaConfig: {
  title: "Azure vs AWS vs GCP 2025 — Which Cloud Fits Your Business ",
  description:
    "Compare Azure, AWS, and GCP in 2025 — market share, AI readiness, pricing, and a decision framework to pick the best cloud for your business.",
  canonical: "/blog/azure-vs-aws-vs-gcp-2025-which-cloud-fits-your-business",
  author: "Moltech Solutions Inc.",
  publisher: "Moltech Solutions Inc.",
  imageUrl: `${BASE_URL}/images/meta/cloud-comparison-2025.webp`,
  twitterImage: `${BASE_URL}/images/meta/cloud-comparison-2025.webp`,
  keywords: [
    "Azure vs AWS vs GCP 2025",
    "cloud comparison 2025",
    "best cloud platform for AI 2025",
    "hybrid cloud strategy Azure"
  ],
  section: "Cloud Computing",
  tags: [
    "Azure",
    "AWS",
    "GCP",
    "Cloud Comparison",
    "Hybrid Cloud",
    "AI in Cloud"
  ],
  publishedTime: "2025-09-02",
  modifiedTime: "2025-09-02"
},

  heroData: {
    title: "Azure vs AWS vs GCP in 2025: Which Cloud Fits Your Business?",
    highlight:
      "A Practical Playbook to Compare Market Share, Features, AI, Security, and Pricing",
    description:
      "Choosing the right cloud provider in 2025 means balancing performance, AI capabilities, security, and ROI. This guide compares AWS, Azure, and GCP with real-world insights, feature breakdowns, and decision checklists.",
    author: "Moltech Solutions Inc.",
    date: "Sep 9, 2025",
    stats: [
      {
        icon: "mdi:chart-line",
        title: "$99B Q2 Cloud Spend",
        desc: "Global infrastructure spend grew 25% YoY, driven by AI workloads.",
      },
      {
        icon: "mdi:robot-excited",
        title: "180% GenAI Surge",
        desc: "Generative AI demand skyrocketed, reshaping cloud priorities.",
      },
      {
        icon: "mdi:earth",
        title: "60%+ Market Share",
        desc: "AWS, Azure, and GCP dominate global cloud infrastructure.",
      },
    ],
  },

  tableOfContents: [
    
    { id: "market-trends", title: "Market Share and 2025 Trends", level: 1 },
    { id: "aws-dominance", title: "AWS: Scale and Ecosystem", level: 1 },
    { id: "feature-comparison", title: "Feature Comparison", level: 1 },
    { id: "kubernetes", title: "Kubernetes (K8s)", level: 1 },
    { id: "serverless", title: "Serverless Computing", level: 1 },
    { id: "ai-ml", title: "AI, ML, and Strategic Partnerships", level: 1 },
    {
      id: "security-compliance",
      title: "Security, Compliance, and Industry Fit",
      level: 1,
    },
    {
      id: "cost-optimization",
      title: "Cost, Billing Models, and Optimization",
      level: 1,
    },
    { id: "conclusion", title: "Conclusion", level: 1 },
  ],

  tags: [
    "Cloud 2025",
    "AWS",
    "Azure",
    "Google Cloud",
    "Cloud Migration",
    "Hybrid Cloud",
    "AI and Machine Learning",
    "Cloud Security",
    "Cloud Pricing",
    "Cloud Strategy",
    "Market Trends",
    "Enterprise IT",
    "Serverless",
    "Kubernetes",
    "Compliance",
  ],

  faqData: {
    faqTitle: "Cloud Migration and Strategy 2025",
    faqItems: [
      {
        title: "Which provider is best for AI workloads in 2025?",
        content:
          "GCP leads in analytics and AI tooling, while Azure and AWS provide strong integrations. Choose based on your model lifecycle and deployment needs.",
      },
      {
        title: "Is Azure better for hybrid cloud?",
        content:
          "Yes, Azure’s hybrid tools and Microsoft integration make it ideal for enterprise hybrid strategies.",
      },
      {
        title: "Will AWS cost more than Azure or GCP?",
        content:
          "Not always. GCP discounts steady workloads automatically, while AWS and Azure offer reserved and spot options for savings.",
      },
      {
        title: "How do I avoid vendor lock-in?",
        content:
          "Use containers, open formats like ONNX, and infrastructure-as-code for portability.",
      },
      {
        title: "How long does a typical migration take?",
        content:
          "Small migrations can run in 4–12 weeks; enterprise-wide migrations may take 3–12 months, depending on complexity.",
      },
    ],
  },
};
