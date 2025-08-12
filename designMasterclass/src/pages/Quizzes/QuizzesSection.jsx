import { useContext } from "react";
import AuthContext from "../../components/context/AuthContext";
import { Link } from "react-router-dom";

export default function QuizzesSection({ pageTitle }) {
const {isLoggedIn} = useContext(AuthContext);
const pathToSaved = isLoggedIn ? "/profile" : undefined;

  return (
    <div className="main-section-second-div">
      
        <h1 className="page-title-prop">{pageTitle}</h1>
        <div className="buttons-wrapper">
        <div className="buttons-row">
          <button className="photoshop-button">Photoshop</button>
          <button className="illustrator-button">Illustrator</button>
       </div>
     {isLoggedIn && (<Link to={pathToSaved}><div className="paid-courses-right-div"><button>Saved</button></div></Link>)}
    </div>
     </div>
  );
}
 