const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.post("/addQuestion", adminController.addQuestion);
module.exports = router;
