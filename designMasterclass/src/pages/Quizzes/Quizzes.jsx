import QuizzesSection from "./QuizzesSection";

import { useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";
import QuizCard from "./QuizCard";

export default function Quizzes() {
  const [quizzes, setQuizzes] = useState([]);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

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
    fetchQuizzes();
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 200);
    return () => clearTimeout(handler);
  }, [query]);

  const filteredQuizzes = quizzes.filter((quiz) =>
    quiz.title.toLowerCase().includes(query.toLocaleLowerCase())
  );

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
          {filteredQuizzes.map((quiz, index) => (
            <QuizCard key={index} {...quiz} isSaved={true} />
          ))}
        </div>
      </div>
    </main>
  );
}
