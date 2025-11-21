import { BASE_URL } from "@/lib/utils/baseUrl";
import { AppIcons } from "../appIcons";

const TotalScopeData = {
  slug: "legacy-system-modernization-platform-case-study",
  heroSection: {
    title: "Total Scope, Inc.",
    HeroImage: AppIcons.TotalScopeInc1,
    highlight: "Legacy System Modernization",
    description:
      "We modernized Total Scope’s legacy VB-based operations platform into a modular, scalable web portal, enabling efficient management of scopes, tasks, inventory, and repairs for medical equipment maintenance.",
    location: {
      icon: "mdi:map-marker-outline",
      label: "USA",
    },
    industry: {
      icon: "mdi:stethoscope",
      label: "Medical Equipment Repair & Maintenance",
    },
    services: [
      {
        name: "Legacy System Modernization",
        icon: "mdi:update",
        href: "/services/custom-software-development",
      },
      {
        name: "Workflow Automation",
        icon: "mdi:progress-wrench",
        href: "/services/business-software-consulting",
      },
      {
        name: "Inventory & Repair Management",
        icon: "mdi:toolbox-outline",
        href: "/services/custom-software-development",
      },
      {
        name: "Modular Web Portal",
        icon: "mdi:web",
        href: "/services/custom-software-development",
      },
    ],
    card: {
      mainIcon: "app",
      lines: ["w-4-5", "w-3-4"],
      iconRow: [
        { icon: "mdi:tools", bg: "bg-blue" },
        { icon: "mdi:database-sync", bg: "bg-yellow" },
        { icon: "mdi:account-cog-outline", bg: "bg-green" },
      ],
    },
  },
  metaConfig: {
  title: "Legacy System Modernization for Medical Equipment Firms",
  description:
    "Modernize your legacy software with scalable web-based platforms. Custom solutions for medical repair & maintenance companies. Built by experts in Dallas, USA.",
  keywords:
    "legacy system modernization, vb to web migration, medical equipment software, repair tracking portal, .NET Core development, React web app USA, Dallas tech company",
  canonical:
    `${BASE_URL}/case-study/legacy-system-modernization-platform-case-study`,
  author: "Moltech Solutions Inc.",
  language: "English",
  distribution: "Global",
  rating: "General",
  revisitAfter: "7 days",
  openGraph: {
    title: "Legacy System Modernization for Medical Equipment Firms",
    description:
      "Scalable web platform replacing legacy VB systems for medical repair firms. Custom-built with .NET Core and React. Developed in Dallas, USA.",
    url: `${BASE_URL}/case-study/legacy-system-modernization-platform-case-study`,
    image:
      `${BASE_URL}/images/meta/legacy-modernization.webp`,
    type: "website",
    locale: "en_US",
    siteName: "Moltech Solutions Inc.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legacy System Modernization for Medical Equipment Firms",
    description:
      "Custom web-based software replacing legacy VB systems for medical repair providers. Developed by Moltech in Dallas, USA.",
    image:
      `${BASE_URL}/images/meta/legacy-modernization.webp`,
    site: "@MoltechInc",
    creator: "@MoltechInc",
  },
}
,
  projectDetails: {
    description:
      "We are rebuilding Total Scope’s operational platform, transitioning from a VB-based legacy system to a modular, scalable web application. The new platform includes modules for workspace management, scopes, tasks, loaners, inventory, repairs, financial operations, quality tracking, and detailed reporting while aligning with Total Scope’s structured workflow in scope management, repair cycles, and client communications. The project is being executed in well-defined phases to ensure smooth and systematic development. So far, key components such as Scopes, Tasks, and the Workspace Dashboard have been successfully completed. Currently, the team is actively working on modules including Loaners, Emails, Shipping Status, Inventory, Acquisitions, and Repairs. Looking ahead, the planned development will focus on important areas like Contracts, Carts, Quality, Financials, Advanced Reporting, Administration, and Tools to complete the full project scope.",
  },
  aboutSection: {
    description1:
      "Total Scope, Inc. is a leading provider of endoscopic equipment repair and maintenance services for healthcare providers, surgery centers, hospitals, and OEMs across the USA. With a commitment to exceptional service quality and cost-effective repairs, Total Scope has been a trusted partner in extending the life of critical medical equipment while ensuring patient safety and operational efficiency.",
    description2:
      "Total Scope was using a legacy system built on old VB technology for its day-to-day workflows, tracking scopes, repairs, inventory, and customer interactions. To improve operational efficiency, scalability, and maintainability, we are migrating their entire system to a modern web-based platform.",
    industry: "Medical Equipment Services",
    projectType: "Legacy System Modernization & Web Portal",
    technologies: [
      {
        name: "React.js",
        icon: "logos:react",
        description:
          "Modern UI development using component-based architecture.",
      },
      {
        name: ".NET Core API",
        icon: "logos:dotnet",
        description: "Robust backend services with RESTful API support.",
      },
      {
        name: "SQL Server",
        icon: "logos:mysql",
        description: "Structured data management and transactional operations.",
      },
      {
        name: "REST API Development",
        icon: "tabler:api",
        description: "Consistent and scalable communication between systems.",
      },
      {
        name: "JavaScript",
        icon: "logos:javascript",
        description:
          "Dynamic scripting language for client-side functionality.",
      },
      {
        name: "TypeScript",
        icon: "logos:typescript-icon",
        description:
          "Strongly typed JavaScript for scalable, maintainable code.",
      },
      {
        name: "HTML",
        icon: "logos:html-5",
        description: "Semantic markup for structured web content.",
      },
      {
        name: "CSS",
        icon: "logos:css-3",
        description:
          "Styling and layout control for visually engaging web interfaces.",
      },
      {
        name: "Bootstrap",
        icon: "logos:bootstrap",
        description: "Framework for responsive, mobile-first UI design.",
      },

      // {
      //   name: "Role-Based Authentication & Authorization",
      //   icon: "mdi:account-lock",
      //   description: "Secure and customizable access control mechanisms.",
      // },
      {
        name: "Repository Pattern",
        icon: "mdi:source-repository",
        description:
          "Abstraction layer for data access and business logic separation.",
      },
      // {
      //   name: "Modular Architecture",
      //   icon: "mdi:package-variant",
      //   description: "Scalable architecture with clear separation of concerns.",
      // },
      // {
      //   name: "Third-party Integrations",
      //   icon: "tabler:plug-connected",
      //   description: "Seamless integration with logistics and finance systems.",
      // }
    ],
  },
  majorFeatures: {
    features: [
      {
        title: "My Workspace & Dashboard",
        description:
          "A live operational dashboard to manage tasks, scopes, and workspace activities.",
        icon: "mdi:view-dashboard-outline",
      },
      {
        title: "Scopes & Tasks Management",
        description:
          "Handle lifecycle workflows of scope repairs, from intake to task completion.",
        icon: "mdi:clipboard-edit-outline",
      },
      {
        title: "Loaners & Shipping Status Tracking",
        description:
          "Track equipment loaners and monitor real-time shipping status throughout the process.",
        icon: "mdi:truck-delivery-outline",
      },
      {
        title: "Inventory Management",
        description:
          "Manage suppliers, purchase orders, and receiving workflows to streamline inventory operations.",
        icon: "mdi:warehouse",
      },
      {
        title: "Repair Workflow & Specifications Management",
        description:
          "Standardize and track the repair lifecycle and technical specifications for devices.",
        icon: "mdi:tools",
      },
      {
        title: "Contracts & Acquisitions (Planned)",
        description:
          "Future module for managing vendor contracts, acquisitions, and legal compliance.",
        icon: "mdi:file-document-outline",
      },
      {
        title: "Quality & Financial Modules (Planned)",
        description:
          "Planned modules for tracking quality assurance metrics and financial data.",
        icon: "mdi:finance",
      },
      {
        title: "Comprehensive Reporting & Extract Tools",
        description:
          "Generate detailed reports and extract insights for operational and strategic decisions.",
        icon: "mdi:chart-box-outline",
      },
      {
        title: "Administration: Security & Role Management",
        description:
          "Set up secure access with detailed role-based permissions and controls.",
        icon: "mdi:shield-account-outline",
      },
      {
        title: "User & Group Management",
        description:
          "Manage users, groups, and access levels across the platform.",
        icon: "mdi:account-group-outline",
      },
      {
        title: "Menu & Access Management",
        description:
          "Control navigation structure, visibility, and module access permissions.",
        icon: "mdi:view-list-outline",
      },
      {
        title: "Instrument & Pricing Management",
        description:
          "Manage instrument metadata, service types, and pricing structures.",
        icon: "mdi:cash-multiple",
      },
      {
        title: "Search & Advanced Filters",
        description:
          "Powerful cross-module search with advanced filtering capabilities.",
        icon: "mdi:filter-menu-outline",
      },
      {
        title: "Reference Tables, Tools, and Staff Management (Planned)",
        description:
          "Future-ready modules for reference data, tools management, and staff directories.",
        icon: "mdi:table-settings",
      },
    ],
  },
  challengeSolution: {
    challenges: [
      {
        title: "Legacy VB System Limitations",
        desc: "The limitations of the legacy VB system make it difficult to scale, maintain, and integrate with modern systems.",
        icon: "mdi:application-cog-outline",
      },
      {
        title: "Outdated Workflow Processes",
        desc: "Complex workflows for scope tracking, repairs, and inventory management needed modernization.",
        icon: "mdi:sync-alert",
      },
      {
        title: "Lack of Secure Role-Based Access",
        desc: "Secure, role-based access control was necessary for departments and teams.",
        icon: "mdi:account-lock-outline",
      },
      {
        title: "Inefficient Reporting System",
        desc: "Reporting and extract generation were slow and inflexible.",
        icon: "mdi:file-clock-outline",
      },
      {
        title: "Scalability Challenges",
        desc: "We required a scalable, modular architecture to facilitate future growth and integration.",
        icon: "mdi:graph-outline",
      },
    ],
    solutions: [
      {
        title: "Modular & Scalable Architecture",
        desc: "Designed a modular, scalable architecture for seamless future expansion.",
        icon: "mdi:architecture",
      },
      {
        title: "Responsive Web Platform",
        desc: "Built a responsive, web-based platform accessible across devices.",
        icon: "mdi:monitor-cellphone",
      },
      {
        title: "Secure Role-Based Access",
        desc: "Implemented secure, role-based authentication and authorization.",
        icon: "mdi:account-key-outline",
      },
      {
        title: "Modernized Workflow System",
        desc: "Migrated and modernized workflows for scopes, tasks, and workspace dashboards.",
        icon: "mdi:clipboard-flow-outline",
      },
      {
        title: "Inventory & Quality Modules",
        desc: "Prepared structured modules for inventory, financial, and quality management.",
        icon: "mdi:warehouse",
      },
      {
        title: "Advanced Reporting & Extracts",
        desc: "Integrated planning for advanced reporting, extract generation, and analytics.",
        icon: "mdi:chart-box-outline",
      },
    ],
  },

  projectSnippets: {
    projectSnippets: [
      {
        id: 1,
        title: "Clean Homepage Layout",
        description: "Modern look with organized sections and dynamic CTA.",
        category: "TotalScope",
        image: AppIcons.TotalScopeInc1,
      },
      {
        id: 2,
        title: "SEO Optimized Content",
        description: "Structured content aligned with SEO best practices.",
        category: "TotalScope",
        image: AppIcons.TotalScopeInc2,
      },
      {
        id: 3,
        title: "Mobile-First Design",
        description: "Optimized layout for seamless access on all devices.",
        category: "TotalScope",
        image: AppIcons.TotalScopeInc3,
      },
      {
        id: 4,
        title: "Services Showcase",
        description: "Dedicated sections for services and industry value.",
        category: "TotalScope",
        image: AppIcons.TotalScopeInc4,
      },
      {
        id: 5,
        title: "Services Showcase",
        description: "Dedicated sections for services and industry value.",
        category: "TotalScope",
        image: AppIcons.TotalScopeInc5,
      },
      {
        id: 6,
        title: "Services Showcase",
        description: "Dedicated sections for services and industry value.",
        category: "TotalScope",
        image: AppIcons.TotalScopeInc6,
      },
      {
        id: 7,
        title: "SEO Optimized Content",
        description: "Structured content aligned with SEO best practices.",
        category: "TotalScope",
        image: AppIcons.TotalScopeInc7,
      },
      {
        id: 8,
        title: "Interactive Dashboard Views",
        description: "Custom dashboards to display project insights and KPIs.",
        category: "TotalScope",
        image: AppIcons.TotalScopeInc8,
      },
      {
        id: 9,
        title: "Contact & Map Integration",
        description:
          "Embedded maps and contact forms for seamless communication.",
        category: "TotalScope",
        image: AppIcons.TotalScopeInc9,
      },
    ],
  },

  testimonialSection: {
    rating: 5,
    quote:
      "I’ve had the pleasure of working with Nigam since 2005 across a number of projects and client accounts. Over the years, Nigam and his development team have consistently delivered outstanding work across a wide range of technologies. Their depth of expertise, attention to detail, and commitment to client success have always stood out.",
    author: "Carl Auwarter",
    title: "USA",
  },
resultsSection: {
  title: "Business Values Provided",
  description:
    "The solution empowered the organization with automation, efficiency gains, and a scalable foundation for future growth.",
  values: [
    {
      title: "Modernized Workflow Automation",
      description: "Replaced legacy processes with streamlined, rule-based automation.",
      icon: "mdi:robot-outline",
    },
    {
      title: "Improved Operational Efficiency",
      description: "Reduced manual intervention and accelerated task completion across teams.",
      icon: "mdi:progress-clock",
    },
    {
      title: "Future-Ready Scalability",
      description: "Built on a flexible architecture ready to support expansion and new workflows.",
      icon: "mdi:rocket-launch",
    },
  ],
}
,
};
export default TotalScopeData;
