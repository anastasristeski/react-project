import SavedCourses from "./SavedCourses";
import SavedQuizzes from "./SavedQuizzes";

export default function Profile() {
  const name = localStorage.getItem("name");
  const lastname = localStorage.getItem("lastname");
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");

  return (
    <main className="profile-main-container">
      <div className="profile-info">
        <span>First name: {name}</span>
        <span>Last Name: {lastname}</span>
        <span>Username: {username}</span>
        <span>Email: {email}</span>
      </div>
      <h1 className="saved-courses-title">Saved Courses</h1>
      <SavedCourses />
      <h1 className="saved-courses-title">Saved Quizzes</h1>
      <SavedQuizzes />
    </main>
  );
}
