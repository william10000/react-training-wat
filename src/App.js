import React from "react";
import Users from "./Users";
import { Home } from "./Home";
import { ManageUser } from "./ManageUser";
import { Nav } from "./Nav";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* load the nav bar at all times */}
      <Route path="/" component={Nav} />
      {/* load the home page only at root */}
      <Route path="/" component={Home} exact />
      <Route path="/users" component={Users} />
      <Route path="/manageuser/:id?" component={ManageUser} />
    </>
  );
}

export default App;
