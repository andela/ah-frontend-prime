import React, { Component } from "react";
import { connect } from "react-redux";

import LoginModal from "../../components/login/LoginModal";
import { userLoginRequest } from "../../actions/LoginAction";

export class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      isLoading: false,
      errors: {
        email: "",
        password: ""
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loginSuccess === true) {
      const { history } = this.props;

      history.push("/");
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      errors: {
        email: "The email is required"
      }
    });
    const data = {
      user: {
        email: this.state.email,
        password: this.state.password
      }
    };
    this.props.userLoginRequest(data);
  }

  render() {
    return (
      <div>
        <LoginModal
          handleChange={this.handleChange}
          email={this.state.email}
          isProcessing={this.props.isProcessing}
          password={this.state.password}
          errors={this.state.errors}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  isProcessing: state.auth_login.isProcessing,
  loginSuccess: state.auth_login.loginSuccess
});

export default connect(
  mapStateToProps,
  { userLoginRequest }
)(LoginContainer);
