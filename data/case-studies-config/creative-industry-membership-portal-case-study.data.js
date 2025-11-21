import { BASE_URL } from "@/lib/utils/baseUrl";
import { AppIcons } from "../appIcons";

const SFCData = {
  slug: "creative-industry-membership-portal-case-study",
  heroSection: {
    title: "Singapore Fashion Council Portal",
    HeroImage: AppIcons.SFC1,
    highlight: "Membership & Event Management System",
    description:
      "We built a scalable membership and event platform for the Singapore Fashion Council (SFC) to empower corporate and individual users to manage sign-ups, events, and profiles—while giving administrators complete financial and campaign control.",
    location: {
      icon: "mdi:map-marker-outline",
      label: "Singapore – Fashion, Sustainability, Membership",
    },
    industry: {
      icon: "mdi:tshirt-crew-outline",
      label: "Fashion & Membership Association",
    },
    services: [
      {
        name: "Membership System",
        icon: "mdi:account-group-outline",
        href: "/services/custom-software-development",
      },
      {
        name: "Event & Booking Workflow",
        icon: "mdi:calendar-check-outline",
        href: "/services/business-software-consulting",
      },
      {
        name: "Financial Automation",
        icon: "mdi:cash-register",
        href: "/services/accounting",
      },
      {
        name: "Voucher & Campaign Management",
        icon: "mdi:ticket-percent-outline",
        href: "/services/custom-software-development",
      },
      {
        name: "Zoom & Email Integrations",
        icon: "mdi:video-plus-outline",
        href: "/services/ui-ux-design-and-development",
      },
    ],
    card: {
      mainIcon: "mdi:briefcase-account-outline",
      lines: ["w-4-5", "w-3-4"],
      iconRow: [
        { icon: "mdi:credit-card-outline", bg: "bg-pink" },
        { icon: "mdi:calendar-multiselect", bg: "bg-yellow" },
        { icon: "mdi:account-supervisor", bg: "bg-blue" },
      ],
    },
  },
  metaConfig: {
  title: "All-in-One Membership, Events & Finance Portal for Creative Industries | Built in USA",
  description:
    "Creative industry membership platform with event booking, Xero financials, GST, vouchers, campaign tools, and admin reporting—built for professional associations.",
  keywords:
    "membership platform for creative industries, event booking system for fashion councils, Xero integrated membership portal, voucher campaign management, Dallas event portal developers, GST and deferred income tracking, Next.js and React admin portal, professional association management software, .NET Core membership solution USA",
  canonical:
    `${BASE_URL}/case-study/creative-industry-membership-portal-case-study`,
  author: "Moltech Solutions Inc.",
  language: "English",
  distribution: "Global",
  rating: "General",
  revisitAfter: "7 days",
  openGraph: {
    title: "Fashion & Creative Industry Membership Platform with Xero, Booking & Campaigns | Case Study - USA",
    description:
      "See how our Dallas-based team built a modern portal for managing fashion industry memberships, events, campaigns, vouchers, and financial workflows with full admin control.",
    url: `${BASE_URL}/case-study/creative-industry-membership-portal-case-study`,
    image: `${BASE_URL}/images/meta/creative-membership-og.webp`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fashion & Creative Industry Membership Platform with Xero, Booking & Campaigns | Case Study - USA",
    description:
      "Built by Moltech (Dallas), this robust platform features membership automation, campaign tracking, event booking, Xero integration, GST reporting, and admin tools.",
    image: `${BASE_URL}/images/meta/creative-membership-og.webp`,
    site: "@MoltechInc",
    creator: "@MoltechInc",
  },
}
,
  projectDetails: {
    description:
      "We built a membership and event management platform for the Singapore Fashion Council, allowing members to sign up, book courses, and manage their profiles, while enabling SFC to handle memberships, events, and financial workflows efficiently through a robust admin portal.",
  },
  aboutSection: {
    description1:
      "The Singapore Fashion Council (SFC) champions the growth and development of Singapore’s fashion industry, driving initiatives in sustainability, innovation, and global outreach while supporting fashion businesses and professionals through programs, certifications, and strategic partnerships. SFC is a key ecosystem builder for advancing Singapore’s fashion industry locally and internationally.",
    description2:
      "To streamline membership and event operations, we partnered with Flying Cape Technologies to develop a comprehensive web and admin portal for SFC, empowering them to efficiently manage corporate and individual memberships, event bookings, financial workflows, and campaign management.",
    industry: "Fashion, Membership, Sustainability",
    projectType: "Web Platform & Admin Dashboard",
    technologies: [
      {
        name: ".NET Core API",
        icon: "logos:dotnet",
        description:
          "Backend services powering secure business logic and workflows.",
      },
      {
        name: "Next.js",
        icon: "logos:nextjs-icon",
        description:
          "Server-side rendering and routing for the public web portal.",
      },
      {
        name: "React.js",
        icon: "logos:react",
        description:
          "Used for building the dynamic, component-based admin portal.",
      },
      {
        name: "MS SQL Server",
        icon: "logos:mysql",
        description:
          "Relational database used to store user, booking, and transaction data.",
      },
      {
        name: "HTML",
        icon: "logos:html-5",
        description:
          "Markup language used to build and structure frontend pages.",
      },
      {
        name: "CSS",
        icon: "logos:css-3",
        description:
          "Styling language for layouts, themes, and responsiveness.",
      },
      {
        name: "Bootstrap",
        icon: "logos:bootstrap",
        description:
          "Frontend framework used for mobile-first, responsive UI components.",
      },
      {
        name: "JavaScript",
        icon: "logos:javascript",
        description:
          "Client-side scripting for frontend interactivity and logic.",
      },
      {
        name: "TypeScript",
        icon: "logos:typescript-icon",
        description:
          "Typed superset of JavaScript for building reliable, scalable code.",
      },
      {
        name: "jQuery",
        icon: "skill-icons:jquery",
        description:
          "Simplifies DOM manipulation and enhances legacy browser compatibility.",
      },
      {
        name: "AWS Amplify",
        icon: "logos:aws-amplify",
        description:
          "Used for hosting the frontend with CI/CD support and performance optimizations.",
      },
      {
        name: "AWS EC2",
        icon: "logos:aws-ec2",
        description: "Hosts backend APIs on Windows Server with IIS.",
      },
      {
        name: "IIS (API Hosting)",
        icon: "mdi:server",
        description:
          "Windows web server for running and managing .NET Core APIs.",
      },
      {
        name: "Role-Based Access Control",
        icon: "mdi:account-lock-outline",
        description:
          "Secures application access based on user roles and permissions.",
      },
      {
        name: "Payment Gateway Integration",
        icon: "mdi:credit-card-outline",
        description: "Enables secure online payments via integrated gateways.",
      },
      {
        name: "Zoom API Integration",
        icon: "bxl:zoom",
        description:
          "Used for managing virtual meetings, webinars, and live events.",
      },
      {
        name: "Email Scheduler",
        icon: "arcticons:smsscheduler",
        description:
          "Automated email delivery system for updates and reminders.",
      },
      {
        name: "Distributed & Repository Architecture",
        icon: "mdi:source-repository-multiple",
        description:
          "Ensures scalable, modular, and maintainable code structure.",
      },
    ],
  },
  majorFeatures: {
    features: [
      {
        title: "Dual Membership Access",
        description:
          "Supports corporate UEN and individual email-based login with tailored flows.",
        icon: "mdi:account-multiple-plus-outline",
      },
      {
        title: "Course Booking & Event Participation",
        description:
          "Search and book events with full payment workflows and automated confirmation.",
        icon: "mdi:calendar-month-outline",
      },
      {
        title: "Financial Management with Xero",
        description:
          "Includes GST, deferred income, AR aging, invoice extraction, and Xero sync.",
        icon: "mdi:currency-usd",
      },
      {
        title: "Voucher & Campaign System",
        description:
          "Manage and report flexible marketing codes tied to membership or event actions.",
        icon: "mdi:ticket-confirmation-outline",
      },
      {
        title: "Admin Dashboard for Full Oversight",
        description:
          "Track memberships, event approvals, cancellations, and financial transactions.",
        icon: "mdi:view-dashboard-variant",
      },
      {
        title: "Membership Reports & Task Management",
        description:
          "Generate corporate/individual reports, manage tasks, and monitor membership flows.",
        icon: "mdi:clipboard-list-outline",
      },
      {
        title: "Event Feedback & Registration Workflow",
        description:
          "Approve registrations, collect feedback, and manage marketing URLs for events.",
        icon: "mdi:message-text-outline",
      },
    ],
  },
  challengeSolution: {
    challenges: [
      {
        title: "Manual Membership Workflows",
        desc: "Manual membership registrations and renewals slowed operational workflows.",
        icon: "mdi:account-alert-outline",
      },
      {
        title: "Complex Financial Tracking",
        desc: "Financial management required full invoice, credit note, and reconciliation capabilities.",
        icon: "mdi:file-document-outline",
      },
      {
        title: "Event Registration Bottlenecks",
        desc: "Event management and registration approvals lacked structured digital workflows.",
        icon: "mdi:calendar-clock",
      },
    ],
    solutions: [
      {
        title: "Responsive Membership Platform",
        desc: "Developed corporate and individual login, sign-ups, course searches, and bookings.",
        icon: "mdi:account-check-outline",
      },
      {
        title: "Structured Event System",
        desc: "Built feature-rich admin panel for event creation, approval, registration, and feedback.",
        icon: "mdi:calendar-multiple-check",
      },
      {
        title: "Robust Financial Toolkit",
        desc: "Integrated AR aging, GST reporting, Xero templates, voucher management, and campaign reporting.",
        icon: "mdi:finance",
      },
    ],
  },
  projectSnippets: {
    projectSnippets: [
      {
        id: 1,
        title: "Clean Homepage Layout",
        description: "Modern look with organized sections and dynamic CTA.",
        category: "SFC",
        image: AppIcons.SFC1,
      },
      {
        id: 2,
        title: "SEO Optimized Content",
        description: "Structured content aligned with SEO best practices.",
        category: "SFC",
        image: AppIcons.SFC2,
      },
      {
        id: 3,
        title: "Mobile-First Design",
        description: "Optimized layout for seamless access on all devices.",
        category: "SFC",
        image: AppIcons.SFC3,
      },
      {
        id: 4,
        title: "Services Showcase",
        description: "Dedicated sections for services and industry value.",
        category: "SFC",
        image: AppIcons.SFC4,
      },
      {
        id: 5,
        title: "Services Showcase",
        description: "Dedicated sections for services and industry value.",
        category: "SFC",
        image: AppIcons.SFC5,
      },
      {
        id: 6,
        title: "Clean Homepage Layout",
        description: "Modern look with organized sections and dynamic CTA.",
        category: "SFC",
        image: AppIcons.SFC6,
      },
      {
        id: 7,
        title: "Services Showcase",
        description: "Dedicated sections for services and industry value.",
        category: "SFC",
        image: AppIcons.SFC7,
      },
      {
        id: 8,
        title: "Services Showcase",
        description: "Dedicated sections for services and industry value.",
        category: "SFC",
        image: AppIcons.SFC8,
      },
      {
        id: 9,
        title: "Clean Homepage Layout",
        description: "Modern look with organized sections and dynamic CTA.",
        category: "SFC",
        image: AppIcons.SFC9,
      },
    ],
  },
  testimonialSection: {
    rating: 5,
    quote:
      "A reliable and trustworthy co-worker. Moltech is very passionate about technologies and able to recommend and provide solution custom to your needs.",
    author: "Peterson Tan",
    title: "Technical Consultant",
  },
resultsSection: {
  title: "Business Values Provided",
  description:
    "The platform simplified operations, automated event workflows, and strengthened financial control for the organization.",
  values: [
    {
      title: "Streamlined Membership Operations",
      description: "Simplified onboarding, renewals, and member data management.",
      icon: "mdi:account-multiple-outline",
    },
    {
      title: "Automated Event Management",
      description: "Handled event setup, registrations, and communications with minimal admin effort.",
      icon: "mdi:calendar-multiselect",
    },
    {
      title: "Enhanced Financial Oversight",
      description: "Provided clear tracking of payments, invoices, and revenue through integrated tools.",
      icon: "mdi:chart-bar",
    },
  ],
}
,
};

export default SFCData;
