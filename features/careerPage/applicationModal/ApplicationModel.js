/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./ApplicationModel.scss";
import Iconify from "../../../components/ui/icons/Iconify";
import { useLazyGetJobCareerDetailsByIdQuery } from "@/app/services/contactUsAPI";

const ApplicationModel = (props) => {
  const [file, setFile] = useState(null);

  const [
    getJobCareerDetailsById,
    {
      data: getJobCareerDetailsData,
      isFetching: isGetJobCareerDetailsFetching,
      isSuccess: isGetJobCareerDetailsSuccess,
    },
  ] = useLazyGetJobCareerDetailsByIdQuery();

  useEffect(() => {
    if (props.jobCareerId) {
      getJobCareerDetailsById(props.jobCareerId);
    }
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic
    console.log("Form submitted");
  };

  return (
    <div className="application-model">
      <div className="content">
        <div className="row">
          <div className="col-xl-5 col-lg-5 col-12">
            <div className="job-role">
              <div className="job-title">Job Title</div>
              <div className="job-name">
                {isGetJobCareerDetailsSuccess &&
                  getJobCareerDetailsData?.jobTitle}
              </div>
            </div>
            <div className="job-location">
              <div className="d-flex align-items-center">
                <Iconify icon="ri:building-line" />
                <div className="comp-name  ml-1">Moltech Solutions</div>
              </div>
            </div>
            <div>
              <div className="job-resp mt-3">
                <div className="title">Responsibilities</div>
                <ul>
                  <li>
                    Analyze and interpret complex data to provide insights and
                    support decision-making.
                  </li>
                  <li>
                    Develop and implement predictive models and machine learning
                    algorithms.
                  </li>
                  <li>
                    Clean and preprocess data to ensure accuracy and consistency.
                  </li>
                </ul>
              </div>
              {getJobCareerDetailsData?.jobDescriptionTitleList?.map(
                (item, index) => (
                  <div className="job-section mt-4" key={index}>
                    <div className="title">
                      {item?.jobDescriptionTitleName || `Section ${index + 1}`}
                    </div>
                    <ul>
                      {/* Example content, replace with actual data if needed */}
                      {item?.jobDescriptionTitleSubPointList?.map(
                        (subPoint, subIndex) => (
                          <li key={subIndex}>{subPoint?.subPointName || ""}</li>
                        )
                      )}
                    </ul>
                  </div>
                )
              )}
            </div>
            {/* <div className="job-req mt-4">
              <div className="title">Educational Requirements</div>
              <div className="job-req-description">
                MSc/BCA+MCA/MCA/BTech/Bachelor of Engineering
              </div>
            </div>
            <div className="job-service mt-4">
              <div className="title">Service - Line</div>
              <div className="job-req-description">
                Web Development and Maintenance
              </div>
            </div> */}
          </div>
          {/* <div className="separator" /> */}
          <div className="col-xl-7 col-lg-7 col-12">
            <form onSubmit={handleSubmit} className="form">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" name="firstName" required />
              </div>

              <div className="form-group">
                <label>Last Name</label>
                <input type="text" name="lastName" required />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input type="email" name="email" required />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" name="phone" required />
              </div>

              {/* <div className="form-group">
                <label>Applying for Position</label>
                <input
                  type="text"
                  name="position"
                  required
                  placeholder=".Net Developer"
                />
              </div> */}

              <div className="form-group">
                <label>
                  Attach Your Resume{" "}
                  <span style={{ color: "red" }}>
                    (Only pdf /docx /doc file)
                  </span>
                </label>

                <input
                  type="file"
                  id="fileUpload"
                  accept=".pdf, .doc, .docx"
                  onChange={handleFileChange}
                  required
                  style={{ display: "none" }}
                />
                <button
                  onClick={() => document.getElementById("fileUpload").click()}
                  aria-label="Upload file"
                >
                  Upload File
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="checkbox-group mt-4">
          <label>
            <input type="checkbox" required /> I hereby confirm that the
            information provided herein is accurate, correct, and complete and
            that the documents submitted are genuine.
          </label>
        </div>
      </div>
    </div>
  );
};

export default ApplicationModel;
