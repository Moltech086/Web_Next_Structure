"use client";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { AppIcons } from "@/data/appIcons";
import Image from "next/image";
import CodeBlockCustom from "@/components/codeBlock/CodeBlockCustom";
import Link from "next/link";
const pubsubCreateCommand = `gcloud pubsub topics create gmail-notifications`;
const pubsubSubscriptionCommand = `gcloud pubsub subscriptions create email-worker-sub --topic=email-notifications`;

const webhookHandlerCode = `from fastapi import FastAPI, Request, status
import base64
import json

app = FastAPI()

@app.post(&quot;/gmail/webhook&quot;, status_code=status.HTTP_200_OK)
async def gmail_webhook(request: Request):
    &quot;&quot;&quot;
    Endpoint for Cloud Pub/Sub push subscriptions that forward Gmail ‘watch’
    notifications. Pub/Sub wraps the notification in a JSON envelope:

        {
          &quot;message&quot;: {
            &quot;data&quot;: &quot;base64-encoded-json&quot;,
            &quot;messageId&quot;: &quot;1234567890&quot;,
            ...
          },
          &quot;subscription&quot;: &quot;projects/-/subscriptions/your-sub&quot;
        }

    We need to:
    1. Decode the 'data' field (base-64).
    2. Parse the inner JSON to read Gmail’s historyId / email metadata.
    &quot;&quot;&quot;
    envelope = await request.json()
    message  = envelope.get(&quot;message&quot;, {})
    encoded  = message.get(&quot;data&quot;)

    if not encoded:
        # Pub/Sub might occasionally send test messages with no data.
        return {&quot;status&quot;: &quot;ignored – no data&quot;}

    decoded_bytes = base64.b64decode(encoded)
    decoded_str   = decoded_bytes.decode(&quot;utf-8&quot;)
    gmail_event   = json.loads(decoded_str)

    # 👉  Replace with your own processing logic
    #     (e.g., push historyId into another Pub/Sub topic or queue a worker)
    print(&quot;📬 Gmail push notification:&quot;, json.dumps(gmail_event, indent=2))

    return {&quot;status&quot;: &quot;success&quot;}`;

