import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ProjectLogo from "./../../Assets/images/logo.jpg";
// import { UserContext } from "./../../Context/auth.context";

const NavBar = (props) => {
  // const { userId, setUserId } = useContext(UserContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Link className="navbar-brand mt-lg-0 mt-2" href="#">
              <img
                src={ProjectLogo}
                style={{ width: "30px", height: "30px" }}
                alt="MDB Logo"
                loading="lazy"
              />
            </Link>

            <ul className="navbar-nav me-auto mb-lg-0 mb-2">
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              {true ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/wallet-list">
                    Wallets
                  </Link>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Sign up
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
