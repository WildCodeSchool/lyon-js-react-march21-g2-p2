/*HomePage function which will call MovieList rendering in MovieCard*/

/*component import*/
import { useEffect, useState } from 'react';
import axios from 'axios';
import './HomePage.css';
import MovieList from '../components/MovieList';
import MovieCarousel from '../components/MovieCarousel';
const imgUrl = 'https://image.tmdb.org/t/p/w200';

export default function HomePage() {
  const [popularMovie, setPopularMovie] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f22eb05a70b166bd4e2c1312e15d8e8b'
      )
      .then((response) => response.data)
      .then((data) => {
        const mostPopularMovies = data.results;
        const moviesToShow = [];

        for (let i = 0; i <= 11; i += 1) {
          moviesToShow.push(mostPopularMovies[i]);
        }
        return setPopularMovie(moviesToShow);
      });
  }, []);

  return (
    <>
      <h2 className="recentMovie">Recent Movie</h2>
      <div className="container">
        <MovieCarousel movieList={popularMovie} />
      </div>
      <h2>Popular movies</h2>
      <MovieList movieList={popularMovie} imgUrl={imgUrl} />
    </>
  );
}
