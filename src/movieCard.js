import React from "react";
export default function movieCard({ movies }) {
  return (
    <div className="card-list">
      {movies
        .filter((movie) => movie.poster_path)
        .map((movie) => (
          <div className="card" key={movie.id}>
            <img
              className="card__img"
              src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
              alt={`${movie.title} poster`}
            />
            <div className="card__content">
              <h3 className="card__title">{movie.title}</h3>
              <p className="card__release">
                <small>Release date: {movie.release_date}</small>
              </p>
              <p className="card__rating">
                <small>Average rating: {movie.vote_average}</small>
              </p>
              <p className="card__description">{movie.overview}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
