import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/NavBar/nav.component";
import Signup from "./Pages/Auth/signup.page";
import Login from "./Pages/Auth/login.page";
import Home from "./Pages/Home/home.page";
import WalletList from "./Pages/Wallet/wallet-list.page";
import WalletDetails from "./Pages/Wallet/wallet-details.page";
import ForgotPassword from "./Pages/Auth/forgot-passord.page";
import { UserContext, UserProvider } from "./Context/auth.context";


function App() {
  return (
    <>
      <Router>
        <UserProvider>
          <Nav />
          <Routes>
            <Route path="/" element={<Signup />} />
            {/* Employer's/Company's Dashboard*/}
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/home" element={<Home />} />
            <Route path="/wallet-list" element={<WalletList />} />
            <Route
              path="/wallet-details/:walletAddress"
              element={<WalletDetails />}
            />
          </Routes>
        </UserProvider>
      </Router>
    </>
  );
}

export default App;
