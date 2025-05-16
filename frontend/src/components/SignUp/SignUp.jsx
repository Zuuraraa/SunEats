import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      isAdmin: false,
    };

    localStorage.setItem("user", JSON.stringify(newUser));
    alert("Akun berhasil dibuat!");
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <h1 className="signup-title">Create Your Account</h1>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
      <div className="signup-options">
      <span className="signup-text">Already have an account? </span>
        <button onClick={() => navigate("/login")} className="back-to-login">
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default SignUp;
