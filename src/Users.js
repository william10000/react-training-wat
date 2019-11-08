import React from "react";
import { Link } from "react-router-dom";

// can destructure props directly in the function args, but are they are var types
// props are immutable and React could complain if we try to change them
// but apparently you can reassign stuff in props
function Users({ users, deleteUser }) {
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
                <button onClick={() => deleteUser(user.id)}>Delete</button>
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
