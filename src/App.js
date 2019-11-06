import React, { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "william", email: "w@w.com" },
    { id: 2, name: "claire", email: "c@c.com" },
    { id: 3, name: "junebug", email: "j@j.com" }
  ]);

  const h1Style = {
    color: "blue",
    fontSize: "32px"
  };

  function handleDelete(id) {
    const newUsers = users.filter(user => user.id !== id);
    setUsers(newUsers); // updates state so React knows to rerender
    // updating states gets queued - React will batch setState calls together for performance
    debugger;
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
