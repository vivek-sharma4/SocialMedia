import React, { useState } from "react";
import Login from "./assets/Components//Layout/Login";
import Register from "./assets/Components/Layout/Register";
import Home from "./assets/Components/Layout/Home";
import UserProfile from "./assets/Components/Layout/UserProfile";
import FriendRequests from "./assets/Components/Layout/FriendRequests";
import Posts from "./assets/Components/Layout/Posts";
import "./index.css";
import "./App.css";

function App() {
  const [page, setPage] = useState("login");
  const [users, setUsers] = useState([]); // To store registered users

  const handleLogin = () => setPage("home");
  const handleRegister = (newUser) => {
    setUsers([...users, newUser]);
    setPage("login");
  };
  const handleLogout = () => setPage("login");

  return (
    <div>
      {page === "login" && (
      <div className="container">
      <Login onLogin={handleLogin} users={users} />
      <p>Don't have an account?</p>
      <button onClick={() => setPage("register")}>Register Here</button>
    </div>
    )}

      {page === "register" && (
        <>
          <Register onRegister={handleRegister} />
          <p>
            Already have an account?{" "}
            <button onClick={() => setPage("login")}>Login Here</button>
          </p>
        </>
      )}
      {page === "home" && (
        <>
          <Home onLogout={handleLogout} />
          <button onClick={() => setPage("friendRequests")}>
            View Friend Requests
          </button>
          <button onClick={() => setPage("posts")}>Create Post</button>
          <UserProfile name="UserProfile-1" />
        </>
      )}
      {page === "friendRequests" && (
        <>
          <FriendRequests />
          <button onClick={() => setPage("home")}>Back to Home</button>
        </>
      )}
      {page === "posts" && (
        <>
          <Posts />
          <button onClick={() => setPage("home")}>Back to Home</button>
        </>
      )}
    </div>
  );
}

export default App;
