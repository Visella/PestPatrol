import React from "react";
import "./global.css";

const Login: React.FC = () => {
  return (
    <div className="page-login">
    <h1 className="page-title-login">Sign Up / Login</h1>
    <div className="page-content-login">
      <form>
        <p>Username</p>
        <input type="text" placeholder="Username" required />
        <p>Email</p>
        <input type="email" placeholder="Email" required />
        <p>Phone number</p>
        <input type="text" placeholder="Phone No." required />
        <p>Password</p>
        <input type="password" placeholder="Password" required />
        <p>Confirm Password</p>
        <input type="password" placeholder="Confirm Password" required />
        <div>
          <input type="checkbox" id="terms" required />
          <label htmlFor="terms">I agree to the terms and services</label>
          <button type="submit" className="submit-form">Sign Up</button>
        </div>
        
      </form>
    </div>
    <div className="footer">
        Diagnose. Treat. Grow.
      </div>
  </div>
  );
};

export default Login;
