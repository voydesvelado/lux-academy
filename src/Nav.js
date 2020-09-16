import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav id="navbar">
      <ul className="nav-links">
        <NavLink to="/Galeria" activeClassName="is-active">
          <li>Checa la galería de nuestros alumnos egresados</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Nav;
