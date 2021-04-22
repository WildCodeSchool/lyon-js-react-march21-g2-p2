import React from 'react';
import Carousel from 'git ';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import CardMedia from '@material-ui/core/CardMedia';
import {
  Info,
  InfoCaption,
  InfoTitle,
} from '@mui-treasury/components/info';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(() => ({
  carousel: {
    cursor: "pointer",
    display: 'flex',
    justifyContent: 'center',
    width: '55%',
    height: 350,
  },
  carouselStyle: {
    display: 'flex',
    width: '100%',
    height: 350,
    objectFit: 'cover',
  },
  movieInformation: {
    color: "white",
    width: "100%"


  },
  BoxInformation: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    textAlign: "center",


  },
  movieName: {
    fontSize: "2em",
    display: "flex",
    fontWeight: "bold",
    textShadow: "3px 1px black",
    alignItems: "center",
    justifyContent: "center"

  },
  movieAverage: {
    textShadow: "2px 2px black",
    fontSize: "1em",
    display: "flex",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center"
  },
}));
const MovieCarousel = (props) => {
  const styles = useStyles();
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'center' });
  return (
    <Carousel className={clsx(styles.carousel)}>
      {props.movieList.map((movie) => (
        <Box className={clsx(styles.movieBox)}>

          <CardMedia
            className={clsx(styles.carouselStyle)}
            classes={mediaStyles}
            image={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          >
            <Box className={clsx(styles.BoxInformation)} >
              <Info className={clsx(styles.movieInformation)}>
                <InfoTitle className={clsx(styles.movieName)}>{movie.title}</InfoTitle>
                <InfoCaption className={clsx(styles.movieAverage)}>{movie.average}/10</InfoCaption>
              </Info>
            </Box>
          </CardMedia>
        </Box >
      ))
      }
    </Carousel >
  );
};
export default MovieCarousel;
