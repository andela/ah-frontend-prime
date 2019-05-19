import React from "react";

const FollowsButton = props => {
  const { isfollowing, unfollowUser, followUser } = props;
  return (
    <button
      onClick={
        isfollowing
          ? unfollowUser.bind(this, sessionStorage.getItem("userview_name"))
          : followUser.bind(this, sessionStorage.getItem("userview_name"))
      }
      className="btn btn-outline-success"
    >
      {isfollowing ? "Unfollow" : "Follow"}
    </button>
  );
};

export default FollowsButton;
