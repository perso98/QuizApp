const express = require("express");
const db = require("./utils/db").db;
const questionRoute = require("./routes/question");
const cors = require("cors");
const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use("/questions", questionRoute);
app.use(express.json());
app.listen(3001, () => {
  console.log("Aplikacja uruchomiona na porcie 3001");
});
