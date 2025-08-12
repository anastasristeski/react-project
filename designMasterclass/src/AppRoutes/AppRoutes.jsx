import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from ".././pages/HomePage/HomePage";
import PaidCourses from ".././pages/PaidCourses/PaidCourses";
import Quizzes from ".././pages/Quizzes/Quizzes";
import RootLayout from ".././pages/Layout/RootLayout";
import Profile from ".././pages/Profile/Profile";
import LogIn from "../pages/LogInPage/LogIn";
import SignUp from "../pages/SignUpPage/SignUp";

export default function AppRoutes(){
    return (
         <Router>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="paid-courses" element={<PaidCourses />} />
          <Route path="quizzes" element={<Quizzes />} />
          <Route path="profile" element ={<Profile />}/>
        </Route>
      </Routes>
    </Router>
    );
}