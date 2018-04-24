import axios from "axios";

const BASEURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json`;
const APIKEY = `bdb59ae4073c4dd2a76b63604b28c1ec`;
    
export default {
  // Searches NYT for articles.
  search: searchObj => 
    axios.get(BASEURL, {
      params: {
        "api-key"   : APIKEY,
        "q"         : searchObj.query,
        "sort"      : "newest",
        "begin_date": searchObj.startDate || "",
        "end_date"  : searchObj.endDate || ""
      }
    }),

  // Gets all articles
  getArticles: () => axios.get("/api/articles"),

  // Gets the article with the given id
  getArticle: id => axios.get("/api/articles/" + id),

  // Deletes the article with the given id
  deleteArticle: id => axios.delete("/api/articles/" + id),

  // Saves an article to the database
  saveArticle: articleObj => axios.post("/api/articles", articleObj)
};
