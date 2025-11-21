import React from "react";
// import Buttons from "../../../components/ui/button/Buttons";
import Images from "../../../components/image/Image";
import { AppIcons } from "../../../data/appIcons";

const TechnologyStack = () => {
  return (
    <>
      <div className="technology-sec">
        <div className="container-fluid">
          <div className="col-12">
            <div className="technology-list" >

              <Images imagePath={AppIcons.TechnologyImg} altText="Technology Image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnologyStack;
