import React, { Component } from "react";
import { userContext } from "../../../context/userContext";

class Home extends Component {
  static contextType = userContext; //Para consumir contexto por Js
  constructor(props) {
    super(props);

    this.state = {
      user: "",
    };
  }
  login = (event) => {
    event.preventDefault();
    const user = event.target.user.value;
    this.setState({ user });
    //Guardar en el contexto de User
    this.context.login(user);
  };

  render() {
    return (
      <div>
        <h1>Home</h1>
        <form onSubmit={this.login}>
          <label> Nombre de Usuario</label>
          <input type="text" id="user" name="user" />
          <input type="submit" value="Enviar" />
        </form>
        {/* <p>Usuario introducido:{this.state.user ? this.state.user : "--"}</p> */}
      </div>
    );
  }
}

export default Home;
