const db = require("../utils/db").db;

// Dodawanie nowego pytania
exports.addQuestion = async (req, res, next) => {
  const { question, correctAnswer, incorrectAnswers, topic } = req.body;
  const query =
    "insert into questions (question,correct_answer,incorrect_answers,type) values (?,?,?,?)";
  try {
    const result = await db
      .promise()
      .query(query, [
        question,
        correctAnswer,
        JSON.stringify(incorrectAnswers),
        topic,
      ]);
    res.send({ id: result[0].insertId });
  } catch (err) {
    next(err);
  }
};

// Pobieranie wszystkich pytań
exports.getQuestions = async (req, res, next) => {
  try {
    const result = await db.promise().query(`SELECT * FROM questions`);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

// Usuwanie pytania po ID
exports.deleteQuestion = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await db
      .promise()
      .query(`DELETE from questions where id=${id}`);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

// Edycja pytania
exports.editQuestion = async (req, res, next) => {
  const { editQuestion } = req.body;

  try {
    const result = await db.promise().query(
      `UPDATE questions SET 
      question = '${editQuestion.question}', 
      correct_answer = '${editQuestion.correct_answer}', 
      incorrect_answers = '${JSON.stringify(editQuestion.incorrect_answers)}', 
      type = '${editQuestion.type}'
      WHERE id = ${editQuestion.id}`
    );
    res.send(result);
  } catch (err) {
    next(err);
  }
};
