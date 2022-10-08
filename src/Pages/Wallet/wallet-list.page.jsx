import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BTCLogo from "./../../Assets/images/BTC.png";
import Success from "./../../Assets/images/check.png";
import Failed from "./../../Assets/images/failed.png";
import Empty from "./../../Assets/images/empty.png";

export default function WalletListPage() {
  let navigate = useNavigate();
  const [wallets, setWallets] = useState();
  const [walletName, setWalletName] = useState();
  const [walletType, setWalletType] = useState();
  const [walletCreationSuccess, setWalletCreationSuccess] = useState(false);
  const [walletCreationInitiated, setWalletCreationInitiated] = useState(false);
  const [hasWalletData, setHasWalletData] = useState(false);

  const user_id = `63418f54788cd04674ea279f`;

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    if (!hasWalletData) {
      fetch(
        `https://btc-wallet-app.herokuapp.com/users/${user_id}/wallets`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          setWallets(result.userWallets);
          setHasWalletData(result.success);
        })
        .catch((error) => console.log("error", error));
    }
  }, []);

  const createWallet = (e) => {
    e.preventDefault();
    setWalletCreationInitiated(true);

    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjM0MTU2YjgxNGU1ODQwMDE2ZWJkZWRkIiwiZW1haWwiOiJzZWRlbXF1YW1lYUBnbWFpbC5jb20iLCJuYW1lIjoic2VkZW0gdGVzdHVzZXIiLCJpYXQiOjE2NjUyMjY1NDcsImV4cCI6MTY2NTgzMTM0N30.YJ-txgnfXKoM5KLvZe0fMdcaaiLZ9ZCr8QyKPGv3CPI"
    );

    var raw = JSON.stringify({
      name: walletName,
      type: walletType,
    });

    console.log(raw);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `https://btc-wallet-app.herokuapp.com/${user_id}/generate-wallet`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setWalletCreationSuccess(result.success);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <div className="container-fluid">
        <div className="card mt-3">
          <h5 className="card-header bg-black text-white">
            BTC Wallets
            {wallets && wallets.length > 0 ? (
              <button
                type="button"
                className="btn btn-primary float-end"
                data-mdb-toggle="modal"
                data-mdb-target="#createWalletModal"
                onClick={() => setWalletCreationInitiated(false)}
              >
                Create Wallet
              </button>
            ) : null}
          </h5>
          <div className="card-body p-0">
            {wallets && wallets.length > 0 ? (
              <div className="">
                <table className="mb-0 table bg-white align-middle">
                  <tbody>
                    {wallets &&
                      wallets.map((wallet) => (
                        <tr
                          onClick={() => {
                            navigate(`/wallet-details/${wallet.address}`);
                          }}
                        >
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                src={BTCLogo}
                                alt=""
                                style={{ width: "45px", height: "45px" }}
                                className="rounded-circle"
                              />
                              <div className="ms-3">
                                <p className="fw-bold mb-1">{wallet.address}</p>
                                {/* <p className="text-muted mb-0">
                                  john.doe@gmail.com
                                </p> */}
                              </div>
                            </div>
                          </td>
                          <td className="text-end">Date</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div
                className="d-flex justify-content-center align-items-center text-center"
                style={{ height: "80vh" }}
              >
                <div className="col-12 col-md-6">
                  <img
                    src={Empty}
                    alt="empty-wallet-list"
                    style={{ width: "100px", height: "100px" }}
                  />
                  <h5 className="card-title">
                    There are no associated wallet(s).
                  </h5>
                  <p className="card-text">
                    Please create one by clicking the button below.
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-mdb-toggle="modal"
                    data-mdb-target="#createWalletModal"
                    onClick={() => setWalletCreationInitiated(false)}
                  >
                    Create Wallet
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/*Create modal */}

      <div
        className="modal fade"
        id="createWalletModal"
        tabindex="-1"
        aria-labelledby="createWalletModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              {/* Show progress loading here */}
              {walletCreationInitiated === false ? (
                <form onSubmit={(e) => createWallet(e)}>
                  <h5 className="card-title text-center">Create Wallet.</h5>
                  <p className="card-text text-center">
                    State a name for the wallet you want to create.
                  </p>

                  <div className="form-group mb-2">
                    <label className="form-label" for="email-address">
                      Wallet Name
                    </label>
                    <input
                      type="text"
                      id="wallet-name"
                      className="form-control"
                      onChange={(e) => setWalletName(e.target.value)}
                    />
                  </div>

                  <div className="form-group mb-2">
                    <label className="form-label" for="password">
                      Wallet Type
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      id="wallet-type"
                      onChange={(e) => setWalletType(e.target.value)}
                    >
                      <option selected>Select menu</option>
                      <option value="BTC">BTC</option>
                    </select>
                  </div>

                  <button type="submit" className="btn btn-primary btn-block">
                    Create Wallet
                  </button>
                </form>
              ) : (
                <div className="text-center">
                  <img
                    src={walletCreationSuccess ? Success : Failed}
                    alt=""
                    style={{ width: "45px", height: "45px" }}
                  />
                  <br />
                  <p>
                    Wallet creation{" "}
                    {walletCreationSuccess ? "succeeded" : "failed"}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
