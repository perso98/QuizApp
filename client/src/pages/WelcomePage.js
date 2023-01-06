import React from "react";
import Home from "../components/Home";
import Nav from "../components/Nav";
function WelcomePage(props) {
  return (
    <>
      <Nav button1Name="Tablica wyników" button1Navigate="/laderboard" />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Home
          setUsername={props.setUsername}
          typeOfQuiz={props.typeOfQuiz}
          username={props.username}
          setTypeOfQuiz={props.setTypeOfQuiz}
        />
      </div>
    </>
  );
}

export default WelcomePage;
