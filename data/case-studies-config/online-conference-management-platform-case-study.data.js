import { BASE_URL } from "@/lib/utils/baseUrl";
import { AppIcons } from "../appIcons";

const ScienceCenterData = {
  slug: "online-conference-management-platform-case-study",
  heroSection: {
    title: "Singapore International Science Teachers’ Conference (SISTC)",
    HeroImage: AppIcons.ScienceCenter1,
    highlight: "Web & Admin Portal Development",
    description:
      "We developed a full-featured conference management platform for SISTC, enabling seamless event registration, booking, voucher application, and post-event certificate handling through a secure and scalable web and admin portal.",
    location: {
      icon: "mdi:map-marker-outline",
      label: "Singapore – Science Education",
    },
    industry: {
      icon: "mdi:school-outline",
      label: "Education (Schools)",
    },
    services: [
      {
        name: "Conference Portal",
        icon: "mdi:calendar-account-outline",
        href: "/services/custom-software-development",
      },
      {
        name: "Event Booking System",
        icon: "mdi:calendar-check-outline",
        href: "/services/business-software-consulting",
      },
      {
        name: "Discount & Voucher System",
        icon: "mdi:tag-outline",
        href: "/services/custom-software-development",
      },
      {
        name: "Certificate Delivery",
        icon: "mdi:certificate-outline",
        href: "/services/business-software-consulting",
      },
      {
        name: "Admin Reporting Dashboard",
        icon: "mdi:view-dashboard-outline",
        href: "/services/web-application-development",
      },
    ],
    card: {
      mainIcon: "mdi:flask-outline",
      lines: ["w-4-5", "w-2-3"],
      iconRow: [
        { icon: "mdi:ticket-percent-outline", bg: "bg-green" },
        { icon: "mdi:calendar-month", bg: "bg-blue" },
        { icon: "mdi:account-multiple", bg: "bg-purple" },
      ],
    },
  },
  metaConfig: {
  title: "Online Conference Management Platform with Registration, Vouchers & Certificates | Case Study - USA",
  description:
    "We built a scalable conference portal with school booking, voucher discounts, instant email confirmations, and digital certificate downloads—perfect for education events.",
  keywords:
    "conference management platform, school event registration system, voucher-based discount platform, online certificate delivery system, event portal development USA, .NET Core event booking, Dallas edtech platform development, education event automation, booking dashboard for organizers, react admin portal",
  canonical:
    `${BASE_URL}/case-study/online-conference-management-platform-case-study`,
  author: "Moltech Solutions Inc.",
  language: "English",
  distribution: "Global",
  rating: "General",
  revisitAfter: "7 days",
  openGraph: {
    title: "Online Conference Management Platform with Registration, Vouchers & Certificates | Case Study - USA",
    description:
      "Discover how our Dallas-based team developed a smart conference system with school and individual registration, automated discounts, booking dashboards, and instant certificates.",
    url: `${BASE_URL}/case-study/online-conference-management-platform-case-study`,
    image: `${BASE_URL}/images/meta/conference-management-og.webp`,
    type: "website",
    locale: "en_US",
    site_name: "Moltech Solutions Inc.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Conference Management Platform with Registration, Vouchers & Certificates | Case Study - USA",
    description:
      "Built by Moltech (Dallas), this platform handles event bookings, school discounts, auto-confirmations, and downloadable certificates using .NET Core and React.",
    image: `${BASE_URL}/images/meta/conference-management-og.webp`,
    site: "@MoltechInc",
    creator: "@MoltechInc",
  },
}
,
  projectDetails: {
    description:
      "We developed a feature-rich conference management system for SISTC to manage online event registrations, school and individual bookings, automated discounts, and certificate downloads, while providing the admin team with comprehensive event creation, booking, and voucher management capabilities.",
  },
  aboutSection: {
    description1:
      "The Singapore International Science Teachers' Conference (SISTC) is a leading platform for science educators to exchange ideas, learn innovative teaching practices, and collaborate on advancing science education in Singapore. The conference gathers educators, policymakers, and industry experts to foster a culture of continuous professional development in the science education community.",
    description2:
      "We partnered with Flying Cape Technologies to build a conference management platform with an admin and web portal for SISTC, enabling seamless registration, payment, certificate management, and event monitoring for organizers and participants.",
    industry: "Education / School Conferences",
    projectType: "Event & Conference Management System",
    technologies: [
      {
        name: ".NET Core API",
        icon: "logos:dotnet",
        description: "Backend services managing events, users, and discounts.",
      },
      {
        name: "Next.js",
        icon: "logos:nextjs-icon",
        description:
          "Framework used to build the server-rendered public-facing web portal.",
      },
      {
        name: "React.js",
        icon: "logos:react",
        description:
          "Used to build the dynamic and responsive admin dashboard.",
      },
      {
        name: "MS SQL Server",
        icon: "devicon:microsoftsqlserver-wordmark",
        description:
          "Central data store for users, events, bookings, and vouchers.",
      },
      {
        name: "HTML",
        icon: "logos:html-5",
        description:
          "Markup language used for structuring and presenting content on the web.",
      },
      {
        name: "CSS",
        icon: "logos:css-3",
        description:
          "Stylesheet language used for responsive design and UI styling.",
      },
      {
        name: "Bootstrap",
        icon: "logos:bootstrap",
        description:
          "Frontend framework for mobile-first UI development and components.",
      },
      {
        name: "JavaScript",
        icon: "logos:javascript",
        description:
          "Main scripting language for adding interactivity in frontend apps.",
      },
      {
        name: "TypeScript",
        icon: "logos:typescript-icon",
        description:
          "Typed superset of JavaScript used for scalable and robust development.",
      },
      {
        name: "jQuery",
        icon: "skill-icons:jquery",
        description:
          "JavaScript library for DOM manipulation and legacy browser support.",
      },
      {
        name: "AWS Amplify",
        icon: "logos:aws-amplify",
        description:
          "Cloud service for hosting the frontend with CI/CD pipelines.",
      },
      {
        name: "AWS EC2",
        icon: "logos:aws-ec2",
        description: "Cloud-based virtual servers for hosting backend APIs.",
      },
      {
        name: "IIS (API Hosting)",
        icon: "mdi:server",
        description:
          "Windows-based web server used for hosting .NET Core APIs.",
      },
      {
        name: "Role-Based Access Control",
        icon: "mdi:account-lock-outline",
        description:
          "Secure user permissions and access level enforcement system.",
      },
      {
        name: "Payment Gateway Integration",
        icon: "mdi:credit-card-outline",
        description:
          "Integrated with gateways to support secure online payments.",
      },
      {
        name: "Email Scheduler",
        icon: "arcticons:smsscheduler",
        description:
          "Automated email notifications triggered by scheduled events.",
      },
      {
        name: "Distributed & Repository Architecture",
        icon: "mdi:source-repository-multiple",
        description:
          "Clean and scalable backend structure using best coding practices.",
      },
    ],
  },
  majorFeatures: {
    features: [
      {
        title: "School & Individual Registration",
        description: "Separate flows with customized input and pricing logic.",
        icon: "mdi:account-group-outline",
      },
      {
        title: "Voucher Code & Discount Handling",
        description: "Conditional discounts applied to eligible bookings.",
        icon: "mdi:ticket-percent",
      },
      {
        title: "Conference Event Display",
        description: "Showcase event details and available sessions to users.",
        icon: "mdi:calendar-multiselect",
      },
      {
        title: "Automated Certificate Generation",
        description:
          "Certificates available post-event through user dashboard.",
        icon: "mdi:certificate-outline",
      },
      {
        title: "Admin Dashboard & Reports",
        description:
          "Track booking stats, manage events, and download reports.",
        icon: "mdi:view-dashboard-outline",
      },
      {
        title: "Event Creation & Display Management",
        description:
          "Admins can create events and manage their frontend presentation.",
        icon: "mdi:calendar-edit-outline",
      },
      {
        title: "Booking Confirmation Emails",
        description:
          "Automated booking confirmations sent to registered users via email.",
        icon: "mdi:email-send-outline",
      },
      {
        title: "Booking Transaction Reports",
        description:
          "Admins can view and export detailed reports on all booking transactions.",
        icon: "mdi:file-document-multiple-outline",
      },
      {
        title: "Voucher Code Management",
        description:
          "Admin tools for creating, editing, and tracking voucher usage.",
        icon: "mdi:ticket-outline",
      },
    ],
  },
  challengeSolution: {
    challenges: [
      {
        title: "Manual Registration Processes",
        desc: "Manual conference registration processes created inefficiencies and delays.",
        icon: "mdi:file-document-edit-outline",
      },
      {
        title: "Complex Discount Logic",
        desc: "Managing discounts for both individual and school group registrations was challenging without automation.",
        icon: "mdi:tag-multiple-outline",
      },
      {
        title: "Lack of Centralized Monitoring",
        desc: "Organizers needed a unified system to track bookings, transactions, and voucher usage.",
        icon: "mdi:chart-box-outline",
      },
    ],
    solutions: [
      {
        title: "Dynamic Web Registration Forms",
        desc: "Built a web portal with user login, event exploration, and digitized registrations for schools and individuals.",
        icon: "mdi:clipboard-text-outline",
      },
      {
        title: "Voucher Code Application Engine",
        desc: "Integrated conditional logic for discounts and voucher management with real-time validation.",
        icon: "mdi:ticket-outline",
      },
      {
        title: "Event Dashboard & Certificate Automation",
        desc: "Enabled organizers to monitor event performance and automate email confirmations and certificate downloads.",
        icon: "mdi:chart-box-plus-outline",
      },
    ],
  },
  projectSnippets: {
    projectSnippets: [
      {
        id: 1,
        title: "Clean Homepage Layout",
        description: "Modern look with organized sections and dynamic CTA.",
        category: "ScienceCenter",
        image: AppIcons.ScienceCenter1,
      },
      {
        id: 2,
        title: "SEO Optimized Content",
        description: "Structured content aligned with SEO best practices.",
        category: "ScienceCenter",
        image: AppIcons.ScienceCenter2,
      },
      {
        id: 3,
        title: "Mobile-First Design",
        description: "Optimized layout for seamless access on all devices.",
        category: "ScienceCenter",
        image: AppIcons.ScienceCenter3,
      },
      {
        id: 4,
        title: "Services Showcase",
        description: "Dedicated sections for services and industry value.",
        category: "ScienceCenter",
        image: AppIcons.ScienceCenter4,
      },
      {
        id: 5,
        title: "Services Showcase",
        description: "Dedicated sections for services and industry value.",
        category: "ScienceCenter",
        image: AppIcons.ScienceCenter5,
      },
      {
        id: 6,
        title: "Clean Homepage Layout",
        description: "Modern look with organized sections and dynamic CTA.",
        category: "ScienceCenter",
        image: AppIcons.ScienceCenter1,
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
    "The platform streamlined event workflows, improved participant experience, and provided greater control and scalability.",
  values: [
    {
      title: "Easy Registration Management",
      description:
        "Simplified attendee sign-up with automated confirmations, status tracking, and participant records.",
      icon: "mdi:clipboard-account-outline",
    },
    {
      title: "Automated Discount Handling",
      description:
        "Smart discount logic applied vouchers, group pricing, and early bird rates without manual intervention.",
      icon: "mdi:tag-outline",
    },
    {
      title: "Instant Certificate Delivery",
      description:
        "Participants received secure, branded certificates automatically upon event or course completion.",
      icon: "mdi:certificate-outline",
    },
    {
      title: "Operational Insight Clarity",
      description:
        "Dashboards and reports provided real-time visibility into registrations, payments, and engagement metrics.",
      icon: "mdi:chart-line",
    },
    {
      title: "Scalable Event Platform",
      description:
        "Designed to handle events of any size with flexible session management, integrations, and future-ready architecture.",
      icon: "mdi:calendar-multiselect",
    },
  ],
}
,
};
export default ScienceCenterData;
