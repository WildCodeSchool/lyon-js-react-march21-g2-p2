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
    boxShadow: 'none',
    position: 'relative',
    margin: 0,
    width: 100,
    height: 100,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    zIndex: 2,
    bottom: 0,
    width: '100%',
    margin: 0,
  },
  media: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  text: {
    // display: 'inline-block',
    // width: '100%',
    // height: '100%',
  },
}));

const apiKey = process.env.REACT_APP_TMDB_API_KEY;

export default function FavoriteInfos({
  key,
  id,
  poster,
  title,
  date,
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
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'center' });

  const director = movieProductionCrew.filter(
    (crew) => crew.job === 'Director'
  );

  const mainActors = movieActors.slice(0, 5);

  return (
    <>
      <Grid container spacing={4} direction="row">
        <Grid item xs={10} sm={6} md={4} lg={3} xl={2}>
          <Card className={clsx(styles.card)}>
            <CardMedia
              className={clsx(styles.cardStyle)}
              classes={mediaStyles}
              image={poster}
            />
          </Card>
        </Grid>
        <Grid item xs={10} sm={6} md={4} lg={3} xl={2}>
          <div className={styles.content}>
            <div className={styles.text}>
              <h2>{title}</h2>
              <h3>{date}</h3>
              <h3>Director :</h3>
              <div>
                {director.map((director) => (
                  <p key={director.id}>{director.name}</p>
                ))}
              </div>
              <h3>Cast:</h3>
              {mainActors.map((actor) => (
                <p key={actor.id}>
                  <strong>{actor.name}</strong> as {actor.character}
                </p>
              ))}
              <h3>Synopsis:</h3>
              <p>{synopsis}</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
