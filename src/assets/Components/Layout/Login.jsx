import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [loginID, setLoginID] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedID = localStorage.getItem("loginID");
    const storedPassword = localStorage.getItem("password");

    if (loginID === storedID && password === storedPassword) {
      setMessage("Login Successful!");
      onLogin();
    } else {
      setMessage("Invalid Login ID or Password.");
    }
  };

  return (
    <div className="container">
      <img src="/logo.png" alt="SocialHub Logo" className="logo" />
      <h1>Login to SocialHub</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Login ID"
          value={loginID}
          onChange={(e) => setLoginID(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Login;
