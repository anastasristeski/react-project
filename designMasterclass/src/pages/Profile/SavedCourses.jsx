import { useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";
import CoursesCard from "../PaidCourses/CoursesCard";
import Modal from "../../components/Modal/DeleteConfirmation";

export default function SavedCourses() {
  const [courses, setSavedCourses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [courseToRemove, setCourseToRemove] = useState(null);

  const fetchSavedCourses = async () => {
    try {
      const response = await axiosClient.get(`/courses/saved-courses`);

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
  setCourseToRemove(id);
  setShowModal(true);
};
const confirmRemove =  ()=>{
  axiosClient.delete(`/courses/user/delete-course/${courseToRemove}`, {});
  setSavedCourses((prev)=>prev.filter((course)=>course.id !== courseToRemove));

  setShowModal(false);
  setCourseToRemove(null);

};
const cancelRemove = () =>{
  setShowModal(false);
  setCourseToRemove(null);
}
  return (
    <div className="last-section-main-div">
      <div className="card-wrapper-main-div">
        {courses.map((course, index) => (
          <CoursesCard key={index} {...course} isSaved = {false} onRemove={()=>handleRemoveCourse(course.id)} variant="savedCourses"/>
        ))}
      </div>
      {showModal &&(
        <Modal  onConfirm={confirmRemove} onCancel={cancelRemove}/>
      )}
    </div>
  );
}
