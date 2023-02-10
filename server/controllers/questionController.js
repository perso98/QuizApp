const db = require("../utils/db").db;

exports.getAllQuestions = async (req, res, next) => {
  const { type } = req.query;
  console.log(type);
  try {
    let result;
    if (type === "Wszystko" || type === undefined) {
      result = await db.promise().query(`SELECT * FROM questions`);
    } else {
      result = await db
        .promise()
        .query(`SELECT * FROM questions where type= ?`, type);
    }
    console.log(result[0]);
    res.send(result);
  } catch (err) {
    next(err);
  }
};
