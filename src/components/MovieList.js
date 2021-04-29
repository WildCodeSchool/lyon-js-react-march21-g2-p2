import React from 'react';
import MovieCard from './MovieCard';

import Grid from '@material-ui/core/Grid';

import DisplayPage from '../screens/DisplayPage';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

//-----------CSS FOR POPOVER-----------//
const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

const MovieList = ({
  movieList,
  imgUrl,
}) => {
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

  return (
    <>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
      >
        {movieList.map(
          ({
            id,
            release_date,
            vote_average,
            genre_ids,
            title,
            poster_path,
          }) => (
            <div aria-describedby={style} onClick={handleClick}>
              <MovieCard
                id={id}
                date={release_date}
                title={title}
                genre={genre_ids}
                average={vote_average}
                poster={imgUrl + poster_path}
              />
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
                  <DisplayPage tmdbId={id} />
                </Typography>
              </Popover>
            </div>
          )
        )}
      </Grid>
    </>
  );
};

export default MovieList;
