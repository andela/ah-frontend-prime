import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getUsersProfileAction,
  getUsersFollowers,
  getUsersFollowing,
  followUser,
  unfollowUser
} from "../../actions/profileActions";
import ProfileComponent from "../../components/userProfile/ProfileComponent";

export class UsersProfileContainer extends Component {
  state = {
    username: "",
    image: "",
    bio: "",
    full_name: "",
    isUploading: "",
    following_no: 0,
    followers_no: 0,
    isfollowing: false,
    followers: [],
    following: []
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const username = this.props.match.params.username;
    this.props.getUsersProfileAction(username);
    this.props.getUsersFollowers(username);
    this.props.getUsersFollowing(username);
  }

  isOwner = () =>
    this.props.match.params.username === sessionStorage.getItem("username")
      ? true
      : false;

  componentWillReceiveProps(newProps) {
    const { profile, isfollowing, following, followers } = newProps;
    if (profile) {
      sessionStorage.setItem("userview_name", profile.username);
      this.setState({
        username: profile.username,
        image: profile.image,
        bio: profile.bio,
        full_name: profile.full_name,
        followers_no: profile.followers_no,
        following_no: profile.following_no,
        isfollowing: isfollowing === "True" ? true : false,
        following: following,
        followers: followers
      });
    }
  }

  handlefollowUser = username => {
    const { followUser } = this.props;
    followUser(username);
  };

  handleunfollowUser = username => {
    const { unfollowUser } = this.props;
    unfollowUser(username);
  };

  render() {
    const {
      username,
      bio,
      full_name,
      image,
      followers_no,
      following_no,
      isfollowing,
      followers,
      following
    } = this.state;
    return (
      <ProfileComponent
        username={username}
        bio={bio}
        full_name={full_name}
        image={image}
        isOwner={this.isOwner()}
        followers_no={followers_no}
        following_no={following_no}
        isfollowing={isfollowing}
        followUser={this.handlefollowUser}
        unfollowUser={this.handleunfollowUser}
        followers={followers}
        following={following}
      />
    );
  }
}

export const mapStateToProps = state => ({
  profile: state.profileReducer.profile,
  isfollowing: state.profileReducer.isfollowing,
  followers: state.followsUnfollowsReducer.followers,
  following: state.followsUnfollowsReducer.following
});

export const mapDispatchToProps = {
  getUsersProfileAction,
  followUser,
  unfollowUser,
  getUsersFollowers,
  getUsersFollowing
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersProfileContainer);
