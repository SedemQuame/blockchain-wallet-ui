import React from "react";
import { Modal, ModalBody } from "reactstrap";

export default function LoadingModal(props) {
  return (
    <>
      <Modal isOpen={props.isOpen}>
        <ModalBody>
          <div className="card-body">
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
            <br />
            <p className="text-muted text-center">{props.text}</p>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}
