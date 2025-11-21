// Centralized technology configuration
export const technologies = [
  {
    slug: "react-js-development",
    title: "React JS Development Services",
    description: "Hire Dallas-based React JS experts to craft fast, scalable web apps that boost revenue. Free 30-min strategy call.",
    keywords: [
      "React JS development services",
      "React development company Dallas",
      "React JS experts USA",
      "React web application development",
      "React frontend development",
      "React JS consulting",
      "React development team",
      "React JS outsourcing"
    ],
    ogImage: "reactIcon-og.webp",
    twitterImage: "reactIcon-og.webp",
    canonical: "/technology/react-js-development/"
  },
  {
    slug: "angular-development-services",
    title: "Angular Development Services", 
    description: "Expert Angular development services for enterprise web applications. Build robust, scalable, and maintainable solutions.",
    keywords: [
      "Angular development services",
      "Angular web development",
      "Angular experts USA",
      "Angular consulting",
      "Angular development company",
      "Angular application development",
      "Angular frontend development",
      "Angular outsourcing"
    ],
    ogImage: "angularIcon.webp",
    twitterImage: "angularIcon.webp",
    canonical: "/technology/angular-development-services/"
  },
  {
    slug: "react-native-development",
    title: "React Native Development Service",
    description: "Expert React Native and hybrid mobile development services for USA and Canada. Build fast, scalable, cost-effective apps with Moltech Solutions Inc.",
    keywords: [
      "React Native development services",
      "React Native mobile app development",
      "Hybrid mobile app development",
      "React Native experts USA",
      "Cross-platform mobile development",
      "React Native consulting",
      "Mobile app development company",
      "React Native outsourcing"
    ],
    ogImage: "flutterIcon.webp",
    twitterImage: "flutterIcon.webp",
    canonical: "/technology/react-native-development/"
  },
  {
    slug: "python-development-services",
    title: "Python Development Services",
    description: "Build secure, scalable, and business-focused Python applications with Moltech Solutions Inc. From MVPs to enterprise systems—we deliver results.",
    keywords: [
      "Python development services",
      "Custom Python application development",
      "Python software development company",
      "Hire python developers",
      "Python web development",
      "Python consulting services",
      "Python development team",
      "Python outsourcing"
    ],
    ogImage: "pythonIcon.webp",
    twitterImage: "pythonIcon.webp",
    canonical: "/technology/python-development-services/"
  },
  {
    slug: "nodejs-development-services",
    title: "Node.js Development Services",
    description: "Expert Node.js development services for scalable backend solutions. Build high-performance APIs and server-side applications.",
    keywords: [
      "Node.js development services",
      "Node.js backend development",
      "Node.js API development",
      "Node.js experts USA",
      "Node.js consulting",
      "Node.js development company",
      "Node.js outsourcing",
      "Backend development services"
    ],
    ogImage: "nodejsIcon.webp",
    twitterImage: "nodejsIcon.webp",
    canonical: "/technology/nodejs-development-services/"
  },
  {
    slug: "next-js-ssr-development-services",
    title: "Next.js SSR Development Services",
    description: "Professional Next.js development with server-side rendering. Build fast, SEO-friendly web applications with expert developers.",
    keywords: [
      "Next.js development services",
      "Next.js SSR development",
      "Next.js experts USA",
      "Next.js consulting",
      "Next.js development company",
      "Server-side rendering",
      "Next.js outsourcing",
      "React SSR development"
    ],
    ogImage: "nextjsIcon.webp",
    twitterImage: "nextjsIcon.webp",
    canonical: "/technology/next-js-ssr-development-services/"
  },
  {
    slug: "javascript-development",
    title: "JavaScript Development Services",
    description: "Expert JavaScript development services for modern web applications. Build interactive, responsive, and scalable solutions.",
    keywords: [
      "JavaScript development services",
      "JavaScript web development",
      "JavaScript experts USA",
      "JavaScript consulting",
      "JavaScript development company",
      "Frontend JavaScript development",
      "JavaScript outsourcing",
      "Modern JavaScript development"
    ],
    ogImage: "javascriptIcon.webp",
    twitterImage: "javascriptIcon.webp",
    canonical: "/technology/javascript-development/"
  },
  {
    slug: "microsoft-dotnet-8-development",
    title: "Microsoft .NET 8 Development Services",
    description: "Expert .NET 8 development services for enterprise applications. Build robust, scalable, and high-performance solutions.",
    keywords: [
      ".NET 8 development services",
      ".NET development company",
      ".NET experts USA",
      ".NET consulting",
      "Microsoft .NET development",
      ".NET application development",
      ".NET outsourcing",
      "Enterprise .NET development"
    ],
    ogImage: "dotnetIcon.webp",
    twitterImage: "dotnetIcon.webp",
    canonical: "/technology/microsoft-dotnet-8-development/"
  },
  {
    slug: "flutter-development-services",
    title: "Flutter Development Services",
    description: "Expert Flutter development services for cross-platform mobile applications. Build beautiful, fast, and native-like apps.",
    keywords: [
      "Flutter development services",
      "Flutter mobile app development",
      "Flutter experts USA",
      "Flutter consulting",
      "Cross-platform mobile development",
      "Flutter development company",
      "Flutter outsourcing",
      "Dart development services"
    ],
    ogImage: "flutterIcon.webp",
    twitterImage: "flutterIcon.webp",
    canonical: "/technology/flutter-development-services/"
  },
  {
    slug: "figma-design-services",
    title: "Figma Design Services",
    description: "Professional Figma design services for UI/UX. Create stunning, user-friendly interfaces with expert designers.",
    keywords: [
      "Figma design services",
      "UI/UX design services",
      "Figma experts USA",
      "Figma consulting",
      "Design system development",
      "Figma design company",
      "UI design services",
      "UX design services"
    ],
    ogImage: "figmaIcon.webp",
    twitterImage: "figmaIcon.webp",
    canonical: "/technology/figma-design-services/"
  }
];

// Helper functions
export const getTechnologyBySlug = (slug) => {
  return technologies.find(tech => tech.slug === slug);
};

export const getAllTechnologySlugs = () => {
  return technologies.map(tech => tech.slug);
};

export const getTechnologyConfig = (slug) => {
  return getTechnologyBySlug(slug);
};

export default technologies;
