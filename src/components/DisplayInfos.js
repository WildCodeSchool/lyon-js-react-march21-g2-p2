/*component import*/
import React from 'react';
import Grid from '@material-ui/core/Grid';

export default function DisplayInfos() {
    return (
        <>
            <Grid container
            spacing={8}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            >
                <Grid item>
                    <img src="https://image.tmdb.org/t/p/w200/uuvSvLb3ntGA9B0wx2JskVDSuWi.jpg" alt="moviePosterTest" />
                </Grid>
                <Grid item >
                <h2>Title :</h2>
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
    )
};
