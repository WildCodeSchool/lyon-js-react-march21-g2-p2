import React from 'react';
import './Header.css';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
} from '@material-ui/core';
import {
  Divider,
  IconButton,
  ListItemText,
  ListItemIcon,
  ListItem,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeIcon from '@material-ui/icons/Home';
import MovieIcon from '@material-ui/icons/Movie';
import MailIcon from '@material-ui/icons/Mail';
import StarsIcon from '@material-ui/icons/Stars';
import logo from '../assets/logo.png';
const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  appBar: {
    background:
      'linear-gradient(to right bottom, var(--orange), var(--yellow))',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  logo: {
    maxWidth: 60,
    marginRight: '1em',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    background: 'var(--bg-secondary)',
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: 'var(--small-drawer-width)',
    [theme.breakpoints.up('sm')]: {
      width: 'var(--medium-drawer-width)',
    },
    background: 'var(--bg-secondary)',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  listItemText: {
    color: 'var(--text-primary)',
    '& *': {
      fontFamily: 'var(--sans-serif-font)',
    },
  },
  navIcon: {
    color: 'var(--text-primary)',
  },
}));

export default function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <CssBaseline />
      {/*Creation de la barre de nav*/}
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        {/*Creation ToolBar*/}
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} alt="Logo" className={classes.logo} />
          <Typography variant="h1" className="title" noWrap>
            Dolly
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        {/*insertion des routes et association avec les icones*/}
        <List>
          <NavLink exact activeClassName="active" to="/">
            <ListItem button>
              <ListItemIcon>
                <HomeIcon className={classes.navIcon} />
              </ListItemIcon>
              <ListItemText primary="Home" className={classes.listItemText} />
            </ListItem>
          </NavLink>
          <NavLink exact activeClassName="active" to="/movies">
            <ListItem button>
              <ListItemIcon>
                <MovieIcon className={classes.navIcon} />
              </ListItemIcon>
              <ListItemText primary="Movie" className={classes.listItemText} />
            </ListItem>
          </NavLink>
          <NavLink exact activeClassName="active" to="/favorites">
            <ListItem button>
              <ListItemIcon>
                <StarsIcon className={classes.navIcon} />
              </ListItemIcon>
              <ListItemText
                primary="Favorites"
                className={classes.listItemText}
              />
            </ListItem>
          </NavLink>
          <NavLink exact activeClassName="active" to="/contact">
            <ListItem button>
              <ListItemIcon>
                <MailIcon className={classes.navIcon} />
              </ListItemIcon>
              <ListItemText
                primary="Contact Us"
                className={classes.listItemText}
              />
            </ListItem>
          </NavLink>
        </List>
      </Drawer>
    </>
  );
}
