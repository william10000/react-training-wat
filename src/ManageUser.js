import React, { useState } from "react";
import { addUser } from "./api/userApi";
import { Redirect } from "react-router-dom";

export const ManageUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: ""
  });

  const [saveCompleted, setSaveCompleted] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault(); // stop browser from posting back
    const savedUser = await addUser(user);
    setSaveCompleted(true);
    // .then(() => setUser({})); // pause(await) function until addUser is done
  }

  function handleChange(e) {
    setUser({ ...user, [e.target.id]: e.target.value });
  }

  // onSubmit on form means form is submitted when user presses enter w/o having to click the button
  return (
    <>
      {saveCompleted && <Redirect to="/users" />}
      <h1>Add User</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input
            id="name"
            type="text"
            value={user.name} // can destructure user so that we can use value={name}
            onChange={e => handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            id="email"
            type="email"
            value={user.email}
            onChange={e => handleChange(e)}
          />
        </div>
        <br />
        <input type="submit" value="Add User" />
      </form>
    </>
  );
};
