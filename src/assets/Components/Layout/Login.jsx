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
      setTimeout(onLogin, 1000);
    } else {
      setMessage("Invalid Login ID or Password.");
    }
  };

  return (
    <div className="container">
      <h2>Welcome Back!</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your Login ID"
          value={loginID}
          onChange={(e) => setLoginID(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter your Password"
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
