import React, { useState, useEffect } from "react";
import { getUsers, deleteUser } from "./api/userApi";

function App() {
  const [users, setUsers] = useState([]);

  // useEffect runs by default after every render
  useEffect(() => {
    getUsers().then(_users => setUsers(_users));
  }, []); // array contains data where if the data changes, we want to run useEffect

  const h1Style = {
    color: "blue",
    fontSize: "32px"
  };

  // updates to state and db are not in a transaction so they could be out of sync if one fails
  function handleDelete(id) {
    const newUsers = users.filter(user => user.id !== id);
    deleteUser(id);
    setUsers(newUsers);
  }

  return (
    <>
      <h1 className="header" style={h1Style}>
        Users
      </h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {/* Use arrow function on onClick so you don't invoke on render */}
            <button onClick={() => handleDelete(user.id)}>Delete</button>
            name: {user.name} - email: {user.email}
          </li>
        ))}
      </ul>
      <label htmlFor="firstName">First Name</label>
      <input id="firstName" type="text"></input>
      <p>Paragraph</p>
    </>
  );
}

export default App;
