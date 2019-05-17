import React from "react";
import "../styles/passwordreset.scss";
import Loader from "react-loader";

export const PasswordResetComponent = props => {
  const {
    password,
    passwordConfirm,
    handleOnChange,
    errors,
    handleOnSubmit,
    isLoading
  } = props;
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-lg-3 col-sm-1" />
          <div className="col col-lg-6  col-md-12 col-sm-12 password-reset-container">
            <div className="">
              <h2>Password Reset</h2>
              <p>
                Please enter and confirm a new password that you will use to
                sign in into Author's haven
              </p>
              <form method="post" onSubmit={handleOnSubmit}>
                <div className="form-group">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={handleOnChange}
                  />
                  {errors.password.length > 0 ? (
                    <span className="form-errors-email">{errors.password}</span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    id="passwordConfirm"
                    name="passwordConfirm"
                    className="form-control"
                    required
                    placeholder="confirm Password"
                    value={passwordConfirm}
                    onChange={handleOnChange}
                  />
                  {errors.passwordConfirm.length > 0 ? (
                    <span className="form-errors-email">
                      {errors.passwordConfirm}
                    </span>
                  ) : (
                    ""
                  )}
                  <br />
                </div>
                <button type="submit" className="btn btn-primary">
                  Reset
                  <span>{isLoading ? <Loader /> : ""}</span>
                </button>
              </form>
            </div>
          </div>
          <div className="col col-lg-3 col-sm-1 col-sm-auto" />
        </div>
      </div>
    </div>
  );
};
export default PasswordResetComponent;
