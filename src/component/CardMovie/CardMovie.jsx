import React from "react";
import "./cardMovieStyles.css";

export default function CardMovie({ showDetail, movie }) {
  return (
    <div
      className="card-movie"
      key={movie.imdbID}
      onClick={() => showDetail(movie.imdbID)}
    >
      <div className={`type ${movie.Type}`}>{movie.Type}</div>
      <img
        src={
          movie.Poster === "N/A"
            ? "https://via.placeholder.com/300x400/"
            : movie.Poster
        }
        alt={movie.Title}
      />
      <div className="desc">
        <p className="title">{movie.Title}</p>
        <p className="year">
          {movie?.Year.length === 5 ? movie?.Year.slice(0, 4) : movie?.Year}
        </p>
      </div>
    </div>
  );
}
