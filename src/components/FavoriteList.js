import Grid from '@material-ui/core/Grid';
import React from 'react';
import FavoriteInfos from './FavoriteInfos';

const FavoriteList = ({ movieList, imgUrl }) => {
  return (
    <>
      <Grid
        container
        spacing={0}
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
            overview,
          }) => (
            <FavoriteInfos
              key={id}
              id={id}
              date={date}
              title={title}
              genre={genre_ids}
              average={vote_average}
              poster={imgUrl + poster_path}
              synopsis={overview}
            />
          )
        )}
      </Grid>
    </>
  );
};

export default FavoriteList;
