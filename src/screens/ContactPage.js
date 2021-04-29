//------------------ IMPORT COMPONENTS & STYLES -------------//
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm, Controller } from 'react-hook-form';
import React from 'react';
import axios from 'axios';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
//---------------------- STYLE CSS -------------------------//

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      display: 'flex',
      paddingTop: 12,
    },
  },
  message: {
    textAlign: "center",
    paddingBottom: "50px"
  },
  form: {
    padding: 18,
    width: '40ch',
    margin: 'auto',
    borderRadius: '1rem',
    background: '#E2DFDB',
  },
  textField: {
    paddingTop: 15,
    width: '35ch',
    margin: 'auto',
    display: 'flex',
    position: 'relative',
  },
  button: {
    padding: 10,
    marginTop: 15,
    width: '35ch',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),

  },
}));
//--------------------------- FONCTION CONTACT --------------------------//

export default function ContactPage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const { register, handleSubmit, reset } = useForm();
  const { message, form, textField, button, modal, paper } = useStyles();
  const onSubmit = (form) => {
    axios
      .post('http://localhost:5000/contact', form)
      .then((res) => reset())
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1 className={message}>
        Des conseils? Des suggestions? N'hésitez pas à nous le faire savoir !
      </h1>
      <form
        className={form}
        onSubmit={handleSubmit(onSubmit)}
        method="POST"
        action="send"
      >
        <TextField
          className={textField}
          id="filled"
          label="firstName"
          variant="filled"
          required={true}
          {...register('firstName')}
        />



        <TextField
          className={textField}
          id="filled"
          label="Lastname"
          variant="filled"

          required={true}
          {...register('lastName')}
        />
        <TextField
          className={textField}
          id="filled"
          label="Email"
          variant="filled"
          type="email"
          required={true}
          {...register('email')}
        />
        <TextField
          className={textField}
          id="filled-multiline-static"
          label="Text here"
          multiline
          rows={6}
          defaultValue=""
          variant="filled"
          required={true}
          {...register('text')}
        />
        <div>
          <Button className={button} variant="outlined" type="submit" onClick={handleOpen} >
            Send
      </Button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={paper}>
                <p>your request has been registered! </p>
              </div>
            </Fade>
          </Modal>
        </div>
      </form>
    </div>
  );
}
