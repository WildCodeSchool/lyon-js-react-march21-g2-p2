/*component import*/
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import clsx from 'clsx';
import React from 'react';

const useStyles = makeStyles(() => ({
  card: {
    borderRadius: '1rem',
    boxShadow: 'none',
    position: 'relative',
    margin: 0,
    width: 300,
    height: 500,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
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
}));

export default function MovieInfos(props) {
  const styles = useStyles();
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'center' });

  const director = props.prodCrew.filter((crew) => crew.job === 'Director');

  const mainActors = props.actors.slice(0, 5);

  return (
    <>
      <Grid
        container
        spacing={8}
        direction="row"
        justify="flex-start"
        alignItems="center"
      >
        <Grid item xs={10} sm={6} md={4} lg={3} xl={2}>
          <Card className={clsx(styles.card)}>
            <CardMedia
              className={clsx(styles.cardStyle)}
              classes={mediaStyles}
              image={props.poster}
            />
          </Card>
        </Grid>
        <Grid item xs={10} sm={6} md={4} lg={3} xl={2}>
          <div className={styles.content}>
            <h2>{props.title}</h2>
            <h3>{props.date}</h3>
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
            <h3>Genres:</h3>
            {props.movieGenreList.map(({ id, name }) => (
              <p key={id}>{name}</p>
            ))}
            <h3>Synopsis:</h3>
            <p>{props.synopsis}</p>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
