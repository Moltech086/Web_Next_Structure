import { BASE_URL } from "@/lib/utils/baseUrl";
import { AppIcons } from "../appIcons";

const IPASData = {
  slug: "association-member-event-platform-case-study",
  heroSection: {
    title: "IPAS Membership & Event Management",
    HeroImage: AppIcons.IPAS1,
    highlight: "Professional Development Platform",
    description:
      "We built a secure and scalable membership, events, and content management system for the Institute of Public Accountants Singapore (IPAS), empowering professionals with streamlined onboarding, training, and operational efficiency.",
    location: {
      icon: "mdi:map-marker-outline",
      label: "Singapore – Accounting & Education",
    },
    industry: {
      icon: "mdi:account-cash-outline",
      label: "Professional Membership, Accounting, Education",
    },
    services: [
      {
        name: "Membership Portal",
        icon: "mdi:account-multiple-outline",
        href: "/services/custom-software-development",
      },
      {
        name: "Event Registration & Certificates",
        icon: "mdi:calendar-check-outline",
        href: "/services/business-software-consulting",
      },
      {
        name: "CMS & Gallery",
        icon: "mdi:folder-multiple-image",
        href: "/services/web-application-development",
      },
      {
        name: "Finance & Reconciliation",
        icon: "mdi:cash-multiple",
        href: "/services/accounting",
      },
      {
        name: "Email & Notification System",
        icon: "mdi:email-outline",
        href: "/services/ui-ux-design-and-development",
      },
    ],
    card: {
      mainIcon: "mdi:briefcase-account-outline",
      lines: ["w-3-4", "w-4-5"],
      iconRow: [
        { icon: "mdi:shield-account", bg: "bg-blue" },
        { icon: "mdi:account-cog-outline", bg: "bg-red" },
        { icon: "mdi:email-send-outline", bg: "bg-green" },
      ],
    },
  },
  metaConfig: {
  title: "Member & Event Management Platform with CMS, Payment & Zoom Integration | Case Study - USA",
  description:
    "A robust platform for managing memberships, events, CMS, and payments—complete with Zoom integration, financial tools, and admin controls for growing associations.",
  keywords:
    "membership management platform USA, event registration system with Zoom, professional association portal, financial reconciliation software, CMS for nonprofits, React admin dashboard, .NET Core membership solution, Dallas custom portal development, secure voucher management system, accounting membership software",
  canonical:
    `${BASE_URL}/case-study/association-member-event-platform-case-study`,
  author: "Moltech Solutions Inc.",
  language: "English",
  distribution: "Global",
  rating: "General",
  revisitAfter: "7 days",
  openGraph: {
    title: "Member & Event Management Platform with CMS, Payment & Zoom Integration | Case Study - USA",
    description:
      "We built a feature-rich platform for associations with member onboarding, certificate generation, Zoom event handling, CMS, and financial workflows—powered by React & .NET Core.",
    url: `${BASE_URL}/case-study/association-member-event-platform-case-study`,
    image: `${BASE_URL}/images/meta/association-platform-og.webp`,
    type: "website",
    locale: "en_US",
    site_name: "Moltech Solutions Inc.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Member & Event Management Platform with CMS, Payment & Zoom Integration | Case Study - USA",
    description:
      "Moltech Solutions (Dallas) developed a smart member & event platform with CMS tools, Zoom integration, automated certificates, payment tracking, and committee control.",
    image: `${BASE_URL}/images/meta/association-platform-og.webp`,
    site: "@MoltechInc",
    creator: "@MoltechInc",
  },
}
,
  projectDetails: {
    description:
      "We developed a feature-rich admin and web portal to manage memberships, events, bookings, payments, and resources for IPAS, supporting the organisation’s mission of enhancing its members’ professional journey and operational efficiency.",
  },
  aboutSection: {
    description1:
      "The Institute of Public Accountants Singapore (IPAS) is dedicated to supporting public accountants, accounting professionals, and students through continuous professional development, certification, and community initiatives within Singapore’s accounting industry.",
    description2:
      "We partnered with Flying Cape Technologies to develop a comprehensive membership and events management system for IPAS, enabling seamless member onboarding, event registration, financial management, and resource delivery, with robust administrative control and a user-friendly web portal.",
    industry: "Professional Membership, Accounting",
    projectType: "Membership, Events & Content Management System",
    technologies: [
      {
        name: "React.js",
        icon: "logos:react",
        description:
          "Frontend library for building dynamic public and admin-facing portals.",
      },
      {
        name: "TypeScript",
        icon: "logos:typescript-icon",
        description:
          "Typed JavaScript superset used for safer, scalable frontend development.",
      },
      {
        name: ".NET Core",
        icon: "logos:dotnet",
        description:
          "Framework for backend APIs managing logic, roles, and workflows.",
      },
      {
        name: "SQL Server",
        icon: "devicon:mysql-wordmark",
        description:
          "Relational database used for transactional and structured data.",
      },
      {
        name: "MongoDB",
        icon: "logos:mongodb-icon",
        description:
          "NoSQL database used for unstructured and content-rich data.",
      },
      {
        name: "REST API Development",
        icon: "mdi:api",
        description:
          "Secure RESTful services enabling frontend-backend communication.",
      },
      {
        name: "HTML",
        icon: "logos:html-5",
        description: "Core markup language for structuring modern web pages.",
      },
      {
        name: "CSS",
        icon: "logos:css-3",
        description:
          "Stylesheet language for responsive and adaptive UI designs.",
      },
      {
        name: "Bootstrap",
        icon: "logos:bootstrap",
        description:
          "CSS framework used to build responsive and mobile-first layouts.",
      },
      {
        name: "JavaScript",
        icon: "logos:javascript",
        description:
          "Client-side scripting language used for rich web interactions.",
      },
      // {
      //   name: "Role-Based Access Control",
      //   icon: "mdi:account-lock-outline",
      //   description:
      //     "User access management using secure, permission-based roles.",
      // },
      {
        name: "Email Notification & Digest",
        icon: "mdi:email-outline",
        description:
          "Automated system for sending alerts, summaries, and updates.",
      },
      {
        name: "Event Scheduler & Data Sync",
        icon: "mdi:calendar-clock",
        description:
          "Background services to automate scheduling and data synchronization.",
      },
      {
        name: "AsiaPay Integration",
        icon: "mdi:credit-card-outline", // No official AsiaPay icon available
        description:
          "Integrated online payment gateway supporting secure transactions.",
      },
      {
        name: "Zoom API",
        icon: "bxl:zoom",
        description:
          "Third-party API integration used for managing online events and webinars.",
      },
      {
        name: "Distributed & Repository Architecture",
        icon: "mdi:source-repository-multiple",
        description:
          "Clean, scalable code structure using service segregation and pattern-based development.",
      },
    ],
  },
  majorFeatures: {
    features: [
      {
        title: "Membership & Reinstatement Management",
        description:
          "Manage full lifecycle: sign-up, approval, reinstatement, and admin task queues.",
        icon: "mdi:account-convert-outline",
      },
      {
        title: "Event Creation & Certificate Generation",
        description:
          "Run events, gather feedback, approve registrations, and auto-issue certificates.",
        icon: "mdi:certificate-outline",
      },
      {
        title: "Financial & Payment Integration",
        description:
          "Includes batch jobs, chart of accounts, voucher tools, and payment reconciliation.",
        icon: "mdi:cash-refund",
      },
      {
        title: "Booking & Transaction Management",
        description:
          "View and search bookings with linked invoices, receipts, and member data.",
        icon: "mdi:file-document-outline",
      },
      {
        title: "CMS & Resource Control",
        description:
          "Manage site pages, image galleries, event resources, and downloadable assets.",
        icon: "mdi:folder-multiple-image",
      },
      {
        title: "Committee & Notification Control",
        description:
          "Configure admission/board committees, pricing, dropdowns, and email templates.",
        icon: "mdi:account-group-outline",
      },
      {
        title: "Web Portal & Member Dashboard",
        description:
          "Users can sign up, access dashboards, search members and courses, and view notifications.",
        icon: "mdi:monitor-dashboard",
      },
    ],
  },
  challengeSolution: {
    challenges: [
      {
        title: "Manual Event Certificate Handling",
        desc: "Needed secure, automated issuance of event certificates.",
        icon: "mdi:file-certificate-outline",
      },
      {
        title: "Content Management Needed Structure",
        desc: "Lacked a scalable CMS to manage content and resources efficiently.",
        icon: "mdi:folder-wrench-outline",
      },
      {
        title: "Complex Financial Tracking",
        desc: "Required automated reconciliation, vouchers, and transactional control.",
        icon: "mdi:scale-balance",
      },
    ],
    solutions: [
      {
        title: "Automated Certificates via Admin Panel",
        desc: "Enabled auto-generation of event certificates with admin-controlled workflows.",
        icon: "mdi:certificate",
      },
      {
        title: "Complete CMS Suite",
        desc: "Provided admin tools to manage pages, galleries, resources, and announcements.",
        icon: "mdi:application-cog",
      },
      {
        title: "Integrated Voucher & Payment System",
        desc: "Included secure payment reconciliation, voucher tracking, and financial reporting.",
        icon: "mdi:credit-card-multiple-outline",
      },
    ],
  },
  projectSnippets: {
    projectSnippets: [
      {
        id: 1,
        title: "Clean Homepage Layout",
        description: "Modern look with organized sections and dynamic CTA.",
        category: "IPAS",
        image: AppIcons.IPAS1,
      },
      {
        id: 2,
        title: "SEO Optimized Content",
        description: "Structured content aligned with SEO best practices.",
        category: "IPAS",
        image: AppIcons.IPAS2,
      },
      {
        id: 3,
        title: "Mobile-First Design",
        description: "Optimized layout for seamless access on all devices.",
        category: "IPAS",
        image: AppIcons.IPAS3,
      },
      {
        id: 4,
        title: "Services Showcase",
        description: "Dedicated sections for services and industry value.",
        category: "IPAS",
        image: AppIcons.IPAS4,
      },
      {
        id: 5,
        title: "Services Showcase",
        description: "Dedicated sections for services and industry value.",
        category: "IPAS",
        image: AppIcons.IPAS5,
      },
      {
        id: 6,
        title: "Clean Homepage Layout",
        description: "Modern look with organized sections and dynamic CTA.",
        category: "IPAS",
        image: AppIcons.IPAS6,
      },
       {
        id: 7,
        title: "Clean Homepage Layout",
        description: "Modern look with organized sections and dynamic CTA.",
        category: "IPAS",
        image: AppIcons.IPAS7,
      },
      {
        id: 8,
        title: "SEO Optimized Content",
        description: "Structured content aligned with SEO best practices.",
        category: "IPAS",
        image: AppIcons.IPAS8,
      },
      {
        id: 9,
        title: "Mobile-First Design",
        description: "Optimized layout for seamless access on all devices.",
        category: "IPAS",
        image: AppIcons.IPAS9,
      },
      {
        id: 10,
        title: "Services Showcase",
        description: "Dedicated sections for services and industry value.",
        category: "IPAS",
        image: AppIcons.IPAS10,
      },
      {
        id: 11,
        title: "Services Showcase",
        description: "Dedicated sections for services and industry value.",
        category: "IPAS",
        image: AppIcons.IPAS11,
      },
      {
        id: 12,
        title: "Clean Homepage Layout",
        description: "Modern look with organized sections and dynamic CTA.",
        category: "IPAS",
        image: AppIcons.IPAS12,
      },
    ],
  },
  testimonialSection: {
    rating: 5,
    quote:
      "The IPAS platform is future-ready and aligns with our strategic goals. From membership onboarding to professional events, everything now runs more efficiently and transparently.",
    author: "Board Admin, IPAS",
    title: "Director of Member Services",
  },
resultsSection: {
  title: "Business Values Provided",
  description:
    "The platform simplified core membership workflows and enabled scalable content and system management.",
  values: [
    {
      title: "Streamlined Member Registration",
      description: "Simplified and accelerated the onboarding process for new members.",
      icon: "mdi:account-plus-outline",
    },
    {
      title: "Scalable System",
      description: "Built to support future enhancements and membership growth.",
      icon: "mdi:trending-up",
    },
    {
      title: "Simplified Content Management",
      description: "Included galleries, resource uploads, and flexible page control.",
      icon: "mdi:file-document-edit-outline",
    },
  ],
}
,
};

export default IPASData;
