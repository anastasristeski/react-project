import { useEffect, useState } from "react";
import axiosClient from "../../../api/axiosClient";
import CoursesCard from "../../../pages/PaidCourses/CoursesCard";
import QuizCard from "../../../pages/Quizzes/QuizCard";

export default function LearnToDesignBanner() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [selected, setSelected] = useState("Courses");

  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => setDropdown(!dropdown);

  const selectOption = (option) => {
    setSelected(option);
    setDropdown(false);
  };


  const fetchData = async (type) => {

    try {
      const endpoint = type === "Courses" ? "/courses": "/quizzes";
      const response = await axiosClient.get(endpoint);
      if (response.status === 200) {
        setItems(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData(selected);
  }, [selected]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 200);
    return () => clearTimeout(handler);
  }, [query]);

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(query.toLocaleLowerCase())
  );
  const otherOption = selected === "Courses" ? "Quizzes" : "Courses";
  return (
    <div className="learn-to-design-banner">
        <h1 className="learn-to-design-title">Learn to Design</h1>
    <div className="search">
      <div className={query && "search-result-grid-backboard"}>
        <div className="search-input">
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button onClick={toggleDropdown} className="courses-button">
            {selected}
            <span className="arrow-down">&#9662;</span>
          </button>
          {dropdown && (
            <ul className="dropdown-menu">
              <li onClick={() => selectOption(otherOption)}>{otherOption}</li>
            </ul>
          )}
        </div>
        {selected === "Courses" ? query && (
          <ul className="search-results-grid">
            {filteredItems.map((item, index) => (
              <CoursesCard
                key={index}
                {...item}
                isSaved={true}
                variant="search"
              />
            ))}
          </ul>
        ):(query &&(<ul className="search-results-grid">
            {filteredItems.map((item, index) => (
              <QuizCard
                key={index}
                {...item}
                isSaved={true}
                variant="search"
              />
            ))}
          </ul>))}
      </div>
    </div>
    </div>
  );
}
