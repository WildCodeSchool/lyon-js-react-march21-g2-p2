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
} from '@material-ui/core';

const useStyles = makeStyles({
  item: {
    minWidth: '300px',
    margin: '1em',
    textAlign: 'center',
    boxSizing: 'border-box',
  },

  media: {
    minHeight: '150px',
  },
});

export default function MovieCard({ title, img, id }) {
  const classes = useStyles();
  return (
    <Card className={classes.item}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
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
  );
}
