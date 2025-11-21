import { BASE_URL } from "@/lib/utils/baseUrl";
import { AppIcons } from "../appIcons";

const CentralizeSystemData = {
  slug: "centralized-operations-management-platform-case-study",
  heroSection: {
    title: "EchemPortal Centralized System",
    HeroImage: AppIcons.CentralizeSystem1,
    highlight: "Shared User & Operational Module Hub",
    description:
      "We created a centralized management platform for EchemPortal Inc., supporting shared modules like user access, project assignment, operational controls, schedulers, and secure integrations across multiple chemical data applications.",
    location: {
      icon: "mdi:map-marker-outline",
      label: "Global – SaaS / Chemical Compliance",
    },
    industry: {
      icon: "mdi:flask-outline",
      label: "Chemical Data Management, SaaS",
    },
    services: [
      {
        name: "User Management",
        icon: "mdi:account-multiple-outline",
        href: "/services/web-application-development",
      },
      {
        name: "Centralized Role System",
        icon: "mdi:shield-key-outline",
        href: "/services/web-application-development",
      },
      {
        name: "Email Digest & Notifications",
        icon: "mdi:email-sync-outline",
        href: "/services/ui-ux-design-and-development",
      },
      {
        name: "Scheduler & Jobs",
        icon: "mdi:clock-outline",
        href: "/services/business-software-consulting",
      },
      {
        name: "Exception & Log Monitor",
        icon: "mdi:alert-circle-outline",
        href: "/services/business-software-consulting",
      },
    ],
    card: {
      mainIcon: "mdi:server-network-outline",
      lines: ["w-4-5", "w-3-4"],
      iconRow: [
        { icon: "mdi:account-settings-outline", bg: "bg-blue" },
        { icon: "mdi:shield-lock-outline", bg: "bg-red" },
        { icon: "mdi:database-sync", bg: "bg-green" },
      ],
    },
  },
  metaConfig: {
  title: "Centralized Operations Management Platform for SaaS & Enterprise Projects | Case Study - USA",
  description:
    "Scalable operations management system with unified user control, secure key storage, scheduler jobs, email digests, and exception monitoring—built for SaaS & enterprise apps.",
  keywords:
    "Moltech Solutions Inc. (Dallas, USA) built a centralized operations management system featuring unified user and role handling, project-based assignments, secure API key storage, exception tracking, scheduler tools, email digest reporting, and seamless data synchronization—designed for scalable SaaS environments.",
  canonical:
    `${BASE_URL}/case-study/centralized-operations-management-platform-case-study`,
  author: "Moltech Solutions Inc.",
  language: "English",
  distribution: "Global",
  rating: "General",
  revisitAfter: "7 days",
  openGraph: {
    title: "Centralized Operations Management Platform for SaaS & Enterprise Projects | Case Study - USA",
    description:
      "Built by Moltech (Dallas), this system centralizes user management, exception handling, API key storage, email digests, and operational modules across enterprise SaaS applications.",
    url: `${BASE_URL}/case-study/centralized-operations-management-platform-case-study`,
    image: `${BASE_URL}/images/meta/centralized-operations-og.webp`,
    type: "website",
    locale: "en_US",
    site_name: "Moltech Solutions Inc.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Centralized Operations Management Platform for SaaS & Enterprise Projects | Case Study - USA",
    description:
      "Moltech Solutions developed a feature-rich admin system with centralized user management, scheduler tools, email digests, and secure key tracking for SaaS operations.",
    image: `${BASE_URL}/images/meta/centralized-operations-og.webp`,
    site: "@MoltechInc",
    creator: "@MoltechInc",
  },
}
,
  projectDetails: {
    description:
      "We developed a centralized system for EchemPortal Inc. to serve as the backbone for their growing portfolio of applications. This system handles user management, project assignments, role configurations, and secure client key management while supporting common operational needs like email digests, event schedulers, and data synchronization across various projects.",
  },
  aboutSection: {
    description1:
      "EchemPortal Inc. manages multiple applications delivering chemical safety, compliance, and data management solutions to customers worldwide, including regulatory agencies, research organizations, and manufacturers.",
    description2:
      "To support their growing suite of projects efficiently, we developed a centralized system for shared modules, providing consistent user management, project assignments, and common operational workflows across all EchemPortal projects.",
    industry: "Chemical Compliance SaaS Platform",
    projectType: "Cross-Platform Admin + Integration Backbone",
    technologies: [
      {
        name: "React.js",
        icon: "logos:react",
        description:
          "Frontend library used to build dynamic dashboard modules and admin interfaces.",
      },
      {
        name: "TypeScript",
        icon: "logos:typescript-icon",
        description:
          "Typed superset of JavaScript used for scalable and maintainable frontend code.",
      },
      {
        name: ".NET Core",
        icon: "logos:dotnet",
        description:
          "Backend framework for building secure, high-performance REST APIs.",
      },
      {
        name: "SQL Server",
        icon: "logos:mysql",
        description:
          "Relational database used for managing structured business data.",
      },
      {
        name: "MongoDB",
        icon: "logos:mongodb-icon",
        description:
          "NoSQL database used for storing unstructured and document-based data.",
      },
      {
        name: "REST API Development",
        icon: "mdi:api",
        description:
          "Exposes secure RESTful services to connect frontend and backend systems.",
      },
      {
        name: "HTML",
        icon: "logos:html-5",
        description: "Markup language used for structuring content on the web.",
      },
      {
        name: "CSS",
        icon: "logos:css-3",
        description:
          "Styling language used for modern, responsive layout design.",
      },
      {
        name: "Bootstrap",
        icon: "logos:bootstrap",
        description:
          "Frontend UI toolkit for building responsive layouts and components.",
      },
      {
        name: "JavaScript",
        icon: "logos:javascript",
        description:
          "Core scripting language used for interactive client-side behavior.",
      },
    ],
  },
  majorFeatures: {
    features: [
      {
        title: "Centralized User & Role Management",
        description:
          "Unified user onboarding, access control, and project-specific roles.",
        icon: "mdi:account-multiple-check-outline",
      },
      {
        title: "Secure API Key & Secret Management",
        description:
          "Encryption-enabled handling of client keys and secrets for secure integrations.",
        icon: "mdi:key-chain-variant",
      },
      {
        title: "App-Level Operations Dashboard",
        description:
          "Manage applications, whitelist IPs, configure email settings, and more from a single admin panel.",
        icon: "mdi:view-dashboard-variant-outline",
      },
      {
        title: "Exception Logging & Notifications",
        description:
          "Structured backend exception tracking with alerts via email and webhooks.",
        icon: "mdi:alert-decagram-outline",
      },
      {
        title: "Scheduler & Job Monitoring",
        description:
          "Configure background jobs with scheduling, retry logic, and activity logs.",
        icon: "mdi:calendar-clock",
      },
      {
        title: "Email Digest System",
        description:
          "Aggregate cross-system data and send scheduled summary reports to stakeholders.",
        icon: "mdi:email-newsletter",
      },
      {
        title: "Data Synchronization Tracker",
        description:
          "Monitor and manage data syncing across multiple integrated systems.",
        icon: "mdi:database-sync-outline",
      },
      {
        title: "IP Directory & Whitelisting",
        description:
          "Maintain organized IP lists and enforce access via trusted IP whitelisting.",
        icon: "mdi:shield-key-outline",
      },
    ],
  },
  challengeSolution: {
    challenges: [
      {
        title: "Redundant Role & User Management",
        desc: "Disparate user systems across projects led to redundant configurations and inefficiencies.",
        icon: "mdi:account-cancel-outline",
      },
      {
        title: "Manual Exception Monitoring",
        desc: "No centralized platform for managing exception storage, notifications, or operational logs.",
        icon: "mdi:file-alert-outline",
      },
      {
        title: "Lack of Cross-Project Task Automation",
        desc: "Each project required its own implementation for recurring jobs and sync operations.",
        icon: "mdi:calendar-remove-outline",
      },
    ],
    solutions: [
      {
        title: "Cross-Project User Module",
        desc: "Centralized user management with project-level access and role assignments.",
        icon: "mdi:account-network-outline",
      },
      {
        title: "Central Logging System",
        desc: "Implemented secure key-based exception logging and centralized email digest reporting.",
        icon: "mdi:bug-check-outline",
      },
      {
        title: "Reusable Task Scheduler",
        desc: "Modular schedulers and sync tools enabled operational automation across applications.",
        icon: "mdi:clock-time-eight-outline",
      },
    ],
  },
  projectSnippets: {
    projectSnippets: [
      {
        id: 1,
        title: "Clean Homepage Layout",
        description: "Modern look with organized sections and dynamic CTA.",
        category: "CentralizeSystem",
        image: AppIcons.CentralizeSystem1,
      },
      {
        id: 2,
        title: "SEO Optimized Content",
        description: "Structured content aligned with SEO best practices.",
        category: "CentralizeSystem",
        image: AppIcons.CentralizeSystem2,
      },
      {
        id: 3,
        title: "Mobile-First Design",
        description: "Optimized layout for seamless access on all devices.",
        category: "CentralizeSystem",
        image: AppIcons.CentralizeSystem3,
      },
      {
        id: 4,
        title: "Services Showcase",
        description: "Dedicated sections for services and industry value.",
        category: "CentralizeSystem",
        image: AppIcons.CentralizeSystem4,
      },
      {
        id: 5,
        title: "Services Showcase",
        description: "Dedicated sections for services and industry value.",
        category: "CentralizeSystem",
        image: AppIcons.CentralizeSystem5,
      },
      {
        id: 6,
        title: "Clean Homepage Layout",
        description: "Modern look with organized sections and dynamic CTA.",
        category: "CentralizeSystem",
        image: AppIcons.CentralizeSystem6,
      },
    ],
  },
  testimonialSection: {
    rating: 5,
    quote:
      "A reliable and trustworthy co-worker. Moltech is very passionate about technologies and able to recommend and provide solution custom to your needs.",
    author: "Peterson Tan",
    title: "Technical consultant",
  },
resultsSection: {
  title: "Business Values Provided",
  description:
    "The centralized system enhanced operational reliability, eliminated inefficiencies, and laid the foundation for scalable future growth.",
  values: [
    {
      title: "Operational Consistency",
      description: "Unified workflows across all projects.",
      icon: "mdi:sync",
    },
    {
      title: "Reduced Redundancy",
      description: "One centralized system instead of fragmented management.",
      icon: "mdi:layers-remove",
    },
    {
      title: "Improved Security",
      description: "Centralized key and secret management.",
      icon: "mdi:lock-check-outline",
    },
    {
      title: "Efficient Operations",
      description: "Automated email digests and scheduled tasks.",
      icon: "mdi:calendar-clock-outline",
    },
    {
      title: "Future Ready",
      description: "A scalable system for upcoming projects.",
      icon: "mdi:rocket-launch",
    },
  ],
}
,
};
export default CentralizeSystemData;
