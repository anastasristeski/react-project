import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../../api/axiosClient";
import AuthContext from "../../components/context/AuthContext";

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
    console.log(response);
    if (response.status === 200) {
      localStorage.setItem("designMasterclass", response.data.token);
      localStorage.setItem("userId", response.data.userId);

      localStorage.setItem("name", response.data.name);
      localStorage.setItem("lastname", response.data.lastname);
      localStorage.setItem("username", response.data.username);
      localStorage.setItem("email", response.data.email);

      setIsLoggedIn(true);
      navigate("/");
    } else {
      console.log("failed");
    }
  };
  return (
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
  );
}
