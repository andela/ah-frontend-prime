import React, { Component } from "react";
import moment from "moment";
import { articleComments, fetchComments } from "../actions/commentsActions";
import { connect } from "react-redux";
import "../styles/comments.scss";


export class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: ""
    };
  }

  componentDidMount() {
    const { fetchComments, articleSlug } = this.props;
    fetchComments(articleSlug);
  }

  handleOnChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    const { articleSlug, articleComments, fetchComments } = this.props;
    const { comments } = this.state;
    const data = {
      body: comments
    };
    articleComments(data, articleSlug);
    fetchComments(articleSlug);
  };

  render() {
    const { commentsMessage } = this.props;
    const comment = commentsMessage.map(message => (
      <section className="comments" key={message.id}>
        <article className="comment">
          <a className="comment-img" href="#non">
            <img src={message.author.image} alt="" width="50" height="50" />
          </a>
          <div className="comment-body">
            <div className="text">
              <p>{message.body}</p>
            </div>
            <p className="attribution">
              by <a href={`/profile/${message.author.username}`}>{message.author.username}</a> at {moment(message.createdAt).format(
                          "h:mm:ss a [on] MMMM Do YYYY.")}
                        
            </p>
          </div>
        </article>
      </section>
    ));
    return (
      <div className="row">
        <div className="col col-lg-1" />
        <div className="col col-lg-10">
          <div className="row">
            <div className="col col-lg-1" />
            <div className="col col-lg-11">
              <form
                method="POST"
                onSubmit={this.handleOnSubmit}
                className="comment-forms"
              >
                <textarea
                  className="form-control"
                  name="comments"
                  value={this.state.comments}
                  onChange={this.handleOnChange}
                >
                  comments here
                </textarea>
                <button
                  type="submit"
                  className="btn btn-comment"
                  style={{ marginTop: "10px" }}
                >
                  comment
                </button>
              </form>
            </div>
          </div>
          {comment}
        </div>
        <div className="col col-lg-1" />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  commentsSuccess: state.comments.success,
  commentsErrors: state.comments.errors,
  commentsMessage: state.getComments.comments
});
export default connect(
  mapStateToProps,
  { articleComments, fetchComments }
)(Comments);
