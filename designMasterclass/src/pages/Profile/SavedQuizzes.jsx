import { useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";
import QuizCard from "../Quizzes/QuizCard";

export default function SavedQuizzes() {
  const [quizzes, setSavedQuizzes] = useState([]);
  const fetchSavedQuizzes = async () => {
    try {
      const response = await axiosClient.get(`/quizzes/saved-quizzes`);

      if (response.status === 200) {
        setSavedQuizzes(response.data);
      }
    } catch (error) {
      console.error("Failed to fetch saved quizzes", error);
    }
  };
  useEffect(() => {
    fetchSavedQuizzes();
  }, []);
const handleRemoveQuiz = (id) =>{
  setSavedQuizzes((prevState)=>prevState.filter((quiz)=> quiz.id !== id));
}
  return (
    <div className="last-section-main-div">
      <div className="card-wrapper-main-div">
        {quizzes.map((quiz, index) => (
          <QuizCard key={index} {...quiz} onRemove = {handleRemoveQuiz} isSaved ={false} />
        ))}
      </div>
    </div>
  );
}
