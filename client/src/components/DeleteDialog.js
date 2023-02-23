import { Button, TextField } from "@mui/material";
import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";

function DeleteDialog(props) {
  const handleClose = () => {
    props.setDeleteDialog(false);
  };

  return (
    <>
      {props?.deleteDialog ? (
        <Dialog onClose={handleClose} open={props.deleteDialog}>
          <DialogTitle
            id="alert-dialog-title"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            Czy na pewno chcesz usunąć pytanie?{" "}
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
              {props.deleteQuestion.question}
              <Button
                variant="contained"
                style={{ marginTop: "3rem" }}
                color="error"
                onClick={() => {
                  props.deleteQuestionDB(props.deleteQuestion.id);
                  props.setDeleteDialog(false);
                }}
              >
                Usuń
              </Button>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      ) : null}
    </>
  );
}

export default DeleteDialog;
