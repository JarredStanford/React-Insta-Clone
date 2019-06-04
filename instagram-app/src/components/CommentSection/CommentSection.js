import React from "react";
import Comments from "./Comments";
import CommentInput from "./CommentInput";

const CommentSection = props => {
  return (
    <div>
      {props.comments.map(comment => (
        <Comments key={comment.id} comments={comment} />
      ))}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
