import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import BTCLogo from "./../../Assets/images/BTC.png";
import TradeViewChart from "react-crypto-chart";
import { UserContext } from "../../Context/auth.context";

function Home() {
  let navigate = useNavigate();
  const [totalBTCBalance, setTotalBTCBalance] = useState();

  // use context
  const { user } = useContext(UserContext);
  let user_id = user.user.userId;

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://btc-wallet-app.herokuapp.com/users/${user_id}/total-bitcoin-ballance`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          setTotalBTCBalance(result.totalBitcoinBalance);
        }
      })
      .catch((error) => console.log("error", error));
  });

  return (
    <>
      <div
        className="d-grid container gap-4 pt-3"
        style={{ overflow: "scroll" }}
      >
        <div>
          <h5>BTC/BUSD Chart</h5>
          <hr />

          <div className="parent rounded-2">
            <TradeViewChart
              containerStyle={{
                minWidth: "100%",
                minHeight: "40vh",
              }}
              pair="BTCUSDT"
            />
          </div>
        </div>

        <div>
          <h5>Holdings</h5>
          <small className="text-muted">
            Summary of all you crypto holdings.
          </small>
          <hr />

          <div className="row">
            <div className="col-12 col-md-3">
              <div className="card border text-center">
                <div className="card-body">
                  <img
                    src={BTCLogo}
                    alt=""
                    style={{ width: "70px", height: "70px" }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1"> </p>
                  </div>
                  <h5 className="card-title">Bitcoin</h5>
                  <p className="card-text">
                    Total ~ <b>{totalBTCBalance || 0.0}</b>
                  </p>
                  <button
                    href="#"
                    className="btn btn-primary"
                    onClick={() => {
                      navigate(`/wallet-list`);
                    }}
                  >
                    View Holdings
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
