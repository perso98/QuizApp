const db = require("../utils/db").db;

exports.addQuestion = async (req, res, next) => {
  const { question, correctAnswer, incorrectAnswers, topic } = req.body;
  console.log(req.body);
  const query =
    "insert into questions (question,correct_answer,incorrect_answers,type) values (?,?,?,?)";
  try {
    await db
      .promise()
      .query(query, [
        question,
        correctAnswer,
        JSON.stringify(incorrectAnswers),
        topic,
      ]);
    res.send("correct");
  } catch (err) {
    next(err);
  }
};
