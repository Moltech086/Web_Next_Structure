"use client";
import React, { useEffect, useRef, useState } from "react";
import "./ContactUsPage.scss";
import Iconify from "@/components/ui/icons/Iconify";
import { AppIcons } from "@/data/appIcons";
import Images from "@/components/image/Image";
import BranchFooter from "@/components/shared/branchFooter/BranchFooter";
import { useAddContactUsMutation } from "@/app/services/contactUsAPI";
import SwalAlert from "@/services/swalService/SwalService";
import { Icon } from "@iconify/react";
import ReCAPTCHA from "react-google-recaptcha";
import Link from "next/link";

const countries = [
  { name: "India", flag: AppIcons.India },
  { name: "Singapore", flag: AppIcons.Singapore },
  { name: "Switzerland", flag: AppIcons.Switzerland },
  { name: "USA", flag: AppIcons.USA },
];

export const locations = [
  {
    id: 1,
    city: "USA",
    flagImage: AppIcons.USA,
    address: "2000 N Central Expressway, Suite 220, Plano, TX 75074, USA",
    position: { top: "40%", left: "15%" },
  },
  {
    id: 2,
    city: "Singapore",
    flagImage: AppIcons.Singapore,
    address: "408 Joo Chiat Place Singapore (428085)",
    position: { top: "60%", left: "74%" },
  },
  {
    id: 3,
    city: "Switzerland",
    flagImage: AppIcons.Switzerland,
    address: "Kirchmooshöhe 4 4800 Zofingen Switzerland",
    position: { top: "35%", left: "49%" },
  },
  {
    id: 4,
    flagImage: AppIcons.India,
    city: "India",
    address:
      "5th Floor, 506, Dwarkesh business hub Opp. Visamo Society, Motera, 380005, Ahmedabad, Gujarat",
    position: { top: "47%", left: "66%" },
  },
];

