import { BASE_URL } from "@/lib/utils/baseUrl";
import { AppIcons } from "../appIcons";

const TMSData = {
  slug: "project-collaboration-and-tracking-platform-case-study",

  heroSection: {
    title: "TMS Platform",
    HeroImage: AppIcons.TMS1,
    highlight: "Project & Team Management System",
    description:
      "We developed a centralized, modular platform for a USA-based project management firm to streamline team operations, resource allocation, and project tracking. The system enhances visibility, collaboration, and delivery timelines across internal and external projects.",
    location: {
      icon: "mdi:map-marker-outline",
      label: "USA – Project Management Sector",
    },
    industry: {
      icon: "mdi:briefcase-check-outline",
      label: "Team & Project Management",
    },
    services: [
      {
        name: "Timesheet Tracking",
        icon: "mdi:clock-outline",
        href: "/services/business-software-consulting",
      },
      {
        name: "Team Planning",
        icon: "mdi:account-group-outline",
        href: "/services/business-software-consulting",
      },
      {
        name: "Backlog & Task Management",
        icon: "mdi:clipboard-list-outline",
        href: "/services/custom-software-development",
      },
      {
        name: "Role-Based Access",
        icon: "mdi:shield-key-outline",
        href: "/services/web-application-development",
      },
      {
        name: "Report Generation",
        icon: "mdi:chart-box-outline",
        href: "/services/business-software-consulting",
      },
    ],
    card: {
      mainIcon: "mdi:view-dashboard-outline",
      lines: ["w-4-5", "w-3-4"],
      iconRow: [
        { icon: "mdi:account-group-outline", bg: "bg-green" },
        { icon: "mdi:clock-check-outline", bg: "bg-blue" },
        { icon: "mdi:clipboard-text-clock-outline", bg: "bg-yellow" },
      ],
    },
  },
  metaConfig: {
  title: "Team & Project Management Software | Custom Tracking Solutions",
  description:
    "Boost efficiency with custom project collaboration software. Manage teams, timesheets, and planning with secure, scalable solutions. Built in Dallas for USA clients.",
  keywords:
    "project management software, team collaboration tool, timesheet tracker, React project portal, .NET Core app, Dallas software company, USA tech partner",
  canonical:
    `${BASE_URL}/case-study/project-collaboration-and-tracking-platform-case-study`,
  author: "Moltech Solutions Inc.",
  language: "English",
  distribution: "Global",
  rating: "General",
  revisitAfter: "7 days",
  openGraph: {
    title: "Team & Project Management Software | Custom Tracking Solutions",
    description:
      "Boost productivity with a secure, scalable project tracking platform. Designed for USA businesses. Built with .NET Core and React in Dallas.",
    url: `${BASE_URL}/case-study/project-collaboration-and-tracking-platform-case-study`,
    image: `${BASE_URL}/images/meta/project-management-og.webp`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Team & Project Management Software | Custom Tracking Solutions",
    description:
      "Boost productivity with a secure, scalable project tracking platform. Designed for USA businesses. Built with .NET Core and React in Dallas.",
    image: `${BASE_URL}/images/meta/project-management-og.webp`,
    site: "@MoltechInc",
    creator: "@MoltechInc",
  },
}
,
  projectDetails: {
    description:
      "We developed a robust project and team management system, providing the company with a centralized platform to manage customers, projects, teams, and user roles while supporting detailed timesheet management and project synergy tracking. The system streamlines project lifecycle management—from backlog planning to team allocation and task monitoring—while providing insightful reports for project health and team productivity, empowering the company to handle complex projects efficiently.",
  },
  aboutSection: {
    description1:
      "This US-based project management firm needed an internal solution to digitize project allocation, employee performance tracking, timesheet submissions, and backlog handling to better deliver results across distributed teams.",
    description2:
      "We delivered a full-featured management system offering project health metrics, task configuration, role-based controls, sprint planning, and timesheet workflow support—all within a single collaborative platform.",
    industry: "Project Management, SaaS",
    projectType: "Ongoing Modular Project & Resource Management System",
    technologies: [
      {
        name: "React.js",
        icon: "logos:react",
        description:
          "Frontend developed using React.js for a fast, dynamic UI experience.",
      },
      {
        name: ".NET Core API",
        icon: "logos:dotnet",
        description:
          "Robust and secure backend built using scalable .NET Core APIs.",
      },
      {
        name: "SQL Server",
        icon: "logos:mysql",
        description:
          "Secure relational database used for storing and managing structured data.",
      },
      {
        name: "REST API",
        icon: "mdi:api",
        description:
          "RESTful API endpoints enable seamless frontend-backend communication.",
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
          "Style sheet language used for designing visually appealing web pages.",
      },
      {
        name: "Bootstrap",
        icon: "logos:bootstrap",
        description:
          "Popular CSS framework for building responsive, mobile-first web interfaces.",
      },
      {
        name: "JavaScript",
        icon: "logos:javascript",
        description:
          "Core scripting language used to add dynamic behavior to web interfaces.",
      },
      {
        name: "TypeScript",
        icon: "logos:typescript-icon",
        description:
          "Superset of JavaScript that adds type safety for scalable development.",
      },
      {
        name: "jQuery",
        icon: "skill-icons:jquery",
        description:
          "Lightweight JavaScript library for DOM manipulation and event handling.",
      },
      // {
      //   name: "Role-Based Authentication & Authorization",
      //   icon: "mdi:shield-lock-outline",
      //   description:
      //     "Secure access control system with user roles and permissions.",
      // },
      // {
      //   name: "Modular Distributed Architecture",
      //   icon: "mdi:layers-triple-outline",
      //   description:
      //     "System built with scalable, decoupled modules following the Repository Pattern.",
      // },
      // {
      //   name: "Email Notification & Template System",
      //   icon: "mdi:email-outline",
      //   description:
      //     "Supports automated alerts and customizable communication templates.",
      // },
    ],
  },
  majorFeatures: {
    features: [
      {
        title: "Admin Module",
        description:
          "Manage organizations, locations, global settings, user roles, customers, teams, and email templates from a centralized admin panel.",
        icon: "mdi:cog-outline",
      },
      {
        title: "Timesheet Management",
        description:
          "Log timesheet entries, review submissions for approval, and generate reports to gain insights into resource productivity.",
        icon: "mdi:clock-check-outline",
      },
      {
        title: "Project & Task Management",
        description:
          "Oversee project progress, manage backlogs and issues, assign tasks, and track project health and synergy alignment.",
        icon: "mdi:clipboard-text-outline",
      },
      {
        title: "Project Settings & Configuration",
        description:
          "Control project-level settings, planning statuses, and configuration options for alignment and consistency.",
        icon: "mdi:chart-line-variant",
      },
      {
        title: "Team Management",
        description:
          "View your team’s dashboard, allocate tasks with dependencies, and monitor team performance and collaboration feedback.",
        icon: "mdi:account-group-outline",
      },
    ],
  },
  challengeSolution: {
    challenges: [
      {
        title: "Lack of Centralized Visibility",
        desc: "Manual tracking caused gaps in task clarity and progress overview.",
        icon: "mdi:eye-off-outline",
      },
      {
        title: "Timesheet Complexity",
        desc: "Difficulty in linking logged hours to actual project impact and performance.",
        icon: "mdi:clock-alert-outline",
      },
      {
        title: "Secure Resource Management",
        desc: "Needed a scalable and secure way to manage user access and roles.",
        icon: "mdi:shield-account-outline",
      },
      {
        title: "Inefficient Project Oversight",
        desc: "Absence of centralized dashboards hindered project health and team performance tracking.",
        icon: "mdi:chart-box-outline",
      },
    ],
    solutions: [
      {
        title: "Unified Dashboard",
        desc: "Dashboards for My Tasks, Team Planning, and Project Status built in.",
        icon: "mdi:view-dashboard-outline",
      },
      {
        title: "Approval-Based Timesheets",
        desc: "Managers can approve or reject user timesheets with integrated reports.",
        icon: "mdi:clock-check-outline",
      },
      {
        title: "Secure Modular Architecture",
        desc: "Role-based login, permission mapping, and global settings available.",
        icon: "mdi:shield-key-outline",
      },
      {
        title: "Agile Backlog & Sprint Planning",
        desc: "Tools for backlog grooming, sprint planning, and readiness built in.",
        icon: "mdi:clipboard-list-outline",
      },
      {
        title: "Team Task & Performance Tracking",
        desc: "Track individual and team tasks, progress, and performance over time.",
        icon: "mdi:account-group-outline",
      },
      {
        title: "Customer & Project Mapping",
        desc: "Centralized system for managing customers and associating them with project data.",
        icon: "mdi:account-cog-outline",
      },
    ],
  },
  projectSnippets: {
    projectSnippets: [
      {
        id: 1,
        title: "Clean Homepage Layout",
        description: "Modern look with organized sections and dynamic CTA.",
        category: "TMS",
        image: AppIcons.TMS1,
      },
      {
        id: 2,
        title: "SEO Optimized Content",
        description: "Structured content aligned with SEO best practices.",
        category: "TMS",
        image: AppIcons.TMS2,
      },
      {
        id: 3,
        title: "Mobile-First Design",
        description: "Optimized layout for seamless access on all devices.",
        category: "TMS",
        image: AppIcons.TMS3,
      },
      {
        id: 4,
        title: "Services Showcase",
        description: "Dedicated sections for services and industry value.",
        category: "TMS",
        image: AppIcons.TMS4,
      },
      {
        id: 5,
        title: "Services Showcase",
        description: "Dedicated sections for services and industry value.",
        category: "TMS",
        image: AppIcons.TMS5,
      },
      {
        id: 6,
        title: "Services Showcase",
        description: "Dedicated sections for services and industry value.",
        category: "TMS",
        image: AppIcons.TMS6,
      },
      {
        id: 7,
        title: "Interactive UI Elements",
        description: "Engaging animations and transitions for better UX.",
        category: "TMS",
        image: AppIcons.TMS7,
      },
      {
        id: 8,
        title: "Client Testimonial Section",
        description: "Builds trust with showcased client feedback.",
        category: "TMS",
        image: AppIcons.TMS8,
      },
      {
        id: 9,
        title: "Fast Loading Speed",
        description: "Performance-optimized for quick page load times.",
        category: "TMS",
        image: AppIcons.TMS9,
      },
      {
        id: 10,
        title: "Analytics Integration",
        description: "Track user behavior with embedded analytics tools.",
        category: "TMS",
        image: AppIcons.TMS10,
      },
      {
        id: 11,
        title: "Blog + Article Section",
        description: "Publish regular content for SEO and engagement.",
        category: "TMS",
        image: AppIcons.TMS11,
      },
      {
        id: 12,
        title: "Custom Iconography",
        description: "Unique icons aligned with brand identity.",
        category: "TMS",
        image: AppIcons.TMS12,
      },
    ],
  },
  testimonialSection: {
    rating: 5,
    quote:
      "Moltech is very enthusiastic developer cum Director. Technology is not a barrier for him. He can work with any technology given. He is very soft spoken and humble. He is always helpful to the co-workers and team members. It was really very awesome experience working with him. I strongly recommended his programming skill and working style.",
    author: "Vinod Satapara",
    title: "Director at iFour Technolab Pvt. Ltd.",
  },
resultsSection: {
  title: "Business Values Provided",
  description:
    "The platform enhanced team productivity, centralized project workflows, and enabled data-backed decision making.",
  values: [
    {
      title: "Streamlined Project Management",
      description: "Centralized tasks, timelines, and communication to improve delivery consistency.",
      icon: "mdi:clipboard-text-outline",
    },
    {
      title: "Enhanced Team Productivity",
      description: "Collaborative tools and automation helped teams work faster and smarter.",
      icon: "mdi:account-group-outline",
    },
    {
      title: "Data-Driven Decisions",
      description: "Real-time dashboards and reporting empowered teams to act with confidence.",
      icon: "mdi:chart-line",
    },
  ],
}
,
};

export default TMSData;
