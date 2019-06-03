import React from "react";
import PropTypes from "prop-types";

const Comments = props => {
  return (
    <div>
      <h1>Username: {props.username}</h1>
      <p>{props.text}</p>
    </div>
  );
};

Comments.propTypes = {
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Comments;
