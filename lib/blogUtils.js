import { blogData } from "@/features/blogPage/BlogList.data";
import { BASE_URL } from "@/lib/utils/baseUrl";

/**
 * Format date to readable format (e.g., "Aug 30th, 2025")
 */
export const formatBlogDate = (dateStr) => {
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
 * Helper function to normalize image paths (base64 or filename)
 */
export const normalizeImagePath = (imagePath, type = "feature") => {
  if (!imagePath || typeof imagePath !== "string") {
    return undefined;
  }

  // If it's already a URL (starts with http:// or https:// or /), return as-is
  if (
    imagePath.startsWith("http://") ||
    imagePath.startsWith("https://") ||
    imagePath.startsWith("/")
  ) {
    return imagePath;
  }

  // If it's already a data URI, return as-is
  if (imagePath.startsWith("data:image/")) {
    return imagePath;
  }

  // Check if it looks like base64 (long string without spaces)
  const base64Pattern = /^[A-Za-z0-9+/]+=*$/;
  if (imagePath.length > 100 && base64Pattern.test(imagePath.trim())) {
    // Try to detect image type from first few characters
    let mimeType = "image/png"; // default

    if (imagePath.startsWith("iVBORw0KGgo")) {
      mimeType = "image/png";
    } else if (imagePath.startsWith("/9j/")) {
      mimeType = "image/jpeg";
    } else if (imagePath.startsWith("R0lGODlh")) {
      mimeType = "image/gif";
    } else if (imagePath.startsWith("UklGR")) {
      mimeType = "image/webp";
    }

    return `data:${mimeType};base64,${imagePath.trim()}`;
  }

  // If it looks like a filename (has extension), use GetFile API
  if (imagePath.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)) {
    return `${BASE_URL}/api/file/${encodeURIComponent(imagePath)}?type=${encodeURIComponent(type)}`;
  }

  // If it's a short string that might be a filename without extension, also try GetFile
  if (imagePath.length < 255 && !imagePath.includes(" ")) {
    return `${BASE_URL}/api/file/${encodeURIComponent(imagePath)}?type=${encodeURIComponent(type)}`;
  }

  // Default: return as-is
  return imagePath;
};

/**
 * Fetch dynamic blogs from API (server-side)
 */
export async function fetchDynamicBlogs() {
  try {
    console.log("baseURL",BASE_URL);
    const res = await fetch(`${BASE_URL}/api/blog`, { cache: "no-store" });
    
console.log("res", res);
    if (!res.ok) return [];
    const data = await res.json();
console.log("data", data);
    return Array.isArray(data) ? data : [];
  } catch (e) {
    console.log("error in fetchDynamicBlogs", e);
    return [];
  }
}

/**
 * Map dynamic blog API response to card format
 */
export function mapDynamicBlogToCard(b) {
  const slug = b?.slug;
  const rawImage = b?.featuredImage || b?.ogImage || undefined;
console.log("map", b);
  return {
    imagePath: normalizeImagePath(rawImage, "feature"),
    title: b?.title || b?.metaTitle || "",
    altText: b?.metaTitle || b?.title || "",
    date: formatBlogDate(b?.publishedDate || b?.publishDate || new Date().toISOString()),
    author: b?.authorName || "Moltech Solutions Inc.",
    description: b?.summary || b?.metaDescription || "",
    readMoreLink: `blog/${slug}`,
    readTime: b?.readTime || "10",
    tags: Array.isArray(b?.tags)
      ? b.tags
      : typeof b?.tags === "string"
      ? b.tags.split(",").map((t) => t.trim()).filter(Boolean)
      : typeof b?.tagsCsv === "string"
      ? b.tagsCsv.split(",").map((t) => t.replace(/^#/, "").trim()).filter(Boolean)
      : [],
  };
}

/**
 * Get all blogs (static + dynamic) - Server-side version
 * @returns {Promise<Array>} Merged and sorted blog list
 */
export async function getAllBlogs() {
  // Fetch dynamic blogs
  const dynamicItems = await fetchDynamicBlogs();
console.log("dynamicItems", dynamicItems);
  // Map dynamic blogs to card format
  const mappedDynamic = dynamicItems.map(mapDynamicBlogToCard);
console.log("mappedDynamic", mappedDynamic);
  // Filter out invalid items (no slug)
  const validMappedDynamic = mappedDynamic.filter((blog) => {
    const slugFromLink = blog.readMoreLink.replace("blog/", "");
    return slugFromLink && slugFromLink !== "undefined" && slugFromLink.trim() !== "";
  });
  console.log("validMappedDynamic", validMappedDynamic);

  // Merge static and dynamic
  const merged = [...blogData, ...validMappedDynamic];

  console.log("merged", merged);
  // Sort by date (newest first)
  const sortedBlogs = merged.sort((a, b) => {
    const parseDate = (dateStr) => {
      if (!dateStr) return new Date(0);
      // Handle formatted dates like "Oct 31st, 2025"
      const cleaned = dateStr.replace(/(\d+)(st|nd|rd|th)/, "$1");
      return new Date(cleaned);
    };
    return parseDate(b.date) - parseDate(a.date);
  });

  return sortedBlogs;
}

/**
 * Get all blogs (static + dynamic) - Client-side version
 * Uses fetch API for client components
 */
export async function getAllBlogsClient() {
  try {
    // Fetch from API route that returns merged blogs
    const res = await fetch(`${BASE_URL}/api/blogs`, { cache: "no-store" });

    if (!res.ok) {
      // Fallback to static only if API fails
      return blogData.sort((a, b) => {
        const parseDate = (dateStr) => {
          if (!dateStr) return new Date(0);
          const cleaned = dateStr.replace(/(\d+)(st|nd|rd|th)/, "$1");
          return new Date(cleaned);
        };
        return parseDate(b.date) - parseDate(a.date);
      });
    }

    const data = await res.json();
    return Array.isArray(data) ? data : blogData;
  } catch (e) {
    console.log("error in getAllBlogsClient", e);
    // Fallback to static only
    return blogData.sort((a, b) => {
      const parseDate = (dateStr) => {
        if (!dateStr) return new Date(0);
        const cleaned = dateStr.replace(/(\d+)(st|nd|rd|th)/, "$1");
        return new Date(cleaned);
      };
      return parseDate(b.date) - parseDate(a.date);
    });
  }
}