const PubSub = () => {
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
    <div id="main-content">
      <div className="machinelearning-header-image">
        <Image
          src={AppIcons.pubsub14}
          alt="Building Reliable Email Systems Using Pub/Sub Messaging"
          loading="lazy"
          width={1280}
          height={640}
          style={{ height: "auto", cursor: "pointer" }}
          onClick={() =>
            handleImageClick(
              AppIcons.pubsub14,
              "Building Reliable Email Systems Using Pub/Sub Messaging"
            )
          }
        />
      </div>

      <p id="introduction" className="mt-3">
        <strong>
          “In today&rsquo;s digital landscape, efficient communication between
          software systems is crucial for business success.”
        </strong>
      </p>
      <p>
        This opening sentence establishes the fundamental business problem being
        addressed. Modern businesses rely on multiple software systems that need
        to exchange information efficiently. For example:
      </p>
      <ul>
        <li>CRM systems need to know about new customer inquiries</li>
        <li>Support ticket systems need to track email conversations</li>
        <li>Marketing automation tools need to monitor customer responses</li>
        <li>
          Workflow systems need to initiate processes based on incoming
          communications
        </li>
      </ul>
      <p>
        When these systems can&rsquo;t communicate efficiently, businesses
        experience delays, lost information, and missed opportunities. The
        statement frames the technical discussion that follows in terms of
        business value.
      </p>
      <p>
        In this post, we&rsquo;ll explore how Pub/Sub works for email
        integration, step-by-step implementation guidance, and best practices to
        optimize deliverability and performance.
      </p>

      <h3 id="what-is-pub-sub">
        <strong>1. What Is Pub/Sub?</strong>
      </h3>
      <p>
        Publish-subscribe is a messaging pattern where senders (publishers)
        categorize messages into classes without knowledge of which receivers
        (subscribers) will receive them. Similarly, subscribers express interest
        in specific message classes and only receive messages that match their
        interests, without knowledge of which publishers are generating the
        messages.
      </p>
      <p>This decoupling offers several advantages:</p>
      <ul>
        <li>
          <strong>Scalability:</strong> Systems can handle large volumes of
          messages without becoming bottlenecks
        </li>
        <li>
          <strong>Flexibility:</strong> New publishers and subscribers can be
          added without disrupting existing components
        </li>
        <li>
          <strong>Resilience:</strong> Failure in one component doesn&rsquo;t
          necessarily affect others
        </li>
      </ul>
      <div className="blog-header-image mt-0 mb-0">
        {" "}
        <Image
          src={AppIcons.Pubsub1}
          alt="Pubsub Preview"
          loading="lazy"
          width={1280}
          height={640}
          style={{ height: "auto", cursor: "pointer" }}
          onClick={() => handleImageClick(AppIcons.Pubsub1, "Pubsub Preview")}
        />
      </div>

      <ol className="mt-1">
        <li>
          Publisher sends an <strong>“EmailEvent”</strong> with payload
          (recipient, template ID, data).
        </li>
        <li>Pub/Sub Service persists and routes the event.</li>
        <li>
          Email Subscriber picks up events and calls your SMTP or email API
          provider (e.g., SendGrid).
        </li>
        <li>Analytics Subscriber logs events for metrics and monitoring.</li>
      </ol>

      <h4 id="email-integration-challenge">
        <strong>The Email Integration Challenge</strong>
      </h4>
      <p>
        Email remains a critical communication channel for businesses, but
        integrating email functionality with modern applications presents
        several challenges:
      </p>
      <ul>
        <li>Managing high volumes of incoming and outgoing messages</li>
        <li>Ensuring reliable delivery despite network issues</li>
        <li>
          Processing emails asynchronously without blocking user interactions
        </li>
        <li>Tracking email statuses (delivered, opened, bounced)</li>
        <li>Implementing complex workflows triggered by email events</li>
      </ul>
      <p>
        Pub/Sub architectures address these challenges elegantly by providing a
        robust foundation for email processing pipelines.
      </p>

      <h4 id="implementing-pub-sub">
        <strong>Implementing Pub/Sub for Email Integration</strong>
      </h4>
      <h5>
        <strong>Core Components</strong>
      </h5>
      <p>A typical pub/sub-based email integration system consists of:</p>
      <ol>
        <li>
          <strong>Publishers:</strong> Components that generate email-related
          events (user registrations, order confirmations, marketing campaigns)
        </li>
        <li>
          <strong>Message Broker:</strong> The central hub that manages message
          routing (Kafka, RabbitMQ, Google Cloud Pub/Sub, AWS SNS/SQS)
        </li>
        <li>
          <strong>Subscribers:</strong> Services that consume email events and
          perform specific actions (sending emails, updating databases,
          triggering workflows)
        </li>
        <li>
          <strong>Email Service Provider (ESP):</strong> The external service
          responsible for actual email delivery (SendGrid, Mailchimp, Amazon
          SES)
        </li>
      </ol>

      <h4 id="gmail-integration-pub-sub">
        <strong>Gmail Integration Using Pub/Sub</strong>
      </h4>
      <p>
        Gmailfs API with pub/sub notifications provides a powerful way to
        integrate email functionality into your applications. Lets explore how
        this works in practice:
      </p>

      <h5>
        <strong>1. Google Cloud Setup</strong>
      </h5>
      <ul>
        <li>
          Open the{" "}
          <Link
            href="https://console.cloud.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Cloud Console
          </Link>
          .
        </li>
        <li>
          Click on <strong>IAM and Admin</strong>
        </li>
        <li>Create a project and name it (e.g., “Your Project Name”)</li>
      </ul>
      <div className="blog-header-image">
        <Image
          src={AppIcons.Pubsub2}
          alt="Gmail Integration Using Pub/Sub"
          loading="lazy"
          width={1280}
          height={640}
          style={{ height: "auto", cursor: "pointer" }}
          onClick={() =>
            handleImageClick(AppIcons.Pubsub2, "Gmail Integration Using Pub/Sub")
          }
        />
      </div>

      <h5>
        <strong>2. Enable Required APIs</strong>
      </h5>
      <p>
        Go to <strong>APIs &amp; Services &gt; Library</strong> and enable the
        following:
      </p>
      <ul>
        <li>Gmail API</li>
        <li>Cloud Pub/Sub API</li>
      </ul>

      <div className="blog-header-image">
        <Image
          src={AppIcons.Pubsub3}
          alt="Enable Required APIs"
          loading="lazy"
          width={1280}
          height={640}
          style={{ height: "auto", cursor: "pointer" }}
          onClick={() =>
            handleImageClick(AppIcons.Pubsub3, "Enable Required APIs")
          }
        />
      </div>

      <div className="blog-header-image">
        <Image
          src={AppIcons.Pubsub4}
          alt="Cloud Pub/Sub API"
          loading="lazy"
          width={1280}
          height={640}
          style={{ height: "auto", cursor: "pointer" }}
          onClick={() =>
            handleImageClick(AppIcons.Pubsub4, "Cloud Pub/Sub API")
          }
        />
      </div>

      <h5 id="create-service-account">
        <strong>3. Create Service Account and Credentials:</strong>
      </h5>
      <ul>
        <li>
          Go to <strong>IAM &amp; Admin &gt; Service Accounts</strong> &gt;{" "}
          <strong>Create Service Account</strong>
        </li>
      </ul>

      <div className="blog-header-image">
        {" "}
        <Image
          src={AppIcons.Pubsub5}
          alt="Create Service Account and Credentials"
          loading="lazy"
          width={1280}
          height={640}
          style={{ height: "auto", cursor: "pointer" }}
          onClick={() =>
            handleImageClick(AppIcons.Pubsub5, "Create Service Account and Credentials")
          }
        />
      </div>

      <div className="blog-header-image">
        <Image
          src={AppIcons.Pubsub6}
          alt="My Gmail Listener"
          loading="lazy"
          width={1280}
          height={640}
          style={{ height: "auto", cursor: "pointer" }}
          onClick={() =>
            handleImageClick(AppIcons.Pubsub6, "My Gmail Listener")
          }
        />
      </div>

      <ul>
        <li>
          Grant access to this service account with the role:{" "}
          <strong>Pub/Sub Publisher</strong>.
        </li>
        <li>
          Go to the <strong>Keys</strong> tab and create a new key.
        </li>
      </ul>
      <div className="blog-header-image">
        <Image
          src={AppIcons.Pubsub7}
          alt="My Gmail Listener"
          loading="lazy"
          width={1280}
          height={640}
          style={{ height: "auto", cursor: "pointer" }}
          onClick={() =>
            handleImageClick(AppIcons.Pubsub7, "My Gmail Listener")
          }
        />
      </div>

      <ul>
        <li>
          Select <strong>Key type</strong>, we choose <strong>JSON</strong>
        </li>
      </ul>
      <div className="blog-header-image">
        <Image
          src={AppIcons.Pubsub8}
          alt="My Gmail Listener Private Key"
          loading="lazy"
          width={1280}
          height={640}
          style={{ height: "auto", cursor: "pointer" }}
          onClick={() =>
            handleImageClick(AppIcons.Pubsub8, "My Gmail Listener Private Key")
          }
        />
      </div>

      <ul>
        <li>
          Download the JSON key file (keep it safe!). Please note, if this is
          lost, it can create a security risk.
        </li>
      </ul>
      <h5>
        <strong>4. We need to Grant Gmail Access via OAuth2</strong>
      </h5>
      <p>
        <strong>Please note:</strong> Google does not allow service accounts to
        access Gmail unless you are a G&nbsp;Suite/Workspace admin using
        domain-wide delegation. For personal accounts, we need to use OAuth
        access.
      </p>
      <div className="blog-header-image">
        {" "}
        <Image
          src={AppIcons.Pubsub9}
          alt="Grant Gmail Access via OAuth2"
          loading="lazy"
          width={1280}
          height={640}
          style={{ height: "auto", cursor: "pointer" }}
          onClick={() =>
            handleImageClick(AppIcons.Pubsub9, "Grant Gmail Access via OAuth2")
          }
        />
      </div>

      <ul>
        <li>
          Open <strong>APIs &amp; Services &gt; Credentials</strong> and click
          on <strong>Create Credentials</strong>
        </li>
        <li>
          Choose <strong>OAuth client ID</strong>
        </li>
        <li>
          <strong>Application Type</strong>, choose based on your application.
          (We use <strong>Web application</strong> in this example.)
        </li>
      </ul>
      <div className="blog-header-image">
        <Image
          src={AppIcons.Pubsub10}
          alt="Create OAuth Client ID"
          loading="lazy"
          width={1280}
          height={640}
          style={{ height: "auto", cursor: "pointer" }}
          onClick={() =>
            handleImageClick(AppIcons.Pubsub10, "Create OAuth Client ID")
          }
        />
      </div>

      <ul>
        <li>
          Either you can add <strong>JavaScript Origins</strong> or{" "}
          <strong>Redirect URIs</strong> for your application. We will use the
          Redirect URI as we need to configure a webhook as below:
          <br />
          <strong>https://yourdomain.com/oauth2callback</strong>{" "}
          <em>(adjust as needed)</em>
        </li>
        <li>
          Please save the <strong>Client ID</strong> and{" "}
          <strong>Client Secret</strong>.
        </li>
      </ul>
      <p>
        Now open the <strong>Cloud Shell</strong>.
      </p>

      <div div className="blog-header-image">
        <Image
          src={AppIcons.Pubsub11}
          alt="Cloud Shell"
          loading="lazy"
          width={1280}
          height={640}
          style={{ height: "auto", cursor: "pointer" }}
          onClick={() =>
            handleImageClick(AppIcons.Pubsub11, "Cloud Shell")
          }
        />
      </div>
      <h5 id="create-pub-sub-topic">
        <strong>5. Create a Pub/Sub Topic in Google Cloud</strong>
      </h5>
      <p>
        First, you&rsquo;ll need to create a topic in Google Cloud Pub/Sub that
        will receive notifications from Gmail. Run the following command:
      </p>
      <CodeBlockCustom code={pubsubCreateCommand} language="bash" />

      <p>
        <strong>Please note:</strong> <strong>gmail-notifications</strong> is
        the topic name — you can choose your own name.
      </p>
      <p>Now, you need to subscribe to the topic.</p>
      <CodeBlockCustom code={pubsubSubscriptionCommand} language="bash" />
      <h5 id="iam-role-permissions">
        <strong>6. IAM Role Permissions for Pub/Sub</strong>
      </h5>
      <p>
        Ensure the service account has the correct roles and permissions
        assigned to it.
      </p>
      <ul>
        <li>
          Go to <strong>IAM &amp; Admin &gt; IAM</strong>
        </li>
        <li>
          Provide access (grant the following roles) to the service account:
        </li>
        <li>
          <strong>Pub/Sub Publisher</strong> (for production)
        </li>
        <li>
          <strong>Pub/Sub Subscriber</strong> (for manual testing)
        </li>
        <li>
          <strong>Pub/Sub Editor</strong> (optional for development)
        </li>
      </ul>

      <div className="blog-header-image">
        <Image
          src={AppIcons.Pubsub12}
          alt="IAM Role Permissions"
          loading="lazy"
          width={1280}
          height={640}
          style={{ height: "auto", cursor: "pointer" }}
          onClick={() =>
            handleImageClick(AppIcons.Pubsub12, "IAM Role Permissions")
          }
        />
      </div>

      <h5>
        <strong>
          7. Handling Gmail Push Notifications with FastAPI + Pub/Sub
        </strong>
      </h5>
      <p>
        If you also need to consume Gmail-Watch notifications (the Gmail API can
        publish a Pub/Sub message every time a mailbox changes), drop the
        following FastAPI endpoint into the same service that processes your
        email-events topic. It receives the HTTP push that Cloud Pub/Sub sends
        to your webhook, decodes the base-64 payload, and prints the change
        record.
      </p>

      <CodeBlockCustom code={webhookHandlerCode} language="python" />
      <h5>
        <strong>Note:</strong>
      </h5>
      <ul>
        <li>
          <p>
            Gmail <strong>watch()</strong> expires every 7 days
          </p>
        </li>
        <li>
          <p>
            Set a <strong>cron job or scheduler</strong>cron job or scheduler to
            refresh it automatically.
          </p>
        </li>
        <li>
          <p>
            You have to set up the webhook URL for push notification as below
          </p>
        </li>
      </ul>
      <div className="blog-header-image">
        <Image
          src={AppIcons.Pubsub13}
          alt="Edit Subscription"
          loading="lazy"
          width={1280}
          height={640}
          style={{ height: "auto", cursor: "pointer" }}
          onClick={() =>
            handleImageClick(AppIcons.Pubsub13, "Edit Subscription")
          }
        />
      </div>
      <p className="txt-centar">Gmail Subscriber</p>
      <h3 id="production-best-practices">
        <strong>
          When moving your Gmail Pub/Sub integration to production, follow these
          best practices:
        </strong>
      </h3>
      <ul>
        <li>
          <strong>1. Secure Your Webhook Endpoint</strong>
          <br />
          Always use HTTPS and implement proper authentication for your webhook.
        </li>
        <li>
          <strong>2. Implement Comprehensive Logging</strong>
          <br />
          Track all important events in your integration.
        </li>
        <li>
          <strong>3. Create a Resilient Email Processing Pipeline</strong>
          <br />
          Design your system to handle failures gracefully.
        </li>
      </ul>

      <h3 id="common-challenges-solutions">
        <strong>Common Challenges and Solutions</strong>
      </h3>
      <ul>
        <li>
          <strong>1. Authentication Failures</strong>
          <br />
          <strong>Challenge:</strong> OAuth2 tokens expire or become invalid.
          Gmail only allows API calls with user-granted scopes; access tokens
          expire after 1 hour.
          <br />
          <strong>Solution:</strong> Implement token refresh logic and handle
          authentication errors gracefully. OR
          <br />
          Use offline access (
          <span className="package-name-light">access_type=offline</span>) so
          Google issues a refresh token.
        </li>

        <li>
          <strong>2. Push Notification Delivery Issues</strong>
          <br />
          <strong>Challenge:</strong> Webhook endpoint unreachable or returning
          errors.
          <br />
          <strong>Solution:</strong> Implement health checks and monitoring for
          your webhook endpoint.
        </li>

        <li>
          <strong>3. Processing High Email Volume</strong>
          <br />
          <strong>Challenge:</strong> Heavy email traffic overwhelming your
          processing capacity.
          <br />
          <strong>Solution:</strong> Implement rate limiting and batching.
        </li>

        <li>
          <strong>4. Watch Expiration (push notifications)</strong>
          <br />
          <strong>Challenge:</strong> users.watch expires after ~7 days; if you
          forget to renew, you miss events.
          <br />
          <strong>Solution:</strong> Schedule a Cloud Scheduler / cron job to
          renew every 6 days; persist the latest historyId so you can replay
          missed events with users.history.list.
        </li>

        <li>
          <strong>5. Duplicate or Out-of-Order Webhooks</strong>
          <br />
          <strong>Challenge:</strong> Pub/Sub guarantees at-least-once delivery;
          Gmail can emit several notifications for the same change.
          <br />
          <strong>Solution:</strong> Deduplicate by the combination (historyId,
          messageId) before processing. Use a Redis set, Firestore document, or
          SQL unique index as a bloom.
        </li>
      </ul>

      <h3 id="conclusion">
        <strong>Conclusion</strong>
      </h3>
      <p>
        Integrating your email workflows with a Pub/Sub messaging system brings
        robustness, scalability, and flexibility to your communications
        infrastructure. By decoupling event production from email delivery, you
        can handle varying workloads, ensure deliverability, and add new
        consumers (analytics, archiving) with minimal changes.
      </p>

      {/* ✅ Image Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{modalImageAlt}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <Image src={modalImageSrc} alt={modalImageAlt} fluid />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PubSub;
