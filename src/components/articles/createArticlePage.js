import React, { Component } from "react";
import { connect } from "react-redux";
import "../../styles/app.scss";
import { articleCreateEditAction } from "../../actions/articleCreateEditAction";
import CreateArticleComponent from "./createArticleComponent";
import firebase from "../../firebase/config";

export class CreateArticlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      description: "",
      tags: "",
      image: "",
      isUploaded: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onUpload = this.onUpload.bind(this);
  }

  /* istanbul ignore next */
  onUpload(files) {
    const image = URL.createObjectURL(event.target.files[0]);
    this.setState({ image });

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
          console.log(url);
          this.setState({ isUploaded: true, image: url });
        });
    });

    task.on("state_changed", snapshot => {
      const isUploaded = true;
      this.setState({ isUploaded: isUploaded });
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const { title, body, description, tags, image } = this.state;
    const messageObject = {
      title: title,
      body: body,
      description: description,
      tags: tags.split(","),
      image: image
    };

    this.props.articleCreateEditAction(
      messageObject,
      "https://ah-backend-prime-staging.herokuapp.com/api/v1/articles/",
      "post",
      this.props
    );
  }

  render() {
    const { image } = this.state;
    return (
      <div>
        <CreateArticleComponent
          onChange={this.onChange}
          onUpload={this.onUpload}
          onSubmit={this.onSubmit}
          image={image}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { articleCreateEditAction }
)(CreateArticlePage);
