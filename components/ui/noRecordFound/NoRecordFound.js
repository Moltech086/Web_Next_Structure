/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./NoRecordFound.scss";
import { AppIcons } from "../../../data/appIcons";
import Image from "../../image/Image";

const NoRecordFound = () => {
  return (
    <div className="record-not-found">
      <Image imagePath={AppIcons.noRecordImg} alt="Record Not Found" />
      <h5>No Record Found</h5>
    </div>
  );
}

export default NoRecordFound;
