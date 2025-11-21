import React from "react";
import { Modal } from "react-bootstrap";
import { Icon } from "@iconify/react";
import "./CenterModel.scss";
import Buttons from "../button/Buttons";

const CenterModel = ({
  modelTitle,
  show,
  handleClose,
  onUpload,
  children,
  modelSizeClass,
}) => {
  return (
    <>
      <Modal
        className={`model-center-main ${modelSizeClass} `}
        show={show}
        onHide={handleClose}
      >
        <Modal.Header>
          <Modal.Title>{modelTitle}</Modal.Title>
          {/* Custom close button */}
          <button
            className="custom-close-btn"
            onClick={handleClose}
            aria-label="Close modal"
          >
            <Icon icon="carbon:close-outline" width="30" height="30" />
          </button>
        </Modal.Header>
        <Modal.Body>
          {children}
          {/* bottom-buttons Start */}
          <div className="d-flex justify-content-center mt-3">
            <Buttons
              buttonTypeClassName="dark-btn"
              buttonText="Cancel"
              onClick={handleClose}
              ariaLabel="Close modal"
            />
            <Buttons
              buttonTypeClassName="success-btn ml-3"
              buttonText="Ok"
              onClick={handleClose}
              ariaLabel="Upload file"
            />
          </div>
          {/* bottom-buttons End */}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CenterModel;
