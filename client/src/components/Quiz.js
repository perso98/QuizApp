import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
function Quiz(props) {
  useEffect(() => {
    const interval = setInterval(() => {
      props.setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
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
        <div>Czas: {props.seconds}</div>
      </div>
      <div style={{ marginBottom: "2rem", fontWeight: "bold" }}>
        Pytanie: {props.currentQuestion}
      </div>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Button
              style={{
                background: props.currentAnswer === "A" ? "green" : "white",
                padding: "1rem",
                borderRadius: "25px",
                width: "100%",
                justifyContent: "flex-start",
                color: "black",
              }}
              onClick={() => props.setCurrentAnswer("A")}
            >
              a) {props.answerA}
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              style={{
                background: props.currentAnswer === "B" ? "green" : "white",
                padding: "1rem",
                borderRadius: "25px",
                width: "100%",
                justifyContent: "flex-start",
                color: "black",
              }}
              onClick={() => props.setCurrentAnswer("B")}
            >
              b) {props.answerB}
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              style={{
                background: props.currentAnswer === "C" ? "green" : "white",
                padding: "1rem",
                borderRadius: "25px",
                width: "100%",
                justifyContent: "flex-start",
                color: "black",
              }}
              onClick={() => props.setCurrentAnswer("C")}
            >
              c) {props.answerC}
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              style={{
                background: props.currentAnswer === "D" ? "green" : "white",
                padding: "1rem",
                borderRadius: "25px",
                width: "100%",
                justifyContent: "flex-start",
                color: "black",
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
