import React, { useState } from "react";
import { ReactComponent as IconSearch } from "./../search-icon.svg";

export default function SearchBar({ handlerSearchMovie }) {
  const [keywordMovie, setKeywordMovie] = useState("");

  function handlerSubmit(e) {
    e.preventDefault();
    handlerSearchMovie(keywordMovie || "game");
  }
  return (
    <div className="search">
      <div className="search-bar">
        <form onSubmit={handlerSubmit}>
          <input
            type="text"
            placeholder="Search title of movie"
            value={keywordMovie}
            onChange={(e) => setKeywordMovie(e.target.value)}
            className="form"
          />
          <button className="btn" type="submit">
            <IconSearch />
          </button>
        </form>
      </div>
    </div>
  );
}
