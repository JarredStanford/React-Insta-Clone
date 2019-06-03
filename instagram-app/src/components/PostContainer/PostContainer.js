import React from "react";
import CommentSection from "../CommentSection/CommentSection";

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

export default PostContainer;
