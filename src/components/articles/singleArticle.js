import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";

import "../../styles/singleArticle.scss";
import { getArticleAction } from "../../actions/getArticle";

export class SingleArticleComponent extends Component {
  componentDidMount() {
    this.props.getArticleAction(this.props.match.params.slug);
  }

  render() {
    const { article } = this.props;
    const oneArticle = article ? article.article : null;
    const singleArticle = oneArticle ? (
      <div className="container">
        <div className="single-article-div">
          <div className="inner">
            <h2 className="article-title">{oneArticle.title}</h2>
            <div>
              <div>
                <div className="">
                  <div className="article-profile">
                    <img
                      src={
                        oneArticle.author.image
                          ? oneArticle.author.image
                          : "https://static.wixstatic.com/media/2cd43b_4ef9dc9638cc431b956e1c36862b519b~mv2.png?dn="
                      }
                      alt="profile pic"
                    />
                  </div>
                  <div className="article-author">
                    {oneArticle.author.username}
                    <button className="btn btn-primary follow">follow</button>

                    <div className="article-time-stamps">
                      <div>
                        Created at{" "}
                        {moment(oneArticle.createdAt).format(
                          "h:mm:ss a [on] MMMM Do YYYY."
                        )}
                      </div>
                      <div>
                        modified at{" "}
                        {moment(oneArticle.updatedAt).format(
                          "h:mm:ss a [on] MMMM Do YYYY."
                        )}
                        .
                      </div>
                      <div>{oneArticle.reading_time}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="article-single">
          <div className="article-description-body">
            <p>{oneArticle.description}</p>
          </div>
          <div className="image-div">
            <img
              src={
                oneArticle.image
                  ? oneArticle.image
                  : "https://previews.123rf.com/images/twindesigner/twindesigner1708/twin" +
                    "designer170800135/84202763-ah-brush-letter-logo-design-with-black-" +
                    "circle-creative-brushed-letters-icon-logo-.jpg"
              }
              className="article-image"
            />
          </div>

          <div className="article-description-body">
            <p style={{ fontWeight: "light" }}>{oneArticle.body}</p>
          </div>
        </div>
      </div>
    ) : (
      <div>The article you have requested does not exist</div>
    );
    return <div>{singleArticle}</div>;
  }
}

export const mapStateToProps = state => ({
  article: state.getArticleReducer.article
});

export default connect(
  mapStateToProps,
  { getArticleAction }
)(SingleArticleComponent);
