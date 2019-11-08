import React, { useState, useEffect } from "react";
import { Redirect, useRouteMatch } from "react-router-dom";
import { Input } from "./Input";
import PropTypes from "prop-types";

export const ManageUser = ({ handleAddUser, users, handleUpdateUser }) => {
  const match = useRouteMatch(); // info on matching url
  const { currentUserId } = match.params; // example of aliasing

  const [user, setUser] = useState({
    name: "",
    email: ""
  });

  const [saveCompleted, setSaveCompleted] = useState(false);

  useEffect(() => {
    // what if someone puts in a bad URL
    if (currentUserId && users.length > 0) {
      const userToEdit = users.find(
        user => user.id === parseInt(currentUserId, 10)
      );
      if (!userToEdit) {
        // show 404 page
        console.log("no user to edit");
        return;
      }
      setUser(userToEdit);
      // debugger;
    }
  }, [currentUserId, users]);

  async function handleSubmit(e) {
    e.preventDefault();
    // could also check user.id, which could be better in case you click submit and user.id isn't updated yet
    currentUserId ? await handleUpdateUser(user) : await handleAddUser(user);
    setSaveCompleted(true);
  }

  const handleChange = e => setUser({ ...user, [e.target.id]: e.target.value });

  // onSubmit on form means form is submitted when user presses enter w/o having to click the button
  return (
    <>
      {saveCompleted && <Redirect to="/users" />}
      {currentUserId ? <h1>Edit User</h1> : <h1>Add User</h1>}
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
        <input
          type="submit"
          value={currentUserId ? "Save Changes" : "Add User"}
        />
      </form>
    </>
  );
};

ManageUser.propTypes = {
  users: PropTypes.array.isRequired,
  handleAddUser: PropTypes.func.isRequired,
  handleUpdateUser: PropTypes.func.isRequired
};
