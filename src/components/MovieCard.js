import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
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

import DetailsPage from './DetailsPage';

import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

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
}));

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = process.env.REACT_APP_TMDB_API_KEY;

/* On donne les info (sous forme de props) d'UN film au composant MovieCard et on retourne une MovieCard */
const MovieCard = ({ id, poster, title, average, date, synopsis, genre }) => {

  const movieInfos = {id, title, average, date, synopsis, genre };

  const { card, content, movieInfo, favorite, isFav, notFav } = useStyles();
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'center' });

  const [isFavoriteMovie, setIsFavoriteMovie] = useState(false);

  const handleToggleFavorite = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsFavoriteMovie(!isFavoriteMovie);
  };

  //----------GET DETAILED INFOS------//


  const [movieActors, setMovieActors] = useState([]);
  const [movieProductionCrew, setMovieProductionCrew] = useState([]);

  //---------POPOVER ELEMENTS----------//
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const style = open ? 'simple-popover' : undefined;

  
  useEffect(() => {
    if(anchorEl){
      axios
      .get(apiUrl + '/movie/' + id + '/credits?api_key=' + apiKey + '&language=en-US')
      .then((crewInfos) => {
            setMovieActors(crewInfos.data.cast);
            setMovieProductionCrew(crewInfos.data.crew);
          })
      .catch((error) => {
          console.log('Error :', error);
        });
      }
    },[anchorEl]);
    


  return (
    <Grid item key={id} xs={10} sm={6} md={4} lg={3} xl={2}>
      <Card className={clsx(card)} aria-describedby={style} onClick={handleClick}>
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
                variant="contained"
                className={clsx(isFavoriteMovie ? isFav : notFav)}
              />
            </IconButton>
          </Box>
          <Info className={clsx(movieInfo)} useStyles={useGalaxyInfoStyles}>
            <InfoTitle>{title}</InfoTitle>
            <InfoCaption>Rating : {average}/10</InfoCaption>
          </Info>
        </Box>
      </Card>
      <Popover
                id={style}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'center',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'center',
                  horizontal: 'left',
                }}
              >
                <Typography className={classes.typography}>
                  <DetailsPage movieInfos={movieInfos} movieActors={movieActors} movieProductionCrew={movieProductionCrew} tmdbId={id} />
                </Typography>
            </Popover>
    </Grid>
  );
};

export default MovieCard;
