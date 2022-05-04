import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo.png";
class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <div class="nav__left">
          <img src={logo} alt="logo" class="nav__left__logo" />
        </div>
        <div class="nav__right">
          <Link to="/home">Home</Link>

          <Link to="/list">Articulos</Link>
          <Link to="/form">Crear Noticia</Link>
        </div>
      </nav>
    );
  }
}

export default Nav;
