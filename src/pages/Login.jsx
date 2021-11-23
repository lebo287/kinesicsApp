import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Alert from "../components/Alert";
import Layout from "../components/Layout";

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

    if (!user.username|| !user.password) {

      // set a specific error from the server 🤷🏻‍♂️
      setAlertProps({
        isOpen: true,
        header: "Error",
        message: "Email and Password are required",
        isError: true,
      });

      return;
    }else if(user.username && user.password){
  
      axios.post("https://sign-translate.herokuapp.com/auth/signin", user).then(respond => {
       
        setAlertProps({
          isOpen: true,
          header: "Error",
          message: "Email and Password are required",
          isError: true,
        });
  
        navigate("/home");
       
          
        return;
      }).catch(err => {

        setAlertProps({
          isOpen: true,
          header: "Error",
          message: "Email and Password are required",
          isError: true,
        });
         
      })
      return;
    }

    // login logic goes here

    // route to home
    
  };

  return (
    < Layout>
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
            onClick={handleLogin}
          >
            LOGIN
          </button>
          <Link to="/register" className="auth-link">
            Don't have an account? Sign Up
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
