import QuizzesSection from "./QuizzesSection";

import { useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";
import QuizCard from "./QuizCard";

export default function Quizzes() {
  const [quizzes, setQuizzes] = useState([]);
  const [query, setQuery] = useState("");
  const [pagedQuizzes, setPagedQuizzes] = useState([]);
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10;

  const fetchQuizzesPaged = async (page) => {
    try {
      const response = await axiosClient.get("/quizzes/paged", {
        params: { page, size: itemsPerPage },
      });
      if (response.status === 200) {
        setPagedQuizzes(response.data.data);
        setTotalPages(response.data.totalPages);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchQuizzes = async () => {
    console.log("fetchingQuizzes");
    try {
      const response = await axiosClient.get("/quizzes");

      console.log(response);

      if (response.status === 200) {
        setQuizzes(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if(!query){
      fetchQuizzesPaged(currentPage);
    }

  }, [currentPage,query]);

  useEffect(()=>{
    fetchQuizzes();
  },[]);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
      setCurrentPage(1);
    }, 200);
    return () => clearTimeout(handler);
  }, [query]);

  const displayQuizzes =  debouncedQuery.length > 0 ? quizzes.filter((quiz) =>
    quiz.title.toLowerCase().includes(query.toLocaleLowerCase())
  ):pagedQuizzes;

  return (
    <main className="paid-courses-main">
      <div className="search-bar">
        <input
          type="text"
          placeHolder="Search Quizzes"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      <QuizzesSection pageTitle="Quizzes" />

      <div className="last-section-main-div">
        <div className="card-wrapper-main-div">
          {displayQuizzes.map((quiz, index) => (
            <QuizCard key={index} {...quiz} isSaved={true} />
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
