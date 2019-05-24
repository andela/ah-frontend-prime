import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import LoginContainer from "../containers/Login/LoginContainer";
import SingleArticleComponent from "../components/articles/singleArticle";
import NavBarComponent from "../components/navbar";
import SocialAuthContainer from "../containers/SocialAuthContainer";
import PasswordResetEmailContainer from "../containers/passwordResetEmail";
import PasswordResetContainer from "../containers/passwordReset";
import Home from "./home";
import RegisterContainer from "../containers/registerContainer";
import EditProfileContainer from "../containers/profile/EditProfileContainer";
import UserArticles from "./articles/userArticles";
import CreateArticlePage from "./articles/createArticlePage";
import UsersProfileContainer from "../containers/profile/UsersProfileContainer";
import EditArticlePage from "./articles/editArticlePage";

class Routes extends Component {
  render() {
    return (
      <div>
        <BrowserRouter history={createBrowserHistory}>
          <NavBarComponent />
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/register" component={RegisterContainer} />
            <Route exact path="/home" component={Home} />
            <Route path="/login" component={LoginContainer} />
            <Route path="/socialAuth" component={SocialAuthContainer} />
            <Route path="/editprofile" component={EditProfileContainer} />
            <Route
              path="/passwordresetemail"
              component={PasswordResetEmailContainer}
            />
            <Route
              path="/:token/passwordreset"
              component={PasswordResetContainer}
            />

            <Route path="/create-article" component={CreateArticlePage} />
            <Route path="/article/:slug" component={SingleArticleComponent} />
            <Route path="/edit-article/:slug" component={EditArticlePage} />
            <Route path="/user-articles" component={UserArticles} />
            <Route
              path="/profile/:username"
              exact
              component={UsersProfileContainer}
            />
            <Route path="/editprofile" component={EditProfileContainer} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Routes;
