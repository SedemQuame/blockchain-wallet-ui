import React from "react";
import { Modal, ModalBody } from "reactstrap";
import Empty from "./../../Assets/images/empty.png";

export default function StateOfBTCTransactionModal(props) {
  return (
    <>
      <Modal isOpen={props.transactionState.message !== ""}>
        <ModalBody>
          <div className="card-body">
            <img
              src={Empty}
              alt="empty-wallet-list"
              style={{ width: "100px", height: "100px" }}
            />
            <p className="card-text">{props.transactionState.message}</p>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}
