import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";
import "./ButtonsLink.scss";

const ButtonsLink = ({
  buttonText = "",
  icon = null,
  iconAfter = false, // DEFAULT = false → icon BEFORE text
  href = "#.",
  classes = "",
}) => {
  return (
    <Link href={href} className={`btn ${classes}`}>
      {/* Default behavior → icon BEFORE text */}
      {iconAfter && icon && <Icon icon={icon} className="left-icon" />}

      {/* Text only if available */}
      {buttonText && <span>{buttonText}</span>}

      {/* If user passes iconAfter={true} → icon AFTER text */}
      {!iconAfter && icon && <Icon icon={icon} className="right-icon" />}
    </Link>
  );
};

export default ButtonsLink;

// This is the Demo how to use the buttons link component
/*<ButtonsLink
      buttonText="Contact Us"
      icon="tabler:arrow-right"
      classes="large-btn primary-btn"
      iconAfter={true}
      href=""
    />
    <ButtonsLink
      buttonText="Learn More"
      icon="tabler:chevron-right"
      classes="small-btn secondary-btn"
      iconAfter={true}
      href=""
    />
    <ButtonsLink
      icon="tabler:plus"
      classes="btn-round"
      href=""
    />
    <ButtonsLink
      buttonText="Explore"
      classes="square-btn"
      href=""
    /> */
