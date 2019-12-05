const express = require("express");
const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  next();
});

router.post("/contactme", (req, res) => {
  res.json({ message: "apples" });
});

module.exports = router;
