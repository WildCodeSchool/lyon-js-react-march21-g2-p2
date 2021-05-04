import { Switch, Route } from 'react-router';
import HomePage from '../screens/HomePage';
import MoviePage from '../screens/MoviePage';
import FavoritePage from '../screens/FavoritePage';
import ContactPage from '../screens/ContactPage';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}));

export default function Main() {
  const classes = useStyles();
  let location = useLocation();
  let modal = location.state && location.state.background;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Switch location={modal || location}>
        <Route exact path="/" component={HomePage} />
        <Route excat path="/movies" component={MoviePage} />
        <Route exact path="/favorites" component={FavoritePage} />
        <Route exact path="/contact" component={ContactPage} />
      </Switch>
    </main>
  );
}
