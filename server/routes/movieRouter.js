const { GetMovies, AddMovies } = require("../controllers/movie");

const router = require("express").Router();

router.get("/", GetMovies);
router.post("/", AddMovies);

module.exports = router;
