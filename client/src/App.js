import WelcomePage from "./pages/WelcomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useState, useEffect } from "react";
import Summary from "./pages/Summary";
import ProtectedRoute from "./security/ProtectedRoute";
import LaderBoard from "./pages/Laderboard";
import QuizPage from "./pages/QuizPage";
import Admin from "./pages/Admin";

function App() {
  useEffect(() => {
    setUsername(localStorage.getItem("username"));
  }, []);
  const [points, setPoints] = useState(0);
  const [username, setUsername] = useState("");
  const [questionNumber, setQuestionNumber] = useState(1);
  const [typeOfQuiz, setTypeOfQuiz] = useState("");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <WelcomePage
                typeOfQuiz={typeOfQuiz}
                username={username}
                setTypeOfQuiz={setTypeOfQuiz}
                setUsername={setUsername}
              />
            }
          />
          <Route path="/admin" element={<Admin />} />
          <Route path="/laderboard" element={<LaderBoard />} />
          <Route element={<ProtectedRoute />}>
            <Route
              path="/quiz"
              element={
                <QuizPage
                  username={username}
                  points={points}
                  setPoints={setPoints}
                  questionNumber={questionNumber}
                  setQuestionNumber={setQuestionNumber}
                  typeOfQuiz={typeOfQuiz}
                />
              }
            />
            <Route
              path="/summary"
              element={
                <Summary
                  username={username}
                  points={points}
                  questionNumber={questionNumber}
                  setQuestionNumber={setQuestionNumber}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <div style={{ textAlign: "right", marginBottom: "5rem" }}></div>
    </>
  );
}

export default App;
