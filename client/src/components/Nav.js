import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
function Nav(props) {
  const navigate = useNavigate();
  return (
    <div
      style={{
        position: "absolute",

        marginTop: "2rem",
        marginLeft: "3rem",
      }}
    >
      {" "}
      <Button
        variant="contained"
        color="success"
        onClick={() => navigate(props.button1Navigate)}
      >
        {props.button1Name}
      </Button>
      {props.button2Name ? (
        <Button
          style={{ marginLeft: "2rem" }}
          variant="contained"
          color="success"
          onClick={() => navigate(props.button2Navigate)}
        >
          {props.button2Name}
        </Button>
      ) : null}{" "}
    </div>
  );
}

export default Nav;
