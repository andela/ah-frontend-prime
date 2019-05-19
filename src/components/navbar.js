import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import "../styles/navbar.scss";
import BellIcon from "../styles/images/icons8-bell-100.png";
import SideDrawer from "./sideDrawer";
import profileImage from "../styles/images/profile.png";

export class NavBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navBarDrawer: false
    };
    this.logout = this.logout.bind(this);
  }
  logout() {
    sessionStorage.clear();
    window.location.href = "/";
  }
  toggleDrawer = event => {
    event.preventDefault();
    this.setState(prevState => {
      return { navBarDrawer: !prevState.navBarDrawer };
    });
  };

  render() {
    const sessionUser = sessionStorage.getItem("username");
    let sideDrawer;
    if (this.state.navBarDrawer) {
      sideDrawer = <SideDrawer />;
    }

    return (
      <div style={{ height: "100%" }}>
        <nav className="navbar navbar-expand-sm ">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <h4>
                  <i
                    className="fas fa-bars"
                    style={{ marginRight: "20px" }}
                    onClick={this.toggleDrawer}
                    id="nav-icon"
                  />
                  <a href="/" className="nav-links">
                    Author's Haven
                  </a>
                </h4>
              </a>
            </li>
          </ul>
          {sessionUser ? (
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item active">
                <div className="form-group has-search">
                  <span
                    className="fa fa-search form-control-feedback"
                    id="search-icon"
                  />
                  <form className="form-inline my-5 my-lg-0">
                    <input
                      className="form-control mr-sm-2 form-control-search"
                      type="search"
                      aria-label="Search"
                    />
                  </form>
                </div>
              </li>
              <li className="nav-item">
                <img src={BellIcon} id="notification-icon" />
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <img className="dropbtn profile-img" src={profileImage} />
                  <div className="dropdown-content">
                    <a
                      className="navlink"
                      href={`/profile/${sessionStorage.getItem("username")}`}
                    >
                      Profile
                    </a>
                    <Link className="navlink" to="/create-article">
                      Create Article
                    </Link>
                    <Link className="navlink" to="/user-articles/">
                      Your Stories
                    </Link>
                    <a href="/" className="navlink" onClick={this.logout}>
                      Log out
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          ) : (
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Sign In
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link get-started " to="/register">
                  Get Started
                </Link>
              </li>
            </ul>
          )}
        </nav>
        {sideDrawer}
      </div>
    );
  }
}
NavBarComponent.proptypes = {
  isAuthenticated: PropTypes.Boolean,
  isAuthenticatedSocial: PropTypes.Boolean
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth_login.loginSuccess,
  isAuthenticatedSocial: state.socialAuthReducer.isAuthenticated
});
export default withRouter(connect(mapStateToProps)(NavBarComponent));
