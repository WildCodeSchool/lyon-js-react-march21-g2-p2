/*component import*/
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

//----------------CSS w/ Material UI-----//

const useStyles = makeStyles(() => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    zIndex: 2,
    bottom: 0,
    width: 'auto',
    margin: 15,
  },
}));

export default function MovieInfos({
  title,
  date,
  synopsis,
  actors,
  prodCrew,
}) {
  const styles = useStyles();

  const director = prodCrew.filter((crew) => crew.job === 'Director');

  const mainActors = actors.slice(0, 5);

  return (
    <>
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
    </>
  );
}
