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
      width: 'auto',
      margin: 15,
    },
  },

  name: {
    fontSize: 14,
  },
}));
//---------------------- GET THE REVIEWS FROM OUR API AND DISPLAY -------------------------//
export default function ReviewList({ movie_id }) {
  const { card, name } = useStyles();
  const [reviewList, setReviewList] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:5000/movies/' + movie_id + '/reviews')
      .then((res) => setReviewList(res.data))
      .catch((err) => console.log(err));
  }, []);

  //si le film n'a pas de review alors rien sinon API
  //To avoid error on map method "reviewList &&"" otherwise our list is undefined
  return (
    reviewList && (
      <div className={card}>
        <h2>User Reviews</h2>
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
    )
  );
}
