export default function Search() {
  return (
    <div className="search">
      <input type="text" placeholder="Search" />
      <button className="courses-button">
        Courses<span className="arrow-down">&#9662;</span>
      </button>
    </div>
  );
}
