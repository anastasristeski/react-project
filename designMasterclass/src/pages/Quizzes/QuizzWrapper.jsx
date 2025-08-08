

import {useState, useEffect} from 'react';
import QuizCard from "./QuizCard";
export default function QuizCardWrapper(){
    const [quizzes, setQuizzes] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:8080/api/quizzes")
        .then((res)=>res.json())
        .then((data)=>setQuizzes(data));
    },[]);
    return (
         <div className="card-wrapper-main-div">
        
             {quizzes.map((course,index)=>
             <QuizCard key={index}{...course}/>
             )}
         </div>
    );
}