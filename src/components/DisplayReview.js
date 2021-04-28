//------------------ IMPORT COMPONENTS & STYLES -------------//
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useForm } from 'react-hook-form';
import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';

//---------------------- STYLE CSS -------------------------//

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      width: '25ch',
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
  },
}));

export default function DisplayReviews({ id, userName, comment }) {
  const { register } = useForm();
  const { root, commentSection } = useStyles();


  useEffect(() => {
    //const [review, setReview ] = useState()
    axios
      .get(`http://localhost:5000/movies/${id}/reviews`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  });

  return (
    <div className={commentSection}>
      <h1>User Reviews</h1>
      <form className={root} noValidate autoComplete="off">
        <TextField
          required
          size="small"
          color="primary"
          className="userName"
          label="Name"
          id="outlined-required"
          defaultValue=""
          variant="outlined"
          {...register('userName')}
        />
        <TextField
          required
          multiline
          color="primary"
          className="comment"
          id="outlined-required-multiline-static"
          label="Comment"
          rows={2}
          defaultValue=""
          variant="outlined"
          {...register('comment')}
        />
      </form>
    </div>
  );
}
