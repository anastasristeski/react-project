
import SearchBar from "../../components/SearchBar/SearchBar";
import PaidCoursesLastSection from "./PaidCoursesLastSection";
import PaidCoursesSection from "./PaidCoursesSection";

export default function PaidCourses() {
  return (
    
        <main className="paid-courses-main">
            <SearchBar placeHolder="Search course..."/>
            <PaidCoursesSection pageTitle="Paid Courses"/>
            <PaidCoursesLastSection />
        </main>
    
  );
}
