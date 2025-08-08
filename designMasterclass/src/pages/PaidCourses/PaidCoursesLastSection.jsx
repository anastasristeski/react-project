import CoursesCard from "./CoursesCard";
import { useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";

export default function PaidCoursesLastSection() {
  const [courses, setCourses] = useState([]);

  const fetchCourses=async ()=>{
      try{
        const response = await axiosClient.get("/courses")
        if(response.status === 200){
          setCourses(response.data);
        }
      }catch(error){
        console.error(error);
      }
  }
  useEffect(() => {
      fetchCourses();
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
