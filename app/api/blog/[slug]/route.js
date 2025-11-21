import { NextResponse } from "next/server";
import https from "node:https";

export const dynamic = "force-dynamic";

export async function GET(request, { params }) {
  try {
    const { slug } = params;
    console.log("slug",slug);
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

    // Single API call to get all blog details (except content)
    console.log("baseUrl",baseUrl);
    const apiUrl = `${baseUrl}/api/Blog/GetBlogBySlug/?data=${slug}`;
    console.log("apiUrl",apiUrl);
    const res = await fetch(apiUrl, {
      headers: { "content-type": "application/json" },
      cache: "no-store",
      // agent,
    });

    if (!res.ok) {
      if (res.status === 404) {
        return NextResponse.json(
          { error: "Blog not found" },
          { status: 404 }
        );
      }
      console.error(`Failed to fetch blog config: ${res.status}`);
      return NextResponse.json(
        { error: "Failed to fetch blog configuration" },
        { status: res.status }
      );
    }

    const data = await res.json();

    // Parse response (handle responseData wrapper if present)
    const parsedData =
      data?.responseData
        ? typeof data.responseData === "string"
          ? JSON.parse(data.responseData)
          : data.responseData
        : data?.responseItem || data || {};

    // Return the data as-is (backend returns everything except content)
    return NextResponse.json(parsedData);
  } catch (error) {
    console.error("Error in blog config fetch:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error.message },
      { status: 500 }
    );
  }
}
