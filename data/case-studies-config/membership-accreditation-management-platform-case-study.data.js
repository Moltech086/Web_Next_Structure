import { BASE_URL } from "@/lib/utils/baseUrl";
import { AppIcons } from "../appIcons";

const SGBCData = {
  slug: "membership-accreditation-management-platform-case-study",
  heroSection: {
    title: "SGBC GMQP Accreditation & CPD Management",
    HeroImage: AppIcons.SGBC1,
    highlight: "Professional Certification Platform",
    description:
      "We delivered a powerful accreditation and course management system for the Singapore Green Building Council (SGBC), enabling professionals and administrators to manage the GMQP scheme, CPD tracking, and financial operations seamlessly.",
    location: {
      icon: "mdi:map-marker-outline",
      label: "Singapore – Built Environment & Sustainability",
    },
    industry: {
      icon: "mdi:office-building-cog-outline",
      label: "Professional Certification, Green Building",
    },
    services: [
      {
        name: "Membership & Accreditation",
        icon: "mdi:account-badge-outline",
        href: "/services/custom-software-development",
      },
      {
        name: "Course & CPD Management",
        icon: "mdi:school-outline",
        href: "/services/custom-software-development",
      },
      {
        name: "Financial Reconciliation (Xero)",
        icon: "mdi:file-chart-outline",
        href: "/services/accounting",
      },
      {
        name: "Zoom & Stripe Integrations",
        icon: "mdi:video-wireless-outline",
        href: "/services/ui-ux-design-and-development",
      },
      {
        name: "Committee Workflow Automation",
        icon: "mdi:account-group-outline",
        href: "/services/business-software-consulting",
      },
    ],
    card: {
      mainIcon: "mdi:clipboard-check-multiple-outline",
      lines: ["w-4-5", "w-3-4"],
      iconRow: [
        { icon: "mdi:calendar-check-outline", bg: "bg-green" },
        { icon: "mdi:credit-card-sync-outline", bg: "bg-blue" },
        { icon: "mdi:account-tie-outline", bg: "bg-red" },
      ],
    },
  },
  metaConfig: {
  title: "Accreditation & CPD Management Platform with Stripe, Xero & Zoom Integration | Case Study - USA",
  description:
    "CPD and accreditation platform with online applications, Zoom events, Stripe payments, and Xero reconciliation—designed for certification and membership bodies.",
  keywords:
    "accreditation management platform USA, CPD tracking software, certification workflow automation, Zoom integrated learning portal, Stripe payment integration, Xero financial export tool, React admin portal, course booking platform, Dallas certification portal development, membership renewal system, professional education software",
  canonical:
    `${BASE_URL}/case-study/membership-accreditation-management-platform-case-study`,
  author: "Moltech Solutions Inc.",
  language: "English",
  distribution: "Global",
  rating: "General",
  revisitAfter: "7 days",
  openGraph: {
    title: "Accreditation & CPD Management Platform with Stripe, Xero & Zoom Integration | Case Study - USA",
    description:
      "We built a scalable CPD and accreditation platform for professional bodies—supporting online applications, automated CPD tracking, financial reporting, and Zoom-based learning.",
    url: `${BASE_URL}/case-study/membership-accreditation-management-platform-case-study`,
    image: `${BASE_URL}/images/meta/accreditation-management-og.webp`,
    type: "website",
    locale: "en_US",
    site_name: "Moltech Solutions Inc.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accreditation & CPD Management Platform with Stripe, Xero & Zoom Integration | Case Study - USA",
    description:
      "Built by Moltech (Dallas), this platform enables certification workflows, CPD tracking, Zoom integration, and Xero-based financial exports—ideal for accreditation bodies.",
    image: `${BASE_URL}/images/meta/accreditation-management-og.webp`,
    site: "@MoltechInc",
    creator: "@MoltechInc",
  },
}
,
  projectDetails: {
    description:
      "We delivered a feature-rich GMQP portal allowing professionals to apply, track CPD (Continuing Professional Development) progress, manage applications, and book courses online. The admin portal enables SGBC to manage applications, financial transactions, approvals, and committee workflows, supporting the effective management of the GMQP scheme.",
  },
  aboutSection: {
    description1:
      "The Singapore Green Building Council (SGBC) drives sustainable building practices in Singapore by certifying Green Mark Qualified Professionals (GMQP) to lead green initiatives within the built environment.",
    description2:
      "To support the GMQP Scheme, we collaborated with Flying Cape Technologies to build a web and admin portal, digitizing the accreditation process, CPD tracking, course management, and financial workflows while improving the professional journey for GMQP applicants and certified professionals.",
    industry: "Sustainability, Accreditation, Professional Education",
    projectType: "Membership, CPD & Finance Portal",
    technologies: [
      {
        name: "React.js",
        icon: "logos:react",
        description:
          "Frontend library for building responsive, component-driven UIs.",
      },
      {
        name: "TypeScript",
        icon: "logos:typescript-icon",
        description:
          "Typed superset of JavaScript used to ensure scalable and maintainable code.",
      },
      {
        name: ".NET Core API",
        icon: "logos:dotnet",
        description:
          "Backend framework for secure API development and business logic.",
      },
      {
        name: "SQL Server",
        icon: "devicon:mysql-wordmark",
        description:
          "Relational database for structured application and transactional data.",
      },
      {
        name: "MongoDB",
        icon: "logos:mongodb-icon",
        description:
          "Document-based NoSQL database for flexible data modeling.",
      },
      {
        name: "REST API Development",
        icon: "mdi:api",
        description:
          "Exposes backend functionality through secure RESTful endpoints.",
      },
      {
        name: "HTML",
        icon: "logos:html-5",
        description:
          "Standard markup language used to build semantic and accessible pages.",
      },
      {
        name: "CSS",
        icon: "logos:css-3",
        description:
          "Stylesheet language used to design responsive and adaptive layouts.",
      },
      {
        name: "Bootstrap",
        icon: "logos:bootstrap",
        description:
          "CSS framework used for rapid UI development and mobile-first design.",
      },
      {
        name: "JavaScript",
        icon: "logos:javascript",
        description:
          "Primary scripting language for interactivity and dynamic behavior.",
      },
      {
        name: "Role-Based Access Control",
        icon: "mdi:account-lock-outline",
        description:
          "Ensures security by assigning user roles and managing permission levels.",
      },
      {
        name: "Stripe Integration",
        icon: "logos:stripe",
        description:
          "Online payment processing for donations, subscriptions, and fees.",
      },
      {
        name: "Xero API Integration",
        icon: "logos:xero",
        description:
          "OAuth-based integration for syncing accounting data and invoices.",
      },
      {
        name: "Zoom API",
        icon: "bxl:zoom",
        description:
          "Used for managing online webinars, meetings, and live courses.",
      },
      {
        name: "Email Notification & Digest",
        icon: "mdi:email-outline",
        description:
          "Automated notifications for user activity and scheduled updates.",
      },
      {
        name: "Event Scheduler & Data Sync",
        icon: "mdi:calendar-clock",
        description:
          "Background modules for scheduling events and syncing external data.",
      },
      {
        name: "Distributed & Repository Architecture",
        icon: "mdi:source-repository-multiple",
        description:
          "Follows modular, maintainable design with reusable service layers.",
      },
    ],
  },
  majorFeatures: {
    features: [
      {
        title: "GMQP Application & CPD Tracking",
        description:
          "Professionals can apply, renew, upgrade, and view CPD progress with automatic status updates.",
        icon: "mdi:account-check-outline",
      },
      {
        title: "Course Booking & Receipt Downloads",
        description:
          "Users can search, book, and track course attendance with automated receipt downloads.",
        icon: "mdi:book-check-outline",
      },
      {
        title: "Admin CPD & Course Management",
        description:
          "Admins can track CPD, manage course providers and events, and handle attendance approvals manually or automatically.",
        icon: "mdi:calendar-clock",
      },
      {
        title: "GMQP & Account Management",
        description:
          "Admins can manage GMQP applications, disciplinary renewals, GMP accounts, and user directories.",
        icon: "mdi:shield-account",
      },
      {
        title: "Xero Batch Export & Financial Reporting",
        description:
          "Integrated batch extraction, voucher reporting, and reconciliation for Xero integration.",
        icon: "mdi:file-sync-outline",
      },
      {
        title: "Committee Approval Workflow",
        description:
          "Approval lists and history tracking for GMQP, course events, and disciplinary renewals.",
        icon: "mdi:account-group",
      },
      {
        title: "Custom Email & Dropdown Configuration",
        description:
          "Manage admin-level email templates, dropdown values, and pricing rules for GMQP applications.",
        icon: "mdi:email-edit-outline",
      },
      {
        title: "Web Portal Dashboard & Applications",
        description:
          "Users log in as GMQP or Course Providers to manage dashboards, past applications, renewals, and CPD status.",
        icon: "mdi:view-dashboard-outline",
      },
    ],
  },
  challengeSolution: {
    challenges: [
      {
        title: "Manual GMQP Accreditation",
        desc: "Manual tracking of GMQP applications and renewals led to inefficiencies.",
        icon: "mdi:account-alert-outline",
      },
      {
        title: "Complex CPD Tracking",
        desc: "Professionals had difficulty navigating and verifying their CPD credits effectively.",
        icon: "mdi:chart-line",
      },
      {
        title: "Fragmented Financial Processing",
        desc: "The project required real-time batch reconciliation and Xero integration.",
        icon: "mdi:file-multiple-outline",
      },
    ],
    solutions: [
      {
        title: "Automated GMQP & CPD Flows",
        desc: "Streamlined GMQP accreditation, renewal, and CPD verification processes with real-time status tracking.",
        icon: "mdi:account-check-outline",
      },
      {
        title: "Unified Course System",
        desc: "Professionals can seamlessly book courses, manage attendance, and track CPD within a single platform.",
        icon: "mdi:calendar-month-outline",
      },
      {
        title: "Integrated Financial Tools",
        desc: "Improved financial operations with automated Xero batch exports and synchronized payment handling.",
        icon: "mdi:cash-multiple",
      },
    ],
  },
  projectSnippets: {
    projectSnippets: [
      {
        id: 1,
        title: "Clean Homepage Layout",
        description: "Modern look with organized sections and dynamic CTA.",
        category: "SGBC",
        image: AppIcons.SGBC1,
      },
      {
        id: 2,
        title: "SEO Optimized Content",
        description: "Structured content aligned with SEO best practices.",
        category: "SGBC",
        image: AppIcons.SGBC2,
      },
      {
        id: 3,
        title: "Mobile-First Design",
        description: "Optimized layout for seamless access on all devices.",
        category: "SGBC",
        image: AppIcons.SGBC3,
      },
      {
        id: 4,
        title: "Services Showcase",
        description: "Dedicated sections for services and industry value.",
        category: "SGBC",
        image: AppIcons.SGBC4,
      },
      {
        id: 5,
        title: "Services Showcase",
        description: "Dedicated sections for services and industry value.",
        category: "SGBC",
        image: AppIcons.SGBC5,
      },
      {
        id: 6,
        title: "Clean Homepage Layout",
        description: "Modern look with organized sections and dynamic CTA.",
        category: "SGBC",
        image: AppIcons.SGBC6,
      },
      {
        id: 7,
        title: "Services Showcase",
        description: "Dedicated sections for services and industry value.",
        category: "SGBC",
        image: AppIcons.SGBC7,
      },
      {
        id: 8,
        title: "Services Showcase",
        description: "Dedicated sections for services and industry value.",
        category: "SGBC",
        image: AppIcons.SGBC8,
      },
      {
        id: 9,
        title: "Clean Homepage Layout",
        description: "Modern look with organized sections and dynamic CTA.",
        category: "SGBC",
        image: AppIcons.SGBC9,
      },
    ],
  },
  testimonialSection: {
    rating: 5,
    quote:
      "We are very happy Moltech customers! Apart from their technical expertise and professionalism, Nigam and team have been extremely reliable and dedicated throughout. I would highly recommend their services with confidence.",
    author: "Jamie Tan",
    title: "CEO at Flying Cape Organization",
  },
resultsSection: {
  title: "Business Values Provided",
  description:
    "The solution modernized key operations, enhanced member experience, and provided better insight and automation across workflows.",
  values: [
    {
      title: "Streamlined Accreditation Processes",
      description: "Digitized and automated the accreditation lifecycle for improved efficiency.",
      icon: "mdi:check-decagram",
    },
    {
      title: "Automated CPD Management",
      description: "Tracked CPD activities and compliance with minimal manual input.",
      icon: "mdi:progress-check",
    },
    {
      title: "Seamless Course Booking",
      description: "Enabled easy registration and management of courses for members.",
      icon: "mdi:calendar-check-outline",
    },
    {
      title: "Efficient Financial Tracking",
      description: "Simplified invoicing, payment monitoring, and reporting.",
      icon: "mdi:finance",
    },
    {
      title: "Optimized Committee Workflows",
      description: "Centralized tools for agenda tracking, reviews, and decisions.",
      icon: "mdi:account-group-outline",
    },
    {
      title: "Clear CPD Insights",
      description: "Real-time dashboards provided visibility into CPD participation and status.",
      icon: "mdi:chart-line",
    },
  ],
}
,
};

export default SGBCData;
