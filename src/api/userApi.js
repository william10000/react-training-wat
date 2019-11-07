// API proxy (make http calls for the app)
export function getUsers() {
  return fetch("http://localhost:3001/users").then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Invalid response: ", response.json());
  });
}

export function deleteUser(userId) {
  return fetch("http://localhost:3001/users/" + userId, {
    method: "DELETE"
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Invalid response: ", response.json());
  });
}

export function addUser(user) {
  return fetch("http://localhost:3001/users/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Invalid response: ", response.json());
  });
}
