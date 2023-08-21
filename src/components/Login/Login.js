import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/header-logo.png";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <Link to="/">
        <img className="header-logo" src={Logo} alt="header logo" />
      </Link>
      <div className="login-container">
        <h1>Sign in</h1>
        <form onSubmit={handleSubmit}>
          <h5>Email</h5>
          <input
            type="email"
            value={email || ""}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password || ""}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-sign__in_btn" type="submit">
            Sign in
          </button>
          <p>
            By Continuing, you agree to Amazon's Fake Clone Conditions of use
            and privacy Notice.
          </p>
          <button className="login-register__btn">
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
