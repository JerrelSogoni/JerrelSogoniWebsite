const Email = require("email-templates");
const keys = require("../config/keys");
const path = require("path");

class Mailer {
  constructor(name, email, message, template) {
    this.contact = { name, email, message };
    this.template = template;
    this.emailer = new Email({
      views: { root: path.resolve("services") },
      message: {
        from: keys.emailUsername
      },
      send: true,
      transport: {
        host: keys.emailOutgoingServer,
        port: keys.emailPort,
        secure: true, // true for 465, false for other ports
        auth: {
          user: keys.emailUsername,
          pass: keys.emailPassword
        }
      }
    });
  }

  async sendEmail() {
    try {
      const result = await this.emailer.send({
        template: this.template,
        message: {
          to: keys.emailUsername
        },
        locals: this.contact
      });
      return result ? true : false;
    } catch (err) {
      return false;
    }
  }
}

module.exports = Mailer;
