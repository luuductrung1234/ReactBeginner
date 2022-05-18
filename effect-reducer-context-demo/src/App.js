import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

import AuthContext from "./context/auth-context";

function App() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
      value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler }}
    >
      <MainHeader />
      <main>
        {isRegistering && <Register onRegister={registerHandler} />}
        {!isRegistering && !isLoggedIn && (
          <Login
            onLogin={loginHandler}
            onSwitchToRegister={switchToRegisterHandler}
          />
        )}
        {!isRegistering && isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
