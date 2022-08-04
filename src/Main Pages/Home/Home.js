import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import './Home.css';

function Home() {
  const [homeMovies, sethomeMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=388d899bacdfb56d15ed5ef6cac36a37&language=en-US&page=1`
      )
      .then((response) => {
        if (response.data && response.data.results)
          sethomeMovies(response.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  console.log("----> ", homeMovies);

  if (homeMovies.length) {
    return (
      <div className="grid-container">
        {homeMovies.slice(0, 20).map((movie) => (
          <div key={movie.id} className="grid-item">
            <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}></img>
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    );
  }
}
export default Home;
