import React, { useState } from "react";
import MovieCard from "./movieCard";

function SearchMovies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=e26fad2d1d175e7f72a19adabbb4e414&language=en-US&query=${query}&page=1&include_adult=false`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form className="form" onSubmit={searchMovies}>
        <label htmlFor="query" className="label">
          Movie name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="Search movies"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Submit
        </button>
      </form>
      <MovieCard movies={movies} />
    </div>
  );
}

export default SearchMovies;
