import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./home";
import LoginContainer from "../containers/Login/LoginContainer";
import RegisterContainer from "../containers/registerContainer";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/register" component={RegisterContainer} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
