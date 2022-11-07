import React, { useRef, useState, useContext } from "react";
import { UserContext } from "../../Context/auth.context";
import { Modal, ModalBody } from "reactstrap";

// images
import success from "./../../Assets/images/check.png";
import failed from "./../../Assets/images/failed.png";

export default function BuyBTCModal(props) {
  // Toggle for Modal
  const toggle = () => props.setOpenBuyBtcModal(!props.openBuyBtcModal);
  // useState
  const [vendor, setVendor] = useState("coinbase");
  const [btcPurchaseAmount, setBTCPurchaseAmount] = useState(0.0);
  const [usdPurchaseAmount, setUSDPurchaseAmount] = useState(0.0);
  const [transactionsState, setTransactionState] = useState("");

  // useRef
  const usdInput = useRef(null);
  const btcInput = useRef(null);

  // use context
  const { user } = useContext(UserContext);
  let bearer_token = user.token;

  // functions for recomputing the btc -> usd and usd -> btc.
  const usdToBTC = (usdPurchaseValue) => {
    // connect to api and get equivalent value of btc for given usd.
    fetch(`https://bitpay.com/api/rates`)
      .then((response) => response.json())
      .then((result) => {
        let usdBTCRate = result[2]["rate"]; // 1 BTC == usdRate
        let btcPurchaseValue = usdPurchaseValue / usdBTCRate;
        console.log(btcPurchaseValue);
        setBTCPurchaseAmount(btcPurchaseValue);
        btcInput.current.value = btcPurchaseAmount;

        console.log(btcInput);
      });
  };

  const btcToUSD = (btcPurchaseValue) => {
    // connect to api and get equivalent value of usd for given api.
    fetch(`https://bitpay.com/api/rates`)
      .then((response) => response.json())
      .then((result) => {
        let usdBTCRate = result[2]["rate"]; // 1 BTC == usdRate
        let usdPurchaseValue = usdBTCRate * btcPurchaseValue;
        console.log(usdPurchaseValue);
        setUSDPurchaseAmount(usdPurchaseValue);
        usdInput.current.value = usdPurchaseAmount;

        console.log(usdInput);
      });
  };

  const handleBuyBTCRequest = (e) => {
    e.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append(`Authorization`, `Bearer ${bearer_token}`);
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      vendor: vendor,
      bitcoin_amount: btcPurchaseAmount,
    });

    console.log(raw);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(
      // todo: change the endpoint for buying btc
      "https://btc-wallet-app.herokuapp.com/transactions/buy-bitcoin",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          setTransactionState(result.message);
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <Modal isOpen={props.openBuyBtcModal} toggle={toggle}>
        <ModalBody>
          <h5 className="card-title">Buy BTC.</h5>

          {props.buyModalState === 0 ? (
            // Select the vendor for sending BTC to.
            <>
              <p className="card-text">
                Please select the vendor you want to buy from.
              </p>
              <form>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="vendor"
                    value="binance"
                    id="binance-radio"
                    onSelect={(e) => setVendor(e.target.value)}
                  />
                  <label class="form-check-label" for="binance-radio">
                    Binance
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="vendor"
                    value="coinbase"
                    id="coinbase-radio"
                    onSelect={(e) => setVendor(e.target.value)}
                  />
                  <label class="form-check-label" for="coinbase-radio">
                    Coinbase
                  </label>
                </div>

                <button
                  className="btn btn-primary btn-block"
                  onClick={(e) => props.setBuyModalState(1)}
                >
                  NEXT
                </button>
              </form>
            </>
          ) : (
            <>
              {props.buyModalState === 1 ? (
                <>
                  <p className="card-text">
                    Please enter the amount of BTC you want to buy.
                  </p>
                  <form onSubmit={(e) => handleBuyBTCRequest(e)}>
                    <div className="form-group mb-2">
                      <label
                        className="form-label text-capitalize"
                        for="btc-purchase-value"
                      >
                        BTC amount
                      </label>
                      <input
                        type="text"
                        id="btc-purchase-value"
                        className="form-control"
                        ref={btcInput}
                        // value={btcPurchaseAmount}
                        onChange={(e) => btcToUSD(e.target.value)}
                      />
                    </div>

                    <div className="form-group mb-2">
                      <label
                        className="form-label text-capitalize"
                        for="usd-purchase-value"
                      >
                        USD Value
                      </label>
                      <input
                        type="text"
                        id="usd-purchase-value"
                        className="form-control"
                        ref={usdInput}
                        // value={usdPurchaseAmount}
                        onChange={(e) => usdToBTC(e.target.value)}
                      />
                    </div>

                    <button
                      className="btn btn-primary btn-block"
                      onClick={(e) => props.setBuyModalState(2)}
                    >
                      BUY BTC
                    </button>
                  </form>
                </>
              ) : (
                <>
                  {props.buyModalState === 2 ? (
                    <>
                      {transactionsState === "Transaction successful" ? (
                        <>
                          <div className="d-flex justify-content-center">
                            <div className="d-grid align-items-center justify-content-center gap-4 text-center">
                              <img
                                style={{ width: "100px", height: "100px" }}
                                src={success}
                                alt="transaction successful"
                                className="text-center"
                              />
                              <p>Transaction successful</p>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="d-grid align-items-center justify-content-center gap-4 text-center">
                            <img
                              style={{ width: "100px", height: "100px" }}
                              src={failed}
                              alt="transaction failed"
                            />
                            <p>Transaction failed</p>
                          </div>
                        </>
                      )}
                    </>
                  ) : null}
                </>
              )}
            </>
          )}
        </ModalBody>
      </Modal>
    </>
  );
}
