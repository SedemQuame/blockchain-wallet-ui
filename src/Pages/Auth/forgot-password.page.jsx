import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoadingModal from "../../Components/Transactions/loading-modal.component";
import { UserContext } from "../../Context/auth.context";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loadingModalIsOpen, setLoadingModalIsOpen] = useState(false);
  const { setEmailForPassword } = useContext(UserContext);

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // show loading modal
    setLoadingModalIsOpen(true);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: email,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://btc-wallet-app.herokuapp.com/forgot-password",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          setEmailForPassword(email);

          // hide the modal
          setLoadingModalIsOpen(false);

          alert(result.message);

          // redirect to the password reset page.
          navigate(`/reset-password`);
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <div
        className="row d-flex justify-content-center align-items-center bg-light"
        style={{ height: "90vh" }}
      >
        <div className="col-12 col-md-8 col-lg-5">
          <div className="card m-2">
            <div className="card-body">
              <h5 className="card-title text-center">Forgot Password</h5>
              <p className="card-text text-center">Enter your email address.</p>
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
                <button type="submit" className="btn btn-primary btn-block">
                  Request Password Reset
                </button>

                <div className="row mt-3">
                  <div className="col">
                    <Link to="/login">Login</Link>
                  </div>

                  <div className="col text-end">
                    <Link to="/signup">Signup</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <LoadingModal
        isOpen={loadingModalIsOpen}
        text={"Sending a reset code."}
      />
    </>
  );
}

export default ForgotPassword;
