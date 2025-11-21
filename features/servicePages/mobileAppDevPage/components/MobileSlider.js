import React, { useEffect, useRef } from "react";
import Iconify from "@/components/ui/icons/Iconify";
import "../../ServiceSlider.scss";

const MobileSlider = () => {
  const reasons = [
    {
      icon: "fluent:people-team-16-regular",
      title: "Built Just for You",
      description:
        "You are special—and your app should be as well. We listen, know your objectives, and create unique mobile solutions fit for your company, clients, and development narrative.",
    },
    {
      icon: "tabler:world-search",
      title: "Local Support, Global Expertise",
      description:
        "Our knowledgeable worldwide team and U.S. presence enable us to offer quick, clear communication and reasonably priced delivery without compromising quality.",
    },
    {
      icon: "mdi:shield-check-outline",
      title: "Clear and Honest Process",
      description:
        "No technical terms. No unstated costs. Just candid criticism, open communication, and full transparency during the project.",
    },
    {
      icon: "mdi:handshake-outline",
      title: "We Stay With You",
      description:
        "We are your partner at every stage, from the initial concept to launch and beyond. After the app goes live, we don't go away.",
    },
    {
      icon: "mdi:briefcase-check-outline",
      title: "Flexible Engagement Models",
      description:
        "We tailor our engagement to your needs, whether it is short-term or long-term, part-time or full-time, or project-based or contract-to-hire.",
    },
    // {
    //   icon: "mdi:star-check-outline", // Reliable + visible
    //   title: "Experience That Matters",
    //   description:
    //     "We have solved real-world issues in various industries, including healthcare, logistics, e-commerce, and education, and we can offer insightful solutions to your project.",
    // },
    {
      icon: "mdi:lock-check-outline",
      title: "Security Built In",
      description:
        "The trust of your users is our top priority. From the beginning, every app we develop complies with strict security guidelines.",
    },
    {
      icon: "mdi:autorenew",
      title: "Flexible and Ready to Adapt",
      description:
        "Our experts adapt to your tools, workflows, and culture for seamless teamwork.",
    },
    {
      icon: "akar-icons:headphone", // ✅ Ongoing Support
      title: "Ongoing Support",
      description:
        "We monitor, update, and improve your app after launch to ensure it remains current, responsive, and user-friendly.",
    },
    {
      icon: "mdi:scale-balance",
      title: "Smart Value for Your Budget",
      description:
        "We provide excellent work that suits your objectives and price range. Our services are dependable, scalable, and results-oriented over the long term.",
    }
  ];

  return (
    <section className="why-choose-us-section">
      <div className="container">
        <div className="heading-block">
          <h2 className="headline-title">
            Why Choose <span className="highlight">Moltech Solutions Inc. ?</span><br /> Your Trusted Mobile App Development Partner
          </h2>
          <p>
            We create long-term alliances, not only apps.
            <br />
            At <span className="highlight">Moltech Solutions Inc.</span> , we are aware that behind every app concept is a vision, a company, and actual people depending on its performance. We thus treat every project as our own since our responsibility is your success.
          </p>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div  key={index} className={`reason-card card-${index + 1}`}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem"}}>
                <div className="reason-icon" style={{marginBottom: "0" }}>
                  <Iconify icon={reason.icon} />
                </div>
                <div className="reason-title" style={{marginBottom: "0" }}>{reason.title}</div>
              </div>
              <div>
                <div className="reason-description">{reason.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileSlider;
