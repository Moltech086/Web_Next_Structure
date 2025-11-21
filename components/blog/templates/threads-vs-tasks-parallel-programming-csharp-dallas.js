"use client";
import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { AppIcons } from "@/data/appIcons";
import CodeBlockCustom from "@/components/codeBlock/CodeBlockCustom";
import { blogConfig } from "@/data/blogs/threads-vs-tasks-parallel-programming-csharp-dallas";
import Image from "next/image";

const codeConfig = blogConfig.codeSnippets;
const csharpThreadingExample = codeConfig.csharpThreadingExample;
const csharpMultiThreadUpload = codeConfig.csharpMultiThreadUpload;
const asyncHttpExample = codeConfig.asyncHttpExample;
const fileProcessingExample = codeConfig.fileProcessingExample;

const ThreadsVsTasksTemplate = () => {
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
        <div className="machinelearning-header-image">
          <Image
            src={AppIcons.ThreadCoverImg}
            alt="Threads or Tasks? The Parallel Programming in C Sharp"
            loading="lazy"
            width={1280}
            height={640}
            style={{ height: "auto", cursor: "pointer" }}
            onClick={() =>
              handleImageClick(
                AppIcons.ThreadCoverImg,
                "Threads or Tasks? The Parallel Programming in C Sharp"
              )
            }
          />
        </div>{" "}
        <div className="blog-details-decpription-box">
          <p>
            In the world of modern application development, parallel programming
            is a must to make the most of multi-core processors. For C#
            developers, the choice often boils down to using{" "}
            <strong>Threads</strong> or <strong>Tasks</strong>. Both are key to
            achieving concurrency and parallelism, but knowing what sets them
            apart, as well as their respective advantages and limitations, is
            crucial for mastering efficient C# programming.
          </p>
        </div>
        <h3 id="what-is-a-thread">
          <strong>What is a Thread?</strong>
        </h3>
        <p>
          A Thread is the <strong>smallest unit</strong> of execution in a
          process. It operates independently and is managed directly by the
          operating system.
        </p>
        <ul>
          <li>
            <p>
              <strong>Thread:</strong> <strong>Smallest unit</strong> of
              execution in a process.
            </p>
          </li>
          <li>
            <p>
              <strong>Independent operation:</strong> Executes independently
              within the process.
            </p>
          </li>
          <li>
            <p>
              <strong>Process:</strong> A Thread is part of a larger process.
            </p>
          </li>
          <li>
            <p>
              <strong>OS-managed:</strong> Directly controlled by the operating
              system.
            </p>
          </li>
        </ul>
        <p>
          <strong>Creating and Using a Thread in C#</strong>
        </p>
        <CodeBlockCustom code={csharpThreadingExample} language="csharp" />
        <ul>
          <li>
            <p>
              <strong>Creating a Thread:</strong>{" "}
              <span className="package-name-light">
                {" "}
                <strong>Thread </strong> Thread newThread = new
                <strong>Thread </strong>(PrintMessage);
              </span>{" "}
              creates a thread to execute the{" "}
              <span className="package-name-light">PrintMessage</span> method.
            </p>
          </li>
          <li>
            <p>
              <strong>Starting a Thread:</strong>{" "}
              <span className="package-name">newThread.Start();</span> starts
              the execution of the{" "}
              <span className="package-name-light">PrintMessage</span> method on
              a new thread.
            </p>
          </li>
          <li>
            <p>
              <strong>Thread Sleep:</strong>{" "}
              <span className="package-name-light">
                <strong> Thread.Sleep</strong>(1000);
              </span>{" "}
              pauses the thread for 1 second, simulating some work.
            </p>
          </li>
          <li>
            <p>
              <strong>Concurrency:</strong> The{" "}
              <span className="package-name-light">PrintMessage</span> method
              runs on a separate thread while the{" "}
              <span className="package-name-light">Main</span> method runs on
              the main thread.
            </p>
          </li>
          <li>
            <p>
              <strong>Joining a Thread:</strong>{" "}
              <span className="package-name">newThread.Join();</span> ensures
              that the main thread waits for the new thread to finish before
              proceeding.
            </p>
          </li>
        </ul>
        <h3 id="what-is-a-task">
          <strong>What is a Task?</strong>
        </h3>
        <p>
          A <strong>task</strong> is a high-level abstraction for a unit of work
          that can execute <strong>asynchronously</strong>, managed by{" "}
          <strong>modern programming frameworks</strong>, which handle{" "}
          <strong>thread management</strong> internally.
        </p>
        <ul>
          <li>
            <p>
              <strong>Task:</strong> Represents a unit of work
            </p>
          </li>
          <li>
            <p>
              <strong>High-level abstraction:</strong> Simplifies handling
              asynchronous operations.
            </p>
          </li>
          <li>
            <p>
              <strong>Asynchronous execution:</strong> Runs independently
              without blocking the main thread.
            </p>
          </li>
          <li>
            <p>
              <strong>Internal thread handling:</strong> Abstracts complexity of
              threads.
            </p>
          </li>
        </ul>
        <h3 id="key-differences">
          <strong>Key Differences:</strong>
        </h3>
        <Image
          src={AppIcons.KeyDifferences}
          alt="Key Differences"
          loading="lazy"
          priority={false}
          width={738}
          height={521}
          style={{ height: "auto" }}
        />
        <h3>
          <strong>Relationship Between Tasks and Threads in C#:</strong>
        </h3>
        <ul>
          <ul>
            <li>
              <p>
                <strong>Tasks Use Threads Internally:</strong> Tasks do not
                create new Threads directly but rely on the{" "}
                <strong>ThreadPool</strong> or existing Threads for execution.
              </p>
            </li>
            <li>
              <p>
                <strong>Task = Logical Representation,</strong> which can run
                asynchronously or concurrently.
              </p>
            </li>
            <li>
              <p>
                <strong>Thread = Physical Execution,</strong> that runs the code
                on the CPU
              </p>
            </li>
          </ul>
        </ul>
        <h3 id="when-to-use-threads">
          <strong>When to Use Threads?</strong>
        </h3>
        <p>
          Threads are ideal when you need low-level control and parallel
          execution for tasks requiring long-running or independent operations.
          <br />
          Below are specific scenarios and use cases:
        </p>
        <p>
          <strong>Example Use Case:</strong> Long-Running Background Tasks: When
          a task takes considerable time (e.g., file upload, data processing)
          and you want to keep the main application responsive.
        </p>
        <CodeBlockCustom code={csharpMultiThreadUpload} language="csharp" />
        <ul>
          <li>
            <p>
              <strong>Long-Running Task:</strong> The{" "}
              <span className="package-name-light">UploadFile</span> method
              simulates a file upload. Running it on a separate Thread ensures
              the main application remains responsive.
            </p>
          </li>
          <li>
            <p>
              The <span className="package-name-light">MonitorNetwork</span>{" "}
              method continuously checks network status on a background Thread (
              <span className="package-name-light">IsBackground = true</span>)
              so it doesn’t block application termination.
            </p>
          </li>
          <li>
            <p>
              Threads provide control over task execution, such as making{" "}
              <span className="package-name-light">monitorThread</span> a
              background Thread.
            </p>
          </li>
        </ul>
        <p>
          <strong>Another potential use case could be:</strong>
        </p>
        <ul>
          <li>
            <p>
              <strong>Multi-Client Server:</strong> Threads are essential for
              building servers that handle multiple client connections
              simultaneously.
            </p>
          </li>
          <li>
            <p>
              <strong>Parallel Processing:</strong> Threads can divide
              computationally heavy workloads (e.g., image processing, matrix
              operations) into smaller tasks executed concurrently.
            </p>
          </li>
          <li>
            <p>
              <strong>Real-Time Data Processing:</strong> Threads are useful
              when you need to process data continuously in real-time, such as
              sensor data from IoT devices or log file monitoring.
            </p>
          </li>
        </ul>
        <p>
          <strong>When Not to Use Threads:</strong>
        </p>
        <ul>
          <li>
            <p>
              Avoid threads for quick tasks; prefer{" "}
              <span className="package-name-light">Task</span>,{" "}
              <span className="package-name-light">async/await</span>, or thread
              pools.
            </p>
          </li>
          <li>
            <p>
              For high scalability, avoid threads since they are limited by the
              number of OS threads.
            </p>
          </li>
          <li>
            <p>
              In UI applications, use higher-level abstractions (e.g.,
              BackgroundWorker or{" "}
              <span className="package-name-light">Task</span>) to avoid
              complexity and potential deadlocks.
            </p>
          </li>
        </ul>
        <h3 id="when-to-use-tasks">
          <strong>When to Use Tasks:</strong>
        </h3>
        <p>Tasks are preferred in most scenarios:</p>
        <ul>
          <li>
            <p>
              For <strong>short-lived operations</strong> where efficient use of
              threads is critical.
            </p>
          </li>
          <li>
            <p>
              When you need <strong>return values</strong> from parallel
              operations.
            </p>
          </li>
          <li>
            <p>
              For clean and maintainable code using <strong>async/await</strong>
              .
            </p>
          </li>
          <li>
            <p>
              When <strong>exception handling</strong> and continuation tasks
              are required.
            </p>
          </li>
        </ul>
        <p>
          <strong>Example Use Case:</strong> Asynchronous Operations,
          Downloading Data from a Web API.
          <strong>Tasks</strong> help us to simplify managing asynchronous work
          with
          <strong> async/await</strong>.
        </p>
        <CodeBlockCustom code={asyncHttpExample} language="csharp" />
        <p>
          When you need to perform non-blocking I/O operations, such as
          reading/writing files, calling APIs, or database queries, you can use
          the above example using async and await.
        </p>
        <p>
          <strong>Another potential use case could be :</strong>
        </p>
        <ul>
          <li>
            <p>
              <strong>Parallel Execution of Multiple Tasks:</strong> When you
              need to run multiple independent tasks concurrently, it simplifies
              code for running parallel operations and aggregating results. For
              scenarios like parallel computations or batch processing where
              tasks are independent.
            </p>
          </li>
          <li>
            <p>
              <strong>Lightweight Background Work:</strong> When you need to
              offload short-lived work without blocking the main thread. Tasks
              are lightweight compared to threads and suitable for smaller
              operations.
            </p>
          </li>
          <li>
            <p>
              <strong>Task Chaining:</strong> When a series of dependent
              operations need to be executed asynchronously. Simplifies chaining
              operations using{" "}
              <span className="package-name-light">ContinueWith</span> or{" "}
              <span className="package-name-light">await</span>.
            </p>
          </li>
          <li>
            <p>
              <strong>Scalability in Web Applications:</strong> For server-side
              applications (e.g., ASP.NET), tasks improve scalability by freeing
              up threads for other requests. Non-blocking operations allow the
              server to handle more concurrent requests.
            </p>
          </li>
        </ul>
        <h3 id="when-not-to-use-tasks">
          <strong>When Not to Use Tasks</strong>
        </h3>
        <ol>
          <li>
            <p>
              <strong>Long-Running Operations:</strong>
            </p>
          </li>
          <li>
            <p>
              <strong>Real-Time Operations:</strong> Use{" "}
              <span className="package-name-light">Thread</span> for real-time
              systems requiring predictable execution timing.
            </p>
          </li>
          <li>
            <p>
              <strong>Low-Level Resource Management:</strong> Tasks abstract
              thread handling, so use{" "}
              <span className="package-name-light">Thread</span> when managing
              resources directly (e.g., sockets, hardware).
            </p>
          </li>
        </ol>
        <h3 id="real-world-thread-task-usage">
          <strong>How do we use both in real-world scenarios?</strong>
        </h3>
        <p>
          <strong>Real-World Example: File Processing System:</strong>
        </p>
        <p>
          In a real-world scenario, consider a{" "}
          <strong>file processing system</strong> where multiple files need to
          be downloaded from a server, processed, and then uploaded to another
          system. Here’s how you can combine Threads and Tasks effectively:
        </p>
        <ol>
          <li>
            <p>Use threads for long-running file download operations.</p>
          </li>
          <li>
            <p>
              Use tasks for short-lived processing of file content (e.g.,
              parsing or encryption).
            </p>
          </li>
        </ol>
        <CodeBlockCustom code={fileProcessingExample} language="csharp" />
        <p>
          <strong>Explanation:</strong>
        </p>
        <ul>
          <li>
            <p>
              <strong>File Download (Thread):</strong> Each file download runs
              on a separate thread because it’s a long-running I/O-bound
              operation.
            </p>
          </li>
          <li>
            <p>
              <strong>File Processing (Task):</strong> File processing runs as
              tasks because it’s CPU-bound and benefits from lightweight task
              management.
            </p>
          </li>
          <li>
            <p>
              <strong>Hybrid Approach:</strong> Threads handle the
              resource-intensive download operations, while tasks handle the
              parallel processing of files.
            </p>
          </li>
        </ul>
        <p>
          This approach balances the strengths of both threads and tasks,
          ensuring efficient resource utilization and scalable design.
        </p>
        <h3 id="conclusion">
          <strong>Conclusion</strong>
        </h3>
        <ul>
          <li>
            <p>
              <strong>Threads</strong> offer granular control over concurrency
              and are ideal for long-running, resource-intensive operations.
            </p>
          </li>
          <li>
            <p>
              <strong>Tasks</strong> simplify development with high-level
              abstractions, efficient resource management, and built-in
              exception handling, making them suitable for short-lived, scalable
              concurrency.
            </p>
          </li>
          <li>
            <p>
              <strong>Combine Threads and Tasks</strong> for hybrid solutions to
              leverage their strengths effectively.
            </p>
          </li>
        </ul>
        <p>
          By mastering both, you can create efficient, maintainable, and
          scalable C# applications that harness the full power of parallel
          programming.
        </p>
      </div>

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

export default ThreadsVsTasksTemplate;
