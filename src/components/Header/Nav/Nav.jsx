import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <Link to="/home">Home</Link>
        <br />
        <Link to="/list">Articulos</Link>
        <br />
        <Link to="/form">Crear Noticia</Link>
        <br />
      </nav>
    );
  }
}

export default Nav;
