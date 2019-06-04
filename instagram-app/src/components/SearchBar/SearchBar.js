import React from "react";

const SearchBar = props => {
  return (
    <div>
      <a href="http://localhost:3000/?">
        <img
          src="https://cdn130.picsart.com/259430940027212.png?r1024x1024"
          alt=""
        />
      </a>
      <form>
        <input placeholder="Search" />
      </form>
    </div>
  );
};

export default SearchBar;
