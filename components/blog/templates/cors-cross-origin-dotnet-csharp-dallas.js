"use client";

import React, { useState } from "react";
import { AppIcons } from "@/data/appIcons";
import CodeBlockCustom from "@/components/codeBlock/CodeBlockCustom";
import Link from "next/link";
import Image from "next/image";
import { Modal } from "react-bootstrap";

// Define code snippet constants used by CodeBlockCustom to avoid ReferenceErrors
const fetchProductsCode = `// Frontend request example
fetch('https://api.mystore.com/products', {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' }
}).then(r => r.json());`;

const dotnetCorsSetupCode = `// Program.cs (.NET 8)
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin", policy =>
        policy.WithOrigins("https://mystore.com")
              .AllowAnyHeader()
              .AllowAnyMethod());
});`;

const dotnetCorsMiddlewareCode = `// Apply CORS globally
var app = builder.Build();
app.UseCors("AllowSpecificOrigin");`;

const mapWithCorsCode = `// Apply CORS to a specific endpoint
app.MapGet("/products", () => Results.Ok(new [] { "Item1", "Item2" }))
   .RequireCors("AllowSpecificOrigin");`;

const corsAllowOriginHeader = `Access-Control-Allow-Origin: https://mystore.com`;
const corsHeaderExample = `Access-Control-Allow-Origin: https://example.com`;
const corsMethodsHeader = `Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS`;
const corsAllowHeaders = `Access-Control-Allow-Headers: Content-Type, Authorization, X-Custom-Header`;

const dynamicCorsMiddleware = `// Example dynamic CORS (simplified)
app.Use(async (context, next) =>
{
    var origin = context.Request.Headers["Origin"].ToString();
    var allowed = new[] { "https://mystore.com", "https://admin.mystore.com" };
    if (!string.IsNullOrEmpty(origin) && allowed.Contains(origin))
    {
        context.Response.Headers["Access-Control-Allow-Origin"] = origin;
        context.Response.Headers["Vary"] = "Origin";
        context.Response.Headers["Access-Control-Allow-Headers"] = "Content-Type, Authorization";
        context.Response.Headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS";
        context.Response.Headers["Access-Control-Allow-Credentials"] = "true";
    }
    await next();
});`;

const corsSettingsJson = `// appsettings.json
{
  "Cors": {
    "AllowedOrigins": [
      "https://mystore.com",
      "https://admin.mystore.com"
    ]
  }
}`;

const loadCorsFromConfig = `// Program.cs - load from configuration
var allowedOrigins = builder.Configuration.GetSection("Cors:AllowedOrigins").Get<string[]>() ?? Array.Empty<string>();
builder.Services.AddCors(o => o.AddPolicy("AllowSpecificOrigin",
    p => p.WithOrigins(allowedOrigins)
          .AllowAnyHeader()
          .AllowAnyMethod()));`;

