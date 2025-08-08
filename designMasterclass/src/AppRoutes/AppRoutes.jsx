import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from ".././pages/HomePage/HomePage";
import PaidCourses from ".././pages/PaidCourses/PaidCourses";
import Quizzes from ".././pages/Quizzes/Quizzes";
import RootLayout from ".././pages/Layout/RootLayout";
import LogInMain from ".././pages/LogInPage/LogInMain";
import SignUpMain from ".././pages/SignUpPage/SignUpMain";
import Profile from ".././pages/Profile/Profile";

export default function AppRoutes(){
    return (
         <Router>
      <Routes>
        <Route path="/login" element={<LogInMain />} />
        <Route path="/sign-up" element={<SignUpMain />} />
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