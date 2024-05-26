import { React, useState, useEffect } from "react";
import AddQuestion from "../components/AddQuestion";
import Questions from "../components/Questions";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import DeleteDialog from "../components/DeleteDialog";
import EditQuestion from "../components/EditQuestion";
function Admin(props) {

  // Definiowanie stanu komponentu
  const [openAdd, setOpenAdd] = useState(false);
  const [question, setQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [incorrectAnswers, setIncorrectAnswers] = useState(Array(3).fill(""));
  const [topic, setTopic] = useState("");
  const [searchQuestion, setSearchQuestion] = useState("");
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [deleteQuestion, setDeleteQuestion] = useState();
  const [openEdit, setOpenEdit] = useState(false);
  const [editQuestion, setEditQuestion] = useState();

  // Funkcja do filtrowania pytań na podstawie wyszukiwania
  const questionsSearched = () => {
    if (searchQuestion === "") return props.questions;
    else {
      return props.questions.filter((val) =>
        val.question.toLowerCase().includes(searchQuestion.toLowerCase())
      );
    }
  };

  // Funkcja obsługująca dodanie pytania
  const handleSubmit = async (e) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/admin/addQuestion",
        {
          question: question,
          correctAnswer: correctAnswer,
          incorrectAnswers: incorrectAnswers,
          topic: topic,
        }
      );
      setIncorrectAnswers(Array(3).fill(""));
      props.setQuestions([
        ...props.questions,
        {
          id: response.data.id,
          question: question,
          correct_answer: correctAnswer,
          incorrect_answers: incorrectAnswers,
          type: topic,
        },
      ]);
    } catch (error) {
      setIncorrectAnswers(Array(3).fill(""));
      console.error(error);
    }
  };

  // Funkcje obsługujące dialogi usuwania i edycji
  const openDeleteDialog = (val) => {
    setDeleteDialog(true);
    setDeleteQuestion(val);
  };

  const openEditDialog = (val) => {
    setOpenEdit(true);
    setEditQuestion(val);
  };

  // Funkcja usuwająca pytanie z bazy danych
  const deleteQuestionDB = async (id) => {
    try {
      await axios
        .delete(`http://localhost:3001/admin/deleteQuestion/${id}`)
        .then((res) => {
          props.setQuestions(
            props.questions.filter((val) => {
              return val.id !== id;
            })
          );
        });
    } catch (err) {
      console.log(err);
    }
  };

  // Funkcja obsługująca edycję pytania
  const submitEditQuestion = async (val) => {
    try {
      await axios
        .put(`http://localhost:3001/admin/editQuestion`, {
          editQuestion: val,
        })
        .then((res) => {
          props.setQuestions(
            props.questions.map((question) => {
              if (val.id === question.id) return val;
              else return question;
            })
          );
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",

        flexDirection: "column",
      }}
    >
      <div
        style={{
          background: "#e7e8db",
          padding: "3rem",
          boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.5)",
          borderRadius: "25px",
          minWidth: "600px",
          minHeight: "400px",
        }}
      >
        <div
          style={{
            marginBottom: "2rem",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextField
            variant="outlined"
            label="Szukaj pytania"
            style={{ width: "100%", marginBottom: "2rem" }}
            onChange={(e) => setSearchQuestion(e.target.value)}
          />
          <Button
            variant="contained"
            color="success"
            onClick={() => (openAdd ? setOpenAdd(false) : setOpenAdd(true))}
          >
            {" "}
            Dodaj pytanie
          </Button>
        </div>

        <AddQuestion
          openAdd={openAdd}
          setOpenAdd={setOpenAdd}
          setIncorrectAnswers={setIncorrectAnswers}
          setTopic={setTopic}
          setQuestion={setQuestion}
          setCorrectAnswer={setCorrectAnswer}
          handleSubmit={handleSubmit}
          incorrectAnswers={incorrectAnswers}
          questions={props.questions}
          question={question}
        />

        <Questions
          questionsSearched={questionsSearched}
          setDeleteDialog={setDeleteDialog}
          openDeleteDialog={openDeleteDialog}
          openEditDialog={openEditDialog}
        />
        <DeleteDialog
          deleteDialog={deleteDialog}
          setDeleteDialog={setDeleteDialog}
          deleteQuestion={deleteQuestion}
          deleteQuestionDB={deleteQuestionDB}
        />
        <EditQuestion
          openEdit={openEdit}
          setOpenEdit={setOpenEdit}
          editQuestion={editQuestion}
          submitEditQuestion={submitEditQuestion}
          setEditQuestion={setEditQuestion}
        />
      </div>
    </div>
  );
}

export default Admin;
