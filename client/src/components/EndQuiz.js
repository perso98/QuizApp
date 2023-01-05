import React from "react";

function EndQuiz(props) {
  return (
    <div>
      Koniec quizu {props.username}, otrzymałes: {props.points} punktów
    </div>
  );
}

export default EndQuiz;
