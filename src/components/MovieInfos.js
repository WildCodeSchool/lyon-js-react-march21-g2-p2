/*component import*/
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';

import React from 'react';

const useStyles = makeStyles(() => ({
  card: {
    display: 'flex',
    borderRadius: '1rem',
    position: 'relative',
    margin: 0,
    width: 200,
    height: 300,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  title: {
    paddingBottom: '1em',
    borderBottom: "solid 1px"
  },
  date: {
    paddingBottom: '1em',
    borderBottom: "solid 1px"
  },
  directorName: {
    paddingBottom: '1em',
    borderBottom: "solid 1px"
  },
  synopsisCss: {
    paddingBottom: '1em',
    borderBottom: "solid 1px"
  },
  actorContent: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    border: "solid",
    alignItems: 'flex-end'
  },
  actor: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  actorsPaths: {
    height: "100px",
    width: '100px',
    borderRadius: '50%'
  },
  actorName: {
    display: 'flex'

  }


}));
const imgUrl = 'https://image.tmdb.org/t/p/w200';

export default function MovieInfos(props) {
  const {
    card,
    cardStyle,
    boxContent,
    details,
    actorContent,
    actorName,
    actorsPaths, title, date, directorName, synopsisCss
  } = useStyles();
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'center' });

  return (
    <>
      <Card className={card}>
        <CardMedia
          className={cardStyle}
          classes={mediaStyles}
          image={props.poster}
        />
      </Card>
      <div className={boxContent}>
        <div className={details}>
          <div className={title}>
            <h2>Title :</h2>
            <p>{props.title}</p>
          </div>
          <div className={date}>
            <h2>Date :</h2>
            <p>{props.date}</p>
          </div>
          <div className={directorName}>
            <h2>Director :</h2>
            {props.director.map((director) => (
              <p key={director.id}>{director.name}</p>
            ))}
          </div>
          <div className={synopsisCss}>
            <h2>Synopsis :</h2>
            <p>{props.synopsis}</p>
          </div>

          <h2>Casting :</h2>
          <div className={actorContent}>
            {props.actors.map(({ name, character, profile_path, id }) => (
              <>
                <div>
                  <img className={actorsPaths}
                    src={profile_path ? imgUrl + profile_path : null}
                    alt={name} />
                </div>
                <br />
                <div className={actorName}>
                  <p key={id}>
                    <strong>{name}</strong> - {character}
                  </p>
                </div>
              </>

            ))}
          </div>
        </div>
      </div>

    </>
  );
}
