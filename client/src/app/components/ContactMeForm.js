import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import _ from "lodash";
import ContactMeField from "./ContactMeField";
import ReCAPTCHA from "react-google-recaptcha";
import validateEmail from "../utils/validateEmail";
import keys from "../config/keys";

const FIELDS = [
  { label: "Name", name: "name", noValueError: "You must provide a name" },
  { label: "Email", name: "email", noValueError: "You must provide a email" },
  {
    label: "Message",
    name: "message",
    noValueError: "You must provide a message"
  }
];

const recaptchaRef = React.createRef();

class ContactMeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reCaptcha: false
    };
  }
  onChange = values => {
    console.log(values);
    this.setState({ reCaptcha: true });
  };
  renderFields() {
    return _.map(FIELDS, ({ label, name }) => {
      return (
        <Field
          className="contact-field"
          key={name}
          component={ContactMeField}
          text="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div className="text-background">
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          <div>{this.renderFields()}</div>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={keys.googleReCaptcha}
            onChange={this.onChange}
            theme="dark"
          />
          <div className="center" style={{ padding: "10px" }}>
            <button
              type="submit"
              className="btn-floating btn-large waves-effect waves-light white-text"
              disabled={this.props.invalid || this.state.reCaptcha === false}
            >
              <i className="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  errors.email = validateEmail(values.email || "");

  _.each(FIELDS, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });

  return errors;
}

export default reduxForm({
  validate: validate,
  form: "contactMeForm"
})(ContactMeForm);
