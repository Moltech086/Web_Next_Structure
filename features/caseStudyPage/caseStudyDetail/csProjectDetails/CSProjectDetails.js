import React from 'react';
import { Icon } from '@iconify/react';
import './CSProjectDetails.scss';

const CSProjectDetails = ({ projectDetails }) => {
    return (
        <section className="cs-project-details">
            <div className="container">
                <div className="project-card">
                    <div className="project-header">
                        <div className="icon-wrapper">
                            <Icon icon="mdi:target-variant" className="icon" />
                        </div>
                        <div>
                            <h2 className="title">Project Detail</h2>
                            <p className="description">
                                {projectDetails?.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CSProjectDetails;
