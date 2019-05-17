import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../styles/navbar.scss";
import BellIcon from "../styles/images/icons8-bell-100.png";
import SideDrawer from "./sideDrawer";

export class NavBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navBarDrawer: false
    };
  }

  toggleDrawer = event => {
    event.preventDefault();
    this.setState(prevState => {
      return { navBarDrawer: !prevState.navBarDrawer };
    });
  };

  render() {
    let sideDrawer;
    if (this.state.navBarDrawer) {
      sideDrawer = <SideDrawer />;
    }

    const { isAuthenticated } = this.props;
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
                  Author's Haven
                </h4>
              </a>
            </li>
          </ul>
          {isAuthenticated ? (
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
              <li className="nav-item" />
              <li className="nav-item">
                <div>
                  <img src="" className="profile-section" />
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
  isAuthenticated: PropTypes.Boolean
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth_login.loginSuccess
});
export default connect(mapStateToProps)(NavBarComponent);
