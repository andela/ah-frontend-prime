import React from "react";
import "../../styles/createArticles.scss";
import "../../styles/singleArticle.scss";
const CreateArticleComponent = props => {
  const { onChange, onSubmit, onUpload, image } = props;
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col col-lg-3" />
        <div className="col col-lg-6">
          <h1>Tell A story</h1>
          <form>
            <div className="form-group">
              <input
                onChange={onChange}
                className="form-control"
                placeholder="title"
                name="title"
                id="title"
              />
            </div>
            <div className="form-group">
              <input
                onChange={onChange}
                className="form-control"
                placeholder="description"
                name="description"
                id="description"
              />
            </div>
            <div className="form-group">
              <textarea
                onChange={onChange}
                className="form-control"
                placeholder="Body"
                name="body"
                id="body"
              />
            </div>
            <div className="form-group">
              <input
                onChange={onChange}
                className="form-control"
                placeholder="tags"
                name="tags"
                id="tags"
              />
              <div>
                <i>Separate your tags with a comma</i>
              </div>
            </div>
            <div className="image-div">
              <div className="actual-image">
                <img src={image} className="image-fluid" />
              </div>
              <input
                type="file"
                name="imageUpload"
                onChange={event => onUpload(event.target.files)}
                id="fitz"
              />
            </div>

            <input name="image" />
            <div className="form-group">
              <button onClick={onSubmit} className="btn btn-primary">
                Publish Story
              </button>
            </div>
          </form>
        </div>
        <div className="col col-lg-3" />
      </div>
    </div>
  );
};

export default CreateArticleComponent;
