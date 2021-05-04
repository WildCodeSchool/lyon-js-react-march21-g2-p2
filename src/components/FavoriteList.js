import Grid from '@material-ui/core/Grid';
import React from 'react';
import FavoriteInfos from './FavoriteInfos';

const FavoriteList = ({ movieList, imgUrl }) => {
  

  return (
    <>
      <Grid
        container
        spacing={8}
        direction="row"
        style={{ marginTop: '2em' }}
      >
        {movieList.map(
          ({
            id,
            release_date,
            title,
            poster_path,
            overview
          }) => (
            <FavoriteInfos
            key={id}
            id={id}
            poster={imgUrl + poster_path}
            title={title}
            date={release_date}
            synopsis={overview}
          />
          )
        )}
      </Grid>
    </>
  );
};

export default FavoriteList;
