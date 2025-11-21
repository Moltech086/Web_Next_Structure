"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { AppIcons } from "../../../data/appIcons";
import dynamic from "next/dynamic";
const Icon = dynamic(() => import("@iconify/react").then((m) => m.Icon), {
  ssr: false,
});
import "./Footer.scss";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="main-footer-sec">
        <div className="container">
          <div className="footer-top-section">
            <div className="row">
              <div className="col-12">
                <div className="footer-info-section">
                  <div className="row">
                    <div className="col-xxl-9 col-xl-9 col-lg-12 col-md-12 col-12">
                      <div className="row">
                        <div className="col-xxl-4 col-xl-5 col-lg-5 col-12 mb-3">
                          <div className="left-section">
                            <div className="logo-section">
                              <Image
                                src={AppIcons.LogoImageLight}
                                alt="Moltech Solutions Footer Logo"
                                width={200}
                                height={66}
                                loading="lazy"
                                priority={false}
                              />
                            </div>
                            <div className="footer-info">
                              <Icon icon="mdi:location" />
                              <p>
                                2000 N Central Expressway
                                <br />
                                Suite 220
                                <br />
                                Plano, TX 75074
                                <br />
                                United States
                              </p>
                            </div>
                            <div className="footer-info">
                              <Icon icon="material-symbols:call" />
                              <Link 
                                href="tel:+19452097691"
                                aria-label="Call Moltech Solutions"
                              >
                                Call: +1 (945) 209-7691
                              </Link>
                            </div>

                            {/* <div className="footer-info">
                              <Icon icon="ic:baseline-whatsapp" />
                              <p>+1-945-209-7691</p>
                            </div> */}
                            <div className="footer-info">
                              <Icon icon="mdi:email" />
                              <p>inquiry@mol-tech.us</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-8 col-xl-6 col-lg-12 col-12 mb-3 mb-xl-0">
                          <div className="row">
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12">
                              <div className="menu-items-sec">
                                <h4 className="menu-title">Our Expertise</h4>
                                <div className="footer-menu-list">
                                  <div className="footer-link">
                                    <div className="link-item">
                                      <Link href="/services/custom-software-development">
                                        Custom Software Development
                                      </Link>
                                    </div>
                                    <div className="link-item">
                                      <Link href="/services/web-application-development">
                                        Web App Development
                                      </Link>
                                    </div>
                                    <div className="link-item">
                                      <Link href="/services/mobile-application-development">
                                        Mobile App Development
                                      </Link>
                                    </div>
                                    <div className="link-item">
                                      <Link href="/services/business-software-consulting">
                                        Business Software Consulting
                                      </Link>
                                    </div>
                                    <div className="link-item">
                                      <Link href="/services/ui-ux-design-and-development">
                                        UI/UX Design and Development
                                      </Link>
                                    </div>
                                    <div className="link-item">
                                      <Link href="/services/ai-solutions">
                                        AI Solutions
                                      </Link>
                                    </div>
                                    <div className="link-item">
                                      <Link href="/services/data-preprocessing-and-cleaning">
                                        Data Preprocessing and Cleaning
                                      </Link>
                                    </div>
                                    <div className="link-item">
                                      <Link href="/services/software-testing-and-qa">
                                        Software Testing & QA
                                      </Link>
                                    </div>
                                    <div className="link-item">
                                      <Link href="/services/staff-augmentation">
                                        Staff Augmentation
                                      </Link>
                                    </div>
                                    <div className="link-item">
                                      <Link href="/services/accounting">
                                        Accounting
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12">
                              <div className="menu-items-sec">
                                <h4 className="menu-title">Quick Links</h4>
                                <div className="footer-menu-list">
                                  <div className="footer-link">
                                    <div className="link-item">
                                      <Link href="/">Home</Link>
                                    </div>
                                    <div className="link-item">
                                      <Link href="/about-us">About Us</Link>
                                    </div>
                                    <div className="link-item">
                                      <Link href="/how-we-work">
                                        How We Work?
                                      </Link>
                                    </div>
                                    <div className="link-item">
                                      <Link href="/case-study">
                                        Case Studies
                                      </Link>
                                    </div>
                                    <div className="link-item">
                                      <Link href="/blog">Blog</Link>
                                    </div>
                                    <div className="link-item">
                                      <Link href="/technology">Technology</Link>
                                    </div>
                                    <div className="link-item">
                                      <Link href="/career">Career</Link>
                                    </div>
                                    <div className="link-item">
                                      <Link href="/contact-us">Contact Us</Link>
                                    </div>
                                    <div className="link-item">
                                      <Link href="/privacy-policy">
                                        Privacy Policy
                                      </Link>
                                    </div>
                                    <div className="link-item">
                                      <Link href="/sitemap">Sitemap</Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-12 col-md-12 col-12 mt-3 mt-md-3 mt-xl-0">
                      <div className="row justify-content-start">
                        <div className="col-12">
                          <div className="get-in-touch-f">
                            <span className="highlight">Get</span> In Touch
                          </div>
                          <div className="social-section">
                            <div className="social-media-group">
                              <div className="social-media-icons facebook">
                                <Link
                                  href="https://www.facebook.com/moltechsolutions.pvt.ltd"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label="Follow us on Facebook"
                                >
                                  <Icon icon="ri:facebook-fill" />
                                </Link>
                              </div>

                              <div className="social-media-icons instagram">
                                <Link   
                                  href="https://www.instagram.com/moltechsolutions.pvt.ltd/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label="Follow us on Instagram"
                                >
                                  <Icon icon="fa6-brands:instagram" />
                                </Link>
                              </div>

                              <div className="social-media-icons linkedin">
                                <Link 
                                  href="https://www.linkedin.com/company/moltech-solutions-inc/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label="Follow us on LinkedIn"
                                >
                                  <Icon icon="ri:linkedin-fill" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="certificate-sec">
                            <Image
                              src={AppIcons.IOS}
                              alt="ISO Certification Logo"
                              width={150}
                              height={150}
                              loading="lazy"
                              priority={false}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="container">
            <div className="bottom-contain">
              <div className="left-sec">
                <span>
                  © {year} Moltech Solutions Inc. All rights reserved.
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
