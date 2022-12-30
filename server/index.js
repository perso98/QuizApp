import { db } from "./db";
const express = require("express");
const mysql = require("mysql");
const app = express();
app.use(express.json());
app.listen(3001, () => {
  console.log("Aplikacja uruchomiona na porcie 3001");
});
