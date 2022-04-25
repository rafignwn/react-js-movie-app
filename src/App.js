import React, { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./component/MovieList";
import SearchBar from "./component/SearchBar";
import useFetch from "./hooks/useFetch";
import Loader from "./component/Loader";
import MovieDetail from "./component/MovieDetail";
import { API_KEY, LINK_MOVIE } from "./Key";

export default function App() {
  const [url, setUrl] = useState(`${LINK_MOVIE}apikey=${API_KEY}&s=game`);
  const [movies, setMovies] = useState([]);
  const [idMovie, setIdMovie] = useState("");
  const { data, loading } = useFetch(url);

  useEffect(() => {
    data?.Search && setMovies(data?.Search);
  }, [data, movies]);

  const searchMovies = (keyword) => {
    console.log(keyword);
    setUrl(`${LINK_MOVIE}apikey=${API_KEY}&s=${keyword}`);
  };

  const showDetail = (id) => {
    setIdMovie(id);
  };

  const hideDetail = () => {
    setIdMovie("");
  };

  return (
    <>
      <MovieDetail handlerHideDetail={hideDetail} idMovie={idMovie} />
      <div className="container mt-1">
        <div className="title">
          <h1>MOVIE APP</h1>
        </div>
        <SearchBar handlerSearchMovie={searchMovies} />
        {loading ? (
          <Loader />
        ) : (
          <MovieList eventShowDetail={showDetail} movies={movies} />
        )}
      </div>
    </>
  );
}
