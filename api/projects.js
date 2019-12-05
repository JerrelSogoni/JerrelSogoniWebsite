const express = require("express");
const router = express.Router();
const Projects = require("../services/Projects");

// middleware that is specific to this router
router.use((req, res, next) => {
  next();
});

router.get("/projects", (req, res) => {
  const allProjects = Projects.getAllProjects();
  res.send(allProjects);
});

module.exports = router;
