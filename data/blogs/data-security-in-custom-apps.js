import { BASE_URL } from "@/lib/utils/baseUrl";

export const blogConfig = {
  slug: "data-security-compliance-in-custom-apps",

  // Meta configuration
  metaConfig: {
    title: "Data Security in Custom Applications ",
    description:
      "Embed security and compliance into custom apps—practical controls, AWS options, and tools like Microsoft Purview to lower risk and speed audits.",
    canonical: "/blog/data-security-in-custom-apps",
    author: "Moltech Solutions Inc.",
    publisher: "Moltech Solutions Inc.",
    imageUrl:
      `${BASE_URL}/images/meta/DataSecurityAndCompliance.webp`,
    twitterImage:
      `${BASE_URL}/images/meta/DataSecurityAndCompliance.webp`,
    keywords: [
      "data security in custom applications",
      "secure custom app development",
      "compliance for custom applications",
      "Hybrid Cloud",
      "Multi-Cloud",
      "Cloud Strategy",
    ],
    section: "Cloud & Security",
    tags: [
      "Data Security",
      "Compliance",
      "Custom Applications",
      "Cloud Security",
    ],
    publishedTime: "2025-08-14",
    modifiedTime: "2025-08-14",
  },

  heroData: {
    title: "Data Security & Compliance",
    highlight: "in Custom Applications",
    description:
      "Security and compliance can’t be an afterthought. Embed controls early to avoid costly breaches, meet GDPR and enterprise requirements, and keep engineering velocity high. This guide gives practical developer controls, secure file-transfer patterns (vendor-agnostic + AWS), and how tools like Microsoft Purview and Defender speed up audits and continuous monitoring.",
    author: "Moltech Solutions Inc.",
    date: "Aug 24, 2025",
    stats: [
      {
        icon: "mdi:shield-lock-outline",
        title: "30% Lower Breach Risk",
        desc: "Shift-left controls and least-privilege access reduce exposure.",
      },
      {
        icon: "mdi:bank-outline",
        title: "Audit-Ready Faster",
        desc: "Purview & Defender accelerate evidence collection and oversight.",
      },
      {
        icon: "mdi:cloud-sync-outline",
        title: "40% Faster Time-to-Secure",
        desc: "Reusable patterns for secure file transfer and data handling.",
      },
    ],
  },

  tableOfContents: [
    
    {
      id: "why-build-security-and-compliance-into-custom-applications-not-after-launch",
      title:
        "Why Build Security and Compliance into Custom Applications (Not After Launch)",
      level: 1,
    },
    {
      id: "practical-controls-and-architecture-patterns-for-secure-custom-apps",
      title:
        "Practical Controls and Architecture Patterns for Secure Custom Apps",
      level: 1,
    },
    {
      id: "secure-data-transfer-and-file-sharing-practical-options-and-trade-offs",
      title:
        "Secure Data Transfer and File Sharing—Practical Options and Trade-Offs",
      level: 1,
    },
    {
      id: "quick-code-snippet-generating-a-short-lived-s3-pre-signed-url-nodejs-aws-sdk-v3",
      title:
        "Quick Code Snippet: Generating a Short-Lived S3 Pre-signed URL (Node.js, AWS SDK v3)",
      level: 1,
    },
    {
      id: "generate-a-short-lived-s3-pre-signed-url-in-dotnet",
      title: "Generate a Short-Lived S3 Pre-signed URL in .NET",
      level: 1,
    },
    {
      id: "compliance-frameworks-documentation-and-developer-workflows",
      title: "Compliance Frameworks, Documentation, and Developer Workflows",
      level: 1,
    },
    { id: "conclusion-and-call-to-action", title: "Conclusion", level: 1 },
  ],

  tags: [
    "Data Security",
    "Compliance in Custom Apps",
    "GDPR",
    "Secure File Transfer",
    "Microsoft Purview",
    "Microsoft Defender",
    "Audit Readiness",
    "Data Privacy",
    "Risk Management",
    "AWS Security",
  ],

  faqData: {
    faqTitle: "Security & Compliance in Custom App Development",
    faqItems: [
      {
        title:
          "How early should security and compliance be introduced in a custom app project?",
        content:
          "Security and compliance should start at project inception. Threat modeling and policy definitions during design reduce rework, speed audits, and prevent costly remediation later.",
      },
      {
        title: "Which secure file-transfer option is best for regulated data?",
        content:
          "It depends on access patterns:\n\n- VPC Endpoint → for strict isolation.\n- AWS Transfer Family → for protocol compatibility (SFTP/FTPS/AS2).\n- Short-lived S3 Pre-signed URLs → for temporary access with strong logging.",
      },
      {
        title: "Can tools like Microsoft Purview fully automate compliance?",
        content:
          "Purview and similar platforms automate controls like labeling, monitoring, and posture management. However, legal interpretation, governance, and policy enforcement still require human oversight.",
      },
      {
        title:
          "What’s the cost of ignoring compliance in custom app development?",
        content:
          "Non-compliance can result in fines (e.g., GDPR penalties up to €20M or 4% of global revenue), reputational damage, and lost customer trust. Data breaches also average $4.45M per incident.",
      },
      {
        title:
          "How do developers balance speed of delivery with security requirements?",
        content:
          "By embedding security into CI/CD pipelines: policy-as-code, automated scans, and security testing gates ensure that adding controls doesn’t slow development.",
      },
      {
        title:
          "What are the most common mistakes teams make with security in custom apps?",
        content:
          "- Adding security only after launch.\n- Hardcoding secrets instead of using key management systems.\n- Not setting short expiration for pre-signed URLs.\n- Overlooking dependency vulnerabilities and unpatched libraries.",
      },
      {
        title:
          "Do compliance needs differ for industries like healthcare or finance?",
        content:
          "Yes. For example:\n\n- Healthcare apps must meet HIPAA rules on data encryption and access logging.\n- Finance apps face PCI DSS and SOC 2 requirements for payments and customer data.\n- Global operations must consider GDPR, CCPA, and regional residency laws.",
      },
      {
        title: "How often should compliance controls be reviewed?",
        content:
          "At least annually, or whenever major system changes occur. Many companies integrate quarterly vulnerability scans and yearly penetration tests into their governance process.",
      },
    ],
  },
};
