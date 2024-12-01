import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import "./styles.css";

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

export default App;
