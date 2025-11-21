"use client";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { AppIcons } from "@/data/appIcons";
import Image from "next/image";
import ServiceFAQ from "@/components/serviceFAQ/ServiceFAQ";
import { blogConfig } from "@/data/blogs/securing-progressive-web-apps-react-dotnet";
import Link from "next/link";
import Iconify from "@/components/ui/icons/Iconify";
import CodeBlockCustom from "@/components/codeBlock/CodeBlockCustom";

// code block data
const scriptExample = `{if (location.protocol !== 'https:' || !('serviceWorker' in navigator)) {
  console.warn('Service workers require HTTPS.');
} else {
  navigator.serviceWorker.register('/sw.js', { scope: '/app/' });
}`;
const scriptExample1 = `  default-src 'self';
  script-src 'self' https://cdn.example.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https://images.example-cdn.com;
  connect-src 'self' https://api.example.com wss://push.example.com;
  object-src 'none';
  base-uri 'self';
  frame-ancestors 'none';
`;
const scriptExample2 = `import DOMPurify from 'dompurify';

export default function SafeHtml({ html }) {
  const safe = DOMPurify.sanitize(html, { USE_PROFILES: { html: true } });
  return <div dangerouslySetInnerHTML={{ __html: safe }} />;
}
`;
const scriptExample3 = `self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.method !== 'GET' || url.pathname.startsWith('/api/secure')) return;

  event.respondWith((async () => {
    const cache = await caches.open('static-v1');
    const cached = await cache.match(request);
    if (cached) return cached;

    const resp = await fetch(request, { cache: 'no-store' });
    if (resp.ok && (resp.headers.get('Cache-Control') || '').includes('public')) {
      cache.put(request, resp.clone());
    }
    return resp;
  })());
});`;
const scriptExample4 = `var jwt = new JwtSecurityToken(
    issuer: jwtIssuer,
    claims: claims,
    expires: DateTime.UtcNow.AddMinutes(10),
    signingCredentials: creds
);
var token = new JwtSecurityTokenHandler().WriteToken(jwt);

Restrict sensitive routes:
app.MapGet("/api/secure/profile", (ClaimsPrincipal user) =>
{
    return Results.Json(
        new { userId = user.Identity?.Name },
        contentType: "application/json",
        statusCode: 200,
        headers: new() { ["Cache-Control"] = "no-store" }
    );
}).RequireAuthorization();`;
const scriptExample5 = `builder.Services.AddRateLimiter(options =>
{
    options.AddFixedWindowLimiter("api", o =>
    {
        o.Window = TimeSpan.FromMinutes(1);
        o.PermitLimit = 300; // 300 requests per minute
        o.QueueLimit = 50;
    });
});`;
const scriptExample6 = `app.MapGet("/api/csrf-token", (IAntiforgery af, HttpContext ctx) =>
{
    var token = af.GetAndStoreTokens(ctx).RequestToken;
    return Results.Ok(new { csrfToken = token });
});`;
const scriptExample7 = `export async function subscribeToPush(vapidKey) {
  const reg = await navigator.serviceWorker.ready;
  return reg.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: Uint8Array.from(atob(vapidKey), c => c.charCodeAt(0))
  });
}`;
const scriptExample8 = `navigator.serviceWorker.register('/sw.js', { scope: '/app/' });`;

const scriptExample9 = `# Enforce HTTPS + HSTS

add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
`;

