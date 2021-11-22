import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../components/Alert";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  // alert props, use this to open and close the alert
  const [alertProps, setAlertProps] = useState({
    isOpen: false,
    header: "",
    message: "",
    isError: false,
  });


  // login
  const handleLogin = () => {
    if (!user.email || !user.password) {

      // set a specific error from the server 🤷🏻‍♂️
      setAlertProps({
        isOpen: true,
        header: "Error",
        message: "Email and Password are required",
        isError: true,
      });

      return;
    }

    // login logic goes here

    // route to home
    navigate("/home");
  };

  return (
    <>
      <Alert
        alertProps={alertProps}
        handleCloseAlert={() => setAlertProps({ isOpen: false })}
      />

      <div className="center-layout">
        <div className="auth-card animate__animated animate__fadeInUp animate__faster">
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
          <button
            className="btn btn-primary btn-lg animate__animated animate__fadeInDown"
            onClick={handleLogin}
          >
            LOGIN
          </button>
          <Link to="/register" className="auth-link">
            Don't have an account? Sign Up
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
