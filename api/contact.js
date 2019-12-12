const express = require("express");
const router = express.Router();
const Mailer = require("../services/Mailer");

// middleware that is specific to this router
router.use((req, res, next) => {
  next();
});

router.post("/contactme", async (req, res) => {
  const { name, email, message } = req.body;
  const template = "emails";
  const emailer = new Mailer(name, email, message, template);
  const results = await emailer.sendEmail();
  return results ? res.status(200).send() : res.status(500).send();
});

module.exports = router;
