//------------------ IMPORT COMPONENTS & STYLES -------------//
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { useForm } from 'react-hook-form';
import React from 'react';
import axios from 'axios';

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
  Button: {
    padding: 5,
    marginTop: 15,
    width: '11ch',
  },
}));

//--------------------------- COMMENTS FUNCTION --------------------------//

export default function UsersComments(props) {
  const { register, handleSubmit, reset } = useForm();
  const classes = useStyles();

  const onSubmit = (form) => {
    form.title = props.title;
    axios
      .post(`http://localhost:5000/movies/${props.id}/reviews`, form)
      .then((res) => {
        props.setReviewList((currentReviews) => {
          return [...currentReviews, res.data];
        });
        reset();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={classes.commentSection}>
      <h3 className={classes.Message}>What did you think about this movie?</h3>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          required
          className="name"
          label="Name"
          id="name"
          defaultValue=""
          variant="outlined"
          {...register('user_name')}
        />
        <TextField
          required
          multiline
          className="comment"
          id="comment"
          label="Comment"
          rows={2}
          defaultValue=""
          variant="outlined"
          {...register('comment')}
        />
        <Button
          className={classes.Button}
          variant="outlined"
          type="submit"
          endIcon={<Icon>send</Icon>}
        >
          Send
        </Button>
      </form>
    </div>
  );
}
