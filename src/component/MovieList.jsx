import React from "react";
import CardMovie from "./CardMovie";

export default function ({ movies }) {
  return (
    <div className="movie-list">
      {movies ? (
        movies?.map((movie) => <CardMovie key={movie.imdbID} movie={movie} />)
      ) : (
        <h1>No Movie Found</h1>
      )}
    </div>
  );
}
