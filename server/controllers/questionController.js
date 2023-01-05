const db = require("../utils/db").db;

exports.getAllQuestions = async (req, res, next) => {
  try {
    const result = await db.promise().query(`SELECT * FROM questions`);
    console.log(result);
    res.send(result);
  } catch (err) {
    next(err);
  }
};
