import { BASE_URL } from "@/lib/utils/baseUrl";
import { AppIcons } from "../appIcons";

const CapitalandSfqbPlatformData = {
  slug: "skills-development-portal-case-study",
  heroSection: {
    title: "CapitaLand – SkillsFuture Queen Bee Programme",
    HeroImage: AppIcons.Capitaland2,
    highlight: "LMS + Admin Platform for Retail SME Upskilling",
    description:
      "Custom web and admin solution enabling Singapore’s retail SMEs to access curated learning and digital transformation resources through CapitaLand’s SkillsFuture Queen Bee Programme.",
    location: {
      icon: "mdi:map-marker",
      label: "Singapore",
    },
    industry: {
      icon: "mdi:office-building-marker-outline",
      label: "Real Estate & Retail",
    },
    services: [
      {
        name: "Web Application Development",
        icon: "mdi:web",
        href: "/services/web-application-development",
      },
      {
        name: "Admin Portal",
        icon: "mdi:view-dashboard-outline",
        href: "/services/web-application-development",
      },
      {
        name: "Learning Management System",
        icon: "mdi:book-open-page-variant-outline",
        href: "/services/custom-software-development",
      },
      {
        name: "Partner & Event Management",
        icon: "mdi:handshake-outline",
        href: "/services/business-software-consulting",
      },
    ],
    card: {
      mainIcon: "mdi:school-outline",
      lines: ["w-3-4", "w-1-2"],
      iconRow: [
        { icon: "mdi:calendar-check-outline", bg: "bg-blue" },
        { icon: "mdi:email-send-outline", bg: "bg-purple" },
        { icon: "mdi:chart-bar", bg: "bg-orange" },
      ],
    },
  },
  metaConfig: {
  title:
    "Skills Development Portal Case Study | Custom LMS & Admin Dashboard - USA",
  description:
    "We built a custom LMS and admin portal for a retail federation using .NET Core & React—supporting course booking, reporting, and digital workforce upskilling.",
  keywords:
    "We built a custom LMS and admin portal for a retail federation using .NET Core & React—supporting course booking, reporting, and digital workforce upskilling.",
  author: "Moltech Solutions Inc.",
  language: "English",
  distribution: "Global",
  rating: "General",
  revisitAfter: "7 days",
  canonical:
    `${BASE_URL}/case-study/skills-development-portal-case-study`,
  openGraph: {
    title:
      "Skills Development Portal Case Study | LMS & Admin Portal Development - USA",
    description:
      "See how Moltech Solutions Inc. (Dallas, USA) built a custom LMS with class booking, email automation, and partner management for a leading skills development program.",
    type: "website",
    url: `${BASE_URL}/case-study/skills-development-portal-case-study`,
    image: `${BASE_URL}/images/meta/skills-development-og.webp`,
    locale: "en_US",
    siteName: "Moltech Solutions Inc.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Skills Development Portal Case Study | LMS & Admin Portal Development - USA",
    description:
      "We developed a smart skills platform with React, .NET Core & Next.js for a leading retail initiative—featuring course booking, reports, and automation tools.",
    image: `${BASE_URL}/images/meta/skills-development-og.webp`,
    site: "@MoltechInc",
    creator: "@MoltechInc",
  },
}
,
  projectDetails: {
    description:
      "The platform empowers CapitaLand to deliver structured and impactful learning experiences to retail SMEs, supporting their transformation journey by streamlining booking, reporting, and partner engagement via a custom LMS and admin portal.",
  },
  aboutSection: {
    description1:
      "CapitaLand, through its SkillsFuture Queen Bee Programme (SFQB), supports Singapore’s retail SMEs by offering upskilling opportunities via advisory, structured learning, and curated events. This initiative is aimed at empowering retailers in the evolving retail economy.",
    description2:
      "The platform was designed to handle end-to-end course booking, resource sharing, and engagement tracking, while giving CapitaLand complete control via a comprehensive admin dashboard.",
    industry: "Real Estate & Retail",
    projectType: "Web Application + Admin Portal",
    technologies: [
      {
        name: "AWS EC2 + IIS (Windows Server)",
        icon: "logos:aws",
        description:
          "Web server hosted on AWS EC2 using IIS on Windows Server.",
      },
      {
        name: "MS SQL Server 2019",
        icon: "simple-icons:microsoftsqlserver",
        description: "Robust relational database for storing enterprise data.",
      },
      {
        name: "ASP.NET MVC 5.0",
        icon: "mdi:code-json",
        description:
          "Used for developing the admin panel and backend functionality.",
      },
      {
        name: ".NET Core 6",
        icon: "logos:dotnet",
        description:
          "Modern API backend and core logic handling for the web platform.",
      },
      {
        name: "Next.js",
        icon: "logos:nextjs-icon",
        description: "React-based frontend framework for SSR and performance.",
      },
      {
        name: "JQuery",
        icon: "skill-icons:jquery",
        description: "Simplified DOM manipulation and legacy browser support.",
      },
      {
        name: "Angular.js",
        icon: "logos:angular-icon",
        description: "Client-side dynamic features for admin and user views.",
      },
      {
        name: "JavaScript, HTML, CSS",
        icon: "logos:javascript",
        description: "Core web technologies for interactive user interfaces.",
      },
      {
        name: "Ajax",
        icon: "mdi:cached",
        description:
          "Used for asynchronous communication between client and server.",
      },
      {
        name: "Bootstrap",
        icon: "logos:bootstrap",
        description: "Mobile-first UI framework for responsive design.",
      },
      {
        name: "SVN",
        icon: "mdi:source-branch",
        description: "Version control system for managing codebase revisions.",
      },
      {
        name: "Distributed & Repository Pattern",
        icon: "octicon:repo-forked-16",
        description:
          "Application architecture pattern for clean, maintainable code.",
      },
    ],
  },
  majorFeatures: {
    features: [
      {
        title: "Course Booking Workflow",
        description:
          "Allows learners to cancel, reschedule, and track classes.",
        icon: "mdi:calendar-clock",
      },
      {
        title: "MIDAS Algorithm Search",
        description:
          "Smart class discovery based on category, topic, level, class mode, duration, and user intelligence.",
        icon: "mdi:filter-menu-outline",
      },
      {
        title: "Automated Email System",
        description:
          "Auto-notifications for bookings, cancellations, and class changes.",
        icon: "mdi:email-fast-outline",
      },
      {
        title: "Manage Classes",
        description: "Create and manage educational sessions and schedules.",
        icon: "mdi:book-open-variant",
      },
      {
        title: "Dashboard Overview",
        description:
          "Get insights into key activities and performance metrics.",
        icon: "mdi:view-dashboard-outline",
      },
      {
        title: "Admin Access Control",
        description: "Manage user roles, permissions, and system settings.",
        icon: "mdi:shield-account-outline",
      },
      {
        title: "Partner Management",
        description: "Manage partner profiles, permissions, and contributions.",
        icon: "mdi:account-tie",
      },
      {
        title: "Entry Management",
        description:
          "Track and organize incoming entries or class enrollments.",
        icon: "mdi:clipboard-list-outline",
      },
      {
        title: "Resource & Banner Management",
        description:
          "Organize downloadable resources and manage promotional banners.",
        icon: "mdi:file-document-multiple-outline",
      },
      {
        title: "Report Generation",
        description:
          "Generate reports for bookings, performance, and operations.",
        icon: "mdi:chart-bar",
      },
    ],
  },
  challengeSolution: {
    challenges: [
      {
        title: "Support SME Retailers’ Growth",
        desc: "CapitaLand aimed to empower SMEs in Singapore’s retail sector through the SkillsFuture Queen Bee program.",
        icon: "mdi:store-outline",
      },
      {
        title: "Complex Program Management",
        desc: "Needed an efficient way to manage skills development classes, events, and seminars post-COVID.",
        icon: "mdi:calendar-multiselect",
      },
      {
        title: "Limited Digital Infrastructure",
        desc: "Lacked a centralized system for registrations, payments, and content control.",
        icon: "mdi:server-off",
      },
    ],
    solutions: [
      {
        title: "Skills Development Portal",
        desc: "Developed a web application to streamline class, event, and seminar management.",
        icon: "mdi:school-outline",
      },
      {
        title: "E-Commerce Class Booking",
        desc: "Enabled class purchases with seamless registration and payment integration.",
        icon: "mdi:cart-outline",
      },
      {
        title: "Admin Dashboard",
        desc: "Provided content and user management tools for full control and flexibility.",
        icon: "mdi:view-dashboard-outline",
      },
      {
        title: "Empowering SME Retailers",
        desc: "Helped CapitaLand fulfill its role in bridging skills gaps and driving retail transformation.",
        icon: "mdi:account-group-outline",
      },
    ],
  },
  projectSnippets: {
    projectSnippets: [
      {
        id: 1,
        title: "Homepage Hero Section",
        description: "Stunning oceanfront view with modern booking interface",
        category: "Capitaland",
        image: AppIcons.Capitaland1,
      },
      {
        id: 2,
        title: "Room Gallery",
        description: "Interactive room showcase with detailed amenities",
        category: "Capitaland",
        image: AppIcons.Capitaland2,
      },
      {
        id: 3,
        title: "Mobile Responsive Design",
        description: "Seamless experience across all devices",
        category: "Capitaland",
        image: AppIcons.Capitaland3,
      },
      {
        id: 4,
        title: "CMS Dashboard",
        description: "User-friendly content management interface",
        category: "Capitaland",
        image: AppIcons.Capitaland4,
      },
      {
        id: 5,
        title: "Booking Integration",
        description: "Third-party booking system integration",
        category: "Capitaland",
        image: AppIcons.Capitaland5,
      },
      {
        id: 6,
        title: "Clean Homepage Layout",
        description: "Modern look with organized sections and dynamic CTA.",
        category: "Capitaland",
        image: AppIcons.Capitaland6,
      },
      {
        id: 7,
        title: "Homepage Hero Section",
        description: "Stunning oceanfront view with modern booking interface",
        category: "Capitaland",
        image: AppIcons.Capitaland7,
      },
      {
        id: 8,
        title: "Room Gallery",
        description: "Interactive room showcase with detailed amenities",
        category: "Capitaland",
        image: AppIcons.Capitaland8,
      },
      {
        id: 9,
        title: "Mobile Responsive Design",
        description: "Seamless experience across all devices",
        category: "Capitaland",
        image: AppIcons.Capitaland9,
      },
      {
        id: 10,
        title: "CMS Dashboard",
        description: "User-friendly content management interface",
        category: "Capitaland",
        image: AppIcons.Capitaland10,
      },
      {
        id: 11,
        title: "Booking Integration",
        description: "Third-party booking system integration",
        category: "Capitaland",
        image: AppIcons.Capitaland11,
      },
      {
        id: 12,
        title: "Clean Homepage Layout",
        description: "Modern look with organized sections and dynamic CTA.",
        category: "Capitaland",
        image: AppIcons.Capitaland12,
      },
    ],
  },
  // testimonialSection: {
  //   rating: 5,
  //   quote:
  //     "This platform has transformed how we deliver upskilling resources to retailers. From partner management to seamless class bookings, everything is now organized and scalable.",
  //   author: "Elaine Tan",
  //   title: "Programme Manager, SFQB – CapitaLand",
  // },
resultsSection: {
  title: "Business Values Provided",
  description:
    "The digital platform empowered stakeholders with tools for growth, training, and collaboration.",
  values: [
    {
      title: "Supports Singapore’s Retail SMEs",
      description:
        "Equipped small businesses with upskilling opportunities and digital tools for long-term transformation.",
      icon: "mdi:store-outline",
    },
    {
      title: "Easy Course Booking & Resource Access",
      description:
        "Streamlined interface allowed learners to register for programs and access learning materials effortlessly.",
      icon: "mdi:book-open-page-variant-outline",
    },
    {
      title: "Centralized Programme & Partner Management",
      description:
        "A single portal to manage training sessions, providers, schedules, and participant data efficiently.",
      icon: "mdi:trending-up",
    },
    {
      title: "Drives Sector-Wide Digital Transformation",
      description:
        "Supported CapitaLand’s mission to uplift retail SMEs through innovation and scalable technology.",
      icon: "mdi:transit-connection-variant",
    },
    {
      title: "Delivered with FlyingCape Technologies",
      description:
        "Built through a strategic partnership to ensure quality, reach, and long-term impact.",
      icon: "mdi:handshake-outline",
    },
  ],
}
,
};

export default CapitalandSfqbPlatformData;
