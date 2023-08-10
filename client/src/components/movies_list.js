import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Movies_List = () => {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    axios
      .get("https://movie-ticket-booking-app-0vii.onrender.com/movies")
      .then((res) => setMovies(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h4>Now Showing</h4>
      <div className="row">
        {movies.map((movie, key) => {
          return (
            <Link className="col" key={key} to={"/movie/" + movie.id}>
              <div style={{ width: "18rem" }} className="card" key={key}>
                <img
                  style={{ width: "18rem", height: "25rem" }}
                  src={movie.poster}
                  alt={movie.name}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Movies_List;
