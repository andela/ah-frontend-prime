import React from "react";
import "../../styles/profile.scss";
import { Link } from "react-router-dom";

const ProfileComponent = props => {
  const { full_name, bio, image, username } = props;
  return (
    <div>
      <div className="container-personal-profile">
        <div>
          <div className="user-details">
            <div>
              <h3>{`${username}'s profile`}</h3>
            </div>
            <div>
              <Link to="/editprofile" className="btn btn-outline-success">
                {" "}
                edit profile
              </Link>
            </div>
            <br />
            <div>
              <p>{`Fullname: ${full_name}`}</p>
              <p>{`bio: ${bio}`}</p>
            </div>
            <div>
              <span>Following:&nbsp;</span>
              <span>
                <i>19</i>
              </span>
              <span>&nbsp;|&nbsp;</span>
              <span>Followers:&nbsp;</span>
              <span>
                <i>19</i>
              </span>
            </div>
          </div>
          <div className="img-container">
            <img
              src={image}
              style={{ borderRadius: "50%", width: "200px", height: "200px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileComponent;
