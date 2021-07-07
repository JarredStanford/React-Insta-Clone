import React from "react";
import PropTypes from "prop-types";

//styles
import styled from "styled-components";

const Comments = props => {
  return (
    <div>
      <CommentText>
        <UserSpan>{props.comments.username}</UserSpan>
        {props.comments.text}
      </CommentText>
    </div>
  );
};

Comments.propTypes = {
  comments: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  })
};

const UserSpan = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;

const CommentText = styled.p`
  font-weight: normal;
  font-size: 1.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
`;
export default Comments;
