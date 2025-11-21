"use client";
import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Images from "../../image/Image";
import { AppIcons } from "@/data/appIcons";
import CodeBlockCustom from "@/components/codeBlock/CodeBlockCustom";
import Link from "next/link";
import Iconify from "../../ui/icons/Iconify";
import { blogConfig } from "@/data/blogs/events-and-delegates-csharp-dotnet-development";

const codeConfig = blogConfig.codeSnippets;

const EventDelegatesTemplate = () => {
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
        <div id="main-content">
          <div className="machinelearning-header-image">
            <Images
              imagePath={AppIcons.EventsandDelegatesinCsharp}
              altText="Events and Delegates in C#"
              onClick={() =>
                handleImageClick(
                  AppIcons.EventsandDelegatesinCsharp,
                  "Events and Delegates in C#"
                )
              }
              style={{ cursor: "pointer" }}
            />
          </div>
          <p id="introduction">
            In C#, <strong>events</strong> and <strong>delegates </strong>are
            key to creating flexible and responsive programs. Delegates,
            function similarly to method pointers, facilitating the calling of
            one method from another part of your code. Events employ delegates
            to inform other components of the program when an action occurs,
            such as a button being clicked. Utilizing events and delegates
            together enables the construction of programs that not only react to
            user interactions but also manage background tasks, thereby
            enhancing code organization and maintainability.
          </p>
          <p>
            This blog will cover what events and delegates are, how to use them,
            where and when to apply them, and the pros and cons of using them in
            C#.
          </p>
          <h3 id="what-are-delegates-and-events">
            <strong>What are Delegates and Events?</strong>
          </h3>
          <p>
            In C#, delegates and events help one part of a program tell other
            parts when something happens. This makes it easy to keep everything
            in sync, so when one thing changes, other parts know and can respond
            right away.
          </p>
          <p>
            Let’s see what is <strong>delegates</strong>?
          </p>
          <div className="blog-details-decpription-box">
            <p>
              <strong> Delegates is the Type Safe Function Pointer.</strong> (A{" "}
              <strong>type-safe function pointer </strong> let&apos;s you
              reference a method with a specific signature, ensuring correct
              parameter and return types in C#.)
            </p>
          </div>
          <p>
            A <strong>delegate</strong>, type-safe object that holds a{" "}
            <strong>reference to a method</strong>. It allows{" "}
            <strong>methods to be passed as parameters</strong>, making
            functions assignable dynamically at runtime.
          </p>
          <p>
            Type safety is a critical feature in programming that ensures a
            delegate can only be assigned methods with compatible signatures,
            thereby preventing errors.
          </p>
          <p>
            A delegate template in C# defines a specific method signature
            (parameter types and return type) without implementing the method.
          </p>
          <CodeBlockCustom
            code={codeConfig.delegateSyntaxExample}
            language="csharp"
          />

          <ul>
            <ul>
              <li>
                <p>
                  <span className="package-name"> public delegate</span>:
                  Declares a delegate with specified access level.
                </p>
              </li>
              <li>
                <p>
                  {" "}
                  <span className="package-name"> ReturnType</span>: The return
                  type the delegate expects.
                </p>
              </li>

              <li>
                <p>
                  {" "}
                  <span className="package-name"> DelegateName</span>: The name
                  of the delegate type
                </p>
              </li>
              <li>
                <p>
                  <span className="package-name">
                    {" "}
                    (ParameterType1 parameter1, ParameterType2 parameter2, ...)
                  </span>
                  : Defines the expected parameter types and order, ensuring
                  type safety.
                </p>
              </li>
            </ul>
          </ul>
          <p>
            let’s see what is <strong> event</strong>
          </p>

          <div className="blog-details-decpription-box">
            <p>
              Events in C# function as delegates with an added safety layer,
              allowing controlled method invocation.
            </p>
          </div>
          <p>
            An <strong>event </strong>is a type of delegate that controls who
            can trigger it. It let&apos;s other classes{" "}
            <strong>“subscribe”</strong> to receive updates from a main class,
            called the publisher. Only the publisher can start the event, while
            the other classes, known as subscribers, can only listen and
            respond. This setup ensures safe, one-way communication where
            subscribers get notified without being able to control the event.
          </p>
          <p>Here’s a template for an event in C#:</p>
          <CodeBlockCustom
            code={codeConfig.eventDeclarationExample}
            language="csharp"
          />

          <ul>
            <ul>
              <li>
                <p>
                  <strong className="package-name">public</strong>: Access
                  modifier that controls the event&apos;s visibility.
                </p>
              </li>
              <li>
                <p>
                  <strong className="package-name">event</strong>: Keyword
                  indicating that this is an event.
                </p>
              </li>
              <li>
                <p>
                  <strong className="package-name">DelegateType</strong>: The
                  type of delegate used for the event. This can be a predefined
                  delegate, like
                  <span className="package-name-light">EventHandler</span>, or a
                  custom delegate with a specific signature.
                </p>
              </li>
              <li>
                <p>
                  <strong className="package-name">EventName</strong>: The name
                  of the event, which should indicate its purpose or trigger.
                </p>
              </li>
            </ul>
          </ul>

          <h5>
            <strong>Example with Custom Delegate</strong>
          </h5>
          <CodeBlockCustom
            code={codeConfig.customEventExample}
            language="csharp"
          />

          <p>
            This template guarantees that only methods matching the{" "}
            <strong>DelegateType signature</strong> can be attached to the
            event, ensuring controlled and type-safe handling of events.
          </p>

          <h3 id="how-to-use-events-and-delegates">
            <strong>How to Use Events and Delegates?</strong>
          </h3>
          <h5>
            <strong>Using Delegates</strong>
          </h5>
          <p>To use delegates effectively:</p>

          <ul>
            <ul>
              <li>
                <p>
                  <strong className="package-name">Define the Delegate</strong>:
                  Specify the method signature using the{" "}
                  <strong className="package-name">delegate</strong> keyword.
                </p>
              </li>
              <li>
                <p>
                  <strong className="package-name">Create an Instance</strong>:
                  Instantiate the delegate and assign it a method that matches
                  the signature.
                </p>
              </li>
              <li>
                <p>
                  <strong className="package-name">Invoke the Delegate</strong>:
                  Invoke the delegate to call the assigned method.
                </p>
              </li>
            </ul>
          </ul>
          <p>
            For Example, using a delegate to perform various arithmetic
            operations
          </p>
          <CodeBlockCustom
            code={codeConfig.delegateOperationExample}
            language="csharp"
          />

          <p>Let’s understand example</p>
          <ol>
            <li>
              <p>
                <strong>Delegate Declaration</strong>:{" "}
                <span className="package-name-light">Operation</span> is
                declared as a delegate that points to methods with two int
                parameters and an{" "}
                <span className="package-name-light">int</span> return type.
              </p>
            </li>
            <li>
              <p>
                {" "}
                <strong>Method Definitions</strong>:{" "}
              </p>
              <ul>
                <li>
                  <p>
                    <strong>Arithmetic Methods</strong>:{" "}
                    <span className="package-name-light">Add</span>,{" "}
                    <span className="package-name-light">Subtract</span>, and{" "}
                    <span className="package-name-light">Multiply</span> are
                    methods matching the{" "}
                    <span className="package-name-light">Operation</span>{" "}
                    delegate signature, allowing them to be passed as
                    parameters.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>ExecuteOperation Method</strong>: This method
                    accepts two <span className="package-name-light">int</span>{" "}
                    values and an{" "}
                    <span className="package-name-light">Operation</span>{" "}
                    delegate as parameters. It calls the delegate method passed
                    to it with <span className="package-name-light">x</span> and{" "}
                    <span className="package-name-light">y</span> as arguments.
                  </p>
                </li>
              </ul>
            </li>

            <li>
              <p>
                <strong>Using ExecuteOperation</strong>: In{" "}
                <span className="package-name-light">Main</span>, we call{" "}
                <span className="package-name-light">ExecuteOperation</span>{" "}
                with different operations (
                <span className="package-name-light">Add</span>,{" "}
                <span className="package-name-light">Subtract</span>,{" "}
                <span className="package-name-light">Multiply</span>) and print
                the results.
              </p>
            </li>
          </ol>

          <p>
            In the above example, delegates are used as{" "}
            <strong>function pointers</strong> to{" "}
            <strong>reference specific methods</strong> and to{" "}
            <strong>pass methods as parameters</strong>, allowing dynamic
            selection and execution of operations at runtime.
          </p>
          <h6>
            <strong>Using Events</strong>
          </h6>
          <p>To effectively use events:</p>
          <ul>
            <ul>
              <li>
                <p>
                  <strong>Declare an Event</strong>: Declare an event with a
                  delegate.
                </p>
              </li>
              <li>
                <p>
                  <strong>Subscribe</strong>: Another class can subscribe to
                  this event using{" "}
                  <span className="package-name-light">+=</span>.
                </p>
              </li>
              <li>
                <p>
                  <strong>Raise the Event</strong>: Use Invoke to raise the
                  event within the publisher.
                </p>
              </li>
              <li>
                <p>
                  <strong>Unsubscribe</strong>: Always unsubscribe when finished
                  to avoid memory leaks.
                </p>
              </li>
            </ul>
          </ul>
          <p>
            Let’s build upon the delegate example from the arithmetic case by
            incorporating an event to alert subscribers each time an operation
            is executed.
          </p>
          <CodeBlockCustom
            code={codeConfig.delegateWithEventExample}
            language="csharp"
          />

          <p>
            <strong>Let’s understand this example</strong>
          </p>
          <ol>
            <li>
              <p>
                <strong>ExecuteOperation Method:</strong>
              </p>
              <ul>
                <li>
                  <p>
                    This method takes two numbers and an{" "}
                    <span className="package-name-light">Operation</span>{" "}
                    delegate (e.g.,{" "}
                    <span className="package-name-light">Add</span>,{" "}
                    <span className="package-name-light">Subtract</span>, or{" "}
                    <span className="package-name-light">Multiply</span>
                    ).
                  </p>
                </li>
                <li>
                  <p>
                    It performs the operation and then raises the{" "}
                    <span className="package-name-light">
                      OnOperationPerformed
                    </span>{" "}
                    event to notify any subscribers.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <p>
                <strong>Event Subscription:</strong>
              </p>
              <ul>
                <li>
                  <p>
                    In <span className="package-name-light">Main</span>, we
                    subscribe to{" "}
                    <span className="package-name-light">
                      OnOperationPerformed
                    </span>{" "}
                    using a lambda function.
                  </p>
                </li>
                <li>
                  <p>
                    This function prints a message whenever the event is
                    triggered, showing the input values.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <p>
                <strong> Performing Operations:</strong>
              </p>
              <ul>
                <li>
                  <p>
                    We call{" "}
                    <span className="package-name-light">ExecuteOperation</span>{" "}
                    with different operations (
                    <span className="package-name-light">Add</span>,{" "}
                    <span className="package-name-light">Subtract</span>,{" "}
                    <span className="package-name-light">Multiply</span>
                    ).
                  </p>
                </li>
                <li>
                  <p>
                    Each time it’s called,{" "}
                    <span className="package-name-light">
                      OnOperationPerformed
                    </span>{" "}
                    is triggered, notifying subscribers with the inputs used in
                    the operation.
                  </p>
                </li>
              </ul>
            </li>
          </ol>
          <p>
            Here’s a simple example that demonstrates how an event works in C#
          </p>

          <CodeBlockCustom
            code={codeConfig.actionEventExample}
            language="csharp"
          />

          <h6>
            <strong>usage:</strong>
          </h6>

          <CodeBlockCustom
            code={codeConfig.eventSubscriptionExample}
            language="csharp"
          />

          <p>
            In this example,{" "}
            <span className="package-name-light">ProcessCompleted</span>{" "}
            notifies <span className="package-name-light">EventSubscriber</span>{" "}
            when <span className="package-name-light">StartProcess</span>{" "}
            completes, without tightly coupling the classes.
          </p>

          <h3 id="when-to-use-events-and-delegates">
            <strong>When Should You Use Events and Delegates?</strong>
          </h3>
          <p>Events and delegates are most useful in these scenarios:</p>
          <ul>
            <li>
              <p>
                <strong>Decoupling Components (Loose Coupling)</strong>: Ideal
                when you need communication between classes without introducing
                direct dependencies.
              </p>
            </li>
            <li>
              <p>
                <strong>Callback Mechanisms</strong>: Delegates allow you to
                create flexible callback systems where a method is passed as a
                parameter and invoked later.
              </p>
            </li>
            <li>
              <p>
                <strong>Asynchronous Notifications</strong>: Events work well
                for notifying subscribers about task completions or state
                changes in a responsive, event-driven way.
              </p>
            </li>
            <li>
              <p>
                <strong>Publisher and Subscriber Patterns</strong>: In
                applications where publisher and subscriber scenarios are
                needed, these can be implemented using design patterns.
              </p>
            </li>
          </ul>

          <h3 id="where-are-events-and-delegates-used">
            <strong>Where are Events and Delegates Used?</strong>
          </h3>
          <p>Most common usage as per below:</p>
          <ul>
            <li>
              <p>
                <strong>User Interface</strong>: Handle user actions like button
                clicks and form submissions.
              </p>
            </li>
            <li>
              <p>
                <strong>Asynchronous Processing</strong>: Notify when background
                tasks, like file downloads or data loading, are complete.
              </p>
            </li>
            <li>
              <p>
                <strong>Observer Pattern</strong>: Alert parts of an app about
                changes, e.g., stock price updates in a trading app.
              </p>
            </li>
            <li>
              <p>
                <strong>Logging and Monitoring</strong>: Centralize logging,
                error tracking, or performance monitoring.
              </p>
            </li>
            <li>
              <p>
                <strong>Game Development</strong>: Manage events like scoring,
                level completion, or character movements.
              </p>
            </li>
            <li>
              <p>
                <strong>Data Binding</strong>: Sync changes between a model and
                UI for real-time updates.
              </p>
            </li>
          </ul>
          <p>Some more use case:</p>
          <ol>
            <li>
              <p>
                <strong>Plugin/Extension Systems</strong>:{" "}
              </p>
              <ul>
                <li>
                  <p>
                    <strong>Example:</strong> In applications with plugins, use
                    events to allow plugins to respond to core application
                    events.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <p>
                <strong>Data Validation and Business Rules</strong>:{" "}
              </p>
              <ul>
                <li>
                  <p>
                    <strong>Example:</strong> Use delegates to pass custom
                    validation functions into classes, allowing flexible and
                    reusable data validation.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <p>
                <strong>Observable Collections</strong>:{" "}
              </p>
              <ul>
                <li>
                  <p>
                    <strong>Example:</strong> Use the ObservableCollection class
                    in C#, which has a CollectionChanged event to notify
                    listeners whenever items in the collection change. This is
                    useful for real-time data updates in UI components.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <p>
                <strong>Custom Event Notification</strong>:{" "}
              </p>
              <ul>
                <li>
                  <p>
                    <strong>Example:</strong> Create a custom event to notify
                    other parts of your application about specific changes or
                    actions.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <p>
                <strong>Asynchronous Task Completion</strong>:{" "}
              </p>
              <ul>
                <li>
                  <p>
                    <strong>Example:</strong> Use events to notify the main
                    thread when a background task is completed, such as data
                    loading or file downloading. This keeps the UI responsive
                    while handling asynchronous operations.
                  </p>
                </li>
              </ul>
            </li>
          </ol>

          <h3 id="advantages-and-disadvantages">
            <strong>
              Advantages and Disadvantages of Events and Delegates
            </strong>
          </h3>
          <h4>
            <strong>Pors</strong>
          </h4>
          <ul>
            <li>
              <p>
                <strong>Loose Coupling</strong>: Enables independent
                communication between components for better modularity.
              </p>
            </li>
            <li>
              <p>
                <strong>Encapsulation</strong>: Restricts event triggering to
                the owning class, ensuring safety.
              </p>
            </li>
            <li>
              <p>
                <strong>Asynchronous Support</strong>: Ideal for interactive and
                responsive event-driven programming.
              </p>
            </li>
            <li>
              <p>
                <strong>Reusability</strong>: Delegates allow dynamic method
                referencing, making code flexible and reusable.
              </p>
            </li>
            <li>
              <p>
                <strong>Integration with Built-in Frameworks</strong>: C#
                frameworks like WPF, WinForms, and ASP.NET heavily rely on
                events, making them a natural fit for handling UI and other
                interactive scenarios.
              </p>
            </li>
            <li>
              <p>
                <strong>Customizable Event Handling</strong>: Developers can
                define and handle custom events tailored to their specific
                application requirements.
              </p>
            </li>
            <li>
              <p>
                <strong>Dynamic Behavior</strong>: Delegates allow methods to be
                assigned or changed at runtime, enabling dynamic behavior in
                your applications.
              </p>
            </li>
          </ul>
          <h4>
            <strong>Cons</strong>
          </h4>
          <ul>
            <li>
              <p>
                <strong>Memory Leaks</strong>: Failing to unsubscribe from
                events can cause memory leaks, as the event keeps a reference to
                the subscriber.
              </p>
            </li>
            <li>
              <p>
                <strong>Debugging Challenges</strong>: Indirect control flow
                through events can make it harder to trace and identify the
                source of a call.
              </p>
            </li>
            <li>
              <p>
                <strong>Performance Impact</strong>: Events and delegates add a
                minor performance overhead due to their abstraction layer.
              </p>
            </li>
            <li>
              <p>
                <strong>Maintenance Issues</strong>: Excessive use of events can
                complicate code, making it harder to follow, debug, and
                maintain.
              </p>
            </li>
          </ul>
          <h3 id="conclusion">
            <strong>Conclusion</strong>
          </h3>
          <p>
            Events and delegates are powerful C# features that enhance
            modularity, responsiveness, and scalability, ideal for asynchronous
            programming, UI interactions, and observer patterns. Use them wisely
            to build robust, loosely coupled systems while avoiding pitfalls
            like memory leaks and debugging challenges.
          </p>

          {/* blog content ends here */}
        </div>

        <div className="separate-cta cross-paltform">
          <div className="icon-sec">
            <Images imagePath={AppIcons.ctaBgCommonIcon} altText="icon" />
          </div>
          <div className="desc-sec">
            <p>
              Want to see how AI-augmented .NET is transforming fintech? <br />
              <br />
              Book a free chat with Moltech Solutions Inc.—learn how to build
              real-time, secure, and compliant payment platforms with AI-driven
              fraud detection, ML.NET, ONNX Runtime, and scalable .NET
              architectures.
            </p>
            <div className="button-sec">
              <Link rel="canonical" className="service-btn" href="/contact-us">
                <span>Let&apos;s Connect</span>
                <Iconify icon="weui:arrow-filled" width={20} />
              </Link>
            </div>
          </div>
        </div>
      </>

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

export default EventDelegatesTemplate;
