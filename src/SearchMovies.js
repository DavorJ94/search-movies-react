import React from "react";

function SearchMovies() {
  const searchMovies = async (e) => {
    e.preventDefault();
    console.log("yello");
    const query = "Jurassic Park";
    const url = `https://api.themoviedb.org/3/movie/550?api_key=e26fad2d1d175e7f72a19adabbb4e414&language=en-US&query=${query}&page=1&include_adult=false`;
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
        />
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SearchMovies;
