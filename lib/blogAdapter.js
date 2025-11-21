import { BASE_URL } from "@/lib/utils/baseUrl";



/**
 * Helper to get value with case-insensitive key lookup
 */
const get = (obj, key) =>
  obj?.[key] ?? obj?.[key[0].toUpperCase() + key.slice(1)];

/**
 * Format date to readable format (e.g., "Aug 30, 2025")
 */
const formatDate = (dateStr) => {
  if (!dateStr) return "";
  try {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return "";
    
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" });
    const year = date.getFullYear();
    
    const suffix =
      day % 10 === 1 && day !== 11
        ? "st"
        : day % 10 === 2 && day !== 12
        ? "nd"
        : day % 10 === 3 && day !== 13
        ? "rd"
        : "th";
    
    return `${month} ${day}${suffix}, ${year}`;
  } catch {
    return "";
  }
};

/**
 * Extract H3 headings from HTML content to generate table of contents
 */
const extractTableOfContents = (html) => {
  if (!html) return [];
  
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const h3Elements = doc.querySelectorAll("h3");
    
    return Array.from(h3Elements).map((h3, index) => {
      const id = h3.id || `heading-${index}`;
      const title = h3.textContent?.trim() || "";
      return {
        id,
        title,
        level: 1,
      };
    });
  } catch {
    return [];
  }
};


function safeParseArray(jsonLike) {
  if (!jsonLike) return [];
  if (Array.isArray(jsonLike)) return jsonLike;
  try {
    const parsed = JSON.parse(jsonLike);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/**
 * Transform API response to blogConfig format
 * @param {Object} apiData - API response from /api/blog/[slug]
 * @param {string} slug - Blog slug
 * @returns {Object} blogConfig object matching static format
 */
export function mapApiBlogToConfig(apiData, slugFromRoute) {
  if (!apiData) return null;

  console.log("mapApiBlogToConfig apiData", apiData);
  // your API shape:
  // { message, statusCode, responseItem: { responseContent: {...} } }
  const responseContent =
    apiData?.responseItem?.responseContent ??
    apiData?.responseItem ??
    apiData;

  if (!responseContent) return null;

  // now treat this as "basic"
  const basic = responseContent;

  // SEO is not in a nested object — it’s flattened in responseContent
  // metaTitle, metaDescription, metaKeywords, ogImage, twitterImage, metaSlugUrl?
  const seo = {
    metaTitle: basic.metaTitle,
    metaDescription: basic.metaDescription,
    metaKeywords: basic.metaKeywords,
    metaSlugUrl: basic.metaSlugUrl, // may be null
    ogImage: basic.ogImage,
    twitterImage: basic.twitterImage,
  };

  // 1) overview: in your sample it's a STRING JSON
  const overviewItems =safeParseArray(basic.overviewList) ||[];

  const stats = Array.isArray(overviewItems)
    ? overviewItems.map((item) => ({
        icon: item?.Icon || item?.icon || "mdi:circle-outline",
        title: item?.Title || item?.title || "",
        desc: item?.Description || item?.description || "",
      }))
    : [];

  // 2) tags — you have both tagsCsv and tags:[]
  let tags = [];
  if (Array.isArray(basic.tags) && basic.tags.length > 0) {
    tags = basic.tags.map((t) => t?.toString().replace(/^#/, "").trim()).filter(Boolean);
  } else if (typeof basic.tagsCsv === "string" && basic.tagsCsv.length > 0) {
    tags = basic.tagsCsv
      .split(",")
      .map((t) => t.trim().replace(/^#/, ""))
      .filter(Boolean);
  } else if (typeof basic.category === "string" && basic.category.length > 0) {
    // sometimes category came as "#Data Processing,#Outsourcing,..."
    tags = basic.category
      .split(",")
      .map((t) => t.trim().replace(/^#/, ""))
      .filter(Boolean);
  }

  // 3) FAQ — in your current API response, faq is not bundled,
  // but your mapper expects it; so keep this part flexible
  const faqTitle =
    basic.faqTitle ||
    seo.metaTitle ||
    "Frequently Asked Questions";

  const faqItems = Array.isArray(basic.faqItems)
    ? basic.faqItems
        .filter((f) => f.question && f.answer)
        .map((f) => ({
          title: f.question,
          content: f.answer,
        }))
    : [];

  // 4) keywords
  const keywords =
    typeof seo.metaKeywords === "string"
      ? seo.metaKeywords
          .split(",")
          .map((k) => k.trim())
          .filter(Boolean)
      : Array.isArray(seo.metaKeywords)
      ? seo.metaKeywords
      : [];

  // 5) date
  const publishedDate = basic.publishedDate;
  const publishedTime = publishedDate
    ? new Date(publishedDate).toISOString()
    : new Date().toISOString();
  const formattedDate = formatDate
    ? formatDate(publishedDate)
    : publishedDate || "";

  // 6) title / hero
  const blogTitle = basic.title || "";
  const blogSubTitle = basic.subTitle || "";

  // if we have real subtitle, use that, else split title
  const heroTitle = blogSubTitle
    ? blogTitle
    : blogTitle.split(" ").slice(0, 3).join(" ");

  const heroHighlight = blogSubTitle
    ? blogSubTitle
    : blogTitle.split(" ").slice(3).join(" ");

  // 7) image - use ogImage for both ogImage and twitterImage
  const ogImage =
    seo.ogImage ||
    basic.featuredImage ||
    "";

  // Helper to normalize image path and use API with type parameter
  const normalizeImageUrl = (imagePath) => {
    if (!imagePath || typeof imagePath !== "string") {
      return `${BASE_URL}/images/meta/default-og.webp`;
    }

    // If it's already a full URL (starts with http:// or https://), return as-is
    if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
      return imagePath;
    }

    // If it's already a data URI, return as-is
    if (imagePath.startsWith("data:image/")) {
      return imagePath;
    }

    // Otherwise, use the GetFile API with type=OgImage
    return `${BASE_URL}/api/file/${encodeURIComponent(imagePath)}?type=OgImage`;
  };

  const imageUrl = normalizeImageUrl(ogImage);

  // 8) slug
  const finalSlug =
    slugFromRoute ||
    seo.metaSlugUrl ||
    basic.slug ||
    blogTitle.toLowerCase().replace(/\s+/g, "-");

  // final object
  return {
    slug: finalSlug,

    metaConfig: {
      title: seo.metaTitle || blogTitle || "",
      description: seo.metaDescription || basic.summary || "",
      canonical: `/blog/${finalSlug}`,
      author: basic.authorName || "Moltech Solutions Inc.",
      publisher: "Moltech Solutions Inc.",
      imageUrl: imageUrl,
      twitterImage: imageUrl, // Use same ogImage for twitter
      keywords: keywords.length > 0 ? keywords : tags.slice(0, 5),
      section: "Blog",
      publishedTime: publishedTime,
    },

    heroData: {
      title: heroTitle,
      highlight: heroHighlight,
      description: basic.summary || seo.metaDescription || "",
      author: basic.authorName || "Moltech Solutions Inc.",
      date: formattedDate,
      stats: stats.length > 0 ? stats : [],
    },

    // table of contents will be filled from HTML later
    tableOfContents: [],

    tags: tags,

    faqData: {
      faqTitle,
      faqItems,
    },
    ctaText:basic.ctaText,
    // keep for your renderer
    isDynamic: true,
  };
}
