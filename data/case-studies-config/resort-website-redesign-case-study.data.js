import { AppIcons } from "@/data/appIcons";
import { BASE_URL } from "@/lib/utils/baseUrl";

const heritageResortData = {
  slug: "resort-website-redesign-case-study",
  heroSection: {
    title: "Heritage Resort Shark Bay",
    HeroImage: AppIcons.Heritage1,
    highlight: "Digital Transformation",
    description:
      "Transforming a picturesque oceanfront resort's digital presence through modern web design, CMS integration, and SEO optimization to drive bookings and enhance guest engagement.",
    location: {
      icon: "mdi:map-marker",
      label: "Denham, Western Australia",
    },
    industry: {
      icon: "mdi:trophy-outline",
      label: "Hospitality & Tourism",
    },
    services: [
      {
        name: "Web Design",
        icon: "mdi:web",
        href: "/services/web-application-development",
      },
      {
        name: "CMS Integration",
        icon: "material-symbols:integration-instructions-outline-rounded",
        href: "/services/web-application-development",
      },
      {
        name: "Third-Party Integration",
        icon: "material-symbols:integration-instructions",
        href: "/services/web-application-development",
      },
      {
        name: "User Experience (UX)",
        icon: "fluent:design-ideas-20-filled",
        href: "/services/ui-ux-design-and-development",
      },
    ],
    card: {
      mainIcon: "mdi:web",
      lines: ["w-3-4", "w-1-2"],
      iconRow: [
        { icon: "mdi:cellphone", bg: "bg-orange" },
        { icon: "mdi:magnify", bg: "bg-green" },
        { icon: "mdi:trending-up", bg: "bg-purple" },
      ],
    },
  },
  // metaConfig
metaConfig: {
  title: "Resort Website Redesign Case Study | Dallas Web Development",
  description:
    "Discover how our Dallas-based team revamped a resort website with mobile-first UX, CMS integration, and SEO optimization—boosting visibility and bookings.",
  keywords:
    "resort website redesign, hospitality website development, tourism SEO case study, hotel CMS integration, mobile-friendly website, Dallas web development company, booking system integration, UX for resorts",
  canonical: `${BASE_URL}/case-study/resort-website-redesign-case-study`,
  author: "Moltech Solutions Inc.",
  language: "English",
  distribution: "Global",
  rating: "General",
  revisitAfter: "7 days",
  openGraph: {
    title: "Resort Website Redesign Case Study | Dallas Hospitality Tech",
    description:
      "We modernized a resort website with a responsive UI, CMS, and SEO to drive more bookings and improve digital engagement across devices.",
    url: `${BASE_URL}/case-study/resort-website-redesign-case-study`,
    image: `${BASE_URL}/images/meta/case-study-resort-redesign.webp`,
    type: "article",
    locale: "en_US",
    siteName: "Moltech Solutions Inc.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resort Website Redesign Case Study | Web & SEO Experts Dallas",
    description:
      "Explore how our Dallas-based team transformed a resort’s website using responsive UX, SEO, and CMS—boosting guest experience and conversions.",
    image: `${BASE_URL}/images/meta/case-study-resort-redesign.webp`,
    site: "@MoltechInc",
    creator: "@MoltechInc",
  },
},

  projectDetails: {
    description:
      "The project aims to modernize the resort's website, enhance its visibility on search engines, and improve the overall digital user experience, which will lead to increased bookings, improved guest engagement, and easier content management for the client.",
  },
  aboutSection: {
    description1:
      "Heritage Resort Shark Bay is a picturesque oceanfront resort located in Denham, Western Australia. It’s known for its breathtaking views, proximity to Monkey Mia and Francois Peron National Park, and friendly hospitality. As a popular destination for both local and international travelers, the resort needed a refreshed digital presence to match its physical charm and meet growing online expectations.",
    industry: "Hospitality, Travel & Tourism",
    projectType: "Website Redesign, CMS Integration, SEO",
    technologies: [
      {
        name: ".NET Core",
        icon: "logos:dotnet",
        description: "Powerful cross-platform backend framework by Microsoft.",
      },
      {
        name: "API Development",
        icon: "material-symbols:api",
        description: "Designing robust RESTful APIs for system integrations.",
      },
      {
        name: "Next.js",
        icon: "logos:nextjs-icon",
        description: "React-based framework for server-side rendering and SEO.",
      },
      {
        name: "JavaScript",
        icon: "logos:javascript",
        description: "Core programming language for interactive web apps.",
      },
       {
        name: "HTML",
        icon: "logos:html-5",
        description: "Markup language for structuring content on the web.",
      },
      {
        name: "SCSS",
        icon: "vscode-icons:file-type-scss2",
        description: "Style sheets for beautiful, responsive UI.",
      },
      {
        name: "Bootstrap",
        icon: "logos:bootstrap",
        description: "Popular UI framework for quick and responsive design.",
      },
     
    ],
  },
  majorFeatures: {
    features: [
      {
        title: "Website Redesign",
        description:
          "Delivered a modern, mobile-friendly interface to enhance user experience and visual appeal",
        icon: "material-symbols:devices-fold",
      },
      {
        title: "CMS Integration",
        description:
          "Implemented a user-friendly Content Management System for easy updates on rooms, offers, and news.",
        icon: "material-symbols:integration-instructions-rounded",
      },
      {
        title: "SEO Optimization",
        description:
          "Improved metadata, image alt tags, page structure, and speed for better search engine visibility.",
        icon: "mdi:magnify-scan",
      },
      {
        title: "Content Structuring",
        description:
          "Organized information to showcase rooms, amenities, attractions, and guest reviews.",
        icon: "material-symbols:view-agenda-outline",
      },
      {
        title: "Performance Enhancement",
        description:
          "Reduced page load time and ensured cross-browser/device compatibility.",
        icon: "mdi:rocket-launch-outline",
      },
      {
        title: "On-Page Accessibility",
        description:
          "Optimized for clear navigation, mobile interaction, and faster decision-making.",
        icon: "mdi:accessibility",
      },
      {
        title: "Booking Module Integration",
        description: "Integration of third-party booking module.",
        icon: "material-symbols:calendar-month-outline",
      },
    ],
  },
  challengeSolution: {
    challenges: [
      {
        title: "Outdated Design",
        desc: "Non-mobile-friendly website with outdated aesthetics that didn't reflect the resort's premium quality.",
        icon: "mdi:cellphone",
      },
      {
        title: "Poor SEO Performance",
        desc: "Low search engine visibility with outdated metadata and poor page structure limiting online discovery.",
        icon: "mdi:magnify",
      },
      {
        title: "No Content Management",
        desc: "Lack of CMS made it difficult for staff to update room information, offers, and resort news.",
        icon: "mdi:database",
      },
      {
        title: "Limited User Engagement",
        desc: "Incomplete room and service details reduced user confidence and booking conversions.",
        icon: "mdi:account-group-outline",
      },
    ],
    solutions: [
      {
        title: "Modern Responsive Design",
        desc: "Delivered a beautiful, mobile-first design that showcases the resort's stunning location and amenities.",
        icon: "mdi:monitor",
      },
      {
        title: "SEO Best Practices",
        desc: "Implemented comprehensive SEO strategy with optimized metadata, image alt tags, and improved site structure.",
        icon: "mdi:magnify",
      },
      {
        title: "User-Friendly CMS",
        desc: "Integrated intuitive content management system enabling easy updates to rooms, offers, and news content.",
        icon: "mdi:database",
      },
      {
        title: "Performance Optimization",
        desc: "Enhanced site speed, cross-browser compatibility, and integrated third-party booking functionality.",
        icon: "mdi:flash-outline",
      },
    ],
  },
  projectSnippets: {
    projectSnippets: [
      {
        id: 1,
        title: "Homepage Hero Section",
        description: "Stunning oceanfront view with modern booking interface",
        category: "Heritage Resort",
        image: AppIcons.Heritage1,
      },
      {
        id: 2,
        title: "Room Gallery",
        description: "Interactive room showcase with detailed amenities",
        category: "Heritage Resort",
        image: AppIcons.Heritage2,
      },
      {
        id: 3,
        title: "Mobile Responsive Design",
        description: "Seamless experience across all devices",
        category: "Heritage Resort",
        image: AppIcons.Heritage3,
      },
      {
        id: 4,
        title: "CMS Dashboard",
        description: "User-friendly content management interface",
        category: "Heritage Resort",
        image: AppIcons.Heritage4,
      },
      {
        id: 5,
        title: "Booking Integration",
        description: "Third-party booking system integration",
        category: "Heritage Resort",
        image: AppIcons.Heritage5,
      },
      {
        id: 6,
        title: "Clean Homepage Layout",
        description: "Modern look with organized sections and dynamic CTA.",
        category: "Heritage Resort",
        image: AppIcons.Heritage1,
      },
    ],
  },
  // testimonialSection: {
  //     rating: 5,
  //     quote: "TechSolutions completely transformed our digital presence. The new website not only looks stunning but has significantly increased our online bookings. The CMS makes it so easy for our team to keep content fresh and relevant.",
  //     author: "Sarah Mitchell",
  //     title: "General Manager, Heritage Resort Shark Bay"
  // },
resultsSection: {
  title: "Business Values Provided",
  description:
    "The digital transformation delivered significant value across key business areas.",
  values: [
    {
      title: "Enhanced Guest Experience",
      description:
        "Personalized interfaces, intuitive navigation, and mobile optimization elevated the overall guest journey.",
      icon: "material-symbols:hotel-class",
    },
    {
      title: "Higher Booking Potential",
      description:
        "Conversion-focused design and integrated booking flows increased customer confidence and booking rates.",
      icon: "mdi:calendar-check-outline",
    },
    {
      title: "Content Control & Flexibility",
      description:
        "User-friendly CMS empowered teams to update offers, images, and content without technical support.",
      icon: "ph:sliders-horizontal-bold",
    },
  ],
},

};

export default heritageResortData;
