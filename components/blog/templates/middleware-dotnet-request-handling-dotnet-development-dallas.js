"use client";
import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { AppIcons } from "@/data/appIcons";
import { Icon } from "@iconify/react";
import CodeBlockCustom from "@/components/codeBlock/CodeBlockCustom";
import Image from "next/image";
import Link from "next/link";

// code block data
const startupPipelineCode = `public class Startup  
{  
    public void Configure(IApplicationBuilder app)  
    {  
        // Logging Middleware  
        app.Use(async (context, next) =>  
        {  
            Console.WriteLine("Handling request: " + context.Request.Path);  
            await next.Invoke();  
            Console.WriteLine("Finished handling request.");  
        });  

        // Static Files Middleware  
        app.UseStaticFiles();  

        // Routing Middleware  
        app.UseRouting();  

        // Authentication Middleware  
        app.UseAuthentication();  

        // Endpoints Middleware  
        app.UseEndpoints(endpoints =>  
        {  
            endpoints.MapControllers();  
        });  
    }  
}`;
const customLoggingMiddlewareCode = `public class CustomLoggingMiddleware {
  private readonly RequestDelegate _next;

  public CustomLoggingMiddleware(RequestDelegate next) {
    _next = next;
  }

  public async Task InvokeAsync(HttpContext context) {
    Console.WriteLine($"Request: {context.Request.Method} {context.Request.Path}");
    await _next(context);
    Console.WriteLine($"Response: {context.Response.StatusCode}");
  }
}`;

const customLoggingMiddlewareExtensionCode = `// Extension method for easy addition to pipeline
public static class CustomLoggingMiddlewareExtensions {
  public static IApplicationBuilder UseCustomLogging(this IApplicationBuilder builder)
  {
    return builder.UseMiddleware<CustomLoggingMiddleware>();
  }
}`;

const useCustomLoggingCode = `// Use in Program.cs
app.UseCustomLogging();`;
const useMiddlewareDirectlyCode = `app.UseMiddleware<CustomLoggingMiddleware>();`;
const swaggerMiddlewareCode = `app.UseSwagger();
app.UseSwaggerUI();`;

const middlewareList = [
  {
    title: "Routing",
    description: "Manages request routing in the application.",
    usage: "app.UseRouting();",
  },
  {
    title: "Authentication",
    description: "Handles user authentication.",
    usage: "app.UseAuthentication();",
  },
  {
    title: "Authorization",
    description: "Handles user access control.",
    usage: "app.UseAuthorization();",
  },
  {
    title: "Exception Handling",
    description: "Captures and processes unhandled exceptions.",
    usage: `app.UseExceptionHandler();
app.UseStatusCodePages();`,
  },
  {
    title: "Static File",
    description:
      "Serves static files (CSS, JS, images) from the wwwroot folder.",
    usage: "app.UseStaticFiles();",
  },
  {
    title: "CORS",
    description: "Enables or restricts cross-origin HTTP requests.",
    usage: 'app.UseCors("AllowAllOrigins");',
  },
  {
    title: "Response Caching",
    description: "Improves performance by caching responses.",
    usage: "app.UseResponseCaching();",
  },
  {
    title: "Logging",
    description: "Captures and logs request and response details.",
    usage: "app.UseSerilogRequestLogging();",
  },
  {
    title: "Compression",
    description: "Compresses response data to reduce bandwidth usage.",
    usage: "app.UseResponseCompression();",
  },
];
const hangfireDashboardCode = `app.UseHangfireDashboard();`;

const authPipelineCode = `app.UseAuthentication(); // Must be before Authorization
app.UseAuthorization();
app.UseEndpoints(endpoints => { endpoints.MapControllers(); });`;
const tryCatchMiddlewareCode = `try
{
  await _next(context);
}
catch (Exception ex)
{
  Console.WriteLine($"Error: {ex.Message}");
}`;
const loggingMiddlewareCode = `public class LoggingMiddleware
{
  private readonly RequestDelegate _next;
  private readonly ILogger<LoggingMiddleware> _logger;

  public LoggingMiddleware(RequestDelegate next, ILogger<LoggingMiddleware> logger)
  {
    _next = next;
    _logger = logger;
  }

  public async Task InvokeAsync(HttpContext context)
  {
    _logger.LogInformation($"Request Path: {context.Request.Path}");
    await _next(context);
  }
}`;

