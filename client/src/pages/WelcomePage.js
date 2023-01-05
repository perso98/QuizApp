import React from "react";
import Grid from "@mui/material/Grid";
import Home from "../components/Home";
function WelcomePage(props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Home setUsername={props.setUsername} />
    </div>
  );
}

export default WelcomePage;
