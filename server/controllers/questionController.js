const db = require("../utils/db").db;

// Pobieranie wszystkich pytań z opcjonalnym filtrem na typ
exports.getAllQuestions = async (req, res, next) => {
  const { type } = req.query;
  try {
    let result;
    if (type === "Wszystko" || type === undefined)  { // Sprawdzanie czy filtr na typ jest ustawiony
      result = await db.promise().query(`SELECT * FROM questions`);
    } else {
      result = await db
        .promise()
        .query(`SELECT * FROM questions where type= ?`, type);  // Pobieranie pytań o określonym typie
    }
    res.send(result);
  } catch (err) {
    next(err);
  }
};
