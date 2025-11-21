import { NextResponse } from "next/server";
import https from "node:https";

export const dynamic = "force-dynamic";

export async function GET(request, { params }) {
  try {
    const { slug } = params;

    if (!slug || slug.trim() === "") {
      return NextResponse.json(
        { error: "Slug is required" },
        { status: 400 }
      );
    }

    // Build base URL
    const rawBase =
      process.env.DEPLOY_ENV === "production"
        ? process.env.NEXT_PUBLIC_LIVE_SITE_URL
        : process.env.DEPLOY_ENV === "preproduction"
        ? process.env.NEXT_PUBLIC_TEST_SITE_URL
        : process.env.NEXT_PUBLIC_LOCAL_URL || "";

    const baseUrl = rawBase.replace(/\/api\/?$/, "").replace(/\/+$/, "");

    // Allow self-signed cert for local HTTPS
    const allowSelfSigned =
      process.env.NODE_ENV !== "production" && baseUrl.startsWith("https://localhost");
    const agent = allowSelfSigned
      ? new https.Agent({ rejectUnauthorized: false })
      : undefined;

    // Single API call to get blog content only
    
    const apiUrl = `${baseUrl}/api/Blog/GetBlogContentBySlug/${slug}`;

    const res = await fetch(apiUrl, {
      headers: { "content-type": "application/json" },
      cache: "no-store",
      // agent,
    });

    if (!res.ok) {
      if (res.status === 404) {
        return NextResponse.json(
          { error: "Blog content not found" },
          { status: 404 }
        );
      }
      console.error(`Failed to fetch blog content: ${res.status}`);
      return NextResponse.json(
        { error: "Failed to fetch blog content" },
        { status: res.status }
      );
    }

    const data = await res.json();

    // Parse response
    const parsedData =
      data?.responseData
        ? typeof data.responseData === "string"
          ? JSON.parse(data.responseData)
          : data.responseData
        : data?.responseItem || data || {};

    
    // Extract and return content
    return NextResponse.json({
      slug,
      content: parsedData?.responseItem?.responseContent?.content || "",
    });
  } catch (error) {
    console.error("Error in blog content fetch:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error.message },
      { status: 500 }
    );
  }
}
