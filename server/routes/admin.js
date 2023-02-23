const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.post("/addQuestion", adminController.addQuestion);
router.get("/getQuestions", adminController.getQuestions);
router.delete("/deleteQuestion/:id", adminController.deleteQuestion);
router.put("/editQuestion", adminController.editQuestion);
module.exports = router;
