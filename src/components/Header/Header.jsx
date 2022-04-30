import React, { Component } from "react";
import Nav from "./Nav/Nav";
import { userContext } from "../../context/userContext";

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <Nav />
        <div className="user">
          <userContext.Consumer>
            {({ user, logout }) => {
              if (user) {
                return (
                  <>
                    <p>Hola, {user}</p>
                    <button onClick={logout}>Logout</button>
                  </>
                );
              }
            }}
          </userContext.Consumer>
        </div>
      </header>
    );
  }
}

export default Header;
