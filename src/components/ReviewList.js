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
      margin: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
  },
  commentSection: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 50,
    maxWidth: '85ch',
  },
  name: {
    fontSize: 14,
  },
}));
//---------------------- GET THE REVIEWS FROM OUR API AND DISPLAY -------------------------//
export default function ReviewList({ movie_id }) {
  const { card, commentSection, name } = useStyles();
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/movies/${movie_id}/reviews`)
      .then((res) => setReviewList(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={commentSection}>
      <h2>User Reviews</h2>
      {reviewList &&
        reviewList.map((review) => (
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
