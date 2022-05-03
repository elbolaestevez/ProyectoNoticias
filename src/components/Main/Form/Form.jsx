import React, { Component } from "react";
import { Navigate } from "react-router-dom";
class Form extends Component {
  state = { redirect: false };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.updateArticles({
      headline: {
        main: this.state.nombre,
      },
      web_url: this.state.url,
      abstract: this.state.abstract,
    });
    this.setState({ redirect: true });
  };

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Navigate to="/list" />;
    }
    return (
      <div
        style={{
          background: "cyan",
          borderRadius: "20px",
          border: "2px solid black",
          padding: 10,
        }}
      >
        <h1>Formulario para articulo</h1>
        <form className="row" onSubmit={this.onSubmit}>
          <div className="col-md-3">
            <input
              placeholder="Ingrese Nombre"
              type="text"
              className="form-control"
              name="nombre"
              onChange={this.handleInputChange}
            ></input>
          </div>
          <div className="col-md-3">
            <input
              type="url"
              name="url"
              placeholder="https://example.com"
              pattern="https://.*"
              className="form-control"
              onChange={this.handleInputChange}
            ></input>
          </div>
          <div className="col-md-3">
            <input
              type="text"
              name="abstract"
              className="form-control"
              onChange={this.handleInputChange}
            ></input>
          </div>
          <div className="col-md-3">
            <button>Enviar</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
