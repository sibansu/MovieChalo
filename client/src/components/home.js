import React from "react";
import MoviesList from "./movies_list";
import Navbar from "./navbar";

const Home = () => {
  const user = localStorage["username"];
  return (
    <div className="container">
      <Navbar />
      <h1 hidden={!user ? true : false}>Welcome {user}</h1>
      <MoviesList />
    </div>
  );
};

export default Home;
