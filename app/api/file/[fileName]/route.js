import { NextResponse } from "next/server";
import https from "node:https";

export const dynamic = "force-dynamic";

export async function GET(request, { params }) {
  try {
    const { fileName } = params;
    const { searchParams } = new URL(request.url);
    
    // Get type from query parameter, default to "feature" for blog images
    const type = searchParams.get("type");

    if (!fileName || fileName.trim() === "") {
      return NextResponse.json(
        { error: "File name is required" },
        { status: 400 }
      );
    }

    if (!type || type.trim() === "") {
      return NextResponse.json(
        { error: "Type parameter is required" },
        { status: 400 }
      );
    }

    // Build backend API URL
    const rawBase =
      process.env.DEPLOY_ENV === "production"
        ? process.env.NEXT_PUBLIC_LIVE_SITE_URL
        : process.env.DEPLOY_ENV === "preproduction"
        ? process.env.NEXT_PUBLIC_TEST_SITE_URL
        : process.env.NEXT_PUBLIC_LOCAL_URL || "http://localhost:13279";

    // Extract base URL and port
    let backendUrl;
    if (rawBase.includes("localhost") || rawBase.includes("127.0.0.1")) {
      // For local development, use port 13279
      const url = new URL(rawBase);
      backendUrl = `http://${url.hostname}:13279`;
    } else {
      // For production/preproduction, use the base URL
      const baseUrl = rawBase.replace(/\/api\/?$/, "").replace(/\/+$/, "");
      backendUrl = baseUrl;
    }

    // Allow self-signed cert for local HTTPS
    const allowSelfSigned =
      process.env.NODE_ENV !== "production" && backendUrl.startsWith("https://localhost");
    const agent = allowSelfSigned
      ? new https.Agent({ rejectUnauthorized: false })
      : undefined;

    // Construct the GetFile API URL matching backend signature: GetFile/{type}/{*fileName}
    // Note: fileName may contain slashes (catch-all parameter), so we don't encodeURIComponent the whole path
    // but we do need to handle the path segments properly
    const encodedType = encodeURIComponent(type);
    // For fileName, we need to preserve slashes but encode other special characters
    // Since it's a catch-all parameter, we handle each segment
    const fileNameSegments = fileName.split('/').map(seg => encodeURIComponent(seg)).join('/');
    const apiUrl = `${backendUrl}/api/Common/GetFile/${encodedType}/${fileNameSegments}`;

    const res = await fetch(apiUrl, {
      cache: "no-store",
      agent,
    });

    if (!res.ok) {
      if (res.status === 404) {
        return NextResponse.json(
          { error: "File not found" },
          { status: 404 }
        );
      }
      console.error(`Failed to fetch file: ${res.status} - ${apiUrl}`);
      return NextResponse.json(
        { error: "Failed to fetch file" },
        { status: res.status }
      );
    }

    // Backend returns binary file stream directly with Content-Type header
    // Get the content type from response headers (backend sets this)
    const contentType = res.headers.get("content-type") || getContentTypeFromFileName(fileName);
    
    // Get binary data as ArrayBuffer
    const arrayBuffer = await res.arrayBuffer();
    const fileBuffer = Buffer.from(arrayBuffer);

    // Return the file with appropriate headers
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable", // Cache for 1 year
        "Content-Disposition": `inline; filename="${fileName.split('/').pop()}"`, // Get filename from last segment
      },
    });
  } catch (error) {
    console.error("Error in GetFile proxy:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error.message },
      { status: 500 }
    );
  }
}

// Helper function to determine content type from file name
function getContentTypeFromFileName(fileName) {
  // Extract filename from path (handle catch-all parameter paths)
  const actualFileName = fileName.split('/').pop() || fileName;
  const ext = actualFileName.split(".").pop()?.toLowerCase();
  const contentTypes = {
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    png: "image/png",
    gif: "image/gif",
    webp: "image/webp",
    svg: "image/svg+xml",
    pdf: "application/pdf",
    mp4: "video/mp4",
  };
  return contentTypes[ext] || "application/octet-stream";
}
