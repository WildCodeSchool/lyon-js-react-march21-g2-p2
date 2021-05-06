import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  footer: {
    position: 'relative',
    bottom: 0,
  }
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Header />
        <Main />
      </div>
      <Footer className={classes.footer} />
    </>
  );
}

export default App;
