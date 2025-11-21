"use client";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { AppIcons } from "@/data/appIcons";
import Image from "next/image";
import ServiceFAQ from "@/components/serviceFAQ/ServiceFAQ";
import { blogConfig } from "@/data/blogs/embed-ai-in-web-apps";
import Link from "next/link";
import Iconify from "@/components/ui/icons/Iconify";

const VibeCoding = () => {
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
        <div className="blog-header-image mt-0">
          <Image
            src={AppIcons.EmbedIntoWebApp}
            alt="Embed AI in Web Apps Cover Image"
            loading="lazy"
            width={1280}
            height={640}
            style={{ height: "auto", cursor: "pointer" }}
            onClick={() =>
              handleImageClick(
                AppIcons.EmbedIntoWebApp,
                "Embed AI in Web Apps Cover Image"
              )
            }
          />
        </div>
        <h2 id="introduction">
          <strong>
            Step-by-Step Guide:{" "}
            <span>Embed AI in Web Apps Without Rewriting Your Stack</span>
          </strong>
        </h2>
        <p>
          Every web app eventually reaches a point where “good enough” UX is no
          longer enough.
        </p>
        <p>
          Users expect instant answers, personalized recommendations, and
          dashboards that clearly show what happened and what to do next.
        </p>
        <p>Embedding AI delivers all three—without a full-scale rebuild.</p>
        <p>
          If you&apos;re a developer, founder, or IT leader tasked with
          modernizing a production system, this guide will show you how to add
          AI features <strong>quickly, safely, and measurably</strong>.
        </p>
        <p>
          In the next 15 minutes, you&apos;ll discover a practical AI
          integration blueprint, real examples (AI chatbots, recommendations,
          sentiment analysis), comparisons of providers like{" "}
          <strong>OpenAI, Azure AI, and Hugging Face</strong>, and where AI APIs
          and SDKs fit into your architecture.
        </p>
        <p>
          You&apos;ll also get a rollout plan, pitfalls to avoid, and metrics to
          demonstrate value.
        </p>
        <p>
          <strong>Why now?</strong>
          AI is no longer a moonshot. Vendor SDKs are mature, streaming UX
          patterns are familiar, and edge runtimes enable privacy-preserving
          inference.
        </p>
        <p>
          Teams are embedding AI into React, Next.js, and legacy stacks in{" "}
          <strong>weeks—not quarters</strong>.
        </p>
<hr/>
        <h3 id="what-embedding-means">
          <strong>
            What <span> Embedding AI </span> Really Means ?
          </strong>
        </h3>
        <p>
          Most teams don&apos;t send out &quot;AI.&quot; They send out better
          experiences that are powered by AI models, usually through a simple
          API.
        </p>
        <p>
          Focus on changes that users can see and that lead to demonstrable
          results:
        </p>
        <ul>
          <li>
            <strong>AI chatbots</strong>
            that can answer queries, summarize content, and escalate when
            necessary are called{" "}
            <strong>&quot;conversational support.&quot;</strong>
          </li>
          <li>
            <strong>Personalization:</strong>
            Suggestions that change based on how you act.
          </li>
          <li>
            <strong>AI-powered analytics:</strong>
            Sentiment and intent classification that turn raw text into
            dashboards that can be used.
          </li>
        </ul>
<hr/>
        <h3 id="approaches">
          <strong>
            AI <span>Integration </span> Approaches
          </strong>
        </h3>
        <p>There are two ways to integrate:</p>
        <h4 className="mt-5">
          <strong> API-first</strong>
        </h4>
        <p className="mb-0 pl-5">
          Call managed models like <strong>Azure AI</strong>,{" "}
          <strong>OpenAI</strong>, and <strong>Hugging Face</strong>.
        </p>
        <p className="pl-5">
          Quickest, least amount of work, and prices that can be predicted.
        </p>
        <h4 className="mt-5">
          <strong> On-device or Edge</strong>
        </h4>
        <p className="mb-0 pl-5">
          For workflows that need minimal latency and privacy, run smaller
          models in the browser (<strong>TensorFlow.js</strong>,
          <strong>ONNX Runtime Web</strong>) or at the edge.
        </p>
        <p className="pl-5">
          <strong>API-first</strong>
          is the best way to start for most legacy and enterprise systems.
        </p>
        <p className="pl-5">Later, sensitive workloads can go to the edge.</p>
<hr/>
        <h3 id="step-guide">
          <strong>
            Step-by-Step <span>AI Integration Guide</span>
          </strong>
        </h3>
        <p>
          Building AI into your product isn&apos;t about adding another feature
          — it&apos;s about creating experiences that feel smarter and more
          human.
        </p>
        <p>
          Here&apos;s a simple, proven way to roll out AI capabilities safely
          and effectively.
        </p>

        <h4 className="mt-5">
          <strong>
            Choose a Single Use Case and <span>KPI</span>
          </strong>
        </h4>
        <div className="list-item-content-body">
          <p className="pl-5">
            Start small. Pick one page, one workflow, or one measurable outcome.
          </p>
          <p className="pl-5">
            Maybe you want to
            <strong> deflect 20% of support tickets</strong>,
            <strong> increase average session time by 10%</strong>, or
            <strong> reduce onboarding time by 30%</strong>.
          </p>
          <p className="pl-5">
            By focusing on one clear problem, you&apos;ll be able to show real
            impact quickly — and learn faster.
          </p>
          <p className="pl-5">
            Define measurable success criteria in your analytics tool (e.g.,
            conversions, resolution time, user satisfaction).
          </p>
          <p className="pl-5">
            <strong>Pro Tip:</strong>
            Don&apos;t start with “add AI.” Start with{" "}
            <strong>what needs to get better</strong>
            for your users.
          </p>
        </div>
        <h4 className="mt-5">
          <strong>
            Pick Your Provider and <span>Model</span>
          </strong>
        </h4>
        <div className="list-item-content-body">
          <p className="pl-5">Not all models are built for the same job.</p>
          <ul>
            <li>
              <strong>General-purpose LLMs</strong> like OpenAI or Azure OpenAI
              are great for
              <strong> chat, Q&A, summarization, and task automation.</strong>
            </li>
            <li>
              <strong>Domain-specific models</strong> from Hugging Face shine
              for
              <strong>
                {" "}
                classification, sentiment detection, and specialized tasks
              </strong>{" "}
              — often faster and cheaper.
            </li>
          </ul>
          <p className="pl-5">
            Also consider
            <strong> compliance and data residency</strong> — for example, use
            Azure AI with in-region hosting and content filtering if you&apos;re
            in a regulated industry.
          </p>
          <p className="pl-5">
            The best model isn&apos;t the biggest one — it&apos;s the one that
            balances performance, cost, and trust.
          </p>
        </div>
        <h4 className="mt-5">
          <strong>
            Design the Flow and <span>Architecture</span>
          </strong>
        </h4>
        <div className="list-item-content-body">
          <p className="pl-5">Your system design determines user experience.</p>
          <ul>
            <li>
              <strong>Frontend : </strong>
              Collect inputs, show typing or loading states, and stream
              responses in real time so the AI feels responsive.
            </li>
            <li>
              <strong>Backend : </strong>
              Act as a<strong> secure proxy</strong>— manage keys, add
              guardrails (prompt templates, content filters), and log all
              interactions.
            </li>
            <li>
              <strong>Data Layer : </strong>
              Optionally use a
              <strong>
                {" "}
                vector search or RAG (Retrieval-Augmented Generation)
              </strong>
              to fetch relevant company documents before calling the model.
            </li>
          </ul>
          <p className="pl-5">
            Think of this as giving your AI the right environment to think
            clearly and safely.
          </p>
        </div>
        <h4 className="mt-5">
          <strong>
            Secure Keys and <span>Protect PII</span>
          </strong>
        </h4>
        <div className="list-item-content-body">
          <p className="pl-5">
            AI is only as trustworthy as the data you protect.
          </p>
          <p className="pl-5">
            Always store
            <strong> API keys and credentials server-side</strong>, never in the
            browser or client app.
          </p>
          <p className="pl-5">Before sending data to an external model:</p>
          <ul>
            <li>
              <strong>Redact personally identifiable information (PII) </strong>
              like emails, IDs, or phone numbers.
            </li>
            <li>
              Use providers that include
              <strong> built-in moderation and filtering</strong>
              to prevent leaks.
            </li>
          </ul>
          <p className="pl-5">
            Security and privacy are what turn a clever demo into a deployable
            product.
          </p>
        </div>
        <h4 className="mt-5">
          <strong>
            Build a <span>Walking Skeleton</span>
          </strong>
        </h4>
        <div className="list-item-content-body">
          <p className="pl-5">
            Don&apos;t wait for perfection — ship something small but
            functional.
          </p>
          <p className="pl-5">
            Create the
            <strong> simplest end-to-end version</strong>
            that connects user input → AI response → result display.
          </p>
          <p className="pl-5">
            Launch it behind a<strong> feature flag</strong>
            for internal users first.
          </p>
          <p className="pl-5">
            This lets your team experiment, gather feedback, and fix edge cases
            early — without breaking production.
          </p>
          <p className="pl-5">
            It&apos;s easier to improve something real than plan something
            imaginary.
          </p>
        </div>
        <h4 className="mt-5">
          <strong>
            Instrument and <span>Observe</span>
          </strong>
        </h4>
        <div className="list-item-content-body">
          <p className="pl-5">
            Once live, treat your AI like a living system that needs
            observation.
          </p>
          <p className="pl-5">
            Track everything that helps you understand performance and value:
          </p>
          <ul className="pl-4">
            <li>Prompt success rates and error counts</li>
            <li>Response latency and token costs</li>
            <li>
              User satisfaction (thumbs-up/down, dwell time, feedback forms)
            </li>
            <li>Fallbacks or escalations to humans</li>
          </ul>
          <p className="pl-5">
            Good logging isn&apos;t overhead — it&apos;s your early warning
            system.
          </p>
        </div>
        <h4 className="mt-5">
          <strong>
            Iterate with <span>Evals and Feedback</span>
          </strong>
        </h4>
        <div className="list-item-content-body">
          <p className="pl-5">
            AI performance isn&apos;t static — it changes with model updates,
            data drift, and new user patterns.
          </p>
          <p className="pl-5">
            Keep a small
            <strong> evaluation (eval) suite</strong>
            of test prompts with expected outputs.
          </p>
          <p className="pl-5">
            Review regularly, adjust prompts, add retrieval logic, or fine-tune
            models once you have enough data.
          </p>
          <p className="pl-5">
            Each iteration should make the system smarter, faster, and more
            aligned with how real users behave.
          </p>
        </div>
        <h4 className="mt-5">
          <strong>Final Thought</strong>
        </h4>
        <p className="pl-5">
          AI integration is not a one-time setup — it&apos;s a continuous loop
          of
          <strong> build → observe → learn → improve</strong>.
        </p>
        <p className="pl-5">
          Start small, stay close to your users, and let measurable results
          guide your next step.
        </p>
        <p className="pl-5">
          That&apos;s how real products — not just prototypes — become
          intelligent.
        </p>
<hr/>
        <h3 id="architecture">
          <strong>
            Architecture <span>Patterns, AI APIs, and SDKs </span> You Can Trust
          </strong>
        </h3>
        <p>Choosing the right approach depends on your use case:</p>

        <div className="table-container-blazor-united-vs-nextjs">
          <table className="comparison-table-2">
            <thead>
              <tr>
                <th>
                  <strong>Approach</strong>
                </th>
                <th>
                  <strong>Pros</strong>
                </th>
                <th>
                  <strong>Use for</strong>
                </th>
                <th>
                  <strong>Tools</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>API-first via managed models</strong>
                </td>
                <td>
                  Highest quality, fastest to deploy, autoscaling, built-in
                  guardrails, supports tool calling.
                </td>
                <td>
                  Chat, summarization, complex reasoning, multilingual support.
                </td>
                <td>
                  OpenAI / Azure OpenAI, Hugging Face Inference, Cohere, Google
                  AI.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>
                    {" "}
                    Edge or in-browser inference (TensorFlow.js, ONNX Runtime
                    Web)
                  </strong>
                </td>
                <td>
                  Low latency, offline capabilities, privacy-friendly, no
                  per-call server cost.
                </td>
                <td>
                  Classification, on-device translation, simple recommendations.
                </td>
                <td>
                  TensorFlow.js, ONNX Runtime Web, WebGPU, WebNN, TFLite for
                  Web, Transformers.js
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Hybrid (RAG – Retrieval-Augmented Generation)</strong>
                </td>
                <td>
                  Retrieve the most relevant internal knowledge before calling
                  the model.
                </td>
                <td>
                  Policy Q&amp;A, developer documentation, product manuals.
                </td>
                <td>
                  LangChain, LlamaIndex, Pinecone, Weaviate, FAISS, Milvus,
                  ElasticSearch, Azure AI Search
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Data and analytics pipeline</strong>
                </td>
                <td>
                  Stream events to a data warehouse and apply AI-powered
                  analytics for sentiment, intent, and anomaly detection.
                </td>
                <td>
                  Voice of Customer pipelines, churn risk analysis, and other
                  business insights.
                </td>
                <td>
                  Apache Kafka, Airbyte, Snowflake, BigQuery, Databricks, AWS
                  Kinesis, dbt, Power BI, Looker, Tableau
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>Practical Tip:</strong>
          Streaming partial tokens to the UI reduces perceived latency and
          improves user experience.
        </p>
        <p>
          Many AI APIs and SDKs now support server-sent events or streaming
          responses;
        </p>
        <p>
          even a subtle “typing” effect can significantly reduce abandonment.
        </p>
<hr/>
        <h3 id="measuring-impact">
          <strong>
            Measuring Impact: <span>Before-and-After UX and Analytics</span>
          </strong>
        </h3>
        <p>Leaders fund what they can measure.</p>
        <p>
          Tie each AI feature to a clear business metric and visualize the
          results to demonstrate value.
        </p>
<hr/>
        <h3 id="pitfalls">
          <strong>
            Common Pitfalls in <span>AI Integration</span> (and How to Avoid
            Them)
          </strong>
        </h3>
        <p>
          Even well-intentioned teams can stumble when rolling out AI features.
        </p>
        <p>
          Most mistakes don&apos;t come from bad code — they come from skipping
          small safeguards or ignoring what scales.
        </p>
        <p>
          Here&apos;s how to stay on track and build responsibly from day one.
        </p>

        <h4 className="mt-5">
          <strong>
            Leaking Secrets in the <span>Frontend</span>
          </strong>
        </h4>
        <div className="list-item-content-body">
          <p className="pl-5">
            It&apos;s shockingly easy to leak API keys when experimenting. Never
            store provider credentials in the browser or client code.
          </p>
          <p className="pl-5">
            Instead, keep all secrets
            <strong> securely on your server</strong>
            and expose only a<strong> proxy endpoint</strong>
            with
            <strong> role-based access controls</strong>.
          </p>
          <p className="pl-5">
            Think of your backend as a gatekeeper — not just a messenger.
          </p>
        </div>

        <h4 className="mt-5">
          <strong>
            Prompt Injection and <span>Untrusted Inputs</span>
          </strong>
        </h4>
        <div className="list-item-content-body">
          <p className="pl-5">
            LLMs are persuasive but gullible. If you let users feed raw prompts
            without filters, they can trick the model into revealing sensitive
            info or executing unintended actions.
          </p>
          <p className="pl-5">
            Keep your system instructions
            <strong> strictly separated</strong>
            from user content.
          </p>
          <p className="pl-5">
            Use
            <strong> allow-lists</strong>
            for approved tool calls and data sources, and always wrap outputs in
            <strong> content filters</strong>
            or guardrails (e.g., “limit response to 150 words; include links
            only from company domains”).
          </p>
          <p className="pl-5">
            Treat every prompt as potentially malicious — not because users are
            bad, but because the model is too helpful.
          </p>
        </div>

        <h4 className="mt-5">
          <strong>
            Latency <span>Surprises</span>
          </strong>
        </h4>
        <div className="list-item-content-body">
          <p className="pl-5">
            A second feels like forever in chat. If your agent pauses too long,
            users lose confidence.
          </p>
          <p className="pl-5">
            Always
            <strong> stream responses</strong>
            in real time for conversational flows, and
            <strong> cache retrieval results</strong>
            for repeated queries.
          </p>
          <p className="pl-5">
            For high-volume classification jobs,
            <strong> batch requests</strong>
            or switch to a<strong> smaller, faster model</strong>
            to balance speed and cost.
          </p>
        </div>

        <h4 className="mt-5">
          <strong>
            Unbounded <span>Costs</span>
          </strong>
        </h4>
        <div className="list-item-content-body">
          <p className="pl-5">
            AI can get expensive fast if you don&apos;t plan ahead.
          </p>
          <p className="pl-5">
            Cap your
            <strong> maximum tokens</strong>
            per request, use
            <strong> cheaper models for non-critical tasks</strong>, and only
            <strong> sample a portion of logs</strong>
            for analytics.
          </p>
          <p className="pl-5">
            Tag every request by feature so you can track
            <strong> unit economics</strong>— understanding where your budget
            actually goes is part of good engineering hygiene.
          </p>
        </div>

        <h4 className="mt-5">
          <strong>
            Data Governance <span>Gaps</span>
          </strong>
        </h4>
        <div className="list-item-content-body">
          <p className="pl-5">
            Data privacy isn&apos;t optional. Redact
            <strong> personally identifiable information (PII)</strong>
            before sending to a model, use
            <strong> regional endpoints</strong>
            (especially with Azure AI), and define
            <strong> retention policies</strong>
            for logs and prompts.
          </p>
          <p className="pl-5">
            Having these controls in place makes compliance audits painless —
            and builds user trust.
          </p>
        </div>

        <h4 className="mt-5">
          <strong>
            Overfitting the <span>Prompt</span>
          </strong>
        </h4>
        <div className="list-item-content-body">
          <p className="pl-5">
            If you&apos;re tweaking prompts daily just to get the model to
            behave, it&apos;s time to zoom out.
          </p>
          <p className="pl-5">
            Add
            <strong> retrieval-augmented generation (RAG)</strong>
            or consider
            <strong> fine-tuning</strong>
            your model with domain data.
          </p>
          <p className="pl-5">
            Prompts shouldn&apos;t be fragile; they should scale gracefully as
            your app grows.
          </p>
        </div>

        <h4 className="mt-5">
          <strong>
            Skipping <span>Evaluation</span>
          </strong>
        </h4>
        <div className="list-item-content-body">
          <p className="pl-5">
            What you don&apos;t measure, you can&apos;t improve.
          </p>
          <p className="pl-5">
            Set up a<strong> small evaluation set</strong>
            early — even 20 examples is a start.
          </p>
          <p className="pl-5">
            Score outputs for
            <strong> relevance, factual accuracy, and tone</strong>, and review
            outliers weekly.
          </p>
          <p className="pl-5">
            This feedback loop is your early warning system before things break
            in production.
          </p>
        </div>

        <h4 className="mt-5">
          <strong> Key Takeaways</strong>
        </h4>
        <ul>
          <li>
            Treat
            <strong> security, latency, and cost control</strong>
            as first-class product features.
          </li>
          <li>
            Invest in
            <strong> evaluation and monitoring</strong>
            early — it pays for itself after your first refactor.
          </li>
        </ul>
<hr/>
        <h3 id="checklist">
          <strong>
            Rollout Checklist: From Prototype to <span>Production</span>
          </strong>
        </h3>
        <p>
          Once your AI assistant or feature works in a sandbox, it&apos;s time
          to scale responsibly.
        </p>
        <p>
          Here&apos;s a checklist to help you move from an internal test to
          confident production deployment — without losing sleep.
        </p>
        <h4 className="mt-5">
          <strong>
            <span>Product</span>
          </strong>
        </h4>
        <div className="list-item-content-body">
          <ul>
            <li>
              Define
              <strong> one use case</strong>,<strong> one KPI</strong>, and
              <strong> one accountable owner</strong>.
            </li>
            <li>
              Prepare
              <strong> clear success criteria</strong>
              and design an
              <strong> A/B test</strong>
              to validate real user impact.
            </li>
            <li>
              Focus on outcomes, not outputs — the goal is better user
              experience, not just “AI inside.”
            </li>
          </ul>
        </div>
        <h4 className="mt-5">
          <strong>
            <span>Engineering</span>
          </strong>
        </h4>
        <div className="list-item-content-body">
          <ul>
            <li>
              Implement a<strong> backend proxy</strong>
              for your AI provider with
              <strong> rate limits</strong>
              and
              <strong> observability</strong>.
            </li>
            <li>
              Support
              <strong> streaming responses</strong>
              for chat and
              <strong> graceful fallbacks</strong>
              for errors.
            </li>
            <li>
              Use
              <strong> feature flags</strong>
              to enable phased rollout and rollback safely.
            </li>
            <li>
              Your infrastructure should make experimentation safe — not
              stressful.
            </li>
          </ul>
        </div>
        <h4 className="mt-5">
          <strong>
            <span>Data</span>
          </strong>
        </h4>
        <div className="list-item-content-body">
          <ul>
            <li>
              Log
              <strong> prompts, responses, latency, and costs</strong>
              for traceability.
            </li>
            <li>
              Apply
              <strong> PII redaction</strong>
              and enforce a<strong> data retention policy</strong>.
            </li>
            <li>
              Maintain a<strong> living evaluation set</strong>
              and conduct
              <strong> weekly reviews</strong>
              to track drift or bias.
            </li>
            <li>Treat data as a lifecycle, not a byproduct.</li>
          </ul>
        </div>
        <h4 className="mt-5">
          <strong>
            <span>Compliance &amp; Risk</span>
          </strong>
        </h4>
        <div className="list-item-content-body">
          <ul>
            <li>
              Choose models that meet your
              <strong> data residency</strong>
              and
              <strong> compliance</strong>
              needs.
            </li>
            <li>
              Enable
              <strong> content filters</strong>
              and
              <strong> abuse detection</strong>
              for all user-generated inputs.
            </li>
            <li>Document your controls — future audits will thank you.</li>
          </ul>
        </div>
        <h4 className="mt-5">
          <strong>
            <span>Pilot &amp; Scale</span>
          </strong>
        </h4>
        <div className="list-item-content-body">
          <ul>
            <li>
              Start with an
              <strong> internal pilot</strong>, gather feedback, and monitor
              results closely.
            </li>
            <li>
              Expand gradually — first to
              <strong> 10% of traffic</strong>, then
              <strong> 50%</strong>— while keeping guardrails in place.
            </li>
            <li>
              <strong>Iterate weekly</strong>
              based on metrics and qualitative feedback.
            </li>
            <li>
              Slow rollouts build momentum safely — and help your team stay
              confident when the AI finally goes public.
            </li>
          </ul>
        </div>
        <h4 className="mt-5">
          <strong>Final Thought</strong>
        </h4>
        <p className="pl-5">
          Shipping AI isn&apos;t just about the model — it&apos;s about the
          <strong> discipline around it</strong>.
        </p>
        <p className="pl-5">
          Teams that monitor cost, latency, and accuracy as part of their
          product DNA ship faster, sleep better, and scale smarter.
        </p>
<hr/>
        <h3 id="insights">
          <strong>
            Fresh <span>Insights</span>
          </strong>
        </h3>
        <ul>
          <li>
            <strong>In-browser inference</strong>
            is now practical for lightweight tasks. Modern browsers leveraging
            WebAssembly and GPU acceleration can perform sentiment analysis or
            keyword extraction entirely client-side, enabling privacy-first use
            cases.
          </li>
          <li>
            <strong>Tool-augmented LLMs</strong>
            are gradually replacing fragile multi-service workflows. A single
            model with function-calling capabilities can determine when to query
            search, your CRM, or a pricing API—streamlining both code and observ
          </li>
        </ul>
<hr/>
        <h3 id="conclusion">
          <strong>Conclusion</strong>
        </h3>
        <p>
          Embedding AI isn&apos;t a rewrite—it&apos;s a series of small,
          measurable upgrades. Start with one use case tied to one KPI.
        </p>
        <p>
          Use a compliant provider, keep keys server-side, stream responses for
          speed, and measure everything.
        </p>
        <p>Iterate with an eval set and real user feedback.</p>
       
      </>
      <div className="separate-cta ">
        {/* <div className="icon-sec">
              <Image
                src={AppIcons.ctaBgCommonIcon}
                alt="CTA Icon Image"
                loading="lazy"
                priority={false}
                className="img-fluid"
              />
            </div> */}
        <div className="desc-sec ">
          <p>
            If you&apos;re ready to embed AI in web apps—chat, recommendations,
            or analytics—but want a pragmatic partner to go from demo to
            dependable, explore /services/ai-integration/
            or reach out via contact us.
          </p>

          <div className="button-sec">
            <Link rel="canonical" className="service-btn" href="/contact-us">
              <span>Let&apos;s Connect</span>
              <Iconify icon="weui:arrow-filled" width={20} />
            </Link>
          </div>
        </div>
      </div>
      <div id="faqs" className="blog-faq mt-5">
        <ServiceFAQ
          items={blogConfig.faqData.faqItems}
          title={blogConfig.faqData.faqTitle}
        />
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

export default VibeCoding;
