'use client';

import React from "react";
import { useRouter } from "next/navigation";
import "./InfoContainer.scss";
import Iconify from "../icons/Iconify";
import Link from "next/link";

const InfoContainer = ({
  subtitle,
  title,
  highlight,
  description,
  showMoreDescription,
  moredescription,
  buttonText,
  buttonHref,  // For the regular button link
  watermark,
  linkText,
  linkHref,
  additionalTitleText,
  videobutton,
  videobuttonText,
  videoUrl,  // Add this for the video button link
  isButton,
}) => {
  const router = useRouter();

  const handleButtonClick = () => {
    if (buttonHref) {
      router.push(buttonHref);
    }
  };

  const handleVideoButtonClick = () => {
    if (videoUrl) {
      window.open(videoUrl, "_blank"); 
    }
  };

  return (
    <div className="info-container">
      <span className="subtitle">{subtitle}</span>
      <h1 className="main-title">
        {title} <span className="highlight">{highlight}</span> {additionalTitleText}
      </h1>
      <p className="description">
        {description}  <Link  href={linkHref}>{linkText}</Link>
      </p>
      {showMoreDescription && <p className="description">{moredescription}</p>}
      <div className="d-flex align-items-center end-btns">
        {isButton && (
          <button className="cta-button" onClick={handleButtonClick} aria-label="Navigate to case study page">
            {buttonText} <Iconify icon="ooui:next-ltr" />
          </button>
        )}
        {videobutton && (
          <div className="video-btn-container" onClick={handleVideoButtonClick}>
            <div className="icon-background">
              <Iconify icon="ic:round-play-arrow" className="play-btn" />
            </div>
            <span className="video-btn-text">{videobuttonText}</span>
          </div>
        )}
      </div>
      <div className="watermark">{watermark}</div>
    </div>
  );
};

export default InfoContainer;
