import React from "react";
import { blogData } from "../../features/blogPage/BlogList.data";
import BlogPageClient from "../../features/blogPage/BlogPageClient";
import { BASE_URL } from "@/lib/utils/baseUrl";
import "../../features/blogPage/Blogs.scss";
import { getAllBlogs } from "@/lib/blogUtils";

// Force SSR for blog page
export const dynamic = "force-dynamic";
// Server-side metadata generation
export const metadata = {
  title: "Moltech Blog: Insights on Software, Web, and Digital Transformation",
  description:
    "Stay ahead with Moltech's expert articles on custom software, web platforms, digital marketing & SaaS solutions—built by Dallas-based developers for US enterprises.",
  keywords: [
    "custom software blog",
    "web development insights",
    "digital transformation articles",
    "SaaS platform tips",
    "Dallas tech blog",
    "US software trends",
    "AI solutions blog",
    "enterprise software insights",
    "frontend backend blog",
    "modern web development",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "Moltech Solutions Inc." }],
  creator: "Moltech Solutions Inc.",
  publisher: "Moltech Solutions Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title:
      "Moltech Blog: Insights on Software, Web, and Digital Transformation",
    description:
      "Explore expert articles on custom software development, web platforms, digital marketing, and SaaS solutions from a Dallas-based team serving US clients.",
    type: "website",
    url: `${BASE_URL}/blog`,
    images: [
      {
        url: `${BASE_URL}/images/meta/blog-hero-og.webp`,
        width: 1200,
        height: 630,
        alt: "Moltech Blog - Software Development Insights",
      },
    ],
    siteName: "Moltech Solutions Inc.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Moltech Blog: Insights on Software, Web, and Digital Transformation",
    description:
      "Explore expert articles on custom software, web platforms, and digital marketing from Moltech—Dallas-based development for US enterprises.",
    images: [`${BASE_URL}/images/meta/blog-hero-og.webp`],
    site: "@MoltechSolutions",
    creator: "@MoltechSolutions",
  },
  alternates: {
    canonical: `${BASE_URL}/blog`,
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

// Structured Data for Blog Page
const blogSchemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Moltech Solutions Inc.",
      url: BASE_URL,
      logo: `${BASE_URL}/logo.webp`,
      sameAs: [
        "https://www.linkedin.com/company/moltech-solutions",
        "https://twitter.com/MoltechSolInc",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+1-945-209-7691",
          contactType: "customer service",
          areaServed: "US",
          availableLanguage: ["English"],
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "2000 N Central Expressway, Suite 220",
        addressLocality: "Plano",
        addressRegion: "TX",
        postalCode: "75074",
        addressCountry: "US",
      },
      knowsAbout: [
        "Web Development",
        "Software Development",
        "AI Solutions",
        "Digital Transformation",
        "Technology Consulting",
      ],
      areaServed: "US",
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Moltech Solutions Inc.",
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/#webpage`,
      url: `${BASE_URL}/blog`,
      name: "Moltech Blog: Insights on Software, Web, and Digital Transformation",
      description:
        "Stay ahead with Moltech's expert articles on custom software, web platforms, digital marketing & SaaS solutions—built by Dallas-based developers for US enterprises.",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "en-US",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/meta/blog-hero-og.webp`,
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${BASE_URL}/blog`,
          },
        ],
      },
    },
  ],
};

async function BlogPage({ searchParams }) {
  const blogsPerPage = 9;
  const currentPage = parseInt(searchParams?.page) || 1;
  
  // Use the shared utility
  const sortedBlogs = await getAllBlogs();

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = sortedBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(sortedBlogs.length / blogsPerPage);

  return (
    <>
      {/* Structured JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchemaData) }}
      />

      <BlogPageClient
        initialBlogs={currentBlogs}
        currentPage={currentPage}
        totalPages={totalPages}
        allBlogs={sortedBlogs}
        blogsPerPage={blogsPerPage}
      />
    </>
  );
}

export default BlogPage;
