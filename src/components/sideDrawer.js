import React from "react";
import "../styles/sidedrawer.scss";

const SideDrawer = props => {
  return (
    <div className="sideDrawer">
      <ul className="list-group">
        <li className="list-group-item">Signin</li>
        <li className="list-group-item"> Get Started</li>
      </ul>
    </div>
  );
};
export default SideDrawer;
