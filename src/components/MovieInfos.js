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
    borderRadius: '1em',
    boxShadow: 'none',
    position: 'relative',
    margin: 'auto',
    maxWidth: 200,
    height: 300,
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
  mediaStyle: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  genreList: {
    listStyle: 'none',
    '& > li': {
      color: 'var(--text-primary)',
    },
  },
  genreListItem: {
    display: 'inline-block',
    marginRight: '1em',
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
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="center"
      >
        <Grid item xs={10} sm={6} md={6} lg={3} xl={2}>
          <Card className={clsx(styles.card)}>
            <CardMedia
              className={clsx(styles.mediaStyle)}
              classes={mediaStyles}
              image={props.poster}
            />
          </Card>
        </Grid>
        <Grid item xs={10} sm={6} md={6} lg={3} xl={2}>
          <div className={styles.content}>
            <h2>{props.title}</h2>
            <h3>{props.date}</h3>
            <h3>Director :</h3>
            <div>
              {director.map((director) => (
                <p key={director.id}>
                  <strong>{director.name}</strong>
                </p>
              ))}
            </div>
            <h3>Cast:</h3>
            {mainActors.map((actor) => (
              <p key={actor.id}>
                <strong>{actor.name}</strong> as {actor.character}
              </p>
            ))}
            <h3>Genres:</h3>
            <ul className={styles.genreList}>
              {props.movieGenreList.map(({ id, name }) => (
                <li className={styles.genreListItem} key={id}>
                  {name}
                </li>
              ))}
            </ul>
            <h3>Synopsis:</h3>
            <p>{props.synopsis}</p>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
