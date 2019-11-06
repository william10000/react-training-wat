// API proxy (make http calls for the app)
export function getUsers() {
  return fetch("http://localhost:3001/users").then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Invalid response: ", response.json());
  });
}
