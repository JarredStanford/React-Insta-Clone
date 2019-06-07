import React from "react";

//components
import Comments from "./Comments";
import CommentInput from "./CommentInput";

//styles
import IconButton from "@material-ui/core/IconButton";
import { StylesProvider } from "@material-ui/styles";
import styled from "styled-components";
import TimeAgo from "react-timeago";

class CommentSection extends React.Component {
  constructor() {
    super();
    this.state = {
      commentsData: [],
      text: "",
      likes: 0
    };
  }

  componentDidMount() {
    this.setState({
      commentsData: this.props.comments,
      text: "",
      likes: this.props.likes
    });
  }

  addLike = e => {
    this.setState(prevState => {
      return {
        likes: prevState.likes + 1
      };
    });
  };

  addNewComment = e => {
    e.preventDefault();
    console.log(this.props.time);
    const newComment = {
      username: localStorage.getItem("username"),
      id: this.state.commentsData.length + 1,
      text: this.state.text
    };
    this.setState({
      commentsData: [...this.state.commentsData, newComment],
      text: ""
    });
  };

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const dateFormat = this.props.time.split(",")[0].replace(/(th)/g, ",");
    console.log(dateFormat);
    return (
      <CommentContainer>
        <IconHolder>
          <StylesProvider injectFirst>
            <IconButton onClick={this.addLike}>
              <i className="far fa-heart fa-lg" />
            </IconButton>
          </StylesProvider>
          <IconButton>
            <CommentIcons className="far fa-comment fa-lg" />
          </IconButton>
        </IconHolder>

        <LikeCounter>{this.state.likes} likes</LikeCounter>
        {this.state.commentsData.map(comment => (
          <Comments key={comment.id} comments={comment} />
        ))}
        <TimeP>
          <TimeAgo date={dateFormat} />
        </TimeP>
        <CommentInput
          add={this.addNewComment}
          handle={this.handleChanges}
          comment={this.state.text}
        />
      </CommentContainer>
    );
  }
}

const CommentContainer = styled.section`
  font-size: 2rem;
  text-align: initial;
`;

const IconHolder = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1.5rem;
  padding-left: 1.5rem;
`;

const CommentIcons = styled.i`
  margin-left: 1.5rem;
`;

const LikeCounter = styled.p`
  font-size: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  margin-left: 1.5rem;
`;

const TimeP = styled.p`
  font-size: 1rem;
  color: #999;
  text-transform: uppercase;
  font-weight: 100;
  padding-left: 1.5rem;
`;
export default CommentSection;
