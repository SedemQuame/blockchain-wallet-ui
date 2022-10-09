import React, { useState, useMemo, createContext, useEffect } from "react";

const UserContext = createContext({
  user: "",
  setUser: () => {},
});

function setLocalStorage(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // catch possible errors:
    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
  }
}

function getLocalStorage(key, initialValue) {
  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : initialValue;
  } catch (e) {
    // if error, return initial value
    return initialValue;
  }
}

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => getLocalStorage("user", {}));
  useEffect(() => {
    setLocalStorage("user", user);
  }, [user]);

  const value = useMemo(() => ({ user, setUser }), [user]);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
