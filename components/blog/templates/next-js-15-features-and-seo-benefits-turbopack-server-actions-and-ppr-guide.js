"use client";
import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { AppIcons } from "@/data/appIcons";
import CodeBlockCustom from "@/components/codeBlock/CodeBlockCustom";
import Image from "next/image";

// code block data
const scriptExample = `"scripts": {
  "dev": "next dev --turbo",
  "build": "next build"
}`;

const turboCommand = "next dev --turbo";
const nextConfigExample = `// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: true
  }
};
module.exports = nextConfig;`;

const addToCartExample = `function addToCart(itemId: string, quantity: number) { … }`;
const clientImportExample = `'use client'
import { addToCart } from './actions'`;

const productFormExample = `export default function ProductForm() {
  return (
    <form action={addToCart}>
      <input name="itemId" value="123" hidden />
      <input name="quantity" type="number" defaultValue={1} />
      <button type="submit">Add to Cart</button>
    </form>
  )
}`;

const bindExample = `const addItem = addToCart.bind(null, '123')
// Now <form action={addItem}> only needs quantity in its form fields`;

const inlineServerActionExample = `export default function Page() {
  async function logout() {
    'use server'
    await auth.signOut()
  }
}`;

const logoutButtonExample = `return <button onClick={logout}>Log out</button>
}`;

const serverOnlyActionExample = `export async function createUser(formData: FormData) {
  // runs on the server only
  const user = await db.user.create({ data: Object.fromEntries(formData) })
  return user
}`;

const pprConfigExample = `import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    ppr: 'incremental',
  },
}

export default nextConfig`;

const blogPageImportsExample = `// app/blog/[slug]/page.tsx
import { Metadata } from 'next';
import { Suspense } from 'react';
import fetchPost from '@/lib/fetchPost';
import fetchComments from '@/lib/fetchComments';`;

const blogPageExample = `interface Params { params: { slug: string } }

// Generate static SEO metadata at build time
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = await fetchPost(params.slug);
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

// Main page component
export default async function BlogPage({ params }: Params) {
  const post = await fetchPost(params.slug);  
  return (
    <>
      {/* SEO tags rendered into the <head> at build time */}
      <article className="prose lg:prose-xl mx-auto py-8">
        <h1>{post.title}</h1>
        <p className="text-gray-600">{post.publishedAt}</p>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>

      {/* Comments loaded at request time via PPR */}
      <Suspense fallback={<p className="mx-auto text-center py-4">Loading comments…</p>}>
        <Comments slug={params.slug} />
      </Suspense>
    </>
  );
}

// Dynamic Comments component
async function Comments({ slug }: { slug: string }) {
  const comments = await fetchComments(slug, { cache: 'no-store' });
  return (
    <section className="mx-auto max-w-2xl py-8">
      <h2 className="text-2xl font-semibold mb-4">Reader Comments</h2>
      <ul>
        {comments.map(c => (
          <li key={c.id} className="mb-2">
            <strong>{c.author}</strong>: {c.text}
          </li>
        ))}
      </ul>
    </section>
  );
}`;

const parallelRoutesExample = `app/
  (marketing)/           ← “marketing” is a group, not part of the URL
    page.js              → served at “/”
    about/page.js        → served at “/about”
  (dashboard)/           ← admin code separated into its own group
    page.js              → served at “/dashboard”`;

const parallelSlotStructure = `app/
└── dashboard/
    ├── layout.js         ← your shared layout
    ├── page.js           ← the default “children” slot
    ├── @analytics/       ← “analytics” slot
    │   └── page.js       ← rendered into the \`analytics\` prop
    └── @team/            ← “team” slot
        └── page.js       ← rendered into the \`team\` prop`;

const dashboardLayoutExample = `// app/dashboard/layout.js
export default function DashboardLayout({ children, analytics, team }) {
  return (
    <div className="dashboard">
      <section className="main">{children}</section>`;

const dashboardLayoutPart2 = `<aside className="analytics">
        <h2>Analytics</h2>
        {analytics}
      </aside>
      <aside className="team">
        <h2>Team</h2>
        {team}
      </aside>
    </div>
  )
}`;

const analyticsSlotExample = `// app/dashboard/@analytics/page.js
export default function Analytics() {
  return <div>📈 Site traffic, charts, key metrics…</div>;
}`;
const teamSlotExample = `// app/dashboard/@team/page.js
export default function Team() {
  return <div>👥 List of team members, roles, avatars…</div>;
}`;

const dashboardLinkImport = `// anywhere in your dashboard UI
import Link from 'next/link';`;

