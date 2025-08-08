import navBarLogo from "../assets/navbar-header-logo.png";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "./context/AuthContext";
import { useContext } from "react";
import axiosClient from "../api/axiosClient";
export default function Footer() {
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogOut(){
    axiosClient.post('/users/logout', {}).finally(() => {
    localStorage.clear();
    navigate('/login');
    setIsLoggedIn(false);
  })}
  return (
    <footer className="footer">
<img id="footerLogo" src={navBarLogo}/>
      <ul className="footer-right">
        <li><Link to="quizzes" style={{color:'inherit'}}>Quizzes</Link></li>
        <li><Link to="paid-courses" style={{color:'inherit'}}>Paid Courses</Link></li>
        <li><Link to="profile" style={{color:'inherit'}}>Profile</Link></li>
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
        )}      </ul>
    </footer>
  );
}
