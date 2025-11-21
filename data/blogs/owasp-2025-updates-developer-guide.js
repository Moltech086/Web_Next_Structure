import { BASE_URL } from "@/lib/utils/baseUrl";


export const blogConfig = {
  slug: "owasp-2025-updates-developer-guide",

  // Meta configuration
metaConfig: {
  title: "OWASP 2025 updates — What Developers Must Know ",
  description: "OWASP 2025 updates: practical guidance for developers on Top Ten changes, SAMM 3.0, API security, AI risks, and SDLC integration.",
  canonical: "/blog/owasp-2025-updates-developer-guide",
  author: "Moltech Solutions Inc.",
  publisher: "Moltech Solutions Inc.",
  imageUrl: `${BASE_URL}/images/meta/future-web-security-og.webp`,
  twitterImage: `${BASE_URL}/images/meta/future-web-security-og.webp`,
  keywords: [
    "OWASP 2025 updates",
    "OWASP Top 10 2025",
    "secure API development 2025",
    "SAMM 3.0 integration",
    "web security",
    "cybersecurity",
    "API security",
    "DevSecOps",
    "compliance",
    "security testing"
  ],
  section: "Security",
  tags: [
    "OWASP 2025 updates",
    "Web Security",
    "API Security",
    "DevSecOps",
    "Compliance"
  ],
  publishedTime: "2025-01-01T09:00:00+05:30",
  modifiedTime: "2025-01-01T09:00:00+05:30"
},


  heroData: {
    title: "The Future of Web Security",
    highlight: "OWASP 2025 Updates Developers Should Know",
    description:
      "A widely used fintech web app goes offline for hours when an attacker chains a misconfigured API endpoint to a flawed access-control rule — customer data exposure, regulatory notice, and a sprint to patch a reputation hit.",
    author: "Moltech Solutions Inc.",
    date: "Sep 13, 2025",
    stats: [
      {
        icon: "mdi:shield-check",
        title: "94% of Applications Affected",
        desc: "Broken Access Control impacts nearly all applications in testing scenarios.",
      },
      {
        icon: "mdi:alert-circle",
        title: "26,000+ Vulnerabilities",
        desc: "More than 26,000 vulnerabilities were disclosed in 2023 with critical flaws on the rise.",
      },
      {
        icon: "mdi:trending-up",
        title: "600% Rise Predicted",
        desc: "Cybersecurity incidents projected to climb sharply by 2025.",
      },
    ],
  },

  tableOfContents: [
    {
      id: "owasp-2025-changes",
      title: "What's New in OWASP 2025: Top-Line Changes Developers Must Know",
      level: 1,
    },
    {
      id: "common-threats",
      title: "Common Web Threats Still Dominating in 2025",
      level: 1,
    },
    {
      id: "sdlc-integration",
      title: "Integrating Security in the SDLC: SAMM 3.0 and DevSecOps in Practice",
      level: 1,
    },
    {
      id: "advanced-strategies",
      title: "APIs, AI, and Post-Quantum: Advanced Strategies for Future-Proofing",
      level: 1,
    },
    {
      id: "compliance-cost",
      title: "Compliance, Cost, and Organizational Buy-In: Practical Balancing Acts",
      level: 1,
    },
    { id: "conclusion", title: "Conclusion", level: 1 },
  ],

  tags: [
    "OWASP 2025 updates",
    "OWASP Top 10 2025",
    "secure API development 2025",
    "SAMM 3.0 integration",
    "Security",
    "Web Security",
    "API Security",
    "AI Security",
    "DevSecOps",
    "Compliance",
    "Risk Management",
    "Software Development",
    "Cybersecurity",
    "Best Practices",
    "Zero Trust",
    "Post-Quantum Cryptography",
    "Broken Access Control",
    "Security Misconfiguration",
    "Vulnerability Management",
    "Security Testing",
  ],

  faqData: {
    faqTitle: "OWASP 2025 Updates: Common Questions",
    faqItems: [
      {
        title: "1. What are the single highest-priority fixes from OWASP 2025?",
        content: `The top priorities remain:
Fixing Broken Access Control with centralized authorization policies.
Securing APIs with strong authentication, rate limits, and schema validation.
Eliminating misconfigurations through automated checks and regular audits.`,
      },
      {
        title: "2. How do I start integrating SAMM 3.0 without disrupting feature delivery?",
        content: `Start small and iterate:
Run a gap assessment to identify immediate risks.
Prioritize the top three risk areas.
Integrate SAST/DAST scans into CI pipelines.
Use policy-as-code to streamline enforcement without slowing releases.`,
      },
      {
        title: "3. Are AI model vulnerabilities a real operational concern?",
        content: `Yes — AI-driven systems are increasingly targeted.
Validate and sanitize all inputs.
Maintain provenance logs for data pipelines.
Include adversarial testing during QA to measure and strengthen model robustness.`,
      },
      {
        title: "4. How do I estimate the cost of compliance with stricter security requirements?",
        content: `Costs depend on your architecture and complexity. Instead of focusing on numbers, think in terms of risk-adjusted ROI:
Automate where possible to lower operational overhead.
Invest in developer training to prevent repeat vulnerabilities.
Start with foundational controls and scale as your environment grows.`,
      },
      {
        title: "5. When should we start preparing for post-quantum cryptography?",
        content: `Start now.
Inventory cryptographic assets across applications and infrastructure.
Experiment with post-quantum-ready libraries in non-production environments.
Prioritize cryptographic agility, so you can adapt easily as standards finalize.`,
      },
    ],
  },
};
