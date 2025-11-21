import React from "react";
import "./HeroSection.scss";
import { Icon } from "@iconify/react";

const HeroSection = ({
  title,
  highlight,
  description,
  author,
  date,
  stats = [],
}) => {
  return (
    <div className="hr-analytics-overview">
      <div className="overview-wrapper">
        <div className="overview-header">
          <h1 className="overview-title">
            {title} <br />
            {highlight && <span className="highlight">{highlight}</span>}
          </h1>

          <p className="overview-description">{description}</p>

          <div className="author-details">
            <p className="date">
              <Icon
                icon="fluent-mdl2:date-time"
                height={22}
                className="stat-icon"
              />
              {date}
            </p>
            <p className="author">
              <Icon
                icon="streamline-ultimate:paper-write"
                height={22}
                className="stat-icon"
              />
              {author}
            </p>
          </div>
        </div>

        <div className="overview-stats">
          {stats.map((item, index) => (
            <div className="stat-card" key={index}>
              <div className="icon-title">
                <Icon icon={item.icon} width={32} className="stat-icon" />
                <h3 className="stat-title">{item.title}</h3>
              </div>
              <p className="stat-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
