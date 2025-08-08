import { useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";
import QuizCard from "../Quizzes/QuizCard";

export default function SavedQuizzes() {
  const [quizzes, setSavedQuizzes] = useState([]);
  const fetchSavedQuizzes = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const response = await axiosClient.get(
        `/quizzes/${userId}/saved-quizzes`
      );
       console.log(response.data);
      if (response.status === 200) {
        console.log(response.data);
        setSavedQuizzes(response.data);
      }
    } catch (error) {
      console.error("Failed to fetch saved quizzes", error);
    }
  };
  useEffect(() => {
    fetchSavedQuizzes();
  }, []);

  return (
    <div className="last-section-main-div">
      <div className="card-wrapper-main-div">
        {quizzes.map((quiz, index) => (
          <QuizCard key={index} {...quiz} />
        ))}
      </div>
    </div>
  );
}
