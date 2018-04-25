import axios from "axios";

const BASEURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json`;
    
export default {
  // Searches NYT for articles.
  search: searchParamsObj => axios.get(BASEURL, { params: searchParamsObj }),

  // Gets all articles
  getArticles: () => axios.get("/api/articles"),

  // Gets the article with the given id
  getArticle: id => axios.get("/api/articles/" + id),

  // Deletes the article with the given id
  deleteArticle: id => axios.delete("/api/articles/" + id),

  // Saves an article to the database
  saveArticle: articleObj => axios.post("/api/articles", articleObj)
};
