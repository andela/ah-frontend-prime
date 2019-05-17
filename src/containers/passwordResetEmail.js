import React, { Component } from "react";
import PasswordResetEmailComponent from "../components/passwordResetEmail";
import { validEmailRegex } from "../utils/regex";
import { sendPasswordResetLink } from "../actions/passwordResetActions";
import { connect } from "react-redux";

export class PasswordResetEmailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      errors: {
        email: ""
      }
    };
  }

  handleOnChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "invalid email";
        break;
      default:
        return null;
    }
    this.setState({ errors, [name]: value });
  };
  handleOnsubmit = event => {
    event.preventDefault();
    const { sendPasswordResetLink } = this.props;
    const { email } = this.state;
    const data = {
      email: email
    };
    sendPasswordResetLink(data);
  };

  render() {
    const { email, errors } = this.state;
    const { isLoading } = this.props;
    return (
      <div>
        <PasswordResetEmailComponent
          email={email}
          handleOnChange={this.handleOnChange}
          handleOnSubmit={this.handleOnsubmit}
          errors={errors}
          isLoading={isLoading}
        />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  success: state.passReset.success,
  error: state.passReset.errors,
  isLoading: state.passReset.isLoading
});
export default connect(
  mapStateToProps,
  { sendPasswordResetLink }
)(PasswordResetEmailContainer);
