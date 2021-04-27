/* eslint-disable no-lone-blocks */
/*component import*/
import MovieInfos from '../components/MovieInfos';
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function DisplayPage() {
  { 
    /*Use states we need to store the APIs call */
  }
  const [movie, setMovie] = useState('');
  const [movieActors, setMovieActors] = useState([]);
  const [movieProductionCrew, setMovieProductionCrew] = useState([]);

  {
    /*API calls*/
  }

  {
    /*use of useEffect + axios*/
  }
  const getMovieGeneralInfos = () => {
    return axios.get('https://api.themoviedb.org/3/movie/460465?api_key=f22eb05a70b166bd4e2c1312e15d8e8b&language=en-US')
  };

  const getMovieCrewInfos = () => {
    return axios.get('https://api.themoviedb.org/3/movie/460465/credits?api_key=f22eb05a70b166bd4e2c1312e15d8e8b&language=en-US')
  };

  useEffect(()=>{
    axios
    .all([getMovieGeneralInfos(), getMovieCrewInfos()])
    .then(
      axios.spread((generalInfo, crewInfos)=> {
        setMovie(generalInfo.data);
        setMovieActors(crewInfos.data.cast);
        setMovieProductionCrew(crewInfos.data.crew);
      })
    )
    .catch((error) =>{
      console.log('Error :', error);
    })
  }, []);

  {
    /*What will be shown */
  }
  return (
    <>
      <MovieInfos
      poster={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
      title={movie.title}
      date={movie.release_date}
      synopsis={movie.overview}
      actors={movieActors}
      prodCrew={movieProductionCrew}

      />
    </>
  );
}
