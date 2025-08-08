import LogIn from "./LogIn";
import logo from "../../assets/login-logo.png";
export default function LogInMain(){
    return (
        <div className="login-main-page">
            <img src = {logo} alt="digitalMasterClassLogo" className="logo-login"></img>
            <LogIn />
        </div>
    );
}