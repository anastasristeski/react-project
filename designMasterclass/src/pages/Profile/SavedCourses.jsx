import { useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";
import CoursesCard from "../PaidCourses/CoursesCard";

export default function SavedCourses() {
  const [courses, setSavedCourses] = useState([]);

  const fetchSavedCourses = async () => {
    try {
      const response = await axiosClient.get(`/courses/saved-courses`, {});

      if (response.status === 200) {
        setSavedCourses(response.data);
      }
    } catch (error) {
      console.error("Failed to fetch saved courses", error);
    }
  };
  useEffect(() => {
    fetchSavedCourses();
  }, []);
const handleRemoveCourse = (id) =>{
  setSavedCourses((prevState)=>prevState.filter((course)=> course.id !== id));
}
  return (
    <div className="last-section-main-div">
      <div className="card-wrapper-main-div">
        {courses.map((course, index) => (
          <CoursesCard key={index} {...course} isSaved = {false} onRemove={handleRemoveCourse}/>
        ))}
      </div>
    </div>
  );
}
