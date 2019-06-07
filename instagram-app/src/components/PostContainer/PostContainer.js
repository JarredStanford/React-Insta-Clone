import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
import styled from "styled-components";

//styles
import "./PostContainer.css";

const PostContainer = props => {
  return (
    <div className={props.dataOnProps.display}>
      <PostHolder>
        <PostOwner>
          <UserThumbnail
            src={props.dataOnProps.thumbnailUrl}
            alt={props.dataOnProps.timestamp}
          />
          <UserName>{props.dataOnProps.username}</UserName>
        </PostOwner>
        <PostImage src={props.dataOnProps.imageUrl} alt="UserImage" />

        <CommentSection
          comments={props.dataOnProps.comments}
          likes={props.dataOnProps.likes}
          time={props.dataOnProps.timestamp}
        />
      </PostHolder>
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

const PostHolder = styled.div`
  width: 614px;
  display: flex;
  flex-direction: column;
  margin: auto;
  border: 1px solid rgb(239, 239, 239);
  margin-bottom: 2rem;
`;

const PostOwner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
`;

const UserThumbnail = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.0975);
`;

const UserName = styled.p`
  margin: 0;
  margin-left: 1.5rem;
  font-size: 14px;
`;

const PostImage = styled.img`
  width: 614px;
  height: 614px;
`;

export default PostContainer;
