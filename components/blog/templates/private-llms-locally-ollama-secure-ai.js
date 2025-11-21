"use client";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { AppIcons } from "@/data/appIcons";
import Image from "next/image";
import ServiceFAQ from "@/components/serviceFAQ/ServiceFAQ";
import { blogConfig } from "@/data/blogs/private-llms-locally-ollama-secure-ai";
import Link from "next/link";
import Iconify from "@/components/ui/icons/Iconify";
import CodeBlockCustom from "@/components/codeBlock/CodeBlockCustom";

const scriptExample5 = `FROM mistral
SYSTEM You are a privacy-first assistant. Never send data outside the local environment. Answer concisely.`;
const scriptExample6 = `ollama create privacy-bot -f Modelfile
ollama run privacy-bot`;
const scriptExample7 = `curl -s http://localhost:11434/api/generate -d '{"model": "llama3:8b", "prompt": "List three controls for SOC 2 data access."}'
`;
const scriptExample8 = `import requests, json
resp = requests.post(
    "http://localhost:11434/api/generate",
    json={"model": "mistral", "prompt": "Draft a data retention policy intro."},
    timeout=120
)
for line in resp.iter_lines():
    if line:
        print(json.loads(line)["response"], end="")
`;
const scriptExample9 = `import fetch from "node-fetch";
const res = await fetch("http://localhost:11434/api/generate", {
  method: "POST",
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify({
    model: "phi3:mini",
    prompt: "Explain zero trust to a non-technical stakeholder in 3 bullet points."
  })
});
for await (const chunk of res.body) process.stdout.write(chunk);
`;

// Placeholder for a custom CodeBlock component (assuming it exists in the user's project)