const dashboardNavExample = `// anywhere in your dashboard UI
import Link from 'next/link';

export default function DashboardNav() {
  return (
    <nav>
      {/* Changes only the analytics slot */}
      <Link href="/dashboard/@analytics/views">View Analytics</Link>
      
      {/* Changes only the team slot */}
      <Link href="/dashboard/@team/list">Team Directory</Link>
    </nav>
  );
}

// Use <Link> or router.push() as usual—Next.js will swap out only the 
// slot that corresponds to the new route, leaving other slots intact`;

const productsFolderStructure = `app/
  products/
    loading.js        ← shows while product list is fetching
    page.js           ← streams in as soon as data a`;
const productsPageExample = `'use server'
async function fetchProducts() { … } // Use hook to get data

export default async function ProductsPage() {
  const products = await fetchProducts()
  return <ProductList products={products} />
}`;

const useExample = `const products = use(fetchProducts())`;

const dashboardErrorExample = `app/
  dashboard/
    error.js             ← catches errors in dashboard subtree
    page.js

// app/dashboard/error.js
export default function DashboardError({ error }) {
  return <div>Oops! {error.message}</div>
}`;
const nestedLayoutsExample = `app/
  layout.js              ← root layout (header, footer)
  dashboard/
    layout.js            ← wraps dashboard pages (sidebar)
    page.js
  about/page.js`;

const blogLayoutExample = `app/
└── blog/
    ├── layout.js        ← shared shell (persists across pages)
    ├── template.js      ← remounts on each blog page navigation
    └── [slug]/
        └── page.js      ← your individual`;
const blogTemplateExample = `// app/blog/template.js
export default function BlogTemplate({ children }) {
  // runs on every navigation to a new blog page
  console.log('Template mounted')
  return (
    <div className="blog-template">
      {children}
    </div>
  )
}`;

