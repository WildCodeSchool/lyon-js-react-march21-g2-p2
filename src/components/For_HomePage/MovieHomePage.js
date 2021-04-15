/* eslint-disable no-lone-blocks */
import './MovieHomePage.css';
import axios from 'axios';
import clsx from 'clsx';
import { useState, useEffect } from 'react';

/*Material UI*/
import React from 'react';
//import GoogleFontLoader from 'react-google-font-loader';
//import NoSsr from '@material-ui/core/NoSsr';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import {
  Info,
  InfoCaption,
  InfoSubtitle,
  InfoTitle,
} from '@mui-treasury/components/info';
import { useGalaxyInfoStyles } from '@mui-treasury/styles/info/galaxy';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Grid from '@material-ui/core/Grid';
/* modele card Material UI */
const useStyles = makeStyles(() => ({
  card: {
    borderRadius: '1rem',
    boxShadow: 'none',
    position: 'relative',
    margin: 10,
    width: 250,
    height: 400,
    '&:after': {
      content: '""',
      bottom: 0,
      zIndex: 1,
    },
  },

  content: {
    opacity: 0,
    position: 'absolute',
    zIndex: 2,
    bottom: 0,
    width: '100%',
    margin: 0,
    '&:hover': {
      cursor: 'pointer',
      visibility: 'visible',
      zIndex: 2,
      bottom: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      background: 'black',
      opacity: 0.5,
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
    },
  },

  favoriteIcon: {
    color: 'white',
    display: 'flex',
    alignItems: 'flex-start',
  },
  movieInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginRight: 20,
    textAlign: 'start',
  },
  media: {
    width: 250,
    height: 400,
    objectFit: 'cover',
  }
}));

export const MovieHomeCard = React.memo(function GalaxyCard() {
  const [popularMovie, setPopularMovie] = useState([]);

  const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'top' });
  const styles = useStyles();

  /*Récupération des données Moviedb*/
  useEffect(() => {
    axios

      .get(
        'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f22eb05a70b166bd4e2c1312e15d8e8b'
      )

      .then((response) => response.data)

      .then((data) => {
        const mostPopularMovies = data.results;
        const moviesToShow = [];

        for (let i = 0; i <= 9; i += 1) {
          moviesToShow.push(mostPopularMovies[i]);
        }
        return setPopularMovie(moviesToShow);
      });
  }, []);

  /*Fonction pour les affiches des films*/

  const moviePoster = (resultId) => {
    const movieSrc = 'https://image.tmdb.org/t/p/w200';

    const selectedMovie = popularMovie.filter(
      (movie) => movie.id === parseInt(resultId)
    );
    const newMovie = selectedMovie[0];
    const newMoviePath = newMovie.poster_path;
    let movieLink = movieSrc + newMoviePath;

    return movieLink;
  };

  /*JSX a retourner*/

  return (
    <>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
        
      >
        {/*<NoSsr>
        <GoogleFontLoader
          fonts={[
            { font: 'Spartan', weights: [30] },
            { font: 'Montserrat', weights: [20, 40, 70] },
          ]}
        />
        </NoSsr>*/}
        {popularMovie.map((movie) => (
          <Grid item key={movie.id} xs={10} sm={6} md={4} lg={3} xl={2}>
            <Card  className={clsx(styles.card)}>
              <CardMedia
                className={styles.media}
                /*className={clsx(styles.cardStyle)}*/
                classes={mediaStyles}
                image={moviePoster(movie.id)}
              />

              <Box py={3} className={clsx(styles.content)}>
                <Box py={40} className={clsx(styles.favorite)}>
                  <IconButton>
                    <FavoriteIcon className={clsx(styles.favoriteIcon)} />
                  </IconButton>
                </Box>
                <Info
                  className={clsx(styles.movieInfo)}
                  useStyles={useGalaxyInfoStyles}
                >
                  <InfoSubtitle>Movie</InfoSubtitle>
                  <InfoTitle>{movie.title}</InfoTitle>
                  <InfoCaption>Note : {movie.vote_average}/10</InfoCaption>
                </Info>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
});

export default MovieHomeCard;
