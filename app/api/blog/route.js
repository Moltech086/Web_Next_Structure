import { NextResponse } from "next/server";


export const dynamic = "force-dynamic";

export async function GET() {

    try {
// before building `url`
let rawBase =
  process.env.DEPLOY_ENV === 'production'
    ? process.env.NEXT_PUBLIC_LIVE_SITE_URL
    : process.env.DEPLOY_ENV === 'preproduction'
    ? process.env.NEXT_PUBLIC_TEST_SITE_URL
    : process.env.NEXT_PUBLIC_LOCAL_URL || '';

// remove trailing `/api` and trailing slash
const baseUrl = rawBase.replace(/\/api\/?$/,'').replace(/\/+$/,'');

const url = `${baseUrl}/api/Blog/GetPublishedBlogs`;

    
    const res = await fetch(url, {
      headers: { "content-type": "application/json" },
      cache: "no-store",
     // agent: url.startsWith("https://") ? insecureAgent : undefined, // ✅ key line
    });

    if (!res.ok) {
            return NextResponse.json([], { status: res.status });
    }

    const data = await res.json();
    
    const inner =
  typeof data?.responseData === "string"
    ? JSON.parse(data.responseData)
    : data?.responseData || {};

// 2) now take responseContent[]
const list =
  inner?.responseItem?.responseContent &&
  Array.isArray(inner.responseItem.responseContent)
    ? inner.responseItem.responseContent
    : [];
        console.log("in Route",list);
    return NextResponse.json(list);
  } catch (e) {
    console.log("error is",e);
    return NextResponse.json([], { status: 500 });
  }
}


