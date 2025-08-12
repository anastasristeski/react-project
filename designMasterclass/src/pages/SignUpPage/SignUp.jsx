import { useNavigate } from "react-router-dom";
import InputField from "./InputField";
import axiosClient from "../../api/axiosClient";
import logo from "../../assets/login-logo.png";


export default function SignUp() {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    const response =  await axiosClient.post('/users/signup',
      data);   

    if(response.status >= 200 && response.status <300){
      console.log('success');
      navigate('/login');
    }else{
      console.log("failed");
    }
  };
  return (
     <div className="signup-main-page">
            <img src = {logo} alt="digitalMasterClassLogo" className="logo-login"></img>
    <div className="signup-content">
      <h1 className="signup-title">Sign up</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <InputField
          labelText={"First Name"}
          name="name"
          placeHolderText={"Enter first name"}
        />
        <InputField
          labelText={"Last Name"}
          name="lastname"
          placeHolderText={"Enter last name"}
        />
        <InputField
          labelText={"Email"}
          name="email"
          placeHolderText={"Enter email"}
          isEmail={true}
        />
        <InputField
          labelText={"Username"}
          placeHolderText={"Enter username"}
          name="username"
        />
        <InputField
          labelText={"Password"}
          placeHolderText={"Enter password"}
          name="password"
        />
        <button className="signup-button" type="submit">
          Sign Up
        </button>
      </form>
    </div>
    </div>
  );
}
