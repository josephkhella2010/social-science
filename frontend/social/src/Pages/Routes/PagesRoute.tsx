import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../Home/HomePage";
import LessonPage from "../LessonPage/LessonPage";
import NavigationContainer from "../Navigation/NavigationContainer";

export default function PagesRoute() {
  return (
    <div>
      <Router>
        <NavigationContainer />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lesson/:id" element={<LessonPage />} />
        </Routes>
      </Router>
    </div>
  );
}
