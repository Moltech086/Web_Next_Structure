import { BASE_URL } from "@/lib/utils/baseUrl";
import { AppIcons } from "../appIcons";

const ClixzCaseStudy = {
  slug: "clixzplatform-utility-saas-case-study",

  metaConfig: {
    title:
      "Centralized Operations Management Platform for SaaS & Enterprise Projects | Case Study - USA",
    description:
      "Scalable operations management system with unified user control, secure key storage, scheduler jobs, email digests, and exception monitoring—built for SaaS & enterprise apps.",
    keywords:
      "centralized operations management system, SaaS platform development, enterprise application, workflow automation, Moltech Solutions Inc., user and role management, API key storage, scheduler tools, email digest reporting, exception tracking, scalable SaaS solutions",
    canonical: `${BASE_URL}/case-study/clixzplatform-utility-saas-case-study`,
    author: "Moltech Solutions Inc.",
    language: "English",
    distribution: "Global",
    rating: "General",
    revisitAfter: "7 days",
    openGraph: {
      title:
        "Centralized Operations Management Platform for SaaS & Enterprise Projects | Case Study - USA",
      description:
        "Built by Moltech (Dallas), this system centralizes user management, exception handling, API key storage, email digests, and operational modules across enterprise SaaS applications.",
      url: `${BASE_URL}/case-study/centralized-operations-management-platform-case-study`,
      image: `${BASE_URL}/images/meta/clixzplatform-utility-saas-og.webp`,
      type: "website",
      locale: "en_US",
      siteName: "Moltech Solutions Inc.",
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Centralized Operations Management Platform for SaaS & Enterprise Projects | Case Study - USA",
      description:
        "Moltech Solutions developed a feature-rich admin system with centralized user management, scheduler tools, email digests, and secure key tracking for SaaS operations.",
      image: `${BASE_URL}/images/meta/clixzplatform-utility-saas-og.webp`,
      site: "@MoltechInc",
      creator: "@MoltechInc",
    },
  },
  heroSection: {
    title: "ClixzPlatform",
    HeroImage: AppIcons.Clixz1,
    highlight: "Multi-Tenant SaaS Platform for Utility Providers",
    description:
      "A dynamic platform enabling utility companies to configure workflows, quotations, and reports—all through a scalable multi-tenant SaaS model.",
    location: {
      icon: "mdi:map-marker-outline",
      label: "Global",
    },
    industry: {
      icon: "mdi:factory",
      label: "Any Industries",
    },
    services: [
      {
        name: "Custom Software Development",
        icon: "mdi:cog-outline",
        href: "/services/custom-software-development",
      },
      {
        name: "Web App Development",
        icon: "mdi:shield-account-outline",
        href: "/services/web-application-development",
      },
      {
        name: "Business Software Consulting",
        icon: "mdi:file-document-edit-outline",
        href: "/services/business-software-consulting",
      },
      {
        name: "Software Testing & QA",
        icon: "mdi:chart-areaspline",
        href: "/services/software-testing-and-qa",
      },
    ],
    card: {
      mainIcon: "mdi:application-cog",
      lines: ["w-4-5", "w-3-4"],
      iconRow: [
        { icon: "mdi:email-outline", bg: "bg-blue" },
        { icon: "mdi:file-pdf-box", bg: "bg-yellow" },
        { icon: "mdi:clipboard-check-outline", bg: "bg-green" },
      ],
    },
  },
  projectDetails: {
    description:
      "Build a dynamic, scalable platform that allows each utility company to tailor modules—quotation, workflow, reporting, dashboards—without custom code. The solution must support per‑client configuration of business rules, roles, UI views and integrations, enabling Clixz to rapidly onboard new customers with unique requirements.",
  },
  aboutSection: {
    description1:
      "Clixz is a product‑based technology company specializing in digital innovations for utility companies. Their goal is to offer a configurable, end‑to‑end solution—ClixzPlatform—that automates installations, workflows,, and customer interactions, then sell it as a repeatable, scalable SaaS to multiple utility providers.",
    industry: "Any Industries",
    projectType:
      "Multi‑tenant SaaS Platform Development for Utility Service Providers",
    technologies: [
      { name: ".NET", icon: "logos:dotnet" },
      { name: ".NET Core", icon: "devicon:dotnetcore" },
      { name: "MS-SQL", icon: "devicon:microsoftsqlserver" },
      { name: "Angular", icon: "logos:angular-icon" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "SCSS", icon: "logos:sass" },
      { name: "Bootstrap", icon: "logos:bootstrap" },
      { name: "HTML", icon: "logos:html-5" },
      { name: "i18n", icon: "mdi:translate" },
      { name: "SSRS", icon: "mdi:file-chart" },
      { name: "Azure Authentication", icon: "mdi:lock-check-outline" },
      { name: "Background Services", icon: "mdi:cogs" },
    ],
  },
  majorFeatures: {
    features: [
      {
        title: "Workflow Modules",
        description:
          "Pluggable engines for email alerts, PDF generation, and custom task execution, all driven by metadata.",
        icon: "mdi:cog-outline",
      },
      {
        title: "Configuration Console",
        description:
          "Admin tool to manage users, permissions, reports, modules, and global settings per tenant.",
        icon: "mdi:monitor-dashboard",
      },
      {
        title: "Sales & Lead Management",
        description:
          "Quoting engine with dynamic pricing, conditional formatting, and lead interaction workflows.",
        icon: "mdi:file-document-edit-outline",
      },
      {
        title: "Data & Document Management",
        description:
          "Support for approvals, tracking, questionnaires, and pre-filled forms.",
        icon: "mdi:file-cabinet",
      },
      {
        title: "Dynamic Dashboards",
        description:
          "SSRS-powered dashboards and real-time metrics tailored to each tenant.",
        icon: "mdi:view-dashboard-outline",
      },
      {
        title: "Business values provided",
        description:
          "A scalable, secure solution that reduces development effort and accelerates time-to-market.",
        icon: "mdi:briefcase-check",
      },
    ],
  },
  challengeSolution: {
    challenges: [
      {
        title: "Highly Variable Requirements",
        desc: "Each utility company demanded different configurations for the same functional module.",
        icon: "mdi:shape-outline",
      },
      {
        title: "Rapid Onboarding",
        desc: "The need to quickly deploy full-featured instances for new customers without bespoke development.",
        icon: "mdi:rocket-launch-outline",
      },
      {
        title: "Maintainability",
        desc: "Avoiding a proliferation of forks or custom branches in the codebase as more clients are onboarded.",
        icon: "mdi:source-branch",
      },
      {
        title: "Complex Workflows",
        desc: "Supporting diverse workflows—email notifications, PDF reports, and custom task sequences—per client.",
        icon: "mdi:flowchart",
      },
      {
        title: "Data & Permission Segregation",
        desc: "Ensuring strict separation of data, user roles, and SSRS report configurations across tenants.",
        icon: "mdi:database-lock-outline",
      },
    ],
    solutions: [
      {
        title: "Modular Workflow Engine",
        desc: "Created pluggable workflow modules (email, PDF generation, and task management) configured via metadata, not code.",
        icon: "mdi:code-braces-box",
      },
      {
        title: "Dynamic Configuration Layer",
        desc: "Built an admin console (“Clixz Config”) to manage users, global settings, role‑based permissions, report templates, and module toggles.",
        icon: "mdi:tune-variant",
      },
      {
        title: "Multi-Tenant Architecture",
        desc: " Leveraged a shared core codebase with tenant‑specific configuration tables and database schemas to isolate data and settings.",
        icon: "carbon:data-share",
      },
      {
        title: "Sales & Lead Suite",
        desc: "Developed dynamic quotation and lead‑tracking modules supporting versioning, price calculations, conditional formatting, and custom grid views.",
        icon: "mdi:account-cash-outline",
      },
      {
        title: "Data Management & Dashboards",
        desc: "Implemented SSRS‑based reporting, dynamic dashboards, and document approval workflows, all configurable per tenant.",
        icon: "mdi:chart-box-outline",
      },
    ],
  },
  projectSnippets: {
    projectSnippets: [
      {
        id: 1,
        title: "Homepage Hero Section",
        description: "Stunning oceanfront view with modern booking interface",
        category: "Clixz",
        image: AppIcons.Clixz1,
      },
      {
        id: 2,
        title: "Room Gallery",
        description: "Interactive room showcase with detailed amenities",
        category: "Clixz",
        image: AppIcons.Clixz2,
      },
      {
        id: 3,
        title: "Mobile Responsive Design",
        description: "Seamless experience across all devices",
        category: "Clixz",
        image: AppIcons.Clixz3,
      },
      {
        id: 4,
        title: "CMS Dashboard",
        description: "User-friendly content management interface",
        category: "Clixz",
        image: AppIcons.Clixz4,
      },
      {
        id: 5,
        title: "Booking Integration",
        description: "Third-party booking system integration",
        category: "Clixz",
        image: AppIcons.Clixz5,
      },
      {
        id: 6,
        title: "Clean Homepage Layout",
        description: "Modern look with organized sections and dynamic CTA.",
        category: "Clixz",
        image: AppIcons.Clixz6,
      },
      {
        id: 7,
        title: "Clean Homepage Layout",
        description: "Modern look with organized sections and dynamic CTA.",
        category: "Clixz",
        image: AppIcons.Clixz7,
      },
    ],
  },
  testimonialSection: {
    rating: 5,
    quote:
      "Moltech is a professional company that has provided valuable software development services. We're happy with our decision to work with Moltech, as their expertise has translated into a great new software platform. We're looking forward to work together on potential future projects.",
    author: "Jeroen Smith",
    title: "CEO at Clixz Platform",
  },
  resultsSection: {
    title: "Business Values Provided",
    description:
      "The platform enables scalable client onboarding, improved maintainability, and faster deployments—all while ensuring data isolation and high configurability.",
    values: [
      {
        title: "Reduced Development Overhead",
        description:
          "Metadata-driven configuration eliminates repetitive coding for new clients.",
        icon: "mdi:code-less-than",
      },
      {
        title: "Scalability & Flexibility",
        description:
          "Multi-tenant support allows the platform to grow with diverse utility needs.",
        icon: "mdi:expand-all-outline",
      },
      {
        title: "Data Security & Compliance",
        description:
          "Role-based access and tenant-specific data segregation ensure secure operations.",
        icon: "mdi:shield-lock-outline",
      },
      {
        title: "Accelerated Time-to-Market",
        description:
          "Prebuilt, configurable modules allow Clixz to onboard new clients in record time.",
        icon: "mdi:clock-fast",
      },
    ],
  },
};

export default ClixzCaseStudy;
