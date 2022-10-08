import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      name: name,
      email: email,
      number: phone,
      password: password,
    });

    console.log(raw);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://btc-wallet-app.herokuapp.com/register", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        navigate(`/home`);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <div
        className="row d-flex justify-content-center align-items-center bg-light"
        style={{ height: "90vh" }}
      >
        <div className="col-12 col-md-6 col-lg-4 ">
          <div class="card">
            <div class="card-body">
              <form onSubmit={(e) => handleSubmit(e)}>
                <h5 className="card-title text-center">Signup</h5>
                <p className="card-text text-center">
                  Enter your details to signup.
                </p>
                <div class="form-group mb-2">
                  <label class="form-label" for="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    class="form-control"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

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
                  <label class="form-label" for="phone-number">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone-number"
                    class="form-control"
                    onChange={(e) => setPhone(e.target.value)}
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
                  Sign Up
                </button>

                <div class="row mt-3">
                  <div class="col">
                    <Link to="/login">Login</Link>
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
    </>
  );
}

export default Signup;
