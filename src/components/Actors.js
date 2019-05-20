import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor =>
        <div className='actor' key={actor.name} >
          {actor.name}
          <br/>
          Movies: {actor.movies.reduce((acc, cur) => acc + ', ' + cur )}
        </div>  
      )}
    </div>
  );
};

export default Actors;
