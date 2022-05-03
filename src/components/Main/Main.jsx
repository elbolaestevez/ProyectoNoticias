import React, { Component } from "react";
import ListNews from "./ListNews";
import Form from "./Form/Form";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";

class Main extends Component {
  state = {
    userArticles: this.props.userArticles,
  };

  updateArticles = (newArticle) => {
    this.setState({
      userArticles: [newArticle],
    });
  };

  render() {
    return (
      <div className="list">
        <Routes>
          <Route
            element={<ListNews userArticles={this.state.userArticles} />}
            path="/list"
          />
          <Route
            element={<Form updateArticles={this.updateArticles} />}
            path="/form"
          />

          <Route element={<Home />} path="/home" />
        </Routes>
      </div>
    );
  }
}

export default Main;
Main.defaultProps = {
  userArticles: [],
};
