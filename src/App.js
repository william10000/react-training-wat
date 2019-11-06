// useEffect reruns ever time React renders/rerenders the screen
import React, { useState, useEffect } from "react";
import { getUsers } from "./api/userApi";

function App() {
  const [users, setUsers] = useState([]);

  // useEffect runs by default after every render
  useEffect(() => {
    console.log("running useEffect");
    // use _users to avoid naming confusion with users from above
    getUsers().then(_users => setUsers(_users));
  }, []); // array contains data where if the data changes, we want to run useEffect
  // [] example of usage of useEffect where we want it to run just once

  const h1Style = {
    color: "blue",
    fontSize: "32px"
  };

  function handleDelete(id) {
    const newUsers = users.filter(user => user.id !== id);
    setUsers(newUsers); // updates state so React knows to rerender
    // updating states gets queued - React will batch setState calls together for performance
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
