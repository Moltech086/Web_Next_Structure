import React from "react";
import "./CommonApplicationModel.scss";
import Iconify from "../../../components/ui/icons/Iconify";
import Buttons from "../../../components/ui/button/Buttons";

const SimpleApplicationModel = () => {
  return (
    <div className="simple-application-model">
      <div className="content">
        <p className="message">
          <Iconify icon="mdi:information-outline" width={24} height={24} />{" "}
          Send your resume with a short summary of your lead generation or funnel setup experience to :
        </p>
        <ul className="contact-list">
          <li>
            <Iconify icon="mdi:email-outline" width={20} height={20} />{" "}
            <a href="mailto:careers@moltechsolutions.com">
              careers@moltechsolutions.com
            </a>
          </li>
          <li>
            <Iconify icon="mdi:phone-outline" width={20} height={20} />{" "}
            <a href="tel:+1234567890">+1 234 567 890</a>
          </li>
        </ul>

 
      </div>
    </div>
  );
};

export default SimpleApplicationModel;
