import React, { useContext, useState } from "react";
import ProjectLogo from "./../../Assets/images/logo.jpg";
import { UserContext } from "./../../Context/auth.context";
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
  const { user } = useContext(UserContext);

  // Collapse isOpen State
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/" className="text-center">
          <img
            src={ProjectLogo}
            alt="project-logo"
            style={{ width: "45px", height: "45px" }}
          />
          AMANGWANI
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
            <NavItem>
              <NavLink className="nav-link" href="/home">
                Home
              </NavLink>
            </NavItem>

            {user.token && user.message ? (
              <NavItem>
                <NavLink className="nav-link" href="/wallet-list">
                  Wallets
                </NavLink>
              </NavItem>
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
