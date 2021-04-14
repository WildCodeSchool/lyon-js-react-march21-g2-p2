import React from 'react';
import './MovieCard.css';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Grid,
  Container,
} from '@material-ui/core';

function MovieCard({ img, date, title, genre, classes, id }) {
  return (
    <div>
      <Container>
        <Grid container spacing={3} className={classes.gridContainer}>
          <Grid item xs={12} sm={3} md={2} key={id}>
            <Card className={classes.Card}>
              <CardActionArea>
                <CardMedia
                  className={classes.Media}
                  component="img"
                  alt={title}
                  height="200"
                  image={img}
                />
                <CardContent>
                  <Typography gutterBottom variant="subtitle2" component="h2">
                    {title}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
