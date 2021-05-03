//------------------ IMPORT COMPONENTS & STYLES -------------//
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

//---------------------- STYLE CSS -------------------------//

const useStyles = makeStyles((theme) => ({
  card: {
    '& > *': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginTop: 20,
      width: '85ch',
    },
  },

  name: {
    fontSize: 14,
  },
}));
//---------------------- GET THE REVIEWS FROM OUR API AND DISPLAY -------------------------//
export default function ReviewList({ reviewList }) {
  const { card, name } = useStyles();

  //To avoid error on map method "reviewList &&"" otherwise our list is undefined
  return (
    <div className={card}>
      {reviewList.map((review) => (
        <Card className={card} key={review.id} variant="outlined">
          <CardContent>
            <Typography className={name} color="textSecondary" gutterBottom>
              {review.user_name}
            </Typography>
            <Typography variant="body2" component="p">
              {review.comment}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
