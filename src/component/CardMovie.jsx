import React from "react";

export default function CardMovie({ movie }) {
  return (
    <div className="card-movie" key={movie.imdbID}>
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
        <p className="year">{movie.Year}</p>
      </div>
    </div>
  );
}
