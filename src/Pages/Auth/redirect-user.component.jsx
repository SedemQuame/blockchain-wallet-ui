import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./../../Context/auth.context";

export default function RedirectUser() {
  const { user } = useContext(UserContext);
  let navigate = useNavigate();

  return <>{!user.token ? <>{navigate.path("/login")}</> : null}</>;
}
