const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  apiId: { type: String, required: true, unique: true, trim: true },
  title: { type: String, required: true, trim: true },
  url: { type: String, required: true, trim: true },
  pubDate: { type: Date, default: Date.now },
  saveDate: { type: Date, default: Date.now }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
