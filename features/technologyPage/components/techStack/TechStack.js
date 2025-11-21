import React from "react";
import { Icon } from "@iconify/react";
import "./TechStack.scss";
import Link from "next/link";
import techStackData from "@/data/technologies/tech-stack.data";

const TechStack = () => {
  return (
    <section id="tech-stack" className="tech-stack">
      <div className="tech-stack-container">
        {/* Section Header */}
        <div className="tech-stack-header">
          <div className="tech-stack-badge">
            <Icon icon="mdi:cpu-64-bit" className="tech-stack-badge-icon" />
            <span className="tech-stack-badge-text">
              Technology Stack Overview
            </span>
          </div>
          <h2 className="tech-stack-title">
            Comprehensive Technology Ecosystem
          </h2>
          <p className="tech-stack-description">
            Our carefully curated technology stack spans every layer of modern
            software development, ensuring robust, scalable, and future-ready
            solutions.
          </p>
        </div>

        {/* Technology Table */}
        <div className="tech-stack-table-wrapper">
          <div className="tech-stack-table-container">
            <table className="tech-stack-table">
              <thead>
                <tr className="tech-stack-table-header">
                  <th className="tech-stack-table-th">Category</th>
                  <th className="tech-stack-table-th">Description</th>
                  <th className="tech-stack-table-th">Technology Stack</th>
                </tr>
              </thead>
              <tbody>
                {techStackData.map((item, index) => (
                  <tr
                    key={index}
                    className={`tech-stack-table-row ${
                      index % 2 === 0 ? "even" : "odd"
                    }`}
                  >
                    <td className="tech-stack-table-td" data-label="Category">
                      <div className="tech-stack-category">
                        <div className="tech-stack-category-icon">
                          <Icon icon={item.icon} className="tech-stack-icon" />
                        </div>
                        <div className="tech-stack-category-name">
                          {item.category}
                        </div>
                      </div>
                    </td>
                    <td
                      className="tech-stack-table-td"
                      data-label="Description"
                    >
                      <p className="tech-stack-category-description">
                        {item.description}
                      </p>
                    </td>
                    <td
                      className="tech-stack-table-td"
                      data-label="Technology Stack"
                    >
                      <div className="tech-stack-technologies">
                        {item.technologies.map((tech, techIndex) => {
                          const tag = (
                            <span className="tech-stack-tech-tag">
                              <Icon
                                icon={tech.icon}
                                className="tech-stack-tech-icon"
                              />
                              {tech.name}
                            </span>
                          );

                          return tech.link ? (
                            <Link
                              href={`/technology${tech.link}`}
                              key={techIndex}
                            >
                              {tag}
                            </Link>
                          ) : (
                            <span key={techIndex}>{tag}</span>
                          );
                        })}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
