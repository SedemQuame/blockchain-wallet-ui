import React from "react";

export default function ReceiveBTCModal(props) {
  return (
    <>
      <div
        className="modal"
        id="receiveBTCModal"
        tabindex="-1"
        aria-labelledby="receiveBTCModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="card-body">
                <h5 className="card-title">Receive BTC.</h5>
                <p className="card-text">
                  Send this address to anyone to receive bitcoin.
                </p>
                <form onSubmit={(e) => e}>
                  <div className="form-group mb-2">
                    <label className="form-label" for="email-address">
                      Wallet Address
                    </label>
                    <input
                      type="text"
                      id="btc-user-btc-address"
                      className="form-control"
                      value={props.userAddress}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
