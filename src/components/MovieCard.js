import React from 'react';
import './MovieCard.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: '20px',
    paddingRight: '20px',
    minWidth: 200,
    display: 'flex',
    direction: 'row',
    justify: 'flex-start',
    alignItems: 'flex-start',
  },
  Card: {
    width: 200,
    boxShadow: '0 5px 8px 0 rgba(0, 0, 0, 0.3)',
  },
  Media: {
    height: 300,
  },
});

export default function MovieCard({ title, img, id }) {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={3} className={classes.gridContainer}>
        <Grid item xs={6} sm={3} md={2} key={id}>
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
    </div>
  );
}
