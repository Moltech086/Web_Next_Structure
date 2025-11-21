"use client";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./TableOfContent.scss";
import { Icon } from "@iconify/react";
import ToastService from "@/services/toastService/ToastService";

const TableOfContent = ({ tableOfContents, faqData }) => {
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const contentElement = document.getElementById("main-content");
      if (contentElement) {
        const scrollTop = window.scrollY;
        const docHeight = contentElement.offsetHeight;
        const winHeight = window.innerHeight;
        const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
        setReadingProgress(Math.min(Math.max(scrollPercent, 0), 100));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    ToastService.success("Link copied to clipboard");
  };

  return (
    <div className="table-of-contents">
      <div className="table-of-contents__wrapper">
        <div className="table-of-contents__card">
          {/* Heading */}
          <h3 className="toc-title">Table of Contents</h3>

          {/* Links */}
          <nav className="toc-links">
            <a href={`#main-content`} className="toc-link level-1">
              Introduction
            </a>
            {tableOfContents.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`toc-link ${
                  item.level === 1 ? "level-1" : "level-2"
                }`}
              >
                {item.title}
              </a>
            ))}
            {faqData ? (
              <a href={`#faqs`} className="toc-link level-1">
                FAQ&apos;s
              </a>
            ) : null}
          </nav>

          {/* Progress Indicator */}
          <div className="toc-progress">
            <div className="toc-progress__info">
              <span>Reading Progress</span>
              <span>{Math.round(readingProgress)}%</span>
            </div>
            <div className="toc-progress__bar">
              <div
                className="toc-progress__fill"
                style={{ width: `${readingProgress}%` }}
              ></div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="toc-actions">
            <h4 className="toc-actions__title">Quick Actions</h4>
            <div className="toc-actions__buttons">
              <button
                className="share-button"
                onClick={() => copyToClipboard(window.location.href)}
              >
                <Icon icon="mdi:share-variant" className="icon" />
                Share Blog
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 🔥 Fix: match the actual prop name
TableOfContent.propTypes = {
  tableOfContents: PropTypes.array.isRequired,
};

export default TableOfContent;
