"use client";
import React, { useState, Suspense, useMemo, useEffect } from "react";
import { Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import HeroSection from "@/features/blogDetailPage/components/blogHeroSection/HeroSection";
import TableOfContent from "@/features/blogDetailPage/components/tableOfContent/TableOfContent";
import RelatedArticleSlider from "@/features/blogDetailPage/components/relatedArticleSlider/RelatedArticleSlider";
import PopularTags from "@/features/blogDetailPage/components/popularTags/PopularTags";
import GetInTouch from "@/components/shared/getInTouch/GetInTouch";
import CTASection from "@/components/ctaSection/CTASection";
import DynamicBlogTemplate from "@/components/blog/templates/DynamicBlogTemplate";
import { BASE_URL } from "@/lib/utils/baseUrl";
// ✅ Template mapping to handle slug-to-filename conversion
const templateMapping = {
  "5-simple-web-design-tricks-for-ui-ux-professional-look-dallas":
    "WebDesignTricksTemplate",
  "ai-augmented-dotnet-fintech-solutions": "AiAugmentedDotnetTemplate",
  "tailwind-vs-material-ui-which-framework-is-right":
    "tailwind-vs-material-ui-which-framework-is-right",
  "angular-19-key-features-improvements-dallas":
    "angular-19-key-features-improvements-dallas",
  "python-web-scraping-guide-dallas-usa":
    "python-web-scraping-guide-dallas-usa",
  "ienumerable-vs-icollection-dotnet-csharp":
    "ienumerable-vs-icollection-dotnet-csharp",
  "cors-cross-origin-dotnet-csharp-dallas":
    "cors-cross-origin-dotnet-csharp-dallas",
  "events-and-delegates-csharp-dotnet-development":
    "events-and-delegates-csharp-dotnet-development",
  "middleware-dotnet-request-handling-dotnet-development-dallas":
    "middleware-dotnet-request-handling-dotnet-development-dallas",
  "threads-vs-tasks-parallel-programming-csharp-dallas":
    "threads-vs-tasks-parallel-programming-csharp-dallas",
  "csharp-interface-best-practices": "csharp-interface-best-practices",
  "hr-data-analytics-insights": "hr-data-analytics-insights",
  "next-js-15-features-and-seo-benefits-turbopack-server-actions-and-ppr-guide":
    "next-js-15-features-and-seo-benefits-turbopack-server-actions-and-ppr-guide",
  "reliable-email-systems-with-pub-sub-messaging":
    "reliable-email-systems-with-pub-sub-messaging",
  "from-monolith-to-microservices-dotnet9-playbook":
    "from-monolith-to-microservices-dotnet9-playbook",
  "ai-pilots-vs-full-scale-deployment": "ai-pilots-vs-full-scale-deployment",
  "real-time-analytics-competitive-advantage":
    "real-time-analytics-competitive-advantage",
  "blazor-united-vs-nextjs": "blazor-united-vs-nextjs",
  "cross-platform-development-frameworks-comparison":
    "cross-platform-development-frameworks-comparison",
  "ai-in-finance-cfo-playbook-rpa-automation":
    "ai-in-finance-cfo-playbook-rpa-automation",
  "hybrid-vs-multi-cloud-choose-right-architecture":
    "hybrid-vs-multi-cloud-choose-right-architecture",
  "data-security-in-custom-apps": "data-security-in-custom-apps",
  "ai-driven-personalization-ux": "ai-driven-personalization-ux",
  "real-time-supply-chain-re-routing-predictive-ai":
    "real-time-supply-chain-re-routing-predictive-ai",
  "ocr-vs-intelligent-document-processing-finance":
    "ocr-vs-intelligent-document-processing-finance",
  "security-first-sdlc-integrate-security":
    "security-first-sdlc-integrate-security",
  "ai-powered-code-reviews-dotnet": "ai-powered-code-reviews-dotnet",
  "securing-progressive-web-apps-react-dotnet":
    "securing-progressive-web-apps-react-dotnet",
  "migrate-angular-15-to-angular-18": "migrate-angular-15-to-angular-18",
  "azure-vs-aws-vs-gcp-2025-which-cloud-fits-your-business":
    "azure-vs-aws-vs-gcp-2025-which-cloud-fits-your-business",
  "ai-dev-tools-2025-copilot-codewhisperer-gemini-compared":
    "ai-dev-tools-2025-copilot-codewhisperer-gemini-compared",
  "owasp-2025-updates-developer-guide": "owasp-2025-updates-developer-guide",
  "react-19-features-developers-need-to-know":
    "react-19-features-developers-need-to-know",
  "dotnet-maui-cross-platform-mobile-apps":
    "dotnet-maui-cross-platform-mobile-apps",
  "cicd-devsecops-2025-new-practices-tools":
    "cicd-devsecops-2025-new-practices-tools",
  "react-vs-angular-performance": "react-vs-angular-performance",
  "agentic-ai-retail-inventory-automation":
    "agentic-ai-retail-inventory-automation",
  "ai-in-auditing-enhancing-accuracy-efficiency":
    "ai-in-auditing-enhancing-accuracy-efficiency",
  "apis-application-modernization": "apis-application-modernization",
  "kubernetes-docker-updates-2025": "kubernetes-docker-updates-2025",
  "vibe-coding-ai-assisted-development": "vibe-coding-ai-assisted-development",
  "conversational-web-agents-mcp": "conversational-web-agents-mcp",
  "embed-ai-in-web-apps": "embed-ai-in-web-apps",
  "private-llms-locally-ollama-secure-ai":
    "private-llms-locally-ollama-secure-ai",
  "local-ai-assistants-ollama-n8n-automation":
    "local-ai-assistants-ollama-n8n-automation",
  "ollama-vs-openai-local-ai-solutions": "ollama-vs-openai-local-ai-solutions",
  "ollama-dotnet-react-local-ai-integration":
    "ollama-dotnet-react-local-ai-integration",
  "website-performance-optimization-google-rankings":
    "website-performance-optimization-google-rankings",
  "tech-stack-selection-guide": "tech-stack-selection-guide",
  "ai-rpa-data-entry-validation": "ai-rpa-data-entry-validation",
  "real-time-dashboards-unstructured-data":
    "real-time-dashboards-unstructured-data",
  "data-cleaning-impact-business-decisions":
    "data-cleaning-impact-business-decisions",
  "economics-outsourcing-data-processing-experts":
    "economics-outsourcing-data-processing-experts",
  "full-stack-hybrid-app-development-react-dotnet-ai":
    "full-stack-hybrid-app-development-react-dotnet-ai",
  "intelligent-rpa-python-ai-automation":
    "intelligent-rpa-python-ai-automation",
  "no-code-tools-popular-affordable-open-source":
    "no-code-tools-popular-affordable-open-source",
  "in-house-it-vs-managed-services-it-consulting":
    "in-house-it-vs-managed-services-it-consulting",
  "mobile-app-architecture-layers-components-design":
    "mobile-app-architecture-layers-components-design",
    "nodejs-performance-optimization": "nodejs-performance-optimization",
   "native-vs-cross-platform-development-2025": "native-vs-cross-platform-development-2025",
   "angular-vs-vue-2025-framework-comparison":"angular-vs-vue-2025-framework-comparison",
};

// ✅ Loading component
const TemplateLoading = () => (
  <div className="template-loading">
    <div className="spinner"></div>
    <p>Loading content...</p>
  </div>
);

// ✅ Error component
const TemplateError = ({ templateName }) => (
  <div className="template-error">
    <h2>Content Not Available</h2>
    <p>Template &quot;{templateName}&quot; could not be loaded.</p>
  </div>
);

export default function BlogPostClient({ blogConfig, slug }) {
  const {
    heroData,
    tableOfContents: initialTableOfContents,
    tags,
    articles,
    templateName,
    scriptExample,
    faqData,
    metaConfig,
    ctaText,
    isDynamic,
  } = blogConfig;

  // State management for modal
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [contentHtml, setContentHtml] = useState("");
  const [tableOfContents, setTableOfContents] = useState(
    initialTableOfContents || []
  );
  const [isLoadingContent, setIsLoadingContent] = useState(false);
  const [contentError, setContentError] = useState(null);

  // ✅ Memoize extractTableOfContents to avoid recreating
  const extractTableOfContents = useMemo(() => {
    return (html) => {
      if (!html) return [];

      try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const h3Elements = doc.querySelectorAll("h3");

        return Array.from(h3Elements).map((h3, index) => {
          const text = h3.textContent?.trim() || "";
          const slug = text
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-");
          const id = h3.id || slug || `heading-${index}`;
          return {
            id,
            title: text,
            level: 1,
          };
        });
      } catch (error) {
        console.error("Error extracting table of contents:", error);
        return [];
      }
    };
  }, []);

  // ✅ Fetch content for dynamic blogs
  useEffect(() => {
    if (isDynamic && slug) {
      setIsLoadingContent(true);
      setContentError(null);

      const fetchContent = async () => {
        try {
          if (process.env.NODE_ENV !== "production") {
            console.log("start fetching content");
          }
          const apiUrl = `${BASE_URL}/api/blog/${slug}/content`;
          const res = await fetch(apiUrl, {
            cache: "no-store",
          });

          if (!res.ok) {
            throw new Error(`Failed to fetch content: ${res.status}`);
          }

          const data = await res.json();
          const htmlContent = data?.content || "";

          if (htmlContent) {
            setContentHtml(htmlContent);
            // Extract and update table of contents from content
            let toc = extractTableOfContents(htmlContent);

            setTableOfContents(toc);
          } else {
            setContentError("No content found");
          }
        } catch (error) {
          console.error("Error fetching blog content:", error);
          setContentError(error.message);
        } finally {
          setIsLoadingContent(false);
        }
      };

      fetchContent();
    }
  }, [isDynamic, slug]);

  // ✅ Create lazy component dynamically based on templateName with better error handling

  const BlogTemplate = useMemo(() => {
    // Skip lazy loading for dynamic blogs
    if (isDynamic) {
      return null;
    }

    return React.lazy(() => {
      // Get the actual filename from the mapping
      const fileName = templateMapping[templateName];

      if (!fileName) {
        console.error(`No template mapping found for: ${templateName}`);
        return Promise.reject(
          new Error(`No template mapping found for: ${templateName}`)
        );
      }

      if (process.env.NODE_ENV !== "production") {
        console.log(`Loading template: ${fileName} for slug: ${templateName}`);
      }

      // ✅ Add better error handling for dynamic import
      return import(`@/components/blog/templates/${fileName}`)
        .then((module) => {
          if (!module.default) {
            throw new Error(
              `Template ${fileName} does not have a default export`
            );
          }
          return module;
        })
        .catch((error) => {
          console.error(`Failed to load template ${fileName}:`, error);
          throw error;
        });
    });
  }, [templateName, isDynamic]);
  // Modal functions
  const closeModel = () => {
    setIsModelOpen(false);
  };

  // Copy to clipboard functionality
  const copyToClipboard = () => {
    const url = window.location.href;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        alert("URL copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };
  return (
    <div className="blog-details">
      <HeroSection
        title={heroData.title}
        highlight={heroData.highlight}
        description={heroData.description}
        author={heroData.author}
        date={heroData.date}
        stats={heroData.stats}
      />
      <div className="blog-header"></div>
      <div className="common-blog-details1 mt-50 mb-50 common-blog-details-two border-blog-2 blog-detail-mainpage">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 order-one sticky-position left-tag-sec">
              <TableOfContent
                tableOfContents={tableOfContents}
                faqData={faqData}
              />
              <PopularTags tags={tags} />
            </div>

            {/* blog content starts here */}
            <div
              className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 order-two CSharpBlogPost new-blogs-detail-main-content-centar right-desc-sec"
              id="main-content"
            >
              <div className="blog-details-content pt-0">
                {/* ✅ Render the template component with proper error handling */}
                {/* ✅ Render dynamic or static template */}
                {isDynamic ? (
                  <>
                    {isLoadingContent ? (
                      <TemplateLoading />
                    ) : contentError ? (
                      <div className="template-error">
                        <h2>Error Loading Content</h2>
                        <p>{contentError}</p>
                      </div>
                    ) : (
                      <DynamicBlogTemplate
                        contentHtml={contentHtml}
                        faqData={faqData}
                        featuredImage={metaConfig?.imageUrl}
                        ctaText={ctaText}
                      />
                    )}
                  </>
                ) : (
                  <Suspense fallback={<TemplateLoading />}>
                    <BlogTemplate
                      scriptExample={scriptExample}
                      faqData={faqData}
                    />
                  </Suspense>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <CTASection />
      <div className="common-blog-details1 mt-50 mb-50 common-blog-details-two border-blog-2 blog-detail-mainpage">
        <div className="container">
          <RelatedArticleSlider articles={articles} />
        </div>
      </div>
      {/* Modal Section Start */}
      <div>
        <Modal
          className="quote-us-model"
          show={isModelOpen}
          size={"xl"}
          backdrop="static"
          keyboard={false}
        >
          <div className="top-sec">
            <div className="close-icon-btn">
              <button onClick={closeModel} aria-label="Close">
                <Image
                  src="/close-icon.webp"
                  alt="close-icon"
                  className="img-fluid"
                  width="25"
                  height="25"
                />
              </button>
            </div>
          </div>
          <div className="apply-model-section-body">
            <GetInTouch afterClose={closeModel} />
          </div>
        </Modal>
      </div>
    </div>
  );
}
