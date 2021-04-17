import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import GitHubIcon from '@material-ui/icons/GitHub';
import PaymentIcon from '@material-ui/icons/Payment';
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  Footer: {
    maxWidth: '100%',
    margin: 'auto',
    textAlign: 'center',
    background: '#2b2b2b',
  },
  Typography: {
    textAlign: 'center',
    color: 'white',
  },
  Divider: {
    background: 'white',
    margin: '24px auto',
    width: 60,
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <div className={clsx(classes.Footer)}>
      <CssBaseline />
      <Typography variant="caption" className={clsx(classes.Typography)}>
        © DollyProject <br />
        Copyrigth 2021
      </Typography>
      <Divider className={clsx(classes.Divider)} />
      <Grid container justify={'center'} spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <a
            href={
              'https://github.com/orgs/WildCodeSchool/teams/lyon-js-march21-g2-p2/repositories'
            }
          >
            <Typography className={clsx(classes.Typography)}>
              <GitHubIcon />
            </Typography>
          </a>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className={clsx(classes.Typography)}>Blog</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className={clsx(classes.Typography)}>
            Terms & Conditions
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className={clsx(classes.Typography)}>
            <PaymentIcon />
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;
