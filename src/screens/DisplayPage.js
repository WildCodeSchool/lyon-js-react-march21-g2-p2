/* eslint-disable no-lone-blocks */
/*component import*/
import MovieInfos from '../components/MovieInfos';
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

export default function DisplayPage() {
  {
    /*Use states we need to store the APIs call */
  }
  const { tmdb_id } = useParams();
  const [movie, setMovie] = useState('');
  const [movieActors, setMovieActors] = useState([]);
  const [movieProductionCrew, setMovieProductionCrew] = useState([]);

  {
    /*API calls*/
  }
  const urlToUse1 = `https://api.themoviedb.org/3/movie/${tmdb_id}?api_key=f22eb05a70b166bd4e2c1312e15d8e8b&language=en-US`;
  const urlToUse2 = `https://api.themoviedb.org/3/movie/${tmdb_id}/credits?api_key=f22eb05a70b166bd4e2c1312e15d8e8b&language=en-US`;

  {
    /*use of useEffect + axios*/
  }
  const getMovieGeneralInfos = () => {
    return axios.get(urlToUse1);
  };

  const getMovieCrewInfos = () => {
    return axios.get(urlToUse2);
  };

  useEffect(() => {
    axios
      .all([getMovieGeneralInfos(), getMovieCrewInfos()])
      .then(
        axios.spread((generalInfo, crewInfos) => {
          setMovie(generalInfo.data);
          setMovieActors(crewInfos.data.cast);
          setMovieProductionCrew(crewInfos.data.crew);
        })
      )
      .catch((error) => {
        console.log('Error :', error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
