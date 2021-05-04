import React from 'react';
import './MovieCard.css';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { Info, InfoCaption, InfoTitle } from '@mui-treasury/components/info';
import { useGalaxyInfoStyles } from '@mui-treasury/styles/info/galaxy';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import clsx from 'clsx';
import createPersistedState from 'use-persisted-state';
import { Link } from 'react-router-dom';

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
      transition: 'opacity .3s ease-in-out',
      cursor: 'pointer',
      visibility: 'visible',
      zIndex: 2,
      bottom: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      background: 'hsla(0, 0%, 0%, 0.5)',
      opacity: 1,
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
    },
  },

  movieInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginRight: 25,
    textAlign: 'start',
    width: '100%',
    height: '100%',
  },
  media: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  isFav: {
    color: 'red',
  },
  notFav: {
    color: 'white',
  },
}));

/* On donne les info (sous forme de props) d'UN film au composant MovieCard et on retourne une MovieCard */
const MovieCard = ({ id: movieId, title, genre, poster, average }) => {
  const { card, content, movieInfo, favorite, isFav, notFav } = useStyles();
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'center' });

  const useFavoriteMoviesState = createPersistedState('favoriteMovies');
  const [favoriteMovies, setFavoriteMovies] = useFavoriteMoviesState({});

  const isFavorite = !!favoriteMovies[movieId];
  // function to handle the toggling of a movie's favorite state and adding it using localStorage
  const handleToggleFavorite = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setFavoriteMovies((favoriteMovies) => {
      return {
        ...favoriteMovies,
        [movieId]: isFavorite
          ? false
          : {
              id: movieId,
              title: title,
              genre: genre,
              poster_path: poster,
            },
      };
    });
  };

  return (
    <Link key={movieId} to={`/movies/${movieId}`}>
      <Grid item xs={10} sm={6} md={4} lg={3} xl={2}>
        <Card className={clsx(card)}>
          <CardMedia
            classes={mediaStyles}
            image={
              poster
                ? poster
                : 'https://images.unsplash.com/photo-1580130601254-05fa235abeab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fG1vdmllJTIwcG9zdGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            }
          />
          <Box py={3} className={clsx(content)}>
            <Box py={40} className={clsx(favorite)}>
              <IconButton onClick={handleToggleFavorite}>
                <FavoriteIcon
                  variant="outlined"
                  className={clsx(isFavorite ? isFav : notFav)}
                />
              </IconButton>
            </Box>
            <Info className={clsx(movieInfo)} useStyles={useGalaxyInfoStyles}>
              <InfoTitle>{title}</InfoTitle>
              <InfoCaption>{`Rating: ${average * 10}%`}</InfoCaption>
            </Info>
          </Box>
        </Card>
        {/* <h4 style={{ marginLeft: '1em' }}>{title}</h4> */}
      </Grid>
    </Link>
  );
};

export default MovieCard;
