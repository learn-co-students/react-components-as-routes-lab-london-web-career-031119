import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => <div>
        {actor.name}
        {actor.movies.map(movie =>
          <ul>{movie}</ul>)
        }
      </div>)
      }
    </div>
  );
};

export default Actors;
