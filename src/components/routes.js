import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LoginContainer from "../containers/Login/LoginContainer";
import Home from "./home";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route path="/login" component={LoginContainer} />
      </BrowserRouter>
    );
  }
}
export default Routes;
