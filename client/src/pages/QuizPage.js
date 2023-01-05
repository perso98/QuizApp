import React, { useState, useEffect } from "react";
import axios from "axios";
import Quiz from "../components/Quiz";
import StartQuiz from "../components/StartQuiz";
import EndQuiz from "../components/EndQuiz";

function QuizPage() {
  const [seconds, setSeconds] = useState(0);
  const [points, setPoints] = useState(0);
  const [answer, setAnswer] = useState();
  const [currentAnswer, setCurrentAnswer] = useState();
  const [questionNumber, setQuestionNumber] = useState(1);
  const [start, setStart] = useState(false);
  const [usedQuestions, setUsedQuestions] = useState([]);
  const [questions, setQuestions] = useState([]);

  axios.defaults.withCredentials = true;
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:3001/questions");
      setQuestions(result.data[0]);
    };
    fetchData();
  }, []);

  var usedValues = [];
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
  function getRandomQuestion() {
    let index = Math.floor(Math.random() * questions.length);
    while (usedQuestions.includes(index)) {
      index = Math.floor(Math.random() * questions.length);
    }
    setUsedQuestions([...usedQuestions, index]);
    return index;
  }

  const [answerA, setAnswerA] = useState();

  const [answerB, setAnswerB] = useState();

  const [answerC, setAnswerC] = useState();

  const [answerD, setAnswerD] = useState();

  const [currentQuestion, setQurrentQuestion] = useState();
  const submitButton = () => {
    if (questionNumber <= questions.length - 1) {
      if (answer === currentAnswer && start === true) {
        setPoints(points + 1);
      }
      setQuestionNumber(questionNumber + 1);
      setCurrentAnswer("");
      setAnswer("");
      usedValues = [];

      var q = getRandomQuestion();
      setQurrentQuestion(questions[q].question);
      setAnswer(questions[q].correct_answer);
      setAnswerA(questions[q].incorrect_answers[getRandomAnswer(q)]);

      setAnswerB(questions[q].incorrect_answers[getRandomAnswer(q)]);

      setAnswerC(questions[q].incorrect_answers[getRandomAnswer(q)]);

      setAnswerD(questions[q].incorrect_answers[getRandomAnswer(q)]);

      const correctAnswer = Math.floor(Math.random() * 4) + 1;
      if (correctAnswer === 1) {
        setAnswerA(questions[q].correct_answer);
        setAnswer("A");
      }
      if (correctAnswer === 2) {
        setAnswerB(questions[q].correct_answer);
        setAnswer("B");
      }
      if (correctAnswer === 3) {
        setAnswerC(questions[q].correct_answer);
        setAnswer("C");
      }
      if (correctAnswer === 4) {
        setAnswerD(questions[q].correct_answer);
        setAnswer("D");
      }
    }
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
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
            points={points}
            setPoints={setPoints}
            currentAnswer={currentAnswer}
            setCurrentAnswer={setCurrentAnswer}
            currentQuestion={currentQuestion}
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}
            start={start}
            setStart={setStart}
            getRandomQuestion={getRandomQuestion}
            getRandomAnswer={getRandomAnswer}
            submitButton={submitButton}
            answerA={answerA}
            answerB={answerB}
            answerC={answerC}
            answerD={answerD}
          />
        ) : (
          <StartQuiz
            setStart={setStart}
            setSeconds={setSeconds}
            submitButton={submitButton}
            setQuestionNumber={setQuestionNumber}
          />
        )}
      </div>
    </div>
  );
}

export default QuizPage;