const PrivateLLMsLocallyOllama = () => {
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
      <div className="blog-header-image mt-0">
        <Image
          src={AppIcons.PrivateLlm}
          alt=" Running Private LLMs Locally with Ollama Cover Image"
          loading="lazy"
          width={1280}
          height={640}
          style={{ height: "auto", cursor: "pointer" }}
          onClick={() =>
            handleImageClick(
              AppIcons.PrivateLlm,
              " Running Private LLMs Locally with Ollama Cover Image"
            )
          }
        />
      </div>

      <div className="blog-content-container">
        <h2 id="introduction">
          <strong>
            Running Private LLMs Locally with <span>Ollama</span>: A Secure
            Alternative to Cloud AI
          </strong>
        </h2>
        <p>
          CIOs and security teams want AI capabilities without the compliance
          and vendor risks associated with public clouds. Developers need fast,
          flexible tooling without waiting for GPU availability.{" "}
          <strong>
            Running Private LLMs Locally with Ollama hits the sweet spot: you
            keep data on-prem, reduce latency, and control
            costs&apos;&ndash;without compromising modern language model
            performance.
          </strong>
        </p>
        <p>
          This article explains what Ollama is, who it&apos;s for, and where it
          fits. You&apos;ll learn how to set it up in minutes, run models like
          Llama 3, Mistral, and Phi locally, and tailor them for enterprise
          workloads. We&apos;ll also cover regulated industry use cases and
          demonstrate how Moltech designs secure on-prem and edge AI systems
          that scale.
        </p>
        <hr></hr>
        <h3 id="what-is-ollama">
          <strong>
            What Is Ollama? The <span>Engine</span> Behind Local LLMs
          </strong>
        </h3>
        <p>
          Ollama is an open-source runtime and package manager for large
          language models that runs entirely on your machine or within your
          network. Think of it as Homebrew for LLMs with a lightweight inference
          server. It provides:
        </p>
        <ul className="pl-4">
          <li>One-line installation and model pulls/updates</li>
          <li>A local REST API for app integration</li>
          <li>
            Support for GGUF model formats and quantization for modest hardware
          </li>
          <li>
            Cross-platform acceleration (Apple Silicon/Metal, NVIDIA CUDA, or
            CPU-only)
          </li>
        </ul>
        <hr></hr>
        <h3 id="use-cases">
          <strong>
            Where It&apos;s <span>Used </span> ? 
          </strong>
        </h3>
        <p>
          Running large language models locally with Ollama opens up new
          possibilities for teams that need AI without depending on external
          cloud providers. From developer laptops to high-security data centers,
          local LLMs give you{" "}
          <strong>control, privacy, and predictability</strong> exactly what
          modern organizations need.
        </p>
        <p>Here&apos;s where Ollama-powered setups shine:</p>

        <h4>
          <strong>
            {" "}
            Developer Laptops <span>Prototyping</span> and Secure
            Experimentation
          </strong>
        </h4>
        <p className="pl-5">
          Developers can run models like Llama 3, Mistral, or Phi-3 directly on
          their machines using Ollama, no cloud access required. This allows
          teams to <strong>prototype chatbots, agents, and prompt flows</strong>{" "}
          without sending data to third-party APIs.
        </p>
        <p className="pl-5">
          It&apos;s perfect for experimenting with prompts, fine-tuning
          behavior, and testing integrations locally before scaling to
          production fast, private, and fully offline.
        </p>

        <h4>
          <strong>
            {" "}
            Air-Gapped Data Centers and Edge Compute For{" "}
            <span>Regulated Workloads</span>
          </strong>
        </h4>
        <p className="pl-5">
          Industries with strict compliance requirements like healthcare,
          defense, and finance can&apos;t risk cloud exposure. Ollama&apos;s
          local runtime makes it possible to{" "}
          <strong>deploy and manage LLMs inside air-gapped environments</strong>{" "}
          or <strong>on the edge</strong>, where data never leaves the network.
        </p>
        <p className="pl-5">
          You get all the benefits of generative AI reasoning, summarization,
          classification with <strong>zero external dependencies</strong> and{" "}
          <strong>complete data sovereignty.</strong>
        </p>

        <h4>
          <strong>
            {" "}
            On-Prem Clusters Internal <span>Assistants</span> and Workflow
            Automation
          </strong>
        </h4>
        <p className="pl-5">
          Many enterprises are adopting on-prem clusters with GPUs to run
          internal LLMs using Ollama. These clusters power{" "}
          <strong>private chat assistants</strong>, internal knowledge bots, and{" "}
          <strong>automated workflows</strong> that integrate securely with HR
          systems, ticketing tools, or wikis all behind the corporate firewall.
        </p>
        <p className="pl-5">
          The result: smarter operations, instant answers, and no compliance
          headaches.
        </p>

        <h4>
          <strong>
            {" "}
            CI/CD Pipelines Testing <span>Prompts</span> and Guardrails Offline
          </strong>
        </h4>
        <p className="pl-5">
          Ollama fits naturally into <strong>CI/CD workflows</strong>. Teams can
          spin up a model container inside a build pipeline to{" "}
          <strong>
            test prompts, evaluate responses, and validate guardrails
          </strong>{" "}
          before deployment just like running unit tests for AI behavior.
        </p>
        <p className="pl-5">
          It&apos;s a safe, reproducible way to maintain quality across
          environments without exposing data or relying on external APIs.
        </p>
        <hr></hr>

        <h3 id="hardware">
          <strong>
            Do You Need Big <span>Hardware</span>?
          </strong>
        </h3>
        <p>
          Not necessarily. With quantization and optimized backends, you can run
          capable models on modest machines:
        </p>
        <ul className="pl-3">
          <li>
            <h5 className="mt-0 ">
              <strong>CPU-only</strong>
            </h5>
            Small models (Phi-3-mini, some 3&ndash;7B models) for experiments
            and utilities
          </li>
          <li>
            <h5 className="mt-0">
              <strong>Apple Silicon (M1/M2/M3, 16&ndash;64 GB RAM)</strong>
            </h5>
            Smooth performance for many 7&ndash;13B models
          </li>
          <li>
            <h5 className="mt-0">
              <strong>NVIDIA GPUs (8&ndash;24 GB VRAM)</strong>
            </h5>
            Comfortable with 7&ndash;13B models; larger models require more VRAM
            or multi-GPU setups
          </li>
          <li>
            <h5 className="mt-0">
              <strong>Memory planning</strong>
            </h5>
            Approximately 1&ndash;1.5 GB RAM/VRAM per billion parameters for
            quantized models; depends on quantization level and context length
          </li>
        </ul>
        <h4>
          <strong>
            Key takeaway:  </strong>
            
        </h4>
        <p className="pl-4"> Start small, quantize, and scale up only if your
            workload demands it. You don&apos;t need a GPU farm to get started.
        </p>
        <hr></hr>
        <h3 id="benefits">
          <strong>
            Why Running Private LLMs Locally <span>Changes the Equation</span>?
          </strong>
        </h3>
        <p>
          Moving inference from the cloud to on-prem improves privacy, cost
          predictability, and latency.
        </p>
        <ul
          className="pl-4
      "
        >
          <li>
            <h5 className="mt-0">
              <strong>Privacy and control</strong>
            </h5>
            Data never leaves your perimeter, simplifying compliance and
            reducing third-party risk.{" "}
            <strong>
              Keeping sensitive data in-house mitigates costly breaches.
            </strong>
          </li>
          <li>
            <h5 className="mt-0">
              <strong>Cost predictability</strong>
            </h5>
            Avoid egress fees and per-token charges.{" "}
            <strong>
              On-prem solutions can be more cost-efficient for steady workloads.
            </strong>
          </li>
          <li>
            <h5 className="mt-0">
              <strong>Latency and resilience</strong>
            </h5>
            Local inference reduces round-trip delays and{" "}
            <strong>functions even without an internet connection.</strong>
          </li>
        </ul>

        <h4>
          <strong>Additional benefits</strong>
        </h4>
        <ul className="pl-4">
          <li>
            Freeze model versions, inject custom system prompts, and build RAG
            pipelines tailored to your data
          </li>
          <li>Switch models or blends without rewriting your stack</li>
          <li>
            Deploy models at clinics, branch offices, or edge environments for
            offline operation
          </li>
        </ul>
        <hr></hr>
        <h3 id="models">
          <strong>
            Choosing Models: Llama 3, Mistral, Phi, and{" "}
            <span>When to Use Them</span>
          </strong>
        </h3>
        <p>Ollama makes it easy to switch among models:</p>
        <ul className="pl-4">
          <li>
            <h5 className="mt-0">
              <strong>Llama 3 (8B, larger variants via community GGUFs)</strong>
            </h5>
            Strong general reasoning and chat capabilities; ideal default for
            broad tasks
          </li>
          <li>
            <h5 className="mt-0">
              <strong>Mistral 7B / Mixtral</strong>
            </h5>
            Fast and capable for summarization, extraction, and short-form
            reasoning; efficient for low-latency or small-memory deployments
          </li>
          <li>
            <h5 className="mt-0">
              <strong>Phi-3 (mini/medium)</strong>
            </h5>
            Small but effective for coding and QA; perfect for edge devices or
            CPU-only setups
          </li>
          <li>
            <h5 className="mt-0">
              <strong>
                Code-specialized models (Code Llama, StarCoder variants)
              </strong>
            </h5>
            Enhance autocomplete and refactor tasks for developers
          </li>
          <li>
            <h5 className="mt-0">
              <strong>High-context or niche models (Qwen, Gemma)</strong>
            </h5>
            Useful for domain-specific or long-context workloads
          </li>
        </ul>
        <hr></hr>
        <h3 id="setup">
          <strong>
            Step-by-Step <span>Setup</span> for Local LLMs with Ollama
          </strong>
        </h3>

        <h4>
          <strong>Install Ollama</strong>
        </h4>
        <ul className="pl-4">
          <li>
            <strong>macOS:</strong> <code>brew install ollama</code>
          </li>
          <li>
            <strong>Linux:</strong> <code>curl -fsSL https://ollama.com/install.sh |</code>
        
          </li>
          <li>
            <strong>Windows:</strong> Use the official installer from ollama.com
          </li>
        </ul>



        <h4>
          <strong>Start the Ollama service</strong>
        </h4>
       <ul className="pl-3">
  <li>The installer sets up a local service. Start manually if needed: <code>ollama serve</code></li>
</ul>

       

        <h4>
          <strong>Pull and run a model</strong>
        </h4>
        <ul className="pl-3">
  <li><strong>Llama 3 (8B):</strong> <code>ollama run llama3:8b</code></li>
  <li><strong>Mistral:</strong> <code>ollama run mistral</code></li>
  <li><strong>Phi-3-mini:</strong> <code>ollama run phi3:mini</code></li>
</ul>

       

        <h4>
          <strong>Chat in the terminal</strong>
        </h4>
        
        
<ul className="pl-3">
  <li>Type prompts after the model loads: <code>Summarize our incident response policy in 5 bullet points for executives.</code></li>
</ul>

      
        
        <h4>
          <strong>Create a custom model with a system prompt</strong>
        </h4>
        <p>
          Create a file named <code>Modelfile</code> with:
        </p>
        <CodeBlockCustom code={scriptExample5} language="bash" />
        <p>Build and run:</p>
        <CodeBlockCustom code={scriptExample6} language="bash" />

        <h4>
          <strong>
            Call the local <span>REST API</span>
          </strong>
        </h4>
        <h5>
          <strong>cURL</strong>
        </h5>
        <CodeBlockCustom code={scriptExample7} language="bash" />

        <h5>
          <strong>Python (requests)</strong>
        </h5>
        <CodeBlockCustom code={scriptExample8} language="python" />

        <h5>
          <strong>Node.js (fetch)</strong>
        </h5>
        <CodeBlockCustom code={scriptExample9} language="javascript" />
        <hr></hr>
        <h3 id="conclusion">
          <strong>
            Conclusion: Your Next Step Toward <span>Private, Practical AI</span>
          </strong>
        </h3>
        <p>
          Running Private LLMs Locally with Ollama gives on-prem control with
          modern tooling agility. You gain tighter privacy, faster responses,
          and autonomy over models and costs.{" "}
          <strong>
            Start with a modest machine and a 7&ndash;13B model, integrate it
            into a local RAG pipeline, and test against real workloads. If it
            outperforms the cloud for a workload, scale it across your platform.
          </strong>
        </p>
        <p>
          Moltech helps you move fast without cutting corners. From secure
          architecture to governance and ongoing evaluations, we build private
          AI systems that deliver value and ensure compliance. Visit Moltech
          Services to explore Secure On-Prem AI Deployment, Edge AI
          Architecture, and AI Governance and Compliance, or contact our team
          for a focused pilot in your environment.
        </p>
      </div>
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
            👉At Moltech, we help you run private LLMs securely with Ollama. Our
            team designs on-prem AI systems that balance speed, compliance, and
            control. Explore Secure On-Prem AI Deployment and Edge AI
            Architecture with us today.
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
      {/* Image Modal */}
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

export default PrivateLLMsLocallyOllama;
