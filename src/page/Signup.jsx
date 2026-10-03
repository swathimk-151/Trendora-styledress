import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  // eslint-disable-next-line no-unused-vars
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please fill in all the fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert("Account created successfully!");

    navigate("/login");
  };

  return (
    <div className="auth-page">

      <div className="auth-container signup-container">
        <div className="auth-form-section">

          <div className="auth-form-box signup-form-box">

            <p className="auth-small-title">JOIN TRENDORA</p>

            <h2>CREATE YOUR <span>ACCOUNT</span></h2>

            <p className="auth-description">
              Create an account and discover fashion made for you.
            </p>

            <form onSubmit={handleSignup}>

              <div className="input-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <label>Password</label>

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <label>Confirm Password</label>

                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>

              <label className="terms-check">
                <input type="checkbox" required />
                <span>
                  I agree to the Terms & Conditions and Privacy Policy.
                </span>
              </label>

              <button type="submit" className="auth-button">
                CREATE ACCOUNT
              </button>

            </form>

            <div className="auth-divider">
              <span>OR</span>
            </div>

            <p className="account-text">
              Already have an account?
              <Link to="/login"> Login</Link>
            </p>

          </div>

        </div>

        {/* Right Side */}
        <div className="auth-image signup-image">

          <div className="auth-image-overlay">

            <div className="signup-message">

              <p>YOUR STYLE.</p>

              <h1>
                YOUR
                <span> STORY.</span>
              </h1>

              <div className="signup-line"></div>

              <p className="signup-description">
                Create your TrendOra account and make every
                outfit a statement.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Signup;