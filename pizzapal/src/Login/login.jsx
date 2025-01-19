import React, { useState } from 'react';
import './login.css'; // Import the CSS file for styling

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleFormSwitch = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="login-container">
      

      <section className="login-form-section">
        <div className="login-header">
          <h1>{isSignUp ? 'Create an Account' : 'Sign In'}</h1>
        </div>

        <div className="login-form">
          <form>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter your password" required />
            </div>

            {isSignUp && (
              <div className="input-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" placeholder="Confirm your password" required />
              </div>
            )}

            <button type="submit" className="submit-btn">
              {isSignUp ? 'Register' : 'Sign In'}
            </button>
          </form>

          <div className="options">
            <button onClick={handleFormSwitch} className="toggle-btn">
              {isSignUp ? 'Already have an account? Sign In' : 'New here? Register'}
            </button>
            <button className="forgot-password-btn">Forgot Password?</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
