import React, { useEffect, useState } from "react";
import { getUsers, deleteUser } from "./api/userApi";
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

  function handleDelete(id) {
    const newUsers = users.filter(user => user.id !== id);
    deleteUser(id).then(() => {
      setUsers(newUsers);
    });
  }

  return (
    <>
      <Nav />
      <Route path="/" component={Home} exact />
      {/* props also contains location, match, history */}
      <Route
        path="/users"
        render={props => <Users users={users} deleteUser={handleDelete} />}
      />
      <Route
        path="/manageuser/:currentUserId?"
        render={props => <ManageUser users={users} setUsers={setUsers} />}
      />
    </>
  );
}

Users.proptypes = {
  users: PropTypes.array.isRequired,
  deleteUser: PropTypes.func.isRequired
};

export default App;
