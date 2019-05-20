import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director =>
        <div className='director' key={director.name} >
          {director.name}
          <br/>
          Movies: {director.movies.reduce((acc, cur) => acc + ', ' + cur )}
        </div>  
      )}
    </div>
  );
}

export default Directors
