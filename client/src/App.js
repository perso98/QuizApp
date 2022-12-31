import WelcomePage from "./pages/WelcomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Quiz from "./pages/QuizPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
