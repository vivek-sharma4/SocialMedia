import React, { useState } from "react";
import Login from "./assets/Components/Layout/Login"
import Register from "./assets/Components/Layout/Register";
import Home from "./assets/Components/Layout/Home";
import UserProfile from "./assets/Components/Layout/UserProfile";
import "./index.css";
import "./App.css"

function App() {
  const [page, setPage] = useState("login");

  const handleLogin = () => setPage("home");
  const handleRegister = () => setPage("login");
  const handleLogout = () => setPage("login");
  

  return (
    <div>
      {page === "login" && <Login onLogin={handleLogin} />}
      {page === "register" && <Register onRegister={handleRegister} />}
      {page === "home" && <Home onLogout={handleLogout} />}
    </div>
  );
}
<UserProfile name="UserProfile-1"></UserProfile>
export default App;
