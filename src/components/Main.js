import { Switch, Route } from 'react-router';
import HomePage from '../screens/HomePage';
import MoviePage from '../screens/MoviePage';
import FavoritePage from '../screens/FavoritePage';
import ContactPage from '../screens/ContactPage';
import DetailsPage from '../screens/DetailsPage';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    width: 'calc(100vw - var(--small-drawer-width))',
    [theme.breakpoints.up('sm')]: {
      width: 'calc(100vw - var(--medium-drawer-width))',
    },
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

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviePage} />
        <Route exact path="/favorites" component={FavoritePage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/movies/:tmdb_id" component={DetailsPage} />
      </Switch>
    </main>
  );
}
