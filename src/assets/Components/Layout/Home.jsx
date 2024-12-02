import React from "react";

const Home = ({ onLogout }) => {
  const profilePicture = localStorage.getItem("profilePicture");

  return (
    <div className="container">
      <h2>Welcome to SocialHub!</h2>
      {profilePicture && (
        <img
          src={profilePicture}
          alt="Profile"
          className="profile-picture"
        />
      )}
      <p>Explore the platform and connect with your friends!</p>
      <button onClick={onLogout}>Log Out</button>
    </div>
  );
};

export default Home;
