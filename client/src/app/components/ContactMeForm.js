import React, { Component } from "react";
import { reduxForm, Field, reset } from "redux-form";
import _ from "lodash";
import ContactMeField from "./ContactMeField";
import ReCAPTCHA from "react-google-recaptcha";
import validateEmail from "../utils/validateEmail";
import keys from "../config/keys";

import { connect } from "react-redux";
import { submitContact } from "../actions";

const FIELDS = [
  { label: "Name", name: "name", noValueError: "You must provide a name" },
  { label: "Email", name: "email", noValueError: "You must provide a email" },
  {
    label: "Message",
    name: "message",
    noValueError: "You must provide a message"
  }
];

class ContactMeForm extends Component {
  constructor(props) {
    super(props);
    this.recaptchaRef = React.createRef();
    this.state = {
      reCaptcha: false
    };
  }

  /*
  onChange
  @param values
  If values is null, reCaptcha is expired or not valid
   */
  onChange = values => {
    if (values) {
      this.setState({ reCaptcha: true });
    } else {
      this.setState({ reCaptcha: false });
    }
  };

  onSubmitForm = values => {
    this.props.submitContact(values);
    this.recaptchaRef.reset();
    this.setState({ reCaptcha: false });
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
    const { invalid, handleSubmit, submitting, contactMe } = this.props;
    return (
      <div className="text-background">
        <form onSubmit={handleSubmit(this.onSubmitForm)}>
          <div>{this.renderFields()}</div>
          <ReCAPTCHA
            ref={el => (this.recaptchaRef = el)}
            sitekey={keys.googleReCaptcha}
            onChange={this.onChange}
            theme="dark"
          />
          <div className="center" style={{ padding: "10px" }}>
            <button
              type="submit"
              className="btn-floating btn-large waves-effect waves-light white-text"
              disabled={invalid || this.state.reCaptcha === false || submitting}
            >
              <i className="material-icons right">send</i>
            </button>
            <p className="text-section">
              {contactMe != null
                ? contactMe
                  ? "Message sent!!!"
                  : "Lol seems like backend died"
                : ""}
            </p>
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

function mapStateToProps({ contactMe }) {
  return { contactMe };
}

ContactMeForm = connect(mapStateToProps, { submitContact })(ContactMeForm);

const successfulSubmit = (results, dispatch) => {
  dispatch(reset("contactMeForm"));
};

export default reduxForm({
  validate: validate,
  form: "contactMeForm",
  onSubmitSuccess: successfulSubmit
})(ContactMeForm);
