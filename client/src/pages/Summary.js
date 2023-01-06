import React from "react";
import EndQuiz from "../components/EndQuiz";

function Summary(props) {
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
        <EndQuiz
          username={props.username}
          points={props.points}
          setPoints={props.setPoints}
          questionNumber={props.questionNumber}
        />
      </div>
    </div>
  );
}

export default Summary;
