import React from "react";

const Home = ({ onLogout }) => {
  return (
    <div className="container">
      <h2>Home Page</h2>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Home;
