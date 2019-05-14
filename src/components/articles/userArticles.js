import React, { Component } from "react";
import { connect } from "react-redux";
import "../../styles/app.scss";
import moment from "moment";
import { getArticlesAction } from "../../actions/getArticles";
import { Link } from "react-router-dom";

export class UserArticles extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getArticlesAction("?email=" + sessionStorage.getItem("email"));
  }
  render() {
    const articles = this.props.articles;
    const articleList =
      articles && articles.length ? (
        articles.map(article => {
          return (
            <div className="article" key={article.slug}>
              <div className="inner">
                <div className="article-card">
                  <h3>{article.title.substring(0, 30)} ...</h3>
                  <p>
                    <b>{article.description.substring(0, 60)} ...</b>
                  </p>
                  <p>{article.body.substring(0, 60)} ...</p>
                  <span>
                    <b>Author: {article.author.username}</b>
                  </span>
                  <br />
                  <span className="card-date">
                    Created at{" "}
                    {moment(article.createdAt).format(
                      "HH:MM:SS [on] MMMM Do YYYY."
                    )}
                  </span>
                </div>
                <div className="img-div">
                  <img
                    src={
                      article.image
                        ? article.image
                        : "https://previews.123rf.com/images/twindesigner/twindesigner1708/twin" +
                          "designer170800135/84202763-ah-brush-letter-logo-design-with-black-" +
                          "circle-creative-brushed-letters-icon-logo-.jpg"
                    }
                    className="img-tile"
                  />
                </div>
                <div className="action-buttons">
                  <Link
                    to={{
                      pathname: "/edit-article/" + article.slug,
                      state: { article: article }
                    }}
                  >
                    Edit
                  </Link>
                  <button>Delete</button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div>No Articles in Authors Haven Yet</div>
      );
    return (
      <div className="big-container">
        <div className="user-articles">
          <div className="heading">
            <h3>{sessionStorage.getItem("username")}'s articles</h3>
          </div>
          <hr />
          {articleList}
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  articles: state.getArticlesReducer.articles
});

export default connect(
  mapStateToProps,
  { getArticlesAction }
)(UserArticles);
