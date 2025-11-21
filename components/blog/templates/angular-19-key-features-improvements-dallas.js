"use client";

import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { AppIcons } from "@/data/appIcons";
import CodeBlockCustom from "@/components/codeBlock/CodeBlockCustom";
import Image from "next/image";

// Code snippet constants used in CodeBlockCustom below
const angularHydrationExample = `import { provideClientHydration, withIncrementalHydration } from '@angular/platform-browser';

// ...
provideClientHydration(withIncrementalHydration());`;

const angularDeferHydration = `@defer (hydrate on viewport) {
  <shopping-cart />
}`;

const addUniversalExample = `ng add @nguniversal/express-engine`;

const angularBootstrapSSR = `import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule.withServerTransition({ appId: 'serverApp' }))
  ]
}).catch(err => console.error(err));`;

const angularEventReplayHydration = `// For new projects the Angular CLI will generate this code by default
bootstrapApplication(App, {
  providers: [
    provideClientHydration(withEventReplay())
  ]
});`;

const angularRouteStrategies = `export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    render: 'server' // Server-side Rendering (SSR)
  },
  {
    path: 'blog',
    component: BlogComponent,
    render: 'static' // Static Site Generation (SSG)
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    render: 'client' // Client-side Rendering (CSR)
  }
];`;

const angularNgModuleExample = `@NgModule({
  declarations: [MyComponent],
  imports: [CommonModule],
})
export class MyModule {}`;

const standaloneComponentExample = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [CommonModule],
  template: \`<p>Hello from a standalone component!</p>\`,
})
export class MyComponent {}`;

const angularTimepickerExample = `<mat-form-field>
  <mat-label>Pick a time</mat-label>
  <input matInput [matTimepicker]="picker" />
  <mat-timepicker-toggle matIconSuffix [for]="picker" />
  <mat-timepicker #picker />
</mat-form-field>`;

const materialThemeVars = `:root {
  --mdc-theme-primary: #6200ea;
  --mdc-theme-on-primary: #ffffff;
  --mdc-theme-secondary: #03dac6;
  --mdc-theme-on-secondary: #000000;
}`;

const customButtonStyle = `.my-custom-button {
  background-color: var(--mdc-theme-primary);
  color: var(--mdc-theme-on-primary);
}`;

const updateThemeColor = `document.documentElement.style.setProperty('--mdc-theme-primary', '#ff5722');`;

const cdkMixedDragDrop = `<div
  cdkDropList
  cdkDropListOrientation="mixed" <!-- specify mixed orientation -->
>
  @for (item of mixedTodo; track item) {
    <div cdkDrag>
      {{item}}
      <mat-icon cdkDragHandle svgIcon="dnd-move"></mat-icon>
    </div>
  }
</div>`;

const dragDropModuleImport = `import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  imports: [DragDropModule],
})
export class AppModule {}`;

const signalsLinkedExample = `const options = signal(['apple', 'banana', 'fig']);

// Choice defaults to the first option, but can be changed.
const choice = linkedSignal(() => options()[0]);
console.log(choice()); // apple

choice.set('fig');
console.log(choice()); // fig

// When options change, choice resets to the new default value.
options.set(['peach', 'kiwi']);
console.log(choice()); // peach`;

const angularHtmlSanitization = `// Angular enforces safe HTML usage
const myHtml = '<img src="x" onerror="alert(1)" />';

// Unsafe binding will be sanitized or blocked:
<div [innerHTML]="myHtml"></div> // Will not trigger alert due to sanitization`;

