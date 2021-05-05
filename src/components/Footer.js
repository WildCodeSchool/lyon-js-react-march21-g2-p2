import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import clsx from 'clsx';
import wcs from '../assets/wcs.png';

const useStyles = makeStyles((theme) => ({
  Footer: {
    width: '100%',
    textAlign: 'center',
    background: 'var(--dark-grey)',
    padding: '1em',
  },
  Typography: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'var(--text-primary)',
  },
  icons: {
    display: 'flex',
    justifyContent: 'center',
    '& > *': {
      margin: 'auto',
    },
  },
  wild: {
    maxWidth: '24px',
    maxHeight: '24px',
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <footer className={clsx(classes.Footer)}>
      <div className={classes.icons}>
        <a href="https://github.com/orgs/WildCodeSchool/teams/lyon-js-march21-g2-p2/repositories">
          <Typography className={clsx(classes.Typography)}>
            <GitHubIcon />
          </Typography>
        </a>
        <a href="https://www.wildcodeschool.com/fr-FR/formations/developpeur-web?campus=lyon">
          <img src={wcs} alt="Wild Code School" className={classes.wild} />
        </a>
      </div>
      <Typography variant="caption" className={clsx(classes.Typography)}>
        © 2021 The Dolly Project
      </Typography>
    </footer>
  );
}

export default Footer;
