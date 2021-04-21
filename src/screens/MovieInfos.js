/*component import*/
import DisplayInfos from '../components/DisplayInfos';
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function MovieInfos() {
  const [movie, setMovie] = useState('');
  useEffect(() => {
    axios

      .get(
        'https://api.themoviedb.org/3/movie/399566?api_key=f22eb05a70b166bd4e2c1312e15d8e8b&language=en-US'
      )
      .then((response) => {
        setMovie(response.data);
      });
  }, []);

  return (
    <>
      <DisplayInfos 
        poster={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        title={movie.title}
        date ={movie.release_date}
        synopsis={movie.overview}

      />
    </>
  );
}
