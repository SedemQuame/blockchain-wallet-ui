import React, { useEffect, useState } from "react";

export default function SendBTCModal(props) {
  const [recipientAddress, setRecipientAddress] = useState();
  const [amountToSendInBTC, setAmountToSendInBTC] = useState();

  const sendBTC = () => {};
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    recieverAddress: recipientAddress,
    amountToSend: amountToSendInBTC,
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
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
  return (
    <>
      <div
        class="modal fade"
        id="sendBTCModal"
        tabindex="-1"
        aria-labelledby="sendBTCModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="card">
              <div class="card-body">
                <h5 className="card-title text-center">Send BTC.</h5>
                <p className="card-text text-center">
                  Enter the receivers address and the amount to send.
                </p>
                <form onSubmit={(e) => sendBTC(e)}>
                  <div class="form-group mb-2">
                    <label class="form-label" for="email-address">
                      Recipient's BTC address
                    </label>
                    <input
                      type="text"
                      id="btc-recipient-address"
                      class="form-control"
                      onChange={(e) => setRecipientAddress(e.target.value)}
                    />
                  </div>

                  <div class="form-group mb-2">
                    <label class="form-label" for="password">
                      Amount To Send In BTC
                    </label>
                    <input
                      type="text"
                      id="amount-to-send-in-btc"
                      class="form-control"
                      onChange={(e) => setAmountToSendInBTC(e.target.value)}
                    />
                  </div>

                  <button type="submit" class="btn btn-primary btn-block">
                    SEND BTC
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
