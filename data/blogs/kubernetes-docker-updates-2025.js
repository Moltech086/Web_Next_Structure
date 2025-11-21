import { BASE_URL } from "@/lib/utils/baseUrl";

export const blogConfig = {
  slug: "kubernetes-docker-updates-2025",

  metaConfig: {
    title: "Kubernetes & Docker Updates 2025: Cloud-Native Essentials",
    
    description:
      "Kubernetes & Docker updates 2025: new AI tools, GPU scheduling, and cloud-native workflows to cut costs, boost reliability, and speed up innovation.",
      
    canonical: "/blog/kubernetes-docker-updates-2025",
    author: "Moltech Solutions Inc.",
    publisher: "Moltech Solutions Inc.",
    imageUrl: `${BASE_URL}/images/meta/kubernetes-docker-2025-og.webp`,
    twitterImage: `${BASE_URL}/images/meta/kubernetes-docker-2025-og.webp`,
    keywords: [
      "Kubernetes and Docker updates 2025",
      "Docker AI tools 2025",
      "Kubernetes AI workloads 2025",
      "container orchestration updates 2025",
      "cloud-native development 2025",
    ],
    section: "Cloud-Native & DevOps",
  },

  heroData: {
    title: "Kubernetes & Docker Updates 2025",
    highlight: "Cloud-Native Essentials for AI and Modern Workflows",
    description:
      "Explore the biggest 2025 updates in Kubernetes and Docker — from GPU scheduling and stronger security to AI-ready developer tools that cut costs and speed up innovation.",
    author: "Moltech Solutions Inc.",
    date: "Sep 29th, 2025",
    stats: [
      {
        icon: "mdi:chip",
        title: "AI-Ready Workloads",
        desc: "GPU/TPU scheduling and offload tools make AI cheaper and easier to scale. (Provided Research)",
      },
      {
        icon: "mdi:shield-check",
        title: "Stronger Security",
        desc: "Isolation, compliance features, and smarter configs reduce risks. (Provided Research)",
      },
      {
        icon: "mdi:rocket-launch",
        title: "Faster Innovation",
        desc: "Docker AI tooling and Kubernetes automation shorten delivery cycles. (Provided Research)",
      },
    ],
  },

  tableOfContents: [
    { id: "introduction", title: "Kubernetes and Docker Updates 2025: New Features for Cloud-Native Devs", level: 1 },
    { id: "docker-basics", title: "What is Docker?", level: 1 },
    { id: "kubernetes-basics", title: "What is Kubernetes?", level: 1 },
    { id: "kubernetes-2025", title: "What’s New in Kubernetes (2025) ? ", level: 1 },
    { id: "docker-2025", title: "What’s New in Docker (2025) ?", level: 1 },
    { id: "comparison", title: "Kubernetes vs Docker 2025: Side-by-Side", level: 1 },
    { id: "fit-for-devs", title: "Where Kubernetes and Docker Fit Best ?", level: 1 },
    { id: "together", title: "Ways to Use Docker and Kubernetes Together", level: 1 },
    { id: "tips-2025", title: "Tips for 2025 (Summary)", level: 1 },
    { id: "stakeholder-view", title: "Stakeholder View: What This Means for You", level: 1 },
    { id: "conclusion", title: "Conclusion & Quick Takeaways", level: 1 },
    { id: "faqs", title: "FAQ", level: 1 },
  ],

  tags: [
    "Kubernetes and Docker updates 2025",
    "Docker AI tools 2025",
    "Kubernetes AI workloads 2025",
    "container orchestration updates 2025",
    "cloud-native development 2025",
    "DevOps",
    "Hybrid cloud",
    "GPU scheduling",
    "AI workloads",
    "Microservices orchestration",
    "Enterprise cloud",
    "Developer productivity",
  ],

  faqData: {
    faqTitle: "Kubernetes & Docker 2025: Common Questions",
    faqItems: [
      {
        title: "Is Kubernetes replacing Docker in 2025?",
        content:
          "No. They solve different problems — Docker is for building and testing apps, while Kubernetes manages apps at scale. Most teams use both together. (Provided Research)",
      },
      {
        title: "Do I need Kubernetes if I’m a startup?",
        content:
          "Not always. Start with Docker to build quickly. Move to Kubernetes when your app grows and you need scale, reliability, or AI workloads. (Provided Research)",
      },
      {
        title: "What is Docker Offload, and why does it matter?",
        content:
          "Docker Offload lets developers run heavy AI models on cloud GPUs directly from their laptop — saving time and cutting cloud costs. (Provided Research)",
      },
      {
        title: "What are the risks of moving to Kubernetes 2025?",
        content:
          "Some features like nftables proxy may require testing to avoid breaking older setups. Always start with pilots and staged rollouts. (Provided Research)",
      },
      {
        title: "What’s the best approach: Kubernetes, Docker, or both?",
        content:
          "Most teams benefit from a hybrid model: Docker in the development loop, Kubernetes in production. This balances speed with stability. (Provided Research)",
      },
    ],
  },
};
