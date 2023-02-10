import { Button, TextField } from "@mui/material";
import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
function AddQuestion(props) {
  const handleClose = () => {
    props.setOpenAdd(false);
  };

  return (
    <>
      {props?.openAdd ? (
        <Dialog onClose={handleClose} open={props.openAdd}>
          <DialogTitle
            id="alert-dialog-title"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            Dodawanie pytania{" "}
            <Button onClick={handleClose} style={{ color: "black" }}>
              <CloseIcon />
            </Button>
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              style={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                width: "400px",
              }}
            >
              <TextField
                variant="outlined"
                label="Treść pytania"
                style={{ marginTop: "1rem", width: "100%" }}
                onChange={(e) => props.setQuestion(e.target.value)}
              />
              <TextField
                variant="outlined"
                label="Poprawna odpowiedź"
                style={{ marginTop: "1rem", width: "100%" }}
                onChange={(e) => props.setCorrectAnswer(e.target.value)}
              />
              {props.incorrectAnswers.map((answer, index) => (
                <TextField
                  key={index}
                  variant="outlined"
                  label={`Niepoprawna odpowiedź numer ${index + 1}`}
                  value={answer}
                  onChange={(e) =>
                    props.setIncorrectAnswers((prevAnswers) => {
                      const newAnswers = [...prevAnswers];
                      newAnswers[index] = e.target.value;

                      return newAnswers;
                    })
                  }
                  style={{ marginTop: "1rem", width: "100%" }}
                />
              ))}
              <TextField
                variant="outlined"
                label="Temat"
                style={{ marginTop: "1rem", width: "100%" }}
                onChange={(e) => props.setTopic(e.target.value)}
              />

              <Button
                variant="contained"
                style={{ marginTop: "3rem" }}
                color="success"
                onClick={() => {
                  props.handleSubmit();
                  handleClose();
                }}
              >
                Dodaj
              </Button>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      ) : null}
    </>
  );
}

export default AddQuestion;
