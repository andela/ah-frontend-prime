import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { Link, withRouter } from "react-router-dom";
import FollowsButton from "../FollowsButton";
import { followUser, unfollowUser } from "../../actions/profileActions";
import { likeArticle, dislikeArticle } from "../../actions/LikeDislikeActions";
import like from "../../styles/images/like.png";
import dislike from "../../styles/images/dislike.png";

import "../../styles/singleArticle.scss";
import { getArticleAction } from "../../actions/getArticle";

export class SingleArticleComponent extends Component {
  state = {
    likes: 0,
    dislikes: 0
  };
  componentDidMount() {
    this.props.getArticleAction(this.props.match.params.slug);
  }
  componentWillReceiveProps(newProps) {
    const { likes, dislikes } = newProps;
    this.setState({
      likes: likes,
      dislikes: dislikes
    });
  }

  handlefollowUser = () => {
    const { followUser } = this.props;
    const username = sessionStorage.getItem("userview_name");
    followUser(username);
  };

  handlelike = () => {
    const { likeArticle } = this.props;
    const slug = this.props.match.params.slug;
    likeArticle(slug);
  };

  handledislike = () => {
    const { dislikeArticle } = this.props;
    const slug = this.props.match.params.slug;
    dislikeArticle(slug);
  };

  handleunfollowUser = () => {
    const { unfollowUser } = this.props;
    const username = sessionStorage.getItem("userview_name");
    unfollowUser(username);
  };

  isOwner = username =>
    username === sessionStorage.getItem("username") ? true : false;

  render() {
    const { isfollowing, article } = this.props;
    const { likes, dislikes } = this.state;
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
                    <div>
                      {this.isOwner(oneArticle.author.username) ? (
                        <button>Edit</button>
                      ) : (
                        <FollowsButton
                          followUser={this.handlefollowUser}
                          unfollowUser={this.handleunfollowUser}
                          isfollowing={isfollowing === "True" ? true : false}
                        />
                      )}
                    </div>
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
          <div>
            <img
              onClick={this.handlelike}
              src={like}
              style={{ width: "30px", height: "30px" }}
            />
            {likes}
            <div className="divider" />
            <img
              onClick={this.handledislike}
              src={dislike}
              style={{ width: "30px", height: "30px" }}
            />
            {dislikes}
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
  article: state.getArticleReducer.article,
  isfollowing: state.profileReducer.isfollowing,
  likes: state.getArticleReducer.likes,
  dislikes: state.getArticleReducer.dislikes
});

export default withRouter(
  connect(
    mapStateToProps,
    { getArticleAction, followUser, unfollowUser, likeArticle, dislikeArticle }
  )(SingleArticleComponent)
);