const SecuringProgressiveWebAppsReactDotnet = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const [modalImageAlt, setModalImageAlt] = useState("");

  const handleImageClick = (src, alt) => {
    setModalImageSrc(src);
    setModalImageAlt(alt);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalImageSrc("");
    setModalImageAlt("");
  };

  return (
    <>
      <>
        <div
          className="   order-one  CSharpBlogPost  new-blogs-detail-main-content-centar"
          id="main-content"
        >
          <div className="blog-header-image  mt-0">
            <Image
              src={AppIcons.securingprogressive}
              alt="Securing Progressive Web Apps: Best Practices for High-Traffic Platforms"
              loading="lazy"
              width={1280}
              height={640}
              style={{ height: "auto", cursor: "pointer" }}
              onClick={() => handleImageClick(AppIcons.securingprogressive, "Securing Progressive Web Apps: Best Practices for High-Traffic Platforms")}
            />
          </div>
          <h3 id="introduction">
            <strong>
              Securing Progressive Web Apps: Best Practices for High-Traffic
              Platforms
            </strong>
          </h3>
          <>
            <p>
              When a flash sale starts, your checkout page suddenly has tens of
              thousands of sessions going on at the same time. Requests go over
              the roof, caches get overloaded, and an attacker tries to sneak
              into an unprotected endpoint. If you don&apos;t set up your
              service worker or API layer correctly, you could have downtime,
              data leaks, and damage to your reputation.
            </p>

            <p>
              PWAs are currently used by everything from big retail stores to
              SaaS platforms, but because they have a bigger attack surface and
              more worldwide traffic, security is a must-have for your
              architecture.
            </p>

            <p>
              This article is for PWAs that use React and have .NET 8 backends.
              It has useful information and advice for developers, architects,
              and product owners on how to keep their high-traffic platforms
              safe while keeping them fast and reliable.
            </p>
          </>
          <h3 id="common-risks">
            <strong>Common Risks in High-Traffic PWAs</strong>
          </h3>
          <p>
            High traffic magnifies small security flaws. Here are the top
            vulnerabilities to address:
          </p>
          <p>
            Here&apos;s the content reformatted into a{" "}
            <span className="highlight-strong">
              clean, developer-friendly table:
            </span>
          </p>
          <div className="table-container-blazor-united-vs-nextjs">
            <table className="comparison-table-2">
              <thead>
                <tr>
                  <th>Vulnerability</th>
                  <th>Risk</th>
                  <th>Mitigation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Vulnerability">
                    <strong>Cross-Site Scripting (XSS)</strong>
                  </td>
                  <td data-label="Risk">
                    Malicious scripts injected into pages or cached offline.
                  </td>
                  <td data-label="Mitigation">
                    Enforce strict{" "}
                    <span className="highlight-strong">
                      Content Security Policy (CSP)
                    </span>
                    , sanitize user input, and escape output in React
                    components.
                  </td>
                </tr>
                <tr>
                  <td data-label="Vulnerability">
                    <strong>Cross-Site Request Forgery (CSRF)</strong>
                  </td>
                  <td data-label="Risk">
                    Unauthorized actions triggered from authenticated browsers.
                  </td>
                  <td data-label="Mitigation">
                    Use{" "}
                    <span className="highlight-strong">anti-forgery tokens</span>{" "}
                    for state-changing requests and
                    <code> SameSite=Strict </code> cookies.
                  </td>
                </tr>
                <tr>
                  <td data-label="Vulnerability">
                    <strong>Insecure Service Workers</strong>
                  </td>
                  <td data-label="Risk">
                    Broad scope or outdated workers allowing malicious
                    interception.
                  </td>
                  <td data-label="Mitigation">
                    Restrict scope, enforce{" "}
                    <span className="highlight-strong">HTTPS</span>, and regularly
                    audit service-worker logic.
                  </td>
                </tr>

                <tr>
                  <td data-label="Vulnerability">
                    <strong>API Exposure and Weak Authentication</strong>
                  </td>
                  <td data-label="Risk">
                    Unprotected endpoints leaking data or allowing brute-force
                    abuse.
                  </td>
                  <td data-label="Mitigation">
                    Use{" "}
                    <span className="highlight-strong">
                      JWT-based authentication
                    </span>
                    , implement{" "}
                    <span className="highlight-strong">rate limiting</span>, and
                    apply{" "}
                    <span className="highlight-strong">
                      role-based access control (RBAC)
                    </span>
                    .
                  </td>
                </tr>
                <tr>
                  <td data-label="Vulnerability">
                    <strong>Dependency Vulnerabilities</strong>
                  </td>
                  <td data-label="Risk">
                    Outdated libraries (npm or NuGet) with known CVEs.
                  </td>
                  <td data-label="Mitigation">
                    Automate{" "}
                    <span className="highlight-strong">dependency scanning</span>{" "}
                    and lock versions in{" "}
                    <span className="highlight-strong">CI/CD pipelines</span>.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 id="core-security-practices">
            <strong>Core Security Practices</strong>
          </h3>
          <h5>
            <strong>1. Enforce HTTPS and HSTS</strong>
          </h5>

          <p>Secure the foundation:</p>
          <CodeBlockCustom code={scriptExample9} language="js" />
          <p className="highlight">In React:</p>
          <CodeBlockCustom code={scriptExample} language="js" />
          <h5>
            <strong>2. Implement a Strict Content Security Policy (CSP)</strong>
          </h5>
          <p>Content-Security-Policy:</p>
          <CodeBlockCustom code={scriptExample1} language="js" />
          <h5>
            <strong>3. Secure Cookies and Storage</strong>
          </h5>
          <ul>
            <li>
              Use <code>Secure; HttpOnly; SameSite=Strict</code> for session
              cookies.
            </li>
            <li>
              Store{" "}
              <span className="highlight-strong">
                short-lived access tokens
              </span>{" "}
              in memory or session storage.
            </li>
            <li>Refresh tokens should be in secure, HttpOnly cookies.</li>
          </ul>
          <h5>
            <strong>4. Sanitize Input and Output In React : </strong>
          </h5>

          <CodeBlockCustom code={scriptExample2} language="js" />
          <h3 id="service-worker-best-practices">
            <strong>Service Worker Best Practices</strong>
          </h3>
          <h5>
            <strong>1. Restrict Scope</strong>
          </h5>
          <CodeBlockCustom code={scriptExample8} language="js" />
          <h5>
            <strong>2. Cache Only Non-Sensitive Assets</strong>
          </h5>
          <CodeBlockCustom code={scriptExample3} language="js" />
          <h3 id="securing-apis-dotnet8">
            {" "}
            <strong>Securing APIs with .NET 8</strong>
          </h3>
          <h5>
            <strong>1. Authentication and Authorization</strong>
          </h5>

          <p>
            Use <strong className="highlight-strong">short-lived JWTs</strong>{" "}
            with refresh token rotation:
          </p>
          <CodeBlockCustom code={scriptExample4} language="js" />
          <h5>
            <strong>2. Rate Limiting</strong>
          </h5>
          <p>Protect APIs from abuse:</p>
          <CodeBlockCustom code={scriptExample5} language="js" />
          <h5>
            <strong>3. Anti-Forgery Tokens</strong>
          </h5>
          <p>Return token to SPA</p>
          <CodeBlockCustom code={scriptExample6} language="js" />
          <h3 id="scaling-security">
            <strong>Scaling Security</strong>
          </h3>

          <h5>
            <strong>1. DDoS Protection</strong>
          </h5>
          <ul>
            <li>
              Use Cloudflare, AWS Shield, or Azure Front Door for traffic
              filtering.
            </li>
            <li>Add request throttling for suspicious traffic patterns.</li>
          </ul>

          <h5>
            <strong>2. Zero Trust Architecture</strong>
          </h5>
          <ul>
            <li>
              Authenticate and authorize every service-to-service request.
            </li>
            <li>
              Rotate keys regularly and enforce least privilege IAM policies.
            </li>
          </ul>

          <h5>
            <strong>3. Logging and Monitoring</strong>
          </h5>
          <ul>
            <li>
              Use structured logging for API calls and service worker events.
            </li>
            <li>
              Monitor anomalies such as high error rates or unusual traffic
              spikes.
            </li>
          </ul>
          <h5>
            <strong>4. Web Push Security In React </strong>
          </h5>

          <CodeBlockCustom code={scriptExample7} language="js" />
          <h3 id="developer-checklist">
            <strong>Developer Checklist</strong>
          </h3>
          <ul>
            <li>✅ Enforce HTTPS and HSTS</li>
            <li>✅ Apply strict CSP</li>
            <li>✅ Secure cookies and token handling</li>
            <li>✅ Use short-lived JWTs with refresh rotation</li>
            <li>✅ Restrict service worker scope</li>
            <li>✅ Audit and lock dependencies</li>
            <li>✅ Automate vulnerability scanning in CI/CD</li>
            <li>✅ Enable rate limiting and monitoring</li>
            <li>✅ Run periodic penetration tests</li>
            <li>✅ Train developers on OWASP Top 10</li>
          </ul>
          <h3 id="real-world-examples">
            <strong>Real-World Examples</strong>
          </h3>
          <ul>
            <li>
              <span className="highlight-strong">Twitter Lite:</span> Lean
              service worker, HTTPS enforced, scalable to millions of concurrent
              users.
            </li>
            <li>
              <span className="highlight-strong">Starbucks PWA:</span> Secure
              offline ordering with encrypted API traffic and cautious caching.
            </li>
            <li>
              <span className="highlight-strong">Pinterest:</span> Regular
              security audits during growth to maintain reliability and trust.
            </li>
            <li>
              <span className="highlight-strong">Flipkart Lite:</span>{" "}
              Integrated ML personalization while maintaining strict token-based
              security.
            </li>
          </ul>

          {/* conclusion  */}
          <h3 id="conclusion">
            <strong>Conclusion</strong>
          </h3>
          <p>
            HTTPS alone can&apos;t keep a progressive web app (PWA) made with
            React and .NET 8 safe. Having a lot of different levels of
            protection is important, like a strict CSP, service workers with a
            clear scope, secure APIs, and regular testing.
          </p>
          <p>
            Once you&apos;ve established HTTPS and CSP, you need to set up CI/CD
            to perform automatic scans. Make it even bigger by adding
            operational protections like WAFs, DDoS protection, and real-time
            monitoring. By adding safety to your DevOps process, you might
            create a platform that is useful, legal, and safe for people all
            over the world to use.
          </p>
          <div className="separate-cta cross-paltform">
            <div className="icon-sec">
              <Image
                src={AppIcons.ctaBgCommonIcon}
                alt="Common icon for CTA section"
                loading="lazy"
                width
                height
              />
            </div>
            <div className="desc-sec">
              <p>
                Is your high-traffic PWA truly secure against XSS, CSRF, and API
                abuse? <br />
                <br />
                Book a free chat with{" "}
                <span className="highlight"> Moltech Solutions Inc</span>.—get
                practical steps to lock down your React + .NET 8 platform with
                HTTPS, CSP, scoped workers, and secure APIs.
              </p>

              <div className="button-sec">
                <Link
                  rel="canonical"
                  className="service-btn"
                  href="/contact-us"
                >
                  <span>Let&apos;s Connect</span>
                  <Iconify icon="weui:arrow-filled" width={20} />
                </Link>
              </div>
            </div>
          </div>
          <div id="faq" className="blog-faq">
            <ServiceFAQ
              items={blogConfig.faqData.faqItems}
              title={blogConfig.faqData.faqTitle}
            />
          </div>
        </div>

        {/* blog content ends here */}
      </>

      {/* ✅ Image Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{modalImageAlt}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <Image src={modalImageSrc} alt={modalImageAlt} fluid />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SecuringProgressiveWebAppsReactDotnet;
