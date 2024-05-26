import React, { useState, useEffect } from "react";
import axios from "axios";
import Quiz from "../components/Quiz";
import StartQuiz from "../components/StartQuiz";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "../components/Nav";

function QuizPage(props) {
  
  // Stany komponentu
  const [seconds, setSeconds] = useState(0);
  const [answer, setAnswer] = useState();
  const [currentAnswer, setCurrentAnswer] = useState();
  const [start, setStart] = useState(false);
  const [usedQuestions, setUsedQuestions] = useState([]);
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [usedValues, setUsedValues] = useState([]);

  axios.defaults.withCredentials = true;

  // Pobieranie pytań z serwera
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `http://localhost:3001/questions?type=${props.typeOfQuiz}`
      );
      setQuestions(result.data[0]);
      setLoading(false);
    };
    fetchData();
  }, []);

  // Funkcja do losowania nieprawidłowej odpowiedzi
  function getRandomAnswer(q) {
    let index = Math.floor(
      Math.random() * questions[q].incorrect_answers.length
    );
    while (usedValues.includes(index)) {
      index = Math.floor(Math.random() * questions[q].incorrect_answers.length);
    }
    usedValues.push(index);
    return index;
  }

  // Funkcja do losowania pytania
  function getRandomQuestion() {
    let index = Math.floor(Math.random() * questions.length);
    while (usedQuestions.includes(index)) {
      index = Math.floor(Math.random() * questions.length);
    }
    setUsedQuestions([...usedQuestions, index]);
    return index;
  }

  // Stan dla odpowiedzi A,B,C,D
  const [answerA, setAnswerA] = useState();
  const [answerB, setAnswerB] = useState();
  const [answerC, setAnswerC] = useState();
  const [answerD, setAnswerD] = useState();

  // Stan dla aktualnego pytania 
  const [currentQuestion, setQurrentQuestion] = useState();

   // Funkcja rozpoczynająca quiz
  const startQuiz = () => {
    setUsedValues([]);
    setUsedQuestions([]);
    setCurrentAnswer("");
    setAnswer("");
    props.setQuestionNumber(1);
    props.setPoints(0);
    setSeconds(299);
    var q = getRandomQuestion();

    setQurrentQuestion(questions[q].question);
    setAnswer(questions[q].correct_answer);

    // Ustawienie odpowiedzi w losowy sposób
    const correctAnswer = Math.floor(Math.random() * 4) + 1;
    if (correctAnswer === 1) {
      setAnswerA(questions[q].correct_answer);
      setAnswer("A");
      setAnswerB(questions[q].incorrect_answers[getRandomAnswer(q)]);

      setAnswerC(questions[q].incorrect_answers[getRandomAnswer(q)]);

      setAnswerD(questions[q].incorrect_answers[getRandomAnswer(q)]);
    }
    if (correctAnswer === 2) {
      setAnswerB(questions[q].correct_answer);
      setAnswer("B");
      setAnswerA(questions[q].incorrect_answers[getRandomAnswer(q)]);

      setAnswerC(questions[q].incorrect_answers[getRandomAnswer(q)]);

      setAnswerD(questions[q].incorrect_answers[getRandomAnswer(q)]);
    }
    if (correctAnswer === 3) {
      setAnswerC(questions[q].correct_answer);
      setAnswer("C");
      setAnswerB(questions[q].incorrect_answers[getRandomAnswer(q)]);

      setAnswerA(questions[q].incorrect_answers[getRandomAnswer(q)]);

      setAnswerD(questions[q].incorrect_answers[getRandomAnswer(q)]);
    }
    if (correctAnswer === 4) {
      setAnswerD(questions[q].correct_answer);
      setAnswer("D");
      setAnswerB(questions[q].incorrect_answers[getRandomAnswer(q)]);

      setAnswerC(questions[q].incorrect_answers[getRandomAnswer(q)]);

      setAnswerA(questions[q].incorrect_answers[getRandomAnswer(q)]);
    }
    setStart(true);
  };

  // Funkcja kończąca quiz
  const finishButton = () => navigate("/summary");

    // Funkcja obsługująca przycisk "Submit"
  const submitButton = () => {
    setUsedValues([]);

    if (props.questionNumber <= questions.length - 1) {
      if (answer === currentAnswer && start === true) {
        props.setPoints(props.points + 1);
        toast.success("Tak to pomyślna odpowiedź!");
      } else {
        toast.error("Niestety to nie była dobra odpowiedź!");
      }

      setCurrentAnswer("");
      setAnswer("");

      var q = getRandomQuestion();
      setQurrentQuestion(questions[q].question);
      setAnswer(questions[q].correct_answer);

      const correctAnswer = Math.floor(Math.random() * 4) + 1;
      if (correctAnswer === 1) {
        setAnswerA(questions[q].correct_answer);
        setAnswer("A");
        setAnswerB(questions[q].incorrect_answers[getRandomAnswer(q)]);

        setAnswerC(questions[q].incorrect_answers[getRandomAnswer(q)]);

        setAnswerD(questions[q].incorrect_answers[getRandomAnswer(q)]);
      }
      if (correctAnswer === 2) {
        setAnswerB(questions[q].correct_answer);
        setAnswer("B");
        setAnswerA(questions[q].incorrect_answers[getRandomAnswer(q)]);

        setAnswerC(questions[q].incorrect_answers[getRandomAnswer(q)]);

        setAnswerD(questions[q].incorrect_answers[getRandomAnswer(q)]);
      }
      if (correctAnswer === 3) {
        setAnswerC(questions[q].correct_answer);
        setAnswer("C");
        setAnswerB(questions[q].incorrect_answers[getRandomAnswer(q)]);

        setAnswerA(questions[q].incorrect_answers[getRandomAnswer(q)]);

        setAnswerD(questions[q].incorrect_answers[getRandomAnswer(q)]);
      }
      if (correctAnswer === 4) {
        setAnswerD(questions[q].correct_answer);
        setAnswer("D");
        setAnswerB(questions[q].incorrect_answers[getRandomAnswer(q)]);

        setAnswerC(questions[q].incorrect_answers[getRandomAnswer(q)]);

        setAnswerA(questions[q].incorrect_answers[getRandomAnswer(q)]);
      }
      props.setQuestionNumber(props.questionNumber + 1);
    } else {
      navigate("/summary");
    }
  };
  return (
    <>
      <Nav
        button1Name="Tablica wyników"
        button1Navigate="/laderboard"
        button2Name="Nowy quiz"
        button2Navigate="/"
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.5)",
            display: "flex",
            flexDirection: "column",
            padding: "3rem",
            paddingBottom: "14rem",
            background: "#e7e8db",
            width: "700px",
            height: "300px",
            borderRadius: "25px",
            marginTop: "10rem",
          }}
        >
          {start ? (
            <Quiz
              seconds={seconds}
              setSeconds={setSeconds}
              points={props.points}
              setPoints={props.setPoints}
              currentAnswer={currentAnswer}
              setCurrentAnswer={setCurrentAnswer}
              currentQuestion={currentQuestion}
              questionNumber={props.questionNumber}
              setQuestionNumber={props.setQuestionNumber}
              start={start}
              username={props.username}
              setStart={setStart}
              getRandomQuestion={getRandomQuestion}
              getRandomAnswer={getRandomAnswer}
              submitButton={submitButton}
              finishButton={finishButton}
              answerA={answerA}
              answerB={answerB}
              answerC={answerC}
              answerD={answerD}
            />
          ) : (
            <StartQuiz
              startQuiz={startQuiz}
              setStart={setStart}
              setSeconds={setSeconds}
              submitButton={submitButton}
              setPoints={props.setPoints}
              loading={loading}
              setUsedQuestions={setUsedQuestions}
              setUsedValues={setUsedValues}
              setQuestionNumber={props.setQuestionNumber}
            />
          )}
          <ToastContainer
            autoClose={1000}
            theme="dark"
            position={toast.POSITION.TOP_CENTER}
          />
        </div>
      </div>
    </>
  );
}

export default QuizPage;
