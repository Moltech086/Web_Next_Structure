import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import BlogPostClient from "@/features/blogPage/BlogPost/BlogPostClient";
import { BASE_URL } from "@/lib/utils/baseUrl";
import { mapApiBlogToConfig } from "@/lib/blogAdapter";
import "../../../styles/blog/blog.scss";

export const dynamic = "force-dynamic";

// ✅ Updated: Try static first, then fetch from API
async function getBlogConfig(slug) {
  // Step 1: Try static import first (preserve old blogs)
  try {
    const blogModule = await import(`../../../data/blogs/${slug}.js`);
    const config = blogModule.blogConfig;
    config.templateName = slug;
    config.isDynamic = false; // Mark as static
    return config;
  } catch (error) {
    // Static blog not found, try API
    console.log(`Static blog not found for slug: ${slug}, trying API...`);
  }

  // Step 2: Fetch from API for dynamic blogs
  try {
    const apiUrl = `${BASE_URL}/api/blog/${slug}`;
    
    const res = await fetch(apiUrl, {
      cache: "no-store",
    });

    if (!res.ok) {
      if (res.status === 404) {
        console.error(`Blog not found in API for slug: ${slug}`);
        return null;
      }
      throw new Error(`API error: ${res.status}`);
    }

    const apiData = await res.json();

    
    // Transform API response to blogConfig format
    const config = mapApiBlogToConfig(apiData, slug);
    console.log("config", config);
    
    if (!config) {
      console.error(`Failed to transform API data for slug: ${slug}`);
      return null;
    }

    // Set templateName to slug for dynamic blogs
    config.templateName = slug;
    
    return config;
  } catch (error) {
    console.error(`Error fetching blog config from API for slug: ${slug}`, error);
    return null;
  }
}

// ✅ Metadata uses only metaConfig
export async function generateMetadata({ params }) {
  const { slug } = params;
  const blogConfig = await getBlogConfig(slug);
  
  if (!blogConfig) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const { metaConfig, tags } = blogConfig;

  const title = metaConfig.title;
  const description = metaConfig.description;
  const keywords = Array.isArray(metaConfig?.keywords)
    ? metaConfig.keywords.join(", ")
    : metaConfig?.keywords || tags.join(", ");

  const canonicalUrl = `${BASE_URL}${metaConfig.canonical}`;
  const imageUrl = metaConfig.imageUrl;

  return {
    title,
    description,
    keywords,
    authors: [{ name: metaConfig.author }],
    robots: "index, follow",
    openGraph: {
      title,
      description,
      type: "article",
      url: canonicalUrl,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: metaConfig.publisher,
      locale: "en_US",
      publishedTime: metaConfig.publishedTime,
      authors: [metaConfig.author],
      tags: metaConfig.tags,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [metaConfig.twitterImage || imageUrl],
      site: "@MoltechSolInc",
      creator: "@MoltechSolInc",
    },
    alternates: {
      canonical: canonicalUrl,
    },
    other: {
      "article:author": metaConfig.author,
      "article:published_time": metaConfig.publishedTime,
      "article:section": metaConfig.section,
      "article:tag": keywords,
    },
  };
}

