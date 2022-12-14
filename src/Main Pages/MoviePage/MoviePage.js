import React from "react";
import "./MoviePage.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function MoviePage() {
  const pathId = useParams();
  // console.log(pathId);
  const [moviePage, setmoviePage] = useState(null);
  const [similarMovie, setsimilarMovie] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${pathId.id}?api_key=388d899bacdfb56d15ed5ef6cac36a37`
      )
      .then(function (response) {
        // console.log(response);
        if (response.data) {
          setmoviePage(response.data);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${pathId.id}/similar?api_key=388d899bacdfb56d15ed5ef6cac36a37&language=en-US&page=1`
      )
      .then((response) => {
        // console.log(response);
        if (response.data && response.data.results) {
          setsimilarMovie(response.data.results);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (moviePage) {
    return (
      <div>
        <div className="container">
          <div className="img-container">
            <img
              src={`http://image.tmdb.org/t/p/w500/${moviePage.poster_path}`}
            ></img>
          </div>
          <div className="movie-details">
            <div>
              <h1>{moviePage.title}</h1>
              <h2>{moviePage.overview}</h2>
            </div>

            <div className="bottom-details">
              <p>Release date: {moviePage.release_date}</p>
              <p>Rating: {moviePage.vote_average.toFixed(1)}</p>
            </div>
          </div>
        </div>
        <div  className="similar-movies-container">
          {similarMovie.slice(0, 6).map((movie) => (
            <Link key={movie.id} to={`${movie.id}`}>
              <div>
                <img
                  src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                ></img>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default MoviePage;
