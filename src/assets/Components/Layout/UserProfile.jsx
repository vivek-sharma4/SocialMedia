import React from "react";

const UserProfile = ({ name }) => {
  const profilePicture = localStorage.getItem("profilePicture");
  const loginID = localStorage.getItem("loginID");

  return (
    <div className="container">
      <h2>User Profile</h2>
      {profilePicture && (
        <img
          src={profilePicture}
          alt="User Profile"
          className="profile-picture"
        />
      )}
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Login ID:</strong> {loginID}</p>
    </div>
  );
};

export default UserProfile;
