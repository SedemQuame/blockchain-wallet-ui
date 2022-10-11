import React, { useContext, useState } from "react";
import ProjectLogo from "./../../Assets/images/logo.jpg";
import { UserContext } from "./../../Context/auth.context";
import { useNavigate } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const NavBar = (props) => {
  // use context
  const { user, setUser } = useContext(UserContext);

  // Collapse isOpen State
  const [isOpen, setIsOpen] = useState(false);

  let navigate = useNavigate();

  return (
    <>
      <Navbar color="light" light expand="md">
        <NavbarBrand className="text-center">
          <img
            src={ProjectLogo}
            alt="project-logo"
            style={{ width: "45px", height: "45px" }}
          />
          Agmanwani Wallet
        </NavbarBrand>
        <button
          type="button"
          class="btn btn-outline-primary"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <i class="fa-solid fa-bars"></i>
        </button>

        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {user && user.token ? (
              <>
                <NavItem>
                  <NavLink className="nav-link" href="/home">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" href="/wallet-list">
                    Wallets
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    className="nav-link"
                    onClick={() => {
                      setUser(null);
                      navigate(`/login`);
                    }}
                  >
                    Logout
                  </NavLink>
                </NavItem>
              </>
            ) : (
              <>
                <NavItem>
                  <NavLink className="nav-link" href="/">
                    Sign up
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" href="/login">
                    Login
                  </NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
