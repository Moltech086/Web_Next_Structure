"use client";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { AppIcons } from "@/data/appIcons";
import Image from "next/image";
import ServiceFAQ from "@/components/serviceFAQ/ServiceFAQ";
import { blogConfig } from "@/data/blogs/security-first-sdlc-integrate-security";
import Link from "next/link";
import Iconify from "@/components/ui/icons/Iconify";
import CodeBlockCustom from "@/components/codeBlock/CodeBlockCustom";

const SecurityFirstSDLC = () => {
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
              src={AppIcons.SecurityFirstIntegrating}
              alt="Security First: Integrating Robust Security into Custom Software
              Development Lifecycles"
              loading="lazy"
              width={1280}
              height={640}
              style={{ height: "auto", cursor: "pointer" }}
              onClick={() =>
                handleImageClick(
                  AppIcons.SecurityFirstIntegrating,
                  "Security First: Integrating Robust Security into Custom Software Development Lifecycles"
                )
              }
            />
          </div>
          <h3 id="introduction">
            <strong>
              Security First: Integrating Robust Security into Custom Software
              Development Lifecycles
            </strong>
          </h3>

          <p>
            Does this sound familiar? A fintech app in the works, a normal
            component upgrade, and a flood of dependency alarms that stop
            delivery for days.
          </p>

          <p>
            It&apos;s not uncommon for security problems to start in the
            software supply chain. They mess up delivery schedules, cost a lot
            of money to fix, and hurt reputations.
          </p>

          <p>
            When security is an afterthought, programs have to deal with delays,
            fines, and inefficiencies in their operations.
          </p>

          <p>
            A secure software development lifecycle (SDLC) is no longer an
            option. The U.S. Department of Defense&apos;s Software Fast Track
            (SWFT) is an example of how speed, automation, and openness must go
            hand in hand with strong security safeguards.
          </p>

          <p>This blog is your practical roadmap. We’ll break down:</p>

          <ul>
            <li>
              What to automate (
              <strong className="highlight">SBOMs, VEX</strong>)
            </li>
            <li>
              Where to embed checks (
              <strong className="highlight">CI/CD, IDEs</strong>)
            </li>
            <li>
              Which metrics to track (
              <strong className="highlight">
                MTTR, vulnerability coverage
              </strong>
              )
            </li>
            <li>
              How to align teams and budgets to maintain speed without
              compromising compliance
            </li>
          </ul>

          <p>
            By the conclusion, you&apos;ll have obvious patterns, a sample CI
            snippet for automating scans, and a list of criteria you can use to
            decide which security investments to make first.
          </p>

          <h3 id="why-a-secure-software-development-lifecycle-is-non-negotiable">
            <strong>
              1. Why a Secure Software Development Lifecycle Is Non-Negotiable
            </strong>
          </h3>

          <p>
            If you treat security as an extra, you risk slow, expensive remedies
            and regulatory problems. From SWFT to national cybersecurity laws,
            procurement models and rules increasingly require traceability,
            automation, and security measures that can be checked.
          </p>

          <p>The benefits of a secure SDLC for business are:</p>

          <ul>
            <li>
              <strong className="highlight">Faster approvals:</strong> Automated
              artifacts cut down on the need for manual approvals and delays in
              getting things.
            </li>
            <li>
              <strong className="highlight">Less risk:</strong> Continuous
              scanning finds problems that can be used sooner, which lowers the
              Mean Time to Remediate (MTTR) and the blast radius.
            </li>
            <li>
              <strong className="highlight">Predictable costs:</strong>{" "}
              Investing in Minimum Viable Security (MVS) early on saves costly
              retrofits and allows for progressive growth as risk and complexity
              increase.
            </li>
          </ul>

          <p>
            <strong>Ask your teams:</strong>
          </p>

          <ul>
            <li>
              Are <strong className="highlight">SBOMs</strong> automatically
              generated for every build?
            </li>
            <li>
              Do pipelines <strong className="highlight">fail fast</strong> on
              critical vulnerabilities?
            </li>
            <li>
              Is vulnerability exploitability mapped (
              <strong className="highlight">VEX</strong>) to avoid time wasted
              on non-exploitable CVEs?
            </li>
          </ul>

          <h3 id="automate-sboms-vex-and-continuous-vulnerability-management">
            <strong>
              2. Automate SBOMs, VEX, and Continuous Vulnerability Management
            </strong>
          </h3>

          <p>
            Manual SBOMs and ad-hoc scans create blind spots. Treat security
            artifacts like build artifacts: generated on every commit, stored,
            signed, and queryable. This enables real-time risk posture, cleaner
            audits, and fast, defensible decisions when new CVEs drop.
          </p>

          <h4>
            <strong>What to Automate (and Why)</strong>
          </h4>
          <ul className="list-disc list-inside">
            <li>
              <strong>
                Continuous SBOMs{" "}
                <span className="highlight">(CycloneDX/Syft)</span>
              </strong>
              <br />
              Every build emits an SBOM that travels with the artifact and
              release notes. Store in your artifact repo; sign + attest for
              provenance.
            </li>
            <li>
              <strong>
                VEX <span className="highlight">(OpenVEX/CSAF)</span> for
                noise-free prioritization
              </strong>
              <br />
              Map CVEs to exploitability and product applicability to avoid
              blanket remediations. Attach VEX alongside SBOM so triage can be
              automated.
            </li>
            <li>
              <strong>
                Pipeline Scanning{" "}
                <span className="highlight">(SCA + SAST + optional DAST)</span>
              </strong>
              <br />
              Run in CI with fail-fast gates on high severity. Track MTTR, %
              builds passing gates, and coverage of repos/components with SBOMs.{" "}
              <em>Pro tip:</em> Keep “warn then enforce” rollouts—start by
              surfacing results without failing builds, then switch on gates
              once teams have burn-down momentum.
            </li>
          </ul>

          <h4 id="jenkins-end-to-end-example-sbom-sca-sast-vex-signing">
            <strong>
              Jenkins: End-to-End Example (SBOM + SCA + SAST + VEX + Signing)
            </strong>
          </h4>
          <p>
            This pipeline demonstrates how to generate SBOMs, run SCA/SAST,
            optionally integrate VEX, and enforce security gates. Replace
            package manager bits to match your stack (Node shown as an example).
            Assumes Jenkins credentials for <code>SNYK_TOKEN</code> and
            (optionally)
            <code>COSIGN_KEY</code>.
          </p>

          <CodeBlockCustom
            code={`pipeline {
  agent { label 'linux' }

  parameters {
    choice(name: 'SEVERITY_GATE', choices: ['low','medium','high','critical'], description: 'Fail build on >= this severity')
  }

  environment {
    SNYK_TOKEN = credentials('SNYK_TOKEN')    // Jenkins Secret Text
    SBOM_FILE  = 'sbom.cyclonedx.json'
  }

  stages {
    stage('Security Check (SBOM + SCA)') {
      steps {
        sh '''
          set -e

          # 1) Install deps if Node project (adjust for your stack)
          if [ -f package.json ]; then
            npm ci --no-audit --no-fund || npm install
          fi

          # 2) Generate SBOM (CycloneDX) with Syft
          docker run --rm -v "$PWD:/work" -w /work anchore/syft:latest dir:. -o cyclonedx-json > 

          # 3) Snyk SCA (JSON for archiving) — do not fail yet
          docker run --rm -e SNYK_TOKEN= -v "$PWD:/work" -w /work snyk/snyk-cli:stable \\
            test --json > snyk-report.json || true

          # 4) Gate by severity threshold using Node (no jq needed)
          node -e '
            const fs = require("fs");
            const sev = process.env.SEVERITY_GATE || "high";
            const rank = {low:1, medium:2, high:3, critical:4};
            let j = {};
            try { j = JSON.parse(fs.readFileSync("snyk-report.json","utf8")); } catch(e) {}
            const vulns = (j.vulnerabilities || []);
            const bad = vulns.filter(v => rank[v.severity] >= rank[sev]).length;
            console.log(\`Violations >= \${sev}: \${bad}\`);
            process.exit(bad > 0 ? 1 : 0);
          '
        '''
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'sbom.cyclonedx.json,snyk-report.json', fingerprint: true
    }
    failure {
      echo 'Security gate failed. See snyk-report.json for details.'
    }
  }
}`}
            language="groovy"
          />

          <p>
            <em>
              (Adapt for your CI/CD system and package manager; keep security
              checks automated, signed, and enforced progressively.)
            </em>
          </p>

          <h3 id="shift-left-tooling-for-a-security-first-sdlc">
            <strong>
              Shift-Left Tooling for a <span>Security-First SDLC</span>
            </strong>
          </h3>

          <p>
            To shift security left, developers need to use security principles
            in their IDEs, pipelines, and review procedures every day. This
            method makes sure vulnerabilities are found early, when fixing them
            is quicker, cheaper, and less disruptive.
          </p>

          <h4>
            <strong>Recommended Stack of Tools for Developers</strong>
          </h4>
          <ul>
            <li>
              <strong className="highlight">IDE Plugins:</strong> Tools like
              SonarLint give developers real-time feedback on secure coding,
              which helps them find insecure patterns while they code.
            </li>
            <li>
              <strong className="highlight">Dependency Scanning:</strong> Use
              tools like Snyk, Trivy, or OSV-Scanner to find and fix open-source
              risks in pull requests before they are merged.
            </li>
            <li>
              <strong className="highlight">Secrets Management:</strong> Use
              HashiCorp Vault or AWS Secrets Manager to store secrets securely
              so that hard-coded credentials are no longer needed and automated
              rotation policies are followed.
            </li>
            <li>
              <strong className="highlight">
                Cloud and AI Posture Security:
              </strong>{" "}
              Use tools like Wiz or ART to keep an eye on cloud setups and
              protect machine learning environments from data leaks and
              misconfigurations.
            </li>
          </ul>

          <h4>
            <strong>Important Metrics to Watch</strong>
          </h4>
          <ul>
            <li>
              <strong className="highlight">
                Mean Time to Remediate (MTTR):
              </strong>{" "}
              Critical issues should be rectified in days, while severe ones
              within 72 hours.
            </li>
            <li>
              <strong className="highlight">PR Security Pass Rate:</strong>{" "}
              Target 90%+ of pull requests passing automated security tests on
              the first attempt.
            </li>
            <li>
              <strong className="highlight">Fewer Production Incidents:</strong>{" "}
              Monitor security incidents related to third-party dependencies and
              work to reduce them over time.
            </li>
            <li>
              <strong className="highlight">Metrics for Coverage:</strong>{" "}
              Ensure all repositories create SBOMs and that at least 95% of
              builds include automated scans.
            </li>
          </ul>

          <h4>
            <strong>Budget Information</strong>
          </h4>
          <ul>
            <li>
              <strong className="highlight">
                Rudimentary Security ($5,000 – $15,000):
              </strong>{" "}
              IDE plugins, CI dependency scanning, and basic secrets management.
            </li>
            <li>
              <strong className="highlight">
                Advanced Security ($15,000 – $50,000):
              </strong>{" "}
              Add automatic SAST, initial DAST, and dashboards for all
              vulnerabilities.
            </li>
            <li>
              <strong className="highlight">
                Enterprise-Grade Security ($50,000+):
              </strong>{" "}
              Full CI/CD security integration, real-time risk scoring,
              policy-as-code, and advanced posture management across multi-cloud
              and AI-driven environments.
            </li>
          </ul>
          <h3 id="organizational-strategies-culture-pipeline-hardening-and-compliance">
            <strong>
              Organizational Strategies:{" "}
              <span>Culture, Pipeline Hardening, and Compliance</span>
            </strong>
          </h3>

          <p>
            Tools alone won’t drive adoption — culture and governance make
            security stick.
          </p>

          <h4>
            <strong>Steps to Operationalize Security</strong>
          </h4>
          <ul>
            <li>
              <strong className="highlight">Secure by Design:</strong> Bake
              security reviews into architecture and design phases.
            </li>
            <li>
              <strong className="highlight">Shared Ownership:</strong> Assign
              “security guardians” within each team to foster accountability and
              knowledge-sharing.
            </li>
            <li>
              <strong className="highlight">Pipeline Integrity:</strong>{" "}
              Implement SLSA-level controls for artifact provenance and enforce
              immutability.
            </li>
            <li>
              <strong className="highlight">Comprehensive Testing:</strong>{" "}
              Automate SAST, DAST, and SCA checks at release gates.
            </li>
            <li>
              <strong className="highlight">AI-Assisted Security:</strong>{" "}
              Leverage generative AI for triage and analysis, but validate
              outputs for accuracy.
            </li>
          </ul>

          <h4>
            <strong>Business Impact</strong>
          </h4>
          <ul>
            <li>Reduced vendor and supply chain risks</li>
            <li>Faster, more confident audits</li>
            <li>
              Enhanced regulator and customer trust through verifiable,
              automated artifacts
            </li>
          </ul>

          <h3 id="conclusion-call-to-action">
            <strong>Conclusion </strong>
          </h3>

          <p>
            A security-first SDLC isn’t about slowing down — it’s about building
            faster, safer, and smarter. Automating SBOM generation, leveraging
            VEX for prioritization, and embedding security early drives both
            compliance and speed.
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

export default SecurityFirstSDLC;
