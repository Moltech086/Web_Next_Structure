import { BASE_URL } from "@/lib/utils/baseUrl";

export const blogConfig = {
  slug: "security-first-integrating-robust-security-into-sdlc",

  // Meta configuration
  metaConfig: {
    title:
      "Security-First SDLC: Embedding Robust Security into Software Development ",
    description:
      "Supply chain vulnerabilities, dependency alarms, and compliance risks can derail delivery. A secure SDLC aligns speed with compliance. Learn how to automate SBOMs/VEX, embed security into CI/CD and IDEs, track the right metrics, and align teams for safer releases.",
    canonical: "/blog/security-first-integrating-robust-security-into-sdlc",
    author: "Moltech Solutions Inc.",
    publisher: "Moltech Solutions Inc.",
    imageUrl:
      `${BASE_URL}/images/meta/SecurityFirstIntegrating.webp`,
    twitterImage:
      `${BASE_URL}/images/meta/SecurityFirstIntegrating.webp`,
    keywords: [
      "Secure SDLC",
      "Software Supply Chain Security",
      "SBOM",
      "VEX",
      "CI/CD Security",
      "Automated Scanning",
      "SAST",
      "DAST",
      "SCA",
      "Shift-Left Security",
      "DevSecOps",
      "Vulnerability Management",
      "Compliance Automation",
      "MTTR",
      "Secrets Management",
      "Cloud Security",
      "AI Security",
      "Policy-as-Code",
      "Pipeline Integrity",
      "Jenkins Security Pipeline"
    ],
    section: "Blog",
    publishedTime: "2025-08-28T00:00:00+00:00",
  },
  heroData: {
    title: "Security First SDLC",
    highlight: "Integrating Robust Security",
    description:
      "Supply chain vulnerabilities, dependency alarms, and compliance risks can derail delivery. A secure software development lifecycle (SDLC) ensures speed and compliance go hand in hand. This guide shows what to automate (SBOMs, VEX), where to embed checks (CI/CD, IDEs), which metrics to track, and how to align teams and budgets for faster, safer releases.",
    author: "Moltech Solutions Inc.",
    date: "Aug 28, 2025",
    stats: [
      {
        icon: "mdi:shield-check-outline",
        title: "Faster Approvals",
        desc: "Automated artifacts reduce manual reviews and speed up compliance sign-offs.",
      },
      {
        icon: "mdi:alert-decagram-outline",
        title: "Lower Risk Exposure",
        desc: "Continuous scanning + VEX mapping cut MTTR and shrink blast radius.",
      },
      {
        icon: "mdi:finance",
        title: "Predictable Costs",
        desc: "Minimum Viable Security (MVS) early prevents expensive retrofits later.",
      },
    ],
  },

  tableOfContents: [
    {
      id: "why-a-secure-software-development-lifecycle-is-non-negotiable",
      title: "Why a Secure Software Development Lifecycle Is Non-Negotiable",
      level: 1,
    },
    {
      id: "automate-sboms-vex-and-continuous-vulnerability-management",
      title: "Automate SBOMs, VEX, and Continuous Vulnerability Management",
      level: 1,
    },
    {
      id: "jenkins-end-to-end-example-sbom-sca-sast-vex-signing",
      title: "Jenkins: End-to-End Example (SBOM + SCA + SAST + VEX + Signing)",
      level: 2,
    },
    {
      id: "shift-left-tooling-for-a-security-first-sdlc",
      title: "Shift-Left Tooling for a Security-First SDLC",
      level: 1,
    },
    {
      id: "organizational-strategies-culture-pipeline-hardening-and-compliance",
      title: "Organizational Strategies: Culture, Pipeline Hardening, and Compliance",
      level: 1,
    },
    { id: "conclusion-and-call-to-action", title: "Conclusion & Call to Action", level: 1 },
  ],

  tags: [
    "Secure SDLC",
    "Software Supply Chain Security",
    "SBOM",
    "VEX",
    "CI/CD Security",
    "Automated Scanning",
    "SAST",
    "DAST",
    "SCA",
    "Shift-Left Security",
    "DevSecOps",
    "Vulnerability Management",
    "Compliance Automation",
    "Mean Time to Remediate (MTTR)",
    "Secrets Management",
    "Cloud Security",
    "AI Security",
    "Policy-as-Code",
    "Pipeline Integrity",
    "Jenkins Security Pipeline",
  ],

  faqData: {
    faqTitle:
      "Security First: Integrating Robust Security into Custom Software Development Lifecycle",
    faqItems: [
      {
        title: "How quickly can we start generating SBOMs for existing projects?",
        content:
          "In most cases, you can produce initial SBOMs within a few days using tools like Syft or CycloneDX exporters. Full CI/CD integration and governance typically take a few sprints, depending on your existing pipeline and tooling maturity.",
      },
      {
        title: "Will automating scans slow down our CI/CD pipeline?",
        content:
          "Not if you structure checks efficiently. Run fast, lightweight scans on pull requests and schedule deeper, full scans for nightly builds or gated releases. Leveraging VEX prioritization ensures only exploitable vulnerabilities block production deployments.",
      },
      {
        title: "What’s the best indicator that our SDLC security is improving?",
        content:
          "Look for a consistent downward trend in Mean Time to Remediate (MTTR) for high-severity vulnerabilities, alongside an increase in automated artifacts (SBOMs, scan reports, attestations) attached to every release.",
      },
      {
        title: "How much should we budget for a security-first SDLC?",
        content:
          "Costs vary by complexity and compliance requirements. Baseline implementations often start around $5,000–$15,000, covering SBOM automation and basic scanning. Larger organizations aiming for enterprise-grade security, policy-as-code, and full pipeline coverage typically invest $50,000 or more.",
      },
      {
        title: "Can we apply shift-left security without disrupting developer velocity?",
        content:
          "Absolutely. The key is to integrate developer-friendly tools like IDE plugins, automated PR scans, and secrets management into existing workflows. Start with “warn mode” for a few sprints, then enable enforcement gates once teams adapt.",
      },
    ],
  },
};
