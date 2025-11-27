"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { companyMenu, servicesMenu } from "./MenuData.js";
import "./Header.scss";
import { companyMenu, servicesMenu } from "./MenuData";
import Image from "next/image";
import { AppIcons } from "@/data/appIcons";
import ButtonsLink from "../buttons/ButtonsLink";

const Header = () => {
  const pathname = usePathname();
  const isDark = pathname === "/"; // dark only on home

  const [openCompany, setOpenCompany] = useState(false);
  const [openServices, setOpenServices] = useState(false);

  return (
    <header className={`mol-header ${isDark ? "dark" : "light"}`}>
      <div className="container header-container">
        {/* LOGO */}
        <Link href="/" className="header-logo">
          <Image src={AppIcons.logoLight} alt="Moltech Solutions Inc. Logo" />
        </Link>

        {/* NAV */}
        <nav className="header-nav">
          <Link href="/">Home</Link>

          {/* COMPANY */}
          <div
            className="dropdown"
            onMouseEnter={() => setOpenCompany(true)}
            onMouseLeave={() => setOpenCompany(false)}
          >
            <button className="drop-btn">
              Company <span>▼</span>
            </button>
            <button className="drop-btn">
              Company <span>▼</span>
            </button>

            {openCompany && (
              <div className="simple-dropdown">
                {companyMenu.map((item, i) => (
                  <Link key={i} href={item.link}>
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* SERVICES */}
          <div
            className="dropdown"
            onClick={() => setOpenServices(true)}
            // onMouseLeave={() => setOpenServices(false)}
          >
            <button className="drop-btn">
              Services <span>▼</span>
            </button>
          </div>

          <Link href="/technology">Technology</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>

        {/* CTA BUTTON */}
        <ButtonsLink
          buttonText="Let’s Chat"
          icon="line-md:chat-round-dots"
          classes="large-btn primary-btn"
          iconAfter={true}
          href=""
        />
      </div>
      {openServices && (
        <div className="mega-dropdown">
          {servicesMenu.map((sec, i) => (
            <div className="mega-col" key={i}>
              <h4>{sec.title}</h4>
              {sec.items.map((item, j) => (
                <Link key={j} href="/services">
                  {item}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
