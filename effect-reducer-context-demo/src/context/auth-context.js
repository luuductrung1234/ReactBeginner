import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  isRegistering: false,
  onLogout: () => {},
  onLogin: () => {},
  onRegister: () => {},
  onSwitchToRegister: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedIsLoggedIn === "1") setIsLoggedIn(true);
  }, []);

  const registerHandler = (email, password) => {
    // just a dummy demo, no need to store registered account
    setIsRegistering(false);
  };

  const switchToRegisterHandler = () => {
    setIsRegistering(true);
  };

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        isRegistering: isRegistering,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        onRegister: registerHandler,
        onSwitchToRegister: switchToRegisterHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
