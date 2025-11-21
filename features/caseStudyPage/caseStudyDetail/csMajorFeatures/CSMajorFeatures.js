import React from 'react';
import { Icon } from '@iconify/react';
import './CSMajorFeatures.scss';

const CSMajorFeatures = ({majorFeatures}) => {
    return (
        <section className="major-features-section">
            <div className="container">
                <div className="section-header">
                    <h2>Major Features Delivered</h2>
                    <p>
                        Comprehensive solutions designed to enhance user experience and drive business growth.
                    </p>
                </div>

                <div className="features-grid">
                    {majorFeatures?.features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="icon-group">
                                <div className="icon-bg">
                                    <Icon icon={feature.icon} className="icon" />
                                </div>
                                <div className="text">
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CSMajorFeatures;
