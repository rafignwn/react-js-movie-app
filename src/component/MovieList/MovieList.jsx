import React from "react";
import CardMovie from "../CardMovie/CardMovie";
import Loader from "../Loading/Loader";
import "./movieListStyles.css";

export default function MovieList({ eventShowDetail, movies }) {
  return (
    <div className="movie-list">
      {movies.Error ? (
        <Loader />
      ) : movies ? (
        movies?.map((movie) => (
          <CardMovie
            key={movie.imdbID}
            showDetail={eventShowDetail}
            movie={movie}
          />
        ))
      ) : (
        <div className="not-found">
          <h1>No Movie Found</h1>
        </div>
      )}
    </div>
  );
}
