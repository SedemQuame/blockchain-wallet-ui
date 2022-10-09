import { useNavigate } from "react-router-dom";
import BTCLogo from "./../../Assets/images/BTC.png";
import { UserContext } from "./../../Context/auth.context";
import TradeViewChart from "react-crypto-chart";

function Home() {
  let navigate = useNavigate();

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
                  <h5 className="card-title">Bitcoin (BTC)</h5>
                  <p className="card-text">$0.00</p>
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
