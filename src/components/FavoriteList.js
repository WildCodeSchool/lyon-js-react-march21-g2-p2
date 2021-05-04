import Grid from '@material-ui/core/Grid';
import React from 'react';
import FavoriteInfos from './FavoriteInfos';

const FavoriteList = ({ movieList, imgUrl }) => {
  return (
    <>
      <Grid
        container
        spacing={8}
        direction="column"
        justify="flex-start"
        align="flex-start"
      >
        {movieList.map(
          ({
            id,
            date,
            vote_average,
            genre_ids,
            title,
            poster_path,
            synopsis,
          }) => (
            <FavoriteInfos
              key={id}
              id={id}
              date={date}
              title={title}
              genre={genre_ids}
              average={vote_average}
              poster={imgUrl + poster_path}
              synopsis={synopsis}
            />
          )
        )}
      </Grid>
    </>
  );
};

export default FavoriteList;
