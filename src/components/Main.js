import './Main.css';
import { Switch, Route } from 'react-router';
import HomePage from '../screens/HomePage';
import MoviePage from '../screens/MoviePage';
import FavoritePage from '../screens/FavoritePage';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}));

export default function Main() {

  const classes = useStyles();

  return (
    <main className={classes.content}>
    <div className={classes.toolbar} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviePage} />
        <Route exact path="/favorites" component={FavoritePage} />
      </Switch>
    </main>
  );
}
