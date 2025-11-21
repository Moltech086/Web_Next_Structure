// Centralized common schema data - single source of truth
export const commonSchemaData = {
  // Company Information
  companyName: "Moltech Solutions Inc.",
  companyUrl: "https://www.mol-tech.us/",
  companyDescription:
    "We provide custom software development, mobile apps, AI integration, and IT services for businesses globally.",

    creator:"@MoltechSolutions",
  // Logo Configuration
  logo: {
    "@type": "ImageObject",
    url: "https://www.mol-tech.us/logo.webp",
    width: 180,
    height: 65,
  },

  // Primary Address (USA Headquarters)
  primaryAddress: {
    "@type": "PostalAddress",
    streetAddress: "2000 N Central Expressway, Suite 220",
    addressLocality: "Plano",
    addressRegion: "TX",
    postalCode: "75074",
    addressCountry: "US",
  },

  // Contact Points (from website data)
  contactPoints: [
    {
      "@type": "ContactPoint",
      telephone: "+1-945-209-7691",
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: ["English"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+65 8753 5833",
      contactType: "customer service",
      areaServed: "SG",
      availableLanguage: ["English", "Chinese"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+91 81286 94374",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Gujarati"],
    },
    {
      "@type": "ContactPoint",
      email: "inquiry@mol-tech.us",
      contactType: "customer support",
      areaServed: "Global",
    },
  ],

  // Social Media Links (from website)
  socialMedia: [
    "https://www.facebook.com/moltechsolutions.pvt.ltd",
    "https://www.instagram.com/moltechsolutions.pvt.ltd/",
    "https://www.linkedin.com/company/moltech-solutions-inc/",
    "https://twitter.com/MoltechSolutions",
  ],

  // Technology Stack
  technologies: [
    "React.js Development",
    "Node.js Development",
    ".NET Core Development",
    "Mobile App Development",
    "AI & Machine Learning",
    "Cloud Computing",
    "DevOps & CI/CD",
    "Database Design",
    "API Development",
    "UI/UX Design",
    "Software Testing",
    "Legacy System Modernization",
  ],

  // Areas Served
  areasServed: [
    { "@type": "AdministrativeArea", name: "Dallas–Fort Worth, TX" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Singapore" },
    { "@type": "Country", name: "Switzerland" },
    { "@type": "Country", name: "India" },
  ],
};

export default commonSchemaData;
