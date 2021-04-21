/* eslint-disable no-lone-blocks */
/*component import*/
import DisplayInfos from '../components/DisplayInfos';
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function MovieInfos() {

  {/*Use states we need to store the APIs call */}
  // const [movie, setMovie] = useState('');
  // const [movieActors, setMovieActors] = useState([]);
  const [movieProductionCrew, setMovieProductionCrew] = useState([]);
  


  {/*API calls*/}
  useEffect(() => {
    // axios

    //   .get(
    //     'https://api.themoviedb.org/3/movie/399566?api_key=f22eb05a70b166bd4e2c1312e15d8e8b&language=en-US'
    //   )
    //   .then((response) => {
    //     setMovie(response.data);
    //   });
    
    axios
    .get('https://api.themoviedb.org/3/movie/399566/credits?api_key=f22eb05a70b166bd4e2c1312e15d8e8b&language=en-US')
    .then((response) => 
    response.data
    )
    .then((data) => {

      return setMovieProductionCrew(data.crew);
    });
  }, []);

  {/*Extra informations about the movie */}

  // const selectActors = () => {
  //       const actorsToSelect = movieActors;
  //       const mainActors = [];

  //       for (let i = 0; i < 5; i += 1) {
  //         mainActors.push(actorsToSelect[i]);
  //       }
  //       return mainActors;
  // };

  // const chosenActors = selectActors
  {/*What will be shown */}
  return (
    
    <>
      <DisplayInfos 
        // poster={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        // title={movie.title}
        // date ={movie.release_date}
        // synopsis={movie.overview}
        // actors={chosenActors}
        director={movieProductionCrew}

      />
    </>
  );
}