export default async function BlogPost({ params }) {
  const { slug } = params;
  const blogConfig = await getBlogConfig(slug);

  if (!blogConfig) notFound();

  const { metaConfig, faqData, articles } = blogConfig;

  // Guard against missing arrays in metaConfig
  const safeTags = Array.isArray(metaConfig?.tags) ? metaConfig.tags : [];
  const safeKeywords = Array.isArray(metaConfig?.keywords)
    ? metaConfig.keywords
    : typeof metaConfig?.keywords === "string"
    ? metaConfig.keywords
        .split(",")
        .map((k) => k.trim())
        .filter(Boolean)
    : [];

  // ✅ Article JSON-LD (from metaConfig only)
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: metaConfig.title,
    description: metaConfig.description,
    author: {
      "@type": "Organization",
      name: metaConfig.author,
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.webp`,
      },
    },
    publisher: {
      "@type": "Organization",
      name: metaConfig.publisher,
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.webp`,
        width: 200,
        height: 60,
      },
    },
    datePublished: metaConfig.publishedTime,
    dateModified: metaConfig.publishedTime,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${slug}`,
    },
    url: `${BASE_URL}/blog/${slug}`,
    image: {
      "@type": "ImageObject",
      url: metaConfig.imageUrl,
      width: 1200,
      height: 630,
      caption: metaConfig.title,
    },
    keywords: safeKeywords.join(", "),
    articleSection: metaConfig.section,
    wordCount: "2000",
    timeRequired: "PT5M",
    inLanguage: "en-US",
    isAccessibleForFree: true,
    genre: "Technology Blog",
    about: safeTags.map((tag) => ({ "@type": "Thing", name: tag })),
    mentions: safeTags.map((tag) => ({ "@type": "Thing", name: tag })),
  };

  // ✅ FAQ JSON-LD
  const faqJsonLd = faqData?.faqItems
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqData.faqItems.map((faq) => ({
          "@type": "Question",
          name: faq.title,
          acceptedAnswer: { "@type": "Answer", text: faq.content },
        })),
      }
    : null;

  // ✅ Breadcrumb JSON-LD
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${BASE_URL}/blog/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: metaConfig.title,
        item: `${BASE_URL}/blog/${slug}`,
      },
    ],
  };

  // ✅ Organization JSON-LD
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: metaConfig.publisher,
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/logo.webp`,
      width: 200,
      height: 60,
    },
    description:
      "Leading Dallas-based web development and technology solutions company specializing in custom software development, AI solutions, and digital transformation.",
    foundingDate: "2020",
    contactPoint: {
     "@type": "ContactPoint",
      telephone: "+1-945-209-7691",
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: ["English"],
    },
    address: {
      "@type": "PostalAddress",
    streetAddress: "2000 N Central Expressway, Suite 220",
    addressLocality: "Plano",
    addressRegion: "TX",
    postalCode: "75074",
    addressCountry: "US",
    },
    sameAs: [
      "https://www.linkedin.com/company/moltech-solutions",
      "https://twitter.com/MoltechSolInc",
    ],
    knowsAbout: [
      "Web Development",
      "Software Development",
      "AI Solutions",
      "Digital Transformation",
    ],
  };

  // ✅ WebSite JSON-LD
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: metaConfig.publisher,
    url: BASE_URL,
    description:
      "Dallas-based technology solutions company specializing in web development, custom software, AI solutions, and digital transformation services.",
    publisher: {
      "@type": "Organization",
      name: metaConfig.publisher,
      url: BASE_URL,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en-US",
    copyrightYear: "2025",
    isAccessibleForFree: true,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

      <Suspense fallback={<div className="blog-loading">Loading blog...</div>}>
        <BlogPostClient blogConfig={blogConfig} slug={slug} />
      </Suspense>
    </>
  );
}

// ✅ All blog slugs (keep static ones for pre-rendering)
export async function generateStaticParams() {
  return [
    { slug: "5-simple-web-design-tricks-for-ui-ux-professional-look-dallas" },
    { slug: "ai-augmented-dotnet-fintech-solutions" },
    { slug: "tailwind-vs-material-ui-which-framework-is-right" },
    { slug: "angular-19-key-features-improvements-dallas" },
    { slug: "python-web-scraping-guide-dallas-usa" },
    { slug: "ienumerable-vs-icollection-dotnet-csharp" },
    { slug: "cors-cross-origin-dotnet-csharp-dallas" },
    { slug: "middleware-dotnet-request-handling-dotnet-development-dallas" },
    { slug: "threads-vs-tasks-parallel-programming-csharp-dallas" },
    { slug: "csharp-interface-best-practices" },
    { slug: "hr-data-analytics-insights" },
    { slug: "next-js-15-features-and-seo-benefits-turbopack-server-actions-and-ppr-guide"},
    { slug: "reliable-email-systems-with-pub-sub-messaging" },
    { slug: "from-monolith-to-microservices-dotnet9-playbook" },
    { slug: "ai-pilots-vs-full-scale-deployment" },
    { slug: "real-time-analytics-competitive-advantage" },
    { slug: "blazor-united-vs-nextjs" },
    { slug: "cross-platform-development-frameworks-comparison" },
    { slug: "ai-in-finance-cfo-playbook-rpa-automation" },
    { slug: "hybrid-vs-multi-cloud-choose-right-architecture" },
    { slug: "data-security-in-custom-apps" },
    { slug: "ai-driven-personalization-ux" },
    { slug: "real-time-supply-chain-re-routing-predictive-ai" },
    { slug: "ocr-vs-intelligent-document-processing-finance" },
    { slug: "security-first-sdlc-integrate-security" },
    { slug: "ai-powered-code-reviews-dotnet" },
    { slug: "securing-progressive-web-apps-react-dotnet" },
    { slug: "migrate-angular-15-to-angular-18" },
    { slug: "azure-vs-aws-vs-gcp-2025-which-cloud-fits-your-business" },
    { slug: "ai-dev-tools-2025-copilot-codewhisperer-gemini-compared" },
    { slug: "owasp-2025-updates-developer-guide" },
    { slug: "react-19-features-developers-need-to-know" },
    { slug: "dotnet-maui-cross-platform-mobile-apps" },
    { slug: "cicd-devsecops-2025-new-practices-tools" },
    { slug: "react-vs-angular-performance" },
    { slug: "agentic-ai-retail-inventory-automation" },
  ];
}
