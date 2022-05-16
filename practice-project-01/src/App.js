import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const newUserHandler = (newUser) => {
    newUser.id = Math.random().toString();
    setUsers((currentUsers) => [newUser, ...currentUsers]);
  };

  return (
    <>
      <AddUser onNewUser={newUserHandler} />
      <UserList users={users} />
    </>
  );
}

export default App;
