import React from "react";

//components
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

//styles
import "./App.css";

//data
import dummyData from "./dummy-data";

function App() {
  return (
    <div className="App">
      <header>
        <SearchBar />
      </header>
      <div>
        <h1>
          {dummyData.map(data => (
            <PostContainer key={data.id} dataOnProps={data} />
          ))}
        </h1>
      </div>
    </div>
  );
}

export default App;
