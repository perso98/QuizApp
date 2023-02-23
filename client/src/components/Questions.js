import React from "react";
import { Button } from "@mui/material";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function Questions(props) {
  return (
    <>
      {props?.questionsSearched().length !== 0 ? (
        props?.questionsSearched()?.map((val, index) => (
          <div
            style={{
              minWidth: "600px",
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "1rem",
              alignItems: "center",
            }}
          >
            <div key={index} style={{ fontWeight: "bold" }}>
              {" "}
              {val.question}
            </div>
            <div>
              <Button
                variant="contained"
                color="warning"
                onClick={() => {
                  props.openEditDialog(val);
                }}
              >
                Edytuj
              </Button>
              <IconButton
                variant="contained"
                color="error"
                onClick={() => {
                  props.openDeleteDialog(val);
                }}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        ))
      ) : (
        <div>Nie znaleziono takiego pytania</div>
      )}
    </>
  );
}

export default Questions;
