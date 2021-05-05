/*component import*/
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import clsx from 'clsx';
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: '1rem',
    margin: 0,
    width: 200,
    height: 300,
  },
  grid: {
    width: '100%',
    maxWidth: '100em',
    borderTop: 'solid 1px',
    paddingTop: '1%',
    paddingBottom: '5%',
    [theme.breakpoints.down('xs')]: {
      paddingTop: 50,
      paddingBottom: 50,
    },
  },
  content: {
    display: 'flex',
    alignItems: 'flex-start',
    bottom: 0,
    margin: 0,
   
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
    },
  },
  media: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    marginLeft: 20,
    fontSize: 15,
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      margin: 0,
      paddingTop: 20,
    },
  },
  isFav: {
    color: 'red',
  },
  favorite: {
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('xs')]: {
      position: 'absolute',
    }
  }
}));

const apiUrl = process.env.REACT_APP_API_SERVICE_URL;
const apiCreditRoute = '/credits?api_key=';
const apiLanguage = '&language=en-US';

const apiKey = process.env.REACT_APP_TMDB_API_KEY;

export default function FavoriteInfos({
  key,
  id,
  date,
  title,
  poster,
  synopsis,
}) {
  const [movieActors, setMovieActors] = useState([]);
  const [movieProductionCrew, setMovieProductionCrew] = useState([]);

  useEffect(() => {
    axios
      .get(apiUrl + '/movie/' + id + apiCreditRoute + apiKey + apiLanguage)
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
      <Grid
        key={key}
        className={clsx(styles.grid)}
        item
        xs={10}
        sm={6}
        md={4}
        lg={3}
        xl={2}
      >
        <div className={clsx(styles.favorite)}>
        <IconButton>
                <FavoriteIcon
                  variant="outlined"
                  className={clsx(styles.isFav)}
                />
              </IconButton>
        </div>
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
