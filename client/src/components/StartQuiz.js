import React, { useEffect } from "react";
import { Button } from "@mui/material";
function StartQuiz(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Zacznij quiz jeśli będziesz gotów</h1>

      <Button
        variant="contained"
        color="success"
        style={{
          borderRadius: "25px",
          width: "60%",
          height: "60px",
          margin: "auto",
          marginTop: "7rem",
        }}
        onClick={() => {
          props.setStart(true);
          props.setSeconds(0);
          props.submitButton();
          props.setQuestionNumber(1);
        }}
      >
        Zacznij
      </Button>
    </div>
  );
}

export default StartQuiz;
