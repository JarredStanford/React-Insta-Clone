import React from "react";
import Comments from "./Comments";
import CommentInput from "./CommentInput";
import Heart from "./hearticon";
import IconButton from "@material-ui/core/IconButton";
import { StylesProvider } from "@material-ui/styles";

//styles
import "./CommentSection.css";

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
    return (
      <section className="comment-section">
        <div className="comment-icons">
          <StylesProvider injectFirst>
            <IconButton onClick={this.addLike} className="like-button">
              <Heart />
            </IconButton>
          </StylesProvider>
          <button>comments</button>
        </div>
        <div className="like-counter">
          <p>{this.state.likes} likes</p>
        </div>
        {this.state.commentsData.map(comment => (
          <Comments key={comment.id} comments={comment} />
        ))}
        <CommentInput
          add={this.addNewComment}
          handle={this.handleChanges}
          comment={this.state.text}
        />
      </section>
    );
  }
}

export default CommentSection;
