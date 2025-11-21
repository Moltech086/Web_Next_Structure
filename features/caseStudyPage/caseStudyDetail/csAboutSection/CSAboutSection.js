import React from 'react';
import { Icon } from '@iconify/react';
import './CSAboutSection.scss';

const CSAboutSection = ({aboutSection}) => {
    return (
        <section id="overview" className="cs-about-section">
            <div className="container">
                <div className="about-grid">
                    <div className="about-content">
                        <h2 className="section-title">Client Overview</h2>
                        <p className="section-paragraph">
                            {aboutSection?.description1}
                        </p>
                        <p className="section-paragraph">
                            {aboutSection?.description2}
                        </p>
                        <div className="info-grid">
                            <div className="info-card bg-orange">
                                <h3 className="card-title">Industry</h3>
                                <p className="card-text">{aboutSection?.industry}</p>
                            </div>
                            <div className="info-card bg-green">
                                <h3 className="card-title">Project Type</h3>
                                <p className="card-text">{aboutSection?.projectType}</p>
                            </div>
                        </div>
                    </div>

                    <div className="scope-box">
                        <h3 className="scope-title">Technologies</h3>
                        <div className="tech-stack-wrapper">
                            {aboutSection?.technologies.map((tech, index) => (
                                <div className="tech-item" key={index}>
                                    <div className="icon-box">
                                        <Icon icon={tech.icon} className="tech-icon" />
                                    </div>
                                    <span className="tech-name">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CSAboutSection;
