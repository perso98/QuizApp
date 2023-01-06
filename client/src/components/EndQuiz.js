import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DataGrid } from "@mui/x-data-grid";
function EndQuiz(props) {
  const navigate = useNavigate();
  const percentageOfGoodAnswers = (props.points / props.questionNumber) * 100;
  const [sendStatus, setSendStatus] = useState(true);
  const reapetQuiz = () => {
    navigate("/quiz");
  };
  const sendResult = () => {
    axios
      .post("http://localhost:3001/players/sendResult", {
        username: props.username,
        points: props.points,
        percentage: percentageOfGoodAnswers,
      })
      .then((res) => {
        toast.success(`Twój wynik został wysłany ${res.data}!`);
        setSendStatus(true);
      });
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
      {props.questionNumber > 1 ? (
        <>
          <h2 style={{ textAlign: "center" }}>
            {" "}
            Koniec quizu {props.username}
          </h2>
          <span style={{ marginBottom: "1rem" }}>
            Twoje punkty: {props.points}
          </span>
          <span style={{ marginBottom: "1rem" }}>
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
          {sendStatus ? (
            <Button
              style={{
                width: "50%",
                alignSelf: "center",
                margin: "1rem",
                marginTop: "2rem",
                borderRadius: "25px",
                padding: "0.7rem",
                fontSize: "18px",
              }}
              variant="contained"
              color="success"
              onClick={() => {
                sendResult();
                setSendStatus(false);
              }}
            >
              Wyślij swój wynik
            </Button>
          ) : (
            <Button
              style={{
                width: "50%",
                alignSelf: "center",
                margin: "1rem",
                marginTop: "2rem",
                borderRadius: "25px",
                padding: "0.7rem",
                fontSize: "18px",
              }}
              variant="contained"
              disabled={true}
            >
              Wyślij swój wynik
            </Button>
          )}
        </>
      ) : (
        <h2 style={{ textAlign: "center" }}>
          Sprawdź swój wynik po zakończeniu quizu ;)
        </h2>
      )}
      <Button
        style={{
          width: "50%",
          alignSelf: "center",
          margin: "1rem",

          borderRadius: "25px",
          padding: "0.7rem",
          fontSize: "18px",
        }}
        variant="contained"
        color="success"
        onClick={reapetQuiz}
      >
        Powtórz quiz
      </Button>
      <ToastContainer
        autoClose={1000}
        theme="dark"
        position={toast.POSITION.TOP_CENTER}
        limit={1}
      />
    </div>
  );
}

export default EndQuiz;
