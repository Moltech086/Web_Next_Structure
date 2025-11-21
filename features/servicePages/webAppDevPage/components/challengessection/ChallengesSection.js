import React from 'react';
import './ChallengesSection.scss';
import Iconify from '@/components/ui/icons/Iconify';

const ChallengesSection = () => {
  const challenges = [
    {
      icon: 'mdi:clipboard-list-outline',
      title: 'Manual Labor and Disconnected Systems',
      description:
        'Having trouble managing emails, spreadsheets, and dispersed tools? By creating bespoke platforms like CRMs and ERPs, we assist in streamlining your processes so that everything operates in one location, saving time and minimizing errors.',
      solution: 'Custom CRM & ERP Solutions',
    },
    {
      icon: 'mdi:refresh-auto',
      title: 'Modernizing Legacy Systems',
      description:
        'Are you still using antiquated systems that are difficult to maintain or don\'t work for you? We update outdated tools and move them to contemporary web- based platforms without erasing your logic or important data.',
      solution: 'Legacy System Modernization',
    },
    {
      icon: 'mdi:trending-up',
      title: 'Performance Issues as You Scale',
      description:
        'Is your app becoming slower as your company expands? Whether you\'re managing 100 or 10,000 users, our systems are designed to be quick and scalable.',
      solution: 'Scalable Architecture',
    },
    {
      icon: 'mdi:shield-lock-outline',
      title: 'Security and Compliance Concerns',
      description:
        'Concerned about data security or adherence to regulations like HIPAA or GDPR? Using role-based access, data encryption, and industry best practices, we create secure apps from the ground up to safeguard both your users and your company.',
      solution: 'Security & Compliance',
    },
    {
      icon: 'mdi:puzzle-outline',
      title: 'Difficult Tool Integrations',
      description:
        'Does your app need to communicate with your analytics platform, CRM, or payment gateway? We manage unique integrations that safely and smoothly link your systems.',
      solution: 'Third-party Integrations',
    },
    {
      icon: 'mdi:code-tags',
      title: 'Tough Upkeep and Technical Debt',
      description:
        'Are you sick of patch fixes and workarounds? We create adaptable, maintainable codebases that facilitate updates and enhancements, enabling you to stay ahead without having to start from scratch.',
      solution: 'Code Refactoring',
    },
  ];

  return (
    <section className="challenges-section">
      <div className="container">
        <div className="heading">
          <h2>
            Common Web Application Challenges{' '}
            <span>We Help You Overcome</span>
          </h2>
          <p>
            Every business faces unique challenges. Here&apos;s how we transform
            obstacles into opportunities for growth and efficiency.
          </p>
        </div>

        <div className="challenge-grid">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="challenge-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="challenge-header">
                <div className="icon-box">
                  <Iconify icon={challenge.icon} className="icon" />
                </div>
                <div className="challenge-content">
                  <h3>{challenge.title}</h3>
                  <p>{challenge.description}</p>
                  <div className="solution-pill">✓ {challenge.solution}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
