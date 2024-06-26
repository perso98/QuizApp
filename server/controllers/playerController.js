const db = require("../utils/db").db;

// Pobieranie wszystkich graczy
exports.getAllPlayers = async (req, res, next) => {
  try {
    const result = await db.promise().query(`SELECT * FROM players`);

    res.send(result);
  } catch (err) {
    next(err);
  }
};

// Dodawanie wyników gracza
exports.sendResult = async (req, res, next) => {
  const { username, points, percentage } = req.body;
  const query =
    "insert into players (username,points,percentage) values (?,?,?)";
  try {
    await db.promise().query(query, [username, points, percentage]);
    res.send(username);
  } catch (err) {
    next(err);
  }
};
