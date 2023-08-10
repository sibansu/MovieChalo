import React, { useEffect, useState } from "react";
import MovieDetails from "./movie_details";
import { useParams } from "react-router-dom";
import Header from "./navbar";
import ScreeningDetails from "./screening_details";
import axios from "axios";

const Movie = () => {
  const { movie_id } = useParams();

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://movie-ticket-booking-app-0vii.onrender.com/movies")
      .then((res) => {
        setMovies(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <Header />
      <MovieDetails movie={movies[movie_id - 1]} />
      <ScreeningDetails movie={movies[movie_id - 1]} />
    </div>
  );
};

export default Movie;
