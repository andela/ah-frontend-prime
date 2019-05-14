import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginContainer from "../containers/Login/LoginContainer";
import SocialAuthContainer from "../containers/SocialAuthContainer";
import Home from "./home";
import RegisterContainer from "../containers/registerContainer";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/register" component={RegisterContainer} />
          <Route exact path="/home" component={Home} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/socialAuth" component={SocialAuthContainer} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
