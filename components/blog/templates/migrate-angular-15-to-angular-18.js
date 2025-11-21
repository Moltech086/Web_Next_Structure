"use client";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { AppIcons } from "@/data/appIcons";
import Image from "next/image";
import ServiceFAQ from "@/components/serviceFAQ/ServiceFAQ";
import { blogConfig } from "@/data/blogs/migrate-angular-15-to-angular-18";
import Link from "next/link";
import Iconify from "@/components/ui/icons/Iconify";
import CodeBlockCustom from "@/components/codeBlock/CodeBlockCustom";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";

// code block data

const MigrateAngular15ToAngular18 = () => {
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
        <div className="blog-header-image mt-0">
          <Image
            src={AppIcons.angularupgrade}
            alt="Angular migration process visualization"
            loading="lazy"
            width={1280}
            height={640}
            style={{ height: "auto" }}
          />
        </div>

        <h3 id="introduction">
          <strong>Migrating Angular 15 to Angular 18 :&nbsp;</strong>
          <span className="sub">Challenges and Best Practices</span>
        </h3>

        <p>
          Migrating Angular 15 to Angular 18 is a critical upgrade for modern
          web applications. This Angular 18 migration guide covers a
          step-by-step plan, commands, pitfalls, and best practices to help you
          upgrade safely and improve performance.
        </p>

        <p>
          A production Angular app throwing intermittent UI refresh bugs the
          week before a big product demo is more than an annoyance — it
          threatens revenue, timelines, and client trust.
        </p>

        <p>
          Organizations that stay two versions behind often face this kind of
          friction: slower builds, harder onboarding for new engineers, and
          increased security and maintenance costs.
        </p>

        <p>
          Recent Angular releases (15 → 16 → 17 → 18) delivered meaningful gains
          in performance, developer ergonomics, and server-side rendering;
          skipping them delays those benefits and compounds technical debt.
        </p>

        <p>
          This post walks technical leads and decision-makers through a
          pragmatic, low-risk path to move from Angular 15 to Angular 18.
          You&apos;ll get:
        </p>

        <ul>
          <li>
            A concise map of key feature changes and why they matter (standalone
            components, typed reactive forms, Zone.js optionality).
          </li>
          <li>Common pitfalls — and how to spot and fix them early.</li>
          <li>
            A step-by-step migration workflow with commands, checklists, and
            CI/CD tips.
          </li>
          <li>
            Before/after code examples, plus a real-world case study showing
            measurable results.
          </li>
          <li>Practical best practices to minimize risk and maximize ROI.</li>
        </ul>

        <h3 id="key-changes">
          <strong>
            Key changes to understand (Angular 16 → 18) :&nbsp;
            <span className="sub">migrate angular 15 to angular 18</span>
          </strong>
        </h3>

        <h4 className="mt-4">
          <b>Tandalone Components and Simplified Bootstrap</b>
        </h4>
        <p>
          Angular 16–18 fully matured the{" "}
          <strong className="highlight">standalone components</strong> feature,
          allowing you to declare components, directives, and pipes without
          wrapping them inside NgModules. This reduces boilerplate and
          simplifies your project structure.
        </p>
        <p>
          The new <strong className="highlight">bootstrapApplication</strong>{" "}
          API also replaces bootstrapModule for a cleaner and faster bootstrap
          process. Start by migrating small, non-critical modules and gradually
          refactor shared and core modules.
        </p>

        <h5>
          <b>Example:</b>
        </h5>
        <h6>
          <b className="highlight">Before (Angular 15):</b>
        </h6>
        <CodeBlockCustom
          code={`platformBrowserDynamic().bootstrapModule(AppModule);`}
          language="js"
        />

        <h6>
          <b className="highlight">After (Angular 18):</b>
        </h6>
        <CodeBlockCustom
          code={`bootstrapApplication(AppModule).bootstrap();`}
          language="js"
        />
        <h4 className="mt-4">
          <b>Benefits You&apos;ll Gain:</b>
        </h4>
        <ul>
          <li>
            <strong className="highlight">Cleaner architecture</strong> and
            reduced boilerplate.
          </li>
          <li>
            <strong className="highlight">Faster builds</strong> due to improved
            tree-shaking.
          </li>
          <li>Easier incremental refactors without risky rewrites.</li>
        </ul>

        <h4 className="mt-4">
          <b>Strongly Typed Reactive Forms</b>
        </h4>
        <p className="pl-4">
          Angular 16 introduced{" "}
          <strong className="highlight">
            strong typing for reactive forms
          </strong>
          , giving you compile-time safety for form controls and values. This
          eliminates ambiguity, reduces runtime errors, and improves the
          developer experience.
        </p>

        <h5>
          <b>Example:</b>
        </h5>
        <h6>
          <b className="highlight">Before (Angular 15):</b>
        </h6>

        <CodeBlockCustom
          code={`const name = new FormControl('');
const form = new FormGroup({ name: name });
const value = form.value.name; // any
`}
          language="js"
        />

        <h6>
          <b className="highlight">After (Angular 16+):</b>
        </h6>
        <CodeBlockCustom
          code={`const name = new FormControl<string>('', { nonNullable: true });
const form = new FormGroup({ name: name });
const value: string = form.controls.name.value; // strongly typed
`}
          language="js"
        />
        <h4 className="mt-4">
          <b>Benefits You&apos;ll Gain:</b>
        </h4>
        <ul>
          <li>
            <strong className="highlight">Fewer runtime bugs</strong> in forms.
          </li>
          <li>
            <strong className="highlight">Safer and faster refactoring</strong>{" "}
            when updating forms.
          </li>
          <li>Improved IDE suggestions and better team productivity.</li>
        </ul>
        <h4 className="mt-4">
          <b>Zone.js Optionality and Advanced Change Detection</b>
        </h4>
        <p className="pl-4">
          With Angular 16+,{" "}
          <strong className="highlight">Zone.js becomes optional</strong>,
          giving developers the power to explicitly control change detection.
          This leads to better performance and predictable UI updates,
          especially for complex applications with heavy data loads.
        </p>

        <h5>
          <b>Example:</b>
        </h5>
        <CodeBlockCustom
          code={`constructor(private cd: ChangeDetectorRef) {}

someAsyncCallback() {
  this.cd.detectChanges();
}
`}
          language="js"
        />

        <h4 className="mt-4">
          <b>Benefits You&apos;ll Gain:</b>
        </h4>
        <ul>
          <li>
            <strong className="highlight">
              Significant performance improvements
            </strong>{" "}
            in large applications.
          </li>
          <li>
            <strong className="highlight">Predictable rendering</strong> and
            fewer unexpected UI updates.
          </li>
          <li>
            A foundation for more reactive, modern patterns in future Angular
            versions.
          </li>
        </ul>
        <h4 className="mt-4">
          <b>Router and API Enhancements</b>
        </h4>
        <p className="pl-4">
          <strong className="highlight">Router APIs</strong> have been refined
          with updates to navigation, resolvers, guards, and parameter handling.
          These changes improve the consistency and reliability of routing,
          though older route logic may need adjustments during the migration.
        </p>
        <h4 className="mt-4">
          <b>Benefits You&apos;ll Gain:</b>
        </h4>
        <ul>
          <li>
            <strong className="highlight">Cleaner and more reliable</strong>{" "}
            navigation flows.
          </li>
          <li>Reduced routing bugs after version updates.</li>
          <li>
            Easier integration with lazy loading and modern architecture
            patterns.
          </li>
        </ul>
        <h4 className="mt-4">
          <b>SSR, Hydration, and Signals</b>
        </h4>
        <p className="pl-4">
          <strong className="highlight">Server-Side Rendering (SSR)</strong> and
          hydration have been optimized, delivering faster page loads and better
          user experiences. Alongside this, Angular introduced{" "}
          <strong className="highlight">Signals</strong>, a simpler way to
          handle state reactively without overcomplicating logic with RxJS for
          local use cases.
        </p>

        <h5>
          <b>
            Example <span className="highlight">(Signals) :</span>
          </b>
        </h5>
        <CodeBlockCustom
          code={`import { signal } from '@angular/core';

const counter = signal(0);
counter.update(value => value + 1);
console.log(counter()); // reactive access
`}
          language="js"
        />
        <h4 className="mt-4">
          <b>Benefits You&apos;ll Gain:</b>
        </h4>
        <ul>
          <li>
            Better <strong className="highlight">SEO</strong> due to faster SSR
            and improved hydration fidelity.
          </li>
          <li>
            Reduced{" "}
            <strong className="highlight">time-to-first-paint (TTFP)</strong>{" "}
            for end users.
          </li>
          <li>Cleaner and more predictable state management with Signals.</li>
        </ul>

        <h4 className="mt-4">
          <b>Compiler and Performance Optimizations</b>
        </h4>
        <p className="pl-4">
          <strong className="highlight">Ahead-of-Time (AOT)</strong> compilation
          and build pipelines have been optimized for faster build times,
          smaller bundles, and improved runtime performance.
        </p>

        <h5>
          <b>Example:</b>
        </h5>
        <CodeBlockCustom
          code={`ng build --configuration production --aot
`}
          language="bash"
        />
        <h4 className="mt-4">
          <b>Benefits You&apos;ll Gain:</b>
        </h4>
        <ul>
          <li>
            Reduced <strong className="highlight">CI/CD build times</strong> for
            faster deployments.
          </li>
          <li>
            <strong className="highlight">Smaller bundles</strong>, improving
            page speed scores.
          </li>
          <li>Smoother runtime performance for end users.</li>
        </ul>

        <h3 id="common-pitfalls">
          <strong>
            Common Migration <span>Challenges</span> (and How to Overcome Them)
          </strong>
        </h3>

        <p>
          Upgrading from Angular 15 to Angular 18 isn&apos;t just about running{" "}
          <strong className="highlight">ng update</strong>. Each version
          introduces changes that can affect your application in different ways.
          Below are the most common challenges teams face during migration,
          explained in detail with practical mitigation strategies to help you
          plan and reduce risks.
        </p>

        <h4 className="mt-4">
          <b>Dependency Compatibility</b>
        </h4>
        <h5 className="pl-4">
          <b>The Challenge:</b>
        </h5>
        <p className="pl-4">
          Third-party libraries don&apos;t always update in sync with
          Angular&apos;s release cycle. During migration, you may find that some
          libraries haven&apos;t been tested with Angular 16, 17, or 18. This
          can lead to compilation errors, runtime issues, or missing features.
        </p>
        <h4 className="mt-4">
          <b>How to Mitigate:</b>
        </h4>

        <ul>
          <li>
            Run <strong className="highlight">npm ls</strong> or{" "}
            <strong className="highlight">yarn list</strong> to generate a
            complete inventory of your dependencies.
          </li>
          <li>
            Check the library repositories (npm or GitHub) for version
            compatibility and update history.
          </li>
          <li>
            Replace outdated libraries with actively maintained alternatives
            wherever possible.
          </li>
          <li>
            For libraries without updates, consider temporary shims, patches, or
            community forks to bridge the gap.
          </li>
          <li>
            Maintain a compatibility matrix for your project to track which
            libraries are safe to use at each stage of the migration.
          </li>
        </ul>

        <div className="pro-tip">
          <i>
            Always update and test dependencies incrementally along with each
            Angular version step (15 → 16 → 17 → 18) instead of attempting one
            big upgrade.
          </i>
        </div>

        <h3>
          <strong>
            Breaking <span>Router and API</span> Changes
          </strong>
        </h3>
        <h4 className="mt-4">
          <b>The Challenge:</b>
        </h4>
        <p className="pl-4">
          Angular 16–18 introduced updates to the{" "}
          <strong className="highlight">Router API</strong> that can break
          existing navigation logic. Common issues include changes in route
          guards, resolvers, and parameter handling. Code that worked in Angular
          15 might suddenly throw type errors or runtime failures after the
          upgrade.
        </p>
        <h4 className="mt-4">
          <b>How to Mitigate:</b>
        </h4>
        <ul>
          <li>
            Use the official <strong className="highlight">ng update</strong>{" "}
            command. Angular&apos;s CLI schematics will automatically update
            many router configurations for you.
          </li>
          <li>
            Follow the Angular Update Guide to review and adjust your routing
            logic step by step.
          </li>
        </ul>
        <p className="pl-4">
          Add unit tests and integration tests for your routing flows,
          especially for:
        </p>
        <ul>
          <li>Lazy-loaded modules with proper code splitting</li>
          <li>Authentication and authorization guards for secure routing</li>
          <li>Custom resolvers for data prefetching</li>
        </ul>
        <ul>
          <li>
            Test all dynamic navigation paths manually in staging before going
            live.
          </li>
        </ul>

        <div className="pro-tip">
          <i>
            Run a dry run migration (
            <strong className="highlight">ng update --dry-run</strong>) to
            preview which router changes the CLI detects automatically.
          </i>
        </div>

        <h3>
          <strong>
            Change Detection with <span>Zone.js</span>
          </strong>
        </h3>
        <h4 className="mt-4">
          <b>The Challenge:</b>
        </h4>
        <p className="pl-4">
          With Angular 16+, <strong className="highlight">Zone.js</strong>{" "}
          becomes optional, but many applications still rely on Zone&apos;s
          automatic change detection to refresh the UI after asynchronous
          events. Removing Zone without auditing your code can lead to
          unexpected UI bugs where components don&apos;t update properly.
        </p>

        <h4 className="mt-4">
          <b>How to Mitigate:</b>
        </h4>
        <p className="pl-4">
          Start by auditing your application for areas where automatic change
          detection is assumed, such as:
        </p>
        <ul>
          <li>Direct DOM manipulations</li>
          <li>setTimeout or setInterval callbacks</li>
          <li>Third-party libraries with asynchronous updates</li>
        </ul>

        <p className="pl-4">
          Use Angular&apos;s{" "}
          <strong className="highlight">ChangeDetectorRef</strong> service to
          trigger manual updates where needed:
        </p>
        <CodeBlockCustom
          code={`constructor(private cd: ChangeDetectorRef) {}

fetchData() {
  this.service.getData().subscribe(() => {
    this.cd.detectChanges();
  });
}
`}
          language="bash"
        />

        <p className="pl-4">
          If a complete migration isn&apos;t feasible right away, keep Zone.js
          enabled and plan a phased removal later.
        </p>

        <div className="pro-tip">
          <i>
            Start with small, isolated components to understand the impact of
            manual change detection before scaling across the app.
          </i>
        </div>

        <h3>
          <strong>
            Forms Migration to Typed <span>APIs</span>
          </strong>
        </h3>
        <h4 className="mt-4">
          <b>The Challenge:</b>
        </h4>
        <p className="pl-4">
          Angular 16 introduced{" "}
          <strong className="highlight">typed reactive forms</strong>, which
          enforce strict typing on form controls and groups. While this improves
          reliability, it also means that any loosely typed code will throw
          compile-time errors during the migration.
        </p>
        <h4 className="mt-4">
          <b>How to Mitigate:</b>
        </h4>
        <ul>
          <li>
            Migrate module by module instead of attempting a bulk conversion.
          </li>
          <li>
            Use TypeScript tooling and your IDE&apos;s refactoring features to
            update common patterns.
          </li>
          <li>
            Start with simpler forms to understand the typing patterns before
            moving on to complex, multi-step forms.
          </li>
          <li>
            Write unit tests for critical forms to validate that no functional
            behavior changes after the migration.
          </li>
        </ul>

        <div className="pro-tip">
          <i>
            Treat the forms migration as a one-time investment. The added type
            safety reduces bugs and makes future refactors easier and safer.
          </i>
        </div>

        <h3>
          <strong>
            <span>SSR</span> and <span>Hydration</span> Differences
          </strong>
        </h3>
        <h4 className="mt-4">
          <b>The Challenge:</b>
        </h4>
        <p className="pl-4">
          Versions 16 through 18 improved{" "}
          <strong className="highlight">Server-Side Rendering (SSR)</strong> and
          hydration mechanics, which means some older SSR configurations may
          behave differently. Apps may show content mismatches between
          server-rendered and client-rendered DOM, leading to rendering errors
          or broken interactions.
        </p>
        <h4 className="mt-4">
          <b>How to Mitigate:</b>
        </h4>
        <ul>
          <li>
            Set up SSR-focused integration tests that render pages in a test
            environment and compare them to production baselines.
          </li>
          <li>
            Perform visual regression testing on key flows such as login,
            checkout, or onboarding to catch mismatches early.
          </li>
          <li>
            Deploy to a staging environment and allow synthetic traffic or
            internal users to validate critical user journeys before pushing
            changes to production.
          </li>
          <li>
            If you&apos;re using Angular Universal, ensure that any custom SSR
            code aligns with the latest APIs.
          </li>
        </ul>

        <div className="pro-tip">
          <i>
            Focus your initial SSR testing on high-traffic pages or SEO-critical
            flows before expanding coverage to the entire app.
          </i>
        </div>

        <h3 id="migration-workflow">
          <strong>
            Step-by-step migration plan: migrate <span>angular 15</span> to{" "}
            <span>angular 18</span>
          </strong>
        </h3>

        <p>
          Migrating from Angular 15 to Angular 18 should be done sequentially to
          minimize risk. Follow this structured workflow to ensure a smooth and
          reliable migration process.
        </p>

        <h4 className="mt-4">
          <b>Pre-Migration</b>
        </h4>
        <p className="pl-4">
          Before making any code changes, prepare your environment and project:
        </p>
        <h5 className="pl-4">
          <b>Backup and Branch:</b>
        </h5>
        <ul>
          <li>
            Create a dedicated migration branch from your production branch.
          </li>
          <li>Tag the current release for a clean rollback point.</li>
        </ul>

        <h5 className="pl-4">
          <b>Inventory Your Dependencies</b>
        </h5>
        <p className="pl-4">Document all key versions:</p>

        <ul>
          <li>Angular CLI, Angular Core</li>
          <li>RxJS</li>
          <li>TypeScript</li>
          <li>Third-party libraries</li>
        </ul>

        <p className="pl-4">
          Use <strong className="highlight">npm ls</strong> or{" "}
          <strong className="highlight">yarn list</strong> to generate a
          dependency tree.
        </p>
        <h5 className="pl-4">
          <b>Record Performance Baselines</b>
        </h5>
        <p className="pl-4">Capture:</p>

        <ul>
          <li>Bundle sizes</li>
          <li>Time to Interactive (TTI)</li>
          <li>Lighthouse scores</li>
          <li>Test coverage</li>
        </ul>

        <h5 className="pl-4">
          <b>Snapshot Local Environment</b>
        </h5>
        <ul>
          <li>Note your current Node.js and npm versions.</li>
          <li>Confirm your local setup matches package.json or .nvmrc.</li>
        </ul>

        <h4 className="mt-4">
          <b>Migration Steps</b>
        </h4>
        <p className="pl-4">
          Upgrade one version at a time — 15 → 16 → 17 → 18 — testing thoroughly
          after each step.
        </p>

        <h4 className="mt-4">
          <b>Update CLI and Core</b>
        </h4>
        <p className="pl-4">Run version-specific upgrade commands:</p>
        <CodeBlockCustom
          code={`ng update @angular/cli@16 @angular/core@16`}
          language="bash"
        />
        <p className="pl-4">
          Repeat this process for Angular 17 and 18 in later phases.
        </p>

        <h4 className="mt-4">
          <b>Run Lint and Build</b>
        </h4>
        <p className="pl-4">After updating, check for lint and build errors:</p>
        <CodeBlockCustom
          code={`ng lint
ng build --configuration production`}
          language="bash"
        />

        <h4 className="mt-4">
          <b>Run Tests</b>
        </h4>
        <p className="pl-4">
          Execute tests to ensure functionality remains stable:
        </p>
        <CodeBlockCustom
          code={`ng test --watch=false
ng e2e`}
          language="bash"
        />
        <p className="pl-4">
          If using Cypress or Playwright, run those suites as well.
        </p>

        <h4 className="mt-4">
          <b>Fix Deprecations and Errors</b>
        </h4>
        <ul>
          <li>Address all TypeScript compilation errors.</li>
          <li>Update code where APIs have changed or been deprecated.</li>
          <li>
            Prioritize critical paths before moving to non-critical refactors.
          </li>
        </ul>

        <h4 className="mt-4">
          <b>Repeat Sequentially</b>
        </h4>
        <p className="pl-4">
          Once your app is stable on the updated version, repeat steps a–d for
          Angular 17, then Angular 18, validating each step with tests and
          builds.
        </p>

        <h4 className="mt-4">
          <b>Post-Migration Checklist (Developer-Focused)</b>
        </h4>
        <p className="pl-4">
          Once the upgrade is complete, validate your codebase locally to ensure
          everything works as expected.
        </p>

        <h4 className="mt-4">
          <b>Validate AOT Builds Locally</b>
        </h4>
        <p className="pl-4">
          Run a production build locally to confirm Ahead-of-Time (AOT)
          compilation is functioning:
        </p>
        <CodeBlockCustom
          code={`ng build --configuration production --aot`}
          language="bash"
        />
        <p className="pl-4">Check for warnings or deprecated API errors.</p>

        <h4 className="mt-4">
          <b>Update Local Settings</b>
        </h4>
        <ul>
          <li>Update Node.js and npm versions if required by Angular 18.</li>
          <li>
            Ensure they match the versions defined in package.json or .nvmrc.
          </li>
        </ul>

        <h4 className="mt-4">
          <b>Audit Bundle Size and Performance</b>
        </h4>
        <p className="pl-4">Use source-map-explorer to inspect bundle size:</p>
        <CodeBlockCustom
          code={`npx source-map-explorer dist/<your-app>/*.js`}
          language="bash"
        />
        <p className="pl-4">
          Run Lighthouse locally to compare performance metrics such as First
          Contentful Paint (FCP) and Time to Interactive (TTI) with
          pre-migration baselines.
        </p>

        <h4 className="mt-4">
          <b>Test SSR and Hydration (If Applicable)</b>
        </h4>
        <p className="pl-4">For apps using Angular Universal (SSR):</p>
        <p className="pl-4">Run your SSR build locally:</p>
        <CodeBlockCustom code={`npm run dev:ssr`} language="bash" />
        <ul>
          <li>Test multiple pages for errors in the browser console.</li>
          <li>
            Verify that interactive elements like forms and dynamic widgets
            hydrate correctly.
          </li>
        </ul>

        <h4 className="mt-4">
          <b>Validate Accessibility and User Flows</b>
        </h4>
        <p className="pl-4">
          Test all critical user journeys in your local build:
        </p>
        <ul>
          <li>Login</li>
          <li>Checkout</li>
          <li>Dashboard navigation</li>
        </ul>
        <p className="pl-4">Run accessibility audits:</p>
        <CodeBlockCustom
          code={`npx axe-core-cli http://localhost:4200`}
          language="bash"
        />
        <p className="pl-4">
          Or, use Lighthouse&apos;s Accessibility report for a quick scan.
        </p>

        <h3>
          <strong>
            <span>Rollback</span> Plan
          </strong>
        </h3>
        <p className="pl-4">
          Prepare for safe rollbacks if unexpected production issues arise:
        </p>

        <h4 className="mt-4">
          <b>Revert to the Backup Branch</b>
        </h4>
        <p className="pl-4">Switch back to your pre-migration branch.</p>

        <h4 className="mt-4">
          <b>Redeploy Previous Build</b>
        </h4>
        <p className="pl-4">Deploy your last stable build artifacts.</p>

        <h4 className="mt-4">
          <b>Patch Hotfixes</b>
        </h4>
        <p className="pl-4">
          Apply any critical fixes on the older version while debugging
          migration issues.
        </p>

        <h3 id="case-study">
          <strong>
            Real-World <span>Case Study</span>: Enterprise Migration Success
          </strong>
        </h3>

        <p>
          Let&apos;s look at how a large enterprise successfully migrated their
          application from Angular 15 to 18, resulting in significant
          improvements across various metrics.
        </p>

        <div className="custom-card-sec side-by-side ">
          <div className="card-view">
            <h5>
              <span>
                <Icon icon="mdi:domain" width="35" height="35" />{" "}
              </span>
              <strong>Project Overview</strong>
            </h5>
            <ul>
              <li>
                <p>
                  <span className="highlight-strong">Industry:</span> Financial
                  Services
                </p>
              </li>
              <li>
                <p>
                  <span className="highlight-strong">Application Type:</span>{" "}
                  Customer Portal
                </p>
              </li>
              <li>
                <p>
                  <span className="highlight-strong">Codebase Size:</span>{" "}
                  200,000+ lines of code
                </p>
              </li>
              <li>
                <p>
                  <span className="highlight-strong">Team Size:</span> 12
                  developers
                </p>
              </li>
              <li>
                <p>
                  <span className="highlight-strong">Migration Duration:</span>{" "}
                  6 weeks
                </p>
              </li>
            </ul>
          </div>

          <div className="card-view">
            <h5>
              <span>
                <Icon icon="mdi:alert" width="35" height="35" />{" "}
              </span>
              <strong>Key Challenges</strong>
            </h5>
            <ul>
              <li>
                <p>Legacy third-party dependencies</p>
              </li>
              <li>
                <p>Custom form validation system</p>
              </li>
              <li>
                <p>Complex state management</p>
              </li>
              <li>
                <p>High-traffic production environment</p>
              </li>
            </ul>
          </div>

          <div className="card-view">
            <h5>
              <span>
                <Icon icon="mdi:lightbulb" width="35" height="35" />{" "}
              </span>
              <strong>Migration Strategy</strong>
            </h5>
            <ul>
              <li>
                <p>Incremental updates (15 → 16 → 17 → 18)</p>
              </li>
              <li>
                <p>Parallel development environments</p>
              </li>
              <li>
                <p>Automated testing pipeline</p>
              </li>
              <li>
                <p>Feature toggles for gradual rollout</p>
              </li>
            </ul>
          </div>

          <div className="card-view">
            <h5>
              <span>
                <Icon icon="mdi:bullseye-arrow" width="35" height="35" />{" "}
              </span>
              <strong>Results</strong>
            </h5>
            <ul>
              <li>
                <p>
                  <span className="highlight-strong">Performance:</span> 45%
                  faster page loads
                </p>
              </li>
              <li>
                <p>
                  <span className="highlight-strong">Bundle Size:</span> 30%
                  reduction
                </p>
              </li>
              <li>
                <p>
                  <span className="highlight-strong">Memory Usage:</span> 25%
                  improvement
                </p>
              </li>
              <li>
                <p>
                  <span className="highlight-strong">Build Time:</span> 60%
                  faster
                </p>
              </li>
            </ul>
          </div>
        </div>

        <h3 id="version-comparison">
          <strong>
            Angular <span>15 vs 18</span>: Feature Comparison
          </strong>
        </h3>

        <div className="table-container-blazor-united-vs-nextjs">
          <table className="comparison-table-2 ">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Angular 15</th>
                <th>Angular 18</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Component Architecture</td>
                <td>NgModule-based</td>
                <td>Standalone Components</td>
              </tr>
              <tr>
                <td>Form Types</td>
                <td>Loose typing</td>
                <td>Strong typing</td>
              </tr>
              <tr>
                <td>Change Detection</td>
                <td>Zone.js required</td>
                <td>Zone.js optional</td>
              </tr>
              <tr>
                <td>State Management</td>
                <td>RxJS-focused</td>
                <td>Signals + RxJS</td>
              </tr>
              <tr>
                <td>Build System</td>
                <td>Webpack</td>
                <td>Vite/esbuild</td>
              </tr>
              <tr>
                <td>SSR Support</td>
                <td>Basic</td>
                <td>Advanced + Hydration</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 id="code-examples">
          <strong>Code Examples</strong>
        </h3>

        <h4 className="mt-4">
          <b>Standalone Components</b>
        </h4>
        <h5 className="pl-4">
          <b>Before (Angular 15):</b>
        </h5>
        <CodeBlockCustom
          code={`platformBrowserDynamic().bootstrapModule(AppModule);
`}
          language="bash"
        />

        <h5 className="pl-4">
          <b>After (Angular 18):</b>
        </h5>
        <CodeBlockCustom
          code={`import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, { providers: [...] });

`}
          language="bash"
        />

        <h4 className="mt-4">
          <b>Typed Reactive Forms</b>
        </h4>
        <h5 className="pl-4">
          <b>Before (Angular 15):</b>
        </h5>
        <CodeBlockCustom
          code={`const name = new FormControl('');
const form = new FormGroup({ name: name });
const value = form.value.name; // any

`}
          language="bash"
        />
        <h5 className="pl-4">
          <b>After (Angular 16+):</b>
        </h5>
        <CodeBlockCustom
          code={`const name = new FormControl<string>('', { nonNullable: true });
const form = new FormGroup({ name: name });
const value: string = form.controls.name.value; // strongly typed

`}
          language="bash"
        />

        <h4 className="mt-4">
          <b>Zone.js Removal (Optional)</b>
        </h4>
        <h5 className="pl-4">
          <b>Bootstrap without Zone.js:</b>
        </h5>
        <CodeBlockCustom
          code={`import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';

platformBrowser().bootstrapModule(AppModule, { ngZone: 'noop' });`}
          language="typescript"
        />

        <p className="pl-4">Manual Change Detection:</p>

        <h4 className="mt-4">
          <b>Signals (Simpler State Management)</b>
        </h4>
        <h5 className="pl-4">
          <b>Basic Signal:</b>
        </h5>
        <CodeBlockCustom
          code={`import { signal } from '@angular/core';

export class CounterComponent {
  count = signal(0);

  increment() {
    this.count.update(v => v + 1);
  }

  reset() {
    this.count.set(0);
  }
}`}
          language="typescript"
        />
        <h5 className="pl-4">
          <b>Computed and Effect:</b>
        </h5>
        <CodeBlockCustom
          code={`import { signal, computed, effect } from '@angular/core';

export class CartComponent {
  items = signal<number[]>([100, 250, 50]);
  total = computed(() => this.items().reduce((a, b) => a + b, 0));

  log = effect(() => {
    console.log('Cart total:', this.total());
  });
}`}
          language="typescript"
        />
        <h5 className="pl-4">
          <b>RxJS Interop:</b>
        </h5>
        <CodeBlockCustom
          code={`import { toSignal } from '@angular/core/rxjs-interop';

total = toSignal(this.cartService.total$, { initialValue: 0 });`}
          language="typescript"
        />

        <h4 className="mt-4">
          <b>SSR and Hydration</b>
        </h4>
        <h5 className="pl-4">
          <b>Client Bootstrap with Hydration:</b>
        </h5>

        <CodeBlockCustom
          code={`// main.ts
import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers ?? []),
    provideClientHydration(),
  ],
});`}
          language="typescript"
        />
        <h5 className="pl-4">
          <b>Server Bootstrap:</b>
        </h5>
        <CodeBlockCustom
          code={`// main.server.ts
import { bootstrapApplication } from '@angular/platform-server';
import { provideServerRendering } from '@angular/platform-server';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

export default function () {
  return bootstrapApplication(AppComponent, {
    ...appConfig,
    providers: [
      ...(appConfig.providers ?? []),
      provideServerRendering(),
    ],
  });
}`}
          language="typescript"
        />
        <h5 className="pl-4">
          <b>Avoiding Double Fetch with TransferState:</b>
        </h5>
        <CodeBlockCustom
          code={`import { HttpClient } from '@angular/common/http';
import { inject, Injectable, makeStateKey, TransferState } from '@angular/core';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private http = inject(HttpClient);
  private state = inject(TransferState);
  private KEY = makeStateKey<any>('products');

  getProducts() {
    const cached = this.state.get(this.KEY, null);
    if (cached) return of(cached);

    return this.http.get('/api/products').pipe(
      tap(data => this.state.set(this.KEY, data))
    );
  }
}

`}
          language="bash"
        />

        <h4 className="mt-4">
          <b>Hydration Checks:</b>
        </h4>
        <ul>
          <li>No use of window or document during server render.</li>
          <li>Stable element IDs for lists to avoid mismatches.</li>
          <li>Use TransferState for critical API calls.</li>
          <li>Watch console for hydration mismatch warnings.</li>
        </ul>

        <h3 id="conclusion">
          <strong>Conclusion</strong>
        </h3>

        <p>
          Upgrading from Angular 15 to Angular 18 is more than a technical
          update — it&apos;s a strategic investment in stability, performance,
          and productivity. By migrating sequentially (15 → 16 → 17 → 18),
          running thorough tests, and maintaining a rollback plan, teams can
          reduce risk and minimize downtime.
        </p>

        <p>
          Key upgrades like{" "}
          <strong className="highlight">standalone components</strong>,{" "}
          <strong className="highlight">typed reactive forms</strong>,{" "}
          <strong className="highlight">Signals</strong>, and{" "}
          <strong className="highlight">Zone.js optionality</strong> lay the
          foundation for cleaner architecture, predictable reactivity, and
          better performance — helping your applications run faster and scale
          seamlessly.
        </p>

        <p>
          At <strong>Moltech Solutions Inc.</strong>, we specialize in Angular
          migrations and modernizations for businesses across the USA, Canada,
          and Europe. Whether you need a full migration plan, performance
          audits, or incremental upgrades, our experts can help you execute a
          seamless, low-risk transition that&apos;s tailored to your
          application&apos;s complexity.
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
              Ready to modernize your Angular application? Let&apos;s create a
              tailored migration plan that minimizes risk and maximizes ROI.
              Book a free consultation with Moltech Solutions Inc. Our experts
              will analyze your codebase, identify opportunities, and guide you
              through a seamless transition to Angular 18.
            </p>
            <div className="button-sec">
              <Link rel="canonical" className="service-btn" href="/contact-us">
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

export default MigrateAngular15ToAngular18;
