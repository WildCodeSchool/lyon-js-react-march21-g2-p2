/*component import*/
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

//------Css w/ mui------//
const useStyles = makeStyles(() => ({
  //------css for the container------//
  container: {
    display: 'flex',
    flexDirection: 'row-reverse',
    height: '100%',
  },
  //------css for the poster------//
  cardImage: {
    width: '100%',
    heigth: '100%',
    display: 'flex',
    borderRadius: '1rem',
  },
  imageContent: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '200px',
    heigth: '300px',
    flexDirection: 'column',
  },
  //------css for all part text------//
  textContent: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingRight: '1em',
    margin: 0,
  },
  titleEx: {
    textAlign: 'start',
  },
  description: {
    display: 'flex',
    textAlign: 'start',
    flexDirection: 'column',
    paddingBottom: '1em',
  },
  synopsisContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    paddingBottom: '1em',
  },
  //------css for the actors pictures------//
  actorContent: {
    display: 'flex',
    justifySelf: 'flex-end',
    flexDirection: 'column',
    paddingBottom: '1em',
  },
  actor: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 2em',
  },
  actorsPaths: {
    display: 'block',
    height: '100px',
    width: '100px',
    borderRadius: '50%',
  },
  castingList: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'Row',
    flexWrap: 'wrap',
  },
}));
const imgUrl = 'https://image.tmdb.org/t/p/w200';

export default function MovieInfos(props) {
  const {
    container,
    actorContent,
    actor,
    actorsPaths,
    titleEx,
    description,
    synopsisContent,
    castingList,
    cardImage,
    imageContent,
    textContent,
  } = useStyles();
  return (
    <div className={container}>
      <div className={imageContent}>
        <img className={cardImage} src={props.poster} alt={'img'} />
      </div>
      <div className={textContent}>
        <div className={description}>
          <h2 className={titleEx}>Title :</h2>
          <p>{props.title}</p>
        </div>
        <div className={description}>
          <h2 className={titleEx}>Date :</h2>

          <p>{props.date}</p>
        </div>
        <div className={description}>
          <h2 className={titleEx}>Director :</h2>

          {props.director.map((director) => (
            <p key={director.id}>{director.name}</p>
          ))}
        </div>

        <h2 className={titleEx}>Synopsis :</h2>
        <div className={synopsisContent}>
          <p>{props.synopsis}</p>
        </div>
        <div className={actorContent}>
          <h2 className={titleEx}>Casting :</h2>
          <div className={castingList}>
            {props.actors.map(({ name, character, profile_path, id }) => (
              <div className={actor}>
                <img
                  className={actorsPaths}
                  src={profile_path ? imgUrl + profile_path : null}
                  alt={name}
                />
                <h4 key={id}>{name}</h4>
                <p>{character}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
