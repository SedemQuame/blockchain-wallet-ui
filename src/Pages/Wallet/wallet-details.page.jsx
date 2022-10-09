import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Success from "./../../Assets/images/check.png";
import Failed from "./../../Assets/images/failed.png";
import Empty from "./../../Assets/images/empty.png";
import { Link } from "react-router-dom";
import SendBTCModal from "../../Components/Transactions/send-modal.component";
import ReceiveBTCModal from "../../Components/Transactions/receive-modal.component";
import StatusOfBTCTransactionModal from "../../Components/Transactions/state-modal.component";

function WalletAttributes(props) {
  return (
    <>
      {props.attribute}
      <span
        style={{ fontSize: "12px" }}
        className="text-muted text-wrap float-end"
      >
        {props.value}
      </span>
    </>
  );
}

export default function WalletDetailsPage() {
  const { walletAddress } = useParams();
  const [data, setData] = useState();
  const [openSendBtcModal, setOpenSendBtcModal] = useState(false);
  const [transactionState, setTransactionStateData] = useState();

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      network: process.env.REACT_APP_NETWORK_TYPE || "BTCTEST",
      address: walletAddress,
    });

    console.log(raw);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(
      "https://btc-wallet-app.herokuapp.com/return-wallet-address-info",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result.data.txs);
        setData(result.data);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <div>
        {data ? (
          <div
            className="d-grid container gap-5 pt-3"
            style={{ width: "100%" }}
          >
            <div>
              <h5>Wallet Details & Transactions</h5>
              <hr />
              <p>
                Wallet Details
                <br />
                <small>List of all important wallet details</small>
              </p>

              <ul className="list-group">
                <li className="list-group-item p-2">
                  <WalletAttributes
                    attribute="Address"
                    value={data && data.address}
                  />
                </li>
                <li className="list-group-item p-2">
                  <WalletAttributes
                    attribute="Network"
                    value={data && data.network}
                  />
                </li>
                <li className="list-group-item p-2">
                  <WalletAttributes
                    attribute="Pending"
                    value={data && data.received_value}
                  />
                </li>
                <li className="list-group-item p-2">
                  <WalletAttributes
                    attribute="Received"
                    value={data && data.received_value}
                  />
                </li>
                <li className="list-group-item p-2">
                  <WalletAttributes
                    attribute="Number of Transactions"
                    value={data && data.total_txs}
                  />
                </li>
              </ul>
            </div>

            <div>
              <p>
                Transactions
                <br />
                <small>
                  List of all transactions performed with this wallet.
                </small>
              </p>

              <div className="d-grid gap-3">
                <div className="d-flex justify-content-between gap-3">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setOpenSendBtcModal(true)}
                  >
                    Send Crypto
                  </button>

                  <button
                    type="button"
                    className="btn btn-primary"
                    data-mdb-toggle="modal"
                    data-mdb-target="#receiveBTCModal"
                  >
                    Receive Crypto
                  </button>
                </div>

                <div className="card border p-3">
                  {data.txs.length > 0 ? (
                    <>
                      <div className="row">
                        {data.txs.map((txs, index) => (
                          <ul className="col-12 col-md-4 list-group mb-3">
                            <li className="list-group-item p-2">
                              <WalletAttributes
                                attribute="Block Number"
                                value={txs.block_no}
                              />
                            </li>
                            <li className="list-group-item p-2">
                              <WalletAttributes
                                attribute="Confirmation"
                                value={txs.confirmations}
                              />
                            </li>
                            <li className="list-group-item p-2">
                              <WalletAttributes
                                attribute="Time"
                                value={txs.time}
                              />
                            </li>
                            <li className="list-group-item p-2">
                              <WalletAttributes
                                attribute="Transaction Number"
                                value={index + 1}
                              />
                            </li>
                            <li className="list-group-item p-2">
                              <WalletAttributes
                                attribute={
                                  <Link
                                    to={{
                                      pathname: `https://sochain.com/tx/BTCTEST/${txs.txid}`,
                                    }}
                                  >
                                    {txs.txid}
                                  </Link>
                                }
                              />
                            </li>
                          </ul>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        className="d-flex align-items-center justify-content-center"
                        style={{ height: "40vh" }}
                      >
                        <div className="text-center">
                          <img
                            src={Empty}
                            alt="no-transactions"
                            style={{ width: "100px", height: "100px" }}
                          />
                          <br />
                          <p>There are not transactions on this wallet.</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <SendBTCModal
        openSendBtcModal={openSendBtcModal}
        setOpenSendBtcModal={setOpenSendBtcModal}
        setTransactionStateData={setTransactionStateData}
        userAddress={walletAddress}
        privateKey={``}
      />
      <ReceiveBTCModal userAddress={walletAddress} />
      {/* <StatusOfBTCTransactionModal transactionState={transactionState} /> */}
    </>
  );
}
