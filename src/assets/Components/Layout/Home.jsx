import React from "react";

const Home = ({ onLogout }) => {
  const profilePicture = localStorage.getItem("profilePicture");

  return (
    <div className="container">
      <img src="/logo.png" alt="SocialHub Logo" className="logo" />
      <h1>Welcome to SocialHub!</h1>
      {profilePicture && (
        <img src={profilePicture} alt="Profile" className="profile-picture" />
      )}
      <button onClick={onLogout}>Log Out</button>
    </div>
  );
};

export default Home;
