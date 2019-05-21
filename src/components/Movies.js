import React from "react";
import { movies } from "../data";

const renderMovies = () => {
  return movies.map(movie => (
    <div>
      <h2>{movie.title}</h2>
      <p>Time: {movie.time}</p>
      <p>Genres:</p>
      <ul>
        {movie.genres.map(genre => (
          <li>{genre}</li>
        ))}
      </ul>
    </div>
  ));
};

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {renderMovies()}
    </div>
  );
};

export default Movies;
