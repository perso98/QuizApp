import { React, useState, useEffect } from "react";
import AddQuestion from "../components/AddQuestion";
import EditQuestion from "../components/EditQuestion";
import Questions from "../components/Questions";
import { Button } from "@mui/material";
import axios from "axios";
function Admin() {
  const [openAdd, setOpenAdd] = useState(false);
  const [question, setQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [incorrectAnswers, setIncorrectAnswers] = useState(Array(3).fill(""));
  const [topic, setTopic] = useState("");
  const [questions, setQuestions] = useState([]);
  useEffect(async () => {
    try {
      const response = await axios
        .get("http://localhost:3001/admin/getQuestions")
        .then(() => {
          setQuestions(response.data[0]);
        });
    } catch (e) {
      console.log(e);
    }
  }, []);
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
      console.log(response.data);
    } catch (error) {
      setIncorrectAnswers(Array(3).fill(""));
      console.error(error);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",

        flexDirection: "column",
      }}
    >
      <div
        style={{
          background: "#e7e8db",
          padding: "3rem",
          boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.5)",
          borderRadius: "25px",
        }}
      >
        <Button
          variant="contained"
          color="success"
          onClick={() => (openAdd ? setOpenAdd(false) : setOpenAdd(true))}
        >
          {" "}
          Dodaj pytanie
        </Button>
        <AddQuestion
          openAdd={openAdd}
          setOpenAdd={setOpenAdd}
          setIncorrectAnswers={setIncorrectAnswers}
          setTopic={setTopic}
          setQuestion={setQuestion}
          setCorrectAnswer={setCorrectAnswer}
          handleSubmit={handleSubmit}
          incorrectAnswers={incorrectAnswers}
        />
        <EditQuestion />
        <Questions />
      </div>
    </div>
  );
}

export default Admin;
