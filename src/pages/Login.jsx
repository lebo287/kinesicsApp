import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleLogin = () => {
    if (!user.email || !user.password) {
      alert("Please enter your");
      return;
    }

    // login logic goes here
    navigate("/home");
  };

  return (
    <div className="center-layout">
      <div className="auth-card animate__animated animate__fadeInDown">
        <div className="header">Login</div>

        <input
          type="text"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button className="btn btn-primary btn-lg animate__animated animate__fadeInDown animate__slower" onClick={handleLogin}>
          LOGIN
        </button>
        <Link to="/register" className="auth-link">
          Don't have an account? Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
