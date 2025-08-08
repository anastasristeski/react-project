import logo from "../../assets/login-logo.png";
import SignUp from "./SignUp";

export default function SignUpMain(){
    return (
      <div className="signup-main-page">
            <img src = {logo} alt="digitalMasterClassLogo" className="logo-login"></img>
            <SignUp />
        </div>
    );
}