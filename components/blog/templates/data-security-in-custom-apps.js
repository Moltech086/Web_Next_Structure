"use client";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { AppIcons } from "@/data/appIcons";
import Image from "next/image";
import ServiceFAQ from "@/components/serviceFAQ/ServiceFAQ";
import { blogConfig } from "@/data/blogs/data-security-in-custom-apps";
import Link from "next/link";
import Iconify from "@/components/ui/icons/Iconify";
import CodeBlockCustom from "@/components/codeBlock/CodeBlockCustom";

const DataSecurityCustomApp = () => {
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
          <div className="blog-header-image  mt-0">
            <Image
              src={AppIcons.DataSecurityAndCompliance}
              alt="Data Security and Compliance in Custom Apps"
              loading="lazy"
              width={1280}
              height={640}
              style={{ height: "auto", cursor: "pointer" }}
              onClick={() =>
                handleImageClick(
                  AppIcons.DataSecurityAndCompliance,
                  "Data Security and Compliance in Custom Apps"
                )
              }
            />
          </div>
          <h3 id="introduction">
            <strong>Data Security and Compliance in Custom Apps</strong>
          </h3>

          <p>
            A payroll export lands on the wrong server, a customer dataset is
            retained beyond consent, or a generative AI agent surfaces
            confidential IP during a demo—each scenario costs more than
            embarrassment. Data breaches now carry clear financial and
            regulatory consequences: IBM’s 2023 Cost of a Data Breach Report
            found the global average cost was{" "}
            <strong className="highlight">$4.45M</strong>, and GDPR penalties
            can reach
            <strong className="highlight">
              {" "}
              4% of annual revenue or €20M.
            </strong>
          </p>

          <p>
            How do teams building custom apps keep pace with these risks while
            delivering speed and innovation?
          </p>

          <p>
            This blog explains why security and compliance must be embedded into
            custom application development, not bolted on at the end. You’ll
            get:
          </p>

          <ul>
            <li>Practical controls that developers can implement today.</li>
            <li>
              Vendor-agnostic patterns and AWS-specific options for secure file
              transfer.
            </li>
            <li>
              How enterprise-grade tools like Microsoft Purview and Defender
              accelerate auditability and ongoing monitoring.
            </li>
          </ul>

          <p>
            Read on to learn trade-offs, measurable business outcomes (reduced
            time-to-secure, lower breach risk, audit readiness), and a compact
            code example for secure file access that you can adapt immediately.
          </p>

          <h3 id="why-build-security-and-compliance-into-custom-applications-not-after-launch">
            <strong>
              Why Build Security and Compliance into{" "}
              <span>Custom Applications</span> (Not After Launch)
            </strong>
          </h3>

          <p>
            Designing security and compliance into the development
            lifecycle—secure-by-design—reduces remediation time and cost. EY’s
            approach of integrating Microsoft Purview SDK into GenAI apps cut
            the time to implement secure features by roughly{" "}
            <strong>25–30%</strong> because controls were implemented during
            development rather than retrofitted. That’s time-to-market
            preserved, fewer rework sprints, and a clearer ROI for security
            budgets.
          </p>

          <h5>
            <strong>Real Outcomes to Cite to Stakeholders</strong>
          </h5>
          <ul>
            <li>
              <strong>
                <span className="highlight">Faster audits:</span>
              </strong>{" "}
              Built-in labeling, lineage, and policy enforcement simplify
              evidence collection.
            </li>
            <li>
              <strong>
                <span className="highlight">Lower breach surface:</span>
              </strong>{" "}
              Secure defaults, encrypted storage, and role-based access reduce
              exposure.
            </li>
            <li>
              <strong>
                <span className="highlight">
                  Scalability proven in the wild:
                </span>
              </strong>{" "}
              EY’s Dragonfly low-code rollout across 50,000 employees is a
              practical precedent for large-scale, compliance-centric
              distribution.
            </li>
          </ul>

          <h3 id="practical-controls-and-architecture-patterns-for-secure-custom-apps">
            <strong>
              Practical Controls and <span>Architecture Patterns</span> for
              Secure Custom Apps
            </strong>
          </h3>

          <h5>
            <strong>Core Controls Explained</strong>
          </h5>
          <ul>
            <li>
              <strong>
                <span className="highlight">Encryption:</span>
              </strong>{" "}
              Enforce TLS for transit and strong encryption for data at rest;
              centralize key management.
            </li>
            <li>
              <strong>
                <span className="highlight">
                  Authentication & Authorization:
                </span>
              </strong>{" "}
              Implement multi-factor authentication (MFA) and strict role-based
              access control (RBAC); integrate with identity platforms like
              Microsoft Entra.
            </li>
            <li>
              <strong>
                <span className="highlight">Secure Coding:</span>
              </strong>{" "}
              Adopt input validation, output encoding, safe error handling, and
              dependency scanning to reduce OWASP Top 10 risks.
            </li>
            <li>
              <strong>
                <span className="highlight">Microservices & Isolation:</span>
              </strong>{" "}
              Use service boundaries to limit blast radius and simplify
              patching.
            </li>
            <li>
              <strong>
                <span className="highlight">Continuous Testing:</span>
              </strong>{" "}
              Integrate static and dynamic analysis, plus scheduled penetration
              testing and vulnerability scans (
              <em>Qualys WAS/WAF recommended for web apps</em>).
            </li>
          </ul>

          <h5>
            <strong>Tooling that Accelerates Compliance</strong>
          </h5>
          <ul>
            <li>
              <strong>
                <span className="highlight">Microsoft Purview:</span>
              </strong>{" "}
              Embed sensitivity labels, policy-driven access, and data security
              posture management into apps—useful for GenAI agents that must not
              exfiltrate sensitive content.
            </li>
            <li>
              <strong>
                <span className="highlight">Defender & Entra:</span>
              </strong>{" "}
              Provide endpoint and identity protection integrated with
              application controls.
            </li>
            <li>
              <strong>
                <span className="highlight">Qualys:</span>
              </strong>{" "}
              Provides continuous scanning and WAF protection to help reduce
              public-facing attack vectors.
            </li>
          </ul>
          <h3 id="secure-data-transfer-and-file-sharing-practical-options-and-trade-offs">
            <strong>
              Secure Data Transfer and File Sharing —{" "}
              <span>Practical Options</span> and Trade-Offs
            </strong>
          </h3>
          <h5>
            <strong>Options You Can Adopt Quickly</strong>
          </h5>
          <ul>
            <li>
              <strong>
                <span className="highlight">
                  AWS Transfer Family (SFTP/FTPS/AS2):
                </span>
              </strong>{" "}
              Managed protocols with encryption, IAM integration, and
              per-protocol hourly service fees. A good fit for legacy workflows
              that require standard protocols.
            </li>
            <li>
              <strong>
                <span className="highlight">Transfer Family Web Apps:</span>
              </strong>{" "}
              Browser-based S3 access with IAM Identity Center—low friction for
              internal users, requires integration work.
            </li>
            <li>
              <strong>
                <span className="highlight">Amazon S3 Pre-signed URLs:</span>
              </strong>{" "}
              Temporary, fine-grained access tokens—low operational overhead but
              requires strict lifecycle and logging controls.
            </li>
            <li>
              <strong>
                <span className="highlight">
                  Serverless Web Apps (API Gateway + Lambda + S3 Pre-signed
                  URLs):
                </span>
              </strong>{" "}
              More control over authentication and auditing at the cost of
              operational complexity.
            </li>
            <li>
              <strong>
                <span className="highlight">VPC Endpoint Service:</span>
              </strong>{" "}
              Private connectivity for the strictest security posture, ideal
              when regulatory or contractual obligations forbid internet egress.
            </li>
          </ul>

          <h5>
            <strong>Decision Factors (So You Can Justify Choices)</strong>
          </h5>
          <ul>
            <li>Access patterns (machine vs. human)</li>
            <li>Data volumes</li>
            <li>Latency requirements</li>
            <li>Geographic data residency</li>
            <li>Key management needs</li>
            <li>Budget constraints</li>
          </ul>

          <p>
            <em>
              Choose the least complex option that satisfies compliance and
              operational SLAs.
            </em>
          </p>

          <h3 id="quick-code-snippet-generating-a-short-lived-s3-pre-signed-url-nodejs-aws-sdk-v3">
            <strong>
              Quick Code Snippet: Generating a Short-Lived{" "}
              <span>S3 Pre-signed URL</span> (Node.js, AWS SDK v3)
            </strong>
          </h3>

          <p>
            Use pre-signed URLs when you need temporary, auditable file access
            without creating user identities for every consumer.
          </p>

          <CodeBlockCustom
            code={`const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
                                          const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

                                          const s3 = new S3Client({ region: "us-east-1" });

                                         async function generatePresignedUrl(bucket, key, expiresSeconds = 300) {
                                        const command = new GetObjectCommand({ Bucket: bucket, Key: key });
                                        return await getSignedUrl(s3, command, { expiresIn: expiresSeconds });
                                          }`}
            language="javascript"
          />
          <p>
            <em>
              (Adapt for your language/SDK; enforce short expiry and log each
              issuance.)
            </em>
          </p>

          <h3 id="generate-a-short-lived-s3-pre-signed-url-in-dotnet">
            <strong>
              Generate a Short-Lived <span>S3 Pre-signed URL</span> in .NET
            </strong>
          </h3>
          <h6 className="quote">
            <strong>Secure Temporary Access for Uploads & Downloads</strong>
          </h6>

          <h5>
            <strong>NuGet Install</strong>
          </h5>
          <CodeBlockCustom
            code={`dotnet add package AWSSDK.S3`}
            language="bash"
          />

          <h5>
            <strong>Download (GET) Pre-signed URL</strong>
          </h5>
          {/*
  Define code in a variable for clarity
*/}
          {(() => {
            const dotnetGetSnippet = `using Amazon;
using Amazon.S3;
using Amazon.S3.Model;

public static class S3Presign
{
    private static readonly IAmazonS3 s3 = new AmazonS3Client(RegionEndpoint.USEast1);

    // Generates a GET pre-signed URL valid for \`expiresSeconds\` (default 300s)
    public static string GenerateGetUrl(string bucket, string key, int expiresSeconds = 300)
    {
        var req = new GetPreSignedUrlRequest
        {
            BucketName = bucket,
            Key = key,
            Verb = HttpVerb.GET,
            Expires = DateTime.UtcNow.AddSeconds(expiresSeconds)
            // Optional: restrict response headers
            // ResponseHeaderOverrides = new ResponseHeaderOverrides { ContentType = "application/pdf" }
        };

        var url = s3.GetPreSignedURL(req);

        // (Recommended) Log issuance for audit
        Console.WriteLine($"Issued GET presigned URL for s3://{bucket}/{key} expiring in {expiresSeconds}s at {DateTime.UtcNow:o}");

        return url;
    }
}`;
            return (
              <CodeBlockCustom code={dotnetGetSnippet} language="csharp" />
            );
          })()}

          <h5>
            <strong>Upload (PUT) Pre-signed URL</strong>
          </h5>
          {(() => {
            const dotnetPutSnippet = `public static string GeneratePutUrl(string bucket, string key, int expiresSeconds = 300, string? contentType = null, string? kmsKeyId = null)
{
    var req = new GetPreSignedUrlRequest
    {
        BucketName = bucket,
        Key = key,
        Verb = HttpVerb.PUT,
        Expires = DateTime.UtcNow.AddSeconds(expiresSeconds),
        ContentType = contentType ?? "application/octet-stream"
    };

    // Optional: enforce server-side encryption on upload
    if (!string.IsNullOrEmpty(kmsKeyId))
    {
        req.ServerSideEncryptionMethod = ServerSideEncryptionMethod.AWSKMS;
        req.ServerSideEncryptionKeyManagementServiceKeyId = kmsKeyId;
    }

    var url = s3.GetPreSignedURL(req);
    Console.WriteLine($"Issued PUT presigned URL for s3://{bucket}/{key} expiring in {expiresSeconds}s at {DateTime.UtcNow:o}");
    return url;
}`;
            return (
              <CodeBlockCustom code={dotnetPutSnippet} language="csharp" />
            );
          })()}

          <h5>
            <strong>Using It</strong>
          </h5>
          <CodeBlockCustom
            code={`var getUrl = S3Presign.GenerateGetUrl("my-bucket", "reports/payroll.csv", 300);
// client downloads with: GET {getUrl}

var putUrl = S3Presign.GeneratePutUrl("my-bucket", "uploads/invoice.pdf", 300, "application/pdf", kmsKeyId: "arn:aws:kms:us-east-1:123456789012:key/abcd-...");
/* client uploads with:
   PUT {putUrl}
   Content-Type: application/pdf
   (body = file bytes)
*/`}
            language="csharp"
          />

          <h5>
            <strong>Good Practices (Quick Checklist)</strong>
          </h5>
          <ul>
            <li>Keep expirations short (≤5–10 minutes).</li>
            <li>
              Log each issuance (who/what/when/object/key/IP if possible).
            </li>
            <li>Enable CloudTrail S3 data events and S3 server access logs.</li>
            <li>
              Scope IAM so only your app can generate URLs; consider bucket
              policies that require SigV4 and TLS.
            </li>
            <li>
              For uploads, validate Content-Type and size on the receiving side;
              use object ownership & bucket policies to prevent ACL issues.
            </li>
            <li>
              Use SSE-S3 or SSE-KMS (shown above) where required by policy.
            </li>
            <li>
              Prefer role-based credentials (EC2/ECS/EKS/IAM Roles Anywhere)
              over static keys.
            </li>
          </ul>

          <h3 id="compliance-frameworks-documentation-and-developer-workflows">
            <strong>
              Compliance Frameworks, Documentation, and{" "}
              <span>Developer Workflows</span>
            </strong>
          </h3>

          <h5>
            <strong>Regulatory Implications and Required Artifacts</strong>
          </h5>
          <p>
            <strong className="highlight">GDPR, HIPAA, PCI DSS</strong>: each
            requires documented technical and organizational measures; breaches
            have material fines and reputational costs. GDPR fines can reach
            <strong className="highlight">4% of global revenue</strong> or{" "}
            <strong className="highlight">€20M</strong>.
          </p>
          <p>
            To ensure evidence readiness, organizations should maintain records
            of data processing activities, document data flows, establish
            retention policies, and develop incident response plans. Tools that
            track lineage and labels (e.g.,{" "}
            <strong className="highlight">Microsoft Purview</strong>) make
            audits faster and less disruptive.
          </p>

          <h5>
            <strong>Developer Workflow Changes that Scale Compliance</strong>
          </h5>
          <ul>
            <li>
              <strong>
                <span className="highlight">Policy-as-Code:</span>
              </strong>{" "}
              Codify access policies and deploy them as part of CI/CD pipelines.
            </li>
            <li>
              <strong>
                <span className="highlight">Automated Checks:</span>
              </strong>{" "}
              Include SAST, DAST, and dependency scanning gates in pull
              requests.
            </li>
            <li>
              <strong>
                <span className="highlight">Threat Modeling Early:</span>
              </strong>{" "}
              Document assets, controls, and residual risks during design to
              inform architecture and testing.
            </li>
          </ul>

          <h3 id="conclusion-and-call-to-action">
            <strong>
              <span>Conclusion</span>
            </strong>
          </h3>

          <p>
            Security and compliance for custom apps shape{" "}
            <strong className="highlight">time to market</strong>,
            <strong className="highlight">legal exposure</strong>, and{" "}
            <strong className="highlight">long-term scalability</strong>. Start
            using encryption, identity controls, secure coding, and data
            governance policies early. Choose file-transfer solutions that match
            how users access data and meet regulatory requirements. Leverage
            tools like <strong className="highlight">Microsoft Purview</strong>,
            <strong className="highlight">Entra</strong>,{" "}
            <strong className="highlight">Defender</strong>, and{" "}
            <strong className="highlight">Qualys</strong>
            to automate monitoring and evidence gathering.
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
                Well, you could keep researching. Or—we can just talk it
                through. Book a free chat with Moltech Solutions Inc. We’ll take
                a look at your project, share what we think, and point you in
                the right direction. No hard sell. Just real, usable advice.
              </p>
              <div className="button-sec">
                <Link
                  rel="canonical"
                  className="service-btn"
                  href="/contact-us"
                >
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
      </>

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

export default DataSecurityCustomApp;
