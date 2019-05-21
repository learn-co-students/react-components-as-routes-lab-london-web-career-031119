import React from "react";
import { actors } from "../data";

const renderActors = () =>
  actors.map(actor => (
    <div className="actor">
      <h2>Name: {actor.name}</h2>
      <p>Movies:</p>
      <ul>
        {actor.movies.map(movie => (
          <li>{movie}</li>
        ))}
      </ul>
    </div>
  ));

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

export default Actors;
