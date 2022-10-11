import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/auth.context";

function ResetPassword() {
  const [verificationCode, setVerificationCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const { email } = useContext(UserContext);
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: email,
      code: verificationCode,
      newPassword: newPassword,
    });

    console.log(raw);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://btc-wallet-app.herokuapp.com/reset-password", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        alert(result.message);

        if (result.success) {
          // redirect to the password reset page.
          navigate(`/home`);
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
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
                <label className="form-label" for="reset-code">
                  Verification Code
                </label>
                <input
                  type="text"
                  id="reset-code"
                  className="form-control"
                  onChange={(e) => setVerificationCode(e.target.value)}
                />
              </div>

              <div className="form-group mb-2">
                <label className="form-label" for="new-password">
                  Password
                </label>
                <input
                  type="password"
                  id="new-password"
                  className="form-control"
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
