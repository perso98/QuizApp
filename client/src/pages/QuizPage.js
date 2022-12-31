import React, { useState, useEffect } from "react";
import Quiz from "../components/Quiz";
import StartQuiz from "../components/StartQuiz";

function QuizPage() {
  const [seconds, setSeconds] = useState(0);
  const [points, setPoints] = useState(0);
  const [answer, setAnswer] = useState();
  const [currentAnswer, setCurrentAnswer] = useState();
  const [questionNumber, setQuestionNumber] = useState(1);
  const [start, setStart] = useState(false);

  const [usedQuestions, setUsedQuestions] = useState([]);
  var usedValues = [];
  function getRandomAnswer(q) {
    let index = Math.floor(
      Math.random() * questions[q].incorrectAnswers.length
    );
    while (usedValues.includes(index)) {
      index = Math.floor(Math.random() * questions[q].incorrectAnswers.length);
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
  const questions = [
    {
      question: "Jaki jest największy kontynent na Ziemi?",
      correctAnswer: "Afryka",
      incorrectAnswers: ["Ameryka", "Europa", "Azja", "Australia"],
    },
    {
      question: "Jaki jest najwyższy szczyt świata?",
      correctAnswer: "Mount Everest",
      incorrectAnswers: ["K2", "Lhotse", "Kangchenjunga", "Makalu"],
    },
    {
      question: "Jaki jest najdłuższy rzeka na świecie?",
      correctAnswer: "Nil",
      incorrectAnswers: ["Amazonka", "Missisipi", "Jangcy", "Parana"],
    },
    {
      question: "Jaki jest największy ocean na świecie?",
      correctAnswer: "Ocean Spokojny",
      incorrectAnswers: [
        "Ocean Atlantycki",
        "Ocean Indyjski",
        "Ocean Arktyczny",
        "Ocean Antarktyczny",
      ],
    },
    {
      question: "Jaka jest największa planeta w Układzie Słonecznym?",
      correctAnswer: "Jowisz",
      incorrectAnswers: ["Saturn", "Uran", "Neptun", "Merkury"],
    },
    {
      question: "Jaka jest najmniejsza planeta w Układzie Słonecznym?",
      correctAnswer: "Merkury",
      incorrectAnswers: ["Wenus", "Ziemia", "Mars", "Jowisz"],
    },
    {
      question: "Jaki jest największy kraj pod względem powierzchni?",
      correctAnswer: "Rosja",
      incorrectAnswers: ["USA", "Kanada", "Chiny", "Australia"],
    },
    {
      question: "Jaki jest największy kraj pod względem liczby ludności?",
      correctAnswer: "Chiny",
      incorrectAnswers: ["Indie", "USA", "Indonezja", "Brazylia"],
    },
    {
      question: "Jaki jest największy kontynent pod względem liczby ludności?",
      correctAnswer: "Azja",
      incorrectAnswers: ["Afryka", "Ameryka", "Europa", "Australia"],
    },
  ];
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
      setAnswer(questions[q].correctAnswer);
      setAnswerA(questions[q].incorrectAnswers[getRandomAnswer(q)]);

      setAnswerB(questions[q].incorrectAnswers[getRandomAnswer(q)]);

      setAnswerC(questions[q].incorrectAnswers[getRandomAnswer(q)]);

      setAnswerD(questions[q].incorrectAnswers[getRandomAnswer(q)]);

      const correctAnswer = Math.floor(Math.random() * 4) + 1;
      if (correctAnswer === 1) {
        setAnswerA(questions[q].correctAnswer);
        setAnswer("A");
      }
      if (correctAnswer === 2) {
        setAnswerB(questions[q].correctAnswer);
        setAnswer("B");
      }
      if (correctAnswer === 3) {
        setAnswerC(questions[q].correctAnswer);
        setAnswer("C");
      }
      if (correctAnswer === 4) {
        setAnswerD(questions[q].correctAnswer);
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
