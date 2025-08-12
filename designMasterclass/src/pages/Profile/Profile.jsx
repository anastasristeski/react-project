import SavedCourses from "./SavedCourses";
import SavedQuizzes from "./SavedQuizzes";

export default function Profile() {
  const data = JSON.parse(localStorage.getItem("designMasterclass_user"));


  return (
    <main className="profile-main-container">
      <div className="profile-info">
        <span>First Name: {data.name}</span>
        <span>Last Name: {data.lastname}</span>
        <span>Username: {data.username}</span>
        <span>Email: {data.email}</span>
      </div>
      <h1 className="saved-courses-title">Saved Courses</h1>
      <SavedCourses />
      <h1 className="saved-courses-title">Saved Quizzes</h1>
      <SavedQuizzes />
    </main>
  );
}
