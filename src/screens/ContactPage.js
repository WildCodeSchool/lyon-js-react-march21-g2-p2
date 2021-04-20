import React from 'react';
import { useForm } from 'react-hook-form';
import './ContactPage.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      marginTop: theme.spacing(8),
      width: '25ch',
    },
  },
  Button: {
    marginTop: theme.spacing(8),
    width: '25ch',
  },
}));

function Contact() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="Contact">
      <form className="Form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextField
            id="filled-basic"
            label="firstName"
            variant="filled"
            {...register('firstName')}
          />
        </div>

        <div>
          <TextField
            id="filled"
            label="LastName"
            variant="filled"
            {...register('lastName')}
          />
        </div>

        <div>
          <TextField
            id="filled"
            label="Email"
            variant="filled"
            type="email"
            {...register('email')}
          />
        </div>

        <div>
          <TextField
            id="filled-multiline-static"
            label="Text here"
            multiline
            rows={3}
            defaultValue=""
            variant="filled"
            {...register('text')}
          />
        </div>
        <>
          <Button className="SubmitButton" type="submit">
            Send
          </Button>
        </>
      </form>
    </div>
  );
}

export default Contact;
