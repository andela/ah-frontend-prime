import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { editProfileAction } from "../../actions/profileActions";
import firebase from "../../firebase/config";
import "../../styles/profile.scss";

export class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: "",
      full_name: "",
      image: "",
      isProcessing: false,
      uploadDone: false,
      progress: 0
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleBioChange = this.handleBioChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.upDateSuccess === true) {
      const { history } = nextProps;
      history.push("/profile");
    }
  }

  componentWillMount() {
    const { full_name, bio, image } = this.props.profile;
    this.setState({ full_name, bio, image });
  }
  handleNameChange(event) {
    const { value } = event.target;
    this.setState({ full_name: value });
  }
  handleBioChange(event) {
    const { value } = event.target;
    this.setState({ bio: value });
  }
  handleImageUpload(event) {
    const { files } = event.target;
    this.setState({ image: files });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { bio, full_name, image } = this.state;
    const data = {
      bio: bio,
      full_name: full_name,
      image: image
    };
    this.props.editProfileAction(data, this.props);
  }
  /* istanbul ignore next */
  uploadImage(files) {
    const task = firebase
      .storage()
      .ref(`images/${files[0].name}`)
      .put(files[0]);

    task.then(res => {
      firebase
        .storage()
        .ref(`images/${files[0].name}`)
        .getDownloadURL()
        .then(url => {
          this.setState({ uploadDone: true });
          const image = {
            image: url
          };
          this.props.editProfileAction(image);
        });
    });

    task.on("state_changed", snapshot => {
      const uploadDone = true;
      this.setState({ uploadDone });
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      this.setState({ progress });
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="container-profile">
            <div className="row">
              <div className="col-md-8">
                <form role="form" method="post" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <input
                      id="full_name"
                      type="text"
                      placeholder="Enter your FullName"
                      className="form-control"
                      defaultValue={this.state.full_name}
                      onChange={this.handleNameChange}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      id="bio"
                      type="text"
                      placeholder="Enter a short Bio"
                      className="form-control"
                      defaultValue={this.state.bio}
                      onChange={this.handleBioChange}
                    />
                  </div>
                  <div className="row">
                    <div className="col">
                      <input
                        type="submit"
                        value="Save"
                        className="btn btn-outline-success"
                      />
                    </div>
                  </div>
                </form>
              </div>

              <div className="col-md-4">
                <div className="styleme">
                  <div className="profile-img">
                    <img src={this.state.image} className="update-image" />
                    <input
                      type="file"
                      onChange={event => this.uploadImage(event.target.files)}
                      id="banyati"
                      className="upload-button btn-outline-success"
                    />
                  </div>
                </div>
                <progress value={this.state.progress} max="100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  profile: state.profileReducer.profile,
  upDateSuccess: state.profileReducer.upDateSuccess
});

export default withRouter(
  connect(
    mapStateToProps,
    { editProfileAction }
  )(EditProfile)
);
