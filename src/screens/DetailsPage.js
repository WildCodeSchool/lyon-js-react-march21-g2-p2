/* eslint-disable no-lone-blocks */

/*component import*/
import MovieInfos from '../components/MovieInfos';
import ReviewList from '../components/ReviewList';
import React from 'react';
import UserCommentsSection from '../components/UsersComment';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles(() => ({
  cardContent: {
    display: 'flex',
    width: '90%',
    height: '80%',
    overflow: 'auto',
  },
  card: {
    display: 'flex',
    borderRadius: '1rem',
    boxShadow: 'none',
    margin: 'auto',
    padding: '1em',
    width: '100%',
    flexDirection: 'column',
  },
}));

export default function DetailsPage({
  movieProductionCrew,
  movieActors,
  movieInfos,
  poster,
}) {
  /*Use states we need to store the APIs call*/
  const { card, cardContent } = useStyles();
  const director = movieProductionCrew.filter(
    (crew) => crew.job === 'Director'
  );
  const mainActors = movieActors.slice(0, 5);
  /*To get the informations required*/
  return (
    <>
      <div className={cardContent}>
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
          <UserCommentsSection
            title={movieInfos.title}
            id={movieInfos.movieId}
          />
          <ReviewList movie_id={movieInfos.movieId} />
        </Card>
      </div>
    </>
  );
}
