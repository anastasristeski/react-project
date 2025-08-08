import { useState } from "react";

import axiosClient from "../../api/axiosClient";

export default function CoursesCard({ ...props }) {
  const [savedButton, setSavedButton] = useState(true);
  function handleSaveButton() {
    const userId = localStorage.getItem("userId");
    const courseId = props.id;
    if (savedButton) {
      axiosClient.post(`/users/user-items/courses/${userId}/${courseId}`, {});
    } else {
      axiosClient.delete(`/users/user-items/courses/${userId}/${courseId}`, {});
    }

    setSavedButton(!savedButton);
  }
  const saveIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
      width="30"
      height="30"
      fill="currentColor"
    >
      <path d="M128 128C128 92.7 156.7 64 192 64L448 64C483.3 64 512 92.7 512 128L512 545.1C512 570.7 483.5 585.9 462.2 571.7L320 476.8L177.8 571.7C156.5 585.9 128 570.6 128 545.1L128 128zM192 112C183.2 112 176 119.2 176 128L176 515.2L293.4 437C309.5 426.3 330.5 426.3 346.6 437L464 515.2L464 128C464 119.2 456.8 112 448 112L192 112z" />
    </svg>
  );
  const saveFilledIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
      width="30"
      height="30"
      fill="currentColor"
    >
      <path d="M192 64C156.7 64 128 92.7 128 128L128 544C128 555.5 134.2 566.2 144.2 571.8C154.2 577.4 166.5 577.3 176.4 571.4L320 485.3L463.5 571.4C473.4 577.3 485.7 577.5 495.7 571.8C505.7 566.1 512 555.5 512 544L512 128C512 92.7 483.3 64 448 64L192 64z" />
    </svg>
  );
  return (
    <div className="courses-card-main-div">
      <img className="product-image" src={props.image} alt={props.id} />
      <div className="info-row">
        <span className="price">{props.price}</span>
        <span className="length">{props.length}</span>
      </div>
      <h2 className="course-card-title">{props.title}</h2>
      <div className="last-card-row">
        <span className="author">{props.author}</span>
        <div className="card-buttons">
          <button className="watch-button">Watch</button>
          <button onClick={handleSaveButton} className="save-button">
            {savedButton ? saveIcon : saveFilledIcon}
          </button>
        </div>
      </div>
    </div>
  );
}
