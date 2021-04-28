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
//--------------------------- FONCTION CONTACT --------------------------//

export default function ContactPage() {
  const { register, handleSubmit } = useForm();
  const classes = useStyles();
  const onSubmit = (form) => {
    alert('Votre demande a bien été prise en compte!');
    axios
      .post('http://localhost:5000/contact', form)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1 className={classes.Message}>
        Des conseils? Des suggestions? N'hésitez pas à nous le faire savoir !
      </h1>
      <form
        className={classes.form}
        onSubmit={handleSubmit(onSubmit)}
        method="POST"
        action="send"
      >
        <TextField
          className={classes.TextField}
          id="filled-basic"
          label="firstname"
          variant="filled"
          required="required"
          {...register('firstName')}
        />
        <TextField
          className={classes.TextField}
          id="filled"
          label="Lastname"
          variant="filled"
          required="required"
          {...register('lastName')}
        />
        <TextField
          className={classes.TextField}
          id="filled"
          label="Email"
          variant="filled"
          type="email"
          required="required"
          {...register('email')}
        />
        <TextField
          className={classes.TextField}
          id="filled-multiline-static"
          label="Text here"
          multiline
          rows={6}
          defaultValue=""
          variant="filled"
          required="required"
          {...register('text')}
        />
        <Button className={classes.Button} variant="outlined" type="submit">
          Send
        </Button>
      </form>
    </div>
  );
}
