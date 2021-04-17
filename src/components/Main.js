import './Main.css';
import { Switch, Route } from 'react-router';
import HomePage from '../screens/HomePage';
import MoviePage from '../screens/MoviePage';
import FavoritePage from '../screens/FavoritePage';

export default function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviePage} />
        <Route exact path="/favorites" component={FavoritePage} />
      </Switch>
    </main>
  );
}
