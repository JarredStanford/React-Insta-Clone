import React from "react";

//components
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

//styles
import "./App.css";

//data
import dummyData from "./dummy-data";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: [],
      username: ""
    };
  }

  componentDidMount() {
    this.setState({
      userData: dummyData
    });
  }

  search = e => {
    e.preventDefault();
    const searchTerm = this.state.username;
    const filteredData = this.state.userData.filter(user =>
      user.username.includes(searchTerm)
    );
    this.setState({
      userData: filteredData,
      username: ""
    });
  };

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <SearchBar
            search={this.search}
            handle={this.handleChanges}
            username={this.state.username}
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

export default App;
