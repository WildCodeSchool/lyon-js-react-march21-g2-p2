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
    borderRadius: '1em',
    position: 'relative',
    margin: '1em',
    width: 200,
    height: 300,
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
    padding: '1em',
    height: '100%',
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
      flexDirection: 'column',
      justifyContent: 'space-between',
      background: 'hsla(0, 0%, 0%, 0.5)',
      opacity: 1,
    },
  },
  favorite: {
    display: 'flex',
    justifyContent: 'flex-end',
  },

  movieInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    textAlign: 'start',
    width: '100%',
    height: '100%',
  },
  isFav: {
    color: 'var(--accent-color-2)',
  },
  notFav: {
    color: 'var(--light-grey)',
  },
}));

/* On donne les info (sous forme de props) d'UN film au composant MovieCard et on retourne une MovieCard */
const MovieCard = ({ id: movieId, title, genre, poster, average }) => {
  const { card, content, movieInfo, favorite, isFav, notFav } = useStyles();
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'center' });

  const useFavoriteMoviesState = createPersistedState('favoriteMovies');
  const [favoriteMovies, setFavoriteMovies] = useFavoriteMoviesState({});
  const defaultImg = process.env.REACT_APP_DEFAULT_IMG;

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
      <Grid item>
        <Card className={clsx(card)}>
          <CardMedia
            classes={mediaStyles}
            image={poster ? poster : defaultImg}
          />
          <Box className={clsx(content)}>
            <IconButton
              className={clsx(favorite)}
              onClick={handleToggleFavorite}
            >
              <FavoriteIcon
                variant="outlined"
                className={clsx(isFavorite ? isFav : notFav)}
              />
            </IconButton>
            <Info className={clsx(movieInfo)} useStyles={useGalaxyInfoStyles}>
              <InfoTitle>{title}</InfoTitle>
              <InfoCaption>{`Rating: ${average * 10}%`}</InfoCaption>
            </Info>
          </Box>
        </Card>
        <h4
          style={{
            textAlign: 'center',
            maxWidth: '20ch',
            margin: '.5em auto 1em',
            maxHeight: '1.5em',
            overflow: 'hidden',
          }}
        >
          {title}
        </h4>
      </Grid>
    </Link>
  );
};

export default MovieCard;
