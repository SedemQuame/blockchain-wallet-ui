import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: email,
      password: password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://btc-wallet-app.herokuapp.com/register", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div
      className="row d-flex justify-content-center align-items-center bg-light"
      style={{ height: "90vh" }}
    >
      <div className="col-12 col-md-8 col-lg-5">
        <div class="card">
          <div class="card-body">
            <h5 className="card-title text-center">Forgot Password</h5>
            <p className="card-text text-center">Enter your email address.</p>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div class="form-group mb-2">
                <label class="form-label" for="email-address">
                  Email address
                </label>
                <input
                  type="email"
                  id="email-address"
                  class="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button type="submit" class="btn btn-primary btn-block">
                Request Password Reset
              </button>

              <div class="row mt-3">
                <div class="col">
                  <Link to="/login">Login</Link>
                </div>

                <div class="col text-end">
                  <Link to="/signup">Signup</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
