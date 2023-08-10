const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  id: String,
  name: String,
  lang: String,
  duration: String,
  genre: String,
  desc: String,
  poster: String,
  trailer: String,
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
