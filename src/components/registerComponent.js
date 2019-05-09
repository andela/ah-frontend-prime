import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Loader from "react-loader";
import "../styles/register.scss";

const styles = themes => ({
  floatingLabelFocusStyle: {
    color: "black",
    fontFamily: "Quantico",
    fontSize: "15px",
    fontWeight: "bold"
  }
});
export const RegisterComponent = props => {
  const {
    classes,
    password,
    username,
    email,
    handleOnChange,
    errors,
    handleOnSubmit,
    isRegistering
  } = props;
  return (
    <div>
      <Grid container spacing={24}>
        <Grid item lg={2} md={2} />
        <Grid item lg={8} md={8}>
          <Paper className="Paper">
            <h3>Join Authors Haven Today</h3>
            <p>
              A social that Creates a community of like minded authors to foster
              inspiration and
              <br />
              innovation by leveraging the modern web.
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
                    Register with Facebook
                  </Button>
                  <Button className="twitter">
                    <img
                      src="https://img.icons8.com/color/96/000000/twitter-circled.png"
                      width="=40px"
                      height="40px"
                      alt="twitter"
                    />
                    Register with Twitter
                  </Button>
                  <Button className="google">
                    <img
                      src="https://img.icons8.com/color/96/000000/google-logo.png"
                      width="=40px"
                      height="40px"
                      alt="google"
                    />
                    Register with Google
                  </Button>
                </div>
              </Grid>
              <Grid item lg={6} md={6} sm={12} className="grid-register">
                <form method="post" onSubmit={handleOnSubmit} id="registerForm">
                  <TextField
                    InputLabelProps={{
                      className: classes.floatingLabelFocusStyle
                    }}
                    id="username"
                    label="username"
                    name="username"
                    required
                    type="text"
                    className="textField"
                    value={username}
                    onChange={handleOnChange}
                  />
                  <p>
                    {errors.username.length > 0 ? (
                      <span className="form-errors">{errors.username}</span>
                    ) : (
                      ""
                    )}
                  </p>
                  <TextField
                    InputLabelProps={{
                      className: classes.floatingLabelFocusStyle
                    }}
                    id="email"
                    label=" email"
                    name="email"
                    required
                    type="text"
                    className="textField"
                    value={email}
                    onChange={handleOnChange}
                  />
                  <p>
                    {errors.email.length > 0 ? (
                      <span className="form-errors">{errors.email}</span>
                    ) : (
                      ""
                    )}
                  </p>
                  <TextField
                    InputLabelProps={{
                      className: classes.floatingLabelFocusStyle
                    }}
                    id="password"
                    label="password"
                    name="password"
                    required
                    type="password"
                    className="textField"
                    value={password}
                    onChange={handleOnChange}
                  />
                  <p>
                    {errors.password.length > 0 ? (
                      <span className="form-errors">{errors.password}</span>
                    ) : (
                      ""
                    )}
                  </p>
                  <Button type="submit" className="button-success">
                    Register
                    {isRegistering ? <Loader color="#FFFF" /> : ""}
                  </Button>
                </form>
              </Grid>
            </Grid>
            <p>
              Already have an Account? <Link to="/login"> login</Link>
            </p>
          </Paper>
        </Grid>
        <Grid item lg={2} md={2} />
      </Grid>
    </div>
  );
};
export default withStyles(styles)(RegisterComponent);
