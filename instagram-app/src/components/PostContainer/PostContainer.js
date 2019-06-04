import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";

const PostContainer = props => {
  return (
    <div>
      <a href={props.dataOnProps.imageUrl}>
        <img
          src={props.dataOnProps.thumbnailUrl}
          alt={props.dataOnProps.timestamp}
        />
      </a>
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
