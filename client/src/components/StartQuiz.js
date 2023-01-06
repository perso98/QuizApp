import React from "react";
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
      <div
        style={{
          fontWeight: "bold",
          fontSize: "16px",
          marginTop: "3rem",
          justifyContent: "center",
        }}
      >
        <span>
          Po kliknięciu przycisku "Zacznij quiz", będziesz miał 5minut na
          odpowiedzenie na jak najwięcej pytań poprawnie...
          <br />
          <br />
          Powodzenia!
        </span>
      </div>
      {props.loading ? (
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
          disabled={true}
        >
          Zacznij
        </Button>
      ) : (
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
            props.startQuiz();
          }}
        >
          Zacznij
        </Button>
      )}
    </div>
  );
}

export default StartQuiz;
