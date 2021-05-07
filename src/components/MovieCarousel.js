import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import CardMedia from '@material-ui/core/CardMedia';
import { Info, InfoTitle } from '@mui-treasury/components/info';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import './MovieCard.js';

const useStyles = makeStyles(() => ({
  carousel: {
    display: 'flex',
    objectFit: 'cover',
    cursor: 'pointer',
    backgroundSize: 'contain',
    justifyContent: 'center',
    width: '100%',
    maxHeight: 300,
    paddingTop: '56.25%',
  },
  carouselStyle: {
    display: 'flex',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  movieInformation: {
    color: 'var(--text-primary)',
    width: '100%',
  },
  BoxInformation: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },
  movieName: {
    fontSize: '2em',
    display: 'flex',
    fontWeight: 'bold',
    textShadow: '2px 2px 5px black',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
const MovieCarousel = (props) => {
  const styles = useStyles();
  const imgUrl = process.env.REACT_APP_API_IMAGE_URL;
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'center' });
  return (
    <Carousel
      className={clsx(styles.carousel)}
      swipe={true}
      interval={5000}
      fullHeightHover={false}
      animation="fade"
      stopAutoPlayOnHover={true}
      navButtonsAlwaysVisible={true}
    >
      {props.movieList.map((movie) => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          <Box className={clsx(styles.movieBox)} key={movie.id}>
            <CardMedia
              className={clsx(styles.carouselStyle)}
              classes={mediaStyles}
              image={imgUrl + '/w1280' + movie.backdrop_path}
            >
              <Box className={clsx(styles.BoxInformation)}>
                <Info className={clsx(styles.movieInformation)}>
                  <InfoTitle className={clsx(styles.movieName)}>
                    {movie.title}
                  </InfoTitle>
                </Info>
              </Box>
            </CardMedia>
          </Box>
        </Link>
      ))}
    </Carousel>
  );
};
export default MovieCarousel;