const registerLoggingMiddlewareCode = `var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseMiddleware<LoggingMiddleware>(); // Registers middleware

app.Run();`;
const mapWhenMiddlewareCode = `app.MapWhen(context => context.Request.Path.StartsWithSegments("/api"), appBuilder =>
{
  appBuilder.UseMiddleware<ApiSpecificMiddleware>();
});`;
const authorizationMiddlewareCode = `public class AuthorizationMiddleware
{
  private readonly RequestDelegate _next;

  public AuthorizationMiddleware(RequestDelegate next)
  {
    _next = next;
  }

  public async Task InvokeAsync(HttpContext context)
  {
    if (!context.User.Identity.IsAuthenticated)
    {
      context.Response.StatusCode = 401; // Unauthorized
      await context.Response.WriteAsync("Access Denied");
      return; // Short-circuits the pipeline
    }

    await _next(context);
  }
}`;
const conditionalLoggingMiddlewareCode = `var enableLogging = true;

app.Use(async (context, next) =>
{
  if (enableLogging)
  {
    Console.WriteLine($\"Request: {context.Request.Method} {context.Request.Path}\");
  }
  await next();
});`;

const securityHeadersMiddlewareCode = `app.Use(async (context, next) =>
{
  await next();
  context.Response.Headers.Add("X-Frame-Options", "DENY");
  context.Response.Headers.Add("X-Content-Type-Options", "nosniff");
});`;
const devExceptionPageCode = `if (app.Environment.IsDevelopment())
{
  app.UseDeveloperExceptionPage();
}`;
const diagnosticMiddlewareCode = `app.UseMiddleware<DiagnosticMiddleware>();`;

