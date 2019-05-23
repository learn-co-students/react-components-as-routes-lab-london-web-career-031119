import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom"
import NavBar from './components/NavBar';

import Home from './components/Home';
import Actors from './components/Actors';
import Directors from './components/Directors';
import Movies from './components/Movies';
render((
  <Router>
    <React.Fragment>
      <NavBar />
      <Route path="/" component={Home} />
      <Route exact path="/actors" component={Actors} />
      <Route exact path="/directors" component={Directors} />
      <Route exact path="/movies" component={Movies} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
