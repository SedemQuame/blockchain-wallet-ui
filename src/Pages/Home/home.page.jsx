import { useNavigate } from "react-router-dom";
import BTCLogo from "./../../Assets/images/BTC.png";
import { UserContext } from "./../../Context/auth.context";
import TradeViewChart from "react-crypto-chart";

function Home() {
  let navigate = useNavigate();

  return (
    <>
      <div className="d-grid container gap-4 pt-3">
        <div>
          <h5 className="">BTC/BUSD Chart</h5>
          <hr />

          <div className="parent">
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
          <h5 className="">Holdings</h5>
          <p>Summary of all you crypto holdings.</p>
          <hr />

          <div className="row">
            <div className="col-12 col-md-3">
              <div className="card border text-center">
                <div className="card-body">
                  <img
                    src={BTCLogo}
                    alt=""
                    style={{ width: "100px", height: "100px" }}
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

      {/* <div className="">
        <div className="">
          <div></div>
          <div>
            <h3>Bitcoin (BTC)</h3>
          </div>
          <div></div>
        </div>
        <div className="mr-auto">US$19,176.65</div>
        <div>-$102.45(0.56)%</div>
        
      </div> */}
    </>
  );
}

export default Home;
