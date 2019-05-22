import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/app.scss";
import moment from "moment";
import { Link } from "react-router-dom";
import { getArticlesAction } from "../actions/getArticles";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.fetchNext = this.fetchNext.bind(this);
    this.fetchPrevious = this.fetchPrevious.bind(this);
  }
  componentDidMount() {
    const { getArticlesAction } = this.props;
    getArticlesAction();
  }
  fetchNext() {
    const { next, getArticlesAction } = this.props;
    getArticlesAction(next);
  }
  fetchPrevious() {
    const { previous, getArticlesAction } = this.props;
    getArticlesAction(previous);
  }
  render() {
    const { articles } = this.props;
    const articleList = articles.length ? (
      articles.map(article => {
        return (
          <div className="article" key={article.slug}>
            <div className="inner">
              <Link
                className="links"
                to={{
                  pathname: "/article/" + article.slug
                }}
              >
                <div className="article-card">
                  <h3>{article.title.substring(0, 30)} ...</h3>
                  <p>
                    <b>{article.description.substring(0, 60)} ...</b>
                  </p>
                  <span>
                    <b>Author: {article.author.username}</b>
                  </span>
                  <br />

                  <span className="card-date">
                    Created at{" "}
                    {moment(article.createdAt).format(
                      "h:mm:ss a [on] MMMM Do YYYY."
                    )}
                  </span>
                  <br />
                  <p>
                    <b>{article.reading_time}</b>
                  </p>
                </div>

                <div>
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
              </Link>
            </div>
          </div>
        );
      })
    ) : (
      <div>No Articles in Authors Haven Yet</div>
    );

    return (
      <div className="big-container">
        <div className="articles-top">
          <div className="best-article">
            <div className="inner">
              <img
                src={
                  "http://allpicts.in/download/22916/2018/03/Natural_Images_HD_1" +
                  "080p_Download_with_Waterfall_in_Tollymore_Forest_Park-1440x900.jpg/"
                }
                className="img-top"
              />
              <div className="inner">
                <div className="inner">
                  <div className="best-article-card">
                    <h3>
                      Facebook's Plan to Fuse its Messaging Apps Is Not about
                      Your Privacy Just follow the Money
                    </h3>
                    <span>
                      <b>Author: Yasha Levin in OneZero</b>
                    </span>
                    <br />
                    <span className="card-date">Created a few hours ago</span>
                  </div>
                </div>
              </div>
            </div>
            <div />
          </div>
          <div className="top-articles">{articleList}</div>
          <div className="top-articles">{articleList}</div>
        </div>

        <div className="articles">
          <div className="heading">
            <h3>Featured Articles</h3>
          </div>
          <hr />
          {articleList}
        </div>
        <div className="articles1">
          <div className="heading">
            <h3>Popular Articles</h3>
          </div>
          <hr />
          {articleList}
        </div>
        <div>
          <button
            className="btn btn-outline-success btn eian"
            onClick={() => this.fetchPrevious()}
          >
            Previous
          </button>{" "}
          <button
            className="btn btn-outline-success btn aken"
            onClick={() => this.fetchNext()}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  articles: state.getArticlesReducer.articles,
  next: state.getArticlesReducer.next,
  previous: state.getArticlesReducer.previous
});

export default connect(
  mapStateToProps,
  { getArticlesAction }
)(Home);
