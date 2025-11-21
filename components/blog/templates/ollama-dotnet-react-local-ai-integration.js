"use client";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { AppIcons } from "@/data/appIcons";
import Image from "next/image";
import ServiceFAQ from "@/components/serviceFAQ/ServiceFAQ";
import { blogConfig } from "@/data/blogs/ollama-dotnet-react-local-ai-integration";
import Link from "next/link";
import Iconify from "@/components/ui/icons/Iconify";
import CodeBlockCustom from "@/components/codeBlock/CodeBlockCustom";
import { Icon } from "@iconify/react";

// code block data
const scriptExample1 = `brew install ollama
ollama serve
ollama pull llama3.1:8b-instruct
`;

const scriptExample2 = `docker run -d -p 11434:11434 -v ollama:/root/.ollama \\
--name ollama ollama/ollama:latest
`;
const scriptExample3 = `curl http://localhost:11434/api/tags
`;
const scriptExample4 = `dotnet new web -n OllamaApi
cd OllamaApi
`;
const scriptExample5 = `using System.Net.Http.Json;
using System.Text.Json;
using System.Text.Json.Nodes;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(o => o.AddDefaultPolicy(p =>
    p.WithOrigins("http://localhost:5173")
        .AllowAnyHeader()
        .AllowAnyMethod()
        .AllowCredentials()
));

builder.Services.AddHttpClient("ollama", c =>
{
    c.BaseAddress = new Uri("http://localhost:11434");
    c.Timeout = Timeout.InfiniteTimeSpan; // for streaming
});

var app = builder.Build();
app.UseCors();

app.MapPost("/api/chat", async (HttpContext ctx, ChatRequest req, IHttpClientFactory httpFactory) =>
{
    var client = httpFactory.CreateClient("ollama");

    var body = new
    {
        model = string.IsNullOrWhiteSpace(req.Model) ? "llama3.1:8b-instruct" : req.Model,
        messages = req.Messages,
        stream = true,
        options = new { temperature = 0.2, num_ctx = 4096, keep_alive = "5m" }
    };

    var httpReq = new HttpRequestMessage(HttpMethod.Post, "/api/chat")
    {
        Content = JsonContent.Create(body)
    };

    var httpRes = await client.SendAsync(httpReq, HttpCompletionOption.ResponseHeadersRead, ctx.RequestAborted);
    httpRes.EnsureSuccessStatusCode();

    ctx.Response.Headers.ContentType = "text/event-stream";

    await using var stream = await httpRes.Content.ReadAsStreamAsync(ctx.RequestAborted);
    using var reader = new StreamReader(stream);

    while (!reader.EndOfStream)
    {
        var line = await reader.ReadLineAsync();
        if (string.IsNullOrWhiteSpace(line)) continue;

        var node = JsonNode.Parse(line);
        var token = node?["message"]?["content"]?.GetValue<string>();

        if (!string.IsNullOrEmpty(token))
        {
            await ctx.Response.WriteAsync($"data: {token}\\n\\n", ctx.RequestAborted);
            await ctx.Response.Body.FlushAsync(ctx.RequestAborted);
        }

        if (node?["done"]?.GetValue<bool>() ?? false) break;
    }
});

app.Run();

record ChatRequest(string? Model, List<ChatMessage> Messages);
record ChatMessage(string Role, string Content);
`;
const scriptExample6 = `npm create vite@latest react-ollama -- --template react
cd react-ollama
npm i
`;
const scriptExample7 = `import { useState, useRef } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [streamingAnswer, setStreamingAnswer] = useState("");
  const answerRef = useRef("");

  const send = async () => {
    const payload = {
      model: "llama3.1:8b-instruct",
      messages: [
        ...messages,
        { role: "system", content: "You are a helpful meeting assistant." },
        { role: "user", content: input }
      ]
    };

    setStreamingAnswer("");
    answerRef.current = "";

    const res = await fetch("http://localhost:5189/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const reader = res.body.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      chunk.split("\\n\\n").forEach(line => {
        if (line.startsWith("data: ")) {
          const token = line.slice(6);
          answerRef.current += token;
          setStreamingAnswer(answerRef.current);
        }
      });
    }

    setMessages(prev => [
      ...prev,
      { role: "user", content: input },
      { role: "assistant", content: answerRef.current }
    ]);
    setInput("");
  };

  return (
    <div style={{ maxWidth: 720, margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h2>Local Meeting Assistant</h2>
      <div style={{ border: "1px solid #ddd", padding: 16, borderRadius: 8, minHeight: 240 }}>
        {messages.map((m, i) => (
          <div key={i} style={{ marginBottom: 8 }}>
            <strong>{m.role}:</strong> {m.content}
          </div>
        ))}
        {streamingAnswer && (
          <div style={{ marginTop: 8, opacity: 0.9 }}>
            <strong>assistant:</strong> {streamingAnswer}
          </div>
        )}
      </div>
      <textarea
        rows={4}
        style={{ width: "100%", marginTop: 12 }}
        placeholder="Paste your notes or ask a question..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={send} style={{ marginTop: 12 }}>Ask</button>
    </div>
  );
}
`;
const scriptExample8 = `curl http://localhost:11434/api/tags
`;
const scriptExample9 = `{"models":[{"name":"llama3.1:8b-instruct"}]}
`;
const scriptExample10 = `curl -X POST http://localhost:11434/api/chat \\
-H "Content-Type: application/json" \\
-d '{"model":"llama3.1:8b-instruct","messages":[{"role":"user","content":"Hello"}],"stream":false}'
`;
const scriptExample11 = `{
"model": "llama3.1:8b-instruct",
"response": "Hello! How can I help you today?",
"done": true
}
`;
const scriptExample12 = `curl -N -X POST http://localhost:5189/api/chat \\
-H "Content-Type: application/json" \\
-d '{"messages":[{"role":"user","content":"Give me three meeting action items based on: finalize budget, email vendor, schedule training."}]}'
`;
const scriptExample13 = `data: Finalize project budget approval with finance.
data: Send updated proposal email to the vendor.
data: Schedule internal training session next week.
`;
// Placeholder for a custom CodeBlock component (assuming it exists in the user's project)

