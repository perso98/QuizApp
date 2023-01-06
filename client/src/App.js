import WelcomePage from "./pages/WelcomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Quiz from "./pages/QuizPage";
import { useState } from "react";
import Summary from "./pages/Summary";
function App() {
  const [points, setPoints] = useState(0);
  const [username, setUsername] = useState("");
  const [questionNumber, setQuestionNumber] = useState(1);
  const [typeOfQuiz, setTypeOfQuiz] = useState("");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage setUsername={setUsername} />} />
          <Route
            path="/quiz"
            element={
              <Quiz
                username={username}
                points={points}
                setPoints={setPoints}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
