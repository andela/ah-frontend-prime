import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginContainer from "../containers/Login/LoginContainer";
import SocialAuthContainer from "../containers/SocialAuthContainer";
import PasswordResetEmailContainer from "../containers/passwordResetEmail";
import PasswordResetContainer from "../containers/passwordReset";
import Home from "./home";
import RegisterContainer from "../containers/registerContainer";
import { ProfilePage } from "../components/userProfile/ProfilePage";
import EditProfileContainer from "../containers/profile/EditProfileContainer";
import NavBarComponent from "../components/navbar";

class Routes extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBarComponent />
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/register" component={RegisterContainer} />
            <Route exact path="/home" component={Home} />
            <Route path="/login" component={LoginContainer} />
            <Route path="/socialAuth" component={SocialAuthContainer} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/editprofile" component={EditProfileContainer} />
            <Route
              path="/passwordresetemail"
              component={PasswordResetEmailContainer}
            />
            <Route
              path="/:token/passwordreset"
              component={PasswordResetContainer}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Routes;
