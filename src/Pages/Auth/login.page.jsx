import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
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
            <h5 className="card-title text-center">Login</h5>
            <p className="card-text text-center">
              Enter your email address and password to login.
            </p>
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

              <div class="form-group mb-2">
                <label class="form-label" for="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  class="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button type="submit" class="btn btn-primary btn-block">
                Login
              </button>

              <div class="row mt-3">
                <div class="col">
                  <Link to="/">Signup</Link>
                </div>

                <div class="col text-end">
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
