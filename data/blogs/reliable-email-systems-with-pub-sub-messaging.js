import { BASE_URL } from "@/lib/utils/baseUrl";

export const blogConfig = {
  slug: "reliable-email-systems-with-pub-sub-messaging",

  // Add meta configuration
  metaConfig: {
    title:
      "Reliable Email Systems with Pub/Sub Messaging | Scalable Gmail Integration & Best Practices",
    description:
      "Discover how Moltech Solutions delivers advanced B2B platforms—from chemical procurement and document automation to AI-driven order processing. Explore scalable solutions powered by Pub/Sub systems, workflow orchestration, and secure cloud integrations.",
    canonical: "/blog/reliable-email-systems-with-pub-sub-messaging",
    author: "Moltech Solutions Inc.",
    publisher: "Moltech Solutions Inc.",
    imageUrl: `${BASE_URL}/images/meta/reliable-email-systems-with-pub-sub-messaging.webp`,
    twitterImage: `${BASE_URL}/images/meta/reliable-email-systems-with-pub-sub-messaging.webp`,
    keywords: [
      "B2B automation",
      "order processing",
      "document management",
      "chemical procurement",
      "Pub/Sub email systems",
      "ERP integration",
      "RFQ workflows",
      "real-time tracking",
      "vendor management",
      "cloud SaaS",
      "RPA middleware",
      "data ingestion",
      "intelligent document processing",
      "scalable web platforms",
    ],
    section: "Case Study",
    publishedTime: "2025-05-26T00:00:00+00:00",
  },

  heroData: {
    title: "Building Reliable Email Systems",
    highlight: "Using Pub/Sub Messaging",
    description:
      "In today’s digital landscape, efficient communication between software systems is crucial. This post explores how Pub/Sub messaging enables scalable, decoupled, and fault-tolerant email systems.",
    author: "Moltech Solutions Inc.",
    date: "Jul 25, 2025",
    stats: [
      {
        icon: "mdi:email-fast-outline",
        title: "90% Improved Reliability",
        desc: "Pub/Sub ensures emails are delivered even during spikes or partial failures.",
      },
      {
        icon: "mdi:layers-triple-outline",
        title: "80% Better Scalability",
        desc: "Decoupling services allows for independent scaling of producers and consumers.",
      },
      {
        icon: "mdi:chart-box-outline",
        title: "65% Faster Throughput",
        desc: "Message queues prevent bottlenecks and improve async processing speeds.",
      },
    ],
  },

  tableOfContents: [
    { id: "what-is-pub-sub", title: "What Is Pub/Sub?", level: 1 },
    {
      id: "email-integration-challenge",
      title: "The Email Integration Challenge",
      level: 1,
    },
    {
      id: "implementing-pub-sub",
      title: "Implementing Pub/Sub for Email Integration",
      level: 1,
    },
    {
      id: "gmail-integration-pub-sub",
      title: "Gmail Integration Using Pub/Sub",
      level: 1,
    },
    {
      id: "create-service-account",
      title: "Create Service Account and Credentials",
      level: 1,
    },
    {
      id: "create-pub-sub-topic",
      title: "Create a Pub/Sub Topic in Google Cloud",
      level: 1,
    },
    {
      id: "iam-role-permissions",
      title: "IAM Role Permissions for Pub/Sub",
      level: 1,
    },
    {
      id: "production-best-practices",
      title:
        "When moving your Gmail Pub/Sub integration to production, follow these best practices",
      level: 1,
    },
    {
      id: "common-challenges-solutions",
      title: "Common Challenges and Solutions",
      level: 1,
    },
    { id: "conclusion", title: "Conclusion", level: 1 },
  ],

  tags: [
    "Pub/Sub Messaging",
    "Email Integration",
    "Scalable Architecture",
    "Decoupled Systems",
    "Cloud Pub/Sub",
    "Gmail API",
    "Async Communication",
    "Event-Driven Architecture",
    "Reliable Email Systems",
    "Google Cloud Messaging",
  ],
};
