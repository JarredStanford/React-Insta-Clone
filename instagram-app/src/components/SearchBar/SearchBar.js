import React from "react";

//styles
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <nav>
      <div className="logos">
        <a href="http://localhost:3000/?" className="camera-logo">
          <img src="https://i.imgur.com/AS5Embp.png" alt="Logo" />
        </a>
        <div className="divider" />
        <a href="http://localhost:3000/?">
          <img
            className="script-logo"
            src="https://i.imgur.com/24NDDNh.jpg"
            alt="Script Logo"
          />
        </a>
      </div>
      <form className="search">
        <input placeholder="Search" />
      </form>
      <div className="header-logos">
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </div>
    </nav>
  );
};

export default SearchBar;
