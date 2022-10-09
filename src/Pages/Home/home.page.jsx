import Footer from "../../Components/Footer/footer.component";
import { useNavigate } from "react-router-dom";

import BTCLogo from "./../../Assets/images/BTC.png";
import ETHLogo from "./../../Assets/images/ETH.png";

import TradeViewChart from 'react-crypto-chart';

function Home() {
  let navigate = useNavigate();

  return (
    <>
      <div className="container-fluid">
        <div class="card mt-3">
          <h5 class="card-header bg-black text-white">Holdings</h5>
          <div class="card-body p-0">
            {/* List of the users btc holdings */}
            <table class="mb-0 table bg-white align-middle">
              <tbody>
                <tr
                  onClick={() => {
                    navigate(`/wallet-list?holding=btc&user=sedem`);
                  }}
                >
                  <td>
                    <div class="d-flex align-items-center">
                      <img
                        src={BTCLogo}
                        alt=""
                        style={{ width: "45px", height: "45px" }}
                        class="rounded-circle"
                      />
                      <div class="ms-3">
                        <p class="fw-bold mb-1">BTC</p>
                      </div>
                    </div>
                  </td>
                  <td className="text-end">
                    <p class="fw-bold mb-1">$0.00</p>
                    <p class="text-muted mb-0">0 BTC</p>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <div class=".text-center">
    <div class="flex justify-between p-1 m-1">
        <div>Holdings</div>
        <div>View Prices</div>
    </div>
    <div class="">
        <div class="flex justify-between p-1 m-1 wallets">
            <div><img src="assets/img/bitcoin.png" alt=""></img></div>
            <div>
                <div class="text-right">US$0.00</div>
                <div class="text-right">0BTC</div>
            </div>
        </div>
        <div class="flex justify-between p-1 m-1">
            <div>bitcoin</div>
            <div>prices</div>
        </div>
    </div>

      </div> */}

      <div class="d-flex align-items-center flex-column m-5">
        <div class="d-flex justify-content-center">
          <div></div>
          <div><h3>Bitcoin (BTC)</h3></div>
          <div></div>

        </div>
        <div class="mr-auto">US$19,176.65</div>
        <div>-$102.45(0.56)%</div>
        <div class="graph mt-3">
          {/* <div><h3>BTC/USDT</h3></div> */}
        
        <div className="parent">
        <TradeViewChart
        containerStyle={{
          minHeight: '300px',
          minWidth: '400px',
          marginBottom: '30px',
        }}
        pair="BTCUSDT"
      />
        </div>
      
      {/* <TradeViewChart 
      class="w-75 h-50"
      pair="BTCBUSD" />; */}
        </div>
      </div>

    </>
  );
}

export default Home;
