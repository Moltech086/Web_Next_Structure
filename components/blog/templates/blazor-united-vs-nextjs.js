"use client";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { AppIcons } from "@/data/appIcons";
import Image from "next/image";
import ServiceFAQ from "@/components/serviceFAQ/ServiceFAQ";
import { blogConfig } from "@/data/blogs/blazor-united-vs-nextjs";
import Iconify from "@/components/ui/icons/Iconify";
import CodeBlockCustom from "@/components/codeBlock/CodeBlockCustom";
import { Icon } from "@iconify/react";

const scriptExample = `@page "/counter"
<h3>Counter</h3>
<p>Count: @count</p>
<button @onclick="IncrementCount">Click</button>

@code {
  int count = 0;
  void IncrementCount() => count++;
}
}`;
const scriptExample2 = `export async function getServerSideProps() {
  const data = await fetch('https://api.example.com/data').then(r => r.json());
  return { props: { data } };
}
export default function Page({ data }) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}`;

const AipilotVsFullScale = () => {
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
      <div>
        <div id="main-content">
          <div className="blog-header-image  mt-0">
            <Image
              src={AppIcons.blazorUnitedVsnextJsfullstackShowdowncover}
              alt="Blazor United vs. Next.js: Full-Stack Showdown"
              loading="lazy"
              width={1280}
              height={640}
              style={{ height: "auto", cursor: "pointer" }}
              onClick={() =>
                handleImageClick(
                  AppIcons.blazorUnitedVsnextJsfullstackShowdowncover,
                  "Blazor United vs. Next.js: Full-Stack Showdown"
                )
              }
            />
          </div>

          <h3 id="introduction">
            <strong>
              <span>Blazor United vs. Next.js:</span> Full-Stack Showdown
            </strong>
          </h3>

          <p>
            Imagine launching a web app that loads instantly and seamlessly
            becomes interactive—no reloads, no compromises. That’s increasingly
            what modern frameworks promise. Here&apos;s the twist: you can build
            that with full-stack C# or mind-blowing React flexibility. Which do
            you choose?
          </p>

          <p>
            I recall a CTO debugging this exact question: his dev lead loves the
            elegant tooling of .NET, while his frontend engineer raves about
            React&apos;s agility.
          </p>

          <h4>
            <strong>This post clears the fog by laying out:</strong>
          </h4>
          <ul>
            <li>
              <strong className="highlight">
                What Blazor United brings is
              </strong>{" "}
              a single C# stack with dynamic SSR and WebAssembly.
            </li>
            <li>
              <strong className="highlight">Why Next.js still leads</strong>{" "}
              with its mature React toolbox.
            </li>
            <li>
              Deep dives into <strong className="highlight">security</strong>,{" "}
              <strong className="highlight">scalability</strong>, and{" "}
              <strong className="highlight">business ROI</strong>.
            </li>
            <li>We provide honest developer comparisons using sample code.</li>
          </ul>

          <p>
            Whether you&apos;re leading a .NET shop or a React team, by the end,
            you&apos;ll know which powers your next project best.
          </p>

          <h3 id="what-is-blazor-united">
            <strong>
              What Is Blazor United? A Unified <span>.NET Stack</span>
            </strong>
          </h3>
          <p>
            Blazor United—part of .NET 8’s evolution—combines Blazor Server and
            Blazor WebAssembly into a unified architecture that dynamically
            chooses between <strong>server-side rendering (SSR)</strong> and{" "}
            <strong>client-side WASM</strong>, all within one C# codebase.
          </p>
          <p>
            Under the hood, Blazor United supports{" "}
            <strong>streaming rendering</strong>,{" "}
            <strong>enhanced navigation</strong>, and{" "}
            <strong>per-component interactive choices</strong>. It even supports
            runtime optimization to reduce payload sizes by up to{" "}
            <strong>75%</strong>.
          </p>

          <h4>
            <strong>Why teams love this:</strong>
          </h4>
          <ul>
            <li>
              Only one project and one language—cleaner architecture, easier
              sharing of logic and services.
            </li>
            <li>SSR provides SEO advantages and expedites first-page loads.</li>
            <li>
              Interactivity where needed, with graceful degradation when not.
            </li>
          </ul>

          <h3 id="what-is-nextjs">
            <strong>
              What Is <span>Next.js? React’s </span> Full-Stack Workhorse
            </strong>
          </h3>
          <p>
            Next.js is a mature, adaptable full-stack framework with SSR, Static
            Site Generation (SSG), Incremental Static Regeneration (ISR), and
            routing-based API endpoints. It is built on React and developed by
            Vercel.
          </p>

          <h4>
            <strong>Why it wins based on versatility:</strong>
          </h4>
          <ul>
            <li>
              The rendering modes can be changed for each page or endpoint.
            </li>
            <li>
              A rich ecosystem with middleware, image optimization, edge
              functions, and the Turbopack bundler
            </li>
            <li>
              The create-next-app feature makes it easy and quick to start a new
              project.
            </li>
          </ul>

          <h3 id="security-scalability-business">
            <strong>
              <span>Security, Scalability</span> &amp; Business Outcomes
            </strong>
          </h3>
          <div className="custom-card-sec">
            <div className="card-view">
              <h5 className="mt-0">
                <span>
                  <Icon icon="mdi:security" width="35" height="35" />
                </span>
                Security
              </h5>
              <p>
                <strong className="highlight">Blazor United</strong>: is a
                wonderful alternative for enterprises that need to obey the laws
                because ASP.NET Core has strong security features, including
                anti-forgery protection, authorization regulations, and easy
                connections to Azure AD or OpenID Connect.
              </p>
              <p>
                <strong className="highlight">Next.js</strong>: works with
                token-based systems like NextAuth or Auth0 and employs secure
                middleware like Helmet. This is great for deployments that need
                to be flexible, like Jamstack.
              </p>
            </div>
            <div className="card-view">
              <h5>
                <span>
                   <Icon
                    icon="mdi:layers-triple-outline"
                    width="35"
                    height="35"
                  />
                </span>
                Scalability
              </h5>
              <p>
                <strong className="highlight">Blazor United</strong>: Efficient
                server-side scaling with minimal JavaScript, and WASM
                interoperability ensures responsiveness without overloading
                servers.
              </p>
              <p>
                <strong className="highlight">Next.js</strong>: Push-button
                serverless or edge deployment, with ISR for dynamic content and
                auto-scaling SSR handling.
              </p>
            </div>
            <div className="card-view">
              <h5>
                <span>
                   <Icon icon="mdi:finance" width="35" height="35" />
                </span>
                Business ROI
              </h5>
              <p>
                <strong className="highlight">Blazor United</strong>: offers low
                switching costs in .NET environments, reusable C# asset
                expansions, and predictable infrastructure overhead.
              </p>
              <p>
                <strong className="highlight">Next.js</strong>: enables
                lightning-fast prototyping, a huge talent pool, and flexible
                deployment—great for marketing, prototype apps, and highly
                interactive UIs.
              </p>
            </div>
          </div>
          <h3 id="developer-perspective">
            <strong>
              Developer Perspective &amp; <span>Code Snippets</span>
            </strong>
          </h3>

          <h4>
            <strong>Blazor United (Developer View)</strong>
          </h4>
          <p>
            C# is used for everything, both on the server and in the browser.
            With full hot-reload support and debugging across layers,
            development in tools like Visual Studio is smooth.
          </p>

          <h5 id="snippet-counter">
            <strong>Snippet — Counter component:</strong>
          </h5>
          <CodeBlockCustom code={scriptExample} language="json" />
          <h5>
            <strong>Next.js (Developer View)</strong>
          </h5>
          <p>
            Driven by a massive ecosystem, file routing, and hot reload. Begin
            with nothing and expand as necessary.
          </p>

          <h5 id="snippet-ssr">
            <strong>Snippet — SSR page example:</strong>
          </h5>
          <CodeBlockCustom code={scriptExample2} language="json" />

          <h3 id="feature-face-off">
            <strong>
              <span>Feature Face-Off:</span> Quick Comparison
            </strong>
          </h3>

          <div className="table-container-blazor-united-vs-nextjs">
            <table className="comparison-table-2">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Blazor United (C#)</th>
                  <th>Next.js (React/JS)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Feature">Rendering</td>
                  <td data-label="Blazor United (C#)">
                    SSR + WASM dynamically
                  </td>
                  <td data-label="Next.js (React/JS)">
                    SSR, SSG, ISR, streaming, edge
                  </td>
                </tr>
                <tr>
                  <td data-label="Feature">Language</td>
                  <td data-label="Blazor United (C#)">Full-stack C#</td>
                  <td data-label="Next.js (React/JS)">
                    JavaScript/TypeScript + React ecosystem
                  </td>
                </tr>
                <tr>
                  <td data-label="Feature">SEO / Performance</td>
                  <td data-label="Blazor United (C#)">
                    SEO-ready SSR, optimized transitions
                  </td>
                  <td data-label="Next.js (React/JS)">
                    Comprehensive tooling for speed &amp; SEO
                  </td>
                </tr>
                <tr>
                  <td data-label="Feature">Security</td>
                  <td data-label="Blazor United (C#)">
                    ASP.NET integrated stack
                  </td>
                  <td data-label="Next.js (React/JS)">
                    Middleware-based, adaptable setups
                  </td>
                </tr>
                <tr>
                  <td data-label="Feature">Developer Experience</td>
                  <td data-label="Blazor United (C#)">
                    One-language consistency, rich IDE support
                  </td>
                  <td data-label="Next.js (React/JS)">
                    Flexibility, vast ecosystem resources
                  </td>
                </tr>
                <tr>
                  <td data-label="Feature">Ecosystem</td>
                  <td data-label="Blazor United (C#)">.NET-focused, growing</td>
                  <td data-label="Next.js (React/JS)">
                    Massive React/NPM ecosystem
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 id="conclusion">
            <strong>Conclusion</strong>
          </h3>
          <p>
            When deciding between Blazor United and Next.js, you need to think
            about how well they fit into your ecosystem and what your
            project&apos;s goals are. Blazor United is a great option if you
            work in a .NET environment and want tight integration and control
            over a single language. Next.js is the best choice if your project
            needs modular UIs, quick changes, and front-end flexibility that
            can&apos;t be beat.
          </p>

          <div id="faqs" className="blog-faq mt-5">
            <ServiceFAQ
              items={blogConfig.faqData.faqItems}
              title={blogConfig.faqData.faqTitle}
            />
          </div>
        </div>

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

export default AipilotVsFullScale;
