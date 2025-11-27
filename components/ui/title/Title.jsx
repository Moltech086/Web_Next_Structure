import React from "react";
import "./Title.scss";

const Title = ({ highlightText = "", title = "", description = "" }) => {
  return (
    <div className="title-section">
      {/* Highlight Text (Optional) */}
      {highlightText && <p className="highlight-text">{highlightText}</p>}

      {/* Main Title (Optional) */}
      {title && <h2 className="main-title">{title}</h2>}

      {/* Description (Optional) */}
      {description && <p className="description-text">{description}</p>}
    </div>
  );
};

export default Title;

// This is the use case for the Title component
{
  /* <Title
  highlightText="Contact"
  title="Let's get in touch"
  description="Have a word with our expert consultants about your next project to get suggestive guidance & proposal."
/> */
}
