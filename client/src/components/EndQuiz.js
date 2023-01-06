import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
function EndQuiz(props) {
  const navigate = useNavigate();
  const percentageOfGoodAnswers = (props.points / props.questionNumber) * 100;

  const reapetQuiz = () => {
    navigate("/quiz");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",

        fontSize: "16px",
        fontWeight: "bold",
        height: "300px",
      }}
    >
      <h2 style={{ textAlign: "center" }}> Koniec quizu {props.username}</h2>{" "}
      <span style={{ marginBottom: "1rem" }}>Twoje punkty: {props.points}</span>
      <span style={{ marginBottom: "1rem" }}>
        {" "}
        Ilość pytań: {props.questionNumber}
      </span>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <span>Twój współczynnik poprawnych odpowiedzi: </span>
        <span
          style={{
            marginLeft: "0.5rem",
            color: percentageOfGoodAnswers > 50 ? "green" : "red",
          }}
        >
          {percentageOfGoodAnswers.toFixed(2)} %
        </span>
      </div>
      <Button
        style={{
          width: "50%",
          alignSelf: "center",
          margin: "1rem",
          marginTop: "6rem",
        }}
        variant="contained"
        color="success"
        onClick={reapetQuiz}
      >
        Powtórz quiz
      </Button>
    </div>
  );
}

export default EndQuiz;
