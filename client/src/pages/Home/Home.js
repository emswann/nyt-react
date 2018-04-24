import React from "react";
import SearchPanel from "../../components/SearchPanel";
import ResultPanel from "../../components/ResultPanel";

const Home = props => (
  <div>
    <SearchPanel
      topic={props.topic}
      startYear={props.startYear}
      endYear={props.endYear}
      handleInputChange={props.handleInputChange}
      handleFormSubmit={props.handleFormSubmit}              
    />
    <ResultPanel
      articles={props.articles}
      saveArticle={props.saveArticle}
    />
  </div>
);

export default Home;
