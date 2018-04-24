import React, { Component } from "react";
import Save from "../../components/Save";
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
        <Save
          articles={this.state.articles}
          deleteArticle={this.deleteArticle}
        />
      </div>
    );
  }
}

export default Saved;
