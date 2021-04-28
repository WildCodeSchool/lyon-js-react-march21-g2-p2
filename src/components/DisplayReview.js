//------------------ IMPORT COMPONENTS & STYLES -------------//
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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

const movies = [
  {
    name: 'Pierre',
    comment:
      "Le Monde de Narnia : L'Odyssée du Passeur d'auroreLe Monde de Narnia : L'Odyssée du Passeur d'auroreLe Monde de Narnia : L'Odyssée du Passeur d'auroreLe Monde de Narnia : L'Odyssée du Passeur d'auroreLe Monde de Narnia : L'Odyssée du Passeur d'auroreLe Monde de Narnia : L'Odyssée du Passeur d'auroreLe Monde de Narnia : L'Odyssée du Passeur d'auroreLe Monde de Narnia : L'Odyssée du Passeur d'aurore",
  },
  {
    name: 'Thomas',
    comment: "j'ai adoré",
  },
];
export default function DisplayReview() {
  // export default function DisplayReview({ id, userName, comment }) {
  const { card, commentSection, name } = useStyles();

  /*useEffect(() => {
    //const [review, setReview ] = useState()
    axios
      .get(`http://localhost:5000/movies/${id}/reviews`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  });*/

  return (
    <div className={commentSection}>
      <h2>User Reviews</h2>
      {movies.map((movie) => (
        <Card className={card} variant="outlined">
          <CardContent>
            <Typography className={name} color="textSecondary" gutterBottom>
              {movie.name}
            </Typography>
            <Typography variant="body2" component="p">
              {movie.comment}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
