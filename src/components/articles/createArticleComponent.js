import React from "react";
import "../../styles/createArticles.scss";
import "../../styles/singleArticle.scss";
import ReactQuill from "react-quill";
import { modules, formats } from "./quillModules";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";

const CreateArticleComponent = props => {
  const { onChange, onSubmit, onUpload, onBodyChange, image, article, body } = props;

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
                defaultValue={article ? article.title : ""}
              />
            </div>
            <div className="form-group">
              <input
                onChange={onChange}
                className="form-control"
                placeholder="description"
                name="description"
                id="description"
                defaultValue={article ? article.description : ""}
              />
            </div>
            <div className="form-group">
              <ReactQuill
                onChange={onBodyChange}
                className="text-area"
                placeholder="Body"
                name="body"
                value={body}
                formats={formats}
                modules={modules}
              />
            </div>
            <div className="form-group">
              <input
                onChange={onChange}
                className="form-control"
                placeholder="tags"
                name="tags"
                id="tags"
                defaultValue={
                  article
                    ? article.tagList
                      ? article.tagList.join(",")
                      : ""
                    : ""
                }
              />
              <div>
                <i>Separate your tags with a comma</i>
              </div>
            </div>
            <div className="image-div">
              <div className="actual-image">
                <img
                  src={image ? image : article ? article.image : " "}
                  className="image-fluid"
                />
              </div>
              <input
                type="file"
                name="imageUpload"
                onChange={event => onUpload(event.target.files)}
                id="fitz"
              />
            </div>

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
