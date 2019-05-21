import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const link = {
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white"
  };

  return (
    <div className="navbar">
      <NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add styling to Navlink */
        style={link}
        /* add prop for activeStyle */
        activeStyle={{
          background: "darkblue"
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/actors"
        exact
        style={link}
        activeStyle={{
          background: "darkblue"
        }}
      >
        Actors
      </NavLink>
      <NavLink
        to="/directors"
        exact
        style={link}
        activeStyle={{
          background: "darkblue"
        }}
      >
        Directors
      </NavLink>
      <NavLink
        to="/movies"
        exact
        style={link}
        activeStyle={{
          background: "darkblue"
        }}
      >
        Movies
      </NavLink>
    </div>
  );
};

export default NavBar;
