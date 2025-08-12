import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../../api/axiosClient";
import AuthContext from "../../components/context/AuthContext";
import logo from "../../assets/login-logo.png";


export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const loginData = { email, password };

    const response = await axiosClient.post("/users/login", {
      email: loginData.email,
      password: loginData.password,
    });

    console.log('response.data:' ,response.data);
    if (response.status >=200 && response.status <300) {
      localStorage.setItem("designMasterclassToken", response.data.token);
      const userData = 
        {
          name: response.data.name,
          lastname: response.data.lastname,
          username: response.data.username,
          email: response.data.email,
        };
        console.log(userData);
      localStorage.setItem("designMasterclass_user", JSON.stringify(userData));

      setIsLoggedIn(true);
      navigate("/");
    } else {
      console.log("failed");
    }
  };
  return (
      <div className="login-main-page">
                  <img src = {logo} alt="digitalMasterClassLogo" className="logo-login"></img>
    <div className="log-in-content">
      <h1 className="log-in-title">Log In</h1>

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="email-div">
          <label className="form-label-email">Email</label>
          <input
            className="email-input"
            type="email"
            value={email}
            placeholder="Enter email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <label className="second-label">
            Need an account?<Link to="/sign-up">Sign Up</Link>
          </label>
        </div>
        <div className="password-div">
          <label className="form-label-password">Password</label>
          <input
            className="password-input"
            id="passwordInput"
            type="password"
            value={password}
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button className="login-button">Log In</button>
      </form>
    </div>
    </div>
  );
}
