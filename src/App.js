import React, { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./component/MovieList";
import SearchBar from "./component/SearchBar";
import useFetch from "./hooks/useFetch";
import Loader from "./component/Loader";

const API_KEY = "ab7007da";

export default function App() {
  const [url, setUrl] = useState(
    `http://www.omdbapi.com/?apikey=${API_KEY}&s=game`
  );
  const [movies, setMovies] = useState([]);
  const { data, loading } = useFetch(url);

  useEffect(() => {
    setMovies(data?.Search);
  }, [data, movies]);

  const searchMovies = (keyword) => {
    console.log(keyword);
    setUrl(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${keyword}`);
  };
  return (
    <div className="container mt-1">
      <div className="title">
        <h1>MOVIE APP</h1>
      </div>
      <SearchBar handlerSearchMovie={searchMovies} />
      {loading ? <Loader /> : <MovieList movies={movies} />}
    </div>
  );
}
