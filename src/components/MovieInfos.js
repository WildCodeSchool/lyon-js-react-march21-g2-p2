/*component import*/
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

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

export default function MovieInfos(title, date, synopsis, actors, prodCrew) {
  const styles = useStyles();

  const director = prodCrew.filter((crew) => crew.job === 'Director');

  const mainActors = actors.slice(0, 5);

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
          <div className={styles.content}>
            <h2>Title :</h2>
            <p>{title}</p>
            <h2>Date :</h2>
            <p>{date}</p>
            <h2>Director :</h2>
            <div>
              {director.map((director) => (
                <p key={director.id}>{director.name}</p>
              ))}
            </div>
            <h2>Actors :</h2>
            {mainActors.map((actor) => (
              <>
                <p key={actor.id}>
                  <strong>{actor.name}</strong> - {actor.character}
                </p>
              </>
            ))}
            <h2>Genres :</h2>

            <h2>Synopsis :</h2>
            <p>{synopsis}</p>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
