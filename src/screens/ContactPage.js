//------------------ IMPORT COMPONENTS & STYLES -------------//
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
//---------------------- STYLE CSS -------------------------//

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      display: 'flex',
      paddingTop: '1em',
    },
  },
  message: {
    textAlign: 'center',
    marginBottom: '1em',
  },
  form: {
    padding: '2em',
    maxWidth: '60ch',
    margin: '2em auto',
    borderRadius: '1rem',
    background: 'var(--lighter-grey)',
  },
  textField: {
    paddingTop: '1em',
    margin: 'auto',
    display: 'flex',
  },
  button: {
    padding: '1em',
    marginTop: '1em',
    width: '100%',
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
    border: '2px solid var(--darker-grey)',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
//--------------------------- FONCTION CONTACT --------------------------//

export default function ContactPage() {
  const apiBase = process.env.REACT_APP_API_BASE_URL;
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
      .post(`${apiBase}/contact`, form)
      .then((res) => reset())
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className={message}>Let’s get in touch 👋</h2>
      <p className={message}>
        Suggestions, thanks or love notes? Let us know below 😃
      </p>
      <form
        className={form}
        onSubmit={handleSubmit(onSubmit)}
        method="POST"
        action="send"
      >
        <TextField
          className={textField}
          id="firstName"
          label="firstName"
          placeholder="Sarah"
          variant="outlined"
          required={true}
          {...register('firstName')}
        />
        <TextField
          className={textField}
          id="lastName"
          label="lastName"
          placeholder="Connor"
          variant="outlined"
          required={true}
          {...register('lastName')}
        />
        <TextField
          className={textField}
          id="email"
          name="email"
          label="Email"
          placeholder="sarah.connor@skynet.com"
          variant="outlined"
          type="email"
          required={true}
          {...register('email')}
        />
        <TextField
          className={textField}
          id="message"
          label="Message"
          multiline
          placeholder="Great website! Keep up the good work :)"
          rows={6}
          defaultValue=""
          variant="outlined"
          required={true}
          {...register('text')}
        />
        <div>
          <Button
            className={button}
            variant="outlined"
            type="submit"
            onClick={handleOpen}
          >
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
    </>
  );
}
