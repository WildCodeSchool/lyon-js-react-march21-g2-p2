//------------------ IMPORT COMPONENTS & STYLES -------------//
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm } from 'react-hook-form';
import React from 'react';

//---------------------- STYLE CSS -------------------------//

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      display: 'flex',
      paddingTop: 12,
    },
  },
  Button: {
    padding: 10,
    marginTop: 15,
    width: '35ch',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextField: {
    paddingTop: 15,
    width: '35ch',
    margin: 'auto',
    display: 'flex',
    position: 'relative',
    
  },
  form: {
    padding:18,
    width: '40ch',
    margin: 'auto',
    borderRadius: '1rem',
    background: '#E2DFDB',
  }
}));
//--------------------------- FONCTION CONTACT --------------------------//

export default function Contact() {
  const { register, handleSubmit } = useForm();
  const classes = useStyles()
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <TextField 
        className={classes.TextField} 
        id="filled-basic"
        label="firstname"
        variant="filled"
        {...register('firstName')}
      />
      <TextField
        className={classes.TextField}
        id="filled"
        label="Lastname"
        variant="filled"
        {...register('lastName')}
      />
      <TextField
        className={classes.TextField}
        id="filled"
        label="Email"
        variant="filled"
        type="email"
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
        {...register('text')}
      />
      <Button
        className={classes.Button} 
        variant="outlined"
        type="submit">Send
      </Button>
    </form>
  );
}

 
