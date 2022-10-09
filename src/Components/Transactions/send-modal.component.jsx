import React, { useState, useContext } from "react";
import { UserContext } from "../../Context/auth.context";
import { Modal, ModalBody } from "reactstrap";

export default function SendBTCModal(props) {
  const [recipientAddress, setRecipientAddress] = useState();
  const [amountToSendInBTC, setAmountToSendInBTC] = useState();

  // use context
  const { user } = useContext(UserContext);
  let bearer_token = user.token;

  const sendBTC = (e) => {
    e.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append(`Authorization`, `Bearer ${bearer_token}`);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      recieverAddress: recipientAddress,
      amountToSend: amountToSendInBTC,
      privateKey: props.privateKey,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `https://btc-wallet-app.herokuapp.com/${props.userAddress}/send-btc-to-address`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        props.setTransactionStateData(result);
        alert(result.message);
      })
      .catch((error) => console.log("error", error));
  };

  // Toggle for Modal
  const toggle = () => props.setOpenSendBtcModal(!props.openSendBtcModal);

  return (
    <>
      <Modal isOpen={props.openSendBtcModal} toggle={toggle}>
        <ModalBody>
          <h5 className="card-title">Send BTC.</h5>
          <p className="card-text">
            Enter the receivers address and the amount to send.
          </p>
          <form onSubmit={(e) => sendBTC(e)}>
            <div className="form-group mb-2">
              <label className="form-label text-capitalize" for="email-address">
                Recipient's Address
              </label>
              <input
                type="text"
                id="btc-recipient-address"
                className="form-control"
                onChange={(e) => setRecipientAddress(e.target.value)}
              />
            </div>

            <div className="form-group mb-2">
              <label className="form-label text-capitalize" for="password">
                Amount In BTC
              </label>
              <input
                type="text"
                id="amount-to-send-in-btc"
                className="form-control"
                onChange={(e) => setAmountToSendInBTC(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-block"
              onClick={() => props.setOpenSendBtcModal(false)}
            >
              SEND BTC
            </button>
          </form>
        </ModalBody>
      </Modal>
    </>
  );
}
