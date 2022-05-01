import React, { Component, Fragment } from "react";
import axios from "axios";
import Form from "../Form/Form";

import Card from "./Card/Card";

class ListNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: this.props.defaultList,
      userArticles: this.props.userArticles,
    };
  }

  async componentDidMount() {
    const resp = await axios.get(
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?q={query}&fq=news_desk:(%22Sports%22)&api-key=w45qEYAPypLD4KjKe3pgLxZN8pkvz1t2"
    );
    const datawithoutslice = await resp.data.response.docs;
    const data = datawithoutslice.slice(0, 5);

    console.log(data);
    this.setState({
      articles: data,
    });
    this.updateArticles = (newArticle) => {
      this.setState({
        articleForm: [...this.state.userArticles, newArticle],
      });
    };
  }

  render() {
    return (
      <div>
        <h1>Articulos NyTimes</h1>
        {this.state.articles.map((article, i) => (
          <Card key={i}>{article}</Card>
        ))}
        {this.state.userArticles.map((articlenew, i) => (
          <Card key={i}>{articlenew}</Card>
        ))}
        {/* <Form updateArticles={this.updateArticles} /> */}
      </div>
    );
  }
}

ListNews.defaultProps = {
  defaultList: [],
};

export default ListNews;
