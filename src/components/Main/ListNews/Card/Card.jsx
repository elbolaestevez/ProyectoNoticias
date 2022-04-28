import React, { Component } from "react";
import ListNews from "../ListNews";


class Card extends Component {

  // state = {
  //   userArticles: this.props.userArticles
  // }

 

  render() {
    const article=this.props.children
    console.log(article);
   
    return( <div style={{background:'lightblue'}}>
      
    <h1>{article.headline.main}</h1> <a href={article.web_url} > {article.abstract} </a>
                           
     
     
      </div>
    );
  }
}

export default Card;

