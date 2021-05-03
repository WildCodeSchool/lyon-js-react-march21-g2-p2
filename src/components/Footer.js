import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import PaymentIcon from '@material-ui/icons/Payment';
import clsx from 'clsx';

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
}));

function Footer() {
  const classes = useStyles();
  return (
    <footer className={clsx(classes.Footer)}>
      <Grid container justify={'center'}>
        <Grid item xs={12} sm={6} md={3}>
          <a href="https://github.com/orgs/WildCodeSchool/teams/lyon-js-march21-g2-p2/repositories">
            <Typography className={clsx(classes.Typography)}>
              <GitHubIcon />
            </Typography>
          </a>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className={clsx(classes.Typography)}>
            <PaymentIcon />
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="caption" className={clsx(classes.Typography)}>
        © 2021 The Dolly Project
      </Typography>
    </footer>
  );
}

export default Footer;
