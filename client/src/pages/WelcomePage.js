import React from "react";
import Grid from "@mui/material/Grid";
import Home from "../components/Home";
function WelcomePage() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Home />
    </div>
  );
}

export default WelcomePage;
