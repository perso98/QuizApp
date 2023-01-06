const db = require("../utils/db").db;

exports.getAllPlayers = async (req, res, next) => {
  try {
    const result = await db.promise().query(`SELECT * FROM players`);
    console.log(result);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

exports.sendResult = async (req, res, next) => {
  const { username, points, percentage } = req.body;
  const query =
    "insert into players (username,points,percentage) values (?,?,?)";
  try {
    const result = await db
      .promise()
      .query(query, [username, points, percentage]);
    res.send(username);
  } catch (err) {
    next(err);
  }
};
