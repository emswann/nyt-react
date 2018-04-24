import React from "react";
import SavedPanel from "../../components/SavedPanel";

const Saved = props => (
  <div>
    <SavedPanel
      articles={props.articles}
      deleteArticle={props.deleteArticle}
    />
  </div>
);

export default Saved;
