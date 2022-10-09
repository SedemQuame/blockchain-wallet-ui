import Footer from "../../Components/Footer/footer.component";
import { useNavigate } from "react-router-dom";

import BTCLogo from "./../../Assets/images/BTC.png";

import { UserContext, UserProvider } from "./../../Context/auth.context";

function Home() {
  let navigate = useNavigate();

  return (
    <>
      <div className="container-fluid">
        <div className="card mt-3">
          <p>{UserContext.userId}</p>
          <h5 className="card-header bg-black text-white">Holdings</h5>
          <div className="card-body p-0">
            {/* List of the users btc holdings */}
            <table className="mb-0 table bg-white align-middle">
              <tbody>
                <tr
                  onClick={() => {
                    navigate(`/wallet-list?holding=btc&user=sedem`);
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
                        <p className="fw-bold mb-1">BTC</p>
                      </div>
                    </div>
                  </td>
                  <td className="text-end">
                    <p className="fw-bold mb-1">$0.00</p>
                    <p className="text-muted mb-0">0 BTC</p>
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
