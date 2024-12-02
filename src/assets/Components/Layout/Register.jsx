import React, { useState } from "react";

const Register = ({ onRegister }) => {
  const [loginID, setLoginID] = useState("");
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [message, setMessage] = useState("");

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (value.length > 6 && /[A-Z]/.test(value) && /[0-9]/.test(value)) {
      setStrength("Strong");
    } else if (value.length > 6) {
      setStrength("Medium");
    } else {
      setStrength("Weak");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("loginID", loginID);
    localStorage.setItem("password", password);

    if (profilePicture) {
      const reader = new FileReader();
      reader.onload = () => {
        localStorage.setItem("profilePicture", reader.result);
      };
      reader.readAsDataURL(profilePicture);
    }

    setMessage("Registration Successful! Please Login.");
    setTimeout(onRegister, 1500);
  };

  return (
    <div className="container">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Create your Login ID"
          value={loginID}
          onChange={(e) => setLoginID(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Create your Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <p>Password Strength: <span className={strength}>{strength}</span></p>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setProfilePicture(e.target.files[0])}
        />
        <button type="submit">Register</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Register;
