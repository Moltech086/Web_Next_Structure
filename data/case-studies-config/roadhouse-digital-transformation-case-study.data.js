import { AppIcons } from "@/data/appIcons";
import { BASE_URL } from "@/lib/utils/baseUrl";
const pardooRoadhouseData = {
  
  slug: "roadhouse-digital-transformation-case-study",
  heroSection: {
    title: "Pardoo Roadhouse",
    HeroImage: AppIcons.Pardoo1,
    highlight: "Digital Rebuild & SEO",
    description:
      "Rebuilding a trusted outback stop’s digital presence post-Cyclone Ilsa, focusing on mobile responsiveness, real-time updates, and SEO to boost visibility and visitor experience.",
    location: {
      icon: "mdi:map-marker",
      label: "Pardoo, Western Australia",
    },
    industry: {
      icon: "mdi:gas-station",
      label: "Travel, Hospitality, Fuel & Services",
    },
    services: [
      {
        name: "Web Development",
        icon: "mdi:web",
        href: "/services/web-application-development",
      },
      {
        name: "Business Consulting",
        icon: "mdi:briefcase-outline",
        href: "/services/business-software-consulting",
      },
      {
        name: "Modernization",
        icon: "material-symbols:build-circle-outline",
        href: "/services/custom-software-development",
      },
    ],
    card: {
      mainIcon: "mdi:web",
      lines: ["w-3-4", "w-1-2"],
      iconRow: [
        { icon: "mdi:cellphone", bg: "bg-orange" },
        { icon: "mdi:magnify", bg: "bg-green" },
        { icon: "mdi:rocket-launch-outline", bg: "bg-purple" },
      ],
    },
  },
  // metaConfig
metaConfig: {
  title:
    "Digital Transformation Case Study | Web Development & SEO Services – Moltech USA",
  description:
    "Explore how Moltech Solutions Inc. modernized a travel & hospitality brand’s digital presence with mobile-first web development, SEO optimization, and scalable content management. Based in Dallas, serving clients across the USA.",
  keywords:
    "digital transformation case study, web development for travel & hospitality, SEO optimization, mobile-first website design, scalable CMS solutions, Dallas web development, USA web services, Moltech Solutions Inc., website redesign case study, hospitality brand digital transformation",
  canonical: `${BASE_URL}/case-study/roadhouse-digital-transformation-case-study`,
  author: "Moltech Solutions Inc.",
  language: "English",
  distribution: "Global",
  rating: "General",
  revisitAfter: "7 days",
  openGraph: {
    title:
      "Digital Transformation Case Study | Web Development & SEO Services – Moltech USA",
    description:
      "See how Moltech Solutions Inc., based in Dallas, helped a hospitality and fuel service brand rebuild its website with modern UI, CMS control, and SEO optimization to drive growth.",
    url: `${BASE_URL}/case-study/roadhouse-digital-transformation-case-study`,
    image: `${BASE_URL}/images/meta/case-study-roadhouse-digital-transformation.webp`,
    type: "article",
    locale: "en_US",
    siteName: "Moltech Solutions Inc.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Digital Transformation Case Study | Web Development & SEO Services – Moltech USA",
    description:
      "Learn how Moltech Solutions revamped a hospitality brand’s website with modern design, CMS integration, and local SEO optimization.",
    image: `${BASE_URL}/images/meta/case-study-roadhouse-digital-transformation.webp`,
    site: "@MoltechInc",
    creator: "@MoltechInc",
  },
},

  projectDetails: {
    description:
      "Pardoo Roadhouse partnered with us to revamp their digital presence following the impact of Cyclone Ilsa. The goal was to modernize their website, improve search engine visibility, and enable easy content management. We delivered a fully redeveloped, mobile-friendly website that highlights their services, attractions, and facilities. A user-friendly CMS was integrated to allow their team to update content effortlessly. Additionally, we optimized the site for SEO, enhancing discoverability for travelers searching for outback stops, fuel access, and local attractions. The result is a refreshed digital experience that supports Pardoo’s continued growth and visitor engagement.",
  },
  aboutSection: {
    description1:
      "Pardoo Roadhouse is a trusted outback stop in Western Australia, offering 24/7 fuel, food, supplies, and caravan park facilities. After Cyclone Ilsa in 2023, they rebuilt stronger, with a focus on enhancing the visitor experience. Our website development services helped them showcase their offerings, share real-time updates, and attract both new and returning travelers through a modern, mobile-friendly online presence that reflects the spirit of Pardoo: resilient, welcoming, and ready for adventure.",
    industry: "Travel, Hospitality, Fuel & Services",
    projectType: "Web Development & SEO",
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
        title: "Mobile-Responsive Design",
        description:
          "Seamless experience across mobile, tablet, and desktop devices.",
        icon: "material-symbols:devices-fold",
      },
      {
        title: "Content Management System (CMS)",
        description:
          "Enabled Pardoo team to easily manage and update site content.",
        icon: "mdi:database",
      },
      {
        title: "On-Page SEO Optimization",
        description:
          "Improved visibility through optimized metadata, keywords, and structure.",
        icon: "mdi:magnify-scan",
      },
      {
        title: "24/7 Fuel Service Information",
        description:
          "Displayed fuel types, availability, and card access for travelers.",
        icon: "mdi:gas-station-outline",
      },
      {
        title: "Contact & Location Integration",
        description:
          "Embedded Google Maps, contact forms, and quick access to support.",
        icon: "mdi:map-marker-radius-outline",
      },
    ],
  },
  challengeSolution: {
    challenges: [
      {
        title: "Outdated & Non-Mobile-Friendly Website",
        desc: "The old site lacked responsiveness and didn’t represent the new direction after Cyclone Ilsa.",
        icon: "mdi:cellphone",
      },
      {
        title: "Poor SEO Performance",
        desc: "Minimal visibility in search engines made it hard for travelers to discover them online.",
        icon: "mdi:magnify",
      },
      {
        title: "No Content Management",
        desc: "Updates required developer assistance, slowing down information sharing.",
        icon: "mdi:database",
      },
      {
        title: "Incomplete Service Showcase",
        desc: "Core offerings like fuel access and nearby attractions weren’t clearly presented.",
        icon: "mdi:account-group-outline",
      },
    ],
    solutions: [
      {
        title: "Modern Responsive Redesign",
        desc: "Implemented a mobile-first, visually appealing design aligned with the brand.",
        icon: "mdi:monitor",
      },
      {
        title: "SEO Implementation",
        desc: "Optimized metadata, keywords, and structure for stronger discoverability.",
        icon: "mdi:magnify",
      },
      {
        title: "CMS Integration",
        desc: "Added a user-friendly CMS for quick and independent updates.",
        icon: "mdi:database",
      },
      {
        title: "Service Highlighting",
        desc: "Showcased 24/7 fuel access, caravan facilities, and attractions like Cape Keraudren.",
        icon: "mdi:star-circle-outline",
      },
    ],
  },
  projectSnippets: {
    projectSnippets: [
      {
        id: 1,
        title: "Homepage Hero Section",
        description: "Stunning oceanfront view with modern booking interface",
        category: "Pardoo Roadhouse",
        image: AppIcons.Pardoo1,
      },
      {
        id: 2,
        title: "Room Gallery",
        description: "Interactive room showcase with detailed amenities",
        category: "Pardoo Roadhouse",
        image: AppIcons.Pardoo2,
      },
      {
        id: 3,
        title: "Mobile Responsive Design",
        description: "Seamless experience across all devices",
        category: "Pardoo Roadhouse",
        image: AppIcons.Pardoo3,
      },
      {
        id: 4,
        title: "CMS Dashboard",
        description: "User-friendly content management interface",
        category: "Pardoo Roadhouse",
        image: AppIcons.Pardoo4,
      },
      {
        id: 5,
        title: "Booking Integration",
        description: "Third-party booking system integration",
        category: "Pardoo Roadhouse",
        image: AppIcons.Pardoo5,
      },
      {
        id: 6,
        title: "Clean Homepage Layout",
        description: "Modern look with organized sections and dynamic CTA.",
        category: "Pardoo Roadhouse",
        image: AppIcons.Pardoo1,
      },
    ],
  },
  // testimonialSection: {
  //   rating: 5,
  //   quote:
  //     "Thanks to the digital overhaul, our website now tells the real story of Pardoo Roadhouse. It's fast, mobile-friendly, and truly reflects who we are. Travelers love it—and so do we!",
  //   author: "Karen Dawson",
  //   title: "Operations Manager, Pardoo Roadhouse",
  // },
 resultsSection: {
  title: "Business Values Provided",
  description:
    "The digital transformation delivered significant value across key business areas.",
  values: [
    {
      title: "Stronger Online Presence",
      description:
        "Modern design, mobile-first approach, and SEO best practices elevated brand visibility across digital channels.",
      icon: "mdi:web",
    },
    {
      title: "Improved Customer Experience",
      description:
        "Faster load times, clear CTAs, and an intuitive interface created a smoother, more satisfying user journey.",
      icon: "material-symbols:sentiment-satisfied",
    },
    {
      title: "Easy Content Management",
      description:
        "A modular CMS structure allowed quick updates to pages, banners, and promotions without developer involvement.",
      icon: "mdi:file-edit-outline",
    },
    {
      title: "Tourism & Revenue Growth",
      description:
        "Increased reach and streamlined booking paths contributed to more visits, longer stays, and higher revenue.",
      icon: "mdi:cash-multiple",
    },
  ],
}
,
};

export default pardooRoadhouseData;
