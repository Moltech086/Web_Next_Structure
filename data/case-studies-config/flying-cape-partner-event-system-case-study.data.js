import { BASE_URL } from "@/lib/utils/baseUrl";
import { AppIcons } from "../appIcons";

const FlyingCapeData = {
  slug: "flying-cape-education-platform-case-study",
  metaConfig: {
  title:
    "Edtech solution based on mid assessment Case Study | WordPress Web Development for Financial Services - USA",
  description:
    "Flying Cape, a Singapore-based EdTech startup, partnered with Moltech to build a customized software platform that streamlines their operations. The solution allows them to easily manage partners, set up and configure classes such as events, webinars, courses, and assessment tests, and handle class bookings—all within one system. The platform was developed using ASP.NET MVC with the Razor view engine and is powered by AWS, including S3 for secure and scalable storage.",
  keywords:
    "accounting website development, financial services website USA, WordPress for accountants, CPA firm website design, tax audit web design, Dallas WordPress agency, multi-location website development, bookkeeping services site, ASC 842 website design, responsive accounting website, custom financial website USA",
  canonical:
    `${BASE_URL}/case-study/flying-cape-partner-event-system-case-study`,
  author: "Moltech Solutions Inc.",
  language: "English",
  distribution: "Global",
  rating: "General",
  revisitAfter: "7 days",
  openGraph: {
    title:
      "Edtech solution based on mid assessment Case Study | WordPress Web Development for Financial Services - USA",
    description:
      "Flying Cape, a Singapore-based EdTech startup, partnered with Moltech to build a powerful platform for managing partners, courses, events, webinars, and assessments—developed using ASP.NET MVC and AWS for seamless performance.",
    url:
      `${BASE_URL}/case-study/flying-cape-partner-event-system-case-study`,
    image:
      `${BASE_URL}/images/meta/flying-cape-partner-event-system-og.webp`,
    type: "website",
    locale: "en_US",
    siteName: "Moltech Solutions Inc.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Edtech solution based on mid assessment Case Study | WordPress Web Development for Financial Services - USA",
    description:
      "Flying Cape, a Singapore-based EdTech startup, partnered with Moltech to build a powerful platform for managing partners, courses, events, webinars, and assessments—developed using ASP.NET MVC and AWS for seamless performance.",
    image:
      `${BASE_URL}/images/meta/flying-cape-partner-event-system-og.webp`,
    site: "@MoltechInc",
    creator: "@MoltechInc",
  },
}
,
  heroSection: {
    title: "Flying Cape",
    HeroImage: AppIcons.flyingCape1,
    highlight: "Education & Learning Management Platform",
    description:
      "A scalable education portal offering seamless booking, intelligent class search, and administrative control for members, partners, and educational institutions.",
    location: {
      icon: "mdi:map-marker-outline",
      label: "Singapore",
    },
    industry: {
      icon: "mdi:school-outline",
      label: "Education & Learning Tech",
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
      mainIcon: "mdi:school",
      lines: ["w-4-5", "w-3-4"],
      iconRow: [
        { icon: "mdi:calendar-edit-outline", bg: "bg-blue" },
        { icon: "mdi:account-key-outline", bg: "bg-yellow" },
        { icon: "mdi:file-chart-outline", bg: "bg-green" },
      ],
    },
  },
  projectDetails: {
    description:
      "We designed and developed a unified web portal and admin console that empowers students with seamless self-registration, profile management, and a personalized dashboard featuring eWallet and Compass Point balances. The platform includes an intelligent algorithmic class search with filters by category, topic, level, mode, and duration, enabling one-click booking, cancellation, and rescheduling workflows. It also streamlines partner onboarding, profile and permission management, and centralized configuration of fields such as email templates, tags, and locations. The system supports secure multi-gateway payment processing with real-time booking confirmations, and provides a comprehensive analytics dashboard with exportable operational reports for data-driven decision-making.",
  },
  aboutSection: {
    description1:
      "Flying Cape is Singapore’s premier online booking and advisory platform for tuition and enrichment classes. Partnering with educators worldwide, Flying Cape delivers data‑driven recommendations to help learners discover the right classes for their needs—backed by a Best Price Guarantee. The platform tracks bookings, manages rewards (Compass Points), and ensures every student finds the optimal learning path.",
    industry:
      "Tuition & Enrichment Advisory Platform (K‑12 and adult learning services)",
    projectType: "Partner & Event Management System Development",
    technologies: [
      {
        name: "AWS EC2 (Windows Server, IIS)",
        icon: "logos:aws",
        description:
          "Cloud-based web server environment for hosting the application on Windows Server using IIS.",
      },
      {
        name: "Microsoft SQL Server 2019",
        icon: "devicon-plain:microsoftsqlserver-wordmark",
        description:
          "Relational database used for storing booking, user, and class-related data securely.",
      },
      {
        name: "ASP.NET MVC 5.0",
        icon: "logos:dotnet",
        description:
          "MVC framework used for building robust and scalable backend services.",
      },
      {
        name: "C#",
        icon: "logos:c-sharp",
        description:
          "Programming language used for server-side logic and application services.",
      },
      {
        name: "jQuery",
        icon: "skill-icons:jquery",
        description:
          "JavaScript library used for DOM manipulation and AJAX calls.",
      },
      {
        name: "AngularJS",
        icon: "logos:angular-icon",
        description: "Used for building dynamic front-end components.",
      },
      {
        name: "JavaScript",
        icon: "logos:javascript",
        description: "Core scripting language for front-end functionality.",
      },
      {
        name: "AJAX",
        icon: "material-symbols:sync-alt-rounded",
        description:
          "Used for asynchronous server communication without refreshing the page.",
      },
      {
        name: "HTML5",
        icon: "logos:html-5",
        description: "Markup language for structuring the web interface.",
      },
      {
        name: "CSS3",
        icon: "logos:css-3",
        description:
          "Used for designing and styling web pages with responsive design.",
      },
      {
        name: "Bootstrap 4",
        icon: "logos:bootstrap",
        description:
          "CSS framework for creating responsive layouts across all devices.",
      },
      {
        name: "SVN",
        icon: "logos:subversion",
        description:
          "Version control system used to manage source code changes and collaboration.",
      },
      {
        name: "Distributed Web Farms",
        icon: "icon-park-outline:server",
        description:
          "Scalable web architecture allowing load balancing and fault tolerance.",
      },
      {
        name: "Repository Pattern",
        icon: "carbon:data-base",
        description:
          "Design pattern used to abstract and encapsulate data access logic.",
      },
      {
        name: "AsiaPay",
        icon: "mdi:credit-card-outline",
        description: "Payment gateway used for secure online transactions.",
      },
      {
        name: "Mastercard DBS Payment",
        icon: "logos:mastercard",
        description:
          "Integrated payment gateway for Mastercard and DBS bank users.",
      },
      {
        name: "Singpass API",
        icon: "mdi:account-lock-outline",
        description:
          "Government identity verification API used for secure user onboarding.",
      },
    ],
  },
  majorFeatures: {
    features: [
      {
        title: "Member Portal",
        description:
          "Sign up and class booking, intelligent class search and filtering, attendance/rescheduling, refund requests, and profile management.",
        icon: "mdi:account-circle-outline",
      },
      {
        title: "Admin Portal",
        description:
          "Bulk class upload, partner/user management, dashboards, feedback reviews, exportable reports, and access role control.",
        icon: "mdi:shield-account-outline",
      },
      {
        title: "Business Values Provided",
        description:
          "Enhanced engagement, scalable infrastructure, strong partner collaboration, auditability, and frictionless learning.",
        icon: "mdi:school-outline",
      },
    ],
  },
  challengeSolution: {
    challenges: [
      {
        title: "Complex Booking Flows",
        desc: "Ensuring reliable cancellations, rescheduling, and OTC entries without data loss.",
        icon: "mdi:calendar-sync-outline",
      },
      {
        title: "Reward & eWallet Management",
        desc: "Tracking Compass Point accrual/redemption and wallet balances in real time.",
        icon: "mdi:wallet-outline",
      },
      {
        title: "Advanced Class Search",
        desc: "Multi‑criteria filtering at scale with sub‑second response times.",
        icon: "mdi:magnify-scan",
      },
      {
        title: "Partner & Role Security",
        desc: "Granular access control for hundreds of educational partners and internal admins.",
        icon: "mdi:shield-account-outline",
      },
      {
        title: "High‑Volume Traffic",
        desc: "Maintaining performance during peak enrollment periods.",
        icon: "mdi:chart-line",
      },
      {
        title: "Payment & Identity Integration",
        desc: "Coordinating AsiaPay, Mastercard, DBS, and SingPass API calls with robust error handling.",
        icon: "mdi:credit-card-check-outline",
      },
    ],
    solutions: [
        {
            title: "Decoupled Workflow Modules",
            desc: "Separate services for booking, cancellation, rescheduling, and OTC operations, with transaction rollback support.",
            icon: "hugeicons:workflow-square-09",
          },
      {
        title: "Reward Engine",
        desc: "Centralized eWallet service managing Compass Point logic, synced with user dashboards via SignalR.",
        icon: "mdi:gift-outline",
      },
      {
        title: "Indexed, Cached Search",
        desc: "ASP.NET Identity with custom claims for partner as opposed to admin versus super‑admin roles.",
        icon: "mdi:database-search-outline",
      },
      {
        title: "Role‑Based Access Control",
        desc: "Intuitive layout with personalized filters and streamlined actions.",
        icon: "mdi:account-key-outline",
      },
      {
        title: "Auto‑Scaling Infrastructure",
        desc: "AWS EC2 Auto Scaling Groups and SQL Server clustering to absorb peak loads.",
        icon: "mdi:cloud-upload-outline",
      },
      {
        title: "Unified Integration Layer",
        desc: "Wrappers for payment gateways and Singpass API with retry logic, logging, and failover procedures.",
        icon: "mdi:link-variant-plus",
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
        image: AppIcons.flyingCape1,
      },
      {
        id: 2,
        title: "Responsive Dashboard",
        description: "Mobile-friendly admin dashboard with rich reporting.",
        category: "acca",
        image: AppIcons.flyingCape2,
      },
      {
        id: 3,
        title: "Real-Time Admin Insights",
        description: "SignalR-powered updates on registrations and revenue.",
        category: "acca",
        image: AppIcons.flyingCape3,
      },
      {
        id: 4,
        title: "Role Management",
        description: "Granular control for partners and internal users.",
        category: "acca",
        image: AppIcons.flyingCape4,
      },
      {
        id: 5,
        title: "Role Management",
        description: "Granular control for partners and internal users.",
        category: "acca",
        image: AppIcons.flyingCape5,
      },
      {
        id: 6,
        title: "Role Management",
        description: "Granular control for partners and internal users.",
        category: "acca",
        image: AppIcons.flyingCape6,
      },
    ],
  },
  testimonialSection: {
    rating: 5,
    quote:
      "We are very happy Moltech customers! Apart from their technical expertise and professionalism, Nigam and team have been extremely reliable and dedicated throughout I would highly recommend their services with confidence.",
    author: "Jamie Tan",
    title: "CEO at Flying Cape Organization",
  },
  resultsSection: {
    title: "Business Values Provided",
    description:
      "Our unified platform delivers measurable impact by enhancing learner engagement, optimizing revenue, streamlining operations, and ensuring security—all while offering a seamless, scalable experience.",
    values: [
      {
        title: "Personalized Learner Engagement",
        description:
          "Smart search, customized dashboards, and targeted features ensure every learner gets a relevant and engaging experience.",
        icon: "mdi:account-heart-outline",
      },
      {
        title: "Revenue Growth & Yield Optimization",
        description:
          "Real-time booking, flexible payment integration, and partner management unlock new revenue streams and improve booking rates.",
        icon: "mdi:chart-line-variant",
      },
      {
        title: "Operational Efficiency",
        description:
          "Admin tools like bulk uploads, field configuration, and exportable reports reduce overhead and improve team productivity.",
        icon: "mdi:cog-outline",
      },
      {
        title: "Scalable, Resilient Platform",
        description:
          "Built to grow with you—supporting increasing users, partners, and evolving educational needs without compromise.",
        icon: "mdi:server-network-outline",
      },
      {
        title: "Enhanced Security & Compliance",
        description:
          "Secure access control, attendance tracking, and detailed reporting meet stringent data protection and audit standards.",
        icon: "mdi:shield-check-outline",
      },
      {
        title: "Seamless User Experience",
        description:
          "From sign-up to class rescheduling, every touchpoint is designed for intuitive navigation and minimal friction.",
        icon: "mdi:gesture-tap-button",
      },
    ],
  },
};

export default FlyingCapeData;
