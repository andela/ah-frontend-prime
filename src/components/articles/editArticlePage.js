import React, { Component } from "react";
import { connect } from "react-redux";
import "../../styles/app.scss";
import { articleCreateEditAction } from "../../actions/articleCreateEditAction";
import { getArticleAction } from "../../actions/getArticle";
import CreateArticleComponent from "./createArticleComponent";
import firebase from "../../firebase/config";
import { TextArea } from "semantic-ui-react";

export class EditArticlePage extends Component {
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
    this.onBodyChange = this.onBodyChange.bind(this);
  }
  componentWillMount() {
    this.props.getArticleAction(this.props.match.params.slug);
  }

  componentWillReceiveProps(newProps) {
    if (newProps) {
      this.setState({
        title: newProps.article.article.title,
        description: newProps.article.article.description,
        body: newProps.article.article.body,
        image: newProps.article.article.image,
        tags: newProps.article.tagList,
        article: newProps.article.article
      });
    }
  }

  /* istanbul ignore next */
  onUpload(files) {
    const image1 = URL.createObjectURL(event.target.files[0]);
    this.setState({ image1 });

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
  onBodyChange(e) {
    this.setState({ body: e });
  }

  onSubmit(e) {
    e.preventDefault();
    const { title, body, description, tags, image } = this.state;
    const messageObject = {
      title: title,
      body: body,
      description: description,
      tags: tags ? tags.split(",") : "",
      image: image
    };
    const url =
      "https://ah-backend-prime-staging.herokuapp.com/api/v1/articles/" +
      this.props.match.params.slug +
      "/";

    this.props.articleCreateEditAction(
      messageObject,
      url,
      "put",
      this.props,
      "updated"
    );
  }

  render() {
    const { image, article } = this.state;

    return (
      <div>
        <CreateArticleComponent
          {...this.state}
          onChange={this.onChange}
          onUpload={this.onUpload}
          onSubmit={this.onSubmit}
          onBodyChange={this.onBodyChange}
          image={image}
          article={article ? article : null}
        />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  article: state.getArticleReducer.article
});

export default connect(
  mapStateToProps,
  { getArticleAction, articleCreateEditAction }
)(EditArticlePage);
