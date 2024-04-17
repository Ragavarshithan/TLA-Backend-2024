const express = require("express");
const router = express.Router();
const jeevanathiController = require("../controllers/jeevanathiController");

router.get("/", jeevanathiController.getAllProjects);
router.post("/", jeevanathiController.addProject);
router.patch("/:projectId", jeevanathiController.updateProject);

module.exports = router;
