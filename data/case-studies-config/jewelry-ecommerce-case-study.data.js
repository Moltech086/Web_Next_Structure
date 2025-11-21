import { BASE_URL } from "@/lib/utils/baseUrl";
import { AppIcons } from "../appIcons";


const mwiEloquenceData = {
  slug: "jewelry-ecommerce-case-study",
// metaConfig
metaConfig: {
  title:
    "Jewelry E-commerce B2B Portal Case Study | Scalable Web Development - USA",
  description:
    "Explore how we modernized a USA-based fine jewelry B2B portal with scalable architecture, role-based pricing, advanced filtering, and PDF automation. Built for performance, stability, and long-term growth.",
  keywords:
    "Jewelry ecommerce development, B2B jewelry portal, diamond ecommerce solutions, USA jewelry website development, jewelry software development, custom ASP.NET ecommerce, role-based pricing ecommerce, fine jewelry B2B software, Dallas web development company, ecommerce for jewelry retailers",
  canonical: `${BASE_URL}/case-study/jewelry-ecommerce-case-study`,
  author: "Moltech Solutions Inc.",
  language: "English",
  distribution: "Global",
  rating: "General",
  revisitAfter: "7 days",
  openGraph: {
    title:
      "Jewelry E-commerce B2B Portal Case Study | Scalable Web Development - USA",
    description:
      "Discover how our Dallas-based team helped a leading jewelry manufacturer in the USA streamline their B2B portal with role-based pricing, dynamic search, and automated sales tools.",
    url: `${BASE_URL}/case-study/jewelry-ecommerce-case-study`,
    image: `${BASE_URL}/images/meta/jewelry-ecommerce-og.webp`,
    type: "website",
    locale: "en_US",
    siteName: "Moltech Solutions Inc.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Jewelry E-commerce B2B Portal Case Study | Scalable Web Development - USA",
    description:
      "Learn how our Dallas-based team revamped a USA jewelry B2B portal with modern features like role-based pricing, advanced filtering, and sales memo automation.",
    image: `${BASE_URL}/images/meta/jewelry-ecommerce-og.webp`,
    site: "@MoltechInc",
    creator: "@MoltechInc",
  },
},


  heroSection: {
    title: "MWI Eloquence B2B E-Commerce Platform",
    HeroImage: AppIcons.MWIEloquence2, // Update with actual image
    highlight: "Scalable Jewelry B2B Portal with Role-Based Pricing",
    description: "MWI Eloquence connects jewelry distributors to retail establishments and is intended for B2B transactions. Retailers can browse the latest designs—engagement rings, earrings, bracelets, and more—organized by category, subcategory, and diamond attributes.",
    location: {
      icon: "mdi:store-outline",
      label: "Fine Jewelry – USA",
    },
    industry: {
      icon: "mdi:diamond-outline",
      label: "Fine Jewelry & Diamond Manufacturing",
    },
    services: [
      {
        name: "E-commerce Development",
        icon: "mdi:cart-outline",
        href: "/services/web-application-development",
      },
      {
        name: "B2B Portal",
        icon: "mdi:account-group-outline",
        href: "/services/custom-software-development",
      },
      {
        name: "Role-Based Pricing",
        icon: "mdi:currency-usd",
        href: "/services/web-application-development",
      },
    ],
    card: {
      mainIcon: "mdi:web",
      lines: ["w-3-4", "w-1-2"],
      iconRow: [
        { icon: "mdi:code-tags", bg: "bg-orange" },
        { icon: "mdi:bug", bg: "bg-red" },
        { icon: "mdi:database-cog-outline", bg: "bg-green" },
      ],
    },
  },
  projectDetails: {
    description:
      "MWI Eloquence connects jewelry distributors to retail establishments and is intended for B2B transactions. Retailers can browse the latest designs—engagement rings, earrings, bracelets, and more—organized by category, subcategory, and diamond attributes, such as color, shape, carat, and clarity.Because the system offers role-based pricing, different user groups are charged varying rates for the same products. Creating sales memoranda and downloading product PDFs lets users simplify order handling and customer contact.Designed for simplicity and efficiency, the portal streamlines jewelry professionals' purchases and searches all throughout the United States.",
  },
  aboutSection: {
    description1:
      "We’re proud to support respected retailers like Jared, Zales, Helzberg Diamonds, and other leading jewelers who are committed to offering their customers exceptional quality and craftsmanship. These partners rely on us for beautifully designed, responsibly sourced fine jewelry that meets the highest standards. Whether it’s engagement rings, anniversary bands, or timeless diamond pieces, they trust MWI Eloquence to deliver with consistency, integrity, and care.",
    industry: "Fine Jewelry & Diamond Manufacturing",
    projectType: "E-commerce Website, B2B Portal",
    technologies: [
      {
        name: "Microsoft .NET",
        icon: "devicon:dot-net-wordmark",
        description: "Enterprise-grade backend framework from Microsoft.",
      },
      {
        name: "ASP.NET",
        icon: "skill-icons:dotnet",
        description: "Web application framework for robust, secure apps.",
      },
      {
        name: "AJAX Toolkit",
        icon: "mdi:cached",
        description: "Asynchronous UI interactions and component updates.",
      },
      {
        name: "JavaScript",
        icon: "logos:javascript",
        description: "Dynamic frontend scripting for interactive elements.",
      },
      {
        name: "MS SQL Database",
        icon: "devicon:azuresqldatabase",
        description: "Reliable and scalable data storage engine.",
      },
      {
        name: "IIS Hosting",
        icon: "mdi:server",
        description: "Secure and high-performance Microsoft web hosting.",
      },
    ],
  },
  majorFeatures: {
    features: [
      {
        title: "Bulk Product Upload via Excel",
        description:
          "Easily add or update products in bulk using Excel sheets.",
        icon: "mdi:file-excel",
      },
      {
        title: "Role-Based Access Control",
        description:
          "Custom pricing and visibility based on user group permissions.",
        icon: "mdi:account-key",
      },
      {
        title: "Advanced Product Search & Filtering",
        description:
          "Search products using attributes like carat, color, shape, and clarity.",
        icon: "mdi:filter-menu",
      },
      {
        title: "Integrated Checkout Workflow",
        description: "Simplified B2B checkout system with payment logic.",
        icon: "mdi:cart-arrow-down",
      },
      {
        title: "Sales Memo PDF Generation",
        description: "Automated, downloadable PDFs for quotes and sales memos.",
        icon: "mdi:file-pdf-box",
      },
      {
        title: "Order Confirmation Emails",
        description: "Automated email notifications after order placement.",
        icon: "mdi:email-check-outline",
      },
      {
        title: "Product Detail with Suggestions",
        description: "Product pages include recommendations and similar items.",
        icon: "mdi:diamond-stone",
      },
    ],
  },
  challengeSolution: {
    challenges: [
      {
        title: "Hardcoded, Non-Standard Codebase",
        desc: "Lacked modularity, causing high maintenance effort and poor scalability.",
        icon: "mdi:code-braces",
      },
      {
        title: "Frequent Bugs & Instability",
        desc: "Issues like broken PDF generation and checkout failures affected usability.",
        icon: "mdi:bug",
      },
      {
        title: "Delayed Feature Deployment",
        desc: "Tight coupling and poor documentation slowed down updates.",
        icon: "mdi:timer-sand-empty",
      },
    ],
    solutions: [
      {
        title: "Code Refactoring & Stabilization",
        desc: "Restructured and modularized the codebase for better maintainability.",
        icon: "mdi:code-tags-check",
      },
      {
        title: "Bug Resolution & Testing",
        desc: "Fixed critical issues and implemented QA workflows.",
        icon: "mdi:bug-check-outline",
      },
      {
        title: "New Features & UX Enhancements",
        desc: "Added categories, advanced filtering, and dynamic PDF tools.",
        icon: "mdi:star-circle-outline",
      },
      {
        title: "Ongoing Partnership & Support",
        desc: "Continuous improvements, change requests, and performance updates.",
        icon: "mdi:handshake-outline",
      },
    ],
  },
  projectSnippets: {
    projectSnippets: [
      {
        id: 1,
        title: "Homepage Hero Section",
        description: "Stunning oceanfront view with modern booking interface",
        category: "MWIEloquence",
        image: AppIcons.MWIEloquence1,
      },
      {
        id: 2,
        title: "Room Gallery",
        description: "Interactive room showcase with detailed amenities",
        category: "MWIEloquence",
        image: AppIcons.MWIEloquence2,
      },
      {
        id: 3,
        title: "Mobile Responsive Design",
        description: "Seamless experience across all devices",
        category: "MWIEloquence",
        image: AppIcons.MWIEloquence3,
      },
      {
        id: 4,
        title: "CMS Dashboard",
        description: "User-friendly content management interface",
        category: "MWIEloquence",
        image: AppIcons.MWIEloquence4,
      },
      {
        id: 5,
        title: "Booking Integration",
        description: "Third-party booking system integration",
        category: "MWIEloquence",
        image: AppIcons.MWIEloquence5,
      },
      {
        id: 6,
        title: "Clean Homepage Layout",
        description: "Modern look with organized sections and dynamic CTA.",
        category: "MWIEloquence",
        image: AppIcons.MWIEloquence1,
      },
    ],
  },
  testimonialSection: {
    rating: 5,
    quote:
      "Moltech has great communication skills and easy to understand. He is able to learn complex processes with ease and suggest good technical solutions to complex business processes. He is reliable and meets all milestones set in a project",
    author: "Eric Freeman",
    title:
      "Viewpoint Construction Software, Crystal Reports and SQL Consultant.",
  },
resultsSection: {
  title: "Business Values Provided",
  description:
    "The digital transformation delivered significant value across key business areas.",
  values: [
    {
      title: "Operational Stability & Efficiency",
      description:
        "Robust infrastructure and automation reduced downtime and improved internal workflows across teams.",
      icon: "mdi:progress-wrench",
    },
    {
      title: "Scalable Product Expansion",
      description:
        "Modular architecture and API-first design enabled seamless feature rollouts and multi-market adaptability.",
      icon: "mdi:arrow-expand-all",
    },
    {
      title: "Improved User Experience",
      description:
        "Optimized UI/UX led to higher satisfaction, better retention, and reduced bounce rates.",
      icon: "fluent:design-ideas-24-regular",
    },
    {
      title: "Long-Term Technical Partnership",
      description:
        "Ongoing collaboration ensured continuous improvements, innovation, and aligned business growth.",
      icon: "mdi:handshake-outline",
    },
    {
      title: "Cost-Effective Modernization",
      description:
        "Legacy systems were upgraded with minimal disruption, reducing maintenance overhead and tech debt.",
      icon: "ph:currency-dollar-duotone",
    },
  ],
}
,
};

export default mwiEloquenceData;
