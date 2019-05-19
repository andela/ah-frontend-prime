import React, { Component } from "react";
import { connect } from "react-redux";

import { getProfileAction } from "../../actions/profileActions";

import ProfileComponent from "../../components/userProfile/ProfileComponent";

export class ProfileContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      image: "",
      bio: "",
      full_name: "",
      isUploading: ""
    };
  }

  componentWillMount() {
    const { getProfileAction } = this.props;
    getProfileAction();
  }

  componentWillReceiveProps(newProps) {
    const { username, image, bio, full_name } = newProps.profile;
    this.setState({
      username: username,
      image: image,
      bio: bio,
      full_name: full_name
    });
  }

  render() {
    const { username, bio, full_name, image } = this.state;
    return (
      <ProfileComponent
        username={username}
        bio={bio}
        full_name={full_name}
        image={image}
      />
    );
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    getProfileAction: () => {
      dispatch(getProfileAction());
    }
  };
};

export const mapStateToProps = state => ({
  profile: state.profileReducer.profile
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer);
