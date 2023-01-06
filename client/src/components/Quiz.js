import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Quiz(props) {
  const [hover, setHover] = useState({ status: false, answer: "" });
  const handleMouseEnter = (answer) => {
    setHover({ status: true, answer: answer });
  };

  const handleMouseLeave = () => {
    setHover({ status: false, answer: "" });
  };
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      props.setSeconds((seconds) => seconds - 1);
      if (props.seconds <= 0) {
        navigate("/summary");
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [props.seconds]);
  const minutesOfTimer = Math.floor(props.seconds / 60);
  const secondsOfTimer = props.seconds % 60;
  return (
    <>
      <h2 style={{ textAlign: "center", color: "#123b48" }}>
        Pytanie nr {props.questionNumber}
      </h2>
      <div
        style={{
          marginBottom: "2rem",
          display: "flex",
          justifyContent: "space-between",
          fontWeight: "bold",
          marginTop: "1rem",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>Punkty: {props.points}</div>{" "}
          <div style={{ marginTop: "1rem" }}>Ty: MaciejMłody66</div>
        </div>
        <div>
          Czas: {minutesOfTimer}:{secondsOfTimer}
        </div>
      </div>
      <div style={{ marginBottom: "2rem", fontWeight: "bold" }}>
        Pytanie: {props.currentQuestion}
      </div>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Button
              onMouseEnter={() => handleMouseEnter("A")}
              onMouseLeave={() => handleMouseLeave("A")}
              style={{
                padding: "1rem",
                borderRadius: "25px",
                width: "100%",
                justifyContent: "flex-start",
                color: "black",
                backgroundColor:
                  hover.status &&
                  props.currentAnswer !== "A" &&
                  hover.answer === "A"
                    ? "lightgreen"
                    : props.currentAnswer === "A"
                    ? "green"
                    : "white",
              }}
              onClick={() => props.setCurrentAnswer("A")}
            >
              a) {props.answerA}
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              onMouseEnter={() => handleMouseEnter("B")}
              onMouseLeave={() => handleMouseLeave("B")}
              style={{
                padding: "1rem",
                borderRadius: "25px",
                width: "100%",
                justifyContent: "flex-start",
                color: "black",
                backgroundColor:
                  hover.status &&
                  props.currentAnswer !== "B" &&
                  hover.answer === "B"
                    ? "lightgreen"
                    : props.currentAnswer === "B"
                    ? "green"
                    : "white",
              }}
              onClick={() => props.setCurrentAnswer("B")}
            >
              b) {props.answerB}
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              onMouseEnter={() => handleMouseEnter("C")}
              onMouseLeave={() => handleMouseLeave("C")}
              style={{
                padding: "1rem",
                borderRadius: "25px",
                width: "100%",
                justifyContent: "flex-start",
                color: "black",
                backgroundColor:
                  hover.status &&
                  props.currentAnswer !== "C" &&
                  hover.answer === "C"
                    ? "lightgreen"
                    : props.currentAnswer === "C"
                    ? "green"
                    : "white",
              }}
              onClick={() => props.setCurrentAnswer("C")}
            >
              c) {props.answerC}
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              onMouseEnter={() => handleMouseEnter("D")}
              onMouseLeave={() => handleMouseLeave("D")}
              style={{
                padding: "1rem",
                borderRadius: "25px",
                width: "100%",
                justifyContent: "flex-start",
                color: "black",
                backgroundColor:
                  hover.status &&
                  props.currentAnswer !== "D" &&
                  hover.answer === "D"
                    ? "lightgreen"
                    : props.currentAnswer === "D"
                    ? "green"
                    : "white",
              }}
              onClick={() => props.setCurrentAnswer("D")}
            >
              d) {props.answerD}
            </Button>
          </Grid>
        </Grid>
      </Box>
      <span style={{ textAlign: "center", marginTop: "1rem" }}>
        Zaznacz poprawną odpowiedź
      </span>
      {props.currentAnswer !== "" ? (
        <Button
          variant="contained"
          color="success"
          style={{
            marginTop: "3rem",
            padding: "1rem",
            borderRadius: "25px",
          }}
          onClick={props.submitButton}
        >
          Potwierdź odpowiedź
        </Button>
      ) : (
        <Button
          variant="contained"
          disabled={true}
          style={{
            marginTop: "3rem",
            padding: "1rem",
            borderRadius: "25px",
          }}
        >
          Potwierdź odpowiedź
        </Button>
      )}
    </>
  );
}

export default Quiz;
