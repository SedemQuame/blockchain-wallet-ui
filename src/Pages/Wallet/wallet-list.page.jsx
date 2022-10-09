import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import BTCLogo from "./../../Assets/images/BTC.png";
import Success from "./../../Assets/images/check.png";
import Failed from "./../../Assets/images/failed.png";
import Empty from "./../../Assets/images/empty.png";
import { UserContext } from "../../Context/auth.context";
import LoadingModal from "../../Components/Transactions/loading-modal.component";
import moment from "moment";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function WalletListPage() {
  let navigate = useNavigate();
  const [wallets, setWallets] = useState();
  const [walletName, setWalletName] = useState();
  const [walletType, setWalletType] = useState();
  const [walletCreationSuccess, setWalletCreationSuccess] = useState(false);
  const [walletCreationInitiated, setWalletCreationInitiated] = useState(false);
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
          setWallets(result.userWallets);
          setHasWalletData(result.success);
        })
        .catch((error) => console.log("error", error));
    }
  }, []);

  const createWallet = (e) => {
    e.preventDefault();
    // show loading modal
    setLoadingModalIsOpen(true);

    var myHeaders = new Headers();
    myHeaders.append(`Authorization`, `Bearer ${bearer_token}`);

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
        // hide the modal
        setLoadingModalIsOpen(false);
        // setWalletCreationSuccess(result.success);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <div className="container-fluid d-grid gap-3">
        <div className="mt-3">
          <h5 className="card-title text-center">My Wallets</h5>
          <p className="card-text text-center">
            Create and manage multiple BTC wallets from one dashboard.
          </p>
        </div>

        <div className="card mt-3">
          <h5 className="card-header bg-black text-white">
            Wallets
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
          </h5>
          <div className="card-body p-0">
            {wallets && wallets.length > 0 ? (
              <div className="">
                <table className="mb-0 table bg-white align-middle">
                  <tbody>
                    {wallets &&
                      wallets.map((wallet) => (
                        <tr
                          className="p-0"
                          onClick={() => {
                            navigate(`/wallet-details/${wallet.address}`);
                          }}
                        >
                          <td className="p-1">
                            <div className="d-flex align-items-center">
                              <img
                                src={BTCLogo}
                                alt=""
                                style={{ width: "45px", height: "45px" }}
                                className="rounded-circle"
                              />
                              <div className="p-1">
                                <p className="fw-bold mb-1">{wallet.name}</p>
                                <p
                                  className="text-muted text-wrap mb-0"
                                  style={{ fontSize: "10px" }}
                                >
                                  {wallet.address}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="text-muted p-2 text-end">
                            {moment(
                              wallet.createdAt,
                              "YYYYMMDDHHmmss"
                            ).fromNow()}
                          </td>
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

      <Modal isOpen={openCreateWalletModal}>
        <ModalBody>
          {/* Show progress loading here */}

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

            <button
              type="submit"
              className="btn btn-primary btn-block"
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
  );
}

{
  /* <div className="text-center">
  <img
    src={walletCreationSuccess ? Success : Failed}
    alt=""
    style={{ width: "45px", height: "45px" }}
  />
  <br />
  <p>Wallet creation {walletCreationSuccess ? "succeeded" : "failed"}</p>
</div>; */
}
