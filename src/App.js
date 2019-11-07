import React, { useState, useEffect } from "react";
import { getUsers, deleteUser } from "./api/userApi";
import "./app.css";

function App() {
  const [users, setUsers] = useState([]);

  // useEffect runs by default after every render
  useEffect(() => {
    getUsers().then(_users => setUsers(_users));
  }, []); // array contains data where if the data changes, we want to run useEffect

  // updates to state and db are not in a transaction so they could be out of sync if one fails
  function handleDelete(id) {
    const newUsers = users.filter(user => user.id !== id);
    deleteUser(id).then(() => {
      setUsers(newUsers);
    });
  }

  return (
    <>
      <h1 className="header">Users</h1>
      {/* display user data in a table with headers for id, name, email */}
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>id</th>
            <th>name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <label htmlFor="firstName">First Name</label>
      <input id="firstName" type="text"></input>
      <p>Paragraph</p>
    </>
  );
}

export default App;
