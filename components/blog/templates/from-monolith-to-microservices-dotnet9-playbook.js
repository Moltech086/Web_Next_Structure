"use client";

import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Images from "../../image/Image";
import { AppIcons } from "@/data/appIcons";
import Image from "next/image";
import CodeBlockCustom from "@/components/codeBlock/CodeBlockCustom";

const scriptExample = `csharp
var builder = WebApplication.CreateSlimBuilder(args);
builder.Services.AddOpenApi(); // Native support

var app = builder.Build();

app.MapGet("/health", () => Results.Ok("Healthy"))
    .WithName("HealthCheck")
    .WithOpenApi(); // Annotates endpoint

app.Run();
}`;

const scriptExample2 = `dotnet tool ins
tall --global NDepend.Tool
dotnet build-server shutdown && dotnet sln list`;

const scriptExample3 = `
<PublishAot>true</PublishAot>
<PublishTrimmed>true</PublishTrimmed>
<InvariantGlobalization>true</InvariantGlobalization>
`;

const scriptExample4 = `
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest]
`;


const MonolithToMicroservices = () => {
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
      <div
    
        id="main-content"
      >
        <div className="blog-header-image  mt-0">
          <Image
            src={AppIcons.monolithBlog}
            alt="From Monolith to Microservices in .NET 9"
            loading="lazy"
            width={1280}
            height={640}
            style={{ height: "auto", cursor: "pointer" }}
            onClick={() =>
              handleImageClick(AppIcons.monolithBlog, "From Monolith to Microservices in .NET 9")
            }
          />
        </div>

        <h3 id="introduction">
          <strong>Is Your Monolith Slowing You Down?</strong>
        </h3>
        <p>
          Imagine a scenario where your entire application halts every time you
          deploy a new feature. Build times stretch past 40 minutes, blue-green
          deployments take another 20, and one teamFs bug delays everyone else&#39;s
          work. Sound familiar?{" "}
        </p>
        <p>
          If you are a software architect or CTO working with a legacy .NET
          monolith, these &quot;all-or-nothing&quot; deployments aren&apos;t
          just painful&mdash;they&apos;re a growth bottleneck. We are pleased to
          share that .NET 9 effectively addresses key obstacles to&nbsp;
          <strong>modernizing your architecture</strong>. This guide walks you
          through the step-by-step process of transitioning to microservices,
          minimizing risk, and maximizing ROI.
        </p>

        <h3 id="whats-new-dotnet9">
          {" "}
          <strong>What&#39;s New in .NET 9 That Unlocks Microservices</strong>
        </h3>
        <p>
          .NET 9 is not just a version bump—it&#39;s designed to power microservice
          modernization for real-world enterprise workloads:
        </p>

        <h4>
          <strong>Native AOT for Ultra-Small Containers</strong>
        </h4>
        <ul>
          <li>
            Native Ahead-Of-Time (AOT) compilation produces single-file,
            platform-native executables with no runtime dependency. You get
            container images under 50MB and snappy startup times—perfect for
            Kubernetes or Azure Container Apps.
          </li>
          <li>
            Compared to traditional .NET Core, Native AOT eliminates JIT
            compilation latency and trims memory footprints, shrinking cold
            starts to a fraction.
          </li>
        </ul>

        <h4>
          <strong>Dynamic PGO and JIT Tiered Compilation</strong>
        </h4>
        <ul>
          <li>
            .NET 9&#39;s Dynamic Profile-Guided Optimization (PGO) and improved JIT
            tiered compilation can deliver up to 38% better throughput in
            real-world scenarios.
          </li>
          <li>
            JSON serialization is up to 35% faster, LINQ queries are leaner, and
            ASP.NET Core now supports up to 20% more requests/sec with lower
            latency. As one Microsoft engineer put it: “Startup performance
            improved by 23%. The tooling shows very noticeable improvements.”
          </li>
        </ul>

        <h4>
          <strong>Built-in OpenAPI for Minimal APIs</strong>
        </h4>
        <ul>
          <li>
            Now, OpenAPI (Swagger) docs are generated out of the box, even for
            Minimal APIs, enabling immediate client generation, automated tests,
            and improved collaboration.
          </li>
          <li>
            Full compatibility with Native AOT means even “slim” APIs are ready
            for enterprise consumption.
          </li>
        </ul>

        <h4>
          <strong>.NET Aspire 9: Cloud-Native Templates, Fast</strong>
        </h4>
        <ul>
          <li>
            .NET Aspire 9 gives you curated solution/project templates for
            observable, distributed systems. Starter kits wire up health checks,
            telemetry, and key DevOps patterns with no yak-shaving.
          </li>
        </ul>

        <h6>
          <strong>Example:</strong> Minimal API with OpenAPI Annotation (.NET 9)
        </h6>

        <CodeBlockCustom code={scriptExample} language="json" />

        <p>
          <i>
            With just one annotation, your endpoint is discoverable in Swagger
            UI and client tools—integral for distributed microservices.
          </i>
        </p>
        <h3 id="monolith-constraints">
          <strong>Deep Dive: The Technical Constraints of Monoliths</strong>
        </h3>
        <h4>
          <strong>
            Monoliths can be deceptively simple—until your codebase grows or
            teams scale:
          </strong>
        </h4>

        <ul>
          <li>
            <strong>Tight Coupling:</strong> All features share a codebase;
            small changes risk side-effects in distant modules.
          </li>
          <li>
            <strong>Scaling Limits:</strong> You must scale the whole app, even
            if just one part needs more resources.
          </li>
          <li>
            <strong>Slow Test &amp; Build Cycles:</strong> Every PR triggers
            full-suite testing and heavyweight builds (e.g., 40-minute CI,
            20-minute deployments).
          </li>
          <li>
            <strong>One-Team Bottleneck:</strong> Features, bugfixes, or
            rollbacks require collaboration across squads—hampering autonomy.
          </li>
        </ul>

        <h4>
          <strong>CI/CD Sidebox: Common Monolith Symptoms</strong>
        </h4>
        <ul>
          <li>40-minute CI builds for “tiny” changes.</li>
          <li>20-minute blue/green swap latency.</li>
          <li>A single test fail blocks every team.</li>
          <li>Coordinating two-week regression cycles.</li>
        </ul>

        <p>
          These pain points create an environment where innovation stalls,
          technical debt compounds, and “deploy Friday” becomes a nightmare.
        </p>

        <h3 id="migration-blueprint">
          <strong>7 Steps Migration Blueprint: .NET 9 Edition</strong>
        </h3>
        <p>
          Here&#39;s a clear, pragmatic 7-step playbook for turning monolith pain
          into microservices ROI:
        </p>

        <h4>
          <strong>
            1 . Assess & Slice with Domain-Driven Design (DDD)
          </strong>{" "}
        </h4>
        <ul>
          <li>
            Use Visual Studio dependency graphs to map coupling hotspots.
            Identify bounded contexts for extractable services.
          </li>
          <li>
            Use <strong>Domain-Driven Design (DDD)</strong> to find bounded
            contexts.
          </li>
          <li>Tip: to visualize dependencies.</li>
        </ul>
        <CodeBlockCustom code={scriptExample2} language="json" />

        <h4>
          {" "}
          <strong> 2. Set Up Cloud-Native Infrastructure </strong>
        </h4>
        <ul>
          <li>
            Deploy to Kubernetes or Azure Container Apps for managed
            orchestration. Leverage YARP (Yet Another Reverse Proxy) as your API
            gateway for traffic routing.
          </li>
          <li>
            <span className="string">
              CLI Tip: az containerapp create --name my-app --image
              myrepo/app:latest --env-vars ...
            </span>
          </li>
          <li>
            CLI Tip:{" "}
            <code>
              az containerapp create --name my-app --image myrepo/app:latest
              --env-vars ...
            </code>
          </li>
        </ul>
        <h4>
          <strong>3. Extract First Service with Native AOT</strong>
        </h4>
        <ul>
          <li>
            Migrate a low-risk domain (e.g., health check or pricing) to its own
            .NET 9 service. Publish with AOT flags for tiny images.
          </li>
          <li>Build flags</li>
        </ul>

        <CodeBlockCustom code={scriptExample3} language="json" />

        <ul>
          <li>
            CLI Tip{" "}
            <code>
              : dotnet publish -c Release -r linux-x64 -p:PublishAot=true
            </code>
          </li>
          <li>
            Engineering Note: Images &lt; 50MB are common—ensure your pipelines
            exploit this with multi-stage Dockerfiles.
          </li>
        </ul>
        <h4>
          <strong>
            4. Data-Decouple with Database Per Service, SAGA, Outbox{" "}
          </strong>
        </h4>
        <ul>
          <li>
            Establish a <em>database-per-service</em> policy for autonomy and
            scaling.
          </li>
          <li>
            Use SAGA/or Outbox patterns for distributed transactions,
            guaranteeing eventual consistency.
          </li>
          <li>
            <em>Tip:</em> Evaluate Azure SQL for transactional services, Cosmos
            DB or PostgreSQL for event streaming needs.
          </li>
        </ul>

        <h4>
          {" "}
          <strong>
            5. Automate CI/CD: GitHub Actions, Canary Releases
          </strong>{" "}
        </h4>
        <ul>
          <li>Use GitHub Actions matrix builds for environment targeting.</li>
          <li>
            Automate canary rollouts with feature flags and progressive
            exposure.
          </li>
          <li>
            <em>CLI Snippet:</em>
          </li>
        </ul>
        <CodeBlockCustom code={scriptExample4} language="json" />
        <h4>
          {" "}
          <strong>
            6. Observability: OpenTelemetry → Prometheus + Grafana
          </strong>{" "}
        </h4>
        <ul>
          <li>
            Instrument code with OpenTelemetry for distributed tracing and
            metrics.
          </li>
          <li>Export data to Prometheus; visualize and alert in Grafana.</li>
          <li>
            <em>Tip:</em> Enable built-in health endpoints:{" "}
            <code>builder.Services.AddHealthChecks()</code>
          </li>
        </ul>

        <h4>
          {" "}
          <strong>7. Harden: OAuth2/mTLS, Seamless Secret Rotation</strong>{" "}
        </h4>
        <ul>
          <li>Enforce OAuth2 authentication and mTLS between services.</li>
          <li>
            Use Azure Key Vault for secret rotation, keeping your secrets out of
            source control.
          </li>
          <li>
            <em>CLI Tip:</em>{" "}
            <code>
              az keyvault secret set --vault-name &#39;myVault&#39; --name
              &#39;DbPassword&#39; --value &#39;xxxxxx&#39;
            </code>
          </li>
        </ul>
        <h3 id="performance-vs-cost">
          <strong>
            Performance & Cost Benchmarks: Monolith vs. Microservices with .NET
            9F
          </strong>
        </h3>

        <table className="comparison-table">
          <thead>
            <tr>
              <th>Metric</th>
              <th>Monolith (.NET 6)</th>
              <th>Microservices (.NET 9 Native AOT)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Metric">Startup Time</td>
              <td data-label="Monolith (.NET 6)">2.2s</td>
              <td data-label="Microservices (.NET 9 Native AOT)">0.3s</td>
            </tr>
            <tr>
              <td data-label="Metric">Peak RPS</td>
              <td data-label="Monolith (.NET 6)">12,000</td>
              <td data-label="Microservices (.NET 9 Native AOT)">16,500</td>
            </tr>
            <tr>
              <td data-label="Metric">Container RAM</td>
              <td data-label="Monolith (.NET 6)">240MB</td>
              <td data-label="Microservices (.NET 9 Native AOT)">70MB</td>
            </tr>
            <tr>
              <td data-label="Metric">Image Size</td>
              <td data-label="Monolith (.NET 6)">200MB</td>
              <td data-label="Microservices (.NET 9 Native AOT)">&lt;50MB</td>
            </tr>
          </tbody>
        </table>

        <i>
          Based on Microsoft Developer Blog, 2024—.NET 9 unlocks 23-38% faster
          cold starts and over 25% less average latency for web workloads,
          slashing cloud costs and scaling faster.
        </i>
        <h3 id="mini-case-study">
          <strong>Mini Case Study: Logistics Firm Results</strong>
        </h3>
        <ul>
          <li>Deployment time cut: From 18 → 5 minutes per rollout.</li>
          <li>Production incidents: Dropped 42% post-migration.</li>
          <li>
            P99 API latency: Improved by 38% after three domain services
            (routing, orders, billing) moved to containers.
          </li>
          <li>Cloud cost: 15% lower due to lighter images and less RAM.</li>
        </ul>
        <h3 id="moltech-support">
          <strong>How Moltech Solutions Inc. Accelerates Your Journey</strong>
        </h3>

        <h5 className="mt-0">
          <strong>
            {" "}
            Modernizing isn&#39;t just tooling—it&#39;s a transformation. Moltech
            Solutions delivers:
          </strong>
        </h5>

        <ul>
          <li>
            <strong>Assessment Workshops:</strong> We map your architecture,
            identify ROI priorities, and create a phase plan.
          </li>
          <li>
            <strong>Migration Sprints:</strong> Rapid service extraction with
            actionable, low-risk milestones.
          </li>
          <li>
            <strong>24×7 SRE Support:</strong> Uptime, observability, and
            incident response as you evolve.
          </li>
          <li>
            <strong>Downloadable Modernization Checklist:</strong> [Internal
            link]—Audit your readiness and get senior buy-in fast.
          </li>
        </ul>
        <h3 id="conclusion">
          <strong>Conclusion: The Business &amp; Tech Upside</strong>
        </h3>

        <h5 className="mt-0">
          <strong>
            With .NET 9, modernization no longer means risky, open-ended
            projects. You can finally:
          </strong>
        </h5>

        <ul>
          <li>
            Boost release velocity—feature flags, canary rollouts, Friday
            deploys without fear.
          </li>
          <li>
            Cut cloud spend and infrastructure headaches with leaner, faster
            workloads.
          </li>
          <li>
            Unlock developer autonomy; enable every squad to ship, scale, and
            own their services.
          </li>
          <li>
            Gain visibility and resilience with first-class cloud-native
            patterns.
          </li>
        </ul>

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

export default MonolithToMicroservices;
