import { AppIcons } from "@/data/appIcons";
import { BASE_URL } from "@/lib/utils/baseUrl";

const technologyConsultingData = {
  slug: "technology-consulting-website-design-case-study",
  
  heroSection: {
    title: "Technology Consulting",
    HeroImage: AppIcons.Brightlogix1, // Update this icon reference
    highlight: "Website Design & Development",
    description: "A comprehensive technology consulting website designed to showcase expertise in digital transformation, software solutions, and business consulting services.",
    location: {
      icon: "mdi:map-marker",
      label: "USA",
    },
    industry: {
      icon: "mdi:briefcase-outline",
      label: "Technology Consulting",
    },
    services: [
      {
        name: "Web Design",
        icon: "mdi:monitor-dashboard",
        href: "/services/web-application-development",
      },
      {
        name: "Business Consulting",
        icon: "mdi:briefcase-outline",
        href: "/services/business-software-consulting",
      },
    ],
    card: {
      mainIcon: "mdi:monitor-dashboard",
      lines: ["w-3-4", "w-1-2"],
      iconRow: [
        { icon: "mdi:cellphone", bg: "bg-orange" },
        { icon: "mdi:magnify", bg: "bg-green" },
        { icon: "mdi:lightbulb-outline", bg: "bg-purple" },
      ],
    },
  },
  // metaConfig
metaConfig: {
  title:
    "Technology Consulting Website Design Case Study | Web Design & SEO - USA",
  description:
    "Discover how our Dallas-based team helped a U.S. technology firm transform its digital presence with a modern website redesign, mobile optimization, and SEO enhancements.",
  keywords:
    "technology consulting website design, web redesign for IT companies, USA web development services, software company website design, SEO for tech businesses, Dallas web design agency, mobile-friendly website design USA, B2B web consulting USA, modern IT services website, professional website redesign",
  canonical: `${BASE_URL}/case-study/technology-consulting-website-design-case-study`,
  author: "Moltech Solutions Inc.",
  language: "English",
  distribution: "Global",
  rating: "General",
  revisitAfter: "7 days",
  openGraph: {
    title:
      "Technology Consulting Website Redesign Case Study | Web Design & SEO - USA",
    description:
      "See how we helped a USA-based tech company modernize its online presence with clean design, structured content, mobile responsiveness, and improved SEO.",
    url: `${BASE_URL}/case-study/technology-consulting-website-design-case-study`,
    image: `${BASE_URL}/images/meta/technology-consulting-og.webp`,
    type: "website",
    locale: "en_US",
    siteName: "Moltech Solutions Inc.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Technology Consulting Website Redesign Case Study | Web Design & SEO - USA",
    description:
      "Learn how we revamped a U.S. tech consulting site with modern design, SEO optimization, and mobile-friendly UX to improve visibility and engagement.",
    image: `${BASE_URL}/images/meta/technology-consulting-og.webp`,
    site: "@MoltechInc",
    creator: "@MoltechInc",
  },
},

  projectDetails: {
    description:
      "We collaborated with BrightLogix to redesign their website, creating a clean and modern look that reflects their expertise in software development and benefits administration. We also improved their SEO to increase visibility and attract more visitors. Additionally, we updated and organized their website content to effectively communicate their services and industry focus, making it easier for potential customers to understand their value.",
  },
  aboutSection: {
    description1:
      "BrightLogix’s customers are organizations seeking tailored, high-quality software solutions to modernize their operations and improve efficiency. They include labor unions, healthcare funds, pension and benefit trusts, and nonprofits that manage complex participant and benefits data. These customers value reliable technology partners who understand their industry’s specific needs and compliance requirements, helping them navigate digital transformation while reducing administrative burdens.",
    industry: "Technology",
    projectType: "Website Redesign & Development",
    technologies: [
      {
        name: ".NET Core",
        icon: "devicon:dotnetcore",
        description:
          "Secure and scalable web development with Microsoft’s .NET Core.",
      },
      {
        name: "API Development",
        icon: "material-symbols:api",
        description:
          "Custom-built APIs for seamless data integration and scalability.",
      },
      {
        name: "Next.js",
        icon: "logos:nextjs-icon",
        description:
          "React-based framework supporting SEO and server-side rendering.",
      },
      {
        name: "JavaScript",
        icon: "logos:javascript",
        description:
          "Essential scripting language for dynamic and responsive features.",
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
        name: "Bootstrap",
        icon: "logos:bootstrap",
        description:
          "Component framework for rapid and consistent UI development.",
      },
    ],
  },
  majorFeatures: {
    features: [
      {
        title: "Website Redesign",
        description:
          "Modern and clean layout designed for intuitive user interaction.",
        icon: "mdi:monitor-cellphone",
      },
      {
        title: "SEO Optimization",
        description:
          "Improved metadata, structure, and performance for visibility.",
        icon: "mdi:magnify-scan",
      },
      {
        title: "Content Structuring",
        description: "Clear messaging for services and industry expertise.",
        icon: "mdi:view-list-outline",
      },
      {
        title: "Mobile-Friendly Design",
        description:
          "Consistent performance across desktop, tablet, and mobile.",
        icon: "mdi:cellphone-link",
      },
      {
        title: "Fast Loading Performance",
        description:
          "Optimized speed for better user engagement and retention.",
        icon: "mdi:rocket-launch-outline",
      },
      {
        title: "Clear Calls-to-Action",
        description:
          "Strategically placed buttons and links to drive conversions.",
        icon: "mdi:gesture-tap-button",
      },
    ],
  },
  challengeSolution: {
    challenges: [
      {
        title: "Outdated Design",
        desc: "Previous site didn’t reflect the company’s technological expertise or professionalism.",
        icon: "mdi:monitor",
      },
      {
        title: "Low SEO Visibility",
        desc: "Poorly structured pages and metadata limited discoverability.",
        icon: "mdi:magnify",
      },
      {
        title: "Disorganized Content",
        desc: "Lack of clarity made it difficult for prospects to understand services.",
        icon: "mdi:format-list-bulleted",
      },
      {
        title: "Poor Mobile Experience",
        desc: "Website wasn’t optimized for smartphones and tablets.",
        icon: "mdi:cellphone-off",
      },
    ],
    solutions: [
      {
        title: "Modern Redesign",
        desc: "Created a sleek layout that communicates professionalism and trust.",
        icon: "mdi:palette-swatch",
      },
      {
        title: "Content Optimization",
        desc: "Structured service pages and messaging for clarity and hierarchy.",
        icon: "mdi:file-document-outline",
      },
      {
        title: "Mobile Responsiveness",
        desc: "Ensured seamless experience across devices and screen sizes.",
        icon: "mdi:cellphone-link",
      },
      {
        title: "SEO Improvements",
        desc: "Boosted search ranking with better tags, page speed, and structure.",
        icon: "mdi:rocket-launch-outline",
      },
    ],
  },
  projectSnippets: {
    projectSnippets: [
      {
        id: 1,
        title: "Clean Homepage Layout",
        description: "Modern look with organized sections and dynamic CTA.",
        category: "Brightlogix",
        image: AppIcons.Brightlogix1,
      },
      {
        id: 2,
        title: "SEO Optimized Content",
        description: "Structured content aligned with SEO best practices.",
        category: "Brightlogix",
        image: AppIcons.Brightlogix2,
      },
      {
        id: 3,
        title: "Mobile-First Design",
        description: "Optimized layout for seamless access on all devices.",
        category: "Brightlogix",
        image: AppIcons.Brightlogix3,
      },
      {
        id: 4,
        title: "Services Showcase",
        description: "Dedicated sections for services and industry value.",
        category: "Brightlogix",
        image: AppIcons.Brightlogix4,
      },
      {
        id: 5,
        title: "Services Showcase",
        description: "Dedicated sections for services and industry value.",
        category: "Brightlogix",
        image: AppIcons.Brightlogix5,
      },
      {
        id: 6,
        title: "Clean Homepage Layout",
        description: "Modern look with organized sections and dynamic CTA.",
        category: "Brightlogix",
        image: AppIcons.Brightlogix1,
      },
    ],
  },
  testimonialSection: {
    rating: 5,
    quote:
      "I’ve had the pleasure of working with Nigam since 2005 across a number of projects and client accounts. Over the years, Nigam and his development team have consistently delivered outstanding work across a wide range of technologies. Their depth of expertise, attention to detail, and commitment to client success have always stood out.",
    author: "Carl Auwarter",
    title: "USA",
  },
  resultsSection: {
    title: "Business Values Provided",
    description:
      "The digital transformation delivered significant value across key business areas.",
    values: [
      {
        title: "Enhanced Online Presence",
        description:
          "A sleek design, fast performance, and rich visuals helped attract and engage more potential customers online.",
        icon: "mdi:monitor-star",
      },
      {
        title: "Clear Service Communication",
        description:
          "Well-structured content and transparent messaging built trust and helped convert more curious visitors into leads.",
        icon: "mdi:message-text-outline",
      },
      {
        title: "Improved Search Visibility",
        description:
          "Technical SEO, structured data, and keyword optimization helped increase discoverability in search engines.",
        icon: "mdi:magnify-expand",
      },
      {
        title: "Mobile-Friendly Access",
        description:
          "Responsive layouts ensured a smooth and intuitive experience for users across smartphones and tablets.",
        icon: "mdi:cellphone-link",
      },
    ],
  },
};

export default technologyConsultingData;
