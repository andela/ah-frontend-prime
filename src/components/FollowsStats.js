import React from "react";
import FollowingList from "./FollowingList";
import FollowersList from "./FollowersList";

const FollowsStats = props => {
  const { following_count, followers_count, followers, following } = props;
  return (
    <div className="row">
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <FollowingList following={following} />
      </div>
      <div
        className="modal fade"
        id="exampleModal1"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <FollowersList followers={followers} />
      </div>
      <a
        className="col-md-4"
        data-toggle="modal"
        data-target="#exampleModal1"
        href="#"
      >
        {followers_count === 1 ? "Follower" : "Followers"}
        {" : "}
        <button className="stats">
          <strong>{followers_count ? followers_count : 0} </strong>
        </button>
      </a>
      <a
        className="col-md-4"
        data-toggle="modal"
        data-target="#exampleModal"
        href="#"
      >
        Following{" : "}
        <button className="stats">
          <strong>{following_count ? following_count : "0"} </strong>
        </button>
      </a>
    </div>
  );
};

export default FollowsStats;
