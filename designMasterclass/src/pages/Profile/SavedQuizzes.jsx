import { useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";
import QuizCard from "../Quizzes/QuizCard";
import Modal from "../../components/Modal/DeleteConfirmation";

export default function SavedQuizzes() {
  const [quizzes, setSavedQuizzes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [quizToRemove, setQuizToRemove] = useState(null);

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
  setQuizToRemove(id);
  setShowModal(true);
};
const confirmRemove =()=>{
     axiosClient.delete(`/quizzes/user/delete-quiz/${quizToRemove}`, {});
    setSavedQuizzes((prevState)=>prevState.filter((quiz)=> quiz.id !== quizToRemove));
  setShowModal(false);
  setQuizToRemove(null);
  };
  const cancelRemove =() =>{
    setShowModal(false);
    setQuizToRemove(null);
  }

  return (
    <div className="last-section-main-div">
      <div className="card-wrapper-main-div">
        {quizzes.map((quiz, index) => (
          <QuizCard key={index} {...quiz} onRemove = {handleRemoveQuiz} isSaved ={false} variant="savedQuizzes" />
        ))}
      </div>
      {showModal &&(<Modal onConfirm={confirmRemove} onCancel={cancelRemove}/>)}
    </div>
  );
}
