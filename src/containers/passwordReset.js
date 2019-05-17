import React, { Component } from "react";
import { connect } from "react-redux";
import PasswordResetComponent from "../components/passwordReset";
import { passwordValidate } from "../utils/regex";
import { passwordReset } from "../actions/passwordResetActions";

export class PasswordResetContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      passwordConfirm: "",
      errors: {
        password: "",
        passwordConfirm: ""
      }
    };
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.redirectToLogin === true) {
      const { history } = this.props;
      history.push("/login");
    }
  };

  handleOnChange = event => {
    event.preventDefault();
    let errors = this.state.errors;
    const { name, value } = event.target;
    switch (name) {
      case "password":
        errors.password = passwordValidate.test(value)
          ? ""
          : "password must have a number, lowercase char,special char and min of 8 chars";
        break;
      case "passwordConfirm":
        if (value !== this.state.password) {
          errors.passwordConfirm = "your passwords don't match";
        } else {
          errors.passwordConfirm = "";
        }
        break;
      default:
        return null;
    }
    this.setState({ errors, [name]: value });
  };
  handleOnSubmit = event => {
    event.preventDefault();
    const { passwordReset } = this.props;
    const { token } = this.props.match.params;
    const { password, passwordConfirm } = this.state;
    const data = {
      password: password,
      confirmpassword: passwordConfirm
    };
    passwordReset(data, token);
  };

  render() {
    const { password, passwordConfirm, errors } = this.state;
    const { isLoading } = this.props;
    return (
      <div>
        <PasswordResetComponent
          password={password}
          passwordConfirm={passwordConfirm}
          handleOnChange={this.handleOnChange}
          handleOnSubmit={this.handleOnSubmit}
          errors={errors}
          isLoading={isLoading}
        />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  success: state.passChange.success,
  error: state.passChange.error,
  isLoading: state.passChange.isLoading,
  redirectToLogin: state.passChange.redirectToLogin
});
export default connect(
  mapStateToProps,
  { passwordReset }
)(PasswordResetContainer);
