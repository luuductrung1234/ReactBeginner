import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./context/auth-context";

function App() {
  const context = useContext(AuthContext);

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {context.isRegistering && <Register />}
        {!context.isRegistering && !context.isLoggedIn && <Login />}
        {!context.isRegistering && context.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
