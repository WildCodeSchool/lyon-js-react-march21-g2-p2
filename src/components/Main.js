import './Main.css';
import { Switch, Route } from 'react-router';
import HomePage from './HomePage';
import MoviesPage from './MoviesPage';
import FavoritesPage from './FavoritesPage';

export default function Main() {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/movies' component={MoviesPage} />
        <Route exact path='/favorites' component={FavoritesPage} />
      </Switch>
    </main>
  );
}
