//------basical impor------//
import React from 'react';
import './MovieCard.css';
import DetailsPage from '../screens/DetailsPage';
import createPersistedState from 'use-persisted-state';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
//------MUI import------//
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Info, InfoCaption, InfoTitle } from '@mui-treasury/components/info';
import { useGalaxyInfoStyles } from '@mui-treasury/styles/info/galaxy';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
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
  modal: {
    margin: "auto",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: "none"

  },
}));

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = process.env.REACT_APP_TMDB_API_KEY;

/* On donne les info (sous forme de props) d'UN film au composant MovieCard et on retourne une MovieCard */
const MovieCard = ({
  id: movieId,
  title,
  genre,
  poster,
  average,
  date,
  synopsis,
  imgUrl,
}) => {
  const movieInfos = { movieId, title, average, date, synopsis, genre, imgUrl };
  const {
    card,
    content,
    movieInfo,
    favorite,
    isFav,
    notFav,
    modal,
    typography,
  } = useStyles();
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

  const [movieActors, setMovieActors] = useState([]);
  const [movieProductionCrew, setMovieProductionCrew] = useState([]);

  /*To get the informations required*/

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      axios
        .get(
          apiUrl +
          '/movie/' +
          movieId +
          '/credits?api_key=' +
          apiKey +
          '&language=en-US'
        )
        .then((crewInfos) => {
          setMovieActors(crewInfos.data.cast);
          setMovieProductionCrew(crewInfos.data.crew);
        })
        .catch((error) => {
          console.log('Error :', error);
        });
    }
  }, [open, movieId]);
  return (
    <Grid item key={movieId} xs={10} sm={6} md={4} lg={3} xl={2}>
      <Card className={card} onClick={handleOpen}>
        <CardMedia
          classes={mediaStyles}
          image={
            poster
              ? poster
              : 'https://images.unsplash.com/photo-1580130601254-05fa235abeab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fG1vdmllJTIwcG9zdGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
          }
        />
        <Box py={3} className={content}>
          <Box py={40} className={favorite}>
            <IconButton onClick={handleToggleFavorite}>
              <FavoriteIcon
                variant="contained"
                className={isFavorite ? isFav : notFav}
              />
            </IconButton>
          </Box>
          <Info className={movieInfo} useStyles={useGalaxyInfoStyles}>
            <InfoTitle>{title}</InfoTitle>
            <InfoCaption>Rating: {average}/10</InfoCaption>
          </Info>
        </Box>
      </Card>
      <Modal className={modal} open={open} onClose={handleClose}>
        <Typography key={movieId} className={typography}>
          <DetailsPage
            poster={poster}
            movieInfos={movieInfos}
            movieActors={movieActors}
            movieProductionCrew={movieProductionCrew}
          />
        </Typography>
      </Modal>
    </Grid>
  );
};

export default MovieCard;
