/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { AppIcons } from "../../../data/appIcons";
import Image from "../../image/Image";
import "./Pagination.scss";

const Pagination = () => {
  return (
    <>
      <div className="table-pagination">
        <div className="table-title">
          <p>Page 1 of 1.</p>
        </div>
        <div className="gap-2 pagination">
          <button title="Previous" aria-label="Previous page">
            <Image
              imagePath={AppIcons.arrowIcon}
              imgCustomClassName="left-arrow"
              alt="Arrow Icon"
            />

          </button>
          <button className="active-button" aria-label="Page 1">1</button>
          <button title="Next" aria-label="Next page">
            <Image
              imagePath={AppIcons.arrowIcon}
              imgCustomClassName="right-arrow"
              alt="Arrow Icon"
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default Pagination;