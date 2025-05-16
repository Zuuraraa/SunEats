import React from 'react';
import './SignUp.css';

const SignUp = () => {
  return (
    <div className="sign-up-container">
      <h2 className="sign-up-title">Sign Up</h2>
      <p className="sign-up-subtext">
        Already a member? <a href="#" className="login-link">Log In</a>
      </p>
      <form className="sign-up-form">
        <input type="email" placeholder="Email" className="sign-up-input" />
        <input type="password" placeholder="Password" className="sign-up-input" />
        <button type="submit" className="sign-up-button">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
