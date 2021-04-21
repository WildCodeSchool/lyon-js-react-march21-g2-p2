/*component import*/
import React from 'react';
import Grid from '@material-ui/core/Grid';

export default function DisplayInfos(props) {
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
            <img src={props.poster} alt="moviePosterTest" />
          </Grid>
          <Grid item>
            <h2>Title :</h2>
            <p>{props.title}</p>
            <h2>Date :</h2>
            <p>{props.date}</p>
            <h2>Director :</h2>
            <ul>
              {props.director
                .filter((crew) => crew.job === 'Director')
                .map((crew) => (
                  <li key={crew.id}>{crew.name}</li>
                ))}
            </ul>
            <h2>Actors :</h2>
            {/* <ul>
            {props.actors.map((actor) => (
            <li>{actor.name}</li>
            ))}
            </ul> */}
            <h2>Gender :</h2>
    
            <h2>Synopsis :</h2>
            <p>{props.synopsis}</p>
          </Grid>
        </Grid>
      </>

        
    );
}
