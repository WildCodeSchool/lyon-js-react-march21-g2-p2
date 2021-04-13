/* eslint-disable no-lone-blocks */
import './MovieHomePage.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function MovieHomeCard(props) {
  const [popularMovie, setPopularMovie] = useState([]);

  {
    /*Récupération des données Moviedb*/
  }

  useEffect(() => {
    axios

      .get(
        'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f22eb05a70b166bd4e2c1312e15d8e8b'
      )

      .then((response) => response.data)

      .then((data) => {
        setPopularMovie(data.results);
      });
  }, []);

  {
    /*Affichage des films*/
  }

  const moviePoster = (resultId) => {
    const movieSrc = 'https://image.tmdb.org/t/p/w200';

    const selectedMovie = popularMovie.filter(
      (movie) => movie.id === parseInt(resultId)
    );
    const newMovie = selectedMovie[0];
    const newMoviePath = newMovie.poster_path;
    let movieLink = movieSrc + newMoviePath;

    return movieLink;
  };

  return (
    <div className="card">
      {popularMovie.map((movie) => (
        <div key={movie.id} className="movie">
          <img
            src={moviePoster(movie.id)}
            width="150px"
            height="150px"
            alt=""
          />
          <h3 className="movie-title">{movie.title}</h3>
          <p>Note : {movie.vote_average}/10</p>
        </div>
      ))}
    </div>
  );
}
