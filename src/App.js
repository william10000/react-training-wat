import React, { useEffect, useState } from "react";
import { addUser, getUsers, deleteUser, updateUser } from "./api/userApi";
import Users from "./Users";
import { Home } from "./Home";
import { ManageUser } from "./ManageUser";
import { Nav } from "./Nav";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import "./app.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(_users => setUsers(_users));
  }, []);

  const handleDelete = id => {
    const newUsers = users.filter(user => user.id !== id);
    deleteUser(id).then(() => {
      setUsers(newUsers);
    });
  };

  const handleAddUser = async newUser => {
    const addedUser = await addUser(newUser);
    setUsers([...users, addedUser]);
  };

  const handleUpdateUser = async updatedUser => {
    await updateUser(updatedUser);
    setUsers(users.map(u => (u.id === updatedUser.id ? updatedUser : u)));
  };

  return (
    <>
      <Nav />
      <Route path="/" component={Home} exact />
      {/* props also contains location, match, history */}
      <Route
        path="/users"
        render={props => <Users users={users} deleteUser={handleDelete} />}
      />
      {/* could pass down a single user, just the one we want to edit */}
      <Route
        path="/manageuser/:currentUserId?"
        render={props => (
          <ManageUser
            users={users}
            handleAddUser={handleAddUser}
            handleUpdateUser={handleUpdateUser}
          />
        )}
      />
    </>
  );
}

Users.proptypes = {
  users: PropTypes.array.isRequired,
  deleteUser: PropTypes.func.isRequired
};

export default App;
