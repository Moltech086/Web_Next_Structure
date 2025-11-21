import { BASE_URL } from "@/lib/utils/baseUrl";
import { AppIcons } from "../appIcons";

const ACCAEvotingData = {
  slug: "secure-e-voting-platform-case-study",
  heroSection: {
    title: "ACCA – Association of Chartered Certified Accountants",
    HeroImage: AppIcons.acca1,
    highlight: "Secure Online Voting Platform",
    description:
      "We developed a digital eVoting system for ACCA, ensuring transparent, secure, and remote voting for members during AGMs and panel elections amid the COVID-19 pandemic.",
    location: {
      icon: "mdi:map-marker-outline",
      label: "Global – Professional Accounting Body",
    },
    industry: {
      icon: "mdi:briefcase-account-outline",
      label: "Professional Membership, Accounting",
    },
    services: [
      {
        name: "Online Voting Portal",
        icon: "mdi:vote-outline",
        href: "/services/custom-software-development",
      },
      {
        name: "Secure Authentication",
        icon: "mdi:lock-check-outline",
        href: "/services/web-application-development",
      },
      {
        name: "Audit Trail Logging",
        icon: "mdi:file-document-alert-outline",
        href: "/services/business-software-consulting",
      },
      {
        name: "Admin Dashboard",
        icon: "mdi:view-dashboard-outline",
        href: "/services/web-application-development",
      },
      {
        name: "Notification System",
        icon: "mdi:email-send-outline",
        href: "/services/ui-ux-design-and-development",
      },
    ],
    card: {
      mainIcon: "mdi:vote",
      lines: ["w-4-5", "w-2-3"],
      iconRow: [
        { icon: "mdi:account-key", bg: "bg-blue" },
        { icon: "mdi:chart-bar", bg: "bg-green" },
        { icon: "mdi:calendar-check", bg: "bg-orange" },
      ],
    },
  },
  metaConfig: {
  title: "Secure E-Voting Platform with Audit Trails & Real-Time Results | Case Study - USA",
  description:
    "Secure e-voting solution for remote AGMs with authentication, vote audit trails, real-time results, and governance-compliant reporting—built using .NET MVC and hosted on AWS.",
  keywords:
    "secure online voting system, e-voting platform USA, AGM voting software, digital election platform for associations, ASP.NET MVC voting system, governance-compliant voting tool, remote voting solution, real-time voting dashboard, vote auditing software, Dallas secure voting portal, member-based digital voting",
  canonical:
    `${BASE_URL}/case-study/secure-e-voting-platform-case-study`,
  author: "Moltech Solutions Inc.",
  language: "English",
  distribution: "Global",
  rating: "General",
  revisitAfter: "7 days",
  openGraph: {
    title: "Secure E-Voting Platform with Audit Trails & Real-Time Results | Case Study - USA",
    description:
      "We developed a secure digital voting platform with login authentication, real-time vote casting, audit trails, and reporting—helping associations ensure election integrity.",
    url: `${BASE_URL}/case-study/secure-e-voting-platform-case-study`,
    image: `${BASE_URL}/images/meta/secure-e-voting-platform-og.webp`,
    type: "website",
    locale: "en_US",
    site_name: "Moltech Solutions Inc.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Secure E-Voting Platform with Audit Trails & Real-Time Results | Case Study - USA",
    description:
      "Built by Moltech (Dallas), this e-voting platform enables secure, remote AGM elections with real-time vote tracking, authentication, reminders, and audit-ready reports.",
    image: `${BASE_URL}/images/meta/secure-e-voting-platform-og.webp`,
    site: "@MoltechInc",
    creator: "@MoltechInc",
  },
}
,
  projectDetails: {
    description:
      "We built a secure, scalable online voting platform that allowed ACCA members to log in, authenticate, and cast votes during AGMs remotely. This system ensured transparency, auditability, and seamless voting experiences for members, maintaining ACCA’s governance commitments even during pandemic restrictions.",
  },
  aboutSection: {
    description1:
      "The Association of Chartered Certified Accountants (ACCA) is a global professional accounting body providing qualifications and support for accountants worldwide. During the COVID-19 pandemic, ACCA required a reliable and secure method for conducting its panel elections and member voting processes digitally to uphold governance and participation standards.",
    description2:
      "We partnered with Flying Cape Technologies to develop a secure eVoting platform for ACCA, enabling members to vote remotely and safely during their Annual General Meetings and panel elections.",
    industry: "Professional Membership & Accounting",
    projectType: "eVoting Platform Development",
    technologies: [
      {
        name: "ASP.NET MVC",
        icon: "logos:dotnet",
        description:
          "Core backend framework used for vote management and session control.",
      },
      {
        name: "C#",
        icon: "logos:c-sharp",
        description:
          "Primary programming language for building backend logic and APIs.",
      },
      {
        name: "MS SQL Server",
        icon: "devicon:microsoftsqlserver-wordmark",
        description:
          "Stores secure vote logs and user credentials with traceability.",
      },
      
      {
        name: "AngularJS",
        icon: "devicon:angularjs",
        description:
          "Client-side framework used for dynamic dashboard and UI components.",
      },
      {
        name: "jQuery",
        icon: "skill-icons:jquery",
        description:
          "JavaScript library for simplifying DOM manipulation and Ajax requests.",
      },
      {
        name: "JavaScript",
        icon: "logos:javascript",
        description:
          "Programming language enabling interactivity and client-side logic.",
      },
      {
        name: "AJAX",
        icon: "iconamoon:playlist-repeat-list-bold",
        description:
          "Technique for asynchronous web requests to enhance user experience.",
      },
      {
        name: "HTML",
        icon: "logos:html-5",
        description:
          "Markup language for structuring and presenting web content.",
      },
      {
        name: "CSS",
        icon: "logos:css-3",
        description:
          "Stylesheet language used for layout and responsive design.",
      },
      {
        name: "Bootstrap",
        icon: "logos:bootstrap",
        description:
          "Frontend framework used for responsive and mobile-first design.",
      },
      {
        name: "AWS EC2",
        icon: "logos:aws-ec2",
        description:
          "Scalable cloud infrastructure hosting the web server and APIs.",
      },
      {
        name: "Windows Server IIS",
        icon: "mdi:server",
        description:
          "Web server software used for hosting ASP.NET applications.",
      },
      {
        name: "SVN (Version Control)",
        icon: "mdi:source-branch",
        description:
          "Version control system managing codebase history and collaboration.",
      },
      {
        name: "Distributed and Repository Architecture",
        icon: "mdi:source-repository-multiple",
        description:
          "Design pattern ensuring scalable, maintainable backend structure.",
      },
      {
        name: "Image Cropper",
        icon: "mdi:crop",
        description:
          "Tool integrated for image editing and resizing within the app.",
      },
    ],
  },
  majorFeatures: {
    features: [
      {
        title: "Secure User Authentication",
        description:
          "Members log in with secure credentials to access the voting portal.",
        icon: "mdi:account-lock-outline",
      },
      {
        title: "Real-Time Voting Interface",
        description:
          "Members can securely cast and confirm votes online through a responsive dashboard.",
        icon: "mdi:check-decagram-outline",
      },
      {
        title: "Voting Results Display",
        description:
          "Displays live or final voting results with full transparency.",
        icon: "mdi:chart-bar",
      },
      {
        title: "Voting Session Management",
        description:
          "Admins can create, configure, and control multiple voting sessions.",
        icon: "mdi:cog-outline",
      },
      {
        title: "Voter Access Control",
        description:
          "Admin tools for managing eligible voters and setting permissions.",
        icon: "mdi:account-check-outline",
      },
      {
        title: "Voting Results Reporting",
        description:
          "Detailed vote counts and result summaries exportable by admins.",
        icon: "mdi:file-chart-outline",
      },
      {
        title: "Notification & Reminder Scheduler",
        description:
          "Automated reminders to boost participation and inform voters about key events.",
        icon: "mdi:bell-ring-outline",
      },
      {
        title: "Admin Monitoring Dashboard",
        description:
          "Real-time dashboard for session tracking, voter activity, and result management.",
        icon: "mdi:view-dashboard-outline",
      },
    ],
  },
  challengeSolution: {
    challenges: [
      {
        title: "Pandemic Disruption",
        desc: "In-person AGMs and voting were not possible during COVID-19 lockdowns.",
        icon: "mdi:home-lock",
      },
      {
        title: "Governance & Transparency",
        desc: "Needed audit-ready records and secure vote verification.",
        icon: "mdi:shield-check-outline",
      },
      {
        title: "Member Accessibility",
        desc: "Global members required remote, user-friendly access to vote.",
        icon: "mdi:earth",
      },
    ],
    solutions: [
      {
        title: "Remote Voting System",
        desc: "Allowed secure participation in panel elections from any device, anywhere.",
        icon: "mdi:vote-outline",
      },
      {
        title: "Audit Trail & Access Logs",
        desc: "Tracked each vote and session for compliance verification.",
        icon: "mdi:file-clock-outline",
      },
      {
        title: "Notification Engine",
        desc: "Sent scheduled reminders before and during active voting periods.",
        icon: "mdi:email-send-outline",
      },
    ],
  },
  projectSnippets: {
    projectSnippets: [
      {
        id: 1,
        title: "Clean Homepage Layout",
        description: "Modern look with organized sections and dynamic CTA.",
        category: "ACCA",
        image: AppIcons.acca1,
      },
      {
        id: 2,
        title: "SEO Optimized Content",
        description: "Structured content aligned with SEO best practices.",
        category: "ACCA",
        image: AppIcons.acca2,
      },
      {
        id: 3,
        title: "Mobile-First Design",
        description: "Optimized layout for seamless access on all devices.",
        category: "ACCA",
        image: AppIcons.acca3,
      },
      {
        id: 4,
        title: "Services Showcase",
        description: "Dedicated sections for services and industry value.",
        category: "ACCA",
        image: AppIcons.acca4,
      },
      {
        id: 5,
        title: "Services Showcase",
        description: "Dedicated sections for services and industry value.",
        category: "ACCA",
        image: AppIcons.acca5,
      },
      {
        id: 6,
        title: "Clean Homepage Layout",
        description: "Modern look with organized sections and dynamic CTA.",
        category: "ACCA",
        image: AppIcons.acca1,
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
    "The custom-built voting platform empowered ACCA to conduct secure, scalable, and efficient elections in a digital-first world.",
  values: [
    {
      title: "Scalable Voting Platform for Future Needs",
      description:
        "Designed to support growing voter bases and evolving governance processes without performance trade-offs.",
      icon: "mdi:chart-timeline-variant",
    },
    {
      title: "Remote & Secure Voting During Pandemic",
      description:
        "Enabled members to participate safely from anywhere with encrypted access and identity validation.",
      icon: "mdi:shield-lock-outline",
    },
    {
      title: "Reduced Manual Logistics & Admin Burden",
      description:
        "Eliminated paper ballots, mailing costs, and manual tallying through digital automation and dashboards.",
      icon: "mdi:clipboard-text-clock-outline",
    },
  ],
}
,
};

export default ACCAEvotingData;
