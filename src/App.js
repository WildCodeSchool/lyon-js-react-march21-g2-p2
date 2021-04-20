import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Header />
        <Main />
      </div>

      <Footer />
    </>
  );
}

export default App;
