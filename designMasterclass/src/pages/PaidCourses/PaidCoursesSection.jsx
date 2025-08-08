export default function PaidCoursesSection({ pageTitle }) {

    const url = 'quizzes';
  return (
    <div className="main-section-second-div">
      
        <h1 className={url==="courses" ? ("courses-title page-title-prop") : ("quizzes-title page-title-prop")}>{pageTitle}</h1>
        <div className="buttons-wrapper">
        <div className="buttons-row">
          <button className="photoshop-button">Photoshop</button>
          <button className="illustrator-button">Illustrator</button>
       </div>
      
      <div className="paid-courses-right-div"><button>Saved</button></div>
    </div>
     </div>
  );
}
 