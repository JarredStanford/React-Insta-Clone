import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";

//styles
import "./PostContainer.css";

const PostContainer = props => {
  return (
    <div className="post-container">
      <div className="username">
        <a href="#">
          <img
            src={props.dataOnProps.thumbnailUrl}
            alt={props.dataOnProps.timestamp}
          />
        </a>
        <p>{props.dataOnProps.username}</p>
      </div>
      <img src={props.dataOnProps.imageUrl} alt="image" />
      <h1>
        <CommentSection comments={props.dataOnProps.comments} />
      </h1>
    </div>
  );
};

PostContainer.propTypes = {
  dataOnProps: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired
  })
};

export default PostContainer;