const ContactUsPage = () => {
  const testSiteKey = process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY;
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [refreshInterval, setRefreshInterval] = useState(null);
  const [captchaError, setCaptchaError] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "Idea",
    message: "",
  });
  const [userIP, setUserIP] = useState("");

  const [
    addContactUs,
    {
      isLoading: isContactAdding,
      isSuccess: isContactSuccess,
      data: contactData,
    },
  ] = useAddContactUsMutation();

  const { success } = SwalAlert();

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "radio" ? value : value,
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const errorMsg = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: errorMsg,
    }));
  };

  const validateAll = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateField = (name, value) => {
    switch (name) {
      case "firstName":
        return value.trim() ? "" : "First name is required";
      case "lastName":
        return value.trim() ? "" : "Last name is required";
      case "email":
        if (!value) return "Email is required";
        else if (!/\S+@\S+\.\S+/.test(value)) return "Invalid email format";
        return "";
      case "phone":
        if (!value.trim()) return "Phone number is required";
        if (!/^\+?[0-9]{10,15}$/.test(value)) {
          return "Enter a valid phone number (10–15 digits)";
        }
        return "";
      case "message":
        return value.trim() ? "" : "Please Write a Message";
      default:
        return "";
    }
  };

  const handleCaptchaChange = (response) => {
    if (response) {
      setIsCaptchaValid(true);
      setCaptchaError("");
      const expirationTime = 2 * 60 * 1000;
      const interval = setInterval(() => {
        setIsCaptchaValid(false);
      }, expirationTime);
      setRefreshInterval(interval);
    } else {
      setIsCaptchaValid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isCaptchaValid) {
      setCaptchaError("Please verify Captcha.");
      return;
    }

    if (validateAll()) {
      let FullName = `${formData.firstName} ${formData.lastName}`.trim();
      const data = {
        FullName,
        EmailAddress: formData.email,
        Phone: formData.phone,
        SubjectType: formData.subject,
        Message: formData.message,
        IPAddress: userIP,
      };
      // let req = { data: JSON.stringify(data) }
      // let req = { data }
      addContactUs(data);
      setIsLoading(true);
    }
  };

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => setUserIP(data.ip))
      .catch((err) => console.log("IP fetch error:", err));
  }, []);

  useEffect(() => {
      if (isContactSuccess && contactData) {
        if (!contactData.hasError) {
          if (contactData.errorMessage) {
            success(contactData.errorMessage);
          } else {
            success(
              "Our team will connect with you shortly.",
              "We’ve received your response!"
            );
            setIsLoading(false);
          }
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            subject: "Idea",
            message: "",
          });
          setErrors({});
          setIsLoading(false);
        }
        setIsLoading(false);
      }
  }, [isContactSuccess, contactData]);
  return (
    <div className="contact-us-wrapper">
      <div className="contact-page">
        <div className="container">
          <div className="left">
            <h1>Start a Conversation – We&apos;re Here to Help</h1>

            <p>
              At Moltech, we specialize in delivering innovative and
              cost-effective solutions across IT consulting, software and mobile
              app development, artificial intelligence, web development, and
              accounting.
            </p>

            <ul className="why-contact">
              <li>
                <Icon icon="mdi:alert-circle-check" className="bullet-icon" />
                <div>
                  <strong>Struggling with tech challenges?</strong> We help
                  simplify complex IT, software, and accounting problems.
                </div>
              </li>
              <li>
                <Icon
                  icon="mdi:rocket-launch-outline"
                  className="bullet-icon"
                />
                <div>
                  <strong>Launching a new project?</strong> Get expert support
                  from idea to execution.
                </div>
              </li>
              <li>
                <Icon icon="mdi:shield-lock-outline" className="bullet-icon" />
                <div>
                  <strong>Need secure and scalable solutions?</strong> Our team
                  builds systems that grow with your business.
                </div>
              </li>
              <li>
                <Icon icon="mdi:handshake-outline" className="bullet-icon" />
                <div>
                  <strong>Looking for a reliable partner?</strong> We work as an
                  extension of your team — not just another vendor.
                </div>
              </li>
              <li>
                <Icon icon="mdi:lightbulb-on-outline" className="bullet-icon" />
                <div>
                  <strong>Want innovative, cost-effective results?</strong> We
                  specialize in smart solutions tailored to your goals.
                </div>
              </li>
            </ul>

            <p>
              Ready to take the next step? Let’s connect and explore how we can
              turn your challenges into opportunities.
            </p>
            <div className="certificates">
              <div className="cert-logos">
                <div className="sec-logo">
                  <Images imagePath={AppIcons.IOS} altText="Logo Image" />
                </div>
              </div>
            </div>
          </div>

          <div className="right">
            <Images
              imagePath={AppIcons.ContactUsPart}
              altText="Contect Us Image vector"
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      <section className="contact-wrapper" id="connect">
        <div className="container">
          <div className="contact-container">
            {/* LEFT BLACK BOX */}
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p>Say something to start a live chat!</p>

              <div className="info-item">
                <Iconify icon="mdi:phone" />
                <span>+1-945-209-7691</span>
              </div>


              {/* <div className="info-item">
                                <Iconify icon="ic:sharp-whatsapp" />
                                
                                <span>+1-945-209-7691</span>
                            </div> */}
              <div className="info-item">
                <Iconify icon="mdi:email-outline" aria-hidden="true" />

                <Link
                  href="mailto:inquiry@mol-tech.us"
                  aria-label="Email Moltech Solutions at inquiry@mol-tech.us"
                >
                  inquiry@mol-tech.us
                </Link>
              </div>

              <div className="info-item">
                <Iconify icon="mdi:map-marker" />
                <span>
                  2000 N Central Expressway
                  <br />
                  Suite 220
                  <br />
                  Plano, TX 75074
                  <br />
                  United States
                </span>
              </div>

              <div className="social-icons">
                <a
                  href="https://www.facebook.com/moltechsolutions.pvt.ltd"
                  target="blank"
                >
                  <Iconify icon="ri:facebook-fill" />
                </a>
                <a
                  href="https://www.instagram.com/moltechsolutions.pvt.ltd/"
                  target="blank"
                >
                  <Iconify icon="fa6-brands:instagram" />
                </a>

                <a
                  href="https://www.linkedin.com/company/moltech-solutions-inc/"
                  target="blank"
                >
                  <Iconify icon="ri:linkedin-fill" />
                </a>
              </div>
            </div>

            {/* RIGHT WHITE FORM */}
            <div className="contact-form">
              <div className="row">
                <div className="field">
                  <label htmlFor="firstName">
                    First Name<span>*</span>
                  </label>
                  {/* <input type="text" placeholder="John" /> */}
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.firstName && (
                    <small className="error">{errors.firstName}</small>
                  )}
                </div>
                <div className="field">
                  <label htmlFor="lastName">
                    Last Name<span>*</span>
                  </label>
                  {/* <input type="text" placeholder="Doe" /> */}
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.lastName && (
                    <small className="error">{errors.lastName}</small>
                  )}
                </div>
              </div>

              <div className="row">
                <div className="field">
                  <label htmlFor="email">
                    Email<span>*</span>
                  </label>
                  {/* <input type="email" placeholder="you@example.com" /> */}
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && (
                    <small className="error">{errors.email}</small>
                  )}
                </div>
                <div className="field">
                  <label htmlFor="phone">
                    Phone Number<span>*</span>
                  </label>
                  {/* <input type="text" placeholder="+1 012 3456 789" /> */}
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    placeholder="+1 012 3456 789"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.phone && (
                    <small className="error">{errors.phone}</small>
                  )}
                </div>
              </div>

              <div className="row">
                <label>Select Subject</label>
                <div className="radio-group">
                  <label>
                    {/* <input type="radio" name="subject" value="General" /> */}
                    <input
                      type="radio"
                      id={"Idea"}
                      name="subject"
                      value="Idea"
                      checked={formData.subject === "Idea"}
                      onChange={handleChange}
                    />
                    Share Your Idea
                  </label>
                  <label>
                    {/* <input type="radio" name="subject" value="Partnership" /> */}
                    <input
                      type="radio"
                      name="subject"
                      id={"Partnership"}
                      value="Partnership"
                      checked={formData.subject === "Partnership"}
                      onChange={handleChange}
                    />
                    Partnership
                  </label>
                </div>
              </div>

              <div className="row">
                <div className="field full">
                  <label htmlFor="message">
                    Message<span>*</span>
                  </label>
                  {/* <textarea placeholder="Write your message.."></textarea> */}
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Write your message.."
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></textarea>
                  {errors.message && (
                    <small className="error">{errors.message}</small>
                  )}
                </div>
              </div>

              <div className="row mt-3">
                <ReCAPTCHA
                  sitekey={testSiteKey}
                  onChange={handleCaptchaChange}
                />
                {captchaError && (
                  <small
                    className={captchaError ? "error" : ""}
                    style={captchaError ? { color: "red" } : {}}
                  >
                    {captchaError}
                  </small>
                )}
              </div>

              <div className="form-submit">
                <button
                  disabled={isLoading}
                  onClick={handleSubmit}
                  type="submit"
                  aria-label="Send message"
                >
                  {isLoading ? (
                    <Icon icon="svg-spinners:180-ring-with-bg" />
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BranchFooter />

      <section className="clients-from-section">
        <div className="container">
          <div className="left-content">
            <h3>Our Clients From</h3>
            <p className="highlighted">
              Our clients are from various corners of the globe including the{" "}
              <span>
                USA, UK, Europe, UAE, Australia, Spain, Netherlands, Finland &
                many more.
              </span>
            </p>
            <p className="description">
              Our value addition point is to understand the needs of the global
              clients, being available as per timezone requirements & eventually
              coming up with solutions that are built to enhance their online
              presence and do goal-conversion.
            </p>
            <button
              className="green-btn"
              aria-label="Elevate Your Journey with Us"
            >
              Elevate Your Journey with Us
            </button>

            <div className="counters">
              <div>
                <strong>11+</strong>
                <span>Years of Experience</span>
              </div>
              <div>
                <strong>50+</strong>
                <span>Happy Clients Globally</span>
              </div>
              <div>
                <strong>65+</strong>
                <span>Talented Professionals</span>
              </div>
              <div>
                <strong>80%</strong>
                <span>Customer Retention Rate</span>
              </div>
              <div>
                <strong>200+</strong>
                <span>Successful Projects Delivered</span>
              </div>
            </div>
            <div className="country-list">
              {countries.map((country, index) => (
                <div key={index} className="country-item">
                  <Images
                    imagePath={country.flag}
                    altText={`${country.name} Flag`}
                  />
                  <span>{country.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="right-map">
            {/* <Images
                imagePath={AppIcons.ClientMapImage}
                altText="Client Map"
              /> */}
            {/* <Spline scene="https://prod.spline.design/24sjkdvU8a-tLkLS/scene.splinecode" /> */}
            <section className="contact-map-section">
              <div className="map-container">
                <Images
                  imagePath={AppIcons.WorldMap}
                  altText=" World Map Image"
                  className="world-map"
                />
                {locations.map((loc) => (
                  <div
                    key={loc.id}
                    className={`map-dot ${selectedLocation.id === loc.id ? "active" : ""
                      }`}
                    style={{ top: loc.position.top, left: loc.position.left }}
                    onClick={() => setSelectedLocation(loc)}
                  />
                ))}

                {locations.map((loc) => (
                  <div
                    key={loc.id}
                    className={`map-dot-wrapper ${selectedLocation.id === loc.id ? "active" : ""
                      }`}
                    style={{ top: loc.position.top, left: loc.position.left }}
                    onClick={() => setSelectedLocation(loc)}
                  >
                    <div className="map-dot" />
                    <div className="dot-tooltip">
                      <p className="city-icon">
                        <Images
                          imagePath={loc.flagImage}
                          altText="Logo Image"
                          className="flag-tooltip"
                        />
                        <strong>{loc.city}</strong>
                      </p>
                      <p>{loc.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
