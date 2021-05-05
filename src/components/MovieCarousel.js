import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import { Info, InfoTitle } from '@mui-treasury/components/info';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import clsx from 'clsx';
import React from 'react';
import Carousel from 'react-material-ui-carousel';

const useStyles = makeStyles(() => ({
  carousel: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    width: 'clamp(50%, 80% , 100%)',
    height: 400,
  },
  carouselStyle: {
    display: 'flex',
    width: '100%',
    height: 350,
    objectFit: 'cover',
  },
  movieInformation: {
    color: 'white',
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
      fullHeightHover={true}
      animation="fade"
      stopAutoPlayOnHover={true}
      navButtonsAlwaysVisible={true}
    >
      {props.movieList.map((movie) => (
        <Box className={clsx(styles.movieBox)} key={movie.id}>
          <CardMedia
            className={clsx(styles.carouselStyle)}
            classes={mediaStyles}
            image={`${imgUrl}/w500${movie.backdrop_path}`}
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
      ))}
    </Carousel>
  );
};
export default MovieCarousel;
