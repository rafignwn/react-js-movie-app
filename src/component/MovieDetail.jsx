import React, { useEffect, useState } from "react";
import { API_KEY, LINK_MOVIE } from "../Key";

export default function MovieDetail({ handlerHideDetail, idMovie }) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${LINK_MOVIE}apiKey=${API_KEY}&i=${idMovie}`)
      .then((response) => response.json())
      .then((result) => setMovie(result))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, [idMovie]);

  return (
    <div className={`movie-detail ${idMovie && "show-detail"}`}>
      {isLoading ? (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      ) : movie.Error ? (
        <div className="not-found">
          <h2>{movie.Error}</h2>
        </div>
      ) : (
        <>
          <button className="btn-close" onClick={handlerHideDetail}>
            Close
          </button>
          <div className="detail-on-hp">
            <h1 className="movie-title">{movie?.Title}</h1>
            <p className="year-type">
              {movie?.Year.length === 5 ? movie?.Year.slice(0, 4) : movie?.Year}{" "}
              | {movie?.Type}
            </p>
          </div>
          <div className="detail-image">
            <img
              src={
                movie?.Poster === "N/A"
                  ? "https://via.placeholder.com/300x400/"
                  : movie?.Poster
              }
              alt={movie?.Title}
            />
          </div>
          <div className="detail-info">
            <h1 className="movie-title">{movie?.Title}</h1>
            <p className="year-type">
              {movie?.Year.length === 5 ? movie?.Year.slice(0, 4) : movie?.Year}{" "}
              | {movie?.Type}
            </p>
            <p className="mt-1 detail-etc">
              {movie?.Runtime} | {movie?.Genre} | {movie.Released}
            </p>
            <p className="mt-1 movie-plot">{movie?.Plot}</p>
            <p className="mt-1 movie-rating">
              <span className="sub-title">Rating: </span> {movie?.imdbRating} /
              10 | from {movie?.imdbVotes} users
            </p>
            <p className="movie-metascore">
              <span className="sub-title">Metascore: </span> {movie.Metascore}
            </p>
            <p className="mt-1 writer">
              <span className="sub-title">Writer: </span> {movie?.Writer}
            </p>
            <p className="actor">
              <span className="sub-title">Actors: </span> {movie?.Actors}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
