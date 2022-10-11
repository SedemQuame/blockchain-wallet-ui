import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import BTCLogo from "./../../Assets/images/BTC.png";
import Success from "./../../Assets/images/check.png";
import Failed from "./../../Assets/images/failed.png";
import Empty from "./../../Assets/images/empty.png";
import { UserContext } from "../../Context/auth.context";
import LoadingModal from "../../Components/Transactions/loading-modal.component";
import moment from "moment";
import { Modal, ModalBody } from "reactstrap";

export default function WalletListPage() {
  let navigate = useNavigate();
  const [wallets, setWallets] = useState();
  const [walletName, setWalletName] = useState();
  const [walletType, setWalletType] = useState();
  const [hasWalletData, setHasWalletData] = useState(false);
  const [loadingModalIsOpen, setLoadingModalIsOpen] = useState(false);
  const [openCreateWalletModal, setOpenCreateWalletModal] = useState(false);

  // use context
  const { user } = useContext(UserContext);
  let user_id = user.user.userId;
  let bearer_token = user.token;

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
          console.log(result);
          setWallets(result.userWallets);
          setHasWalletData(result.success);
          if (!result.success) {
            alert(result.message);
            navigate(`/login`);
          }

          console.log(result);
        })
        .catch((error) => console.log("error", error));
    }
  }, [hasWalletData]);

  const createWallet = (e) => {
    e.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${bearer_token}`);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      name: walletName,
      type: walletType,
    });

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
        console.log(result);
        if (result === "Unauthorized") {
          alert("Unauthorized");
          // has wallet data
          setHasWalletData(false);
          return;
        }

        console.log(result);

        if (result) {
          alert(result.message);
          setHasWalletData(false);
        }
      })
      .catch((error) => console.log("error", error));
  };

  // Toggle for Modal
  const toggle = () => setOpenCreateWalletModal(!openCreateWalletModal);

  return (
    <>
      {wallets ? (
        <>
          <div
            className="d-grid container gap-3 pt-3"
            style={{ overflow: "scroll" }}
          >
            <div>
              <h5>My Wallets</h5>
              <small className="text-muted">
                Create and manage multiple BTC wallets from one dashboard.
              </small>
              <hr />
              {wallets && wallets.length > 0 ? (
                <button
                  type="button"
                  className="btn btn-primary float-end"
                  data-mdb-toggle="modal"
                  data-mdb-target="#createWalletModal"
                  onClick={() => setOpenCreateWalletModal(true)}
                >
                  Create Wallet
                </button>
              ) : null}
            </div>
            <div>
              <h5>Bitcoin Wallets</h5>
              <div className="card border">
                {wallets && wallets.length > 0 ? (
                  <div
                    className="card-body p-0"
                    style={{ overflowY: "scroll", height: "60vh" }}
                  >
                    <table className="mb-0 table bg-white align-middle">
                      <tbody>
                        {wallets &&
                          wallets.map((wallet, index) => (
                            <tr
                              onClick={() => {
                                navigate(`/wallet-details/${wallet.address}`);
                              }}
                            >
                              <td className="d-flex align-items-center ps-2 gap-2 p-1">
                                <img
                                  src={BTCLogo}
                                  alt=""
                                  style={{ width: "35px", height: "35px" }}
                                  className="rounded-circle"
                                />
                                <div className="d-grid p-1">
                                  <h6 className="text-capitalize mb-0">
                                    {wallet.name || `Wallet #${index + 1}`}
                                  </h6>
                                  <span
                                    className="text-muted text-wrap mb-0"
                                    style={{ fontSize: "10px" }}
                                  >
                                    {wallet.address}
                                  </span>
                                  <span
                                    className="text-muted"
                                    style={{ fontSize: "10px" }}
                                  >
                                    {moment(
                                      wallet.createdAt,
                                      "YYYYMMDDHHmmss"
                                    ).fromNow()}
                                  </span>
                                </div>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div
                    className="d-flex justify-content-center align-items-center text-center"
                    style={{ height: "60vh" }}
                  >
                    <div className="col-12 col-md-6 ">
                      <img
                        src={Empty}
                        alt="empty-wallet-list"
                        style={{ width: "100px", height: "100px" }}
                      />
                      <div className="my-3 text-center">
                        <h5>There are no associated wallet(s).</h5>
                        <small className="text-muted">
                          Please create a wallet.
                        </small>
                      </div>
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-mdb-toggle="modal"
                        data-mdb-target="#createWalletModal"
                        onClick={() => setOpenCreateWalletModal(true)}
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

          <Modal isOpen={openCreateWalletModal} toggle={toggle}>
            <ModalBody>
              {/* Show progress loading here */}
              <div>
                <h5>Create Wallet.</h5>
                <small className="text-muted">
                  State a name for the wallet you want to create.
                </small>
                <hr />
              </div>
              <form onSubmit={(e) => createWallet(e)}>
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
                    <option selected>Select Wallet</option>
                    <option value="wallet">Wallet</option>
                    <option value="hd_wallet">HD Wallet</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block mt-3"
                  onClick={() => setOpenCreateWalletModal(false)}
                >
                  Create Wallet
                </button>

                <LoadingModal
                  isOpen={loadingModalIsOpen}
                  text={"Creating a BTC wallet."}
                />
              </form>
            </ModalBody>
          </Modal>
        </>
      ) : (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "80vh" }}
        >
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
}
