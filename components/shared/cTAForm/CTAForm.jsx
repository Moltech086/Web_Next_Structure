"use client";
import React from "react";
import "./CTAForm.scss";
import Title from "@/components/ui/title/Title";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import worldMap from "@/assets/images/world-map.png";
import ButtonsLink from "@/components/ui/buttons/ButtonsLink";

const CTAForm = () => {
  return (
    <div className="container-fluid">
      <div className="cta-form-section">
        <div className="left-info-sec">
          <Title
            highlightText="Contact"
            title="Let's get in touch"
            description="Have a word with our expert consultants about your next project to get suggestive guidance & proposal."
          />
          <div className="contact-details">
            <div className="info-card">
              <div className="icons">
                <Icon icon="basil:headset-outline" />
              </div>
              <div className="details">
                <h4 className="title">Contact Info</h4>
                <div className="phone">
                  <Link href="tel:+19452097691">+1-945-209-7691</Link>
                </div>
                <div className="email">
                  <Link href="mailto:inquiry@mol-tech.us">
                    inquiry@mol-tech.us
                  </Link>
                </div>
              </div>
            </div>
            <div className="info-card">
              <div className="icons">
                <Icon icon="uiw:map" />
              </div>
              <div className="details">
                <h4 className="title">Visit our office</h4>
                <div className="phone">
                  5th Floor, 506,<br></br>Dwarkesh business hub,<br></br>
                  Opp. Visamo Society, Motera,<br></br>380005, Ahmedabad,
                  Gujarat
                </div>
              </div>
            </div>
          </div>
          <div className="map-location-section">
            <div className="map-section">
              <Image src={worldMap} alt="Location-map" />
              <div className="location country-1">
                <div className="pin-animation">
                  <div class="map-marker" role="img" aria-label="Location">
                    <span class="dot" aria-hidden="true"></span>
                    <span class="ring" aria-hidden="true"></span>
                  </div>
                  <div className="tooltip-box">
                    <div className="inner-tooltip">
                      <div className="flag-country">
                        <Icon icon="twemoji:flag-us-outlying-islands" />
                        <span>USA</span>
                      </div>
                      <div className="address-info">
                        <Link
                          href="https://maps.app.goo.gl/uR3nnobr1TZzNChz9"
                          title="Directions"
                          target="_blank"
                        >
                          2000 N Central Expressway<br></br>
                          Suite 220<br></br>
                          Plano, TX 75074<br></br>
                          United States
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="location country-2">
                <div className="pin-animation">
                  <div class="map-marker" role="img" aria-label="Location">
                    <span class="dot" aria-hidden="true"></span>
                    <span class="ring" aria-hidden="true"></span>
                  </div>
                  <div className="tooltip-box">
                    <div className="inner-tooltip">
                      <div className="flag-country">
                        <Icon icon="emojione-v1:flag-for-switzerland" />
                        <span>Switzerland</span>
                      </div>
                      <div className="address-info">
                        <Link
                          href="https://maps.app.goo.gl/2UgJkJTSqAUiJcKf7"
                          title="Directions"
                          target="_blank"
                        >
                          Kirchmooshöhe 4<br></br>4800 Zofingen Switzerland
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="location country-3">
                <div className="pin-animation">
                  <div class="map-marker" role="img" aria-label="Location">
                    <span class="dot" aria-hidden="true"></span>
                    <span class="ring" aria-hidden="true"></span>
                  </div>
                  <div className="tooltip-box">
                    <div className="inner-tooltip">
                      <div className="flag-country">
                        <Icon icon="emojione-v1:flag-for-india" />
                        <span>India</span>
                      </div>
                      <div className="address-info">
                        <Link
                          href="https://maps.app.goo.gl/2UgJkJTSqAUiJcKf7"
                          title="Directions"
                          target="_blank"
                        >
                          5th Floor, 506,<br></br>
                          Dwarkesh business hub<br></br>
                          Opp. Visamo Society, Motera,<br></br>
                          380005, Ahmedabad, Gujarat
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="location country-4">
                <div className="pin-animation">
                  <div class="map-marker" role="img" aria-label="Location">
                    <span class="dot" aria-hidden="true"></span>
                    <span class="ring" aria-hidden="true"></span>
                  </div>
                  <div className="tooltip-box">
                    <div className="inner-tooltip">
                      <div className="flag-country">
                        <Icon icon="emojione-v1:flag-for-singapore" />
                        <span>Singapore</span>
                      </div>
                      <div className="address-info">
                        <Link
                          href="https://maps.app.goo.gl/DdsA1XKzFP9c7KJy5"
                          title="Directions"
                          target="_blank"
                        >
                          408 Joo Chiat Place
                          <br></br>
                          Singapore (428085)
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-form-sec">
          <Title
            highlightText="Let's Connect"
            title="Get a Free Quote!"
            description="Say something to start a live chat! "
          />
          <form className="cta-form">
            <div className="section-form-2">
              <div className="form-group">
                <label>
                  First Name<span>*</span>
                </label>
                <input type="text" placeholder="First Name" required />
              </div>
              <div className="form-group">
                <label>
                  Last Name<span>*</span>
                </label>
                <input type="text" placeholder="Last Name" required />
              </div>
            </div>
            <div className="section-form">
              <div className="form-group">
                <label>
                  Email<span>*</span>
                </label>
                <input type="email" placeholder="Your Email" required />
              </div>
            </div>
            <div className="section-form-2">
              <div className="form-group">
                <label>
                  Phone Number<span>*</span>
                </label>
                <input type="number" placeholder="Phone Number" required />
              </div>
              <div className="form-group">
                <label>
                  Country<span>*</span>
                </label>
                <input type="text" placeholder="Country" required />
              </div>
            </div>
            <div className="section-form">
              <div className="form-group">
                <label>
                  Message<span>*</span>
                </label>
                <textarea
                  type="email"
                  placeholder="Leave your message..."
                  required
                />
              </div>
            </div>
            <div className="section-form">
              <div className="form-group checkbox checkbox-wrapper-19">
                <input
                  type="checkbox"
                  placeholder="Leave your message..."
                  required
                  id="cbtest-19"
                />
                <label for="cbtest-19" class="check-box"></label>
                <span>
                  You agree to our <Link href="/">terms and conditions.</Link>
                </span>
              </div>
            </div>
          </form>
          <div className="btn-sec">
            <ButtonsLink buttonText="Share Your Idea" classes="square-btn primary-btn" href="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTAForm;
