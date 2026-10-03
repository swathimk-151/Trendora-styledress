import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }

    alert("Login successful!");
    navigate("/");
  };

  return (
    <div className="auth-page">

      <div className="auth-container">
        <div className="auth-image login-image">
          <div className="auth-image-overlay">
            <div className="auth-brand">
              <h1>Trend<span>Ora</span></h1>
              <p>STYLE THAT SPEAKS FOR YOU.</p>
            </div>
          </div>
        </div>
        <div className="auth-form-section">

          <div className="auth-form-box">

            <p className="auth-small-title">WELCOME BACK</p>

            <h2>LOGIN TO <span>TRENDORA</span></h2>

            <p className="auth-description">
              Sign in to continue your fashion journey with us.
            </p>

            <form onSubmit={handleLogin}>

              <div className="input-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="input-group">
                <label>Password</label>

                <div className="password-box">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <button
                    type="button"
                    className="show-password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "HIDE" : "SHOW"}
                  </button>
                </div>
              </div>

              <div className="login-options">

                <label className="remember-me">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>

                <a href="#forgot">Forgot Password?</a>

              </div>

              <button type="submit" className="auth-button">
                LOGIN
              </button>

            </form>

            <div className="auth-divider">
              <span>OR</span>
            </div>

            <p className="account-text">
              Don't have an account?
              <Link to="/signup"> Create Account</Link>
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;