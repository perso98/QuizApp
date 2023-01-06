import React from "react";
import Scores from "../components/Scores";
import Nav from "../components/Nav";
function Laderboard() {
  return (
    <>
      {" "}
      <Nav button1Name="Nowy quiz" button1Navigate="/" />
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
          <Scores />
        </div>
      </div>
    </>
  );
}

export default Laderboard;
