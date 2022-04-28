import React, { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./component/MovieList/MovieList";
import SearchBar from "./component/SearchBar/SearchBar";
import useFetch from "./hooks/useFetch";
import Loader from "./component/Loading/Loader";
import MovieDetail from "./component/MovieDetail/MovieDetail";
import { API_KEY, LINK_MOVIE } from "./Key";
import Footer from "./component/Footer/Footer";
import ErrorMessage from "./component/Error/ErrorMessage";

export default function App() {
  const [url, setUrl] = useState(`${LINK_MOVIE}apikey=${API_KEY}&s=game`);
  const [movies, setMovies] = useState([]);
  const [idMovie, setIdMovie] = useState("");
  const { data, loading, error } = useFetch(url);

  useEffect(() => {
    data?.Search && setMovies(data?.Search);
  }, [data, movies]);

  const searchMovies = (keyword) => {
    console.log(keyword);
    setUrl(`${LINK_MOVIE}apikey=${API_KEY}&s=${keyword}`);
  };

  return (
    <>
      <MovieDetail handlerHideDetail={() => setIdMovie("")} idMovie={idMovie} />
      <div className="container">
        <div className="title">
          <h1>MOVIE APP</h1>
        </div>
        <SearchBar handlerSearchMovie={searchMovies} />
        {loading ? (
          <Loader />
        ) : error ? (
          <>
            <Loader />
            <ErrorMessage
              handlerRefresh={() => window.location.reload()}
              message={error.message}
            />
          </>
        ) : (
          <MovieList eventShowDetail={(id) => setIdMovie(id)} movies={movies} />
        )}
        <Footer posisi={error || loading ? "pa" : "pr"} />
      </div>
    </>
  );
}
