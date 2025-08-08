export default function QuizzesSection({ pageTitle }) {
  return (
    <div className="main-section-second-div">
      
        <h1 className="page-title-prop">{pageTitle}</h1>
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
 