import { useState } from "react";
import { ADOBE_PHOTOSHOP_COURSES, ILLUSTRATOR_COURSES } from "../../data/adobePhotoshopCourses";
export default function Tutorials() {
  const [menuOpen, setMenuOpen] = useState(false);
  function handleClick() {
    setMenuOpen(!menuOpen);
  }
  const classElement = "tutorials-li-elements";
  return (

    <li id="tutorials-item" onClick={handleClick}>
      Tutorials &#9662;
      {menuOpen &&(
        <menu className="tutorials-content">
        <ul className="tutorials-left">
            <li className="tutorials-title">Adobe Photoshop</li>
            {ADOBE_PHOTOSHOP_COURSES.map((course,index)=>(
                    <li key={index} className={classElement}>{course}</li>
            ))}
        </ul>
         <ul className="tutorials-right">
            <li className="tutorials-title">Adobe Illustrator</li>
            {ILLUSTRATOR_COURSES.map((course,index)=>(
                    <li key={index} className={classElement}>{course}</li>
            ))}
        </ul>
        </menu>
      )}
    </li>

  );
}
