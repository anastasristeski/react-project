import { useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";
import CoursesCard from "../PaidCourses/CoursesCard";

export default function SavedCourses() {
  const [courses, setSavedCourses] = useState([]);
  const fetchSavedCourses = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const response = await axiosClient.get(
        `/courses/${userId}/saved-courses`
      );
       console.log(response.data);
      if (response.status === 200) {
        console.log(response.data);
        setSavedCourses(response.data);
      }
    } catch (error) {
      console.error("Failed to fetch saved courses", error);
    }
  };
  useEffect(() => {
    fetchSavedCourses();
  }, []);

  return (
    <div className="last-section-main-div">
      <div className="card-wrapper-main-div">
        {courses.map((course, index) => (
          <CoursesCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
}
