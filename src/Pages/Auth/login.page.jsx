import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/auth.context";
import LoadingModal from "../../Components/Transactions/loading-modal.component";

function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loadingModalIsOpen, setLoadingModalIsOpen] = useState(false);

  // use context
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // show loading modal
    setLoadingModalIsOpen(true);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: email,
      password: password,
    });

    console.log(raw);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://btc-wallet-app.herokuapp.com/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);

        // hide the modal
        setLoadingModalIsOpen(false);

        // store this in the user context
        if (result.success) {
          setUser(result);

          // navigate to /home
          navigate(`/home`);
        } else {
          alert(result.message);
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div
      className="row d-flex justify-content-center align-items-center bg-light"
      style={{ height: "95vh" }}
    >
      <div className="col-12 col-md-8 col-lg-5">
        <div className="card m-2">
          <div className="card-body">
            <h5 className="card-title text-center">Login</h5>
            <p className="card-text text-center">
              Enter your email address and password to login.
            </p>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="form-group mb-2">
                <label className="form-label" for="email-address">
                  Email address
                </label>
                <input
                  type="email"
                  id="email-address"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group mb-2">
                <label className="form-label" for="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-block"
                data-mdb-toggle="modal"
                data-mdb-target="#LoadingModal"
              >
                Login
              </button>

              <LoadingModal
                isOpen={loadingModalIsOpen}
                text={"Logging into account."}
              />

              <div className="row mt-3">
                <div className="col">
                  <Link to="/">Signup</Link>
                </div>

                <div className="col text-end">
                  <Link to="/forgot-password">Forgot password?</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
