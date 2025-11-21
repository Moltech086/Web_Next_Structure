import React from "react";
import { Icon } from "@iconify/react";
import "./ServiceFAQ.scss";
import Accordion from "@/components/accordion/Accordion";
import Link from "next/link";

const ServiceFAQ = ({ items, title, customDesc }) => {
  return (
    <section className="service-faq">
      {/* Decorative background orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>

      <div className="faq-container">
        {/* Section Title */}
        <div className="faq-header">
          <div className="faq-badge">
            <Icon icon="mdi:message-text" className="faq-badge-icon" />
            <span>Frequently Asked Questions</span>
          </div>
        </div>

        <div className="faq-grid">
          {/* Left Side */}
          <div className="faq-left">
            <div className="faq-card">
              <div className="faq-title-wrapper">
                <h2 className="faq-title">
                  Do you have Questions for{" "}
                  <span className="highlight">{title} </span>?
                </h2>
                <div className="faq-underline"></div>
              </div>
              {/* <div className='faq-card-header'>
                                <div className="faq-card-icon">
                                    <Icon icon="mdi:message-question" />
                                </div>
                                <h3 className="faq-card-title">Have More Questions?</h3>
                            </div> */}
              {customDesc ? (
                <p className="faq-card-desc">{customDesc}</p>
              ) : (
                <p className="faq-card-desc">
                  Let&apos;s connect and discuss your project. We&apos;re here
                  to help bring your vision to life!
                </p>
              )}

              <div className="faq-buttons">
                <Link className="btn btn-primary" href="/contact-us">
                  <Icon icon="mdi:email" />
                  Let&apos;s Connect
                </Link>

                {/* <button
                                    className="btn btn-outline"
                                    onClick={() => (window.location.href = 'tel:+919999999999')}
                                >
                                    <Icon icon="mdi:phone" />
                                    Call Us
                                </button> */}
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="faq-right">
            {/* <h3 className="faq-subtitle">Common Questions</h3>
                        <p className="faq-subdesc">
                            Find answers to the most frequently asked questions about our services.
                        </p> */}
            <Accordion items={items} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQ;
