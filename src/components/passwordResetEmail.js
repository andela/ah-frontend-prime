import React from "react";
import "../styles/passwordreset.scss";
import Loader from "react-loader";

const PasswordResetEmailComponent = props => {
  const { email, handleOnChange, errors, handleOnSubmit, isLoading } = props;
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col col-lg-3 col-sm-auto" />
        <div className="col col-lg-6  col-md-auto col-sm-auto password-reset-container">
          <h2>Password Reset</h2>
          <p>
            Enter your Author's have the email address that you used to
            register. We'll send you an email with a link to reset your
            password.
          </p>
          <form method="POST" onSubmit={handleOnSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                required
                placeholder="email"
                value={email}
                onChange={handleOnChange}
              />
              {errors.email.length > 0 ? (
                <span className="form-errors">{errors.email}</span>
              ) : (
                ""
              )}
            </div>
            <button type="submit" className="btn btn-primary">
              send link
              <span> {isLoading ? <Loader color="#003153" /> : ""}</span>
            </button>
          </form>
        </div>
        <div className="col col-lg-3" />
      </div>
    </div>
  );
};

export default PasswordResetEmailComponent;
