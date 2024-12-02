import React, { useState } from "react";

const Login = ({ onLogin, users }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const userExists = users.find(
      (user) => user.username === username && user.password === password
    );

    if (userExists) {
      alert("Login successful!");
      onLogin();
    } else {
      alert("Invalid username or password.");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
