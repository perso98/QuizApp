const express = require("express");
const db = require("./utils/db").db;
const questionRoute = require("./routes/question");
const playersRoute = require("./routes/players");
const adminRoute = require("./routes/admin");
const bodyParser = require("body-parser");
const querystring = require("querystring");
const cors = require("cors");
const app = express();

// Konfiguracja CORS
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Middlewary
app.use((req, res, next) => {
  req.query = querystring.parse(req.url.split("?")[1]);
  next();
});
app.use(express.json({ extended: true }));
app.use(bodyParser.json());

// Routy
app.use("/questions", questionRoute);
app.use("/players", playersRoute);
app.use("/admin", adminRoute);

// Uruchomienie serwera na porcie 3001
app.listen(3001, () => {
  console.log("Aplikacja uruchomiona na porcie 3001");
});
