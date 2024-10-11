import React from "react";
import "./LoginPage.css";
import LoginFooter from "../Footer/LoginFooter";
import Header from "../Header/Heder"

const SignIn = () => {
  return (
    <>
      <Header />
      <div className="signin-container">
        <div className="signin-card">
          <h2>Sign in</h2>
          <form>
            <div className="input-group">
              <label htmlFor="email">Business email:</label>
              <input type="email" id="email" placeholder="Your business email" required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" placeholder="Your password" required />
            </div>
            <div className="options">
              <label>
                <input type="checkbox" /> Keep me signed in
              </label>
              <a href="/">Forgot password?</a>
            </div>
            <button type="submit" className="signin-button">Sign in</button>
          </form>
          <div className="divider">or</div>
          <button className="linkedin-button">
            <img src="linkedin-icon.png" alt="LinkedIn" /> Sign in with LinkedIn
          </button>
          <div className="create-account">
            <a href="/">Create an account</a>
          </div>
        </div>
        {/* Move this inside the signin-container to ensure it stays below */}
        <p className="last-content">© 2024 InginiB2B. All Rights Reserved.</p>
      </div>
      <LoginFooter />
    </>
  );
};

export default SignIn;
