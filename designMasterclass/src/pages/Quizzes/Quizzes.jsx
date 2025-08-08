import SearchBar from "../../components/SearchBar/SearchBar";

import QuizzesSection from "./QuizzesSection";
import QuizzesLastSection from "./QuizzesLastSection";

export default function Quizzes() {
  return (
    <main className="paid-courses-main">
      <SearchBar placeHolder="Search quiz..." />
      <QuizzesSection pageTitle="Quizzes" />
      <QuizzesLastSection />
    </main>
  );
}
