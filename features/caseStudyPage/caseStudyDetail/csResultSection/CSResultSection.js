import React from 'react';
import { Icon } from '@iconify/react';
import './CSResultSection.scss';

const CSResultSection = ({ resultsSection }) => {
    return (
        <section className="cs-business-values">
            <div className="container">
                <div className="section-header">
                    <h2>{resultsSection?.title}</h2>
                    <p>
                        {resultsSection?.description}
                    </p>
                </div>
                <div className="values-grid">
                    {resultsSection?.values.map((value, index) => (
                        <div key={index} className="value-card">
                            <div className="icon-wrapper">
                                <Icon icon={value.icon} className="icon" />
                            </div>
                            <h3>{value.title}</h3>
                            <p>{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CSResultSection;
