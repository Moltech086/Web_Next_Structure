import React from 'react';
import './WhyChooseUs.scss';
import Iconify from '@/components/ui/icons/Iconify';

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: 'mdi:target-variant',
      title: 'Tailored Solutions, Not Templates',
      description:
        'We don\'t think that one size fits all at Moltech. We take the time to learn about your business and then make web apps that look and work exactly the way you want them to. No extra features or systems that are too big; just solutions that work for you.'
    },
    {
      icon: 'mdi:message-text-outline',
      title: 'Transparent Communication',
      description:
        'We keep things clear, honest, and easy to understand. You\'ll know who to talk to, what\'s going on, and what\'s next from the start. There won\'t be any technical jargon or shocks at the last minute. Just clear, honest communication that keeps your project on track and builds trust.'
    },
    {
      icon: 'mdi:account-group-outline',
      title: 'Long-Term Partnership',
      description:
        'Supporting your growth is our top priority, not simply delivering tools. Our involvement does not end with launch; we continue to provide strategic feedback, maintenance, and updates. We value lasting relationships with our clients rather than short-term fixes, which is why many of them stick with us for years. '
    },
    {
      icon: 'mdi:briefcase-outline',
      title: 'Business-First Mindset',
      description:
        'We align our work with your business goals—whether that’s efficiency, user experience, or cost savings. Every feature we build has a purpose. We don’t just “develop,”; we think like a business partner who understands what success means to you.'
    },
    {
      icon: 'mdi:package-variant-closed',
      title: 'One Partner, All Solutions',
      description:
        'No need to manage multiple vendors. From planning and UI/UX design to full-stack development, testing, hosting, and post-launch support—we handle everything under one roof. It’s simpler, faster, and more effective when you work with one team that does it all.'
    },
    {
      icon: 'mdi:currency-usd',
      title: 'Cost-Effective, High-Quality',
      description:
        'You don\'t have to pick between cost and quality. Our hybrid model uses the skills of experienced developers and smart resource planning to make sure that we deliver great software on time and on budget, without sacrificing security or speed.'
    }
  ];

  return (
    <section className="why-choose-section">
      <div className="container">
        <div className="section-heading">
          <h2>
            Why choose <span>Moltech Solution Inc. ?</span>
            <br />as your Web development partner ?
          </h2>
          <p>
            We don&apos;t just develop software—we&apos;re your strategic technology partners
            committed to your long-term success.
          </p>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="reason-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="icon-box">
                <Iconify icon={reason.icon} className="icon" />
              </div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
