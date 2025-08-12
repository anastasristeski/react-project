import { useEffect, useState } from "react";
import PaidCoursesSection from "./PaidCoursesSection";
import axiosClient from "../../api/axiosClient";
import CoursesCard from "./CoursesCard";

export default function PaidCourses() {
  const [courses, setCourses] = useState([]);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  const fetchCourses = async () => {
    console.log("fetchingcourses");
    try {
      const response = await axiosClient.get("/courses");
      console.log(response);

      if (response.status === 200) {
        setCourses(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 200);
    return () => clearTimeout(handler);
  }, [query]);

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(query.toLocaleLowerCase())
  );
  return (
    <main className="paid-courses-main">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search courses"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      <PaidCoursesSection pageTitle="Paid Courses" />

       <div className="last-section-main-div">
            <div className="card-wrapper-main-div">
              {filteredCourses.map((course, index) => (
                <CoursesCard key={index} {...course}isSaved ={true}/>
              ))}
            </div>
          </div>
    </main>
  );
}
