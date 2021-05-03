//------------------ IMPORT COMPONENTS & STYLES -------------//
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

//---------------------- STYLE CSS -------------------------//

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: '1em',
    '& > *': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      width: '75ch',
    },
  },

  name: {
    fontSize: 14,
  },
}));
//---------------------- GET THE REVIEWS FROM OUR API AND DISPLAY -------------------------//
export default function ReviewList({ reviewList }) {
  const { card, name } = useStyles();

  return (
    <>
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
    </>
  );
}
