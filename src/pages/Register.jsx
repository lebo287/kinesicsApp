import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';


const Register = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  let navigate = useNavigate();

  const handleRegister = () => {

    if (!user.username || !user.password) {
      alert("Please enter your");
      return;
    } 
    else if (user.password){

      axios.post("https://sign-translate.herokuapp.com/auth/signup", user).then(respond => {
            
        }).catch(err => {
           
        })

    }

    // login logic goes here
    navigate("/home");
  };

  return (
    <div className="center-layout">
      <div className="auth-card animate__animated animate__fadeInDown">
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
        <button className="btn btn-primary btn-lg animate__animated animate__fadeInDown animate__slower" onClick={handleRegister}>
          REGISTER
        </button>
        <Link to="/" className="auth-link">
          Do you have an account? Sign In
        </Link>
      </div>
    </div>
  );
};

export default Register;
