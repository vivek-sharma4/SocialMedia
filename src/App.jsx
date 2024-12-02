import React, { useState } from "react";
import Login from "./assets/Components/Layout/Login";
import Register from "./assets/Components/Layout/Register";
import Home from "./assets/Components/Layout/Home";
import UserProfile from "./assets/Components/Layout/UserProfile";
import FriendRequests from "./assets/Components/Layout/Friend Requests";
import "./index.css";
import "./App.css";

function App() {
  const [page, setPage] = useState("login");

  const handleLogin = () => setPage("home");
  const handleRegister = () => setPage("login");
  const handleLogout = () => setPage("login");

  return (
    <div>
      {page === "login" && (
        <>
          <Login onLogin={handleLogin} />
          <button onClick={() => setPage("register")}>Go to Register</button>
        </>
      )}
      {page === "register" && (
        <>
          <Register onRegister={handleRegister} />
          <button onClick={() => setPage("login")}>Back to Login</button>
        </>
      )}
      {page === "home" && (
        <>
          <Home onLogout={handleLogout} />
          <UserProfile name="UserProfile-1" />
          <button onClick={() => setPage("login")}>Log Out</button>
        </>
      )}
      {page === "friendRequests" && <FriendRequests />}
      <button onClick={() => setPage("friendRequests")}>View Friend Requests</button>

    </div>
  );
}

export default App;