const Angular19keyFeaturesImprovements = () => {
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
        <div className="blog-header-image  mt-0">
          <Image
            src={AppIcons.AngularCoverImg}
            alt="10 Key Features and Improvements in Angular 19"
            width
            height
            onClick={() =>
              handleImageClick(
                AppIcons.AngularCoverImg,
                "10 Key Features and Improvements in Angular 19"
              )
            }
            style={{ cursor: "pointer", height: "auto" }}
          />
        </div>{" "}
        <div className="blog-details-decpription-box">
          <p>
            As one of the most popular frameworks for building modern web
            applications, Angular continues to evolve — this time with version
            19. The latest release focuses on boosting developer productivity,
            enhancing performance, and delivering a smoother user experience. In
            this blog post, we’ll take a closer look at the standout features in
            Angular v19, explore how they can benefit your projects, and share
            key tips to help you migrate seamlessly.
          </p>
        </div>
        <h3 id="incremental-hydration">
          <strong>1. Incremental Hydration</strong>
        </h3>
        <p>
          In Angular v19, Incremental Hydration has been introduced to enhance
          server-side rendering (SSR).
        </p>
        <h4>
          <strong>What is Incremental Hydration?</strong>
        </h4>
        <p>
          Incremental Hydration is a new feature introduced in Angular v19 that
          enables selective loading and hydration of application parts as
          needed. Instead of hydrating the entire app upfront, Angular now
          allows components to be loaded and activated gradually, based on user
          interactions.
        </p>
        <h5>
          <strong>Benefits:</strong>
        </h5>
        <ul>
          <li>
            <p>
              <strong>Improved Performance:</strong> By reducing the initial
              load time, Incremental Hydration makes your application faster and
              more responsive. Only essential parts of the app are hydrated
              initially, improving perceived performance.
            </p>
          </li>
          <li>
            <p>
              <strong>Efficient resource usage:</strong> Reduces JavaScript
              execution time by avoiding unnecessary hydration of non-visible
              components.
            </p>
          </li>
          <li>
            <p>
              <strong>Better User Experience:</strong> Users can start
              interacting with the app sooner, even if all components are not
              fully loaded.
            </p>
          </li>
        </ul>
        <p>i.e example :</p>
        <CodeBlockCustom code={angularHydrationExample} language="javascript" />
        <CodeBlockCustom code={angularDeferHydration} language="html" />
        <h4>
          <strong>How to Use It</strong>
        </h4>
        <p> 1. Enable SSR with Angular Universal (if not already):</p>
        <CodeBlockCustom code={addUniversalExample} language="bash" />
        <p></p>
        <p>
          2. Make your app compatible with hydration: Add{" "}
          <a
            className="blog-links"
            href="https://angular.io/api/platform-browser"
            target="_blank"
            rel="noopener noreferrer"
          >
            @angular/platform-browser
          </a>
          with hydration enabled in main.ts:
        </p>
        <CodeBlockCustom code={angularBootstrapSSR} language="javascript" />
        <h3 id="event-replay">
          <strong>2. Event Replay</strong>
        </h3>
        <p>
          <strong>Event Replay</strong> is a new feature in Angular v19 that
          enhances the
          <strong> hydration</strong> process in server-side rendered (SSR)
          applications.
        </p>
        <h4>
          <strong>What is Event Replay?</strong>
        </h4>
        <p>
          Event Replay is a feature that captures user events during the initial
          load of the application and
          <strong> replays them</strong> once the necessary code is available.
          This ensures that user interactions are not lost or ignored while the
          app is still loading.
        </p>
        <p>
          Previously, if a user clicked a button or typed into a form before the
          app was fully hydrated, those actions could be lost. Now, with
          <strong> Event Replay</strong>, Angular
          <strong> records these events</strong> and
          <strong> re-applies them</strong> once the related components are
          ready.
        </p>
        <h5>
          <strong>Why Is It Used?</strong>
        </h5>
        <p>
          During SSR, the HTML is pre-rendered and sent to the browser. But
          until hydration completes, the page isn’t “interactive” from Angular’s
          perspective. If a user interacts with the page during this time:
        </p>
        <p>
          <strong>
            <em>Without Event Replay</em>
          </strong>
          : The interaction is ignored or lost.
        </p>
        <p>
          With Event Replay: The interaction is preserved and replayed, so the
          user never experiences broken functionality.
        </p>
        <h5>
          <strong>Benefits:</strong>
        </h5>
        <ul>
          <li>
            <p>
              <strong>Smooth User Experience:</strong> Users can interact with
              the app immediately, without waiting for all JavaScript to load.
            </p>
          </li>
          <li>
            <p>
              <strong>Smoother hydration process:</strong> Users can interact
              with the page even before Angular takes control.
            </p>
          </li>
          <li>
            <p>
              <strong>Reduces race conditions:</strong> Especially for fast
              typers or impatient clickers
            </p>
          </li>
          <li>
            <p>
              <strong>Increased Engagement:</strong> By capturing and replaying
              events, users feel that the app is responsive and interactive from
              the start.
            </p>
          </li>
        </ul>
        <CodeBlockCustom
          code={angularEventReplayHydration}
          language="javascript"
        />
        <h3 id="route-level-render-modes">
          <strong>3. Route-Level Render Modes</strong>
        </h3>
        <p>
          <strong>What is Route-Level Render Modes?</strong>
        </p>
        <p>
          Angular v19 introduces the ability to configure how each route in your
          application is rendered. You can choose between{" "}
          <strong>server-side</strong> rendering, <strong>client-side</strong>{" "}
          rendering, or prerendering for each route, depending on your app’s
          needs.
        </p>
        <p>
          This means you can now define{" "}
          <strong>different rendering strategies per route</strong>, giving you
          more flexibility and performance control.
        </p>
        <h4>
          <strong>Why Is It Used?</strong>
        </h4>
        <p>With this feature, you can now:</p>
        <ul>
          <li>
            <p>
              Use <strong> SSR</strong> for SEO-critical pages
            </p>
          </li>
          <li>
            <p>
              Use<strong> SSG</strong> for static content
            </p>
          </li>
          <li>
            <p>
              Use<strong> CSR</strong> for interactive/dynamic sections
            </p>
          </li>
          <li>
            <p>All within the same Angular app.</p>
          </li>
          <li>
            <p>Example Usage</p>
          </li>
        </ul>
        <p>
          You can define the render mode per route in your{" "}
          <strong>app.routes.ts</strong> file:{" "}
        </p>
        <h5>
          <strong>Benefits:</strong>
        </h5>
        <ul>
          <li>
            <p>
              <strong>Flexibility:</strong> You can optimize each route for
              performance and user experience based on its specific
              requirements.
            </p>
          </li>
          <li>
            <p>
              <strong>Improved Performance:</strong> By choosing the appropriate
              render mode, you can reduce load times and improve the overall
              performance of your application.
            </p>
          </li>
          <li>
            <p>
              <strong>Smaller bundle sizes:</strong> for CSR-only routes
            </p>
          </li>
        </ul>
        <h5>
          <strong>Example Usage</strong>
        </h5>
        <p>
          You can define the render mode per route in your app.routes.ts file:
        </p>
        <CodeBlockCustom code={angularRouteStrategies} language="javascrip" />
        <h3 id="hot-module-replacement">
          <strong>4. Hot Module Replacement (HMR)</strong>
        </h3>
        <p>
          In Angular v19, HMR has been further improved for faster development
          cycles and a smoother developer experience out of the box.
        </p>
        <h4>
          <strong>What is Hot Module Replacement?</strong>
        </h4>
        <p>
          Hot Module Replacement (HMR) is a feature that allows developers to
          update styles and templates without refreshing the entire page. This
          means that changes can be applied instantly, making the development
          process faster and more efficient.
        </p>
        <p>
          HMR injects only the changed modules into the browser while preserving
          the app’s current state
        </p>
        <h5>
          <strong>Benefits:</strong>
        </h5>
        <ul>
          <li>
            <p>
              <strong>Faster Development:</strong> Instant updates mean less
              time waiting for changes to take effect.
            </p>
          </li>
          <li>
            <p>
              <strong>Better Workflow:</strong> Developers can see the results
              of their changes immediately, leading to a more efficient and
              enjoyable development experience.
            </p>
          </li>
          <li>
            <p>
              <strong>Improved productivity:</strong> iterate and debug UI
              changes instantly
            </p>
          </li>
          <li>
            <p>
              <strong>Preserves application state:</strong> e.g., no loss of
              input data during development
            </p>
          </li>
        </ul>
        <h5>
          <strong>How to Use HMR in Angular</strong>
        </h5>
        <p>Enable HMR using the CLI:</p>
        <CodeBlockCustom code="ng serve --hmr" language="javascrip" />
        <h3 id="standalone-components">
          <strong>5. What are Standalone Components?</strong>
        </h3>
        <p>
          <strong>Standalone Components</strong> are a new feature in Angular
          v19 that allows components to be used{" "}
          <strong>
            <i>without needing to declare them</i>
          </strong>{" "}
          in an{" "}
          <strong>
            <strong>NgModules</strong>
          </strong>
          . This simplifies the code and makes it easier to manage and maintain.
        </p>
        <p>
          Instead of declaring a component inside a module, you can define it as{" "}
          <span className="package-name-light">standalone: true</span>, making
          it self-contained and more reusable.
        </p>
        <h5>
          <strong>Why Is It Used?</strong>
        </h5>
        <p>
          NgModules were traditionally used to group components and manage
          dependencies. However, this often led to{" "}
          <strong>boilerplate code, tight coupling, and confusion</strong> about
          where components should be declared or imported.
        </p>
        <h5>Standalone components solve this by:</h5>
        <ul>
          <li>
            <p>Making components self-contained.</p>
          </li>
          <li>
            <p>Encouraging a modular and scalable architecture.</p>
          </li>
          <li>
            <p>Simplifying testing and lazy loading.</p>
          </li>
        </ul>
        <h5>
          <strong>Benefits:</strong>
        </h5>
        <ul>
          <li>
            <p>
              <strong>Simplified Code:</strong> With fewer dependencies, your
              codebase becomes cleaner and easier to understand.
            </p>
          </li>
          <li>
            <p>
              <strong>Improved Maintainability:</strong> Standalone components
              are easier to manage and update, reducing the risk of errors and
              bugs.
            </p>
          </li>
          <li>
            <p>
              <strong>Simplified testing</strong> — no need to set up test
              modules.
            </p>
          </li>
          <li>
            <p>
              <strong>No need for NgModules</strong> — reduces{" "}
              <strong>boilerplate</strong>.
            </p>
          </li>
          <li>
            <p>
              <strong>Simplified testing</strong> — no need to set up test
              modules.
            </p>
          </li>
        </ul>
        <h5>
          <strong>Example:</strong>
        </h5>
        <h6>
          <strong>1. Old Way (With Module):</strong>
        </h6>
        <CodeBlockCustom code={angularNgModuleExample} language="typescript" />
        <h6>
          <strong>2. With Standalone Component:</strong>
        </h6>
        <CodeBlockCustom
          code={standaloneComponentExample}
          language="typescript"
        />
        <h3>
          <strong>6. What is the New Time Picker Component?</strong>
        </h3>
        <p>
          Angular v19 introduces a new Time Picker component, allowing users to
          select time in a more intuitive and user-friendly way. This component
          has been a much-requested feature and is now available to enhance your
          application’s user interface.
        </p>
        <p>
          With Angular v19, you can now use a{" "}
          <strong> native, consistent, and accessible </strong>time picker
          component directly from Angular’s component toolkit.
        </p>
        <h6>Benefits:</h6>
        <ul>
          <li>
            <p>
              <strong>Enhanced User Interface:</strong> The new Time Picker
              provides a modern and intuitive way for users to select time.
            </p>
          </li>
          <li>
            <p>
              <strong>Increased Usability:</strong> By offering a dedicated
              component for time selection, your application becomes more
              user-friendly and accessible.
            </p>
          </li>
          <li>
            <p>
              <strong>Out-of-the-box support</strong> — No need for custom time
              pickers or third-party packages
            </p>
          </li>
          <li>
            <p>
              <strong>Easy integration</strong> — Works seamlessly with Angular
              forms (both Template-driven and Reactive)
            </p>
          </li>
          <li>
            <p>
              <strong>Material design-ready</strong> — Fully themed and
              consistent with <span>Angular Material</span> UI
            </p>
          </li>
        </ul>
        <CodeBlockCustom
          code={angularTimepickerExample}
          language="typescript"
        />
        <h5>
          <strong>Advanced Features:</strong>
        </h5>
        <ul>
          <li>
            <p>Step intervals for minutes (e.g., 5, 10, 15 minutes)</p>
          </li>
          <li>
            <p>AM/PM toggle or 24-hour format</p>
          </li>
          <li>
            <p>Minimum and maximum allowed times</p>
          </li>
          <li>
            <p>Validation support for required fields</p>
          </li>
        </ul>
        <h3 id="enhanced-theming-api">
          <strong>7. What is the Enhanced Theming API?</strong>
        </h3>
        <p>
          The Enhanced Theming API in Angular v19 simplifies the process of
          creating custom themes for your application. This new API provides
          more flexibility and control over the look and feel of your app.
        </p>
        <p>
          The new API is built using <strong>CSS variables</strong>, allowing{" "}
          <strong>dynamic theming</strong>, better support for{" "}
          <strong>dark/light modes</strong>, and{" "}
          <strong>real-time theme switching</strong> without recompiling styles.
        </p>
        <h5>
          <strong>Why Is It Used?</strong>
        </h5>
        <p>
          Previously, theming in Angular Material relied heavily on SCSS mixins,
          which made real-time theme changes difficult. You had to predefine
          themes and switch them using complex workarounds or page reloads. With
          the enhanced theming API:
        </p>
        <ul>
          <li>
            <p>
              You can <strong>define themes using CSS custom properties</strong>
            </p>
          </li>
          <li>
            <p>
              Apply <strong>multiple themes dynamically</strong>
            </p>
          </li>
          <li>
            <p>
              Create <strong>custom component styles</strong> more easily
            </p>
          </li>
        </ul>
        <h5>
          <strong>Benefits:</strong>
        </h5>
        <ul>
          <li>
            <p>
              <strong>Easier Customization:</strong> Creating and applying
              custom themes is now simpler and more straightforward.
            </p>
          </li>
          <li>
            <p>
              <strong>Consistent Design:</strong> The Enhanced Theming API
              ensures that your application’s design is consistent and cohesive.
            </p>
          </li>
          <li>
            <p>
              <strong>Scoped theming:</strong> Apply a specific theme only to a
              certain section of your app.
            </p>
          </li>
          <li>
            <p>
              <strong>Better dark mode support:</strong> More consistent and
              maintainable.
            </p>
          </li>
        </ul>
        <h5>
          <strong>Example: Defining a Theme with CSS Variables</strong>
        </h5>
        <CodeBlockCustom code={materialThemeVars} language="css" />
        <p>
          Then use these variables in your components or override Material
          styles:
        </p>
        <CodeBlockCustom code={customButtonStyle} language="css" />
        <p>To support dynamic theming in ts file :</p>
        <CodeBlockCustom code={updateThemeColor} language="javascript" />
        <h3 id="two-dimensional-drag-drop">
          <strong>8. What is Two-Dimensional Drag and Drop?</strong>
        </h3>{" "}
        <p>
          {" "}
          In Angular v19, the <strong>Angular CDK</strong> (Component Dev Kit)
          introduces support for <strong>Two-Dimensional Drag and Drop</strong>{" "}
          — allowing elements to be dragged both <strong>horizontally</strong>{" "}
          and <strong>vertically</strong> within a defined container or grid.{" "}
        </p>{" "}
        <p>
          {" "}
          Previously, the CDK supported drag-and-drop mainly in one direction
          (typically vertical). With this enhancement, you can now{" "}
          <strong>drag items freely in both X and Y axes</strong>, enabling
          advanced UI patterns like <strong>grid reordering</strong>,{" "}
          <strong>visual layout builders</strong>, and{" "}
          <strong>dashboards</strong>.{" "}
        </p>{" "}
        <p>
          {" "}
          Modern interfaces often require more than simple vertical lists —
          think <strong>Kanban boards</strong>,{" "}
          <strong>customizable dashboards</strong>, or{" "}
          <strong>design tools</strong>. Two-dimensional drag-and-drop allows
          users to interact with the UI in a more <strong>intuitive</strong> and{" "}
          <strong>flexible</strong> way.{" "}
        </p>{" "}
        <h4>
          <strong>Benefits:</strong>
        </h4>{" "}
        <ul>
          {" "}
          <li>
            <p>
              <strong>Supports grid-based layouts —</strong> Great for visual
              editors or dashboard widgets.
            </p>
          </li>{" "}
          <li>
            <p>
              <strong>Customizable drop zones and containers.</strong>
            </p>
          </li>{" "}
          <li>
            <p>
              <strong>Fully integrated with Angular CDK —</strong> no need for
              third-party libraries.
            </p>
          </li>{" "}
          <li>
            <p>
              <strong>Enhanced Functionality:</strong> Two-dimensional drag and
              drop opens up new possibilities for creating interactive and
              dynamic user interfaces.
            </p>
          </li>{" "}
        </ul>
        <CodeBlockCustom code={cdkMixedDragDrop} language="html" />
        <p>
          <strong>Module Import:</strong> Make sure you import the necessary
          Angular CDK module.
        </p>
        <CodeBlockCustom code={dragDropModuleImport} language="typescript" />
        <h3 id="linked-signals-resources">
          <strong>9. What are Linked Signals and Resources?</strong>
        </h3>{" "}
        <p>
          {" "}
          Linked Signals and Resources are new APIs in Angular v19 for managing
          state and asynchronous data. These APIs simplify the process of
          handling complex state and data fetching in your application.{" "}
        </p>{" "}
        <p>
          {" "}
          <strong>Linked Signals and Resources</strong> are part of Angular’s
          move toward a more <strong>reactive programming model</strong> using{" "}
          <strong>Signals</strong>. This concept helps make{" "}
          <strong>state management</strong> and <strong>side effects</strong>{" "}
          more <strong>predictable</strong>, <strong>efficient</strong>, and{" "}
          <strong>declarative</strong>.{" "}
        </p>{" "}
        <ul>
          {" "}
          <li>
            <p>
              <strong>Signals</strong> are a reactive primitive that tracks and
              reacts to changes in values.
            </p>
          </li>{" "}
          <li>
            <p>
              <strong>Linked Signals</strong> let you <strong>combine</strong>{" "}
              or <strong>derive new signals</strong> based on other signals.
            </p>
          </li>{" "}
          <li>
            <p>
              <strong>Resources</strong> are lifecycle-aware constructs that
              work with <strong>signals</strong> to manage things like
              subscriptions, timers, or HTTP requests cleanly.
            </p>
          </li>{" "}
        </ul>{" "}
        <p>
          {" "}
          Previously, Angular relied heavily on services, RxJS, and manual{" "}
          <span className="package-name-light">ngOnDestroy()</span> logic to
          manage state and side effects.{" "}
        </p>{" "}
        <h4>
          <strong>With Linked Signals and Resources:</strong>
        </h4>{" "}
        <ul>
          {" "}
          <li>
            <p>
              You can now <strong>track changes to values</strong> reactively
              without subscriptions.
            </p>
          </li>{" "}
          <li>
            <p>
              You can create <strong>derived state</strong> from other signals.
            </p>
          </li>{" "}
          <li>
            <p>
              You can <strong>automatically clean up side effects</strong> tied
              to component lifecycle.
            </p>
          </li>{" "}
        </ul>{" "}
        <h4>
          <strong>Benefits:</strong>
        </h4>{" "}
        <ul>
          {" "}
          <li>
            <p>
              <strong>Simplified State Management:</strong> Managing state
              becomes easier and more efficient with Linked Signals and
              Resources.
            </p>
          </li>{" "}
          <li>
            <p>
              <strong>Better Data Handling:</strong> These new APIs provide a
              more streamlined way to handle asynchronous data, improving the
              overall performance of your application.
            </p>
          </li>{" "}
          <li>
            <p>
              <strong>Improves performance and memory management</strong>
            </p>
          </li>{" "}
          <li>
            <p>
              <strong>Automatic cleanup of side effects</strong> (like
              unsubscribing from observables)
            </p>
          </li>
        </ul>
        <CodeBlockCustom code={signalsLinkedExample} language="javascript" />
        <h3 id="security-improvements">
          <strong>10. What are the Security Improvements?</strong>
        </h3>
        <p>
          {" "}
          Angular v19 introduces several{" "}
          <strong>enhanced security features</strong> that make your
          applications safer by <strong>strengthening DOM sanitization</strong>,{" "}
          <strong>tightening CSP (Content Security Policy) support</strong>, and{" "}
          <strong>improving framework-level safeguards</strong>. These updates
          help protect against common web vulnerabilities like{" "}
          <strong>Cross-Site Scripting (XSS)</strong> and injection{" "}
          <strong>attacks</strong> while improving compliance with modern
          security standards.{" "}
        </p>{" "}
        <p>
          {" "}
          Security is a <strong>core pillar</strong> of web development. As
          applications become more dynamic and interactive, the risk of
          unintended vulnerabilities increases. Angular v19 helps developers
          stay ahead by:{" "}
        </p>{" "}
        <ul>
          {" "}
          <li>
            <p>
              <strong>Reducing attack surface</strong>
            </p>
          </li>{" "}
          <li>
            <p>
              <strong>
                Improving compatibility with strict security environments
              </strong>
            </p>
          </li>{" "}
          <li>
            <p>
              <strong>Enabling secure-by-default behavior</strong>
            </p>
          </li>{" "}
        </ul>{" "}
        <h4>
          <strong>Key Improvements in Angular v19</strong>
        </h4>{" "}
        <h5>
          <strong>1. Stronger DOM Sanitization</strong>
        </h5>{" "}
        <ul>
          {" "}
          <li>
            <p>Improved handling of untrusted HTML and inputs</p>
          </li>{" "}
          <li>
            <p>Better protection against XSS in edge cases</p>
          </li>{" "}
        </ul>{" "}
        <h5>
          <strong>2. Improved CSP (Content Security Policy) Support</strong>
        </h5>{" "}
        <ul>
          {" "}
          <li>
            <p>Easier to configure Angular apps to comply with CSP rules</p>
          </li>{" "}
          <li>
            <p>Helps in environments where inline scripts/styles are blocked</p>
          </li>{" "}
        </ul>{" "}
        <h5>
          <strong>3. Tighter Trusted Types Integration</strong>
        </h5>{" "}
        <ul>
          {" "}
          <li>
            <p>
              Enforces safer DOM usage by requiring explicit handling of HTML,
              URLs, etc.
            </p>
          </li>{" "}
          <li>
            <p>Helps prevent DOM-based XSS when dealing with dynamic content</p>
          </li>{" "}
        </ul>{" "}
        <h5>
          <strong>4. Enhanced Template Validation</strong>
        </h5>{" "}
        <ul>
          {" "}
          <li>
            <p>Better detection of unsafe bindings at compile-time</p>
          </li>{" "}
          <li>
            <p>Encourages more secure coding patterns</p>
          </li>{" "}
        </ul>
        <h5>
          <strong>Example: Trusted Types Protection</strong>
        </h5>
        <CodeBlockCustom code={angularHtmlSanitization} language="html" />
        <h5 id="migration-tips-angular-19">
          <strong>Tips for Migrating to Angular v19</strong>
        </h5>
        <p>
          Migrating to a new version of Angular can seem daunting, but with the
          right approach, it can be a smooth and straightforward process. Here
          are some tips to help you migrate to Angular v19:
        </p>
        <h6>
          <strong> 1 . Update Angular CLI and Core:</strong>
        </h6>
        <ul>
          <li>
            Run the following command to update Angular CLI and Core to the
            latest version:
          </li>
        </ul>
        <h6>
          <strong>2. Address Deprecation Warnings:</strong>
        </h6>
        <ul>
          <li>
            Pay attention to any deprecation warnings that appear during the
            update process. Address these warnings to ensure your application
            remains compatible with future versions.
          </li>
        </ul>
        <h6>
          <strong>3. Test Thoroughly:</strong>
        </h6>
        <ul>
          <li>
            After updating, thoroughly test your application, especially custom
            directives and components. Ensure that everything works as expected
            and that there are no breaking changes.
          </li>
        </ul>
        <h6>
          <strong>4. Leverage Automatic Migrations:</strong>
        </h6>
        <ul>
          <li>
            Angular provides automatic migrations for many of the new features
            and changes. Use these migrations to simplify the update process and
            reduce manual work.
          </li>
        </ul>
        <h6>
          <strong>5. Update Dependencies:</strong>
        </h6>
        <ul>
          <li>
            Ensure that all your project dependencies are compatible with
            Angular v19. Update any third-party libraries and packages to their
            latest versions.
          </li>
        </ul>
        <h6>
          <strong>6. Review and Refactor Code:</strong>
        </h6>
        <ul>
          <li>
            Take this opportunity to review and refactor your codebase. Remove
            any unused imports and optimize your code to take advantage of the
            new features in Angular v19.
          </li>
        </ul>
        <h6>
          <strong>7. Enable Standalone Components:</strong>
        </h6>
        <ul>
          <li>
            If you haven’t already, consider migrating your components to
            standalone components. This will simplify your code and make it
            easier to manage.
          </li>
        </ul>
        <h6>
          <strong>8. Utilize New APIs:</strong>
        </h6>
        <ul>
          <li>
            Explore and utilize the new APIs introduced in Angular v19, such as
            Linked Signals and Resources , to improve state management and data
            handling in your application.
          </li>
        </ul>
        <h3 id="conclusion">
          <strong>Conclusion</strong>
        </h3>
        <p>
          Angular v19 is packed with features that make it easier to build fast,
          efficient, and secure web applications. Whether you’re a seasoned
          developer or just starting out, these updates will help you create
          better apps with less effort.
        </p>
        <p>
          Whether you’re a seasoned Angular developer or just starting out,
          Angular v19 offers tools and features that will help you build better,
          faster, and more secure web applications. Embrace these new updates
          and take your projects to the next level!
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

export default Angular19keyFeaturesImprovements;
