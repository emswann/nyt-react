import React, { Component } from "react";
import Home from "../Home";
import Saved from "../Saved";
import API from "../../utils/API";
import Alert from "../../components/Alert";

class NYT extends Component {
  state = {
    topic         : "",
    startYear     : "",
    endYear       : "",
    searchArticles: [],
    savedArticles : [],
    error         : ""
  };

  componentDidMount() {
    this.loadSavedArticles();
  }

  loadSearchArticles = articles => 
    this.setState({ 
      searchArticles : articles,
      topic          : "",
      startYear      : "", 
      endYear        : "",
      error          : ""
    });

  loadSavedArticles = () => {
    API.getArticles()
      .then(res => this.setState({ savedArticles: res.data, error: "" }))
      .catch(err => {
        console.log(err);
        this.setState({ error: `Unable to load saved articles!`})
      });
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadSavedArticles())
      .catch(err => {
        console.log(err);
        this.setState({ error: `Unable to remove saved article!`})
      });
  };

  saveArticle = (index, articleObj) => {
    API.saveArticle(articleObj)
      .then(res => {
        let articles = this.state.searchArticles;
        this.loadSearchArticles(articles.filter((article, i) => i !== index));
      })
      .then(res => this.loadSavedArticles())
      .catch(err => {
        console.log(err);
        this.setState({ error: `Unable to save article!`})
      });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    const APIKEY = `bdb59ae4073c4dd2a76b63604b28c1ec`;

    event.preventDefault();
    if (this.state.topic) {
      let searchParamsObj = {
        "api-key": APIKEY,
        "q"      : this.state.topic, 
        "sort"   : "newest" 
      }

      if (this.state.startYear) 
        searchParamsObj.startDate = `${this.state.startYear}0101`;

      if (this.state.endYear)
        searchParamsObj.endDate = `${this.state.endYear}1231`;

      API.search(searchParamsObj)
      .then(res => this.loadSearchArticles(res.data.response.docs))
      .catch(err => {
        console.log(err);
        this.setState({ error: `Unable to perform article search!`})
      });
    }
  };

  render() {
    return (
      <div>
        <Alert
          type="danger"
          style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
        >
          {this.state.error}
        </Alert>
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
