/* eslint-disable no-lone-blocks */

/*component import*/
import MovieInfos from './MovieInfos';
import ReviewList from './ReviewList';
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import UserCommentsSection from './UsersComment';
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

export default function DisplayPage({ movieInfos, movieActors, movieProductionCrew, tmdbId }) {
  const styles = useStyles();


  return (
    <div>
      <Card className={clsx(styles.card)}>
        <MovieInfos
          title={movieInfos.title}
          date={movieInfos.date}
          synopsis={movieInfos.synopsis}
          actors={movieActors}
          prodCrew={movieProductionCrew}
        />
        <UserCommentsSection title={movieInfos.title} id={movieInfos.id} />
        <ReviewList movie_id={movieInfos.id} />
      </Card>
    </div>
  );
}
