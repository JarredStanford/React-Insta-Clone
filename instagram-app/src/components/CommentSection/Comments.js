import React from "react";
import PropTypes from "prop-types";

const Comments = props => {
  return (
    <div>
      <h1>Username: {props.comments.username}</h1>
      <p>{props.comments.text}</p>
    </div>
  );
};

Comments.propTypes = {
  comments: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
};

export default Comments;
