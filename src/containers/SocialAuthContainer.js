import React, { Component } from "react";
import { connect } from "react-redux";
import { facebooklogin, googlelogin } from "../actions/SocialAuthActions";
import { SocialAuth } from "../components/SocialAuth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { withRouter } from "react-router-dom";

export class SocialAuthContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.socialAuthState.isAuthenticated) {
      sessionStorage.setItem("token", nextProps.socialAuthState.token);
      sessionStorage.setItem("username", nextProps.socialAuthState.payload);
      this.props.history.push("/");
    }
  }

  handlefacebooksuccess = response => {
    const { facebooklogin } = this.props;
    if (response.accessToken) {
      facebooklogin(response.accessToken);
    }
  };
  handlegooglesuccess = response => {
    const { googlelogin } = this.props;
    if (response.tokenId) {
      googlelogin(response.tokenId);
    }
  };
  handlegooglefailure = response => {
    const { googlelogin } = this.props;
    googlelogin("invalid request");
  };

  render() {
    return (
      <div>
        <SocialAuth
          id="socialAuth"
          facebooksuccess={this.handlefacebooksuccess}
          googlesuccess={this.handlegooglesuccess}
          googlefailure={this.handlegooglefailure}
        />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  socialAuthState: state.socialAuthReducer
});

export default withRouter(
  connect(
    mapStateToProps,
    { facebooklogin, googlelogin }
  )(SocialAuthContainer)
);
