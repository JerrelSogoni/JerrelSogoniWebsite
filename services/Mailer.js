const nodemailer = require("nodemailer");

const keys = require("../config/keys");

class Mailer extends nodemailer {
  constructor({ name, email, message }) {
    super();
    this.transporter = nodemailer.createTransport({
      host: keys.emailOutgoingServer,
      port: keys.emailPort,
      secure: true, // true for 465, false for other ports
      auth: {
        user: keys.emailUsername,
        pass: keys.emailPassword
      }
    });

    this.subject = "<div>" + name + "messaged you!!" + "</div>";
    this.to_email = email;
    this.message = "";
  }
}

module.exports = Mailer;
