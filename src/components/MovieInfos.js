/*component import*/
import React from 'react';
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
  director,
}) {
  const styles = useStyles();

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
        {actors.map((actor) => (
          <>
            <p key={actor.id}>
              <strong>{actor.name}</strong> - {actor.character}
            </p>
          </>
        ))}
        <h2>Synopsis :</h2>
        <p>{synopsis}</p>
      </div>
    </>
  );
}