const MiddlewareDotnetRequestHandlingDotnetDevelopmentDallas = ({
  scriptExample = "",
  faqData = {},
}) => {
  const [showModal, setShowModal] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const [modalImageAlt, setModalImageAlt] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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
        <div className="blog-header-img">
          <Image
            src={AppIcons.MiddlewareCoverImg}
            alt="Middleware Cover Image"
            loading="lazy"
            width={1280}
            height={640}
            style={{ height: "auto", cursor: "pointer" }}
            onClick={() =>
              handleImageClick(
                AppIcons.MiddlewareCoverImg,
                "Middleware Cover Image"
              )
            }
          />
        </div>

        <p className="mt-3" id="introduction">
          <strong>Middleware</strong> is a crucial component of web development
          in <strong>.NET Core</strong>, managing how HTTP requests and
          responses are processed. It consists of software components in the{" "}
          <strong>ASP.NET Core request pipeline</strong> that handle various
          aspects of the request/response lifecycle, such as:
        </p>

        <ul>
          <li>
              Execute specific functionalities such as logging, authentication,
              or routing.
            </li>
          <li>Pass requests to the next middleware in the pipeline.</li>
          <li>Terminate requests by sending responses directly.</li>
        </ul>

        <p>
          This modular approach enhances <strong>flexibility</strong>,{" "}
          <strong>maintainability</strong>, and <strong>reusability</strong>,
          making middleware a powerful tool in modern application design.
        </p>

        <p>
          In this blog, we’ll explore how to use middleware in .NET, when and
          where it should be used, key considerations, and best case studies to
          help you implement it effectively.
        </p>
        <h3 id="how-to-use-middleware">
          <strong>How to use Middleware in .NET Core?</strong>
        </h3>

        <p>
          Middleware functions as a series of components within the{" "}
          <strong>ASP.NET Core request pipeline</strong>. Requests traverse this
          pipeline, with each middleware component processing sequentially. It
          is executed in the order they are registered.
        </p>

        <h4>
          <strong>Request Pipeline Overview:</strong>
        </h4>

        <ul>
          <li>The request enters the middleware pipeline.</li>
          <li>
              Each middleware component performs its task and decides whether to
              pass the request further down the pipeline or terminate it.
            </li>
          <li>
              If all middleware passes the request, the final component
              generates a response.
            </li>
        </ul>

        <p>
          This flow ensures a controlled and organized approach to request and
          response handling.
        </p>
        <div className="blog-header-image  mt-0">
          {" "}
          <Image
            src={AppIcons.MiddlewareImgOne}
            alt="Middleware Image"
            loading="lazy"
            width={1280}
            height={640}
            style={{ height: "auto", cursor: "pointer" }}
            onClick={() =>
              handleImageClick(AppIcons.MiddlewareImgOne, "middleware diagram")
            }
          />
        </div>

        <p>
          A request pipeline can consist of <strong>built-in middleware</strong>
          , <strong>third-party middleware</strong>, or{" "}
          <strong>custom middleware</strong> such as logging middleware and
          exception middleware.
        </p>

        <h4 id="type-of-middleware">
          <strong>Type of Middleware:</strong>
        </h4>

        <p>
          Middleware in ASP.NET Core is categorized based on its functionality
          and purpose. Below are the key types:
        </p>

        <ul>
          <li>
              <strong>Built-in Middleware</strong>
            </li>
          <li>
              <strong>Custom Middleware</strong>
            </li>
          <li>
              <strong>Third-Party Middleware</strong>
            </li>
        </ul>

        <p>
          Understanding middleware types helps in designing efficient and secure
          ASP.NET Core applications.
        </p>

        <h4>
          <strong>Implementing Middleware in ASP.NET Core</strong>
        </h4>

        <p>
          Middleware is configured in the <strong>Program.cs</strong> file,
          particularly within the <strong>Configure</strong> method. We can add
          middleware based on the type.
        </p>

        <h5>
          <strong>Built-in Middleware:</strong>
        </h5>

        <p>
          ASP.NET Core provides several predefined middleware components for
          common tasks.
        </p>
        <p>You can find list of predefined middleware below:</p>
        

        <div className="middleware-grid">
                    {middlewareList.map(
                      ({ title, description, usage }, index) => (
                        <div className="grid-card" key={index}>
                          <p className="title-text">
                            {" "}
                            <strong>{title}</strong>
                          </p>
                          <p className="description">{description}</p>
                          <div className="usage">
                            {usage.split("\n").map((line, idx) => (
                              <React.Fragment key={idx}>
                                {line}
                                <br />
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      )
                    )}
                  </div> 
        <p>Here’s a basic example:</p>
        <CodeBlockCustom code={startupPipelineCode} language="csharp" />

        <h5>
          <strong>Custom Middleware:</strong>
        </h5>

        <p>
          Developers can create their own middleware to handle specific
          application requirements.
        </p>

        <p>
          Sometimes, built-in middleware won’t meet all your needs, and you’ll
          need to create custom middleware.
        </p>

        <p>Here’s how to write simple middleware to log requests:</p>

        <h6>
          <strong>Step 1:</strong> Create middleware
        </h6>
        <CodeBlockCustom code={customLoggingMiddlewareCode} language="csharp" />

        <h6>
          <strong>Step 2:</strong> Register the middleware as below
        </h6>
        <CodeBlockCustom
          code={customLoggingMiddlewareExtensionCode}
          language="csharp"
        />

        <h6>
          <strong>Step 3:</strong> To use this middleware, simply add it to the
          pipeline in <strong>Startup.cs</strong>:
        </h6>
        <CodeBlockCustom code={useCustomLoggingCode} language="csharp" />

        <p>
          If you prefer not to register <strong>(Step 2)</strong>, you can
          directly add the following in the <strong>Program.cs</strong> file:
        </p>
        <CodeBlockCustom code={useMiddlewareDirectlyCode} language="csharp" />

        <h6>
          <strong>Third-Party Middleware</strong>
        </h6>

        <p>
          Many third-party libraries offer additional middleware for logging,
          security, and monitoring. For example:
        </p>

        <ul>
          <li>
              <strong>Swagger Middleware</strong> (API Documentation)
            </li>
        </ul>

        <CodeBlockCustom code={swaggerMiddlewareCode} language="csharp" />

        <ul>
          <li>
              <strong>Hangfire Middleware</strong> (Background Jobs)
            </li>
        </ul>

        <CodeBlockCustom code={hangfireDashboardCode} language="csharp" />

        <h3 id="why-middleware-is-crucial">
          <strong>Why Middleware is Crucial in .NET Core Development?</strong>
        </h3>

        <p>
          Middleware is essential for creating robust web applications, and
          here’s why:
        </p>

        <ol>
          <li>
              <strong>Modularity:</strong> Middleware decouples cross-cutting
              concerns like logging, error handling, and security from
              application logic. This separation makes the codebase cleaner and
              easier to maintain.
            </li>
          <li>
              <strong>Efficiency:</strong> It allows efficient handling of
              requests, reducing latency and improving user experience.
              Middleware optimizes resource utilization by processing only
              necessary requests.
            </li>
          <li>
              <strong>Customization:</strong> Developers can tailor middleware
              to address specific needs, offering greater control over request
              processing. Custom middleware can be used for specialized tasks
              such as request throttling, data validation, or content filtering.
            </li>
          <li>
              <strong>Scalability:</strong> Middleware pipelines can be easily
              extended or modified as applications grow, supporting future
              enhancements. Load balancers, caching, and compression middleware
              can be added to scale the application efficiently.
            </li>
          <li>
              <strong>Security:</strong> Middleware helps enforce security
              policies such as authentication, authorization, and data
              encryption. Components like CORS Middleware and Anti-Forgery
              Middleware protect against common security threats.
            </li>
          <li>
              <strong>SEO &amp; User Experience Enhancement:</strong> Middleware
              can be used for URL rewriting and redirection to ensure proper
              SEO-friendly URLs. It helps manage HTTP status codes, ensuring
              proper indexing by search engines.
            </li>
        </ol>
        <h3 id="things-to-consider">
          <strong>Things to Consider While Using Middleware</strong>
        </h3>

        <p>
          Middleware is powerful but should be used carefully to avoid common
          pitfalls:
        </p>

        <ul>
          <li>
              <strong>Order Matters:</strong> Middleware executes in a pipeline,
              so the order of registration is important. Example:
            
            <CodeBlockCustom code={authPipelineCode} language="csharp" />

            <p>
              If{" "}
              <code>
                <strong>UseAuthorization()</strong>
              </code>{" "}
              comes before{" "}
              <code>
                <strong>UseAuthentication()</strong>
              </code>
              , authorization will fail.
              </p>
            </li>

          <li>
              <strong>Asynchronous Execution:</strong> Always use{" "}
              <code>
                <strong>await _next(context);</strong>
              </code>{" "}
              in custom middleware to ensure the next middleware in the pipeline
              gets executed.
            </li>

          <li>
              <strong>Exception Handling:</strong> Avoid throwing unhandled
              exceptions in middleware; instead, log and handle them properly.
            
            <CodeBlockCustom code={tryCatchMiddlewareCode} language="csharp" />
          </li>

          <li>
              <strong>Avoid Blocking Calls:</strong> Middleware runs on the
              request pipeline; blocking operations can degrade performance. Use{" "}
              <code>
                <strong>async</strong>
              </code>{" "}
              methods wherever possible.
            </li>

          <li>
              <strong>Use Minimal Middleware:</strong> Keep middleware focused
              on a single responsibility. Instead of a large middleware that
              does multiple tasks, break it into smaller middleware components.
            </li>

          <li>
              <strong>Leverage Built-In Components:</strong> Use built-in
              middleware for common tasks whenever possible to save development
              time and ensure best practices.
            </li>
        </ul>

        <h3 id="common-use-cases">
          <strong>
            Common Use Cases of Middleware in .NET Core Applications
          </strong>
        </h3>

        <p>
          Middleware finds its place in nearly every aspect of an ASP.NET Core
          web application:
        </p>

        <ul>
          <li>
              <strong>Authentication and Authorization:</strong> Verifying user
              credentials and permissions.
            </li>
          <li>
              <strong>Error Handling:</strong> Managing exceptions and
              delivering meaningful error messages.
            </li>
          <li>
              <strong>Request Logging:</strong> Tracking HTTP request details
              for debugging and analytics.
            </li>
          <li>
              <strong>Static File Serving:</strong> Serving files like images,
              CSS, and JavaScript.
            </li>
          <li>
              <strong>Custom Features:</strong> Implementing
              application-specific behaviors, such as request throttling or
              localization.
            </li>
        </ul>

        <h3 id="advanced-middleware-concepts">
          <strong>Advanced Middleware Concepts</strong>
        </h3>

        <h4>
          <strong>Dependency Injection in Middleware</strong>
        </h4>

        <p>
          Investigate how components can rely on services registered in the
          Dependency Injection (DI) container. Provide examples of injecting
          such as logging, configuration, or data access into middleware.
        </p>

        <CodeBlockCustom code={loggingMiddlewareCode} language="csharp" />

        <h5>
          <strong>Registering Middleware with DI</strong>
        </h5>
        <CodeBlockCustom
          code={registerLoggingMiddlewareCode}
          language="csharp"
        />

        <h5>
          <strong>Conditional Middleware Execution</strong>
        </h5>

        <p>
          Developers can configure middleware to execute conditionally based on
          request properties, such as HTTP methods, headers, or paths.
        </p>

        <h5>
          <strong>Example: </strong>Using <code>MapWhen</code> to create
          conditional middleware:
        </h5>

        <CodeBlockCustom code={mapWhenMiddlewareCode} language="csharp" />

        <h5>
          <strong>Short-Circuiting Middleware</strong>
        </h5>

        <p>
          Middleware components are executed in a pipeline. If a middleware does
          not call{" "}
          <code>
            <strong>await _next(context)</strong>
          </code>
          , it short-circuits the pipeline, preventing the request from reaching
          the next middleware or endpoint.
        </p>
        <CodeBlockCustom code={authorizationMiddlewareCode} language="csharp" />

        <h5>
          <strong>Dynamic Middleware Execution</strong>
        </h5>

        <p>
          Sometimes middleware should be enabled or disabled dynamically based
          on settings. Use feature flags to enable or disable middleware
          dynamically. Helps in performance tuning and A/B testing.
        </p>

        <CodeBlockCustom
          code={conditionalLoggingMiddlewareCode}
          language="csharp"
        />

        <p>
          Use feature flags to enable or disable middleware dynamically. Helps
          in performance tuning and A/B testing.
        </p>
        <h5>
          <strong>Using Middleware to Modify Responses</strong>
        </h5>
        <p>Middleware can modify responses, such as adding custom headers.</p>

        <CodeBlockCustom
          code={securityHeadersMiddlewareCode}
          language="csharp"
        />

        <p>
          <strong>Modify headers to enhance security.</strong> Ensure response
          modifications are done <em>after</em> <code>await next()</code>.
        </p>
        <h3 id="middleware-debugging">
          <strong>Effective Middleware Debugging and Diagnostics</strong>
        </h3>
        <p>
          Debugging middleware in ASP.NET Core is essential for identifying and
          resolving issues in the request pipeline. Since middleware executes
          sequentially, any misconfiguration or failure can affect the entire
          application. Here’s how you can effectively debug and diagnose
          middleware issues:
        </p>
        <ul>
          <li>
              <strong>Enable Developer Exception Page:</strong> To capture
              detailed error messages during development, use:
            
            <CodeBlockCustom code={devExceptionPageCode} language="csharp" />
          </li>

          <li>
              <strong>Debug with ASP.NET Core Middleware Analyzers:</strong> Use
              built-in middleware diagnostics tools to detect issues in
              <code> Microsoft.AspNetCore.Diagnostics</code>.
            
            <CodeBlockCustom
              code={diagnosticMiddlewareCode}
              language="csharp"
            />
          </li>
        </ul>

        <h3 id="middleware-best-practices">
          <strong>Best Practices for Middleware Design</strong>
        </h3>

        <ul>
          <li>
              <strong>Follow SRP (Single Responsibility Principle):</strong>{" "}
              Keep middleware focused on one task.
            </li>
          <li>
              <strong>Chain middleware correctly:</strong> Order affects
              behavior; place authentication before authorization.
            </li>
          <li>
              <strong>Use built-in middleware when possible:</strong> Avoid
              reinventing common features.
            </li>
          <li>
              <strong>Handle exceptions properly:</strong> Use centralized
              error-handling middleware.
            </li>
          <li>
              <strong>Optimize for performance:</strong> Avoid unnecessary
              computations in the pipeline.
            </li>
          <li>
              <strong>Use feature toggles:</strong> Enable or disable middleware
              dynamically.
            </li>
          <li>
              <strong>Use dependency injection wisely:</strong> Avoid injecting
              transient services into singleton middleware.
            </li>
        </ul>

        <h3 id="conclusion">
          <strong>Conclusion</strong>
        </h3>

        <p>
          Middleware in .NET Core is a fundamental concept that allows
          developers to build scalable, maintainable, and secure web
          applications. By understanding its purpose, use cases, and
          implementation, you can create flexible pipelines that handle requests
          and responses efficiently.
        </p>

        <p>
          Start exploring middleware in your .NET Core projects to unlock its
          full potential!
        </p>
       

        {/* blog content ends here */}
      </div>

      {isClient && (
        <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{modalImageAlt}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <Image src={modalImageSrc} alt={modalImageAlt} fluid />
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default MiddlewareDotnetRequestHandlingDotnetDevelopmentDallas;
