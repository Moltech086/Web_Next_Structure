import React from "react";
import { Icon } from "@iconify/react";
import "./PopularTags.scss";

const PopularTags = ({ tags }) => {
  return (
    <>
      {tags ? (
        <div className="popular-tags-container">
          <h3 className="heading">
            <Icon icon="mdi:tag-multiple" className="heading-icon" />
            Popular Tags
          </h3>
          <div className="tags-wrapper">
            {tags.map((tag) => (
              <span key={tag} className="tag-item">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default PopularTags;
