import React, { useState, useEffect } from "react";
import { addUser } from "./api/userApi";
import { Redirect, useRouteMatch } from "react-router-dom";
import { Input } from "./Input";

export const ManageUser = () => {
  const match = useRouteMatch(); // info on matching url
  const { currentUserId } = match.params; // example of aliasing
  console.log(match);

  const [user, setUser] = useState({
    name: "",
    email: ""
  });

  const [saveCompleted, setSaveCompleted] = useState(false);

  useEffect(() => {
    if (currentUserId) {
      // get currentUserId out of props.users
    }
  });

  // exercise: lift concern to app.js
  async function handleSubmit(e) {
    e.preventDefault(); // stop browser from posting back
    const addedUser = await addUser(user);
    console.log(addedUser);
    setSaveCompleted(true);
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
        <Input
          id="name"
          value={user.name}
          onChange={handleChange}
          label="name"
        />
        <Input
          id="email"
          value={user.email}
          onChange={handleChange}
          label="email"
        />
        <br />
        <input type="submit" value="Add User" />
      </form>
    </>
  );
};
