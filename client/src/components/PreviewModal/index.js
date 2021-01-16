import React, { useState } from "react";
import { Modal, Image } from "react-bootstrap";

function PreviewModal(props) {
  console.log(props);
  const [show, setShow] = useState(false);

  return (
    <>
      <div variant="primary" onClick={() => setShow(true)}>
        Preview
      </div>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Employee Information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="employeeInfo">
            Name: {props.info.firstName} {props.info.lastName}
          </div>
          <div className="employeeInfo">
            Organization Name: {props.info.orgName}
          </div>
          <div className="employeeInfo">
            Employee ID no.: {props.info.employeeID}
          </div>
          <div className="employeeInfo">Mobile: {props.info.mobile}</div>
          <div className="employeeInfo">Email: {props.info.email}</div>
          <Image src={props.info.photo} fluid />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PreviewModal;
