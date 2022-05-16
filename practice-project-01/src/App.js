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
    <div>
      <AddUser onNewUser={newUserHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
