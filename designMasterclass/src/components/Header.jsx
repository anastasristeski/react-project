import { Link, useNavigate } from "react-router-dom";
import navBarLogo from "../assets/navbar-header-logo.png";
import Tutorials from "./Tutorials/Tutorials";
import { useContext } from "react";
import AuthContext from "./context/AuthContext";
import axiosClient from "../api/axiosClient";

export default function NavBarHeader({ logo }) {
  const navigate = useNavigate();
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);

  console.log(isLoggedIn, 'loggedin');
  

  function handleLogOut(){

    axiosClient.post('/users/logout', {});
    localStorage.removeItem("designMasterclass");
    navigate('/login');
    setIsLoggedIn(false);
  }
  
  return (
    <header
      className="navbar"
      style={{ width: "100%", height: "70px", backgroundSize: "cover" }}
    >
      <ul className="navbar-left">
        <Tutorials />
        <li id="quizzes-item">
          <Link to="quizzes" style={{ color: "inherit" }}>
            Quizzes
          </Link>
        </li>
        {logo && <li>{logo}</li>}
      </ul>
      <div className="navbarLogo">
        <img src={navBarLogo} className="navbar-img" />
      </div>
      <ul className="navbar-right">
        <li id="paid-courses-item">
          <Link to="paid-courses" style={{ color: "inherit" }}>
            Paid Courses
          </Link>
        </li>
       {isLoggedIn &&<li id="profile-item">
          <Link to="profile" style={{ color: "inherit" }}>
            Profile
          </Link>
        </li>}
        {isLoggedIn ? (
          <li id="log-in-item">
            <Link  onClick ={handleLogOut} to="login" style={{ color: "inherit" }}>
              Log Out
            </Link>
          </li>
        ) : (
          <li id="log-in-item">
              <Link  to="login" style={{ color: "inherit" }}>
                Log In
              </Link>
            
          </li>
        )}
      </ul>
    </header>
  );
}
