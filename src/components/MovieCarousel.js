import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import CardMedia from '@material-ui/core/CardMedia';
const useStyles = makeStyles(() => ({
    carousel: {
        display: "flex",
        justifyContent: "center",
        width: "55%",
        height: 350
    },
    carouselStyle: {
        display: "flex",
        width: "100%",
        height: 350,
        objectFit: "cover"
    }
}))
const MovieCarousel = (props) => {
    const styles = useStyles();
    const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'center' });
    return (
        <Carousel className={clsx(styles.carousel)}>
            {props.movieList.map((movie) =>
                <CardMedia
                    className={clsx(styles.carouselStyle)}
                    classes={mediaStyles}
                    id={movie.id}
                    title={movie.title}
                    image={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                />
            )}
        </Carousel >
    );
}
export default MovieCarousel;