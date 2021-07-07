import React from "react";

//styles
import styled from "styled-components";

const CommentInput = props => {
  return (
    <CommentForm onSubmit={props.add}>
      <AddCommentInput
        placeholder="Add a comment..."
        onChange={props.handle}
        name="text"
        value={props.comment}
      />
    </CommentForm>
  );
};

const CommentForm = styled.form`
  border-top: 1px solid rgb(239, 239, 239);
  padding-left: 1.6rem
  padding-right: 1.6rem
`;

const AddCommentInput = styled.input`
  height: 5rem
  width: 100%;
  padding-right: 0;
  border: none;
  color: black
  &:focus {
    outline: none
  }
  &::placeholder {
    color: #999
  }
`;

export default CommentInput;
