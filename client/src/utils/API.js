import axios from "axios";

const BASEURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?`;
const APIKEY = `bdb59ae4073c4dd2a76b63604b28c1ec`;

    // url = (startYear === "") ? url : url += '&begin_date=' + startYear + '0101';
    // url = (endYear === "") ? url : url += '&end_date=' + endYear + '1231';
    
export default {
  // Searches NYT for articles.
  search: function(query, startYear, endYear) {
    let url = `${BASEURL}api-key=${APIKEY}q=${query}${startYear ? `&begin_date=${startYear}0101`: ``}${endYear ? `&end_date=${endYear}0101` : ``}`;
    
    return axios.get(url);
  }, 
  // Gets all articles
  getArticles: function() {
    return axios.get("/api/books");
  },
  // Gets the article with the given id
  getArticle: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves an article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};
