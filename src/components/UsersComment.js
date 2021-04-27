//------------------ IMPORT COMPONENTS & STYLES -------------//
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm } from 'react-hook-form';
import React from 'react';
import axios from 'axios';

//---------------------- STYLE CSS -------------------------//

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      display: 'flex',
      paddingTop: 12,
    },
  },
  Message: {
    padding: 20,
  },
  form: {
    padding: 18,
    width: '40ch',
    margin: 'auto',
    borderRadius: '1rem',
    background: '#E2DFDB',
  },
  TextField: {
    paddingTop: 15,
    width: '35ch',
    margin: 'auto',
    display: 'flex',
    position: 'relative',
  },
  Button: {
    padding: 10,
    marginTop: 15,
    width: '35ch',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

//--------------------------- COMMENTS FUNCTION --------------------------//

export default function UserCommentsSection(props) {
  const { register, handleSubmit } = useForm();
  const classes = useStyles();

  const onSubmit = (form) => {
    form.title = props.title;
    axios
      .post(`http://localhost:5000/movies/${props.id}/reviews`, form)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1 className={classes.Message}>Votre avis sur ce film ?</h1>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={classes.TextField}
          id="filled-basic"
          label="userName"
          variant="filled"
          {...register('userName')}
        />
        <TextField
          className={classes.TextField}
          id="filled-multiline-static"
          label="comment"
          multiline
          rows={3}
          defaultValue=""
          variant="filled"
          {...register('comment')}
        />
        <Button className={classes.Button} variant="outlined" type="submit">
          Send
        </Button>
      </form>
    </>
  );
}
