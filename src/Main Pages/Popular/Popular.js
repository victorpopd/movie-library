import React from "react";
import axios from "axios";
import "./Popular.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Popular() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=388d899bacdfb56d15ed5ef6cac36a37&language=en-US&page=1`
      )
      .then((response) => {
        if (response.data && response.data.results)
          setPopularMovies(response.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (popularMovies) {
    return (
      <div className="grid-container">
        {popularMovies.slice(0, 16).map((movie) => (
          <Link key={movie.id} to={`/${movie.id}`}>
            <div className="grid-item">
              <img
                src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              ></img>
              <p>{movie.title}</p>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}

export default Popular;
