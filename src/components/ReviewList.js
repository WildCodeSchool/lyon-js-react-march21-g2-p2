//------------------ IMPORT COMPONENTS & STYLES -------------//
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

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
}));
//---------------------- GET THE REVIEWS FROM OUR API AND DISPLAY -------------------------//
export default function ReviewList({ reviewList }) {
  const { card } = useStyles();

  return (
    <>
      {reviewList &&
        reviewList.map((review) => (
          <Card className={card} key={review.id} variant="outlined">
            <CardContent>
              <h4 className="userName">{review.user_name}</h4>
              <p>{review.comment}</p>
            </CardContent>
          </Card>
        ))}
    </>
  );
}
