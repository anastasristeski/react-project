import { useEffect, useState } from "react";
import PaidCoursesSection from "./PaidCoursesSection";
import axiosClient from "../../api/axiosClient";
import CoursesCard from "./CoursesCard";

export default function PaidCourses() {
  const [courses, setCourses] = useState([]);
  const [pagedCourses, setPagedCourses]=useState([]);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages]= useState(1);
  const itemsPerPage = 10;
  

  const fetchCoursesPaged = async (page) => {
    console.log("fetchingcourses");
    try {
      const response = await axiosClient.get("/courses/paged",{params: {page, size: itemsPerPage}});
      console.log(response);

      if (response.status === 200) {
        setPagedCourses(response.data.data);
        setTotalPages(response.data.totalPages);
      }
    } catch (error) {
      console.error(error);
    }
  };


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

  useEffect (()=>{
    if(!query){
      fetchCoursesPaged(currentPage);
    }
  },[currentPage, query]);

    useEffect(() => {
    fetchCourses();
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
      setCurrentPage(1);
    }, 200);
    return () => clearTimeout(handler);
  }, [query]);

  const displayCourses =
    debouncedQuery.length>0 ? 
  courses.filter((course) =>
    course.title.toLowerCase().includes(query.toLocaleLowerCase())
  ): pagedCourses;

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
              {displayCourses.map((course, index) => (
                <CoursesCard key={index} {...course}isSaved ={true} variant="allCourses"/>
              ))}
            </div>
            <div className="pagination">
                {[...Array(totalPages)].map((_,i)=>(
                  <button  key={i}
                    className={currentPage === i+1?"pageButton-active": "pageButton"}
                    onClick={()=>setCurrentPage(i+1)}>
                      {i+1}
                  </button>
                ))}
            </div>
          </div>
    </main>
  );
}
