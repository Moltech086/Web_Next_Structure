import { BASE_URL } from "@/lib/utils/baseUrl";

export const blogConfig = {
  slug: "website-performance-optimization-google-rankings",

  metaConfig: {
    title:
      "Website Performance Optimization Services | Boost Google Rankings & SEO",
    description:
      "Enhance your website performance and Google rankings with our expert optimization services, including Next.js development, SEO, and digital transformation.",
    canonical: "/blog/website-performance-optimization-google-rankings",
    author: "Moltech Solutions Inc.",
    publisher: "Moltech Solutions Inc.",
    imageUrl: `${BASE_URL}/images/meta/website-performance-optimization-google-rankings-og.webp`,
    twitterImage: `${BASE_URL}/images/meta/website-performance-optimization-google-rankings-og.webp`,
    keywords: [
      "Website Performance",
      "SEO",
      "Google Rankings",
      "Next.js",
      "Core Web Vitals",
      "Page Speed",
      "Digital Transformation",
      "Moltech Services",
    ],
    section: "SEO & Performance Optimization",
  },

  heroData: {
    title: "Website Performance and Its Impact on Google Rankings",
    highlight:
      "Improve Your Website Speed, SEO Rankings, and Conversions with Modern Performance Engineering",
    description:
      "Understand how Core Web Vitals, Next.js optimization, and performance-driven architecture influence your Google rankings and digital growth. Discover actionable steps and insights from Moltech’s SEO experts.",
    author: "Moltech Solutions Inc.",
    date: "Oct 15th, 2025",
    stats: [
      {
        icon: "mdi:google",
        title: "SEO Ranking Boost",
        desc: "Enhance search visibility through Core Web Vitals and site performance improvements.",
      },
      {
        icon: "mdi:rocket-launch",
        title: "Next.js Optimization",
        desc: "Leverage Next.js for faster rendering, caching, and user-centric experiences.",
      },
      {
        icon: "mdi:chart-line",
        title: "Measurable Growth",
        desc: "Turn page speed and SEO optimization into higher conversions and engagement.",
      },
    ],
  },

  tableOfContents: [
    {
      id: "introduction",
      title: "Website Performance and Its Impact on Google Rankings",
      level: 1,
    },
    {
      id: "core-web-vitals",
      title: "How Google Measures Website Performance — Core Web Vitals Explained",
      level: 1,
    },
    {
      id: "slow-websites",
      title: "Why Slow Websites Lose Visibility and Revenue ?",
      level: 1,
    },
    {
      id: "technical-seo",
      title: "Technical SEO Meets Performance: Crawlability and Rendering",
      level: 1,
    },
    {
      id: "optimization-playbook",
      title: "Practical Optimization Playbook: Lazy Loading, CDN, and Caching",
      level: 1,
    },
    {
      id: "nextjs-performance",
      title: "Improving Website Performance in Next.js: Hands-On Examples",
      level: 1,
    },
    {
      id: "common-misconceptions",
      title: "Common Misconceptions That Hurt Performance",
      level: 1,
    },
    {
      id: "moltech-approach",
      title: "How Moltech Helps Clients Do Better ?",
      level: 1,
    },
    { id: "conclusion", title: "Conclusion", level: 1 },
    { id: "faqs", title: "FAQ", level: 1 },
  ],

  tags: [
    "Website Performance",
    "SEO",
    "Google Rankings",
    "Next.js",
    "Core Web Vitals",
    "Page Speed",
    "Digital Transformation",
    "Moltech Services",
  ],

  faqData: {
    faqTitle: "Website Performance Optimization — Common Questions",
    faqItems: [
      {
        title: "How much does website performance optimization typically cost?",
        content:
          "Costs vary depending on project size and complexity. We offer tailored packages spanning from quick audits and fixes to full-scale performance engineering and Next.js development.",
      },
      {
        title: "How do I know if my slow website is affecting my Google rankings?",
        content:
          "Google's Core Web Vitals report in Search Console reveals real user experience data. Poor scores in LCP, CLS, or INP often correlate with ranking and conversion drops.",
      },
      {
        title: "Can performance optimization scale with my growing website?",
        content:
          "Yes. By implementing scalable solutions such as CDN, caching, and server components, your site can handle increased traffic without sacrificing speed or SEO.",
      },
      {
        title: "How long does it take to see SEO improvements after optimization?",
        content:
          "Improvements in Core Web Vitals and other performance metrics can lead to faster crawl rates and better rankings within weeks, but full SEO impact depends on content and competition.",
      },
      {
        title:
          "What sets Moltech apart in software services for performance optimization?",
        content:
          "We combine deep technical SEO expertise, Next.js development, AI-driven diagnostics, and a product mindset to deliver measurable SEO and conversion gains.",
      },
      {
        title:
          "Is Next.js suitable for all types of websites regarding performance?",
        content:
          "Next.js excels for content-heavy sites needing fast load times, SEO, and scalability. We advise when static HTML or hybrid approaches are better depending on your business goals.",
      },
      {
        title:
          "How do you ensure third-party scripts don’t hurt my site’s responsiveness?",
        content:
          "We audit and control third-party tags with deferred or conditional loading strategies and often implement server-side tagging to reduce their impact on Core Web Vitals.",
      },
      {
        title:
          "Can you integrate performance optimization with existing IT infrastructure and workflows?",
        content:
          "Yes. Our IT consulting services include seamless integration of performance best practices, CI/CD pipeline enhancements, and performance monitoring solutions customized for your team.",
      },
    ],
  },
};
