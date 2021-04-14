/* eslint-disable no-lone-blocks */
import './MovieHomePage.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

/*Material UI*/
import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import NoSsr from '@material-ui/core/NoSsr';
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
import Grid from '@material-ui/core/Grid';
/* modele card Material UI */
const useStyles = makeStyles(() => ({
  card: {
    borderRadius: '1rem',
    boxShadow: 'none',
    position: 'relative',
    margin: 10,
    minWidth: 300,
    minHeight: 400,
    '&:after': {
      content: '""',
      bottom: 0,
      zIndex: 1,
      background: 'linear-gradient(to top, #000, rgba(0,0,0,0))',
    },
  },
  content: {
    position: 'absolute',
    zIndex: 2,
    bottom: 0,
    width: '100%',
  },
}));

export const MovieHomeCard = React.memo(function HomeCard() {
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
      <NoSsr>
        <GoogleFontLoader
          fonts={[
            { font: 'Spartan', weights: [30] },
            { font: 'Montserrat', weights: [20, 40, 70] },
          ]}
        />
      </NoSsr>
      <Grid
        container
        spacing={6}
        justify="space-around"
        alignItems="center"
        direction="row"
      >
        {popularMovie.map((movie) => (
          <Grid item key={movie.id}>
            <Card className={styles.card}>
              <CardMedia classes={mediaStyles} image={moviePoster(movie.id)} />
              <Box py={3} px={2} className={styles.content}>
                <Info useStyles={useGalaxyInfoStyles}>
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
