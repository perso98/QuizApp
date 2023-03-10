const mysql = require("mysql2");
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "1234",
  database: "quiz",
});
module.exports = {
  db: mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "1234",
    database: "quiz",
  }),
  table_questions: db.query(
    "SHOW TABLES LIKE ?",
    ["questions"],
    function (error, results) {
      if (error) throw error;

      if (results.length === 0) {
        db.query(
          `CREATE TABLE questions (
          id INT AUTO_INCREMENT PRIMARY KEY,
          question VARCHAR(255) NOT NULL,
          correct_answer VARCHAR(255) NOT NULL,
          incorrect_answers JSON NOT NULL
        );`,
          function (error, results) {
            if (error) throw error;

            console.log(`Utworzono tabelę dla quizu`);
          }
        );
      } else {
        console.log(`Tabela 'questions' już istnieje.`);
      }
    }
  ),
  table_players: db.query(
    "SHOW TABLES LIKE ?",
    ["players"],
    function (error, results) {
      if (error) throw error;

      if (results.length === 0) {
        db.query(
          `CREATE TABLE players (
          id INT AUTO_INCREMENT PRIMARY KEY,
          username VARCHAR(30) NOT NULL,
          points INT NOT NULL,
          percentage INT NOT NULL
        );`,
          function (error, results) {
            if (error) throw error;

            console.log(`Utworzono tabelę dla graczy`);
          }
        );
      } else {
        console.log(`Tabela 'players' już istnieje.`);
      }
    }
  ),
};
