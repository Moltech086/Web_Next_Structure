import { BASE_URL } from "@/lib/utils/baseUrl";

export const blogConfig = {
  slug: "tech-stack-selection-guide",

  metaConfig: {
    title: "Tech Stack Selection Guide | Custom Software & IT Consulting",
    description:
      "Optimize your tech stack choice with expert IT consulting, custom software development, and scalable solutions for startups and enterprises.",
    canonical: "/blog/tech-stack-selection-guide",
    author: "Moltech Solutions Inc.",
    publisher: "Moltech Solutions Inc.",
    imageUrl: `${BASE_URL}/images/meta/tech-stack-selection-guide-og.webp`,
    twitterImage: `${BASE_URL}/images/meta/tech-stack-selection-guide-og.webp`,
    keywords: [
      "Tech Stack Selection",
      "Software Architecture",
      "IT Consulting",
      "Custom Software Development",
      "Scalable Solutions",
      "Startup Technology",
      "Enterprise Software",
      "Moltech Solutions",
      "Technology Assessment",
      "Backend Architecture",
    ],
    section: "Software Consulting & Architecture Design",
  },

  heroData: {
    title: "Tech Stack Selection Guide",
    highlight:
      "Optimize, Scale, and Innovate with the Right Technology Choices",
    description:
      "Learn how to choose the best frontend, backend, and database technologies for your next project. This guide helps startups, CTOs, and enterprises align tech stack decisions with business goals, scalability, and long-term cost efficiency.",
    author: "Moltech Solutions Inc.",
    date: "Oct 17th, 2025",
    stats: [
      {
        icon: "mdi:layers-triple-outline",
        title: "Full-Stack Evaluation",
        desc: "Explore proven frontend, backend, and database combinations for modern applications.",
      },
      {
        icon: "mdi:chart-line",
        title: "Scalability & Cost Insights",
        desc: "Understand how tech stack choices impact long-term scalability and total cost of ownership.",
      },
      {
        icon: "mdi:lightbulb-on-outline",
        title: "Expert Architecture Guidance",
        desc: "Leverage Moltech’s consulting expertise to align technology with your business strategy.",
      },
    ],
  },

  tableOfContents: [
    {
      id: "what-is-tech-stack",
      title: "What Is a Tech Stack and Why It Matters ?",
      level: 1,
    },
    {
      id: "selection-criteria",
      title: "Tech Stack Selection Criteria",
      level: 1,
    },
    {
      id: "frontend-frameworks",
      title: "Frontend Frameworks Comparison",
      level: 1,
    },
    {
      id: "backend-tradeoffs",
      title: ".NET vs Node.js — Backend Trade-offs",
      level: 1,
    },
    {
      id: "architecture-patterns",
      title: "Backend Architecture Patterns & Scalability",
      level: 1,
    },
    {
      id: "common-combinations",
      title: "Common Tech Stack Combinations That Work",
      level: 1,
    },
    { id: "designing-for-scale", title: "Designing for Scalability", level: 1 },
    { id: "moltech-role", title: "Where Moltech Fits In ?", level: 1 },
    { id: "conclusion", title: "Conclusion", level: 1 },
  ],

  tags: [
    "Tech Stack Selection",
    "Custom Software Development",
    "IT Consulting",
    "Software Architecture",
    "Backend Engineering",
    "Frontend Frameworks",
    "Scalable Systems",
    "Moltech Consulting",
    "Enterprise Software",
  ],

  faqData: {
    faqTitle: "Tech Stack Selection — Common Questions",
    faqItems: [
      {
        title:
          "How much does choosing the right tech stack impact project cost?",
        content:
          "Selecting the right tech stack affects licensing, development speed, maintenance, and hiring costs. A well-matched stack reduces long-term expenses by improving efficiency and simplifying support.",
      },
      {
        title: "Can Moltech help with ensuring scalability in my tech stack?",
        content:
          "Yes, Moltech specializes in designing scalable backend architectures, incorporating best practices like modular monoliths, caching, asynchronous workflows, and cloud-native deployments to ensure your stack grows with your business.",
      },
      {
        title:
          "What if my current team lacks expertise in recommended technologies?",
        content:
          "Moltech provides IT consulting and custom development services to bridge skill gaps, offers training recommendations, and can help recruit or augment your team with experts experienced in your chosen stack.",
      },
      {
        title:
          "How long does it take to decide and implement a tech stack for MVP development?",
        content:
          "With focused prototyping and validation, choosing and starting an MVP tech stack can take a few weeks. Moltech accelerates this process by quickly assessing options and building robust prototypes aligned with your goals.",
      },
      {
        title: "How do I avoid common pitfalls when selecting a tech stack?",
        content:
          "Avoid chasing trends, premature complexity, ignoring DevOps and security early, and choosing unsupported technologies. Instead, focus on proven frameworks aligned with your business needs and team capabilities.",
      },
      {
        title:
          "What custom software services does Moltech offer related to tech stack selection?",
        content:
          "Moltech offers comprehensive services, including technology assessments, architecture design, full-stack development, cloud and DevOps engineering, AI integration, and digital transformation to support your stack decisions throughout the project lifecycle.",
      },
      {
        title:
          "Is it better to use a single language across front and back end?",
        content:
          "Using a unified language like JavaScript/TypeScript offers benefits in developer productivity and code reuse, especially with Node.js and React or Angular. However, the best choice depends on your project requirements and team expertise.",
      },
      {
        title:
          "How does Moltech ensure security and compliance in stack choices?",
        content:
          "Moltech integrates security best practices from day one, including identity management, audit logging, secrets management, and regulatory compliance, particularly for finance and healthcare sectors.",
      },
    ],
  },
};
