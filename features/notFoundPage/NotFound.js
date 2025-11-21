"use client";
import { Icon } from "@iconify/react";
import React from "react";
import "../notFoundPage/NotFound.scss";
import Link from "next/link";
import { AppIcons } from "@/data/appIcons";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="notfound-container">
      {/* Background Logo Watermark */}
      <div className="background-logo ">
        <Image
          src={AppIcons.LogoOnly}
          alt="Moltech Solutions Inc. Logo"
          width={640}
          height={823}
          loading="lazy"
          priority={false}
        />
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="header-section">
          <div className="error-number">
            <h1 className="big-404">404</h1>
            <div className="divider"></div>
          </div>

          <div className="message-section">
            <h2 className="error-title">Oops! Page Not Found</h2>
            <p className="error-description">
              Sorry, the page you&apos;re looking for doesn&apos;t exist or has
              been moved. Don&apos;t worry though, we can help you find your way
              back.
            </p>
          </div>

          <div className="primary-cta">
            <Link href="/" className="home-button">
              <svg
                className="home-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9,22 9,12 15,12 15,22" />
              </svg>
              Return to Homepage
            </Link>
          </div>
        </div>
        <div className="navigation-section">
          <h3 className="navigation-title">Or explore these sections:</h3>
          <div className="navigation-grid">
            {[
              {
                href: "/",
                label: "Home",
                icon: "mdi:home-outline",
              },
              {
                href: "/about-us",
                label: "About Us",
                icon: "mdi:account-group-outline",
              },
              { href: "/blog", label: "Blog", icon: "mdi:note-text-outline" },
              {
                href: "/case-study",
                label: "Case-study",
                icon: "mdi:briefcase-variant-outline",
              },
              // { href: "/services", label: "Services", icon: "mdi:cog-outline" },
              { href: "/career", label: "Career", icon: "mdi:school-outline" },
              {
                href: "/contact-us",
                label: "Contact Us",
                icon: "mdi:email-outline",
              },
            ].map(({ href, label, icon }) => (
              <Link href={href} key={label} className="nav-button">
                <div className="nav-icon-container">
                  <Icon icon={icon} className="nav-icon" />
                </div>
                <span className="nav-text">{label}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="decorative-elements">
          <div className="decoration decoration-1"></div>
          <div className="decoration decoration-2"></div>
          <div className="decoration decoration-3"></div>
          <div className="decoration decoration-4"></div>
          <div className="decoration decoration-5"></div>
        </div>
      </div>

      <div className="footer">
        <p>&copy; 2025 Your Moltech Solutions Inc All rights reserved.</p>
      </div>
    </div>
  );
};

export default NotFound;
