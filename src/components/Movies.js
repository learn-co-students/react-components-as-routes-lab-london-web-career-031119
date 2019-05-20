import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movies.map(movie =>
          <div className="movie" key={movie.title}>
            {movie.title}
            <br/>
            Time (minutes): {movie.time}
            <br/>
            Genres: {movie.genres.reduce((acc, cur) => acc + ', ' + cur)}
            <br/>
            {movie.metascore? 'Metascore: ' + movie.metascore : null}
          </div>
        )}
    </div>
  );
};

export default Movies;
