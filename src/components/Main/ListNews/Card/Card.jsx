import React, { Component } from "react";

class Card extends Component {
  render() {
    const article = this.props.children;

    return (
      <div>
        <h1>{article.headline.main}</h1>{" "}
        <a href={article.web_url}> {article.abstract} </a>
        <button className="btn" onClick={this.props.remove}>
          Remove
        </button>
      </div>
    );
  }
}

export default Card;
