import React from 'react';
import { Icon } from '@iconify/react';
import './Principles.scss';

const principles = [
    {
        icon: "material-symbols:target",
        title: "Project Requirements",
        description: "Align tech with your functional needs: speed, data, scalability, or AI integration.",
        number: "01"
    },
    {
        icon: "mdi:trending-up",
        title: "Performance at Scale",
        description: "Prioritize frameworks that maintain performance under load.",
        number: "02"
    },
    {
        icon: "mdi:cog",
        title: "Maintainability & Ecosystem",
        description: "Favor stable, well-documented tools backed by active communities.",
        number: "03"
    },
    {
        icon: "mdi:lock",
        title: "Security & Compliance",
        description: "We prioritize frameworks that support secure coding best practices.",
        number: "04"
    },
    {
        icon: "mdi:connection",
        title: "Integration Flexibility",
        description: "Tech should work well with APIs, 3rd-party tools, and AI systems.",
        number: "05"
    },
    {
        icon: "mdi:clock-outline",
        title: "Future-Proofing",
        description: "Use evolving, supported tech that remains relevant and extensible.",
        number: "06"
    }
];

const Principles = () => {
    return (
        <section id="principles" className="principles">
            <div className="principles-container">
                <div className="principles-header">
                    <h2 className="principles-title">
                        How We Think When Choosing a Technology ?
                    </h2>
                    <p className="principles-description">
                        <span className='highlight'>At Moltech Inc.</span>, technology isn&apos;t chosen just because it&apos;s popular. We evaluate each framework,
                        platform, and tool against a clear set of principles :
                    </p>
                </div>

                {/* Principles Grid */}
                <div className="principles-grid">
                    {principles.map((principle, index) => (
                        <div
                            key={index}
                            className="principle-card"
                        >
                            {/* Number Badge */}
                            <div className="principle-number-badge">
                                <span className="principle-number">{principle.number}</span>
                            </div>

                            <div className="principle-content">
                                <div className="principle-icon-wrapper">
                                    <Icon icon={principle.icon} className="principle-icon" />
                                </div>

                                <div className="principle-text">
                                    <h3 className="principle-title">{principle.title}</h3>
                                    <p className="principle-description">{principle.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Principles;