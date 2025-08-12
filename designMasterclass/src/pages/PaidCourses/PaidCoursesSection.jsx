import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../components/context/AuthContext";

export default function PaidCoursesSection({ pageTitle }) {
  const {isLoggedIn} = useContext(AuthContext);
  const pathToSaved = isLoggedIn ? "/profile" : "/login";

    const url = 'quizzes';
  return (
    <div className="main-section-second-div">
      
        <h1 className={url==="courses" ? ("courses-title page-title-prop") : ("quizzes-title page-title-prop")}>{pageTitle}</h1>
        <div className="buttons-wrapper">
        <div className="buttons-row">
          <button className="photoshop-button">Photoshop</button>
          <button className="illustrator-button">Illustrator</button>
       </div>
      
      {isLoggedIn &&(<Link to={pathToSaved}><div className="paid-courses-right-div"><button>Saved</button></div></Link>)}
    </div>
     </div>
  );
}
 