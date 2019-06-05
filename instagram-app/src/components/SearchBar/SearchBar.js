import React from "react";

//styles
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <nav>
      <div className="logos">
        <a href="#" className="camera-logo">
          <img src="https://i.imgur.com/AS5Embp.png" alt="Logo" />
        </a>
        <div className="divider" />
        <a href="#">
          <img
            className="script-logo"
            src="https://i.imgur.com/24NDDNh.jpg"
            alt="Script Logo"
          />
        </a>
      </div>
      <form onInput={props.search} className="search">
        <input
          placeholder="Search"
          onChange={props.handle}
          name="username"
          value={props.username}
        />
      </form>
      <div className="header-logos">
        <p>1</p>
        <p>2</p>
        <button onClick={props.logout}>Log Out</button>
      </div>
    </nav>
  );
};

export default SearchBar;