const TailwindVsMuiBlog = () => {
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
      <div className="blog-header-image blog-header-cors ">
        <Image
          src={AppIcons.CorsNewcoverImg}
          alt="CORS (Cross-Origin Resource Sharing) in C# and .NET"
          width={1280}
          height={640}
          onClick={() =>
            handleImageClick(
              AppIcons.CorsNewcoverImg,
              "CORS (Cross-Origin Resource Sharing) in C# and .NET"
            )
          }
          style={{ cursor: "pointer", height: "auto" }}
        />
      </div>
      <div className="blog-border">
        <div className="blog-detail1-title">
          <h2>
            <strong>
              The Ultimate Guide to Mastering Performance Optimization in React
            </strong>
          </h2>
          <div className="author-name-date-time">
            <div className="author-name-date-main">
              <div className="author-name">
                <i className="bx bx-user"></i>
                <p>Moltech Solution Inc.</p>
              </div>
              <div className="date-and-time">
                <i className="bx bx-calendar"></i>
                <span>March 6, 2024</span>
              </div>
            </div>
          </div>
        </div>
        <div className="thumbnail-image">
          <div className="short-category">
            <span>Web Development</span>
          </div>
          <div>
            <p>
              CORS, or Cross-Origin Resource Sharing, is a crucial security
              mechanism that enables web applications to request resources from
              a domain other than their own.
            </p>
            <p>
              This blog post will explore the concept of CORS, its importance,
              and the steps to implement it successfully in C# and .NET
              frameworks.
            </p>
            <h3 id="what-is-cors">
              <strong>1. What is CORS (Cross-Origin Resource Sharing)? </strong>
            </h3>
            <p className="blog-detail-pera">
              CORS (Cross-Origin Resource Sharing) is a browser security feature
              that regulates resource sharing between different domains to
              enhance security.{" "}
            </p>

            <ul>
              <li>
                Controls access to web server resources by external domains.
              </li>
              <li>Prevents unauthorized cross-origin requests by default.</li>
              <li>Ensures secure data exchange between trusted origins.</li>
              <li>
                Configurable on servers to allow specific origins or methods.
              </li>
            </ul>
            <h4>
              <strong>Scenario Overview</strong>
            </h4>
            <p>
              If you have a web application hosted on
              <Link className="blog-links" href="#introduction">
                http://frontend-app.com
              </Link>
              that needs to fetch data from a REST API hosted on
              <Link className="blog-links" href="#introduction">
                http://api.backend-server.com
              </Link>
              , then you’re dealing with different origins (different domains).
              The browser enforces the Same-Origin Policy, which blocks requests
              made from one origin to another unless explicitly allowed by the
              server.
            </p>
            <p>
              Let’s see an example of a shopping website fetching product data.
            </p>
            <p>
              You visit{" "}
              <span className="package-name">https://mystore.com</span>, an
              online shopping website. The website’s frontend needs to fetch
              product details, pricing, and inventory from its backend API
              hosted at
              <span className="package-name">https://api.mystore.com</span>.
              Since the frontend and backend are on different origins (different
              subdomains), the browser enforces the Same-Origin Policy and
              blocks the request unless CORS is properly configured.
            </p>
            <h4>
              <strong>1. The Frontend Makes a Request</strong>
            </h4>
            <p>
              When you browse the product page on{" "}
              <span className="package-name">https://mystore.com</span>, the
              frontend sends a request to the backend API to fetch product data:
            </p>

            <CodeBlockCustom code={fetchProductsCode} language="csharp" />

            <h4 id="same-origin-policy-check">
              <strong>2. Same-Origin Policy Check</strong>
            </h4>
            <p>
              The browser checks the <strong>origin </strong> of the request:
            </p>
            <ul>
              <ul>
                <li>
                  <strong>Frontend Origin:</strong>
                  <span className="package-name">https://mystore.com</span>
                </li>
                <li>
                  <strong>Backend API Origin:</strong>
                  <span className="package-name">https://api.mystore.com</span>
                </li>
              </ul>
            </ul>
            <p>
              Since these origins are different, the browser enforces the
              Same-Origin Policy and blocks the request, returning a CORS error
              like this:
            </p>
            <CodeBlockCustom
              code={`Access to fetch at 'https://api.mystore.com/products' from origin 'https://mystore.com' has been blocked by CORS policy.`}
              language="csharp"
            />
          </div>
          <div>
            <h3 id="enable-cors-dotnet-8">
              <strong>How to Enable CORS in .NET 8.0</strong>
            </h3>
            <p>
              The scenario described can be addressed using the following
              example in .NET Core 8.0.
            </p>
            <h4>
              <strong>1. Add CORS Middleware</strong>
            </h4>
            <p>
              Make sure the{" "}
              <span className="package-name">Microsoft.AspNetCore.</span> Cors
              package is installed (usually included by default in ASP.NET Core)
            </p>
            <CodeBlockCustom
              code={"dotnet add package Microsoft.AspNetCore.Cors"}
              language="csharp"
            />
            <h5>
              <strong> Step 1: Add CORS Services </strong>
            </h5>
            <p>
              Add the CORS policy to allow requests from your frontend origin.
            </p>
            <p>
              You can configure CORS by calling AddCors in the builder.Services
              section of your Program.cs file:
            </p>
            <CodeBlockCustom
              code={"dotnet add package Microsoft.AspNetCore.Cors"}
              language="csharp"
            />
            <CodeBlockCustom code={dotnetCorsSetupCode} language="csharp" />

            <p>
              <strong>&quot;AllowSpecificOrigin&quot;</strong> is a policy name
              that can be used in middleware in the subsequent step.
            </p>

            <h5>
              <strong>Step 2: Apply the CORS Policy</strong>
            </h5>

            <p>
              Use the CORS middleware to apply the policy. This configuration
              can be applied globally across the entire application or tailored
              to specific endpoints.
            </p>

            <h6>
              <strong>Global Application</strong>
            </h6>

            <CodeBlockCustom
              code={dotnetCorsMiddlewareCode}
              language="csharp"
            />

            <h6>
              <strong>Per Endpoint</strong>
            </h6>
            <p>
              We can also Apply the CORS policy to specific controllers or
              endpoints:
            </p>
            <CodeBlockCustom code={mapWithCorsCode} language="csharp" />

            <h5>
              <strong>Step 3: Test the CORS Configuration</strong>
            </h5>
            <p>
              You can test the CORS headers using browser developer tools. Make
              sure the <br></br>
              <span className="package-name">
                Access-Control-Allow-Origin
              </span>{" "}
              header is present in the server&apos;s response.
            </p>
            <ul>
              <li>
                Ensure your API server includes the appropriate CORS headers in
                its responses when requests come from allowed origins like (
                <span className="package-name">https://mystore.com </span> in
                this example).{" "}
              </li>
              <li>
                Use your browser&apos;s developer tools (typically the Network
                tab) to inspect the API response and confirm that it includes
                the necessary headers such as{" "}
              </li>
            </ul>
            <CodeBlockCustom code={corsAllowOriginHeader} language="http" />
          </div>
          <span className="value">
            Access-Control-Allow-Origin: https://mystore.com
          </span>
          <h3 id="key-cors-headers">
            <strong>Key CORS Headers</strong>
          </h3>
          <p className="blog-description">
            Cross-Origin Resource Sharing (CORS) utilizes certain HTTP headers
            to decide if a browser should permit requests from different
            origins. These headers are crucial for securing cross-origin
            requests and adhering to the rules set by the server.
          </p>
          <p>
            1. <strong>Access-Control-Allow-Origin</strong>: Defines the origins
            that are allowed to access the resource.
          </p>
          <CodeBlockCustom code={corsHeaderExample} language="http" />
          <ul>
            <li>
              <p>
                {" "}
                A missing or incorrect header results in the browser blocking
                the request.
              </p>
            </li>
            <li>
              <p>
                {" "}
                Restricts access to trusted origins, preventing unauthorized
                cross-origin requests.
              </p>
            </li>
          </ul>
          <p>
            2. <strong>Access-Control-Allow-Methods</strong> : The HTTP methods
            permitted for cross-origin requests include GET, POST, and HEAD.
          </p>
          <CodeBlockCustom code={corsMethodsHeader} language="http" />
          <ul>
            <li>
              <p>
                Make sure that the client is only able to carry out actions that
                are allowed on the resource.
              </p>
            </li>
          </ul>
          <p>
            3. <strong>Access-Control-Allow-Headers</strong> : Defines the HTTP
            headers that may be utilized within a request.
          </p>
          <CodeBlockCustom code={corsAllowHeaders} language="http" />
          <ul>
            <li>
              This enables the client to incorporate custom or restricted
              headers such as Authorization or X-Custom-Header.
            </li>
          </ul>
          <p>
            4 . <strong> Access-Control-Expose-Headers</strong> : Response
            header specifies which headers are accessible to the browser in the
            response to a cross-origin request.
          </p>
          <ul>
            <li>
              <p>
                By default, browsers limit access to sensitive headers such as
                ‘Content-Length’ or custom headers.
              </p>
            </li>
            <li>
              <p>
                This header allows clients to read specified headers, enhancing
                data access control.
              </p>
            </li>
          </ul>
          <p>
            5. <strong>Access-Control-Max-Age</strong> : The duration for which
            a browser can cache the results of a preflight request is specified
            by the `Access-Control-Max-Age` header. This value is set in seconds
            and dictates how long the preflight response is valid before a new
            preflight request must be made.
          </p>
          <CodeBlockCustom
            code={`Access-Control-Max-Age: 3600`}
            language="http"
          />
          <ul>
            <li>
              <p>
                Minimizing repetitive preflight requests enhances performance.
              </p>
            </li>
          </ul>
          <p>
            6.<strong> Access-Control-Allow-Credentials</strong>: Indicates
            whether cookies or credentials can be sent in cross-origin requests.
          </p>
          <CodeBlockCustom
            code={`Access-Control-Allow-Credentials: true`}
            language="http"
          />
          <p>
            The Access-Control-Allow-Credentials header is crucial for enabling
            credentials like cookies, authorization headers, or TLS client
            certificates in cross-origin requests. It needs to be set to ‘true’
            to activate this feature.
          </p>
          <p>
            <strong>Tight Coupling with</strong>{" "}
            <span className="package-name">
              {" "}
              Access-Control-Allow-Origin, Access-Control-Allow-Credentials:
              true
            </span>{" "}
            <strong> cannot</strong> be used with a wildcard{" "}
            <span className="package-name"> (*) </span> in the{" "}
            <span className="package-name">Access-Control-Allow-Origin</span>{" "}
            header.
          </p>
          <p>
            If misconfigured, credentials might be exposed to unauthorized
            origins, leading to security vulnerabilities like session hijacking
            or cross-site scripting (XSS).
          </p>
          <h3 id="benefits-of-cors">
            <strong>Benefits of Using CORS</strong>
          </h3>
          <p>
            CORS is used to overcome the same-origin policy enforced by web
            browsers, which restricts web pages from making requests to a domain
            other than the one that served the web page. Here’s why CORS is
            essential:
          </p>
          <ol>
            <li>
              <ul>
                <li>
                  <strong>API Security:</strong>
                </li>
                <li>
                  Browsers enforce the Same-Origin Policy to prevent websites
                  from accessing resources on another domain unless explicitly
                  allowed.
                </li>
                <li>
                  This protects users from malicious websites trying to access
                  sensitive data from other origins (like cookies or APIs)
                  (cross-origin attacks)
                </li>
              </ul>
            </li>
            <li>
              <strong> Cross-Origin Requests in Modern Applications</strong>
              <ul>
                <li>
                  Many web applications involve cross-origin communication
                </li>
                <li>
                  A frontend hosted at
                  <span className="package-name">https://example.com</span>
                  fetching data from an API at
                  <span className="package-name">https://api.example.com.</span>
                </li>
                <li>
                  Third-party integrations like Google Maps, payment gateways,
                  or external APIs.
                </li>
                <li>
                  Without CORS, such requests would be blocked by the browser.
                </li>
              </ul>
            </li>
            <li>
              <strong>Controlled Resource Sharing OR Flexibility</strong> CORS
              allows fine-grained control over shared resources:
              <ul>
                <li>Define allowed origins, methods, and headers.</li>
                <li>
                  Specify how long responses can be cached
                  (Access-Control-Max-Age).
                </li>
                <li>
                  Enable specific use cases like credentials sharing
                  (Access-Control-Allow-Credentials).
                </li>
              </ul>
            </li>
            <li>
              <strong> Compliance with Browser Security Policies:</strong>
              <ul>
                <li>
                  Browsers enforce same-origin policies for a reason, and CORS
                  helps maintain security while allowing legitimate cross-origin
                  communication.
                </li>
              </ul>
            </li>
          </ol>
          <h3 id="when-to-use-cors">
            <strong>When Should We Use CORS?</strong>
          </h3>
          <p> CORS should be enabled in scenarios such as: </p>

          <ol>
            <li>
              <strong>
                Frontend-Backend Hosted on Different Domains or SPA
              </strong>{" "}
            </li>
            <ul>
              <li>
                For APIs or services hosted externally, such as payment gateways
                or cloud APIs.
              </li>
            </ul>
            <li>
              <strong>Third-Party Integrations:</strong>{" "}
            </li>
            <ul>
              <li>
                For APIs or services hosted externally, such as payment gateways
                or cloud APIs.
              </li>
            </ul>

            <li>
              <strong> Cross-Origin API Calls</strong>{" "}
            </li>
            <ul>
              <li>To fetch or send data to a server on a different domain.</li>
            </ul>

            <li>
              <strong> Microservices Architecture:</strong>{" "}
            </li>
            <ul>
              <li>
                A microservices-based system where services are deployed on
                different subdomains or hosts (e.g.,{" "}
                <span className="package-name">auth.example.com</span>,{" "}
                <span className="package-name">data.example.com</span>
                ).
              </li>
            </ul>
          </ol>
          <p>There are many examples with different architectures.</p>
          <h3 id="cors-best-practices">
            <strong>Best Practices for Configuring CORS</strong>
          </h3>
          <ol>
            <li>
              <strong>Avoid Using </strong>
              <span className="package-name">
                Access-Control-Allow-Origin: *
              </span>

              <ul>
                <li>
                  Allowing all origins (<span className="package-name">*</span>)
                  is insecure, especially for APIs that deal with sensitive data
                  or require authentication.{" "}
                </li>
                <li>
                  Dynamically set the Access-Control-Allow-Origin header based
                  on the Origin header in the request.
                </li>
              </ul>
            </li>

            <li>
              <strong>Use Whitelisted Domains</strong>

              <ul>
                <li>
                  Restricting CORS to known, trusted domains minimizes the risk
                  of unauthorized access.
                </li>
              </ul>
            </li>

            <li>
              <strong>
                Enable{" "}
                <span className="package-name">
                  Access-Control-Allow-Credentials{" "}
                </span>
                Only When Necessary
              </strong>
              Access-Control-Allow-Origin: *
              <ul>
                <li>
                  Allowing credentials (e.g., cookies, authorization headers)
                  introduces security risks if origins are not tightly
                  controlled.
                </li>
                <li>
                  Combine it with an explicit Access-Control-Allow-Origin
                  (wildcards are not allowed with credentials).
                </li>
              </ul>
            </li>

            <li>
              <strong>
                Leverage{" "}
                <span className="package-name">Access-Control-Max-Age</span>
                for Preflight Caching
              </strong>

              <ul>
                <li>
                  Preflight requests (OPTIONS) can introduce latency to API
                  calls. Utilize the Access-Control-Max-Age header to cache
                  preflight responses for an appropriate period, such as 3600
                  seconds, which is equivalent to one hour.
                </li>
              </ul>
            </li>

            <li>
              <strong>
                {" "}
                . Match the
                <span className="package-name">Origin</span>
                Header Dynamically
              </strong>

              <ul>
                <li>
                  A static Access-Control-Allow-Origin header may be unsuitable
                  for APIs that serve multiple domains. Instead, dynamically
                  match the incoming Origin header and set it accordingly in the
                  response.
                </li>
              </ul>
            </li>
            <CodeBlockCustom code={dynamicCorsMiddleware} language="csharp" />

            <p>
              You can configure “AllowedOrigins” within the appsettings.json
              file. as below example.
            </p>
            <CodeBlockCustom code={corsSettingsJson} language="csharp" />

            <p>
              Add a section in your appsettings.json to define the allowed
              origins and other CORS settings. Now, load the CORS settings from
              appsettings.json in Program.cs
            </p>
            <CodeBlockCustom code={loadCorsFromConfig} language="csharp" />

            <p>
              The approach mentioned offers benefits such as centralized
              configuration and environment-specific configurations.
            </p>
            <li>
              <strong>
                . Protect Against CSRF (Cross-Site Request Forgery)
              </strong>
            </li>
            <ul>
              <li>
                CORS does not prevent CSRF attacks, particularly when
                credentials are involved. Employ CSRF tokens and validate
                requests server-side. Make sure cookies are marked with
                SameSite=strict or SameSite=lax.
              </li>
            </ul>

            <li>
              <strong>
                . Provide Clear Error Messages for Blocked Requests
              </strong>
            </li>
            <ul>
              <li>
                Debugging CORS issues can pose a challenge for developers. It’s
                beneficial to log CORS errors on the server and offer meaningful
                messages to clients when their requests are blocked
              </li>
            </ul>
          </ol>
          <h3 id="conclusion" className="mt-0">
            <strong>Conclusion</strong>
          </h3>
          <p>
            CORS plays a crucial role in today’s web development, facilitating
            secure interactions across various domains, which is particularly
            vital for APIs and handling cross-origin requests. By incorporating
            CORS into .NET, developers can guarantee smooth communication for
            Single Page Applications, external integrations, and backend
            services.
          </p>
        </div>
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
export default TailwindVsMuiBlog;
