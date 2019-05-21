import React from "react";
import { movies } from "../data";

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => {
        return (
          <div key={index}>
            <h3>{movie.title}</h3>
            <h3>{movie.time}</h3>
            <ul>
              {movie.genres.map((genre, index2) => {
                return <li key={index2}>{genre}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Movies;
