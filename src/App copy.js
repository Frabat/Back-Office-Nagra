import React, { useState, useEffect } from "react";
import { login } from "./Services";
import "./App.css";

export const App = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const sendData = evt => {
    // console.log("LOCAL STORAGE, ", localStorage);
    let temp = "";
    React.useEffect(() => {
      login(userName, password).then(result => {
        localStorage.setItem("JWT TOKEN", result.token);
      });
    });

    evt.preventDefault();
  };
  const signOut = () => {
    React.useEffect(() => localStorage.clear());
  };

  return localStorage.length === 0 ? (
    <div>
      <form onSubmit={sendData}>
        <input
          type="text"
          value={userName}
          placeholder="Username"
          onChange={e => setUserName(e.target.value)}
          required={true}
        ></input>
        <input
          required={true}
          type="password"
          value={password}
          placeholder="********"
          onChange={e => setPassword(e.target.value)}
        ></input>

        <button type="submit">
          <h2>Login</h2>
        </button>
      </form>
    </div>
  ) : (
    <>
      <h1>Welcome, {userName}</h1>
      <button
        onClick={() => {
          signOut();
        }}
      >
        <h3>SIGNOUT</h3>
      </button>
    </>
  );
};
export default App;
