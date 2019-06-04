import React from "react";

const CommentInput = props => {
  return (
    <form onSubmit={props.add}>
      <input
        placeholder="Add Comment..."
        onChange={props.handle}
        name="text"
        value={props.comment}
      />
    </form>
  );
};

export default CommentInput;
