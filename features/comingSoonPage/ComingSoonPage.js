import React from "react";
import "./ComingSoonPage.scss";
import { AppIcons } from "@/data/appIcons";
import Image from "next/image";

const ComingSoonPage = () => {
  return (
    <div className="coming-soon-sec">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-xl-7 col-lg-7 col-md-6 col-12"
          >
            <div className="title-sec">
              <h1>Coming Soon...</h1>
              <p>
                We are working hard to bring you the best experience. Stay tuned
                for updates!
              </p>
            </div>
          </div>
          <div
            className="col-xl-5 col-lg-5 col-md-6 col-12"
          >
            <div className="right-img-sec">
              <Image
                src={AppIcons.ComingSoon}
                alt="Under Construction"
                width={750}
                height={537}
                loading="lazy"
                priority={false}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
