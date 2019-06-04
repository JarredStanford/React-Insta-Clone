import React from "react";
import PropTypes from "prop-types";

const Comments = props => {
  return (
    <div>
      <p>{props.comments.username}</p>
      <p>{props.comments.text}</p>
    </div>
  );
};

Comments.propTypes = {
  comments: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  })
};

export default Comments;
