import React from 'react';
import { Icon } from '@iconify/react';
import './CSChallengeSolution.scss';

const CSChallengeSolution = ({ challengeSolution }) => {
    return (
        <section id="challenges" className="cs-challenge-section">
            <div className="container">
                <div className="section-header">
                    <h2>Challenges & Solutions</h2>
                    <p>
                        We identified key pain points and developed targeted solutions to transform the resort&apos;s digital presence.
                    </p>
                </div>

                <div className="cards-grid">
                    {/* Challenges */}
                    <div className="card">
                        <div className="card-title red">
                            <Icon icon="mdi:alert-circle-outline" className="badge-icon" />
                            <h3 className='red'>Challenges</h3>
                        </div>
                        <div className="card-content">
                            {challengeSolution?.challenges.map((item, i) => (
                                <div className="item" key={i}>
                                    <div className="icon-wrapper red">
                                        <Icon icon={item.icon} className="icon" />
                                    </div>
                                    <div>
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Solutions */}
                    <div className="card">
                        <div className="card-title green">
                            <Icon icon="mdi:check-circle-outline" className="badge-icon" />
                            <h3 className='green'>Solutions</h3>
                        </div>
                        <div className="card-content">
                            {challengeSolution?.solutions.map((item, i) => (
                                <div className="item" key={i}>
                                    <div className="icon-wrapper green">
                                        <Icon icon={item.icon} className="icon" />
                                    </div>
                                    <div>
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CSChallengeSolution;
