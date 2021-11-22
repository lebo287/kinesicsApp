import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Alert from "../components/Alert";

const Register = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  let navigate = useNavigate();

  // alert props, use this to open and close the alert
  const [alertProps, setAlertProps] = useState({
    isOpen: false,
    header: "",
    message: "",
    isError: false,
  });

  const handleRegister = () => {
    if (!user.username || !user.password) {
      // set a specific error from the server 🤷🏻‍♂️
      setAlertProps({
        isOpen: true,
        header: "Error",
        message: "Email and Password are required",
        isError: true,
      });

      return;
    } 
    else if (user.password){

      axios.post("https://sign-translate.herokuapp.com/auth/signup", user).then(respond => {
            
        setAlertProps({
          isOpen: true,
          header: "Error",
          message: "Successfully Login",
          isError: true,
        });
        }).catch(err => {
          setAlertProps({
            isOpen: true,
            header: "Error",
            message: err,
            isError: true,
          });
        })

    }

    // login logic goes here
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
          <div className="header">Register</div>

          <input
            type="text"
            placeholder="Email"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <button
            className="btn btn-primary btn-lg animate__animated animate__fadeInDown"
            onClick={handleRegister}
          >
            REGISTER
          </button>
          <Link to="/" className="auth-link">
            Do you have an account? Sign In
          </Link>
        </div>
      </div>
    </>
  );
};

export default Register;
