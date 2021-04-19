import React from 'react';
import './MovieCard.css';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Grid from '@material-ui/core/Grid';
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
import clsx from 'clsx';

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
}));

/* On donne les info (sous forme de props) d'UN film au composant MovieCard et on retourne une MovieCard */
const MovieCard = (props) => {
  const styles = useStyles();
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'center' });

  return (
    <>
      <Grid item key={props.id} xs={10} sm={6} md={4} lg={3} xl={2}>
        <Card className={clsx(styles.card)}>
          <CardMedia
            className={clsx(styles.cardStyle)}
            classes={mediaStyles}
            image={props.poster}
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
              <InfoTitle>{props.title}</InfoTitle>
              <InfoCaption>Note : {props.average}/10</InfoCaption>
            </Info>
          </Box>
        </Card>
      </Grid>
    </>
  );
};

export default MovieCard;
