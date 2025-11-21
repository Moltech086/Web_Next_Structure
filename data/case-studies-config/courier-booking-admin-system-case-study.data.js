import { AppIcons } from "@/data/appIcons";
import { BASE_URL } from "@/lib/utils/baseUrl";

const kAndBCouriersData = {
  slug: "courier-booking-admin-system-case-study",
  heroSection: {
    title: "K&B Couriers",
    HeroImage: AppIcons.KBcouriers1,
    highlight: "Digital Transformation for Logistics",
    description:
      "Moltech Solutions collaborated with K&B Couriers to deliver a full-scale digital solution including a modern corporate website, custom admin portal, and backend APIs. The solution improved internal workflows, enforced validations, and delivered real-time logistics control—enhancing their operational performance and scalability.",
    location: {
      icon: "mdi:map-marker",
      label: "USA",
    },
    industry: {
      icon: "mdi:truck-fast-outline",
      label: "Logistics & Courier Services",
    },
    services: [
      {
        name: "Web Portal",
        icon: "mdi:monitor-dashboard",
        href: "/services/web-application-development",
      },
      {
        name: "Business Consulting",
        icon: "mdi:briefcase-outline",
        href: "/services/business-software-consulting",
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
  // metaConfig
metaConfig: {
  title:
    "Courier Booking & Admin System Case Study | Logistics Web & API Development - USA",
  description:
    "See how we helped a U.S.-based courier company streamline logistics with a custom admin portal, modern website, and real-time order APIs. Built for scalability, speed, and flexibility.",
  keywords:
    "courier admin portal development, logistics software USA, courier management system, API development for logistics, Dallas courier software, US courier company website, custom courier dashboard, order tracking software, ontime360 alternative, courier system modernization, logistics software development",
  canonical: `${BASE_URL}/case-study/courier-booking-admin-system-case-study`,
  author: "Moltech Solutions Inc.",
  language: "English",
  distribution: "Global",
  rating: "General",
  revisitAfter: "7 days",
  openGraph: {
    title:
      "Courier Booking & Admin System Case Study | Logistics Web & API Development - USA",
    description:
      "Discover how our Dallas-based team transformed courier operations with a custom admin portal, scalable APIs, and a responsive website for a U.S. logistics provider.",
    url: `${BASE_URL}/case-study/courier-booking-admin-system-case-study`,
    image: `${BASE_URL}/images/meta/courier-admin-og.webp`,
    type: "website",
    locale: "en_US",
    siteName: "Moltech Solutions Inc.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Courier Booking & Admin System Case Study | Logistics Web & API Development - USA",
    description:
      "Learn how our Dallas-based team built a flexible courier system with real-time order sync, driver assignment, and smart admin tools for logistics success.",
    image: `${BASE_URL}/images/meta/courier-admin-og.webp`,
    site: "@MoltechInc",
    creator: "@MoltechInc",
  },
},

  projectDetails: {
    description:
      "Moltech Solutions partnered with K&B Couriers to deliver a comprehensive digital solution that included a modern corporate website, a custom management portal, and a suite of backend APIs to support their courier operations.The website was redesigned to clearly communicate the company’s service offerings, improve lead generation, and ensure mobile responsiveness. In parallel, a powerful internal management portal was developed to streamline key operations such as client access, order management, and location tracking.Custom APIs were built to handle order processing, client data, and delivery workflows. This included secure service integrations, validation rules, and real-time data retrieval to support dynamic business needs. The system was designed with scalability, usability, and With performance in mind, K&B Couriers can ensure efficient management of their growing customer base and logistics operations.",
  },
  aboutSection: {
    description1:
      "K&B Couriers is a US-based logistics and courier service provider specializing in rapid, secure, and reliable deliveries across a range of industries. Their services include same-day courier, multi-drop delivery, haulage, and time-critical medical logistics. With a strong focus on responsiveness and customer satisfaction, K&B Couriers serves both individual and business clients with tailored delivery solutions. Their growing operations required a modern digital presence and a robust management system to streamline internal workflows and enhance service coordination.",
    industry: "Logistics & Courier Services",
    projectType: "Corporate Website + Admin Portal & API Development",
    technologies: [
      {
        name: "Windows Server IIS",
        icon: "mdi:server",
        description:
          "Web server hosting the application and services securely.",
      },
      {
        name: "MS SQL Server 2012+",
        icon: "simple-icons:microsoftsqlserver",
        description: "Relational database to manage logistics and client data.",
      },
      {
        name: "ASP.NET MVC 5.0",
        icon: "skill-icons:dotnet",
        description:
          "Powerful framework for scalable enterprise web applications.",
      },
      {
        name: "AJAX Toolkit",
        icon: "mdi:cached",
        description: "Asynchronous UI interactions and component updates.",
      },
      {
        name: "C#",
        icon: "logos:c-sharp",
        description: "Backend programming language for logic and services.",
      },
      {
        name: "AngularJS",
        icon: "skill-icons:angular-dark",
        description:
          "JavaScript framework for building dynamic web interfaces.",
      },
      {
        name: "jQuery",
        icon: "logos:jquery",
        description: "Simplified JavaScript for DOM manipulation and Ajax.",
      },
      {
        name: "JavaScript",
        icon: "logos:javascript",
        description:
          "Essential scripting language for dynamic and responsive features.",
      },
      {
        name: "HTML",
        icon: "logos:html-5",
        description: "Structured markup for modern and accessible websites.",
      },
      {
        name: "CSS",
        icon: "logos:css-3",
        description: "Stylesheets crafted for beautiful and responsive design.",
      },
      {
        name: "Bootstrap",
        icon: "logos:bootstrap",
        description:
          "Component framework for rapid and consistent UI development.",
      },

      {
        name: "SVN",
        icon: "mdi:source-branch",
        description: "Version control system used for codebase management.",
      },
    ],
  },
  majorFeatures: {
    features: [
      {
        title: "Corporate Website Redesign",
        description:
          "Clean, responsive website that reflects brand credibility.",
        icon: "mdi:monitor-cellphone",
      },
      {
        title: "Admin Portal Development",
        description:
          "Manage orders, clients, drivers, and validations via a central dashboard.",
        icon: "mdi:view-dashboard-edit",
      },
      {
        title: "Custom API Development",
        description:
          "Dynamic, scalable APIs to handle logistics and service data.",
        icon: "material-symbols:api",
      },
      {
        title: "Database Sync Tool",
        description:
          "Automated sync between Ontime360 data and custom DB for control.",
        icon: "mdi:database-sync-outline",
      },
      {
        title: "Advanced Search & Reporting",
        description:
          "Filter and export order data with custom reporting modules.",
        icon: "mdi:filter-cog",
      },
      {
        title: "Role-Based Authorization",
        description:
          "Controlled access for admins, dispatchers, and drivers via RBAC.",
        icon: "mdi:account-key",
      },
    ],
  },
  challengeSolution: {
    challenges: [
      {
        title: "Limitations of Ontime360",
        desc: "Lacked customization and detailed access control for operations.",
        icon: "mdi:alert-outline",
      },
      {
        title: "Data Integration Gaps",
        desc: "Difficult to sync structured data into a flexible reporting system.",
        icon: "mdi:database-arrow-down",
      },
      {
        title: "Missing Custom Validations",
        desc: "Couldn’t enforce business-specific rules like location restrictions.",
        icon: "mdi:shield-remove-outline",
      },
    ],
    solutions: [
      {
        title: "Modern Public Website",
        desc: "Enhanced digital credibility and lead generation with a new website.",
        icon: "mdi:web",
      },
      {
        title: "Custom Admin Portal",
        desc: "Internal tool for managing clients, orders, and dispatch with ease.",
        icon: "mdi:account-cog",
      },
      {
        title: "Live Database Synchronization",
        desc: "Real-time sync enabling enriched data handling and validations.",
        icon: "mdi:database-sync",
      },
      {
        title: "Custom Validation Logic",
        desc: "Blocked outdated locations, ensured role-based control and security.",
        icon: "mdi:check-decagram",
      },
    ],
  },
  projectSnippets: {
    projectSnippets: [
      {
        id: 1,
        title: "Homepage Hero Section",
        description: "Stunning oceanfront view with modern booking interface",
        category: "KB Couriers",
        image: AppIcons.KBcouriers1,
      },
      {
        id: 2,
        title: "Homepage Hero Section",
        description: "Stunning oceanfront view with modern booking interface",
        category: "KB Couriers",
        image: AppIcons.KBcouriers2,
      },
      {
        id: 3,
        title: "Homepage Hero Section",
        description: "Stunning oceanfront view with modern booking interface",
        category: "KB Couriers",
        image: AppIcons.KBcouriers3,
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
    "The digital transformation delivered significant value across key business areas.",
  values: [
    {
      title: "Overcame Platform Limitations",
      description:
        "Migrated from rigid legacy systems to a flexible architecture that supported future growth and integrations.",
      icon: "mdi:cloud-sync-outline",
    },
    {
      title: "Improved Operational Efficiency",
      description:
        "Automated workflows and centralized controls significantly reduced manual work and improved coordination.",
      icon: "mdi:cog-sync-outline",
    },
    {
      title: "Faster & Smarter Order Processing",
      description:
        "Optimized backend systems enabled quicker processing, better inventory tracking, and fewer errors.",
      icon: "mdi:package-variant-closed-check",
    },
    {
      title: "Better Customer Experience",
      description:
        "A seamless UI, real-time updates, and self-service features enhanced overall satisfaction and trust.",
      icon: "mdi:account-heart-outline",
    },
  ],
}
,
};

export default kAndBCouriersData;
