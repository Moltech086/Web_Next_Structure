import { AppIcons } from "@/data/appIcons";
import { BASE_URL } from "@/lib/utils/baseUrl";

const aurumPharmatechLLPData = {
  slug: "chemical-procurement-and-b2b-workflow-automation-case-study",

  metaConfig: {
    title:
      "Chemical Procurement & B2B Workflow Automation Case Study | Moltech Solutions Inc.",
    description:
      "Discover how Moltech Solutions built a modern e‑commerce & admin platform that streamlines chemical search, RFQ workflows, order processing, user management, and analytics for B2B operations.",

    keywords:
      "chemical procurement platform, B2B e‑commerce automation, RFQ workflow management, order management system, admin management tools, data analytics",
    canonical: `${BASE_URL}/case-study/chemical-procurement-and-b2b-workflow-automation-case-study`,
    author: "Moltech Solutions Inc.",
    language: "English",
    distribution: "Global",
    rating: "General",
    revisitAfter: "7 days",
    openGraph: {
      title:
        "Chemical Procurement & B2B Workflow Automation Case Study | Moltech Solutions Inc.",
      description:
        "Explore how Moltech Solutions created a unified web portal with seamless chemical search, RFQ submission, order tracking, secure user access, and real‑time analytics.",
      url: `${BASE_URL}/case-study/chemical-procurement-and-b2b-workflow-automation-case-study`,
      image: `${BASE_URL}/images/meta/chemical-procurement-and-b2b-workflow-automation-case-study.webp`,
      type: "website",
      locale: "en_US",
      siteName: "Moltech Solutions Inc.",
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Chemical Procurement & B2B Workflow Automation Case Study | Moltech Solutions",
      description:
        "See how Moltech Solutions delivered a full‑featured e‑commerce & admin system—RFQ workflows, order management, user controls, and analytics—for streamlined B2B operations.",
      image: `${BASE_URL}/images/meta/chemical-procurement-and-b2b-workflow-automation-case-study.webp`,
      site: "@MoltechInc",
      creator: "@MoltechInc",
    },
  },
  heroSection: {
    title: "Aurum Pharmatech LLP",
    HeroImage: AppIcons.Aurum1,
    highlight: "Chemical Distribution & E-Commerce",
    description:
      "We developed a modern e-commerce platform with an admin management system to enable easy product search, RFQ submission, and order processing for chemical products. The solution also equips the internal team with tools to efficiently manage RFQs, orders, user access, email communications, and product data with analytics.",
    location: {
      icon: "mdi:map-marker",
      label: "USA",
    },
    industry: {
      icon: "mdi:truck-fast-outline",
      label: "E-Commerce + Admin Management System",
    },
    services: [
      {
        name: "Web Portal",
        icon: "mdi:monitor-dashboard",
        href: "/services/web-application-development",
      },
      {
        name: "API Development",
        icon: "material-symbols:api",
        href: "/services/custom-software-development",
      },
      {
        name: "UI/UX Design",
        icon: "mdi:design",
        href: "/services/ui-ux-design-and-development",
      },
    ],
    card: {
      mainIcon: "mdi:web",
      lines: ["w-3-4", "w-1-2"],
      iconRow: [
        { icon: "mdi:truck-fast", bg: "bg-orange" },
        { icon: "mdi:database-sync", bg: "bg-green" },
        { icon: "mdi:cog-outline", bg: "bg-purple" },
      ],
    },
  },
  projectDetails: {
    description:
      "We developed a modern e-commerce platform with an admin management system to enable easy product search, RFQ submission, and order processing for chemical products. The solution also equips the internal team with tools to efficiently manage RFQs, orders, user access, email communications, and product data with analytics and system health monitoring.",
  },
  aboutSection: {
    description1:
      "Aurum Pharmatech LLP is a chemical and pharmaceutical product company aiming to simplify how researchers and businesses search, inquire, and order chemical products online while maintaining an efficient internal system for managing operations.",
    industry: "Chemical Distribution & E-Commerce",
    projectType: "E-Commerce + Admin Management System",
    technologies: [
      {
        name: "React.js",
        icon: "logos:react",
        description:
          "JavaScript library for building modern, interactive user interfaces.",
      },
      {
        name: "Next.js",
        icon: "logos:nextjs-icon",
        description:
          "React framework for server-side rendering and static site generation.",
      },
      {
        name: ".NET Core",
        icon: "devicon:dotnetcore",
        description:
          "Cross-platform framework for building scalable backend APIs and services.",
      },
      {
        name: "MS SQL Server",
        icon: "devicon:microsoftsqlserver-wordmark",
        description:
          "Relational database system for managing structured data securely.",
      },
      {
        name: "JavaScript",
        icon: "logos:javascript",
        description:
          "Essential scripting language for dynamic client-side functionality.",
      },
      {
        name: "HTML5",
        icon: "logos:html-5",
        description:
          "Standard markup language for creating structured web content.",
      },
      {
        name: "CSS3",
        icon: "logos:css-3",
        description:
          "Style sheet language used for designing visually appealing interfaces.",
      },
      {
        name: "Bootstrap",
        icon: "logos:bootstrap",
        description:
          "CSS framework for responsive and mobile-first web design.",
      },
    ],
  },
  majorFeatures: {
    features: [
      // Web Portal
      {
        title: "Web Portal",
        description:
          "Centralized platform for users to search chemicals and manage activities.",
        icon: "mdi:web",
      },
      {
        title: "Chemical Search",
        description:
          "Search by CAS No., MDL No., Catalog ID, SMILES, bulk and structure.",
        icon: "mdi:magnify",
      },
      {
        title: "RFQ Submission",
        description:
          "Seamless product inquiry workflow from search to request.",
        icon: "mdi:file-send-outline",
      },
      {
        title: "Order Management",
        description:
          "Track, manage, and reorder chemical products efficiently.",
        icon: "mdi:clipboard-list-outline",
      },
      {
        title: "User Management",
        description: "Secure login/signup with B2B user support and controls.",
        icon: "mdi:account-multiple",
      },
      {
        title: "Modern UI",
        description: "Clean, responsive interface designed for usability.",
        icon: "mdi:monitor-cellphone",
      },

      // Admin Panel
      {
        title: "Dashboard",
        description: "View real-time stats for orders, RFQs, users, and more.",
        icon: "mdi:view-dashboard-variant",
      },
      {
        title: "Product Upload Tool",
        description: "Quickly add and update chemical products in bulk.",
        icon: "mdi:upload-box",
      },
      {
        title: "Email Management",
        description:
          "Send automated, template-based emails for RFQs and orders.",
        icon: "mdi:email-send-outline",
      },
      {
        title: "RFQ & Order Management",
        description:
          "Review, assign, and fulfill customer inquiries and purchases.",
        icon: "mdi:clipboard-check-outline",
      },
      {
        title: "Analytics",
        description:
          "Track user behavior, orders, and trends for data-driven decisions.",
        icon: "mdi:chart-line",
      },
      {
        title: "Product & Master Data Management",
        description:
          "Control catalog content and structured product information.",
        icon: "mdi:database-settings-outline",
      },
      {
        title: "System Configuration",
        description:
          "Manage SMTP, monitor database health, and configure system settings.",
        icon: "mdi:cog-outline",
      },
      {
        title: "Data Import & Reports",
        description:
          "Bulk data entry tools and admin-level reporting capabilities.",
        icon: "mdi:file-chart-outline",
      },
    ],
  },
  challengeSolution: {
    challenges: [
      {
        title: "Fragmented Workflow",
        desc: "Product search, RFQs, and order management were disconnected processes.",
        icon: "mdi:vector-polyline-remove",
      },
      {
        title: "No Centralized Analytics",
        desc: "Lack of tracking and performance metrics for management decisions.",
        icon: "mdi:chart-box-outline",
      },
      {
        title: "Manual User & Email Handling",
        desc: "User onboarding and communication lacked automation and structure.",
        icon: "mdi:email-edit-outline",
      },
      {
        title: "Outdated B2B Interface",
        desc: "UI was not intuitive or optimized for modern B2B purchasing behaviors.",
        icon: "mdi:monitor-cellphone",
      },
      {
        title: "Chemical Catalog Management",
        desc: "Updating and maintaining chemical data was time-consuming and error-prone.",
        icon: "mdi:flask-outline",
      },
    ],
    solutions: [
      {
        title: "Unified Web Portal",
        desc: "Centralized system for chemical search, RFQ submission, and order processing.",
        icon: "mdi:web-box",
      },
      {
        title: "Comprehensive Admin Panel",
        desc: "Manage RFQs, users, products, and configuration in one streamlined dashboard.",
        icon: "mdi:view-dashboard-edit",
      },
      {
        title: "Automated Email Integration",
        desc: "Templated, system-driven emails for efficient customer communication.",
        icon: "mdi:email-send-outline",
      },
      {
        title: "Built-In Analytics & Monitoring",
        desc: "Gain insights into user behavior, system health, and sales performance.",
        icon: "mdi:chart-line-variant",
      },
      {
        title: "Modern B2B UI Design",
        desc: "Clean, responsive, and intuitive interface tailored for chemical buyers.",
        icon: "mdi:palette-swatch-outline",
      },
    ],
  },
  projectSnippets: {
    projectSnippets: [
      {
        id: 1,
        category: "Aurum Pharmatech LLP",
        image: AppIcons.Aurum1,
      },
      {
        id: 2,
        category: "Aurum Pharmatech LLP",
        image: AppIcons.Aurum2,
      },
      {
        id: 3,
        category: "Aurum Pharmatech LLP",
        image: AppIcons.Aurum3,
      },
      {
        id: 4,
        category: "Aurum Pharmatech LLP",
        image: AppIcons.Aurum4,
      },
      {
        id: 5,
        category: "Aurum Pharmatech LLP",
        image: AppIcons.Aurum5,
      },
      {
        id: 6,
        category: "Aurum Pharmatech LLP",
        image: AppIcons.Aurum6,
      },
      {
        id: 7,
        category: "Aurum Pharmatech LLP",
        image: AppIcons.Aurum7,
      },
      {
        id: 8,
        category: "Aurum Pharmatech LLP",
        image: AppIcons.Aurum8,
      },
      {
        id: 9,
        category: "Aurum Pharmatech LLP",
        image: AppIcons.Aurum9,
      },
    ],
  },
  resultsSection: {
    title: "Business Values Provided",
    description:
      "The digital transformation delivered significant value across key business areas.",
    values: [
      {
        title: "Simplified Chemical Procurement",
        description:
          "Streamlined product discovery, RFQ, and ordering in a centralized portal.",
        icon: "mdi:flask-round-bottom-outline",
      },
      {
        title: "Streamlined Internal Operations",
        description:
          "Centralized dashboards and automated tools reduced complexity and manual tasks.",
        icon: "mdi:cog-sync-outline",
      },
      {
        title: "Faster Product Updates",
        description:
          "Admin panel tools enabled quick catalog changes and reduced update delays.",
        icon: "mdi:database-refresh",
      },
      {
        title: "Automated Customer Communication",
        description:
          "System-driven email notifications improved customer engagement and reduced manual effort.",
        icon: "mdi:email-variant",
      },
      {
        title: "Data-Driven Insights",
        description:
          "Analytics and reporting modules empowered smarter business decisions.",
        icon: "mdi:chart-bar",
      },
      {
        title: "Enhanced User Experience",
        description:
          "Modern, responsive UI delivered better usability and built customer trust.",
        icon: "mdi:account-star-outline",
      },
    ],
  },
};

export default aurumPharmatechLLPData;
