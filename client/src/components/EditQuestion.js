import { Button, TextField } from "@mui/material";
import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
function EditQuestion(props) {
  const handleClose = () => {
    props.setOpenEdit(false);
  };

  return (
    <>
      {props?.openEdit ? (
        <Dialog onClose={handleClose} open={props.openEdit}>
          <DialogTitle
            id="alert-dialog-title"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            Edycja pytania{" "}
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
                defaultValue={props.editQuestion.question}
                style={{ marginTop: "1rem", width: "100%" }}
                onChange={(e) =>
                  props.setEditQuestion({
                    ...props.editQuestion,
                    question: e.target.value,
                  })
                }
              />
              <TextField
                variant="outlined"
                label="Poprawna odpowiedź"
                defaultValue={props.editQuestion.correct_answer}
                style={{ marginTop: "1rem", width: "100%" }}
                onChange={(e) =>
                  props.setEditQuestion({
                    ...props.editQuestion,
                    correct_answer: e.target.value,
                  })
                }
              />
              {props.editQuestion.incorrect_answers.map((val, index) => {
                return (
                  <TextField
                    key={`incorrect-answer-${index}`}
                    variant="outlined"
                    label="Niepoprawna odpowiedź"
                    defaultValue={val}
                    style={{ marginTop: "1rem", width: "100%" }}
                    onChange={(e) => {
                      const updatedAnswers = [
                        ...props.editQuestion.incorrect_answers,
                      ];
                      updatedAnswers[index] = e.target.value;
                      props.setEditQuestion({
                        ...props.editQuestion,
                        incorrect_answers: updatedAnswers,
                      });
                    }}
                  />
                );
              })}

              <TextField
                variant="outlined"
                label="Temat"
                defaultValue={props.editQuestion.type}
                style={{ marginTop: "1rem", width: "100%" }}
                onChange={(e) =>
                  props.setEditQuestion({
                    ...props.editQuestion,
                    type: e.target.value,
                  })
                }
              />

              <Button
                variant="contained"
                style={{ marginTop: "3rem" }}
                color="warning"
                onClick={() => {
                  props.submitEditQuestion(props.editQuestion);
                  console.log(props.editQuestion);
                  handleClose();
                }}
              >
                Zmień
              </Button>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      ) : null}
    </>
  );
}

export default EditQuestion;
