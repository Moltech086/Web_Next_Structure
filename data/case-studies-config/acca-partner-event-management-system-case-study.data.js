import { BASE_URL } from "@/lib/utils/baseUrl";
import { AppIcons } from "../appIcons";

const ACCAData = {
  slug: "acca-partner-event-management-system-case-study",
 
  
// metaConfig
  metaConfig: {
    title:
      "Accounting Firm Website Design Case Study | WordPress Web Development for Financial Services - USA",
    description:
      "See how our Dallas-based team built a professional, multi-location website for a U.S. accounting firm—showcasing tax, audit, and bookkeeping services with clear navigation, lead forms, and mobile responsiveness.",
    keywords:
      "accounting website development, financial services website USA, WordPress for accountants, CPA firm website design, tax audit web design, Dallas WordPress agency, multi-location website development, bookkeeping services site, ASC 842 website design, responsive accounting website, custom financial website USA",
    canonical:
      `${BASE_URL}/case-study/acca-partner-event-management-system-case-study`,
    author: "Moltech Solutions Inc.",
    language: "English",
    distribution: "Global",
    rating: "General",
    revisitAfter: "7 days",
    openGraph: {
      title:
        "Accounting Firm Website Design Case Study | WordPress Web Development for Financial Services - USA",
      description:
        "Moltech Solutions Inc. (Dallas) designed a multi-location accounting website with mobile-friendly design, strong service representation, and client-friendly inquiry tools.",
      url:  `${BASE_URL}/case-study/acca-partner-event-management-system-case-study`,
      image: `${BASE_URL}/images/meta/accounting-website-og.webp`,
      type: "website",
      locale: "en_US",
      siteName: "Moltech Solutions Inc.",
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Accounting Firm Website Design Case Study | WordPress Web Development for Financial Services - USA",
      description:
        "Discover how our Dallas-based team built a professional multi-office accounting website using WordPress, with service showcases, lead forms, and responsive design.",
      image: `${BASE_URL}/images/meta/accounting-website-og.webp`,
      site: "@MoltechInc",
      creator: "@MoltechInc",
    },
  },
  
  heroSection: {
    title: "Association of Chartered Certified Accountants (ACCA)",
    HeroImage: AppIcons.accaAddmin1,
    highlight: "Partner & Event Management System",
    description:
      "A global CPD platform for ACCA members to book, manage, and track professional development activities with seamless booking workflows, real-time reporting, and secure role-based access.",
    location: {
      icon: "mdi:map-marker-outline",
      label: "Global",
    },
    industry: {
      icon: "mdi:account-cash-outline",
      label: "Association of Chartered Certified Accountants",
    },
    services: [
      {
        name: "Custom Software Development",
        icon: "mdi:cog-outline",
        href: "/services/custom-software-development",
      },
      {
        name: "Software Testing & QA",
        icon: "mdi:chart-areaspline",
        href: "/services/software-testing-and-qa",
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
    ],
    card: {
      mainIcon: "mdi:account-cash",
      lines: ["w-4-5", "w-3-4"],
      iconRow: [
        { icon: "mdi:calendar-check-outline", bg: "bg-blue" },
        { icon: "mdi:file-certificate-outline", bg: "bg-yellow" },
        { icon: "mdi:shield-lock-outline", bg: "bg-green" },
      ],
    },
  },
  projectDetails: {
    description:
      "We developed a scalable partner and event management platform for ACCA to streamline their professional development ecosystem. The solution covers booking, payment, reporting, and partner access workflows with a robust architecture that handles high-volume usage and real-time updates.",
  },
  aboutSection: {
    description1:
      "ACCA PD Hub is ACCA’s global lifelong learning and development portal. It enables ACCA members and finance professionals to discover, book, track and manage their Continuous Professional Development—workshops, seminars, conferences and webinars—while keeping a consolidated record of certificates, bookings and attendance.",
    industry: "Association of Chartered Certified Accountants",
    projectType: "Partner & Event Management System Development",
    technologies: [
      {
        name: "AWS EC2",
        icon: "logos:aws",
        description:
          "Hosting environment using Windows Server and IIS on Amazon EC2.",
      },
      {
        name: "IIS",
        icon: "mdi:server",
        description:
          "Web server used to host and manage ASP.NET MVC applications.",
      },
      {
        name: "ASP.NET MVC 5.0",
        icon: "logos:dotnet",
        description:
          "Backend framework following the Model-View-Controller architecture.",
      },
      {
        name: "C#",
        icon: "logos:c-sharp",
        description:
          "Primary programming language for backend logic and services.",
      },
      {
        name: "Microsoft SQL Server 2019",
        icon: "devicon-plain:microsoftsqlserver-wordmark",
        description:
          "Relational database for managing structured application data.",
      },
      {
        name: "HTML5",
        icon: "logos:html-5",
        description:
          "Markup language used for building user interface structure.",
      },
      {
        name: "CSS3",
        icon: "devicon:css3",
        description: "Styling language used for layout and responsive design.",
      },
      {
        name: "JavaScript",
        icon: "logos:javascript",
        description:
          "Programming language for client-side interactivity and logic.",
      },
      {
        name: "AJAX",
        icon: "mdi:swap-horizontal",
        description:
          "Technique for asynchronous data fetch and dynamic UI updates.",
      },
      {
        name: "Bootstrap 4",
        icon: "logos:bootstrap",
        description: "Responsive UI framework for building mobile-first pages.",
      },
      {
        name: "jQuery",
        icon: "skill-icons:jquery",
        description: "Simplified DOM manipulation and AJAX interactions.",
      },
      {
        name: "AngularJS",
        icon: "logos:angular-icon",
        description:
          "Client-side framework for dynamic, reactive web components.",
      },
      {
        name: "SVN",
        icon: "mdi:source-branch",
        description:
          "Version control system for managing source code revisions.",
      },
      {
        name: "Zoom API",
        icon: "logos:zoom",
        description:
          "Integrated API for scheduling and hosting video webinars.",
      },
      {
        name: "SVP Player",
        icon: "mdi:video",
        description:
          "Custom player used for streaming recorded webinars and videos.",
      },
      {
        name: "AsiaPay",
        icon: "mdi:credit-card-outline",
        description: "Payment gateway integrated for secure transactions.",
      },
      {
        name: "Adyen",
        icon: "logos:adyen",
        description: "Global payment platform integrated for online payments.",
      },
      {
        name: "Repository Pattern",
        icon: "mdi:folder-outline",
        description: "Design pattern used to abstract data layer interactions.",
      },
      {
        name: "Distributed Web Farms",
        icon: "mdi:server-network",
        description:
          "Scalable architecture for load balancing and high availability.",
      },
    ],
  },
  majorFeatures: {
    features: [
      {
        title: "Member Portal",
        description:
          "A centralized interface for users to explore classes, manage bookings, and track progress.",
        icon: "mdi:account-circle-outline",
      },
      {
        title: "Admin Portal",
        description:
          "Back-office control panel for managing classes, users, banners, and reports.",
        icon: "mdi:shield-account-outline",
      },
      {
        title: "Booking Workflow",
        description:
          "Supports confirmation, cancellation, rescheduling, and OTC bookings with audit trails.",
        icon: "mdi:calendar-clock-outline",
      },
      {
        title: "Intelligent Class Search",
        description:
          "Multi-criteria filters for category, topic, level, mode, and duration.",
        icon: "mdi:magnify",
      },
      {
        title: "User Profile Dashboard",
        description:
          "User registration with editable profiles and activity history.",
        icon: "mdi:account-cog-outline",
      },
      {
        title: "Class Management (CRUD)",
        description:
          "Create, update, and manage classes with validations and scheduling tools.",
        icon: "mdi:book-edit-outline",
      },
      {
        title: "Access Management",
        description:
          "Role and permission controls for partners and internal users.",
        icon: "mdi:lock-check-outline",
      },
      {
        title: "Reports & Dashboards",
        description:
          "Visual dashboards and exportable reports for attendance, revenue, and more.",
        icon: "mdi:chart-box-outline",
      },
      {
        title: "Bulk Upload Support",
        description:
          "Upload entries and memberships in bulk, segmented by country.",
        icon: "mdi:file-upload-outline",
      },
      {
        title: "Banner Management",
        description:
          "Create, schedule, and rotate promotional banners across the platform.",
        icon: "mdi:television-play",
      },
    ],
  },
  challengeSolution: {
    challenges: [
      {
        title: "Complex Booking Workflows",
        desc: "Reliable handling of cancellations, rescheduling and OTC bookings without data inconsistencies.",
        icon: "mdi:calendar-remove-outline",
      },
      {
        title: "Advanced Class Search",
        desc: "Fast, multi‑criteria filtering (category, topic, level, mode, duration) at scale.",
        icon: "mdi:magnify",
      },
      {
        title: "Partner & Role Management",
        desc: "Securely managing partner profiles, roles and permissions across distributed servers.",
        icon: "mdi:account-key-outline",
      },
      {
        title: "High‑Volume Registrations",
        desc: "Maintaining performance and responsiveness under concurrent sign‑ups.",
        icon: "mdi:server-network",
      },
      {
        title: "Payment Gateway Integration",
        desc: "Ensuring reliable transactions, retries and reconciliation across AsiaPay and Adyen.",
        icon: "mdi:credit-card-outline",
      },
      {
        title: "Real‑Time Reporting",
        desc: "Delivering up‑to‑date operational metrics without overloading the database.",
        icon: "mdi:chart-box-outline",
      },
    ],
    solutions: [
      {
        title: "Modular Booking Engine",
        desc: "Isolated workflow components for booking, cancellation and OTC flows with state‑rollback support.",
        icon: "mdi:calendar-sync-outline",
      },
      {
        title: "Indexed Search & Caching",
        desc: "Server‑side filters on indexed columns plus query‑result caching for sub‑second performance.",
        icon: "mdi:database-search-outline",
      },
      {
        title: "Role‑Based Security",
        desc: "ASP.NET Identity with custom roles/claims enforced at MVC and API tiers.",
        icon: "mdi:shield-key-outline",
      },
      {
        title: "Scalable Deployment",
        desc: "IIS Web Farms on AWS EC2, SQL clustering and distributed caching to handle peak loads.",
        icon: "mdi:cloud-outline",
      },
      {
        title: "Unified Payment Service Layer",
        desc: "Wrappers around AsiaPay and Adyen SDKs with built‑in retry logic and transaction logging.",
        icon: "mdi:credit-card-sync-outline",
      },
      {
        title: "SignalR‑Driven Dashboards",
        desc: "Real‑time push updates for admin KPIs, backed by pre‑aggregated metrics tables.",
        icon: "mdi:chart-timeline-variant",
      },
    ],
  },
  projectSnippets: {
    projectSnippets: [
      {
        id: 1,
        title: "Dynamic Booking Experience",
        description: "Streamlined UI for intuitive booking and tracking.",
        category: "acca",
        image: AppIcons.accaAddmin1,
      },
      {
        id: 2,
        title: "Responsive Dashboard",
        description: "Mobile-friendly admin dashboard with rich reporting.",
        category: "acca",
        image: AppIcons.accaAddmin2,
      },
      {
        id: 3,
        title: "Real-Time Admin Insights",
        description: "SignalR-powered updates on registrations and revenue.",
        category: "acca",
        image: AppIcons.accaAddmin3,
      },
      {
        id: 4,
        title: "Role Management",
        description: "Granular control for partners and internal users.",
        category: "acca",
        image: AppIcons.accaAddmin4,
      },
      {
        id: 5,
        title: "Role Management",
        description: "Granular control for partners and internal users.",
        category: "acca",
        image: AppIcons.accaAddmin5,
      },
      {
        id: 6,
        title: "Role Management",
        description: "Granular control for partners and internal users.",
        category: "acca",
        image: AppIcons.accaAddmin6,
      },
    ],
  },
  testimonialSection: {
    rating: 5,
    quote:
      "The system has streamlined our CPD operations globally. It's intuitive, reliable, and aligned perfectly with our compliance needs.",
    author: "Global PD Manager",
    title: "ACCA",
  },
  resultsSection: {
    title: "Business Values Provided",
    description:
      "The platform enhanced user experience, ensured audit compliance, and scaled to meet global demands.",
    values: [
      {
        title: "Enhanced Member Engagement & Satisfaction",
        description:
          "Seamless onboarding, personalized class searches, and flexible booking options create a positive user experience.",
        icon: "mdi:account-heart-outline",
      },
      {
        title: "Scalable, Future‑Ready Platform",
        description:
          "Cloud-native infrastructure supports growth with modular architecture and high availability.",
        icon: "mdi:server-network-outline",
      },
      {
        title: "Stronger Partner Collaboration",
        description:
          "Dedicated partner access with performance dashboards enables transparent collaboration and reporting.",
        icon: "mdi:handshake-outline",
      },
      {
        title: "Improved Compliance & Auditability",
        description:
          "Exportable reports and access control systems ensure data integrity and audit readiness.",
        icon: "mdi:file-certificate-outline",
      },
      {
        title: "Seamless Learning Experience",
        description:
          "User-friendly interfaces and intelligent search help users find and engage with the right learning resources easily.",
        icon: "mdi:school-outline",
      },
    ],
  },
};

export default ACCAData;
