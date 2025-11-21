import { AppIcons } from "@/data/appIcons";
import { BASE_URL } from "@/lib/utils/baseUrl";

const SingaporeManufacturingFederationData = {
  slug: "manufacturing-membership-event-management-case-study",
  heroSection: {
    title: "SMF",
    HeroImage: AppIcons.smf1,
    highlight: "Membership & Event Management Web Portal",
    description:
      "The Singapore Manufacturing Federation (SMF) is Singapore’s largest national trade federation, representing approximately 5,000 corporate members—including SMEs, multinational corporations, and affiliates—across 10 key industry groups.",
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
    "Manufacturing Association Membership & Event Portal | Case Study - Web & Admin Development USA",
  description:
    "Learn how our Dallas-based team helped a major trade federation modernize membership and event management with a unified portal, online payments, automation, and admin reporting tools.",
  keywords:
    "membership portal development, event management software USA, manufacturing trade association system, admin dashboard for federations, custom web portal USA, .NET Core React admin system, member self-service platform, online booking system for organizations, Dallas web development company, US membership software solution",
  canonical: `${BASE_URL}/case-study/manufacturing-membership-event-management-case-study`,
  author: "Moltech Solutions Inc.",
  language: "English",
  distribution: "Global",
  rating: "General",
  revisitAfter: "7 days",
  openGraph: {
    title:
      "Manufacturing Association Membership & Event Portal | Case Study - Web & Admin Development USA",
    description:
      "Discover how our Dallas-based team built a scalable portal for member registration, event bookings, payments, and reporting for a leading trade federation.",
    url: `${BASE_URL}/case-study/manufacturing-membership-event-management-case-study`,
    image: `${BASE_URL}/images/meta/manufacturing-event-og.webp`,
    type: "website",
    locale: "en_US",
    siteName: "Moltech Solutions Inc.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Manufacturing Association Membership & Event Portal | Case Study - Web & Admin Development USA",
    description:
      "See how we helped streamline membership, events, and reporting for a national manufacturing trade body with an integrated portal built using .NET Core, React, and Next.js.",
    image: `${BASE_URL}/images/meta/manufacturing-event-og.webp`,
    site: "@MoltechInc",
    creator: "@MoltechInc",
  },
},

  projectDetails: {
    description:
      "We developed a membership and event management system for the Singapore Manufacturing Federation (SMF), enabling members to easily sign up, renew memberships, and book events or training programs online. The system allows SMF to manage memberships, events, communications, payments, and reporting in a centralized, user-friendly platform aligned with their mission of driving digital transformation within Singapore’s manufacturing sector.",
  },
  aboutSection: {
    description1:
      "The Singapore Manufacturing Federation (SMF) is Singapore’s largest national trade federation, representing approximately 5,000 corporate members—including SMEs, multinational corporations, and affiliates—across 10 key industry groups. Established in 1932, SMF champions its members through initiatives that drive digitalization, innovation-led productivity, business transformation, and global market expansion. Its vision is to be a globally recognized federation that delivers real value to Singapore’s manufacturing sector.",
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
        name: "Zoom API",
        icon: "akar-icons:zoom-fill",
        description: "Integrated for webinar and virtual event participation.",
      },
      {
        name: "Active Campaign API",
        icon: "mdi:email-fast-outline",
        description: "Used for marketing emails and automated notifications.",
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
        title: "Payment Gateway Integration",
        description:
          "Secure payment processing for membership fees and event bookings.",
        icon: "mdi:credit-card-outline",
      },
      {
        title: "User Authentication",
        description:
          "Secure login and access control using modern authentication protocols.",
        icon: "mdi:account-lock-outline",
      },
      {
        title: "Seamless Booking Workflow",
        description:
          "End-to-end booking flow from discovery to registration and attendance.",
        icon: "mdi:clipboard-check-outline",
      },
      {
        title: "QR Code Generation",
        description:
          "Auto-generate QR codes for on-site event check-ins and access.",
        icon: "mdi:qrcode-scan",
      },
      {
        title: "Zoom Integration",
        description:
          "Auto-generate Zoom meeting links for virtual events and webinars.",
        icon: "mdi:video-outline",
      },
      {
        title: "Partner Management",
        description:
          "Track and manage external partners, sponsors, and vendors.",
        icon: "mdi:handshake-outline",
      },
      {
        title: "Transaction Reports",
        description:
          "Detailed reports of all financial transactions across modules.",
        icon: "mdi:receipt-text-outline",
      },
      {
        title: "Financial Reports",
        description:
          "Automated reporting for membership fees, event payments, and transactions.",
        icon: "mdi:finance",
      },
      {
        title: "Admin Dashboard",
        description:
          "Centralized portal for staff to manage chapters, users, bookings, and payments.",
        icon: "mdi:view-dashboard-outline",
      },
    ],
  },
  challengeSolution: {
    challenges: [
      {
        title: "Manual Membership Processes",
        desc: "SMF’s manual workflows for managing memberships slowed operations and introduced inefficiencies.",
        icon: "mdi:file-document-edit-outline",
      },
      {
        title: "Lack of Self-Service",
        desc: "Members lacked the ability to renew memberships or register for events online, relying on manual support.",
        icon: "mdi:account-cancel-outline",
      },
      {
        title: "Disconnected Systems",
        desc: "Fragmented tools made financial tracking and communication challenging, requiring manual follow-ups.",
        icon: "mdi:content-cut",
      },
    ],
    solutions: [
      {
        title: "Unified Membership & Event Platform",
        desc: "A centralized, mobile-friendly portal allows members to register, renew, and manage events online.",
        icon: "mdi:cloud-sync-outline",
      },
      {
        title: "Admin Dashboard & Financial Tracking",
        desc: "Admins can manage members, view financials, and track participation with ease.",
        icon: "mdi:chart-bar-stacked",
      },
      {
        title: "Integrated Payment System",
        desc: "Seamless online payments via MasterCard improve user experience and payment efficiency.",
        icon: "mdi:credit-card-check-outline",
      },
      {
        title: "Automated Communications",
        desc: "Automated email notifications reduce manual effort and improve member engagement.",
        icon: "mdi:email-fast-outline",
      },
    ],
  },
  projectSnippets: {
    projectSnippets: [
      {
        id: 1,
        title: "Homepage Hero Section",
        description: "Stunning oceanfront view with modern booking interface",
        category: "Singapore Manufacturing Federation",
        image: AppIcons.smf1,
      },
      {
        id: 2,
        title: "Room Gallery",
        description: "Interactive room showcase with detailed amenities",
        category: "Singapore Manufacturing Federation",
        image: AppIcons.smf2,
      },
      {
        id: 3,
        title: "Mobile Responsive Design",
        description: "Seamless experience across all devices",
        category: "Singapore Manufacturing Federation",
        image: AppIcons.smf3,
      },
      {
        id: 4,
        title: "CMS Dashboard",
        description: "User-friendly content management interface",
        category: "Singapore Manufacturing Federation",
        image: AppIcons.smf4,
      },
      {
        id: 5,
        title: "Booking Integration",
        description: "Third-party booking system integration",
        category: "Singapore Manufacturing Federation",
        image: AppIcons.smf5,
      },
      {
        id: 6,
        title: "Booking Integration",
        description: "Third-party booking system integration",
        category: "Singapore Manufacturing Federation",
        image: AppIcons.smf6,
      },
      {
        id: 7,
        title: "Homepage Hero Section",
        description: "Stunning oceanfront view with modern booking interface",
        category: "Singapore Manufacturing Federation",
        image: AppIcons.smf7,
      },
      {
        id: 8,
        title: "Room Gallery",
        description: "Interactive room showcase with detailed amenities",
        category: "Singapore Manufacturing Federation",
        image: AppIcons.smf8,
      },
      {
        id: 9,
        title: "Mobile Responsive Design",
        description: "Seamless experience across all devices",
        category: "Singapore Manufacturing Federation",
        image: AppIcons.smf9,
      },
      {
        id: 10,
        title: "CMS Dashboard",
        description: "User-friendly content management interface",
        category: "Singapore Manufacturing Federation",
        image: AppIcons.smf10,
      },
      {
        id: 11,
        title: "Booking Integration",
        description: "Third-party booking system integration",
        category: "Singapore Manufacturing Federation",
        image: AppIcons.smf11,
      },
      {
        id: 12,
        title: "Booking Integration",
        description: "Third-party booking system integration",
        category: "Singapore Manufacturing Federation",
        image: AppIcons.smf12,
      },
    ],
  },
  testimonialSection: {
    rating: 5,
    quote:
      "A reliable and trustworthy co-worker. Moltech is very passionate about technologies and able to recommend and provide solution custom to your needs.",
    author: "Peterson Tan",
    title: "Technical consultant",
  },
  resultsSection: {
    title: "Business Values Provided",
    description:
      "The digital transformation delivered significant value across key business areas.",
    values: [
      {
        title: "Operational Efficiency",
        description:
          "Optimized internal processes and centralized tools helped reduce delays, errors, and resource waste.",
        icon: "mdi:cogs",
      },
      {
        title: "Member Convenience",
        description:
          "Self-service access, clear navigation, and mobile support made the experience easier for members.",
        icon: "mdi:account-check-outline",
      },
      {
        title: "Data Accuracy",
        description:
          "Automated syncing and validation ensured all records remained up-to-date and error-free.",
        icon: "mdi:database-check-outline",
      },
      {
        title: "Increased Engagement",
        description:
          "Personalized content, reminders, and interactive features encouraged higher member participation.",
        icon: "mdi:message-badge-outline",
      },
      {
        title: "Reduced Workload",
        description:
          "Admin tasks like follow-ups, reporting, and updates were streamlined or fully automated.",
        icon: "mdi:chart-timeline-variant-shimmer",
      },
      {
        title: "Future Scalability",
        description:
          "Built with flexibility to handle growing membership, more events, and new services effortlessly.",
        icon: "mdi:expand-all-outline",
      },
      {
        title: "Automated Communication",
        description:
          "Scheduled emails, alerts, and confirmations kept members informed with minimal manual effort.",
        icon: "mdi:email-send-outline",
      },
    ],
  },
};

export default SingaporeManufacturingFederationData;
