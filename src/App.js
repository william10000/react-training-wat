import React from "react";

function App() {
  const h1Style = {
    color: "red",
    fontSize: "32px"
  };

  return (
    <>
      <h1 className="header" style={h1Style}>
        Hi from function
      </h1>
      <label htmlFor="firstName">First Name</label>
      <input id="firstName" type="text"></input>
      <p>Paragraph</p>
    </>
  );
}

export default App;
