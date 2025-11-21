import React from 'react';
import { Icon } from '@iconify/react';
import './Benefits.scss';

const benefits = [
  {
    icon: 'mdi:rocket-launch',
    title: 'Scalability',
    description: 'Your app grows smoothly — from MVP to enterprise scale.',
  },
  {
    icon: 'mdi:lightning-bolt',
    title: 'Fast Performance',
    description: 'Quick loading times and responsive interactions on all devices.',
  },
  {
    icon: 'mdi:layers-triple',
    title: 'Cross-Platform Power',
    description: 'Develop once, deploy everywhere — web, iOS, Android, and desktop.',
  },
  {
    icon: 'mdi:shield-check',
    title: 'Security First',
    description: 'Built-in security from backend to frontend, using industry best practices.',
  },
  {
    icon: 'mdi:robot',
    title: 'AI & Automation Ready',
    description: 'Easily integrate modern AI tools like OpenAI, LangChain, and machine learning APIs.',
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="benefits">
      <div className="benefits-container">
        <div className="benefits-header">
          <h2 className="benefits-title">Why Our Stack Works for You ?</h2>
          <p className="benefits-description">
            At <span className="highlight">Moltech Inc.</span>, we don&apos;t just choose technologies—we engineer ecosystems.
            Our stack is strategically designed to be flexible, scalable, and client-first.
          </p>
          <p className="benefits-description">
            From startups to enterprises, we ensure you have the infrastructure to launch fast, grow steadily,
            and integrate emerging tools with ease. With us, you&apos;re not just building software—you&apos;re investing
            in a future-proof digital foundation.
          </p>
        </div>

        {/* Glass Table */}
        <div className="benefits-grid">
          <div className="grid-header">
            <span>Benefit</span>
            <span>What It Means for You</span>
          </div>

          {benefits.map((benefit, index) => (
            <div className="grid-row" key={index}>
              <div className="grid-icon-label">
                <Icon icon={benefit.icon} className="grid-icon" />
                <span>{benefit.title}</span>
              </div>
              <div className="grid-desc">{benefit.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
