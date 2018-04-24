import React, { Component } from "react";
import SavedPanel from "../../components/SavedPanel";
import API from "../../utils/API";

class Saved extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res => this.setState({ articles: res.data }))
      .catch(err => console.log(err));
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <SavedPanel
          articles={this.state.articles}
          deleteArticle={this.deleteArticle}
        />
      </div>
    );
  }
}

export default Saved;
