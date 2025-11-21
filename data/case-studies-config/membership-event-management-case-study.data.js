import { AppIcons } from "@/data/appIcons";
import { BASE_URL } from "@/lib/utils/baseUrl";

const SgtechMemberEventManagementData = {
  slug: "membership-event-management-case-study",

  heroSection: {
    title: "Member & Event",
    HeroImage: AppIcons.sgTech1,
    highlight: "Management System Development",
    description:
      "SGTech, Singapore’s leading tech trade association, now manages over 1,400 members and their events seamlessly through an integrated, mobile-friendly member and event management system.",
    location: {
      icon: "mdi:map-marker",
      label: "Singapore",
    },
    industry: {
      icon: "mdi:domain",
      label: "Technology Association",
    },
    services: [
      {
        name: "Web Portal Development",
        icon: "mdi:web",
        href: "/services/custom-software-development",
      },
      {
        name: "Admin Dashboard",
        icon: "mdi:view-dashboard-outline",
        href: "/services/web-application-development",
      },
      {
        name: "Event Management System",
        icon: "mdi:calendar-multiselect",
        href: "/services/business-software-consulting",
      },
      {
        name: "Payment Gateway Integration",
        icon: "mdi:credit-card-outline",
        href: "/services/accounting",
      },
    ],
    card: {
      mainIcon: "mdi:account-group-outline",
      lines: ["w-3-4", "w-1-2"],
      iconRow: [
        { icon: "mdi:calendar-check", bg: "bg-green" },
        { icon: "mdi:credit-card", bg: "bg-purple" },
        { icon: "mdi:email-outline", bg: "bg-orange" },
      ],
    },
  },
  // metaConfig
metaConfig: {
  title:
    "Membership & Event Management Portal Case Study | Custom Web & Admin System - USA",
  description:
    "Explore how our Dallas-based team helped a leading tech association streamline its membership and event operations with a modern, scalable portal built using .NET Core, React, and Next.js.",
  keywords:
    "membership management system, event booking platform USA, admin portal development, React Next.js portal, membership software for associations, US event registration system, scalable membership solutions, Dallas web development company, custom HR portal, React-based admin dashboard, integrated booking system",
  canonical: `${BASE_URL}/case-study/membership-event-management-case-study`,
  author: "Moltech Solutions Inc.",
  language: "English",
  distribution: "Global",
  rating: "General",
  revisitAfter: "7 days",
  openGraph: {
    title:
      "Membership & Event Management Portal Case Study | Custom Web & Admin System - USA",
    description:
      "See how a U.S.-based company transformed its membership and event management with a modern web and admin system designed by our Dallas development team.",
    url: `${BASE_URL}/case-study/membership-event-management-case-study`,
    image: `${BASE_URL}/images/meta/membership-event-management-og.webp`,
    type: "website",
    locale: "en_US",
    siteName: "Moltech Solutions Inc.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Membership & Event Management Portal Case Study | Custom Web & Admin System - USA",
    description:
      "See how our Dallas team helped streamline event bookings, member management, and payments with a unified, mobile-ready portal using React, .NET Core & Zoom API.",
    image: `${BASE_URL}/images/meta/membership-event-management-og.webp`,
    site: "@MoltechInc",
    creator: "@MoltechInc",
  },
},

  projectDetails: {
    description:
      "SGTech operates a member and chapter system, providing educational opportunities including webinars, events, and training. They also partner with education providers whose class members can book through SGTech’s platform.",
  },
  aboutSection: {
    description1:
      "SGTech is Singapore’s leading trade association for the tech industry, representing over 1,400 member companies, including top multinationals, large local enterprises, SMEs, and startups. With a mission to catalyse a thriving ecosystem powering Singapore as a global tech powerhouse, SGTech advocates for change, drives tech innovation, and accelerates adoption to spur sustainability in the sector.",
    description2: "SGTech celebrated its 40th anniversary in 2022.",
    industry: "Tech Trade Association",
    projectType: "Member & Event Management System Development",
    technologies: [
      {
        name: ".NET Core 6",
        icon: "logos:dotnet",
        description: "API backend for scalable and secure data handling.",
      },
      {
        name: "React.js",
        icon: "logos:react",
        description: "Used in both Admin and Web portals for dynamic UI.",
      },
      {
        name: "Next.js",
        icon: "logos:nextjs-icon",
        description: "Server-side rendering for fast, SEO-friendly frontend.",
      },
      {
        name: "MasterCard",
        icon: "logos:mastercard",
        description:
          "Trusted global payment gateway enabling secure and fast transactions.",
      },
      {
        name: "Zoom API",
        icon: "akar-icons:zoom-fill",
        description: "Integrated for webinar and virtual event participation.",
      },
      {
        name: "HTML",
        icon: "logos:html-5",
        description: "Structured markup for modern and accessible websites.",
      },
      {
        name: "SCSS",
        icon: "vscode-icons:file-type-scss2",
        description: "Stylesheets crafted for beautiful and responsive design.",
      },
      {
        name: "Tailwind CSS",
        icon: "devicon:tailwindcss",
        description:
          "Component framework for rapid and consistent UI development.",
      },
      {
        name: "ActiveCampaign API",
        icon: "mdi:email-fast-outline",
        description: "Used for marketing emails and automated notifications.",
      },
      {
        name: "MS SQL Server",
        icon: "simple-icons:microsoftsqlserver",
        description:
          "Enterprise-level database to store structured member/event data.",
      },
      {
        name: ".NET Background Services",
        icon: "mdi:cog-sync-outline",
        description:
          "Handles tasks like billing, scheduling, and report generation.",
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
        title: "Membership Management",
        description:
          "Manage different membership levels, renewals, and profiles.",
        icon: "mdi:account-box-multiple-outline",
      },
      {
        title: "Event Booking System",
        description:
          "Members can search, register, and attend webinars and events easily.",
        icon: "mdi:calendar-clock",
      },
      {
        title: "Admin Dashboard",
        description:
          "Centralized portal for staff to manage chapters, users, bookings, and payments.",
        icon: "mdi:view-dashboard-outline",
      },
      {
        title: "Financial Reports",
        description:
          "Automated reporting for membership fees, event payments, and transactions.",
        icon: "mdi:finance",
      },
      {
        title: "Email Notifications",
        description:
          "Send automated updates for events, registrations, and renewals.",
        icon: "mdi:email-send-outline",
      },
      {
        title: "Zoom & QR Code Integration",
        description:
          "Webinar access and on-site attendance through Zoom and QR scanning.",
        icon: "mdi:qrcode-scan",
      },
      {
        title: "Role-Based Access Control",
        description:
          "Permissions managed by admin, member, chapter leader, and DT-SME types.",
        icon: "mdi:shield-key-outline",
      },
      {
        title: "Chapter-Specific Content",
        description:
          "Content visibility tailored to members based on chapter subscription.",
        icon: "mdi:bookmark-multiple-outline",
      },
    ],
  },
  challengeSolution: {
    challenges: [
      {
        title: "Fragmented Systems",
        desc: "SGTech used multiple tools for membership and events, creating redundancy and confusion.",
        icon: "mdi:content-cut",
      },
      {
        title: "Manual Processes",
        desc: "Membership tracking and event bookings were manual, error-prone, and time-consuming.",
        icon: "mdi:file-document-edit-outline",
      },
      {
        title: "Limited Self-Service",
        desc: "Members couldn’t independently access or manage bookings and data.",
        icon: "mdi:account-cancel-outline",
      },
    ],
    solutions: [
      {
        title: "Centralized Platform",
        desc: "Unified portal for admin, chapters, events, and reports.",
        icon: "mdi:cloud-sync-outline",
      },
      {
        title: "Member Portal",
        desc: "Members can search events, manage profiles, and view subscriptions.",
        icon: "mdi:account-details-outline",
      },
      {
        title: "Payment Gateway Integration",
        desc: "MasterCard-based payment system for seamless transactions.",
        icon: "mdi:credit-card-check-outline",
      },
      {
        title: "Automation & Reporting",
        desc: "Automated workflows and reporting tools to streamline operations.",
        icon: "mdi:chart-bar-stacked",
      },
    ],
  },
  projectSnippets: {
    projectSnippets: [
      {
        id: 1,
        title: "Homepage Hero Section",
        description: "Stunning oceanfront view with modern booking interface",
        category: "SGTech",
        image: AppIcons.sgTech1,
      },
      {
        id: 2,
        title: "Room Gallery",
        description: "Interactive room showcase with detailed amenities",
        category: "SGTech",
        image: AppIcons.sgTech2,
      },
      {
        id: 3,
        title: "Mobile Responsive Design",
        description: "Seamless experience across all devices",
        category: "SGTech",
        image: AppIcons.sgTech3,
      },
      {
        id: 4,
        title: "CMS Dashboard",
        description: "User-friendly content management interface",
        category: "SGTech",
        image: AppIcons.sgTech4,
      },
      {
        id: 5,
        title: "Booking Integration",
        description: "Third-party booking system integration",
        category: "SGTech",
        image: AppIcons.sgTech5,
      },
      {
        id: 6,
        title: "Booking Integration",
        description: "Third-party booking system integration",
        category: "SGTech",
        image: AppIcons.sgTech6,
      },
      {
        id: 7,
        title: "Booking Integration",
        description: "Third-party booking system integration",
        category: "SGTech",
        image: AppIcons.sgTech7,
      },
      {
        id: 8,
        title: "Booking Integration",
        description: "Third-party booking system integration",
        category: "SGTech",
        image: AppIcons.sgTech8,
      },
      {
        id: 9,
        title: "Booking Integration",
        description: "Third-party booking system integration",
        category: "SGTech",
        image: AppIcons.sgTech9,
      },
      {
        id: 10,
        title: "Booking Integration",
        description: "Third-party booking system integration",
        category: "SGTech",
        image: AppIcons.sgTech10,
      },
      {
        id: 11,
        title: "Booking Integration",
        description: "Third-party booking system integration",
        category: "SGTech",
        image: AppIcons.sgTech11,
      },
      {
        id: 12,
        title: "Booking Integration",
        description: "Third-party booking system integration",
        category: "SGTech",
        image: AppIcons.sgTech1,
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
      "The digital transformation delivered significant value across key business areas.",
    values: [
      {
        title: "Less Admin Work",
        description:
          "Automated workflows and self-service tools reduced the need for manual data entry and repetitive tasks.",
        icon: "mdi:clipboard-check-outline",
      },
      {
        title: "Easy Member Bookings",
        description:
          "A streamlined booking system allowed members to register for events and sessions quickly and effortlessly.",
        icon: "mdi:calendar-clock",
      },
      {
        title: "More Event Participation",
        description:
          "Improved promotion and easier signup processes boosted member turnout and engagement.",
        icon: "mdi:account-group-outline",
      },
      {
        title: "Accurate Reports",
        description:
          "Real-time dashboards and downloadable analytics made tracking attendance, payments, and feedback simple.",
        icon: "mdi:chart-box-outline",
      },
      {
        title: "Faster Payments",
        description:
          "Integrated gateways and automated reminders ensured quick and seamless transactions from members.",
        icon: "mdi:credit-card-fast-outline",
      },
      {
        title: "Better Member Insights",
        description:
          "Centralized profiles and analytics offered deeper understanding of member behavior and preferences.",
        icon: "mdi:account-search-outline",
      },
      {
        title: "Scalable for Future Growth",
        description:
          "Built with modular features and flexible architecture to support new programs, users, and locations.",
        icon: "mdi:trending-up",
      },
    ],
  },
};

export default SgtechMemberEventManagementData;
