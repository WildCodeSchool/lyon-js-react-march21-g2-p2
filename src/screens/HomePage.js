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
  const apiUrl = process.env.REACT_APP_API_SERVICE_URL;

  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const apiUpcomingRoute = '/movie/upcoming';
  const apiKey = process.env.REACT_APP_TMDB_API_KEY;

  //Call API for upcoming movies

  useEffect(() => {
    axios
      .get(apiUrl + apiUpcomingRoute + '?api_key=' + apiKey + '&page=2')
      .then((res) => setUpcomingMovies(res.data.results.slice(0, 9)))
      .catch((error) => console.error(error));
  }, []);

  //Call API for popular movies
  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f22eb05a70b166bd4e2c1312e15d8e8b'
      )
      .then((res) => setPopularMovie(res.data.results.slice(0, 9)))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h2 className="recentMovie">Recent Movie</h2>
      <div className="container">
        <MovieCarousel movieList={popularMovie} />
      </div>
      <h2>Upcoming movies</h2>
      <div className="container">
        <MovieCarousel movieList={upcomingMovies} />
      </div>
    </>
  );
}
