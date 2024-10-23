import React from 'react';

const Login: React.FC = () => {
  return (
    <div className="page">
      <h1 className="page-title">Sign Up</h1>
      <div className="page-content">
        <form>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Phone No." />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <div>
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">I agree to the terms and services</label>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
