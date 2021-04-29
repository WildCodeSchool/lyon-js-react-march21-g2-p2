/* eslint-disable no-lone-blocks */
/*component import*/
import MovieInfos from '../components/MovieInfos';
import React from 'react';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
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
    width: 300,
    height: 500,
  },
}));

export default function DisplayPage(
  tmdbId,
  movieGeneralsInfos,
  movieActors,
  movieProductionCrew
) {
  const styles = useStyles();



  //-----Use states we need to store the APIs call-----//

  // const [movie, setMovie] = useState('');
  // const [movieActors, setMovieActors] = useState([]);
  // const [movieProductionCrew, setMovieProductionCrew] = useState([]);

  // {
  //   /*API calls*/
  // }
  // const urlToUse1 = `https://api.themoviedb.org/3/movie/${props.tmdbId}?api_key=f22eb05a70b166bd4e2c1312e15d8e8b&language=en-US`;
  // const urlToUse2 = `https://api.themoviedb.org/3/movie/${props.tmdbId}/credits?api_key=f22eb05a70b166bd4e2c1312e15d8e8b&language=en-US`;

  // {
  //   /*use of useEffect + axios*/
  // }
  // const getMovieGeneralInfos = () => {
  //   return axios.get(urlToUse1);
  // };

  // const getMovieCrewInfos = () => {
  //   return axios.get(urlToUse2);
  // };

  // useEffect(() => {
  //   axios
  //     .all([getMovieGeneralInfos(), getMovieCrewInfos()])
  //     .then(
  //       axios.spread((generalInfo, crewInfos) => {
  //         setMovie(generalInfo.data);
  //         setMovieActors(crewInfos.data.cast);
  //         setMovieProductionCrew(crewInfos.data.crew);
  //       })
  //     )
  //     .catch((error) => {
  //       console.log('Error :', error);
  //     });

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [movie]);

  {
    /*What will be shown */
  }
  return (
    <div>
      <Card className={clsx(styles.card)}>
        <MovieInfos
          title={movieGeneralsInfos.title}
          date={movieGeneralsInfos.release_date}
          synopsis={movieGeneralsInfos.overview}
          actors={movieActors}
          prodCrew={movieProductionCrew}
        />
        <UserCommentsSection title={movieGeneralsInfos.title} id={tmdbId} />
      </Card>
    </div>
  );
}
