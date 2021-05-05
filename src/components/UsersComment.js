//------------------ IMPORT COMPONENTS & STYLES -------------//
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

//---------------------- STYLE CSS -------------------------//

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'var(--text-secondary)',
    borderRadius: '1em',
    maxWidth: '30ch',
    '& > *': {
      margin: theme.spacing(2),
      width: '25ch',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      // margin: '0 auto',
    },
  },
  commentSection: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 50,
    alignItems: 'center',
  },
  Button: {
    padding: 5,
    marginTop: 15,
    width: '25ch',
  },
}));

//--------------------------- COMMENTS FUNCTION --------------------------//

export default function UsersComments(props) {
  const { register, handleSubmit, reset } = useForm();
  const classes = useStyles();

  const onSubmit = (form) => {
    form.title = props.title;
    axios
      .post(
        `${process.env.REACT_APP_API_BASE_URL}/movies/${props.id}/reviews`,
        form
      )
      .then((res) => {
        props.setReviewList((currentReviews) => {
          return [...currentReviews, res.data];
        });
        reset();
      })
      .catch((err) =>
        alert(
          'Required length for the name field : between 2 and 50 characters. The comment field should contains at least 2 characters'
        )
      );
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
