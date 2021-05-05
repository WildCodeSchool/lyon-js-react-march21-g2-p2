/*component import*/
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import clsx from 'clsx';
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const useStyles = makeStyles(() => ({
  card: {
    borderRadius: '1rem',
    margin: 0,
    width: 120,
    height: 145,
  },
  grid: {
    width: '100%',
    maxWidth: '100em',
  },
  content: {
    display: 'flex',
    alignItems: 'flex-start',
    zIndex: 2,
    bottom: 0,

    margin: 0,
    borderTop: 'solid 1px',
    paddingTop: 65,
  },
  media: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginLeft: 20,
    fontSize: 10,
  },
}));

const apiKey = process.env.REACT_APP_TMDB_API_KEY;

export default function FavoriteInfos({
  key,
  id,
  date,
  title,
  genre,
  average,
  poster,
  synopsis,
}) {
  const [movieActors, setMovieActors] = useState([]);
  const [movieProductionCrew, setMovieProductionCrew] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`
      )
      .then((crewInfos) => {
        setMovieActors(crewInfos.data.cast);
        setMovieProductionCrew(crewInfos.data.crew);
      })
      .catch((error) => {
        console.log('Error :', error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const styles = useStyles();
  const director = movieProductionCrew.filter(
    (crew) => crew.job === 'Director'
  );

  const mainActors = movieActors.slice(0, 5);

  return (
    <>
      <Grid key={id} className={clsx(styles.grid)} item xs={6}>
        <div className={styles.content}>
          <div>
            <Card className={clsx(styles.card)}>
              <CardMedia
                className={clsx(styles.media)}
                classes={styles.media}
                image={poster}
              />
            </Card>
          </div>
          <div className={styles.text}>
            <h3>{title}</h3>
            <h4>{date}</h4>
            <h4>Director :</h4>
            <div>
              {director.map((director) => (
                <p key={director.id}>{director.name}</p>
              ))}
            </div>
            <h4>Cast:</h4>
            {mainActors.map((actor) => (
              <p key={actor.id}>
                <strong>{actor.name}</strong> as {actor.character}
              </p>
            ))}
            <h4>Synopsis:</h4>
            <p>{synopsis}</p>
          </div>
        </div>
      </Grid>
    </>
  );
}
