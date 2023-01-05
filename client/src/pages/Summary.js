import React from "react";
import EndQuiz from "../components/EndQuiz";

function Summary(props) {
  return (
    <EndQuiz
      username={props.username}
      points={props.points}
      setPoints={props.setPoints}
    />
  );
}

export default Summary;
