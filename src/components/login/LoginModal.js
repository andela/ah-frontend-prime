import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../../styles/register.scss";

const styles = themes => ({
  floatingLabelFocusStyle: {
    color: "black",
    fontFamily: "Quantico",
    fontSize: "15px",
    fontWeight: "bold"
  }
});
const LoginComponent = props => {
  const {
    classes,
    password,
    email,
    handleChange,
    handleSubmit,
    isProcessing
  } = props;

  let Loader = require("react-loader");

  return (
    <div>
      <Grid container spacing={24}>
        <Grid item lg={2} md={2} />
        <Grid item lg={8} md={8}>
          <Paper className="Paper">
            <h3>Welcome back!</h3>
            <p>
              SignIn to like, dislike, favorite and unfavorite various articles,
              <br />
              follow authors and comment on articles.
            </p>
            <Grid container spacing={24}>
              <Grid item lg={6} md={6}>
                <div className="button-collective">
                  <Button className="face-book">
                    <img
                      src="https://img.icons8.com/color/96/000000/facebook.png"
                      width="=40px"
                      height="40px"
                      alt="facebook"
                    />
                    Login with Facebook
                  </Button>
                  <Button className="twitter">
                    <img
                      src="https://img.icons8.com/color/96/000000/twitter-circled.png"
                      width="=40px"
                      height="40px"
                      alt="twitter"
                    />
                    Login with Twitter
                  </Button>
                  <Button className="google">
                    <img
                      src="https://img.icons8.com/color/96/000000/google-logo.png"
                      width="=40px"
                      height="40px"
                      alt="google"
                    />
                    Login with Google
                  </Button>
                </div>
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                className="grid-register"
                id="login-form"
              >
                <form method="post" onSubmit={handleSubmit}>
                  <TextField
                    InputLabelProps={{
                      className: classes.floatingLabelFocusStyle
                    }}
                    id="email"
                    label="email"
                    name="email"
                    type="text"
                    required
                    className="textField"
                    value={email}
                    onChange={handleChange}
                  />

                  <TextField
                    InputLabelProps={{
                      className: classes.floatingLabelFocusStyle
                    }}
                    id="password"
                    label="password"
                    name="password"
                    required
                    minLength={6}
                    maxLength={16}
                    type="password"
                    className="textField"
                    value={password}
                    onChange={handleChange}
                  />

                  <Loader loaded={!isProcessing} />
                  <Button type="submit" className="button-success">
                    Login
                  </Button>
                </form>
              </Grid>
            </Grid>
            <p>
              Don't have an account yet?{" "}
              <a href="/register" id="link">
                create one now
              </a>
            </p>
            <p>
              Forgot your password?{" "}
              <a href="/passwordreset" id="link">
                reset now
              </a>
            </p>
          </Paper>
        </Grid>
        <Grid item lg={2} md={2} />
      </Grid>
    </div>
  );
};
export default withStyles(styles)(LoginComponent);
