import "./App.css";
import HomePage from "./home-page/HomePage";
import RulesPage from "./rules-page/RulesPage";
import Question from "./question-page/Question";
import LoginPage from "./login-page/LoginPage";
import SignupPage from "./signup-page/SignupPage";
import ScorePage from "./score-page/ScorePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rules" element={<RulesPage />} />
        <Route path="/question" element={<Question />} />
        <Route path="/score" element={<ScorePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
