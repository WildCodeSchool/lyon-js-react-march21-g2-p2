import './Header.css';
// import ReactDOM from 'react-dom';

import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  navBar: {
    display: 'inline-flex',
    justifyContent: 'flex-end',
    flexGrow: 2,
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[400],
    },
    secondary: {
      main: '#f57c00',
    },
  },
});

export default function Header() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppBar color="secondary" position="static">
          <Toolbar>
            <IconButton
              style={{ color: 'white' }}
              className={classes.menuButton}
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.navBar}>
              <nav>
                <ul>
                  <li>
                    <NavLink exact activeClassName="active" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact activeClassName="active" to="/movies">
                      Movies
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact activeClassName="active" to="/favorites">
                      Favorites
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
}
