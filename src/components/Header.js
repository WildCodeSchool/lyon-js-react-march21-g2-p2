import './Header.css';
// import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <ul>
      <li>
        <NavLink exact activeClassName='active' to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName='active' to='/movies'>
          Movies
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName='active' to='/favorites'>
          Favorites
        </NavLink>
      </li>
    </ul>
  );
}
