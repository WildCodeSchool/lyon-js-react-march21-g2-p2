//------------------ IMPORT COMPONENTS & STYLES -------------//
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

//---------------------- STYLE CSS -------------------------//

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
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

export default function DisplayReview({ id, userName, comment }) {
  const { root, commentSection, name } = useStyles();

  useEffect(() => {
    //const [review, setReview ] = useState()
    axios
      .get(`http://localhost:5000/movies/${id}/reviews`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  });

  return (
    <div className={commentSection}>
      <h2>User Reviews</h2>
      <Card className={root} variant="outlined">
        <CardContent>
          <Typography className={name} color="textSecondary" gutterBottom>
            {userName}
          </Typography>
          <Typography variant="body2" component="p">
            {comment}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
