//------------------ IMPORT COMPONENTS & STYLES -------------//
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm } from 'react-hook-form';
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
    textAlign: 'center',
    paddingBottom: '50px',
  },
  form: {
    padding: 12,
    width: '40ch',
    margin: 'auto',
    borderRadius: '8px',
    border: '1px solid #CBCBCB',
  },
  textField: {
    width: '35ch',
    marginTop:9,
    margin: 'auto',
    paddingTop: 14,
    display: 'flex',
    position: 'relative',
  },
  button: {
    padding: 14,
    width: '35ch',
    marginTop: 22,
    margin: 'auto',
    display: 'flex',
    marginBottom: 12,
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
      <h1 className={message}>Any comments ? Contact Us.</h1>
      <form
        className={form}
        onSubmit={handleSubmit(onSubmit)}
        method="POST"
        action="send"
      >
        <TextField
          className={textField}
          id="outlined-basic"
          label="firstname"
          variant="outlined"
          required={true}
          {...register('firstName')}
        />

        <TextField
          className={textField}
          id="outlined-basic"
          label="Lastname"
          variant="outlined"
          required={true}
          {...register('lastName')}
        />
        <TextField
          className={textField}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
          required={true}
          {...register('email')}
        />
        <TextField
          className={textField}
          id="outlined-multiline-basic"
          label="Text here"
          multiline
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
    </div>
  );
}
