import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // State untuk popup
  const [popup, setPopup] = useState({
    show: false,
    type: "",      // 'success' atau 'error'
    message: "",   // pesan yang ditampilkan
  });

  // Effect untuk mengatur timer popup
  useEffect(() => { 
    if (popup.show) {
      const timer = setTimeout(() => setPopup({ show: false, type: "", message: "" }), 3000);
      return () => clearTimeout(timer);
    }
  }, [popup]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
        if (!response.ok) throw new Error(data.message || "Login failed");

      // Set popup state untuk sukses
      setPopup({
        show: true,
        type: "success",
        message: "Login Success!",
      });
      localStorage.setItem("token", data.token);
      setTimeout(() => {
        navigate("/");
      }, 2000);

    } catch (error) {
      // Set popup state untuk error
        setPopup({
          show: true,
          type: "error",
          message: "Login failed! Please recheck your gmail and password and try again.",
        });      
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Time to Eat!</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          name="email"
          placeholder="Input your email"
          className="login-input"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Input your password"
          className="login-input"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <div className="login-options">
          <a href="/signUp" className="login-link">Create Your Account</a>
        </div>

        <button type="submit" className="login-button">Login</button>
      </form>

      
      {popup.show &&( 
        <div className={`popup ${popup.type}`}>
          <div className="popup-icon">
            {popup.type === "success" ? "✔" : "!"}
          </div>
          <div className="popup-message">{popup.message}</div>
        </div>
       )}

    </div>
  );
};

export default Login;