const OllamaVsOpenai = () => {
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
          src={AppIcons.OllamaDotnetReactIntegration}
          alt=" Connecting Ollama with .NET & React
 Cover Image"
          loading="lazy"
          width={1280}
          height={640}
          style={{ height: "auto", cursor: "pointer" }}
          onClick={() =>
            handleImageClick(
              AppIcons.OllamaDotnetReactIntegration,
              " Connecting Ollama with .NET & React Cover Image"
            )
          }
        />
      </div>
      <div>
        <h2 id="introduction">
          <strong>
            Connecting Ollama with .NET & React: Build Full-Stack Local AI Apps
          </strong>
        </h2>

        <p>
          Modern users expect apps to do more than just display data — they
          expect them to <strong>think</strong> a little. Summarize notes,
          answer questions, adapt as you type.
        </p>
        <p>
          A few months ago, we started exploring how to make that possible{" "}
          <strong>without relying on cloud APIs</strong>. Turns out, you can —
          with <strong>Ollama</strong>, <strong>.NET</strong>, and{" "}
          <strong>React</strong> working together.
        </p>
        <p>
          This guide walks through how to build a <strong>local AI app</strong>{" "}
          step-by-step. We&apos;ll use Ollama to host models, .NET for the
          backend API, and React for a live, streaming frontend. You&apos;ll see
          how to get it running locally — no OpenAI key, no data leaving your
          laptop. (In our internal tests, a mid-range GPU handled this setup
          surprisingly well once caching warmed up.)
        </p>

        <h3 id="what-is-ai-app">
          <strong>What Is an AI App, Really?</strong>
        </h3>

        <p>
          What Is an AI App, Really? At its core, an <strong>AI app</strong> is
          just a regular application that can <strong>think a little</strong>.
          Instead of following only hard-coded rules, it uses{" "}
          <strong>predictive or generative models</strong> to make smart
          decisions or create new content on the fly.
        </p>
        <p>
          You&apos;ve already seen them in action — chat assistants that
          summarize meetings, tools that recommend what to watch next, systems
          that flag fraud, or apps that write short summaries for you. What
          makes them “AI-powered” is that they <strong>learn from data</strong>{" "}
          and use patterns to infer answers instead of relying entirely on fixed
          logic.
        </p>
        <p>
          Most AI apps, no matter how advanced, follow a pretty similar pattern:
        </p>
        <ul>
          <li>
            <strong>Capture intent</strong> — the user asks or inputs something
            (text, voice, image, or file).
          </li>
          <li>
            <strong>Invoke a model</strong> — local or cloud-based, usually
            through an API call.
          </li>
          <li>
            <strong>Stream results</strong> — responses appear gradually for a
            faster, more natural feel.
          </li>
          <li>
            <strong>Add context</strong> — connect the model with relevant
            business data or documents.
          </li>
          <li>
            <strong>Make it reliable</strong> — add error handling, logging, and
            security so it scales safely.
          </li>
        </ul>
        <p>
          In simple terms: an AI app listens, thinks, and responds — just like a
          human assistant, but built from data and code.
        </p>

        <h3 id="why-choose-stack">
          <strong>Why Choose Ollama + .NET + React ? </strong>
        </h3>
        <h4>
          <strong>Ollama</strong>
        </h4>
        <ul>
          <li>
            Local inference & offline capability: Keep data in your environment.
          </li>
          <li>
            Predictable cost: Avoid per-token cloud fees for internal tools or
            prototypes.
          </li>
          <li>
            Control & portability: Run the same models on a laptop, GPU server,
            or Docker container.
          </li>
        </ul>

        <h4>
          <strong>.NET Backend</strong>
        </h4>
        <ul>
          <li>High throughput: Handles streaming responses efficiently.</li>
          <li>
            Enterprise-ready: Built-in authentication, dependency injection,
            observability, and testing.
          </li>
          <li>Cross-platform: Linux, Windows, or containers.</li>
        </ul>

        <h4>
          <strong>React Frontend</strong>
        </h4>
        <ul>
          <li>
            Fast UI updates: Perfect for token-by-token streaming and chat
            interfaces.
          </li>
          <li>
            Component model: Encapsulate chat, prompts, and settings cleanly.
          </li>
          <li>Ecosystem: Hooks, state management, and UI kits ready to use.</li>
        </ul>

        <h3 id="architecture-overview">
          <strong>Architecture Overview</strong>
        </h3>

        <p>We&apos;ll build a minimal full-stack AI app:</p>

        <h4>
          <strong>Components:</strong>
        </h4>
        <ul>
          <li>
            <strong>React frontend:</strong>
            <span>Chat input and real-time token display.</span>
          </li>
          <li>
            <strong>.NET backend:</strong>
            <span>
              Authentication, request validation, streaming proxy, and business
              logic.
            </span>
          </li>
          <li>
            <strong>Ollama server:</strong>
            <span>Local LLM hosting (e.g., Llama 3.1).</span>
          </li>
        </ul>

        <h4>
          <strong>Data flow:</strong>
        </h4>
        <ul>
          <li>React sends chat requests to the .NET API.</li>
          <li>
            .NET forwards messages to Ollama&apos;s <code>/api/chat</code>{" "}
            endpoint with streaming enabled.
          </li>
          <li>Ollama streams tokens; .NET relays them to the browser.</li>
          <li>Frontend renders tokens as they arrive.</li>
        </ul>

        <section className="insight-box mt-5 pl-4">
          <div className="icon-sec">
            <Iconify icon="mage:light-bulb" width={40} />
          </div>
          <strong id="important-to-remember" className="insight-title">
            <span>Tip:</span>
          </strong>
          <p>
            Treat Ollama as a replaceable inference provider behind a clean API
            boundary. You can swap models or hosting without touching the
            frontend or business logic.
          </p>
        </section>

        <h3 id="example-app">
          <strong> Example App — Local Meeting Notes Summarizer</strong>
        </h3>

        <p>
          Let&apos;s build something practical to see everything in action — a{" "}
          <strong>local meeting assistant</strong>. You&apos;ll paste your
          meeting transcript, and the app will let you ask questions like:
        </p>
        <ul>
          <li>“Summarize key decisions.”</li>
          <li>“List all action items.”</li>
          <li>“Draft a short follow-up email.”</li>
        </ul>
        <p>
          This simple use case shows how <strong>streaming</strong>,{" "}
          <strong>prompt control</strong>, and <strong>local inference</strong>{" "}
          come together. Everything happens locally — no external API calls, no
          data leaving your computer.
        </p>

        <h3 id="install-ollama">
          <strong>Step 1 — Install and Run Ollama</strong>
        </h3>

        <p>
          Before we code anything, we need <strong>Ollama</strong> running —
          this is the local LLM engine that hosts models like{" "}
          <strong>Llama 3</strong>.
        </p>

        <h4>
          <strong> For Mac or Linux</strong>
        </h4>
        {/* CodeBlockCustom component usage relies on constant definition not shown here, assuming `scriptExample1` exists. */}
        <CodeBlockCustom code={scriptExample1} language="bash" />
        <p>
          The first command installs Ollama. The second starts the Ollama
          service (by default on port <code>11434</code>). The last one
          downloads the model (<code>llama3.1:8b-instruct</code>) which
          we&apos;ll use in this example.
        </p>
        <p>
          Tip: The first time you run <code>ollama pull</code>, it may take a
          few minutes depending on your internet speed and hardware.
        </p>

        <h4>
          <strong> For Docker (optional)</strong>
        </h4>
        <p>If you prefer to run Ollama in a container, use:</p>
        {/* CodeBlockCustom component usage relies on constant definition not shown here, assuming `scriptExample2` exists. */}
        <CodeBlockCustom code={scriptExample2} language="bash" />
        <p>
          This runs Ollama in the background (<code>-d</code>), maps the correct
          port, and saves model data in a volume so you don&apos;t have to
          re-download it.
        </p>

        <h4>
          <strong> Test the setup</strong>
        </h4>
        <p>You can confirm Ollama is running by checking:</p>
        {/* CodeBlockCustom component usage relies on constant definition not shown here, assuming `scriptExample3` exists. */}
        <CodeBlockCustom code={scriptExample3} language="bash" />
        <p>If you see a JSON response, you&apos;re good to go.</p>

        <h3 id="create-backend">
          <strong> Step 2 — Create the .NET AI Backend</strong>
        </h3>

        <p>
          Now we&apos;ll create a small <strong>.NET 8 API</strong> that talks
          to Ollama. This API will accept a message from the frontend, send it
          to Ollama, and then stream the model&apos;s response back to the
          browser in real time.
        </p>

        <h4>
          <strong> Initialize a minimal API</strong>
        </h4>
        {/* CodeBlockCustom component usage relies on constant definition not shown here, assuming `scriptExample4` exists. */}
        <CodeBlockCustom code={scriptExample4} language="bash" />
        <p>
          Replace your <code>Program.cs</code> with the following code:
        </p>
        {/* CodeBlockCustom component usage relies on constant definition not shown here, assuming `scriptExample5` exists. */}
        <CodeBlockCustom code={scriptExample5} language="csharp" />

        <h4>
          <strong> What&apos;s Happening Here ? </strong>
        </h4>
        <ul>
          <li>
            We enable <strong>CORS</strong> so the frontend (React) can call
            this API.
          </li>
          <li>
            We configure an <strong>HTTP client</strong> pointing to
            Ollama&apos;s local endpoint (<code>http://localhost:11434</code>
            ).
          </li>
          <li>
            When a <code>POST</code> request comes to <code>/api/chat</code>,
            the backend:
            <ul>
              <li>
                <p className="mb-0">Sends the user&apos;s message to Ollama.</p>
              </li>
              <li>
                <p className="mb-0">Reads each token Ollama generates.</p>
              </li>
              <li>
                <p className="mb-0">
                  Streams those tokens to the browser using{" "}
                  <strong>Server-Sent Events (SSE)</strong>.
                </p>
              </li>
            </ul>
          </li>
        </ul>
        <p>
          The response type <code>text/event-stream</code> allows the frontend
          to display text in real time as it&apos;s being generated — just like
          ChatGPT typing. Options like <code>temperature</code> and{" "}
          <code>num_ctx</code> can be tuned to adjust creativity or context
          size. For summarization tasks, keeping <code>temperature</code> low (
          <code>0.1–0.3</code>) gives more consistent results.
        </p>

        <h3 id="build-frontend">
          <strong> Step 3 — Build the React Frontend (Streaming UI)</strong>
        </h3>

        <p>
          Finally, let&apos;s build a <strong>React interface</strong> that
          connects to our API and shows live model responses.
        </p>

        <h4>
          <strong> Initialize React with Vite</strong>
        </h4>
        {/* CodeBlockCustom component usage relies on constant definition not shown here, assuming `scriptExample6` exists. */}
        <CodeBlockCustom code={scriptExample6} language="bash" />
        <p>
          This sets up a modern, fast React environment with ES modules and
          instant reload.
        </p>

        <h4>
          <strong> Create the Chat Component</strong>
        </h4>
        <p>This component:</p>
        <ul>
          <li>Sends your input to the backend.</li>
          <li>Listens for streamed tokens.</li>
          <li>Updates the UI as text arrives.</li>
        </ul>
        {/* CodeBlockCustom component usage relies on constant definition not shown here, assuming `scriptExample7` exists. */}
        <CodeBlockCustom code={scriptExample7} language="javascript" />

        <h4>
          <strong> Explanation</strong>
        </h4>
        <p>
          The <code>send()</code> function posts the user&apos;s input to your
          .NET API. The backend streams the AI&apos;s answer token-by-token.
          React updates the display immediately with each token, so you see the
          model “thinking” in real time.
        </p>
        <p>Before running the app:</p>
        <ul>
          <li>
            Make sure ports align: React (<code>5173</code>) and .NET API (
            <code>5189</code>).
          </li>
          <li>
            Update the CORS rule in your .NET project to include{" "}
            <code>http://localhost:5173</code>.
          </li>
        </ul>
        <p>
          Example query: Paste your meeting transcript and ask: “Summarize
          today&apos;s engineering sync in bullet points.” Within a second or
          two, you&apos;ll start seeing the AI&apos;s summary appear line by
          line.
        </p>

        <h3 id="testing">
          <strong> Testing the Flow</strong>
        </h3>

        <p>
          Before connecting everything, let&apos;s make sure both{" "}
          <strong>Ollama</strong> and your <strong>.NET API</strong> are working
          as expected. These quick checks help confirm your setup and rule out
          any networking or configuration issues.
        </p>

        <h4>
          <strong>Step 1: Sanity-Check Ollama</strong>
        </h4>
        <p>Run the following commands in your terminal:</p>
        <p># List available models</p>
        {/* CodeBlockCustom component usage relies on constant definition not shown here, assuming `scriptExample8` exists. */}
        <CodeBlockCustom code={scriptExample8} language="bash" />
        <p>
          This should return a JSON list of models currently available in your
          local Ollama instance. If you see something like:
        </p>
        {/* CodeBlockCustom component usage relies on constant definition not shown here, assuming `scriptExample9` exists. */}
        <CodeBlockCustom code={scriptExample9} language="json" />
        <p>— perfect, Ollama is up and running.</p>
        <p>
          Now, let&apos;s test a simple prompt directly through the Ollama API:
        </p>
        {/* CodeBlockCustom component usage relies on constant definition not shown here, assuming `scriptExample10` exists. */}
        <CodeBlockCustom code={scriptExample10} language="bash" />
        <p>
          If everything is set up correctly, Ollama will respond with JSON
          similar to this:
        </p>
        {/* CodeBlockCustom component usage relies on constant definition not shown here, assuming `scriptExample11` exists. */}
        <CodeBlockCustom code={scriptExample11} language="json" />
        <p>
          That confirms Ollama can receive prompts and generate text locally.
        </p>

        <h4>
          <strong> Step 2: Test the .NET API</strong>
        </h4>
        <p>
          Next, let&apos;s verify that your <strong>.NET backend</strong> is
          talking to Ollama properly. In a new terminal window, run:
        </p>
        {/* CodeBlockCustom component usage relies on constant definition not shown here, assuming `scriptExample12` exists. */}
        <CodeBlockCustom code={scriptExample12} language="bash" />
        <p>
          <b>Here&apos;s what&apos;s happening:</b>
        </p>
        <ul>
          <li>
            <code>-N</code> keeps the connection open so you can see streamed
            output.
          </li>
          <li>
            The payload sends one user message asking for meeting action items.
          </li>
        </ul>
        <p>If it&apos;s working, you&apos;ll see a stream of responses like:</p>
        {/* CodeBlockCustom component usage relies on constant definition not shown here, assuming `scriptExample13` exists. */}
        <CodeBlockCustom code={scriptExample13} language="text" />
        <p>
          Each <code>data:</code> line represents a new chunk of text sent by
          the model in real time.
        </p>

        <h4>
          <strong>What to Look For</strong>
        </h4>
        <p>
          If you see tokens streaming like above — success! If it hangs with no
          output, check:
        </p>
        <ul>
          <li>
            that both servers are running (<code>ollama serve</code> and{" "}
            <code>dotnet run</code>),
          </li>
          <li>
            the ports match (<code>11434</code> for Ollama, <code>5189</code>{" "}
            for .NET),
          </li>
          <li>and that your CORS policy in .NET includes your React origin.</li>
        </ul>
        <p>
          Once both commands work, your stack is ready — you can open the React
          app and start chatting with your <strong>local AI assistant</strong>.
        </p>

        <h3 id="frontend-tips">
          <strong>React AI Frontend Tips for Better UX</strong>
        </h3>
        <ul>
          <li>Stream partial tokens to reduce perceived latency.</li>
          <li>
            Provide a stop button that aborts the fetch stream using an{" "}
            <code>AbortController</code>.
          </li>
          <li>Keep a transcript, but summarize or collapse older turns.</li>
          <li>
            Capture feedback (e.g., thumbs up/down) for prompt tuning and
            quality improvement.
          </li>
        </ul>

        <h3 id="model-selection">
          <strong>Model Selection Notes</strong>
        </h3>

        <h4>
          <strong>Instruction-following chat and summarization:</strong>
        </h4>
        <ul>
          <li>
            <strong>llama3.1:8b-instruct:</strong> Balanced quality and speed on
            consumer GPUs and modern CPUs—strong default.
          </li>
          <li>
            Smaller footprints: 7B models with Q4 quantization; expect lower
            tokens/sec on CPUs.
          </li>
          <li>
            Creative writing or multilingual tasks: Experiment with other
            instruction-tuned models available via Ollama.
          </li>
        </ul>

        <h3 id="common-pitfalls">
          <strong>
            Let&apos;s understand what common pitfalls to use this and solutions
          </strong>
        </h3>
        <ul>
          <li>
            <strong>CORS issues:</strong> Forgetting to allow your React origin
            is a frequent blocker.
            <br></br>
            Enable CORS explicitly and handle credentials carefully in
            production.
          </li>
          <li>
            <strong>Streaming mismatches:</strong> Ollama&apos;s{" "}
            <code>/api/chat</code> returns line-delimited JSON when{" "}
            <code>stream=true</code>.<br></br>
            If forwarding via SSE, parse and flush frequently to prevent
            buffering delays.
          </li>
          <li>
            <strong>Overheating the model:</strong> High temperatures may look
            creative but reduce accuracy.
            <br></br>
            For enterprise Q&A and summarization, start with{" "}
            <code>temperature</code> between <code>0.1 - 0.3</code>.
          </li>
          <li>
            <strong>Context length limits:</strong> Large transcripts can exceed{" "}
            <code>num_ctx</code>. Summarize or chunk inputs first, then ask
            targeted questions.
            <br></br>
            For very large inputs, consider “map-reduce” summarization.
          </li>
          <li>
            <strong>State management:</strong> Avoid keeping long conversation
            histories indefinitely. Prune or summarize earlier turns to maintain
            sharp responses and low latency.
          </li>
          <li>
            <strong>Memory & concurrency:</strong> Larger models require
            sufficient RAM and VRAM.
            <br></br>
            If performance drops under load, scale Ollama horizontally, add a
            queue, or pin model instances with <code>keep_alive</code> while
            capping concurrent sessions.
          </li>
        </ul>

        <h3 id="conclusion">
          <strong>Conclusion</strong>
        </h3>

        <p>
          Connecting Ollama with .NET and React provides a pragmatic blueprint
          for building full-stack local AI apps that are fast, private, and
          cost-efficient. You&apos;ve seen how to:
        </p>
        <ul>
          <li>Set up a Local Inference API</li>
          <li>Stream real-time responses to a React UI</li>
          <li>
            Keep the architecture modular to swap models or providers later
          </li>
        </ul>
        <p>
          Start with a meeting assistant example, then extend it with retrieval,
          authentication, and production-grade observability.
        </p>
        <p>
          If you&apos;d like support designing or shipping your next AI-powered
          UI, our team can help with architecture, implementation, and model
          strategy. Explore our services at <code>/services/ai-strategy</code>{" "}
          and <code>/services/full-stack-development</code> and let&apos;s build
          something intelligent, together.
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
            Ready to optimize your AI strategy? Partner with Moltech Solution
            for hybrid AI deployments, private LLM benchmarking, and expert
            guidance to get the best of local and cloud AI—secure, fast, and
            cost-efficient
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

export default OllamaVsOpenai;
