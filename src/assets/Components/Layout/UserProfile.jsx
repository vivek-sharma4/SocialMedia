import React from "react";
// import "./UserProfile.css"; // Optional for additional styling

const UserProfile = ({ name }) => {
  return (
    <div className="user-profile">
      <h2>Welcome, {name}!</h2>
      <p>Your profile details will be displayed here.</p>
      <button>Edit Profile</button>
    </div>
  );
};

export default UserProfile;
