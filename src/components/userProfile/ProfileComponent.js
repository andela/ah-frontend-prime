import React from "react";
import "../../styles/profile.scss";
import { Link } from "react-router-dom";
import NavBarComponent from "../navbar";
import FollowsStats from "../FollowsStats";
import FollowsButton from "../FollowsButton";

const ProfileComponent = props => {
  const {
    full_name,
    bio,
    image,
    username,
    isOwner,
    following_no,
    followers_no,
    followUser,
    unfollowUser,
    isfollowing,
    followers,
    following
  } = props;
  return (
    <div>
      <div className="container-personal-profile">
        <div>
          <div className="user-details">
            <div>
              <h3>{`${username}'s profile`}</h3>
            </div>
            <div>
              {isOwner ? (
                <Link to="/editprofile" className="btn btn-outline-success">
                  edit profile
                </Link>
              ) : (
                <FollowsButton
                  followUser={followUser}
                  unfollowUser={unfollowUser}
                  isfollowing={isfollowing}
                />
              )}
            </div>
            <br />
            <div>
              <p>{`Fullname: ${full_name}`}</p>
              <p>{`bio: ${bio}`}</p>
            </div>
            <div>
              <FollowsStats
                following_count={following_no}
                followers_count={followers_no}
                followers={followers}
                following={following}
              />
            </div>
            <div className="img-container">
              <img
                src={
                  image
                    ? image
                    : "https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png"
                }
                style={{ borderRadius: "50%", width: "200px", height: "200px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileComponent;
