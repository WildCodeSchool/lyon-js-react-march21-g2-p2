import './Main.css';
import { Switch, Route } from 'react-router';
import HomePage from './HomePage';
import MoviesPage from './MoviesPage';
import FavoritesPage from './FavoritesPage';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}));

export default function Main() {
  const classes = useStyles();
  /*const theme = useTheme();*/

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route exact path="/favorites" component={FavoritesPage} />
      </Switch>
    </main>
  );
}
