import React, { Component } from "react";
import SearchPanel from "../../components/SearchPanel";
import ResultPanel from "../../components/ResultPanel";
import API from "../../utils/API";

class Home extends Component {
  state = {
    topic: "",
    startYear: "",
    endYear: "",
    articles: []
  };

  loadArticles = articles => 
    this.setState({ 
      articles : articles,
      topic    : "",
      startYear: "", 
      endYear  : "" 
    });

  saveArticle = (index, articleObj) => {
    API.saveArticle(articleObj)
      .then(res => {
        let articles = this.state.articles;
        this.loadArticles(articles.filter((article, i) => i !== index));
      })
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
      .then(res => this.loadArticles(res.data.response.docs))
      .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <SearchPanel
          topic={this.state.topic}
          startYear={this.state.startYear}
          endYear={this.state.endYear}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}              
        />
        <ResultPanel
          articles={this.state.articles}
          saveArticle={this.saveArticle}
        />
      </div>
    );
  }
}

export default Home;
