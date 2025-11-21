import React from "react";
import "./PrivacyPolicyPage.scss";
import Link from "next/link";

const PrivacyPolicyPage = () => {
  return (
    <div className="privacy-policy-sec">
      {/* Top Title Start */}
      <div className="sitemap-top-title-sec">
        <div className="container">
          <div className="row">
            <div className="col-2xl-12 col-xl-12 col-md-12 col-12">
              <div className="left-desc-sec">
                <div className="title-center">
                  <span className="sub-title">Privacy Policy</span>
                  <h1 className="title mb-4">Privacy Policy</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Title End */}
      <div className="policy-desc">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
              <div className="privacy-policy-list">
                <p>
                  <b>DISCLAIMER: </b>
                  Your access to and use of this website are conditioned upon
                  your acceptance and compliance with the following terms and
                  conditions. By entering and using this website, you expressly
                  agree to be bound by these terms and conditions.
                </p>
                <p>
                  This website, accessible at{" "}
                  <Link
                    aria-label="This website, accessible at 'https://www.mol-tech.us/' "
                    href="https://www.mol-tech.us/"
                    target={"_blank"}
                  >
                    www.mol-tech.us
                  </Link>{" "}
                  , and any other platforms or applications launched from time
                  to time, is owned, operated, and maintained by Moltech
                  Solution Inc. , a registered company with its office located
                  at 2000 N Central Expressway Suite 220 Plano, TX 75074 United
                  States.
                </p>
                <p>
                  This Privacy Policy governs the treatment of personally
                  identifiable information that the Company collects when you
                  access and use this Platform, including any services provided
                  through this Platform. Additionally, this policy covers the
                  handling of PII shared by users and any PII obtained by the
                  Company from various service providers with whom the Company
                  has integrated its systems to offer necessary services. Please
                  note that this policy does not extend to the practices of
                  companies not owned or controlled by the Company or to
                  individuals not employed or managed by the Company.
                </p>
                <p>
                  At Moltech Solution Inc., we prioritize the privacy and
                  security of our users&apos; personal information. This Privacy
                  Policy outlines how we collect, use, and protect the personal
                  data we gather from our website visitors, clients, and users
                  of our services. Please take the time to read this policy to
                  understand how we handle your personal information.
                </p>
                <div>
                  <strong>Information We Collect</strong>

                  <ul className="alphabatic">
                    <li>
                      Personal Information: We may collect personal information
                      such as names, email addresses, postal addresses, phone
                      numbers, and other contact details when you interact with
                      our website or use our services.
                    </li>
                    <li>
                      Website Usage Information: We may collect non-personal
                      information about your interactions with our website,
                      including IP addresses, browser type, device identifiers,
                      pages visited, and other similar data.
                    </li>
                    <li>
                      Cookies and Tracking Technologies: Like many websites, we
                      may use cookies and other tracking technologies to enhance
                      your browsing experience and gather information about how
                      you use our website.
                    </li>
                  </ul>
                </div>
                <div>
                  <strong>How We Use Your Information</strong>

                  <ul className="alphabatic">
                    <li>
                      Providing Services: We use the information you provide to
                      deliver our services, respond to your inquiries, and
                      fulfill your requests.
                    </li>
                    <li>
                      Improving User Experience: The data collected helps us
                      enhance our website, services, and customer support to
                      ensure a better user experience.
                    </li>
                    <li>
                      Communication: We may use your contact information to send
                      you relevant updates, promotional materials, and
                      newsletters. You can opt-out of receiving marketing
                      communications at any time.
                    </li>
                    <li>
                      Legal Compliance: We may process your information to
                      comply with applicable laws, regulations, and legal
                      requirements.
                    </li>
                  </ul>
                </div>
                <div>
                  <strong>Data Security</strong>

                  <p>
                    We implement appropriate technical and organizational
                    measures to safeguard your personal information from
                    unauthorized access, disclosure, alteration, and
                    destruction. However, no data transmission over the internet
                    can be guaranteed as completely secure. Therefore, while we
                    strive to protect your data, we cannot warrant the security
                    of information transmitted to or from our website.
                  </p>
                  <strong>Sharing Your Information</strong>

                  <p>
                    We do not sell, rent, or trade your personal information to
                    third parties. We may share your data with trusted service
                    providers who assist us in operating our business, but they
                    are required to keep your information confidential and use
                    it only for the specified purposes.
                  </p>
                  <strong>Third-Party Links</strong>

                  <p>
                    Our website may contain links to third-party websites or
                    services. We are not responsible for the privacy practices
                    or content of these third-party sites. We encourage you to
                    read the privacy policies of any linked websites before
                    providing them with your personal information.
                  </p>
                  <strong>Your Choices</strong>

                  <p>
                    You have the right to access, correct, update, or delete
                    your personal information held by us. If you wish to
                    exercise these rights or have any privacy-related questions,
                    please contact us at{" "}
                    <Link
                      aria-label="You have the right to access, correct, update, or delete
                        your personal information held by us. If you wish to
                        exercise these rights or have any privacy-related
                        questions, please contact us at '+1-945-209-7691' "
                      href="tel:+1-945-209-7691"
                    >
                      +1-945-209-7691
                    </Link>
                    .
                  </p>
                  <strong>Updates to this Privacy Policy</strong>

                  <p>
                    We may update this Privacy Policy from time to time to
                    reflect changes in our practices or for other operational,
                    legal, or regulatory reasons. We encourage you to review
                    this policy periodically for any updates.
                  </p>
                  <p>
                    By accessing our website or using our services, you signify
                    your consent to the terms of this Privacy Policy. If you do
                    not agree with this policy, please refrain from using our
                    website or providing your personal information.
                  </p>
                  <p>
                    If you have any concerns or inquiries regarding this Privacy
                    Policy or our data practices, please contact us at{" "}
                    <Link
                      aria-label="If you have any concerns or inquiries regarding this
                        Privacy Policy or our data practices, please contact us inquiry@mol-tech.us"
                      href="mailto:inquiry@mol-tech.us"
                    >
                      inquiry@mol-tech.us
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
