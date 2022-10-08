import Footer from "../../Components/Footer/footer.component";
import { useNavigate } from "react-router-dom";

import BTCLogo from "./../../Assets/images/BTC.png";
import ETHLogo from "./../../Assets/images/ETH.png";

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
    </>
  );
}

export default Home;
