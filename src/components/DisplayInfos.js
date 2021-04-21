/*component import*/
import React from 'react';
import Grid from '@material-ui/core/Grid';

export default function DisplayInfos(props) {
  // const chosenMovie = props.movie
  return (
    <>
      <Grid
        container
        spacing={8}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item>
          <img src="" alt="moviePosterTest" />
        </Grid>
        <Grid item>
          <h2>Title :{props.currentMovie.title}</h2>
          <p>Mad Max</p>
          <h2>Date :</h2>
          <p></p>
          <h2>Director :</h2>
          <p></p>
          <h2>Actors :</h2>
          <p></p>
          <h2>Gender :</h2>
          <p></p>
          <h2>Synopsis :</h2>
          <p></p>
        </Grid>
      </Grid>
    </>
  );
}
