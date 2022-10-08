import React, { createContext } from "react";

const UserContext = createContext({
  userId: "",
  authToken: "",
  setUserId: () => {},
  setAuthToken: () => {},
});

export default UserContext;