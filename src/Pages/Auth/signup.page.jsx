import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./../../Context/auth.context";
import LoadingModal from "../../Components/Transactions/loading-modal.component";

function Signup() {
  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loadingModalIsOpen, setLoadingModalIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // show loading modal
    setLoadingModalIsOpen(true);

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

    fetch(`https://btc-wallet-app.herokuapp.com/register`, requestOptions)
      .then((response) => response.json())
      .then((result) => {

        if (result.length === 3) {
          alert(result[1].message);
        } else {
          if (result.success) {
            // hide the modal
            alert("Account created successfully. Please proceed to login");
            navigate(`/login`);
          } else {
            alert(result.message);
          }
        }
        setLoadingModalIsOpen(false);
        return;
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <div
        className="row d-flex justify-content-center align-items-center bg-light"
        style={{ height: "95vh" }}
      >
        <div className="col-12 col-md-6 col-lg-4 ">
          <div className="card m-2">
            <div className="card-body">
              <form onSubmit={(e) => handleSubmit(e)}>
                <h5 className="card-title text-center">Signup</h5>
                <p className="card-text text-center">
                  Enter your details to signup.
                </p>
                <div className="form-group mb-2">
                  <label className="form-label" for="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

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
                  <label className="form-label" for="phone-number">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone-number"
                    className="form-control"
                    onChange={(e) => setPhone(e.target.value)}
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

                <button type="submit" className="btn btn-primary btn-block">
                  Sign Up
                </button>

                <LoadingModal
                  isOpen={loadingModalIsOpen}
                  text={"Creating an account."}
                />

                <div className="row mt-3">
                  <div className="col">
                    <Link to="/login">Login</Link>
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
    </>
  );
}

export default Signup;