const Nextjsfeature = () => {
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
      <div id="main-content">
        <div className="blog-header-image  mt-0">
          <Image
            src={AppIcons.NextjsCoverImg}
            alt="Next.js: Key Upgrades & Real-World Benefits"
            loading="lazy"
            width={1280}
            height={640}
            style={{ height: "auto", cursor: "pointer" }}
            onClick={() =>
              handleImageClick(
                AppIcons.NextjsCoverImg,
                "Next.js: Key Upgrades & Real-World Benefits"
              )
            }
          />
        </div>

        <p id="introduction">
          <strong>Next.js</strong> has firmly established itself as the go-to
          framework for production-grade React applications by combining:
        </p>

        <ul>
          <li>
            <strong>Hybrid Rendering:</strong> Seamlessly mix static and dynamic
            content to optimize for both SEO and interactivity.
          </li>
          <li>
            <strong>File-Based Routing:</strong> Intuitive, folder-driven routes
            that eliminate boilerplate and accelerate setup.
          </li>
          <li>
            <strong>Full-Stack Integration:</strong> Built-in API routes, edge
            functions, and data fetching keep back-end logic close to your UI.
          </li>
        </ul>
        <p>
          With <strong>Next.js, Vercel</strong> introduces four major
          game-changers:
        </p>
        <ol>
          <li>
            <strong>Turbopack</strong>
          </li>
          <li>
            <strong>Server Actions</strong>
          </li>
          <li>
            <strong>Partial Prerendering (Experimental)</strong>
          </li>
          <li>
            <strong>App Router Advances &amp; Edge Rendering</strong>
          </li>
        </ol>
        <p>
          In this post, we’ll dive deep into each feature, showing you how to
          integrate them step-by-step, measure the impact on your metrics, and
          streamline your end-to-end workflow from code to global edge network.
        </p>

        <div className="blog-header-image">
          <Image
            src={AppIcons.Nextjs1}
            alt="Turbopack: Now Stable and Default"
            loading="lazy"
            width={1280}
            height={640}
            style={{ height: "auto", cursor: "pointer" }}
            onClick={() =>
              handleImageClick(
                AppIcons.Nextjs1,
                "Turbopack: Now Stable and Default"
              )
            }
          />
        </div>

        <h2 id="turbopack-stable-default">
          <strong> Turbopack: Now Stable and Default</strong>
        </h2>
        <p>
          Turbopack is Vercel’s next-generation, Rust-based bundler for Next.js
          applications. Designed as the official successor to Webpack, it
          replaces multiple compiler passes with a single, unified pipeline that
          understands both server and browser targets in one go — enabling
          dramatic speedups in development builds and Hot Module Replacement
          (HMR).
        </p>
        <h3>
          <strong>
            Compared to Webpack, it delivers (Major Performance Wins):
          </strong>
        </h3>
        <ul>
          <li>
            <strong>Faster cold starts:</strong> up to 50% quicker local
            development startup. Up to 76.7% faster local server startup on
            large apps like vercel.com, thanks to on-demand route compilation
            and optimized file I/O.
          </li>
          <li>
            <strong>Near-instant HMR:</strong> 90% faster hot module replacement
            cycles. Hot Module Replacement now consistently happens in under
            10ms, regardless of application size.
          </li>
          <li>
            <strong>Up to 10x faster builds:</strong> Compilation times have
            been significantly reduced compared to Webpack. Delivers as much as
            45.8% faster first-time route compilation by eliminating duplicate
            server/browser compiler passes and leveraging parallel module
            resolution.
          </li>
          <li>
            <strong>Memory efficiency:</strong> Uses up to 5x less memory than
            Webpack for large applications.
          </li>
        </ul>
        <p>
          You can still opt out of Webpack through configuration to continue
          using it, but Turbopack’s performance benefits make it a compelling
          default choice.
        </p>

        <h3 id="advanced-observability-tracing">
          <strong>Advanced Observability &amp; Tracing</strong>
        </h3>
        <p>
          Turbopack instruments every step of its pipeline, writing lightweight
          trace files (without including your app code) in{" "}
          <code>.next/trace-turbopack</code>. You can then visualize
          compile-time hotspots and memory usage with the built-in trace viewer,
          accelerating deep performance tuning and debugging.
        </p>
        <p>You can get started as follows:</p>
        <h4>
          <b>1. Enable Turbopack in your package.json scripts:</b>
        </h4>

        <CodeBlockCustom code={scriptExample} language="json" />
        <h4>
          <b>2.Via CLI flag</b>
        </h4>
        <CodeBlockCustom code={turboCommand} language="bash" />
        <h4>
          <strong>
            3. (Optional) Enable in{" "}
            <span className="package-name-light">next.config.js</span>
          </strong>
        </h4>
        <CodeBlockCustom code={nextConfigExample} language="javascript" />
        <p>
          For Production is still in alpha Keep an eye on the Next.js release.
        </p>

        <h3 id="who-benefits-most">
          <strong>Who Benefits Most</strong>
        </h3>
        <ul>
          <li>
            <p>
              <strong>Frontend Teams at Scale:</strong> Projects sharing code
              across packages — Turbopack’s incremental graph means changes in
              one package don’t force a full repo rebuild.
            </p>
          </li>
          <li>
            <p>
              <strong>Full-Stack Developers:</strong> The unified server/client
              pipeline simplifies keeping API routes, edge functions, and UI in
              sync without juggling separate toolchains.
            </p>
          </li>
          <li>
            <p>
              <strong>Enterprises &amp; Agencies:</strong> Teams deploying on
              tight schedules or frequent release cycles; faster CI builds and
              dev iteration accelerate time-to-market.
            </p>
          </li>
          <li>
            <p>
              <strong>Vercel &amp; Edge-First Projects:</strong> When you want
              to leverage Vercel’s remote caching and edge functions,
              Turbopack’s cache persistence slashes both local and cloud build
              times.
            </p>
          </li>
        </ul>

        <h3 id="current-limitations-roadmap">
          <strong>Current Limitations &amp; Roadmap</strong>
        </h3>
        <ul>
          <li>
            <p>
              <strong>Webpack Compatibility</strong>
              <br />
              Turbopack doesn’t support raw{" "}
              <span className="package-name-light">webpack()</span>
              configs, though most common loaders and resolve aliases work out
              of the box. Exotic Webpack child compilers or file-emitting
              plugins may not yet be supported.
            </p>
          </li>
          <li>
            <p>
              <strong>CSS &amp; Sourcemaps</strong>
              <br />
              Switched from PostCSS to Lightning CSS for speed; uses
              section-based sourcemaps to avoid eval-based maps while still
              enabling granular mapping.
            </p>
          </li>
          <li>
            <p>
              <strong>Upcoming Optimizations</strong>
              <br />
              Export name mangling, scope hoisting, and production-optimized JS
              chunking are in progress — promising even smaller bundles and
              faster load times in future releases.
            </p>
          </li>
        </ul>

        <p>
          To explore more about <strong>Turbopack</strong>, you can read the
          following blog published by the Next.js team.
        </p>

        <div className="blog-header-image">
          <Image
            src={AppIcons.Nextjs2}
            alt="server actions in next js 14+"
            loading="lazy"
            width={1280}
            height={640}
            style={{ height: "auto", cursor: "pointer" }}
            onClick={() =>
              handleImageClick(
                AppIcons.Nextjs2,
                "server actions in next js 14+"
              )
            }
          />
        </div>

        <h3 id="server-actions">
          <strong>Server Actions</strong>
        </h3>

        <p>
          Server Actions, which were introduced as an experimental feature in
          previous versions, are now officially stable and production-ready in
          <span className="package-name-light">Next.js 15.0</span> onwards. This
          feature allows you to define server-side functions directly in your
          components, making form submissions and data mutations more
          straightforward and secure.
        </p>

        <p>
          Gone are the days of separate API folders and custom endpoints. Server
          Actions let you define functions that run on the server, but invoke
          them directly from your React components:
        </p>

        <p>
          Server Actions are simply <strong>async functions</strong> marked with
          the
          <span className="package-name-light">
            &quot;use server&quot;
          </span>{" "}
          directive that always executes on the server, but can be{" "}
          <strong>invoked directly from your React components</strong>— whether
          Server or Client components—without you having to write any separate
          API route or
          <span className="package-name-light">fetch</span> boilerplate.
        </p>

        <p>Defining Server Action in a Client Component:</p>
        <CodeBlockCustom code={addToCartExample} language="typescript" />

        <CodeBlockCustom code={clientImportExample} language="typescript" />

        <CodeBlockCustom code={productFormExample} language="typescript" />

        <p>
          We can also be called additionally from the function on the addItem
          action.
        </p>
        <CodeBlockCustom code={bindExample} language="typescript" />

        <p>
          {" "}
          We can define <strong>inline in a Server Component</strong> as shown
          below.
        </p>

        <CodeBlockCustom
          code={inlineServerActionExample}
          language="typescript"
        />
        <CodeBlockCustom code={logoutButtonExample} language="typescript" />
        <p>
          To run <strong>Server-only:</strong> action:
        </p>

        <CodeBlockCustom code={serverOnlyActionExample} language="typescript" />

        <h3 id="benefits-of-server-actions">
          <strong>Key Benefits of Server Actions</strong>
        </h3>

        <ol>
          <li>
            <strong>Zero Boilerplate</strong>
            <ul>
              <li>
                <strong>No API Folder:</strong> You don’t need to create
                <span className="package-name-light">pages/api</span> or Route
                Handlers—just write your server logic next to your components.
              </li>
              <li>
                <strong>
                  No <span className="package-name-light">fetch</span> Calls:
                </strong>{" "}
                Instead of manually issuing
                <span className="package-name-light">
                  {/* fetch('/api/...') */}
                </span>
                , you invoke the action directly from your JSX (e.g., as a form
                <span className="package-name-light">action</span> or via an
                event handler).
              </li>
            </ul>
          </li>

          <li>
            <strong>Collocated Full-Stack Logic</strong>
            <ul>
              <li>
                <strong>Single File:</strong> UI and server logic live side by
                side. When you navigate to your component, you immediately see
                both the form and its mutation.
              </li>
              <li>
                <strong>Better Discoverability:</strong> Reduces
                context-switching between frontend and backend code — teams can
                onboard faster and understand features holistically.
              </li>
            </ul>
          </li>

          <li>
            <strong>Automatic Type Safety &amp; Serialization</strong>
            <ul>
              <li>
                <strong>End-to-End Types</strong> (TypeScript): Your function’s
                signature is the single source of truth for both client and
                server, eliminating mismatched payload types.
              </li>
            </ul>
          </li>

          <li>
            <strong>Optimized Rendering &amp; Data Flow</strong>
            <ul>
              <li>
                <strong>Fine-Grained Revalidation:</strong> Only the affected
                portions of the page are re-fetched or invalidated, avoiding
                full-page reloads or unnecessary data refetching.
              </li>
              <li>
                <strong>Streaming Updates:</strong> As soon as your server
                action returns data,
                <span className="package-name-light">Next.js</span> can stream
                updated HTML to the client, improving perceived performance.
              </li>
            </ul>
          </li>

          <li>
            <strong>Security by Default</strong>
            <ul>
              <li>
                <strong>Server-Only Execution:</strong> Code under
                <span className="package-name-light">
                  &quot;use server&quot;
                </span>{" "}
                never ships to the browser, preventing accidental client
                exposure of sensitive logic or secrets.
              </li>
              <li>
                <strong>Automatic CSRF Protections:</strong> Form submissions
                via Server Actions include built-in safeguards against
                cross-site request forgery.
              </li>
            </ul>
          </li>
        </ol>
        <h3 id="server-actions-vs-traditional">
          <strong>How It Differs from Traditional Development?</strong>
        </h3>

        <ol>
          <li>
            <strong>Folder structure:</strong>
            <ul>
              <li>
                <strong>Traditional API Routes:</strong> Separate
                <span className="package-name-light">pages/api</span> or
                <span className="package-name-light">app/api</span>
              </li>
              <li>
                <strong>Server Action:</strong> No dedicated API folder
              </li>
            </ul>
          </li>

          <li>
            <strong>Invocation:</strong>
            <ul>
              <li>
                <strong>Traditional API Routes:</strong> Client issues
                <span className="package-name-light">fetch()</span> or Axios
              </li>
              <li>
                <strong>Server Action:</strong> Call function directly in JSX
              </li>
            </ul>
          </li>

          <li>
            <strong>Boilerplate:</strong>
            <ul>
              <li>
                <strong>Traditional API Routes:</strong> Request parsing,
                routing, and error handling are all manual
              </li>
              <li>
                <strong>Server Action:</strong>{" "}
                <span className="package-name-light">Next.js</span>{" "}
                auto-generates the HTTP layer
              </li>
            </ul>
          </li>

          <li>
            <strong>Data Fetching:</strong>
            <ul>
              <li>
                <strong>Traditional API Routes:</strong> The Client must
                <span className="package-name-light">fetch</span> then
                <span className="package-name-light">setState</span>
              </li>
              <li>
                <strong>Server Action:</strong> Form
                <span className="package-name-light">action</span> or direct
                binding handles it
              </li>
            </ul>
          </li>

          <li>
            <strong>Bundle Exposure:</strong>
            <ul>
              <li>
                <strong>Traditional API Routes:</strong> All code shipped
                client-side unless tree-shaken
              </li>
              <li>
                <strong>Server Action:</strong>
                <span className="package-name-light">
                  &quot;use server&quot;
                </span>{" "}
                isolates server code completely
              </li>
            </ul>
          </li>

          <li>
            <strong>Bundle Exposure:</strong>
            <ul>
              <li>
                <strong>Traditional API Routes:</strong> Manual cache
                invalidation or SWR key updates
              </li>
              <li>
                <strong>Server Action:</strong>{" "}
                <span className="package-name-light">Next.js</span> knows
                precisely which segments need refreshed
              </li>
            </ul>
          </li>
        </ol>

        <h3 id="limitations-of-server-actions">
          <strong>Limitations of Server Actions</strong>
        </h3>

        <ul>
          <li>
            <strong>Only Serializable Data:</strong> Inputs and outputs must be
            JSON-friendly (no functions, class instances, file streams).
          </li>
          <li>
            <strong>No Low-Level HTTP Control:</strong> You can’t set custom
            headers, status codes, or handle multipart streams — use Route
            Handlers for that.
          </li>
          <li>
            <strong>Quick Mutations Only:</strong> Ideal for form submits or
            simple DB writes; avoid CPU-heavy tasks or long-running loops.
          </li>
          <li>
            <strong>App Router Required:</strong> Available only in the new
            <span className="package-name-light">app/</span> directory — legacy{" "}
            <span className="package-name-light">pages/</span> projects must
            migrate first.
          </li>
          <li>
            <strong>Ecosystem Maturity:</strong> Some exotic middleware or
            plugin setups may not work yet; watch the{" "}
            <span className="package-name-light">Next.js</span> changelog for
            fixes.
          </li>
        </ul>

        <p>
          In short, Server Actions deliver a supremely smooth, zero-boilerplate
          way to co-locate your UI and server logic — but only when your data
          needs and runtime constraints fit within their streamlined model. When
          you need fine-grained HTTP control, non-serializable inputs, or heavy
          compute, classic API routes and edge functions still have your back.
          Mix and match both approaches, and you’ll get the best of
          <span className="package-name-light">Next.js</span>’s full-stack
          flexibility.
        </p>
        <div className="blog-header-image">
          <Image
            src={AppIcons.Nextjs3}
            alt="Partial Prerendering"
            loading="lazy"
            width={1280}
            height={640}
            style={{ height: "auto", cursor: "pointer" }}
            onClick={() =>
              handleImageClick(AppIcons.Nextjs3, "Partial Prerendering")
            }
          />
        </div>

        <h3 id="partial-prerendering">
          <strong>
            Partial Prerendering (PPR): Revolutionary Hybrid Rendering
          </strong>
        </h3>

        <p>
          <strong>Partial Prerendering</strong> (opt-in, experimental) streams a
          minimal HTML shell first, then progressively hydrates dynamic regions.
          Benefits include:
        </p>

        <ul>
          <li>Static shell is generated at build time for instant loading</li>
          <li>Dynamic content is streamed in after initial load</li>
          <li>
            Smart hydration prioritizes interactive elements, only hydrates
            interactive components on demand
          </li>
          <li>
            <strong>Improved Core Web Vitals</strong>: better scores for SEO
            rankings
          </li>
          <li>
            Use this for dashboards, blogs, or any route where SEO and
            interactivity matter in tandem.
          </li>
        </ul>

        <p>
          <strong>Partial Prerendering (PPR)</strong> is an experimental
          rendering strategy introduced in
          <span className="package-name-light">Next.js 15</span> that lets you
          combine static and dynamic content within the same route. Instead of
          choosing “all static” or “all dynamic,” you can prerender the shell of
          your page at build time — layouts, navigation, static widgets — and
          defer only the truly dynamic pieces (user-specific data, real-time
          feeds) until request time.
        </p>

        <h4>
          <strong>
            Enable it in{" "}
            <span className="package-name-light">next.config.js</span>:
          </strong>
        </h4>

        <p>
          You can enable PPR by adding the{" "}
          <span className="package-name-light">ppr</span> option to your
          <span className="package-name-light">next.config.ts</span> file:
        </p>
        <CodeBlockCustom code={pprConfigExample} language="typescript" />

        <div className="blog-header-image">
          <Image
            src={AppIcons.Nextjs4}
            alt="App Router"
            loading="lazy"
            width={1280}
            height={640}
            style={{ height: "auto", cursor: "pointer" }}
            onClick={() => handleImageClick(AppIcons.Nextjs4, "App Router")}
          />
        </div>

        <h3 id="benefits-of-ppr">
          <strong>Benefits of Partial Prerendering</strong>
        </h3>

        <ul>
          <li>
            <strong>Instant Shell Load:</strong> Users see the page structure
            immediately.
          </li>
          <li>
            <strong>Personalized Data:</strong> Dynamic bits (user carts,
            recommendations) load seamlessly.
          </li>
          <li>
            <strong>Optimized Metrics:</strong> Improved TTFB and Largest
            Contentful Paint (LCP) by streaming only what’s needed.
          </li>
        </ul>

        <p>
          Here’s an example showing how you might use Partial Prerendering to
          deliver SEO-critical content (meta tags, headings, core copy) at build
          time, while deferring non-essential or personalized sections to
          runtime:
        </p>
        <CodeBlockCustom code={blogPageImportsExample} language="typescript" />

        <CodeBlockCustom code={blogPageExample} language="typescript" />
        <h3 id="why-ppr-boosts-seo">
          <strong>Why This Boosts SEO</strong>
        </h3>

        <ul>
          <li>
            The <span className="package-name-light">generateMetadata</span>{" "}
            function and the
            <span className="package-name-light">&lt;article&gt;</span> markup
            are prerendered at build time, so crawlers immediately see your{" "}
            <span className="package-name-light">&lt;title&gt;</span>,
            <span className="package-name-light">&lt;meta&gt;</span> tags,
            headings, and main copy without waiting for any client-side
            JavaScript.
          </li>
          <li>
            <p>
              <strong>Deferred Non-Critical UI</strong>
              <br />
              Comments — useful for user engagement but not for SEO — are loaded
              after the shell streams, so they don’t block or bloat your initial
              HTML payload.
            </p>
          </li>
          <li>
            <p>
              <strong>Instant First Paint</strong>
              <br />
              Bots (and users) get the fully-formed article shell right away,
              improving Core Web Vitals like First Contentful Paint (FCP) and
              Largest Contentful Paint (LCP).
            </p>
          </li>
        </ul>

        <p>
          To understand it in detail, you can refer to and explore the following
          blog from Next.js.com
        </p>

        <h4>
          <strong>App Router Advances &amp; Edge Rendering</strong>
        </h4>

        <p>
          The App Router gets smarter in v14. The App Router has been enhanced
          with:
        </p>

        <h5>
          <strong>1. Route Groups</strong>
        </h5>

        <p>
          Route Groups let you organize your folder structure for clarity
          without affecting the URL path. This is ideal for splitting codebases
          by feature or team, while keeping public-facing routes clean.
        </p>
        <CodeBlockCustom code={parallelRoutesExample} language="plaintext" />

        <ul>
          <li>Encapsulate shared layouts, styles, and components per group.</li>
          <li>
            No URL bloat: folders in parentheses are stripped out of the route.
          </li>
          <li>Improves DX for large apps by grouping related code.</li>
        </ul>

        <h5>
          <strong>2. Parallel Routes:</strong>
        </h5>
        <p>
          Parallel Routes enable rendering multiple “slots” in the same URL
          segment, such as a sidebar, map, or notifications panel alongside your
          main content.
        </p>

        <CodeBlockCustom code={parallelSlotStructure} language="plaintext" />
        <CodeBlockCustom code={dashboardLayoutExample} language="javascript" />
        <CodeBlockCustom code={dashboardLayoutPart2} language="javascript" />

        <ul>
          <li>
            <span className="package-name-light">children</span> ← renders
            <span className="package-name-light">app/dashboard/page.js</span>
          </li>
          <li>
            <span className="package-name-light">analytics</span> ← renders
            whatever you export from
            <span className="package-name-light">
              app/dashboard/@analytics/page.js
            </span>
          </li>
          <li>
            <span className="package-name-light">team</span> ← renders whatever
            you export from
            <span className="package-name-light">
              app/dashboard/@team/page.js
            </span>
            <span className="package-name-light">Next.js</span>
          </li>
        </ul>

        <h6>
          <strong>
            Each slot folder just needs a{" "}
            <span className="highlight">page.js</span> :
          </strong>
        </h6>

        <CodeBlockCustom code={analyticsSlotExample} language="javascript" />
        <CodeBlockCustom code={teamSlotExample} language="javascript" />
        <h6>
          <strong>you can navigate between parallel pages as:</strong>
        </h6>

        <CodeBlockCustom code={dashboardLinkImport} language="javascript" />

        <CodeBlockCustom code={dashboardNavExample} language="javascript" />
        <h6>
          <strong>Example URLs</strong>
        </h6>

        <ul>
          <li>
            <span className="package-name-light">/dashboard</span>
          </li>
          <li>
            Renders default <span className="package-name-light">children</span>
            , plus both <span className="package-name-light">@analytics</span>{" "}
            and <span className="package-name-light">@team</span> default pages
          </li>
          <li>
            <span className="package-name-light">
              /dashboard/@analytics/views
            </span>
          </li>
          <li>
            Swaps the <span className="package-name-light">analytics</span> slot
            to{" "}
            <span className="package-name-light">
              app/dashboard/@analytics/views/page.js
            </span>{" "}
            (if it exists) and keeps the{" "}
            <span className="package-name-light">team</span> slot unchanged
          </li>
          <li>
            <span className="package-name-light">/dashboard/@team/list</span>
          </li>
          <li>
            Swaps the <span className="package-name-light">team</span> slot to{" "}
            <span className="package-name-light">
              app/dashboard/@team/list/page.js
            </span>{" "}
            and preserves analytics
          </li>
        </ul>

        <p>
          For more information, you can click on{" "}
          <strong>Parallel Routes in Next.js</strong>.
        </p>

       <h6>
          <strong>Benefit</strong>
        </h6>

        <ul>
          <li>
            Build complex UIs (e.g. dashboards, admin panels) without manual
            composition.
          </li>
          <li>
            Each slot can fetch its own data and show independent loading
            states.
          </li>
          <li>
            Child navigation only re-renders affected slots, preserving others.
          </li>
        </ul>

        <h6>
          <strong>Notes:</strong>
        </h6>

        <ul>
          <li>
            In the <span className="package-name-light">app</span> directory,
            create folders prefixed with <code>@</code> for each slot you want
            to render in parallel.
          </li>
          <li>
            These folders don’t affect the URL path—they simply declare “named
            slots” that your layout can accept as props.
          </li>
        </ul>

        <h5>
          <strong>3. Streaming &amp; Loading UI</strong>
        </h5>

        <p>
          Built on React 18’s streaming Suspense, Next.js lets you ship partial
          HTML as soon as each segment is ready — rather than waiting for the
          entire tree.
        </p>

        <CodeBlockCustom code={productsFolderStructure} language="plaintext" />
        <CodeBlockCustom code={productsPageExample} language="typescript" />

        <p>In client components you can:</p>

        <CodeBlockCustom code={useExample} language="typescript" />

        <ul>
          <li>Instant “shell” UI so users see structure immediately.</li>
          <li>Granular loading indicators vs. a single spinner.</li>
          <li>
            Better Core Web Vitals (especially FCP &amp; LCP) by streaming
            critical HTML.
          </li>
        </ul>

        <h5>
          <strong>4. Simplified Error and Redirect Handling</strong>
        </h5>

        <p>
          <strong>Error Boundaries:</strong> Drop an{" "}
          <span className="package-name">error.js</span> file alongside any{" "}
          <span className="package-name">page.js</span> or{" "}
          <span className="package-name">layout.js</span> to scope error
          handling:
        </p>

        <CodeBlockCustom code={dashboardErrorExample} language="javascript" />

        <p>
          <strong>Redirect Helpers:</strong> Programmatic redirects from Server
          Components — no more{" "}
          <span className="package-name-light">res.writeHead</span> or{" "}
          <span className="package-name-light">getServerSideProps</span>:
        </p>
        <h6>
          <strong>Benefits</strong>
        </h6>
        <ul>
          <li>Keep your server-only logic collocated.</li>
          <li>TypeScript-friendly APIs</li>
          <li>More predictable routing behavior with fewer edge cases.</li>
        </ul>

        <h5>
          <strong>5. Nested Layouts:</strong> Define shared UI at any level;
          child pages inherit and preserve state across navigations.
        </h5>
        <CodeBlockCustom code={nestedLayoutsExample} language="plaintext" />
        <p>
          We can have different layouts based on route groups. In the above
          example:
        </p>
        <ul>
          <li>
            <span className="package-name">app/layout.js</span> can be applied
            at the global level,
          </li>
          <li>
            <span className="package-name">dashboard/layout.js</span> can apply
            for pages related to dashboard.
          </li>
        </ul>

        <h5>
          <strong>6. Template Routes</strong>
        </h5>
        <p>
          In Next.js 15, a <span className="highlight">template.js</span>{" "}
          file behaves similarly to a layout—it wraps child pages or layouts—but
          with one crucial difference: it remounts on every navigation, giving
          you a fresh component instance (and state) each time.
        </p>

        <p>
          This makes templates ideal for per-page side-effects and UI that
          intentionally resets between routes.
        </p>

        <p>
          Create <span className="package-name">template.js</span> alongside
          your <span className="package-name">page.js</span> or{" "}
          <span className="package-name">layout.js</span>
        </p>

        <p>
          Place <span className="package-name">template.js</span> in any route
          folder:
        </p>
        <CodeBlockCustom code={blogLayoutExample} language="plaintext" />

        <h6>
          <strong>
            Export a React component accepting{" "}
            <span className="package-name-light">children</span>
          </strong>
        </h6>
        <CodeBlockCustom code={blogTemplateExample} language="javascript" />
        <h6>
          <strong>
            When to Use <span className="package-name-light">template.js</span>
          </strong>
        </h6>

        <ul>
          <li>
            <strong>Per-Page Analytics or Logging:</strong> Run a page-view
            tracking call on every navigation, without worrying about duplicate
            or skipped triggers.
          </li>
          <li>
            <strong>Transient UI:</strong> Display UI that must reset between
            pages (e.g., feedback forms, per-page modals).
          </li>
          <li>
            <strong>Custom Suspense Behavior:</strong> Unlike layouts — where
            Suspense fallbacks only show once per layout mount — templates
            re-show their fallback on each navigation when used with
            <span className="package-name-light">loading.js</span>.
          </li>
        </ul>

        <h6>
          <strong>
            <span className="package-name-light">template.js</span> vs.{" "}
            <span className="package-name-light">layout.js</span>
          </strong>
        </h6>

        <ul>
          <li>
            <span className="package-name-light">layout.js</span>: Persists
            across child navigations while
            <span className="package-name-light">template.js</span>: Remounts on
            each navigation
          </li>
          <li>
            <span className="package-name-light">layout.js</span>, State &amp;
            <span className="package-name-light">useEffect</span> Preserved
            while
            <span className="package-name-light">template.js</span>: state and
            <span className="package-name-light">useEffect</span> reset and
            refires
          </li>
        </ul>

        <h6>
          <strong>
            Next.js is packed with even more quality-of-life updates that we’ll
            dive into in upcoming posts, including:
          </strong>
        </h6>

        <ul>
          <li>
            Enhanced <span className="package-name-light">&lt;Image&gt;</span>{" "}
            component capabilities (AVIF support, automatic sizes inference,
            smarter placeholders)
          </li>
          <li>
            New Server Component patterns for cleaner data fetching and UI
            co-location
          </li>
          <li>
            Metadata API enhancements that simplify SEO tags, Open Graph data,
            and dynamic
            <span className="package-name-light">&lt;head&gt;</span> management
          </li>
          <li>
            Developer experience improvements like refined error overlays,
            faster type-checking, and improved telemetry
          </li>
        </ul>

        <p>
          You can also explore more detail on{" "}
          <a href="https://nextjs.org/blog/next-14" target="_blank">
            https://nextjs.org/blog/next-14
          </a>
          .
        </p>

        <h3 id="conclusion">
          <strong>Conclusion</strong>
        </h3>
        <p>
          <span className="package-name-light">Next.js</span> represents a
          significant step forward in the evolution of React frameworks. With
          stable Turbopack, mature{" "}
          <span className="package-name-light">Server Actions</span>,
          revolutionary{" "}
          <span className="package-name-light">Partial Prerendering</span>, and
          numerous other improvements, this release sets a new standard for web
          application development.
        </p>
        <p>
          Whether you’re building a small personal project or an
          enterprise-grade application,
          <span className="package-name-light">Next.js</span> provides the tools
          and optimizations needed to deliver exceptional user experiences with
          developer-friendly workflows.
        </p>

        {/* blog content ends here */}
      </div>

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

export default Nextjsfeature;
