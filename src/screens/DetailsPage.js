/* eslint-disable no-lone-blocks */

/*component import*/
import MovieInfos from '../components/MovieInfos';
import ReviewList from '../components/ReviewList';
import React from 'react';
import UserCommentsSection from '../components/UsersComment';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles(() => ({
  card: {
    borderRadius: '1rem',
    boxShadow: 'none',
    position: 'relative',
    margin: 'auto',
    padding: '1em',
    maxWidth: '80%',
    maxHeight: '80%',
    overflowY: 'scroll',
  },
}));

export default function DetailsPage({
  movieProductionCrew,
  movieActors,
  movieInfos,
  poster,
}) {
  /*Use states we need to store the APIs call*/

  const { card } = useStyles();
  const director = movieProductionCrew.filter(
    (crew) => crew.job === 'Director'
  );
  const mainActors = movieActors.slice(0, 5);
  /*To get the informations required*/
  return (
    <>
      <Card className={card}>
        <MovieInfos
          id={movieInfos.movieId}
          poster={poster}
          title={movieInfos.title}
          date={movieInfos.date}
          synopsis={movieInfos.synopsis}
          actors={mainActors}
          director={director}
        />
        <UserCommentsSection title={movieInfos.title} id={movieInfos.movieId} />
        <ReviewList movie_id={movieInfos.movieId} />
      </Card>
    </>
  );
}
