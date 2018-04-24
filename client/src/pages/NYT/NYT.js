import React, { Component } from "react";
import Home from "../Home";
import Saved from "../Saved";
import API from "../../utils/API";

class NYT extends Component {
  state = {
    topic         : "",
    startYear     : "",
    endYear       : "",
    searchArticles: [],
    savedArticles : []
  };

  componentDidMount() {
    this.loadSavedArticles();
  }

  loadSearchArticles = articles => 
    this.setState({ 
      searchArticles : articles,
      topic          : "",
      startYear      : "", 
      endYear        : "" 
    });

  loadSavedArticles = () => {
    API.getArticles()
      .then(res => this.setState({ savedArticles: res.data }))
      .catch(err => console.log(err));
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadSavedArticles())
      .catch(err => console.log(err));
  };

  saveArticle = (index, articleObj) => {
    API.saveArticle(articleObj)
      .then(res => {
        let articles = this.state.searchArticles;
        this.loadSearchArticles(articles.filter((article, i) => i !== index));
      })
      .then(res => this.loadSavedArticles())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.topic) {
      let startDate = this.state.startYear 
                        ? `${this.state.startYear}0101`
                        : ``;
      let endDate = this.state.endYear 
                      ? `${this.state.endYear}1231`
                      : ``;

      API.search({
        query    : this.state.topic,
        startDate: startDate,
        endDate  : endDate
      })
      .then(res => this.loadSearchArticles(res.data.response.docs))
      .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <Home
          articles={this.state.searchArticles}
          topic={this.state.topic}
          startYear={this.state.startYear}
          endYear={this.state.endYear}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          saveArticle={this.saveArticle}              
        />
        <Saved
          articles={this.state.savedArticles}
          deleteArticle={this.deleteArticle}
        />
      </div>
    );
  }
}

export default NYT;
