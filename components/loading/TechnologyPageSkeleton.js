import React from 'react';
import './TechnologyPageSkeleton.scss';

const TechnologyPageSkeleton = () => {
  return (
    <div className="technology-skeleton">
      <div className="skeleton-hero">
        <div className="skeleton-title"></div>
        <div className="skeleton-description"></div>
        <div className="skeleton-button"></div>
      </div>
      <div className="skeleton-content">
        <div className="skeleton-section"></div>
        <div className="skeleton-section"></div>
        <div className="skeleton-section"></div>
      </div>
    </div>
  );
};

export default TechnologyPageSkeleton;
