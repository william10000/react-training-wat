import React, { useState, useEffect } from "react";
import { getUsers, deleteUser } from "./api/userApi";
import { Link } from "react-router-dom";
import "./app.css";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(_users => setUsers(_users));
  }, []); // array contains data where if the data changes, we want to run useEffect

  function handleDelete(id) {
    const newUsers = users.filter(user => user.id !== id);
    deleteUser(id).then(() => {
      setUsers(newUsers);
    });
  }

  return (
    <>
      <h1 className="header">Users</h1>
      <Link to="/manageuser">
        <button>Add user</button>
      </Link>
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
                <Link to={`/user/${user.id}`}>
                  <button>
                    Edit
                    <span aria-label="pencil emoji" role="img">
                      ✏️
                    </span>
                  </button>
                </Link>
              </td>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Users;
