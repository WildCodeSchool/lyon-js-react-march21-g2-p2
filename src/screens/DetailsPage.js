/* eslint-disable no-lone-blocks */

/*component import*/
import MovieInfos from '../components/MovieInfos';
import ReviewList from '../components/ReviewList';
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import UserCommentsSection from '../components/UsersComment';
import clsx from 'clsx';

//----------------CSS w/ Material UI-----//

const useStyles = makeStyles(() => ({
  card: {
    borderRadius: '1rem',
    boxShadow: 'none',
    position: 'relative',
    margin: 0,
    width: 400,
    height: 400,
    overflow: 'scroll',
  },
}));


export default function DisplayPage({ tmdbId }) {
  const styles = useStyles();
  
  
  const [movieInfos, setMovieInfos] = useState('');
  const [movieActors, setMovieActors] = useState([]);
  const [movieProductionCrew, setMovieProductionCrew] = useState([]);
  
  const apiUrl = 'https://api.themoviedb.org/3';
  const apiKey = process.env.REACT_APP_TMDB_API_KEY;
  
  const getMovieGeneralInfos = axios.get(
    `${apiUrl}/movie/${tmdbId}?${apiKey}&language=en-US`
  );
  const getMovieCrewInfos = axios.get(
    `${apiUrl}/movie/${tmdbId}/credits?${apiKey}&language=en-US`
  );

  useEffect(() => {

    axios
      .all([getMovieGeneralInfos, getMovieCrewInfos])
      .then(
        axios.spread((generalInfo, crewInfos) => {
          setMovieInfos(generalInfo.data);
          setMovieActors(crewInfos.data.cast);
          setMovieProductionCrew(crewInfos.data.crew);
        })
      )
      .catch((error) => {
        console.log('Error :', error);
      });
  }, [getMovieGeneralInfos, getMovieCrewInfos]);

  return (
    <div>
      <Card className={clsx(styles.card)}>
        <MovieInfos
          title={movieInfos.title}
          date={movieInfos.release_date}
          synopsis={movieInfos.overview}
          actors={movieActors}
          prodCrew={movieProductionCrew}
        />
        <UserCommentsSection title={movieInfos.title} id={tmdbId} />
        <ReviewList movie_id={tmdbId} />
      </Card>
    </div>
  );
}
