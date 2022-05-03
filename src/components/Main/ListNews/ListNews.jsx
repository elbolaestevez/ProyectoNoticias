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
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q={query}&fq=news_desk:(%22Sports%22)&api-key=${process.env.REACT_APP_API_KEY}`
    );
    const datawithoutslice = await resp.data.response.docs;
    const data = datawithoutslice.slice(0, 5);

    console.log(data);
    this.setState({
      articles: data,
    });
    this.updateArticles = (newArticle) => {
      this.setState({
        articleForm: [newArticle],
        // articleForm: [...this.state.userArticles, newArticle],
      });
    };
  }
  removeNewFetch = (i) => {
    const remainingNews = this.state.articles.filter((news, j) => i !== j);
    console.log(remainingNews);
    this.setState({ articles: remainingNews });
  };
  removeNewForm = (i) => {
    const remainingNews = this.state.userArticles.filter((news, j) => i !== j);
    console.log(remainingNews);
    this.setState({ userArticles: remainingNews });
  };

  render() {
    return (
      <div className="list">
        <h1>Articulos NyTimes</h1>
        {this.state.articles.map((article, i) => (
          <Card key={i} remove={() => this.removeNewFetch(i)}>
            {article}
          </Card>
        ))}
        {this.state.userArticles.map((articlenew, i) => (
          <Card key={i} remove={() => this.removeNewForm(i)}>
            {articlenew}
          </Card>
        ))}
      </div>
    );
  }
}

ListNews.defaultProps = {
  defaultList: [],
};

export default ListNews;
