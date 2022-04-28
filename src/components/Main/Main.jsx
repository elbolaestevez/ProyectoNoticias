import React, { Component } from "react";
import ListNews from "./ListNews";
import Form from "./Form/Form";

class Main extends Component {
  state = {
    userArticles: this.props.userArticles
  }

  updateArticles = (newArticle) => {
    this.setState({
        userArticles: [...this.state.userArticles, newArticle]
    })
} 

  render() {
    return <div style={{background:'lightblue'}}>
      <ListNews userArticles={this.state.userArticles}/>
      <Form updateArticles={this.updateArticles} />
      </div>;
  }
}

export default Main;
Main.defaultProps = {
  userArticles: []
}
