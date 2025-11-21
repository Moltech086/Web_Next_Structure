import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { encryptAES } from './services/CryptoService';
import { ignoredPatterns } from './utils/security/SecurityUtil';

export async function middleware(request: NextRequest) {

    
    const pathname = request.nextUrl.pathname;
    console.log("middleware",pathname);
    if (ignoredPatterns.some((pattern) => pattern.test(pathname))) {
        console.log("path ignored : ", pathname)
        return NextResponse.next();
    };

    const evnToUse = process.env.DEPLOY_ENV;

    const API_URL = evnToUse === "production"
        ? process.env.NEXT_PUBLIC_LIVE_SITE_URL
        : evnToUse === "preproduction"
            ? process.env.NEXT_PUBLIC_TEST_SITE_URL
            : process.env.NEXT_PUBLIC_LOCAL_URL;

    const ipAddress =
        request.headers.get("x-forwarded-for")?.split(",")[0]
        || request.headers.get("x-real-ip")
        || request.ip
        || '';

    const req = {
        urlPath: pathname,
        IPAddress: ipAddress,
    };

    const encryptRequest = encryptAES(req, 1);

    try {
        await fetch(`${API_URL}Common/SendUserNavigationData`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
                    'Content-Security-Policy': "default-src 'self'; img-src 'self' data:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; font-src 'self' data:; connect-src *; frame-ancestors 'none';",
                    'Cross-Origin-Opener-Policy': 'same-origin',
                    'X-Frame-Options': 'DENY',
            },
            body: JSON.stringify({ data: encryptRequest }),
        }).then((res) => {
            console.log('fetching from', API_URL);
            console.log('pathname', pathname);
            console.log('VALAR MORGHULIS!');
        }).catch((err) => {
            console.error("fetching failed: ", err);
        })

    } catch (err) {
        console.error("error: ", err);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!_next|favicon.webp|api|\\.well-known|images|assets).*)"],
};