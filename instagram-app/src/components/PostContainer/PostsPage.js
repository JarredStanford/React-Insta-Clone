import React from "react";

//components
import PostContainer from "./PostContainer";
import SearchBar from "../SearchBar/SearchBar";

//styles

//data
import dummyData from "../../dummy-data";

class PostsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: [],
      username: "",
      display: ""
    };
  }

  componentDidMount() {
    const data = dummyData.map(user => {
      const userWithDisplay = { ...user, display: "" };
      return userWithDisplay;
    });
    this.setState({
      userData: data,
      display: ""
    });
  }

  search = e => {
    e.preventDefault();
    const searchTerm = e.target.value;
    this.setState(prevState => ({
      userData: prevState.userData.map(user => {
        if (user.username.includes(searchTerm)) {
          user.display = "";
          return user;
        } else {
          user.display = "no";
          return user;
        }
      })
    }));
  };
  /*this.setState({
        userData: filteredData,
        username: ""
      });*/
  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  logOut = e => {
    window.location.reload();
    localStorage.removeItem("username", localStorage.getItem("username"));
  };

  render() {
    return (
      <div className="App">
        <header>
          <SearchBar
            search={this.search}
            handle={this.handleChanges}
            username={this.state.username}
            logout={this.logOut}
          />
        </header>
        <div>
          <h1>
            {this.state.userData.map(data => (
              <PostContainer key={data.id} dataOnProps={data} />
            ))}
          </h1>
        </div>
      </div>
    );
  }
}

export default PostsPage;
