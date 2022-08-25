import "./App.css";
import HomePage from "./home-page/HomePage";
import RulesPage from "./rules-page/RulesPage";
import Question from "./question-page/Question";
import LoginPage from "./login-page/LoginPage";
import SignupPage from "./signup-page/SignupPage";
import ScorePage from "./score-page/ScorePage";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./common/PrivateRoute";
import PageNotFound from "./page-not-found/PageNotFound";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/rules"
          element={
            <PrivateRoute>
              <RulesPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/question"
          element={
            <PrivateRoute>
              <Question />
            </PrivateRoute>
          }
        />
        <Route
          path="/score"
          element={
            <PrivateRoute>
              <ScorePage />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
